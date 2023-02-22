! function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define([], t) : "object" == typeof exports ? exports.AOS = t() : e.AOS = t()
}(this, function() {
    return function(e) {
        function t(n) {
            if (i[n]) return i[n].exports;
            var s = i[n] = {
                exports: {},
                id: n,
                loaded: !1
            };
            return e[n].call(s.exports, s, s.exports, t), s.loaded = !0, s.exports
        }
        var i = {};
        return t.m = e, t.c = i, t.p = "dist/", t(0)
    }([function(e, t, i) {
        "use strict";

        function n(e) {
            return e && e.__esModule ? e : {
                default: e
            }
        }
        var s = Object.assign || function(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var i = arguments[t];
                    for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n])
                }
                return e
            },
            a = i(1),
            r = (n(a), i(6)),
            o = n(r),
            l = i(7),
            d = n(l),
            c = i(8),
            h = n(c),
            u = i(9),
            p = n(u),
            f = i(10),
            m = n(f),
            g = i(11),
            v = n(g),
            y = i(14),
            $ = n(y),
            b = [],
            w = !1,
            _ = {
                offset: 120,
                delay: 0,
                easing: "ease",
                duration: 400,
                disable: !1,
                once: !1,
                startEvent: "DOMContentLoaded",
                throttleDelay: 99,
                debounceDelay: 50,
                disableMutationObserver: !1
            },
            C = function() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                if (e && (w = !0), w) return b = (0, v.default)(b, _), (0, m.default)(b, _.once), b
            },
            x = function() {
                b = (0, $.default)(), C()
            },
            k = function() {
                b.forEach(function(e, t) {
                    e.node.removeAttribute("data-aos"), e.node.removeAttribute("data-aos-easing"), e.node.removeAttribute("data-aos-duration"), e.node.removeAttribute("data-aos-delay")
                })
            },
            T = function(e) {
                _ = s(_, e), b = (0, $.default)();
                var t, i = document.all && !window.atob;
                return !0 === (t = _.disable) || "mobile" === t && p.default.mobile() || "phone" === t && p.default.phone() || "tablet" === t && p.default.tablet() || "function" == typeof t && !0 === t() || i ? k() : (_.disableMutationObserver || h.default.isSupported() || (console.info('\n      aos: MutationObserver is not supported on this browser,\n      code mutations observing has been disabled.\n      You may have to call "refreshHard()" by yourself.\n    '), _.disableMutationObserver = !0), document.querySelector("body").setAttribute("data-aos-easing", _.easing), document.querySelector("body").setAttribute("data-aos-duration", _.duration), document.querySelector("body").setAttribute("data-aos-delay", _.delay), "DOMContentLoaded" === _.startEvent && ["complete", "interactive"].indexOf(document.readyState) > -1 ? C(!0) : "load" === _.startEvent ? window.addEventListener(_.startEvent, function() {
                    C(!0)
                }) : document.addEventListener(_.startEvent, function() {
                    C(!0)
                }), window.addEventListener("resize", (0, d.default)(C, _.debounceDelay, !0)), window.addEventListener("orientationchange", (0, d.default)(C, _.debounceDelay, !0)), window.addEventListener("scroll", (0, o.default)(function() {
                    (0, m.default)(b, _.once)
                }, _.throttleDelay)), _.disableMutationObserver || h.default.ready("[data-aos]", x), b)
            };
        e.exports = {
            init: T,
            refresh: C,
            refreshHard: x
        }
    }, function(e, t) {}, , , , , function(e, t) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = void 0 === e ? "undefined" : s(e);
                return !!e && ("object" == t || "function" == t)
            }

            function n(e) {
                if ("number" == typeof e) return e;
                if ("symbol" == (void 0 === (t = e) ? "undefined" : s(t)) || (n = t) && "object" == (void 0 === n ? "undefined" : s(n)) && g.call(t) == o) return r;
                if (i(e)) {
                    var t, n, a = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(a) ? a + "" : a
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(l, "");
                var p = c.test(e);
                return p || h.test(e) ? u(e.slice(2), p ? 2 : 8) : d.test(e) ? r : +e
            }
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                a = "Expected a function",
                r = NaN,
                o = "[object Symbol]",
                l = /^\s+|\s+$/g,
                d = /^[-+]0x[0-9a-f]+$/i,
                c = /^0b[01]+$/i,
                h = /^0o[0-7]+$/i,
                u = parseInt,
                p = "object" == (void 0 === t ? "undefined" : s(t)) && t && t.Object === Object && t,
                f = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                m = p || f || Function("return this")(),
                g = Object.prototype.toString,
                v = Math.max,
                y = Math.min,
                $ = function() {
                    return m.Date.now()
                };
            e.exports = function e(t, s, r) {
                var o = !0,
                    l = !0;
                if ("function" != typeof t) throw TypeError(a);
                return i(r) && (o = "leading" in r ? !!r.leading : o, l = "trailing" in r ? !!r.trailing : l),
                    function e(t, s, r) {
                        function o(e) {
                            var i = u,
                                n = p;
                            return u = p = void 0, w = e, m = t.apply(n, i)
                        }

                        function l(e) {
                            var t = e - b,
                                i = e - w;
                            return void 0 === b || t >= s || t < 0 || C && i >= f
                        }

                        function d() {
                            var e, t, i, n, a = $();
                            return l(a) ? c(a) : void(g = setTimeout(d, (t = (e = a) - b, i = e - w, n = s - t, C ? y(n, f - i) : n)))
                        }

                        function c(e) {
                            return g = void 0, x && u ? o(e) : (u = p = void 0, m)
                        }

                        function h() {
                            var e, t = $(),
                                i = l(t);
                            if (u = arguments, p = this, b = t, i) {
                                if (void 0 === g) return w = e = b, g = setTimeout(d, s), _ ? o(e) : m;
                                if (C) return g = setTimeout(d, s), o(b)
                            }
                            return void 0 === g && (g = setTimeout(d, s)), m
                        }
                        var u, p, f, m, g, b, w = 0,
                            _ = !1,
                            C = !1,
                            x = !0;
                        if ("function" != typeof t) throw TypeError(a);
                        return s = n(s) || 0, i(r) && (_ = !!r.leading, f = (C = "maxWait" in r) ? v(n(r.maxWait) || 0, s) : f, x = "trailing" in r ? !!r.trailing : x), h.cancel = function e() {
                            void 0 !== g && clearTimeout(g), w = 0, u = b = p = g = void 0
                        }, h.flush = function e() {
                            return void 0 === g ? m : c($())
                        }, h
                    }(t, s, {
                        leading: o,
                        maxWait: s,
                        trailing: l
                    })
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        (function(t) {
            "use strict";

            function i(e) {
                var t = void 0 === e ? "undefined" : s(e);
                return !!e && ("object" == t || "function" == t)
            }

            function n(e) {
                if ("number" == typeof e) return e;
                if ("symbol" == (void 0 === (t = e) ? "undefined" : s(t)) || (n = t) && "object" == (void 0 === n ? "undefined" : s(n)) && m.call(t) == r) return a;
                if (i(e)) {
                    var t, n, u = "function" == typeof e.valueOf ? e.valueOf() : e;
                    e = i(u) ? u + "" : u
                }
                if ("string" != typeof e) return 0 === e ? e : +e;
                e = e.replace(o, "");
                var p = d.test(e);
                return p || c.test(e) ? h(e.slice(2), p ? 2 : 8) : l.test(e) ? a : +e
            }
            var s = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
                    return typeof e
                } : function(e) {
                    return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
                },
                a = NaN,
                r = "[object Symbol]",
                o = /^\s+|\s+$/g,
                l = /^[-+]0x[0-9a-f]+$/i,
                d = /^0b[01]+$/i,
                c = /^0o[0-7]+$/i,
                h = parseInt,
                u = "object" == (void 0 === t ? "undefined" : s(t)) && t && t.Object === Object && t,
                p = "object" == ("undefined" == typeof self ? "undefined" : s(self)) && self && self.Object === Object && self,
                f = u || p || Function("return this")(),
                m = Object.prototype.toString,
                g = Math.max,
                v = Math.min,
                y = function() {
                    return f.Date.now()
                };
            e.exports = function e(t, s, a) {
                function r(e) {
                    var i = h,
                        n = u;
                    return h = u = void 0, b = e, f = t.apply(n, i)
                }

                function o(e) {
                    var t = e - $,
                        i = e - b;
                    return void 0 === $ || t >= s || t < 0 || _ && i >= p
                }

                function l() {
                    var e, t, i, n, a = y();
                    return o(a) ? d(a) : void(m = setTimeout(l, (t = (e = a) - $, i = e - b, n = s - t, _ ? v(n, p - i) : n)))
                }

                function d(e) {
                    return m = void 0, C && h ? r(e) : (h = u = void 0, f)
                }

                function c() {
                    var e, t = y(),
                        i = o(t);
                    if (h = arguments, u = this, $ = t, i) {
                        if (void 0 === m) return b = e = $, m = setTimeout(l, s), w ? r(e) : f;
                        if (_) return m = setTimeout(l, s), r($)
                    }
                    return void 0 === m && (m = setTimeout(l, s)), f
                }
                var h, u, p, f, m, $, b = 0,
                    w = !1,
                    _ = !1,
                    C = !0;
                if ("function" != typeof t) throw TypeError("Expected a function");
                return s = n(s) || 0, i(a) && (w = !!a.leading, p = (_ = "maxWait" in a) ? g(n(a.maxWait) || 0, s) : p, C = "trailing" in a ? !!a.trailing : C), c.cancel = function e() {
                    void 0 !== m && clearTimeout(m), b = 0, h = $ = u = m = void 0
                }, c.flush = function e() {
                    return void 0 === m ? f : d(y())
                }, c
            }
        }).call(t, function() {
            return this
        }())
    }, function(e, t) {
        "use strict";

        function i() {
            return window.MutationObserver || window.WebKitMutationObserver || window.MozMutationObserver
        }

        function n(e) {
            e && e.forEach(function(e) {
                var t = Array.prototype.slice.call(e.addedNodes),
                    i = Array.prototype.slice.call(e.removedNodes);
                if (function e(t) {
                        var i = void 0,
                            n = void 0,
                            s = void 0;
                        for (i = 0; i < t.length; i += 1)
                            if ((n = t[i]).dataset && n.dataset.aos || (s = n.children && e(n.children))) return !0;
                        return !1
                    }(t.concat(i))) return s()
            })
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var s = function() {};
        t.default = {
            isSupported: function e() {
                return !!i()
            },
            ready: function e(t, a) {
                var r = window.document,
                    o = new(i())(n);
                s = a, o.observe(r.documentElement, {
                    childList: !0,
                    subtree: !0,
                    removedNodes: !0
                })
            }
        }
    }, function(e, t) {
        "use strict";

        function i() {
            return navigator.userAgent || navigator.vendor || window.opera || ""
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n = function() {
                function e(e, t) {
                    for (var i = 0; i < t.length; i++) {
                        var n = t[i];
                        n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
                    }
                }
                return function(t, i, n) {
                    return i && e(t.prototype, i), n && e(t, n), t
                }
            }(),
            s = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i,
            a = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            r = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i,
            o = /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i,
            l = function() {
                function e() {
                    ! function e(t, i) {
                        if (!(t instanceof i)) throw TypeError("Cannot call a class as a function")
                    }(this, e)
                }
                return n(e, [{
                    key: "phone",
                    value: function() {
                        var e = i();
                        return !(!s.test(e) && !a.test(e.substr(0, 4)))
                    }
                }, {
                    key: "mobile",
                    value: function() {
                        var e = i();
                        return !(!r.test(e) && !o.test(e.substr(0, 4)))
                    }
                }, {
                    key: "tablet",
                    value: function() {
                        return this.mobile() && !this.phone()
                    }
                }]), e
            }();
        t.default = new l
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e, t, i) {
                var n = e.node.getAttribute("data-aos-once");
                t > e.position ? e.node.classList.add("aos-animate") : void 0 === n || "false" !== n && (i || "true" === n) || e.node.classList.remove("aos-animate")
            },
            n = function(e, t) {
                var n = window.pageYOffset,
                    s = window.innerHeight;
                e.forEach(function(e, a) {
                    i(e, s + n, t)
                })
            };
        t.default = n
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, s = (n = i(12)) && n.__esModule ? n : {
                default: n
            },
            a = function(e, t) {
                return e.forEach(function(e, i) {
                    e.node.classList.add("aos-init"), e.position = (0, s.default)(e.node, t.offset)
                }), e
            };
        t.default = a
    }, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var n, s = (n = i(13)) && n.__esModule ? n : {
                default: n
            },
            a = function(e, t) {
                var i = 0,
                    n = 0,
                    a = window.innerHeight,
                    r = {
                        offset: e.getAttribute("data-aos-offset"),
                        anchor: e.getAttribute("data-aos-anchor"),
                        anchorPlacement: e.getAttribute("data-aos-anchor-placement")
                    };
                switch (r.offset && !isNaN(r.offset) && (n = parseInt(r.offset)), r.anchor && document.querySelectorAll(r.anchor) && (e = document.querySelectorAll(r.anchor)[0]), i = (0, s.default)(e).top, r.anchorPlacement) {
                    case "top-bottom":
                        break;
                    case "center-bottom":
                        i += e.offsetHeight / 2;
                        break;
                    case "bottom-bottom":
                        i += e.offsetHeight;
                        break;
                    case "top-center":
                        i += a / 2;
                        break;
                    case "bottom-center":
                        i += a / 2 + e.offsetHeight;
                        break;
                    case "center-center":
                        i += a / 2 + e.offsetHeight / 2;
                        break;
                    case "top-top":
                        i += a;
                        break;
                    case "bottom-top":
                        i += e.offsetHeight + a;
                        break;
                    case "center-top":
                        i += e.offsetHeight / 2 + a
                }
                return r.anchorPlacement || r.offset || isNaN(t) || (n = t), i + n
            };
        t.default = a
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e) {
            for (var t = 0, i = 0; e && !isNaN(e.offsetLeft) && !isNaN(e.offsetTop);) t += e.offsetLeft - ("BODY" != e.tagName ? e.scrollLeft : 0), i += e.offsetTop - ("BODY" != e.tagName ? e.scrollTop : 0), e = e.offsetParent;
            return {
                top: i,
                left: t
            }
        };
        t.default = i
    }, function(e, t) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var i = function(e) {
            return e = e || document.querySelectorAll("[data-aos]"), Array.prototype.map.call(e, function(e) {
                return {
                    node: e
                }
            })
        };
        t.default = i
    }])
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).bootstrap = t()
}(this, function() {
    "use strict";
    let e = "transitionend",
        t = e => {
            let t = e.getAttribute("data-bs-target");
            if (!t || "#" === t) {
                let i = e.getAttribute("href");
                if (!i || !i.includes("#") && !i.startsWith(".")) return null;
                i.includes("#") && !i.startsWith("#") && (i = `#${i.split("#")[1]}`), t = i && "#" !== i ? i.trim() : null
            }
            return t
        },
        i = e => {
            let i = t(e);
            return i && document.querySelector(i) ? i : null
        },
        n = e => {
            let i = t(e);
            return i ? document.querySelector(i) : null
        },
        s = t => {
            t.dispatchEvent(new Event(e))
        },
        a = e => !(!e || "object" != typeof e) && (void 0 !== e.jquery && (e = e[0]), void 0 !== e.nodeType),
        r = e => a(e) ? e.jquery ? e[0] : e : "string" == typeof e && e.length > 0 ? document.querySelector(e) : null,
        o = e => {
            if (!a(e) || 0 === e.getClientRects().length) return !1;
            let t = "visible" === getComputedStyle(e).getPropertyValue("visibility"),
                i = e.closest("details:not([open])");
            if (!i) return t;
            if (i !== e) {
                let n = e.closest("summary");
                if (n && n.parentNode !== i || null === n) return !1
            }
            return t
        },
        l = e => !e || e.nodeType !== Node.ELEMENT_NODE || !!e.classList.contains("disabled") || (void 0 !== e.disabled ? e.disabled : e.hasAttribute("disabled") && "false" !== e.getAttribute("disabled")),
        d = e => {
            if (!document.documentElement.attachShadow) return null;
            if ("function" == typeof e.getRootNode) {
                let t = e.getRootNode();
                return t instanceof ShadowRoot ? t : null
            }
            return e instanceof ShadowRoot ? e : e.parentNode ? d(e.parentNode) : null
        },
        c = () => {},
        h = e => {
            e.offsetHeight
        },
        u = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null,
        p = [],
        f = () => "rtl" === document.documentElement.dir,
        m = e => {
            var t;
            t = () => {
                let t = u();
                if (t) {
                    let i = e.NAME,
                        n = t.fn[i];
                    t.fn[i] = e.jQueryInterface, t.fn[i].Constructor = e, t.fn[i].noConflict = () => (t.fn[i] = n, e.jQueryInterface)
                }
            }, "loading" === document.readyState ? (p.length || document.addEventListener("DOMContentLoaded", () => {
                for (let e of p) e()
            }), p.push(t)) : t()
        },
        g = e => {
            "function" == typeof e && e()
        },
        v = (t, i, n = !0) => {
            if (!n) return void g(t);
            let a = (e => {
                    if (!e) return 0;
                    let {
                        transitionDuration: t,
                        transitionDelay: i
                    } = window.getComputedStyle(e), n = Number.parseFloat(t), s = Number.parseFloat(i);
                    return n || s ? (t = t.split(",")[0], i = i.split(",")[0], 1e3 * (Number.parseFloat(t) + Number.parseFloat(i))) : 0
                })(i) + 5,
                r = !1,
                o = ({
                    target: n
                }) => {
                    n === i && (r = !0, i.removeEventListener(e, o), g(t))
                };
            i.addEventListener(e, o), setTimeout(() => {
                r || s(i)
            }, a)
        },
        y = (e, t, i, n) => {
            let s = e.length,
                a = e.indexOf(t);
            return -1 === a ? !i && n ? e[s - 1] : e[0] : (a += i ? 1 : -1, n && (a = (a + s) % s), e[Math.max(0, Math.min(a, s - 1))])
        },
        $ = /[^.]*(?=\..*)\.|.*/,
        b = /\..*/,
        w = /::\d+$/,
        _ = {},
        C = 1,
        x = {
            mouseenter: "mouseover",
            mouseleave: "mouseout"
        },
        k = new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);

    function T(e, t) {
        return t && `${t}::${C++}` || e.uidEvent || C++
    }

    function E(e) {
        let t = T(e);
        return e.uidEvent = t, _[t] = _[t] || {}, _[t]
    }

    function S(e, t, i = null) {
        return Object.values(e).find(e => e.callable === t && e.delegationSelector === i)
    }

    function D(e, t, i) {
        let n = "string" == typeof t,
            s = L(e);
        return k.has(s) || (s = e), [n, n ? i : t || i, s]
    }

    function M(e, t, i, n, s) {
        var a, r, o, l, d, c;
        if ("string" != typeof t || !e) return;
        let [h, u, p] = D(t, i, n);
        t in x && (u = (a = u, function(e) {
            if (!e.relatedTarget || e.relatedTarget !== e.delegateTarget && !e.delegateTarget.contains(e.relatedTarget)) return a.call(this, e)
        }));
        let f = E(e),
            m = f[p] || (f[p] = {}),
            g = S(m, u, h ? i : null);
        if (g) return void(g.oneOff = g.oneOff && s);
        let v = T(u, t.replace($, "")),
            y = h ? (r = e, o = i, l = u, function e(t) {
                let i = r.querySelectorAll(o);
                for (let {
                        target: n
                    } = t; n && n !== this; n = n.parentNode)
                    for (let s of i)
                        if (s === n) return O(t, {
                            delegateTarget: n
                        }), e.oneOff && I.off(r, t.type, o, l), l.apply(n, [t])
            }) : (d = e, c = u, function e(t) {
                return O(t, {
                    delegateTarget: d
                }), e.oneOff && I.off(d, t.type, c), c.apply(d, [t])
            });
        y.delegationSelector = h ? i : null, y.callable = u, y.oneOff = s, y.uidEvent = v, m[v] = y, e.addEventListener(p, y, h)
    }

    function A(e, t, i, n, s) {
        let a = S(t[i], n, s);
        a && (e.removeEventListener(i, a, Boolean(s)), delete t[i][a.uidEvent])
    }

    function P(e, t, i, n) {
        let s = t[i] || {};
        for (let a of Object.keys(s))
            if (a.includes(n)) {
                let r = s[a];
                A(e, t, i, r.callable, r.delegationSelector)
            }
    }

    function L(e) {
        return x[e = e.replace(b, "")] || e
    }
    let I = {
        on(e, t, i, n) {
            M(e, t, i, n, !1)
        },
        one(e, t, i, n) {
            M(e, t, i, n, !0)
        },
        off(e, t, i, n) {
            if ("string" != typeof t || !e) return;
            let [s, a, r] = D(t, i, n), o = r !== t, l = E(e), d = l[r] || {}, c = t.startsWith(".");
            if (void 0 === a) {
                if (c)
                    for (let h of Object.keys(l)) P(e, l, h, t.slice(1));
                for (let u of Object.keys(d)) {
                    let p = u.replace(w, "");
                    if (!o || t.includes(p)) {
                        let f = d[u];
                        A(e, l, r, f.callable, f.delegationSelector)
                    }
                }
            } else {
                if (!Object.keys(d).length) return;
                A(e, l, r, a, s ? i : null)
            }
        },
        trigger(e, t, i) {
            if ("string" != typeof t || !e) return null;
            let n = u(),
                s = null,
                a = !0,
                r = !0,
                o = !1;
            t !== L(t) && n && (s = n.Event(t, i), n(e).trigger(s), a = !s.isPropagationStopped(), r = !s.isImmediatePropagationStopped(), o = s.isDefaultPrevented());
            let l = new Event(t, {
                bubbles: a,
                cancelable: !0
            });
            return l = O(l, i), o && l.preventDefault(), r && e.dispatchEvent(l), l.defaultPrevented && s && s.preventDefault(), l
        }
    };

    function O(e, t) {
        for (let [i, n] of Object.entries(t || {})) try {
            e[i] = n
        } catch (s) {
            Object.defineProperty(e, i, {
                configurable: !0,
                get: () => n
            })
        }
        return e
    }
    let N = new Map,
        z = {
            set(e, t, i) {
                N.has(e) || N.set(e, new Map);
                let n = N.get(e);
                n.has(t) || 0 === n.size ? n.set(t, i) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)
            },
            get: (e, t) => N.has(e) && N.get(e).get(t) || null,
            remove(e, t) {
                if (!N.has(e)) return;
                let i = N.get(e);
                i.delete(t), 0 === i.size && N.delete(e)
            }
        };

    function H(e) {
        if ("true" === e) return !0;
        if ("false" === e) return !1;
        if (e === Number(e).toString()) return Number(e);
        if ("" === e || "null" === e) return null;
        if ("string" != typeof e) return e;
        try {
            return JSON.parse(decodeURIComponent(e))
        } catch (t) {
            return e
        }
    }

    function Y(e) {
        return e.replace(/[A-Z]/g, e => `-${e.toLowerCase()}`)
    }
    let B = {
        setDataAttribute(e, t, i) {
            e.setAttribute(`data-bs-${Y(t)}`, i)
        },
        removeDataAttribute(e, t) {
            e.removeAttribute(`data-bs-${Y(t)}`)
        },
        getDataAttributes(e) {
            if (!e) return {};
            let t = {},
                i = Object.keys(e.dataset).filter(e => e.startsWith("bs") && !e.startsWith("bsConfig"));
            for (let n of i) {
                let s = n.replace(/^bs/, "");
                t[s = s.charAt(0).toLowerCase() + s.slice(1, s.length)] = H(e.dataset[n])
            }
            return t
        },
        getDataAttribute: (e, t) => H(e.getAttribute(`data-bs-${Y(t)}`))
    };
    class q {
        static get Default() {
            return {}
        }
        static get DefaultType() {
            return {}
        }
        static get NAME() {
            throw Error('You have to implement the static method "NAME", for each component!')
        }
        _getConfig(e) {
            return e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
        }
        _configAfterMerge(e) {
            return e
        }
        _mergeConfigObj(e, t) {
            let i = a(t) ? B.getDataAttribute(t, "config") : {};
            return {
                ...this.constructor.Default,
                ..."object" == typeof i ? i : {},
                ...a(t) ? B.getDataAttributes(t) : {},
                ..."object" == typeof e ? e : {}
            }
        }
        _typeCheckConfig(e, t = this.constructor.DefaultType) {
            var i;
            for (let n of Object.keys(t)) {
                let s = t[n],
                    r = e[n],
                    o = a(r) ? "element" : null == (i = r) ? `${i}` : Object.prototype.toString.call(i).match(/\s([a-z]+)/i)[1].toLowerCase();
                if (!RegExp(s).test(o)) throw TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${n}" provided type "${o}" but expected type "${s}".`)
            }
        }
    }
    class W extends q {
        constructor(e, t) {
            super(), (e = r(e)) && (this._element = e, this._config = this._getConfig(t), z.set(this._element, this.constructor.DATA_KEY, this))
        }
        dispose() {
            for (let e of (z.remove(this._element, this.constructor.DATA_KEY), I.off(this._element, this.constructor.EVENT_KEY), Object.getOwnPropertyNames(this))) this[e] = null
        }
        _queueCallback(e, t, i = !0) {
            v(e, t, i)
        }
        _getConfig(e) {
            return e = this._mergeConfigObj(e, this._element), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
        }
        static getInstance(e) {
            return z.get(r(e), this.DATA_KEY)
        }
        static getOrCreateInstance(e, t = {}) {
            return this.getInstance(e) || new this(e, "object" == typeof t ? t : null)
        }
        static get VERSION() {
            return "5.2.0"
        }
        static get DATA_KEY() {
            return `bs.${this.NAME}`
        }
        static get EVENT_KEY() {
            return `.${this.DATA_KEY}`
        }
        static eventName(e) {
            return `${e}${this.EVENT_KEY}`
        }
    }
    let F = (e, t = "hide") => {
        let i = `click.dismiss${e.EVENT_KEY}`,
            s = e.NAME;
        I.on(document, i, `[data-bs-dismiss="${s}"]`, function(i) {
            if (["A", "AREA"].includes(this.tagName) && i.preventDefault(), l(this)) return;
            let a = n(this) || this.closest(`.${s}`);
            e.getOrCreateInstance(a)[t]()
        })
    };
    class R extends W {
        static get NAME() {
            return "alert"
        }
        close() {
            if (I.trigger(this._element, "close.bs.alert").defaultPrevented) return;
            this._element.classList.remove("show");
            let e = this._element.classList.contains("fade");
            this._queueCallback(() => this._destroyElement(), this._element, e)
        }
        _destroyElement() {
            this._element.remove(), I.trigger(this._element, "closed.bs.alert"), this.dispose()
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = R.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    F(R, "close"), m(R);
    let j = '[data-bs-toggle="button"]';
    class V extends W {
        static get NAME() {
            return "button"
        }
        toggle() {
            this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"))
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = V.getOrCreateInstance(this);
                "toggle" === e && t[e]()
            })
        }
    }
    I.on(document, "click.bs.button.data-api", j, e => {
        e.preventDefault();
        let t = e.target.closest(j);
        V.getOrCreateInstance(t).toggle()
    }), m(V);
    let X = {
            find: (e, t = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(t, e)),
            findOne: (e, t = document.documentElement) => Element.prototype.querySelector.call(t, e),
            children: (e, t) => [].concat(...e.children).filter(e => e.matches(t)),
            parents(e, t) {
                let i = [],
                    n = e.parentNode.closest(t);
                for (; n;) i.push(n), n = n.parentNode.closest(t);
                return i
            },
            prev(e, t) {
                let i = e.previousElementSibling;
                for (; i;) {
                    if (i.matches(t)) return [i];
                    i = i.previousElementSibling
                }
                return []
            },
            next(e, t) {
                let i = e.nextElementSibling;
                for (; i;) {
                    if (i.matches(t)) return [i];
                    i = i.nextElementSibling
                }
                return []
            },
            focusableChildren(e) {
                let t = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map(e => `${e}:not([tabindex^="-"])`).join(",");
                return this.find(t, e).filter(e => !l(e) && o(e))
            }
        },
        G = {
            endCallback: null,
            leftCallback: null,
            rightCallback: null
        },
        U = {
            endCallback: "(function|null)",
            leftCallback: "(function|null)",
            rightCallback: "(function|null)"
        };
    class K extends q {
        constructor(e, t) {
            super(), this._element = e, e && K.isSupported() && (this._config = this._getConfig(t), this._deltaX = 0, this._supportPointerEvents = Boolean(window.PointerEvent), this._initEvents())
        }
        static get Default() {
            return G
        }
        static get DefaultType() {
            return U
        }
        static get NAME() {
            return "swipe"
        }
        dispose() {
            I.off(this._element, ".bs.swipe")
        }
        _start(e) {
            this._supportPointerEvents ? this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX) : this._deltaX = e.touches[0].clientX
        }
        _end(e) {
            this._eventIsPointerPenTouch(e) && (this._deltaX = e.clientX - this._deltaX), this._handleSwipe(), g(this._config.endCallback)
        }
        _move(e) {
            this._deltaX = e.touches && e.touches.length > 1 ? 0 : e.touches[0].clientX - this._deltaX
        }
        _handleSwipe() {
            let e = Math.abs(this._deltaX);
            if (e <= 40) return;
            let t = e / this._deltaX;
            this._deltaX = 0, t && g(t > 0 ? this._config.rightCallback : this._config.leftCallback)
        }
        _initEvents() {
            this._supportPointerEvents ? (I.on(this._element, "pointerdown.bs.swipe", e => this._start(e)), I.on(this._element, "pointerup.bs.swipe", e => this._end(e)), this._element.classList.add("pointer-event")) : (I.on(this._element, "touchstart.bs.swipe", e => this._start(e)), I.on(this._element, "touchmove.bs.swipe", e => this._move(e)), I.on(this._element, "touchend.bs.swipe", e => this._end(e)))
        }
        _eventIsPointerPenTouch(e) {
            return this._supportPointerEvents && ("pen" === e.pointerType || "touch" === e.pointerType)
        }
        static isSupported() {
            return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0
        }
    }
    let Q = "next",
        Z = "prev",
        J = "left",
        ee = "right",
        et = "slid.bs.carousel",
        ei = "carousel",
        en = "active",
        es = {
            ArrowLeft: ee,
            ArrowRight: J
        },
        ea = {
            interval: 5e3,
            keyboard: !0,
            pause: "hover",
            ride: !1,
            touch: !0,
            wrap: !0
        },
        er = {
            interval: "(number|boolean)",
            keyboard: "boolean",
            pause: "(string|boolean)",
            ride: "(boolean|string)",
            touch: "boolean",
            wrap: "boolean"
        };
    class eo extends W {
        constructor(e, t) {
            super(e, t), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = X.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === ei && this.cycle()
        }
        static get Default() {
            return ea
        }
        static get DefaultType() {
            return er
        }
        static get NAME() {
            return "carousel"
        }
        next() {
            this._slide(Q)
        }
        nextWhenVisible() {
            !document.hidden && o(this._element) && this.next()
        }
        prev() {
            this._slide(Z)
        }
        pause() {
            this._isSliding && s(this._element), this._clearInterval()
        }
        cycle() {
            this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval)
        }
        _maybeEnableCycle() {
            this._config.ride && (this._isSliding ? I.one(this._element, et, () => this.cycle()) : this.cycle())
        }
        to(e) {
            let t = this._getItems();
            if (e > t.length - 1 || e < 0) return;
            if (this._isSliding) return void I.one(this._element, et, () => this.to(e));
            let i = this._getItemIndex(this._getActive());
            i !== e && this._slide(e > i ? Q : Z, t[e])
        }
        dispose() {
            this._swipeHelper && this._swipeHelper.dispose(), super.dispose()
        }
        _configAfterMerge(e) {
            return e.defaultInterval = e.interval, e
        }
        _addEventListeners() {
            this._config.keyboard && I.on(this._element, "keydown.bs.carousel", e => this._keydown(e)), "hover" === this._config.pause && (I.on(this._element, "mouseenter.bs.carousel", () => this.pause()), I.on(this._element, "mouseleave.bs.carousel", () => this._maybeEnableCycle())), this._config.touch && K.isSupported() && this._addTouchEventListeners()
        }
        _addTouchEventListeners() {
            for (let e of X.find(".carousel-item img", this._element)) I.on(e, "dragstart.bs.carousel", e => e.preventDefault());
            this._swipeHelper = new K(this._element, {
                leftCallback: () => this._slide(this._directionToOrder(J)),
                rightCallback: () => this._slide(this._directionToOrder(ee)),
                endCallback: () => {
                    "hover" === this._config.pause && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval))
                }
            })
        }
        _keydown(e) {
            if (/input|textarea/i.test(e.target.tagName)) return;
            let t = es[e.key];
            t && (e.preventDefault(), this._slide(this._directionToOrder(t)))
        }
        _getItemIndex(e) {
            return this._getItems().indexOf(e)
        }
        _setActiveIndicatorElement(e) {
            if (!this._indicatorsElement) return;
            let t = X.findOne(".active", this._indicatorsElement);
            t.classList.remove(en), t.removeAttribute("aria-current");
            let i = X.findOne(`[data-bs-slide-to="${e}"]`, this._indicatorsElement);
            i && (i.classList.add(en), i.setAttribute("aria-current", "true"))
        }
        _updateInterval() {
            let e = this._activeElement || this._getActive();
            if (!e) return;
            let t = Number.parseInt(e.getAttribute("data-bs-interval"), 10);
            this._config.interval = t || this._config.defaultInterval
        }
        _slide(e, t = null) {
            if (this._isSliding) return;
            let i = this._getActive(),
                n = e === Q,
                s = t || y(this._getItems(), i, n, this._config.wrap);
            if (s === i) return;
            let a = this._getItemIndex(s),
                r = t => I.trigger(this._element, t, {
                    relatedTarget: s,
                    direction: this._orderToDirection(e),
                    from: this._getItemIndex(i),
                    to: a
                });
            if (r("slide.bs.carousel").defaultPrevented || !i || !s) return;
            let o = Boolean(this._interval);
            this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(a), this._activeElement = s;
            let l = n ? "carousel-item-start" : "carousel-item-end",
                d = n ? "carousel-item-next" : "carousel-item-prev";
            s.classList.add(d), h(s), i.classList.add(l), s.classList.add(l), this._queueCallback(() => {
                s.classList.remove(l, d), s.classList.add(en), i.classList.remove(en, d, l), this._isSliding = !1, r(et)
            }, i, this._isAnimated()), o && this.cycle()
        }
        _isAnimated() {
            return this._element.classList.contains("slide")
        }
        _getActive() {
            return X.findOne(".active.carousel-item", this._element)
        }
        _getItems() {
            return X.find(".carousel-item", this._element)
        }
        _clearInterval() {
            this._interval && (clearInterval(this._interval), this._interval = null)
        }
        _directionToOrder(e) {
            return f() ? e === J ? Z : Q : e === J ? Q : Z
        }
        _orderToDirection(e) {
            return f() ? e === Z ? J : ee : e === Z ? ee : J
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = eo.getOrCreateInstance(this, e);
                if ("number" != typeof e) {
                    if ("string" == typeof e) {
                        if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                        t[e]()
                    }
                } else t.to(e)
            })
        }
    }
    I.on(document, "click.bs.carousel.data-api", "[data-bs-slide], [data-bs-slide-to]", function(e) {
        let t = n(this);
        if (!t || !t.classList.contains(ei)) return;
        e.preventDefault();
        let i = eo.getOrCreateInstance(t),
            s = this.getAttribute("data-bs-slide-to");
        return s ? (i.to(s), void i._maybeEnableCycle()) : "next" === B.getDataAttribute(this, "slide") ? (i.next(), void i._maybeEnableCycle()) : (i.prev(), void i._maybeEnableCycle())
    }), I.on(window, "load.bs.carousel.data-api", () => {
        let e = X.find('[data-bs-ride="carousel"]');
        for (let t of e) eo.getOrCreateInstance(t)
    }), m(eo);
    let el = "show",
        ed = "collapse",
        ec = "collapsing",
        eh = '[data-bs-toggle="collapse"]',
        eu = {
            parent: null,
            toggle: !0
        },
        ep = {
            parent: "(null|element)",
            toggle: "boolean"
        };
    class ef extends W {
        constructor(e, t) {
            super(e, t), this._isTransitioning = !1, this._triggerArray = [];
            let n = X.find(eh);
            for (let s of n) {
                let a = i(s),
                    r = X.find(a).filter(e => e === this._element);
                null !== a && r.length && this._triggerArray.push(s)
            }
            this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle()
        }
        static get Default() {
            return eu
        }
        static get DefaultType() {
            return ep
        }
        static get NAME() {
            return "collapse"
        }
        toggle() {
            this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (this._isTransitioning || this._isShown()) return;
            let e = [];
            if (this._config.parent && (e = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter(e => e !== this._element).map(e => ef.getOrCreateInstance(e, {
                    toggle: !1
                }))), e.length && e[0]._isTransitioning || I.trigger(this._element, "show.bs.collapse").defaultPrevented) return;
            for (let t of e) t.hide();
            let i = this._getDimension();
            this._element.classList.remove(ed), this._element.classList.add(ec), this._element.style[i] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
            let n = `scroll${i[0].toUpperCase()+i.slice(1)}`;
            this._queueCallback(() => {
                this._isTransitioning = !1, this._element.classList.remove(ec), this._element.classList.add(ed, el), this._element.style[i] = "", I.trigger(this._element, "shown.bs.collapse")
            }, this._element, !0), this._element.style[i] = `${this._element[n]}px`
        }
        hide() {
            if (this._isTransitioning || !this._isShown() || I.trigger(this._element, "hide.bs.collapse").defaultPrevented) return;
            let e = this._getDimension();
            for (let t of (this._element.style[e] = `${this._element.getBoundingClientRect()[e]}px`, h(this._element), this._element.classList.add(ec), this._element.classList.remove(ed, el), this._triggerArray)) {
                let i = n(t);
                i && !this._isShown(i) && this._addAriaAndCollapsedClass([t], !1)
            }
            this._isTransitioning = !0, this._element.style[e] = "", this._queueCallback(() => {
                this._isTransitioning = !1, this._element.classList.remove(ec), this._element.classList.add(ed), I.trigger(this._element, "hidden.bs.collapse")
            }, this._element, !0)
        }
        _isShown(e = this._element) {
            return e.classList.contains(el)
        }
        _configAfterMerge(e) {
            return e.toggle = Boolean(e.toggle), e.parent = r(e.parent), e
        }
        _getDimension() {
            return this._element.classList.contains("collapse-horizontal") ? "width" : "height"
        }
        _initializeChildren() {
            if (!this._config.parent) return;
            let e = this._getFirstLevelChildren(eh);
            for (let t of e) {
                let i = n(t);
                i && this._addAriaAndCollapsedClass([t], this._isShown(i))
            }
        }
        _getFirstLevelChildren(e) {
            let t = X.find(":scope .collapse .collapse", this._config.parent);
            return X.find(e, this._config.parent).filter(e => !t.includes(e))
        }
        _addAriaAndCollapsedClass(e, t) {
            if (e.length)
                for (let i of e) i.classList.toggle("collapsed", !t), i.setAttribute("aria-expanded", t)
        }
        static jQueryInterface(e) {
            let t = {};
            return "string" == typeof e && /show|hide/.test(e) && (t.toggle = !1), this.each(function() {
                let i = ef.getOrCreateInstance(this, t);
                if ("string" == typeof e) {
                    if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
                    i[e]()
                }
            })
        }
    }
    I.on(document, "click.bs.collapse.data-api", eh, function(e) {
        ("A" === e.target.tagName || e.delegateTarget && "A" === e.delegateTarget.tagName) && e.preventDefault();
        let t = i(this),
            n = X.find(t);
        for (let s of n) ef.getOrCreateInstance(s, {
            toggle: !1
        }).toggle()
    }), m(ef);
    var em = "top",
        eg = "bottom",
        ev = "right",
        ey = "left",
        e$ = "auto",
        eb = [em, eg, ev, ey],
        ew = "start",
        e_ = "clippingParents",
        eC = "viewport",
        e8 = "popper",
        ex = "reference",
        ek = eb.reduce(function(e, t) {
            return e.concat([t + "-" + ew, t + "-end"])
        }, []),
        eT = [].concat(eb, [e$]).reduce(function(e, t) {
            return e.concat([t, t + "-" + ew, t + "-end"])
        }, []),
        eE = "beforeRead",
        eS = "read",
        eD = "afterRead",
        eM = "beforeMain",
        eA = "main",
        eP = "afterMain",
        eL = "beforeWrite",
        eI = "write",
        e9 = "afterWrite",
        eO = [eE, eS, eD, eM, eA, eP, eL, eI, e9];

    function eN(e) {
        return e ? (e.nodeName || "").toLowerCase() : null
    }

    function ez(e) {
        if (null == e) return window;
        if ("[object Window]" !== e.toString()) {
            var t = e.ownerDocument;
            return t && t.defaultView || window
        }
        return e
    }

    function e0(e) {
        return e instanceof ez(e).Element || e instanceof Element
    }

    function eH(e) {
        return e instanceof ez(e).HTMLElement || e instanceof HTMLElement
    }

    function eY(e) {
        return "undefined" != typeof ShadowRoot && (e instanceof ez(e).ShadowRoot || e instanceof ShadowRoot)
    }
    let eB = {
        name: "applyStyles",
        enabled: !0,
        phase: "write",
        fn: function(e) {
            var t = e.state;
            Object.keys(t.elements).forEach(function(e) {
                var i = t.styles[e] || {},
                    n = t.attributes[e] || {},
                    s = t.elements[e];
                eH(s) && eN(s) && (Object.assign(s.style, i), Object.keys(n).forEach(function(e) {
                    var t = n[e];
                    !1 === t ? s.removeAttribute(e) : s.setAttribute(e, !0 === t ? "" : t)
                }))
            })
        },
        effect: function(e) {
            var t = e.state,
                i = {
                    popper: {
                        position: t.options.strategy,
                        left: "0",
                        top: "0",
                        margin: "0"
                    },
                    arrow: {
                        position: "absolute"
                    },
                    reference: {}
                };
            return Object.assign(t.elements.popper.style, i.popper), t.styles = i, t.elements.arrow && Object.assign(t.elements.arrow.style, i.arrow),
                function() {
                    Object.keys(t.elements).forEach(function(e) {
                        var n = t.elements[e],
                            s = t.attributes[e] || {},
                            a = Object.keys(t.styles.hasOwnProperty(e) ? t.styles[e] : i[e]).reduce(function(e, t) {
                                return e[t] = "", e
                            }, {});
                        eH(n) && eN(n) && (Object.assign(n.style, a), Object.keys(s).forEach(function(e) {
                            n.removeAttribute(e)
                        }))
                    })
                }
        },
        requires: ["computeStyles"]
    };

    function eq(e) {
        return e.split("-")[0]
    }
    var eW = Math.max,
        e1 = Math.min,
        e3 = Math.round;

    function eF(e, t) {
        void 0 === t && (t = !1);
        var i = e.getBoundingClientRect(),
            n = 1,
            s = 1;
        if (eH(e) && t) {
            var a = e.offsetHeight,
                r = e.offsetWidth;
            r > 0 && (n = e3(i.width) / r || 1), a > 0 && (s = e3(i.height) / a || 1)
        }
        return {
            width: i.width / n,
            height: i.height / s,
            top: i.top / s,
            right: i.right / n,
            bottom: i.bottom / s,
            left: i.left / n,
            x: i.left / n,
            y: i.top / s
        }
    }

    function eR(e) {
        var t = eF(e),
            i = e.offsetWidth,
            n = e.offsetHeight;
        return 1 >= Math.abs(t.width - i) && (i = t.width), 1 >= Math.abs(t.height - n) && (n = t.height), {
            x: e.offsetLeft,
            y: e.offsetTop,
            width: i,
            height: n
        }
    }

    function ej(e, t) {
        var i = t.getRootNode && t.getRootNode();
        if (e.contains(t)) return !0;
        if (i && eY(i)) {
            var n = t;
            do {
                if (n && e.isSameNode(n)) return !0;
                n = n.parentNode || n.host
            } while (n)
        }
        return !1
    }

    function eV(e) {
        return ez(e).getComputedStyle(e)
    }

    function e2(e) {
        return ["table", "td", "th"].indexOf(eN(e)) >= 0
    }

    function e5(e) {
        return ((e0(e) ? e.ownerDocument : e.document) || window.document).documentElement
    }

    function eX(e) {
        return "html" === eN(e) ? e : e.assignedSlot || e.parentNode || (eY(e) ? e.host : null) || e5(e)
    }

    function e4(e) {
        return eH(e) && "fixed" !== eV(e).position ? e.offsetParent : null
    }

    function e7(e) {
        for (var t = ez(e), i = e4(e); i && e2(i) && "static" === eV(i).position;) i = e4(i);
        return i && ("html" === eN(i) || "body" === eN(i) && "static" === eV(i).position) ? t : i || function(e) {
            var t = -1 !== navigator.userAgent.toLowerCase().indexOf("firefox");
            if (-1 !== navigator.userAgent.indexOf("Trident") && eH(e) && "fixed" === eV(e).position) return null;
            var i = eX(e);
            for (eY(i) && (i = i.host); eH(i) && 0 > ["html", "body"].indexOf(eN(i));) {
                var n = eV(i);
                if ("none" !== n.transform || "none" !== n.perspective || "paint" === n.contain || -1 !== ["transform", "perspective"].indexOf(n.willChange) || t && "filter" === n.willChange || t && n.filter && "none" !== n.filter) return i;
                i = i.parentNode
            }
            return null
        }(e) || t
    }

    function e6(e) {
        return ["top", "bottom"].indexOf(e) >= 0 ? "x" : "y"
    }

    function eG(e, t, i) {
        return eW(e, e1(t, i))
    }

    function eU(e) {
        return Object.assign({}, {
            top: 0,
            right: 0,
            bottom: 0,
            left: 0
        }, e)
    }

    function eK(e, t) {
        return t.reduce(function(t, i) {
            return t[i] = e, t
        }, {})
    }
    let eQ = {
        name: "arrow",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t, i = e.state,
                n = e.name,
                s = e.options,
                a = i.elements.arrow,
                r = i.modifiersData.popperOffsets,
                o = eq(i.placement),
                l = e6(o),
                d = [ey, ev].indexOf(o) >= 0 ? "height" : "width";
            if (a && r) {
                var c, h, u = (c = s.padding, h = i, eU("number" != typeof(c = "function" == typeof c ? c(Object.assign({}, h.rects, {
                        placement: h.placement
                    })) : c) ? c : eK(c, eb))),
                    p = eR(a),
                    f = i.rects.reference[d] + i.rects.reference[l] - r[l] - i.rects.popper[d],
                    m = r[l] - i.rects.reference[l],
                    g = e7(a),
                    v = g ? "y" === l ? g.clientHeight || 0 : g.clientWidth || 0 : 0,
                    y = u["y" === l ? em : ey],
                    $ = v - p[d] - u["y" === l ? eg : ev],
                    b = v / 2 - p[d] / 2 + (f / 2 - m / 2),
                    w = eG(y, b, $),
                    _ = l;
                i.modifiersData[n] = ((t = {})[_] = w, t.centerOffset = w - b, t)
            }
        },
        effect: function(e) {
            var t = e.state,
                i = e.options.element,
                n = void 0 === i ? "[data-popper-arrow]" : i;
            null != n && ("string" != typeof n || (n = t.elements.popper.querySelector(n))) && ej(t.elements.popper, n) && (t.elements.arrow = n)
        },
        requires: ["popperOffsets"],
        requiresIfExists: ["preventOverflow"]
    };

    function eZ(e) {
        return e.split("-")[1]
    }
    var eJ = {
        top: "auto",
        right: "auto",
        bottom: "auto",
        left: "auto"
    };

    function te(e) {
        var t, i = e.popper,
            n = e.popperRect,
            s = e.placement,
            a = e.variation,
            r = e.offsets,
            o = e.position,
            l = e.gpuAcceleration,
            d = e.adaptive,
            c = e.roundOffsets,
            h = e.isFixed,
            u = r.x,
            p = void 0 === u ? 0 : u,
            f = r.y,
            m = void 0 === f ? 0 : f,
            g = "function" == typeof c ? c({
                x: p,
                y: m
            }) : {
                x: p,
                y: m
            };
        p = g.x, m = g.y;
        var v = r.hasOwnProperty("x"),
            y = r.hasOwnProperty("y"),
            $ = ey,
            b = em,
            w = window;
        if (d) {
            var _ = e7(i),
                C = "clientHeight",
                x = "clientWidth";
            _ === ez(i) && "static" !== eV(_ = e5(i)).position && "absolute" === o && (C = "scrollHeight", x = "scrollWidth"), (s === em || (s === ey || s === ev) && "end" === a) && (b = eg, m -= (h && _ === w && w.visualViewport ? w.visualViewport.height : _[C]) - n.height, m *= l ? 1 : -1), s !== ey && (s !== em && s !== eg || "end" !== a) || ($ = ev, p -= (h && _ === w && w.visualViewport ? w.visualViewport.width : _[x]) - n.width, p *= l ? 1 : -1)
        }
        var k, T, E, S, D, M = Object.assign({
                position: o
            }, d && eJ),
            A = !0 === c ? (T = (k = {
                x: p,
                y: m
            }).x, E = k.y, {
                x: e3(T * (S = window.devicePixelRatio || 1)) / S || 0,
                y: e3(E * S) / S || 0
            }) : {
                x: p,
                y: m
            };
        return p = A.x, m = A.y, l ? Object.assign({}, M, ((D = {})[b] = y ? "0" : "", D[$] = v ? "0" : "", D.transform = 1 >= (w.devicePixelRatio || 1) ? "translate(" + p + "px, " + m + "px)" : "translate3d(" + p + "px, " + m + "px, 0)", D)) : Object.assign({}, M, ((t = {})[b] = y ? m + "px" : "", t[$] = v ? p + "px" : "", t.transform = "", t))
    }
    let tt = {
        name: "computeStyles",
        enabled: !0,
        phase: "beforeWrite",
        fn: function(e) {
            var t = e.state,
                i = e.options,
                n = i.gpuAcceleration,
                s = i.adaptive,
                a = i.roundOffsets,
                r = void 0 === a || a,
                o = {
                    placement: eq(t.placement),
                    variation: eZ(t.placement),
                    popper: t.elements.popper,
                    popperRect: t.rects.popper,
                    gpuAcceleration: void 0 === n || n,
                    isFixed: "fixed" === t.options.strategy
                };
            null != t.modifiersData.popperOffsets && (t.styles.popper = Object.assign({}, t.styles.popper, te(Object.assign({}, o, {
                offsets: t.modifiersData.popperOffsets,
                position: t.options.strategy,
                adaptive: void 0 === s || s,
                roundOffsets: r
            })))), null != t.modifiersData.arrow && (t.styles.arrow = Object.assign({}, t.styles.arrow, te(Object.assign({}, o, {
                offsets: t.modifiersData.arrow,
                position: "absolute",
                adaptive: !1,
                roundOffsets: r
            })))), t.attributes.popper = Object.assign({}, t.attributes.popper, {
                "data-popper-placement": t.placement
            })
        },
        data: {}
    };
    var ti = {
        passive: !0
    };
    let tn = {
        name: "eventListeners",
        enabled: !0,
        phase: "write",
        fn: function() {},
        effect: function(e) {
            var t = e.state,
                i = e.instance,
                n = e.options,
                s = n.scroll,
                a = void 0 === s || s,
                r = n.resize,
                o = void 0 === r || r,
                l = ez(t.elements.popper),
                d = [].concat(t.scrollParents.reference, t.scrollParents.popper);
            return a && d.forEach(function(e) {
                    e.addEventListener("scroll", i.update, ti)
                }), o && l.addEventListener("resize", i.update, ti),
                function() {
                    a && d.forEach(function(e) {
                        e.removeEventListener("scroll", i.update, ti)
                    }), o && l.removeEventListener("resize", i.update, ti)
                }
        },
        data: {}
    };
    var ts = {
        left: "right",
        right: "left",
        bottom: "top",
        top: "bottom"
    };

    function ta(e) {
        return e.replace(/left|right|bottom|top/g, function(e) {
            return ts[e]
        })
    }
    var tr = {
        start: "end",
        end: "start"
    };

    function to(e) {
        return e.replace(/start|end/g, function(e) {
            return tr[e]
        })
    }

    function tl(e) {
        var t = ez(e);
        return {
            scrollLeft: t.pageXOffset,
            scrollTop: t.pageYOffset
        }
    }

    function td(e) {
        return eF(e5(e)).left + tl(e).scrollLeft
    }

    function tc(e) {
        var t = eV(e),
            i = t.overflow,
            n = t.overflowX,
            s = t.overflowY;
        return /auto|scroll|overlay|hidden/.test(i + s + n)
    }

    function th(e, t) {
        void 0 === t && (t = []);
        var i, n = function e(t) {
                return ["html", "body", "#document"].indexOf(eN(t)) >= 0 ? t.ownerDocument.body : eH(t) && tc(t) ? t : e(eX(t))
            }(e),
            s = n === (null == (i = e.ownerDocument) ? void 0 : i.body),
            a = ez(n),
            r = s ? [a].concat(a.visualViewport || [], tc(n) ? n : []) : n,
            o = t.concat(r);
        return s ? o : o.concat(th(eX(r)))
    }

    function tu(e) {
        return Object.assign({}, e, {
            left: e.x,
            top: e.y,
            right: e.x + e.width,
            bottom: e.y + e.height
        })
    }

    function tp(e, t) {
        var i, n, s, a, r, o, l, d, c, h, u, p, f, m, g, v, y, $, b;
        return t === eC ? tu((n = ez(i = e), s = e5(i), a = n.visualViewport, r = s.clientWidth, o = s.clientHeight, l = 0, d = 0, a && (r = a.width, o = a.height, /^((?!chrome|android).)*safari/i.test(navigator.userAgent) || (l = a.offsetLeft, d = a.offsetTop)), {
            width: r,
            height: o,
            x: l + td(i),
            y: d
        })) : e0(t) ? ((h = eF(c = t)).top = h.top + c.clientTop, h.left = h.left + c.clientLeft, h.bottom = h.top + c.clientHeight, h.right = h.left + c.clientWidth, h.width = c.clientWidth, h.height = c.clientHeight, h.x = h.left, h.y = h.top, h) : tu((u = e5(e), f = e5(u), m = tl(u), g = null == (p = u.ownerDocument) ? void 0 : p.body, v = eW(f.scrollWidth, f.clientWidth, g ? g.scrollWidth : 0, g ? g.clientWidth : 0), y = eW(f.scrollHeight, f.clientHeight, g ? g.scrollHeight : 0, g ? g.clientHeight : 0), $ = -m.scrollLeft + td(u), b = -m.scrollTop, "rtl" === eV(g || f).direction && ($ += eW(f.clientWidth, g ? g.clientWidth : 0) - v), {
            width: v,
            height: y,
            x: $,
            y: b
        }))
    }

    function tf(e) {
        var t, i = e.reference,
            n = e.element,
            s = e.placement,
            a = s ? eq(s) : null,
            r = s ? eZ(s) : null,
            o = i.x + i.width / 2 - n.width / 2,
            l = i.y + i.height / 2 - n.height / 2;
        switch (a) {
            case em:
                t = {
                    x: o,
                    y: i.y - n.height
                };
                break;
            case eg:
                t = {
                    x: o,
                    y: i.y + i.height
                };
                break;
            case ev:
                t = {
                    x: i.x + i.width,
                    y: l
                };
                break;
            case ey:
                t = {
                    x: i.x - n.width,
                    y: l
                };
                break;
            default:
                t = {
                    x: i.x,
                    y: i.y
                }
        }
        var d = a ? e6(a) : null;
        if (null != d) {
            var c = "y" === d ? "height" : "width";
            switch (r) {
                case ew:
                    t[d] = t[d] - (i[c] / 2 - n[c] / 2);
                    break;
                case "end":
                    t[d] = t[d] + (i[c] / 2 - n[c] / 2)
            }
        }
        return t
    }

    function tm(e, t) {
        void 0 === t && (t = {});
        var i, n, s, a, r, o, l, d, c, h = t,
            u = h.placement,
            p = void 0 === u ? e.placement : u,
            f = h.boundary,
            m = h.rootBoundary,
            g = h.elementContext,
            v = void 0 === g ? e8 : g,
            y = h.altBoundary,
            $ = h.padding,
            b = void 0 === $ ? 0 : $,
            w = eU("number" != typeof b ? b : eK(b, eb)),
            _ = e.rects.popper,
            C = e.elements[void 0 !== y && y ? v === e8 ? ex : e8 : v],
            x = (i = e0(C) ? C : C.contextElement || e5(e.elements.popper), n = void 0 === f ? e_ : f, s = void 0 === m ? eC : m, d = (l = [].concat("clippingParents" === n ? (a = i, r = th(eX(a)), o = ["absolute", "fixed"].indexOf(eV(a).position) >= 0 && eH(a) ? e7(a) : a, e0(o) ? r.filter(function(e) {
                return e0(e) && ej(e, o) && "body" !== eN(e)
            }) : []) : [].concat(n), [s]))[0], (c = l.reduce(function(e, t) {
                var n = tp(i, t);
                return e.top = eW(n.top, e.top), e.right = e1(n.right, e.right), e.bottom = e1(n.bottom, e.bottom), e.left = eW(n.left, e.left), e
            }, tp(i, d))).width = c.right - c.left, c.height = c.bottom - c.top, c.x = c.left, c.y = c.top, c),
            k = eF(e.elements.reference),
            T = tf({
                reference: k,
                element: _,
                strategy: "absolute",
                placement: p
            }),
            E = tu(Object.assign({}, _, T)),
            S = v === e8 ? E : k,
            D = {
                top: x.top - S.top + w.top,
                bottom: S.bottom - x.bottom + w.bottom,
                left: x.left - S.left + w.left,
                right: S.right - x.right + w.right
            },
            M = e.modifiersData.offset;
        if (v === e8 && M) {
            var A = M[p];
            Object.keys(D).forEach(function(e) {
                var t = [ev, eg].indexOf(e) >= 0 ? 1 : -1,
                    i = [em, eg].indexOf(e) >= 0 ? "y" : "x";
                D[e] += A[i] * t
            })
        }
        return D
    }
    let tg = {
        name: "flip",
        enabled: !0,
        phase: "main",
        fn: function(e) {
            var t = e.state,
                i = e.options,
                n = e.name;
            if (!t.modifiersData[n]._skip) {
                for (var s = i.mainAxis, a = void 0 === s || s, r = i.altAxis, o = void 0 === r || r, l = i.fallbackPlacements, d = i.padding, c = i.boundary, h = i.rootBoundary, u = i.altBoundary, p = i.flipVariations, f = void 0 === p || p, m = i.allowedAutoPlacements, g = t.options.placement, v = eq(g), y = l || (v !== g && f ? function(e) {
                        if (eq(e) === e$) return [];
                        var t = ta(e);
                        return [to(e), t, to(t)]
                    }(g) : [ta(g)]), $ = [g].concat(y).reduce(function(e, i) {
                        var n, s, a, r, o, l, u, p, g, v, y, $, b, w;
                        return e.concat(eq(i) === e$ ? (n = t, s = {
                            placement: i,
                            boundary: c,
                            rootBoundary: h,
                            padding: d,
                            flipVariations: f,
                            allowedAutoPlacements: m
                        }, r = (a = s).placement, o = a.boundary, l = a.rootBoundary, u = a.padding, p = a.flipVariations, v = void 0 === (g = a.allowedAutoPlacements) ? eT : g, 0 === (b = ($ = (y = eZ(r)) ? p ? ek : ek.filter(function(e) {
                            return eZ(e) === y
                        }) : eb).filter(function(e) {
                            return v.indexOf(e) >= 0
                        })).length && (b = $), Object.keys(w = b.reduce(function(e, t) {
                            return e[t] = tm(n, {
                                placement: t,
                                boundary: o,
                                rootBoundary: l,
                                padding: u
                            })[eq(t)], e
                        }, {})).sort(function(e, t) {
                            return w[e] - w[t]
                        })) : i)
                    }, []), b = t.rects.reference, w = t.rects.popper, _ = new Map, C = !0, x = $[0], k = 0; k < $.length; k++) {
                    var T = $[k],
                        E = eq(T),
                        S = eZ(T) === ew,
                        D = [em, eg].indexOf(E) >= 0,
                        M = D ? "width" : "height",
                        A = tm(t, {
                            placement: T,
                            boundary: c,
                            rootBoundary: h,
                            altBoundary: u,
                            padding: d
                        }),
                        P = D ? S ? ev : ey : S ? eg : em;
                    b[M] > w[M] && (P = ta(P));
                    var L = ta(P),
                        I = [];
                    if (a && I.push(A[E] <= 0), o && I.push(A[P] <= 0, A[L] <= 0), I.every(function(e) {
                            return e
                        })) {
                        x = T, C = !1;
                        break
                    }
                    _.set(T, I)
                }
                if (C)
                    for (var O = function(e) {
                            var t = $.find(function(t) {
                                var i = _.get(t);
                                if (i) return i.slice(0, e).every(function(e) {
                                    return e
                                })
                            });
                            if (t) return x = t, "break"
                        }, N = f ? 3 : 1; N > 0 && "break" !== O(N); N--);
                t.placement !== x && (t.modifiersData[n]._skip = !0, t.placement = x, t.reset = !0)
            }
        },
        requiresIfExists: ["offset"],
        data: {
            _skip: !1
        }
    };

    function tv(e, t, i) {
        return void 0 === i && (i = {
            x: 0,
            y: 0
        }), {
            top: e.top - t.height - i.y,
            right: e.right - t.width + i.x,
            bottom: e.bottom - t.height + i.y,
            left: e.left - t.width - i.x
        }
    }

    function ty(e) {
        return [em, ev, eg, ey].some(function(t) {
            return e[t] >= 0
        })
    }
    let t$ = {
            name: "hide",
            enabled: !0,
            phase: "main",
            requiresIfExists: ["preventOverflow"],
            fn: function(e) {
                var t = e.state,
                    i = e.name,
                    n = t.rects.reference,
                    s = t.rects.popper,
                    a = t.modifiersData.preventOverflow,
                    r = tm(t, {
                        elementContext: "reference"
                    }),
                    o = tm(t, {
                        altBoundary: !0
                    }),
                    l = tv(r, n),
                    d = tv(o, s, a),
                    c = ty(l),
                    h = ty(d);
                t.modifiersData[i] = {
                    referenceClippingOffsets: l,
                    popperEscapeOffsets: d,
                    isReferenceHidden: c,
                    hasPopperEscaped: h
                }, t.attributes.popper = Object.assign({}, t.attributes.popper, {
                    "data-popper-reference-hidden": c,
                    "data-popper-escaped": h
                })
            }
        },
        tb = {
            name: "offset",
            enabled: !0,
            phase: "main",
            requires: ["popperOffsets"],
            fn: function(e) {
                var t = e.state,
                    i = e.options,
                    n = e.name,
                    s = i.offset,
                    a = void 0 === s ? [0, 0] : s,
                    r = eT.reduce(function(e, i) {
                        var n, s, r, o, l, d, c, h;
                        return e[i] = (n = i, s = t.rects, r = a, l = [ey, em].indexOf(o = eq(n)) >= 0 ? -1 : 1, c = (d = "function" == typeof r ? r(Object.assign({}, s, {
                            placement: n
                        })) : r)[0], h = d[1], c = c || 0, h = (h || 0) * l, [ey, ev].indexOf(o) >= 0 ? {
                            x: h,
                            y: c
                        } : {
                            x: c,
                            y: h
                        }), e
                    }, {}),
                    o = r[t.placement],
                    l = o.x,
                    d = o.y;
                null != t.modifiersData.popperOffsets && (t.modifiersData.popperOffsets.x += l, t.modifiersData.popperOffsets.y += d), t.modifiersData[n] = r
            }
        },
        tw = {
            name: "popperOffsets",
            enabled: !0,
            phase: "read",
            fn: function(e) {
                var t = e.state,
                    i = e.name;
                t.modifiersData[i] = tf({
                    reference: t.rects.reference,
                    element: t.rects.popper,
                    strategy: "absolute",
                    placement: t.placement
                })
            },
            data: {}
        },
        t_ = {
            name: "preventOverflow",
            enabled: !0,
            phase: "main",
            fn: function(e) {
                var t = e.state,
                    i = e.options,
                    n = e.name,
                    s = i.mainAxis,
                    a = i.altAxis,
                    r = i.boundary,
                    o = i.rootBoundary,
                    l = i.altBoundary,
                    d = i.padding,
                    c = i.tether,
                    h = void 0 === c || c,
                    u = i.tetherOffset,
                    p = void 0 === u ? 0 : u,
                    f = tm(t, {
                        boundary: r,
                        rootBoundary: o,
                        padding: d,
                        altBoundary: l
                    }),
                    m = eq(t.placement),
                    g = eZ(t.placement),
                    v = !g,
                    y = e6(m),
                    $ = "x" === y ? "y" : "x",
                    b = t.modifiersData.popperOffsets,
                    w = t.rects.reference,
                    _ = t.rects.popper,
                    C = "function" == typeof p ? p(Object.assign({}, t.rects, {
                        placement: t.placement
                    })) : p,
                    x = "number" == typeof C ? {
                        mainAxis: C,
                        altAxis: C
                    } : Object.assign({
                        mainAxis: 0,
                        altAxis: 0
                    }, C),
                    k = t.modifiersData.offset ? t.modifiersData.offset[t.placement] : null,
                    T = {
                        x: 0,
                        y: 0
                    };
                if (b) {
                    if (void 0 === s || s) {
                        var E, S = "y" === y ? em : ey,
                            D = "y" === y ? eg : ev,
                            M = "y" === y ? "height" : "width",
                            A = b[y],
                            P = A + f[S],
                            L = A - f[D],
                            I = h ? -_[M] / 2 : 0,
                            O = g === ew ? w[M] : _[M],
                            N = g === ew ? -_[M] : -w[M],
                            z = t.elements.arrow,
                            H = h && z ? eR(z) : {
                                width: 0,
                                height: 0
                            },
                            Y = t.modifiersData["arrow#persistent"] ? t.modifiersData["arrow#persistent"].padding : {
                                top: 0,
                                right: 0,
                                bottom: 0,
                                left: 0
                            },
                            B = Y[S],
                            q = Y[D],
                            W = eG(0, w[M], H[M]),
                            F = v ? w[M] / 2 - I - W - B - x.mainAxis : O - W - B - x.mainAxis,
                            R = v ? -w[M] / 2 + I + W + q + x.mainAxis : N + W + q + x.mainAxis,
                            j = t.elements.arrow && e7(t.elements.arrow),
                            V = j ? "y" === y ? j.clientTop || 0 : j.clientLeft || 0 : 0,
                            X = null != (E = null == k ? void 0 : k[y]) ? E : 0,
                            G = eG(h ? e1(P, A + F - X - V) : P, A, h ? eW(L, A + R - X) : L);
                        b[y] = G, T[y] = G - A
                    }
                    if (void 0 !== a && a) {
                        var U, K, Q, Z, J, ee = b[$],
                            et = "y" === $ ? "height" : "width",
                            ei = ee + f["x" === y ? em : ey],
                            en = ee - f["x" === y ? eg : ev],
                            es = -1 !== [em, ey].indexOf(m),
                            ea = null != (J = null == k ? void 0 : k[$]) ? J : 0,
                            er = es ? ei : ee - w[et] - _[et] - ea + x.altAxis,
                            eo = es ? ee + w[et] + _[et] - ea - x.altAxis : en,
                            el = h && es ? (U = er, K = ee, Q = eo, (Z = eG(U, K, Q)) > Q ? Q : Z) : eG(h ? er : ei, ee, h ? eo : en);
                        b[$] = el, T[$] = el - ee
                    }
                    t.modifiersData[n] = T
                }
            },
            requiresIfExists: ["offset"]
        };
    var tC = {
        placement: "bottom",
        modifiers: [],
        strategy: "absolute"
    };

    function t8() {
        for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
        return !t.some(function(e) {
            return !(e && "function" == typeof e.getBoundingClientRect)
        })
    }

    function tx(e) {
        void 0 === e && (e = {});
        var t = e,
            i = t.defaultModifiers,
            n = void 0 === i ? [] : i,
            s = t.defaultOptions,
            a = void 0 === s ? tC : s;
        return function(e, t, i) {
            void 0 === i && (i = a);
            var s, r, o = {
                    placement: "bottom",
                    orderedModifiers: [],
                    options: Object.assign({}, tC, a),
                    modifiersData: {},
                    elements: {
                        reference: e,
                        popper: t
                    },
                    attributes: {},
                    styles: {}
                },
                l = [],
                d = !1,
                c = {
                    state: o,
                    setOptions: function(i) {
                        var s, r, d, u, p, f, m = "function" == typeof i ? i(o.options) : i;
                        h(), o.options = Object.assign({}, a, o.options, m), o.scrollParents = {
                            reference: e0(e) ? th(e) : e.contextElement ? th(e.contextElement) : [],
                            popper: th(t)
                        };
                        var g, v, y = (f = (r = s = Object.keys(v = (g = [].concat(n, o.options.modifiers)).reduce(function(e, t) {
                            var i = e[t.name];
                            return e[t.name] = i ? Object.assign({}, i, t, {
                                options: Object.assign({}, i.options, t.options),
                                data: Object.assign({}, i.data, t.data)
                            }) : t, e
                        }, {})).map(function(e) {
                            return v[e]
                        }), d = new Map, u = new Set, p = [], r.forEach(function(e) {
                            d.set(e.name, e)
                        }), r.forEach(function(e) {
                            u.has(e.name) || function e(t) {
                                u.add(t.name), [].concat(t.requires || [], t.requiresIfExists || []).forEach(function(t) {
                                    if (!u.has(t)) {
                                        var i = d.get(t);
                                        i && e(i)
                                    }
                                }), p.push(t)
                            }(e)
                        }), p), eO.reduce(function(e, t) {
                            return e.concat(f.filter(function(e) {
                                return e.phase === t
                            }))
                        }, []));
                        return o.orderedModifiers = y.filter(function(e) {
                            return e.enabled
                        }), o.orderedModifiers.forEach(function(e) {
                            var t = e.name,
                                i = e.options,
                                n = e.effect;
                            if ("function" == typeof n) {
                                var s = n({
                                    state: o,
                                    name: t,
                                    instance: c,
                                    options: void 0 === i ? {} : i
                                });
                                l.push(s || function() {})
                            }
                        }), c.update()
                    },
                    forceUpdate: function() {
                        if (!d) {
                            var e, t, i, n, s, a, r, l, h, u, p, f, m, g, v, y = o.elements,
                                $ = y.reference,
                                b = y.popper;
                            if (t8($, b)) {
                                o.rects = {
                                    reference: (e = $, t = e7(b), i = "fixed" === o.options.strategy, u = eH(t), p = eH(t) && (a = e3((s = (n = t).getBoundingClientRect()).width) / n.offsetWidth || 1, r = e3(s.height) / n.offsetHeight || 1, 1 !== a || 1 !== r), f = e5(t), m = eF(e, p), g = {
                                        scrollLeft: 0,
                                        scrollTop: 0
                                    }, v = {
                                        x: 0,
                                        y: 0
                                    }, (u || !u && !i) && (("body" !== eN(t) || tc(f)) && (g = (l = t) !== ez(l) && eH(l) ? {
                                        scrollLeft: (h = l).scrollLeft,
                                        scrollTop: h.scrollTop
                                    } : tl(l)), eH(t) ? ((v = eF(t, !0)).x += t.clientLeft, v.y += t.clientTop) : f && (v.x = td(f))), {
                                        x: m.left + g.scrollLeft - v.x,
                                        y: m.top + g.scrollTop - v.y,
                                        width: m.width,
                                        height: m.height
                                    }),
                                    popper: eR(b)
                                }, o.reset = !1, o.placement = o.options.placement, o.orderedModifiers.forEach(function(e) {
                                    return o.modifiersData[e.name] = Object.assign({}, e.data)
                                });
                                for (var w = 0; w < o.orderedModifiers.length; w++)
                                    if (!0 !== o.reset) {
                                        var _ = o.orderedModifiers[w],
                                            C = _.fn,
                                            x = _.options,
                                            k = void 0 === x ? {} : x,
                                            T = _.name;
                                        "function" == typeof C && (o = C({
                                            state: o,
                                            options: k,
                                            name: T,
                                            instance: c
                                        }) || o)
                                    } else o.reset = !1, w = -1
                            }
                        }
                    },
                    update: (s = function() {
                        return new Promise(function(e) {
                            c.forceUpdate(), e(o)
                        })
                    }, function() {
                        return r || (r = new Promise(function(e) {
                            Promise.resolve().then(function() {
                                r = void 0, e(s())
                            })
                        })), r
                    }),
                    destroy: function() {
                        h(), d = !0
                    }
                };
            if (!t8(e, t)) return c;

            function h() {
                l.forEach(function(e) {
                    return e()
                }), l = []
            }
            return c.setOptions(i).then(function(e) {
                !d && i.onFirstUpdate && i.onFirstUpdate(e)
            }), c
        }
    }
    var tk = tx(),
        tT = tx({
            defaultModifiers: [tn, tw, tt, eB]
        }),
        tE = tx({
            defaultModifiers: [tn, tw, tt, eB, tb, tg, t_, eQ, t$]
        });
    let tS = Object.freeze(Object.defineProperty({
            __proto__: null,
            popperGenerator: tx,
            detectOverflow: tm,
            createPopperBase: tk,
            createPopper: tE,
            createPopperLite: tT,
            top: em,
            bottom: eg,
            right: ev,
            left: ey,
            auto: e$,
            basePlacements: eb,
            start: ew,
            end: "end",
            clippingParents: e_,
            viewport: eC,
            popper: e8,
            reference: ex,
            variationPlacements: ek,
            placements: eT,
            beforeRead: eE,
            read: eS,
            afterRead: eD,
            beforeMain: eM,
            main: eA,
            afterMain: eP,
            beforeWrite: eL,
            write: eI,
            afterWrite: e9,
            modifierPhases: eO,
            applyStyles: eB,
            arrow: eQ,
            computeStyles: tt,
            eventListeners: tn,
            flip: tg,
            hide: t$,
            offset: tb,
            popperOffsets: tw,
            preventOverflow: t_
        }, Symbol.toStringTag, {
            value: "Module"
        })),
        tD = "dropdown",
        tM = "ArrowDown",
        tA = "click.bs.dropdown.data-api",
        tP = "keydown.bs.dropdown.data-api",
        tL = "show",
        tI = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)',
        t9 = `${tI}.show`,
        tO = ".dropdown-menu",
        tN = f() ? "top-end" : "top-start",
        tz = f() ? "top-start" : "top-end",
        t0 = f() ? "bottom-end" : "bottom-start",
        tH = f() ? "bottom-start" : "bottom-end",
        tY = f() ? "left-start" : "right-start",
        tB = f() ? "right-start" : "left-start",
        tq = {
            autoClose: !0,
            boundary: "clippingParents",
            display: "dynamic",
            offset: [0, 2],
            popperConfig: null,
            reference: "toggle"
        },
        tW = {
            autoClose: "(boolean|string)",
            boundary: "(string|element)",
            display: "string",
            offset: "(array|string|function)",
            popperConfig: "(null|object|function)",
            reference: "(string|element|object)"
        };
    class t1 extends W {
        constructor(e, t) {
            super(e, t), this._popper = null, this._parent = this._element.parentNode, this._menu = X.findOne(tO, this._parent), this._inNavbar = this._detectNavbar()
        }
        static get Default() {
            return tq
        }
        static get DefaultType() {
            return tW
        }
        static get NAME() {
            return tD
        }
        toggle() {
            return this._isShown() ? this.hide() : this.show()
        }
        show() {
            if (l(this._element) || this._isShown()) return;
            let e = {
                relatedTarget: this._element
            };
            if (!I.trigger(this._element, "show.bs.dropdown", e).defaultPrevented) {
                if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav"))
                    for (let t of [].concat(...document.body.children)) I.on(t, "mouseover", c);
                this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(tL), this._element.classList.add(tL), I.trigger(this._element, "shown.bs.dropdown", e)
            }
        }
        hide() {
            if (l(this._element) || !this._isShown()) return;
            let e = {
                relatedTarget: this._element
            };
            this._completeHide(e)
        }
        dispose() {
            this._popper && this._popper.destroy(), super.dispose()
        }
        update() {
            this._inNavbar = this._detectNavbar(), this._popper && this._popper.update()
        }
        _completeHide(e) {
            if (!I.trigger(this._element, "hide.bs.dropdown", e).defaultPrevented) {
                if ("ontouchstart" in document.documentElement)
                    for (let t of [].concat(...document.body.children)) I.off(t, "mouseover", c);
                this._popper && this._popper.destroy(), this._menu.classList.remove(tL), this._element.classList.remove(tL), this._element.setAttribute("aria-expanded", "false"), B.removeDataAttribute(this._menu, "popper"), I.trigger(this._element, "hidden.bs.dropdown", e)
            }
        }
        _getConfig(e) {
            if ("object" == typeof(e = super._getConfig(e)).reference && !a(e.reference) && "function" != typeof e.reference.getBoundingClientRect) throw TypeError(`${tD.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
            return e
        }
        _createPopper() {
            if (void 0 === tS) throw TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");
            let e = this._element;
            "parent" === this._config.reference ? e = this._parent : a(this._config.reference) ? e = r(this._config.reference) : "object" == typeof this._config.reference && (e = this._config.reference);
            let t = this._getPopperConfig();
            this._popper = tE(e, this._menu, t)
        }
        _isShown() {
            return this._menu.classList.contains(tL)
        }
        _getPlacement() {
            let e = this._parent;
            if (e.classList.contains("dropend")) return tY;
            if (e.classList.contains("dropstart")) return tB;
            if (e.classList.contains("dropup-center")) return "top";
            if (e.classList.contains("dropdown-center")) return "bottom";
            let t = "end" === getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();
            return e.classList.contains("dropup") ? t ? tz : tN : t ? tH : t0
        }
        _detectNavbar() {
            return null !== this._element.closest(".navbar")
        }
        _getOffset() {
            let {
                offset: e
            } = this._config;
            return "string" == typeof e ? e.split(",").map(e => Number.parseInt(e, 10)) : "function" == typeof e ? t => e(t, this._element) : e
        }
        _getPopperConfig() {
            let e = {
                placement: this._getPlacement(),
                modifiers: [{
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }]
            };
            return (this._inNavbar || "static" === this._config.display) && (B.setDataAttribute(this._menu, "popper", "static"), e.modifiers = [{
                name: "applyStyles",
                enabled: !1
            }]), {
                ...e,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(e) : this._config.popperConfig
            }
        }
        _selectMenuItem({
            key: e,
            target: t
        }) {
            let i = X.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter(e => o(e));
            i.length && y(i, t, e === tM, !i.includes(t)).focus()
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = t1.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
        static clearMenus(e) {
            if (2 === e.button || "keyup" === e.type && "Tab" !== e.key) return;
            let t = X.find(t9);
            for (let i of t) {
                let n = t1.getInstance(i);
                if (!n || !1 === n._config.autoClose) continue;
                let s = e.composedPath(),
                    a = s.includes(n._menu);
                if (s.includes(n._element) || "inside" === n._config.autoClose && !a || "outside" === n._config.autoClose && a || n._menu.contains(e.target) && ("keyup" === e.type && "Tab" === e.key || /input|select|option|textarea|form/i.test(e.target.tagName))) continue;
                let r = {
                    relatedTarget: n._element
                };
                "click" === e.type && (r.clickEvent = e), n._completeHide(r)
            }
        }
        static dataApiKeydownHandler(e) {
            let t = /input|textarea/i.test(e.target.tagName),
                i = "Escape" === e.key,
                n = ["ArrowUp", tM].includes(e.key);
            if (!n && !i || t && !i) return;
            e.preventDefault();
            let s = X.findOne(tI, e.delegateTarget.parentNode),
                a = t1.getOrCreateInstance(s);
            if (n) return e.stopPropagation(), a.show(), void a._selectMenuItem(e);
            a._isShown() && (e.stopPropagation(), a.hide(), s.focus())
        }
    }
    I.on(document, tP, tI, t1.dataApiKeydownHandler), I.on(document, tP, tO, t1.dataApiKeydownHandler), I.on(document, tA, t1.clearMenus), I.on(document, "keyup.bs.dropdown.data-api", t1.clearMenus), I.on(document, tA, tI, function(e) {
        e.preventDefault(), t1.getOrCreateInstance(this).toggle()
    }), m(t1);
    let t3 = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
        tF = ".sticky-top",
        tR = "padding-right",
        tj = "margin-right";
    class tV {
        constructor() {
            this._element = document.body
        }
        getWidth() {
            let e = document.documentElement.clientWidth;
            return Math.abs(window.innerWidth - e)
        }
        hide() {
            let e = this.getWidth();
            this._disableOverFlow(), this._setElementAttributes(this._element, tR, t => t + e), this._setElementAttributes(t3, tR, t => t + e), this._setElementAttributes(tF, tj, t => t - e)
        }
        reset() {
            this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, tR), this._resetElementAttributes(t3, tR), this._resetElementAttributes(tF, tj)
        }
        isOverflowing() {
            return this.getWidth() > 0
        }
        _disableOverFlow() {
            this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden"
        }
        _setElementAttributes(e, t, i) {
            let n = this.getWidth();
            this._applyManipulationCallback(e, e => {
                if (e !== this._element && window.innerWidth > e.clientWidth + n) return;
                this._saveInitialAttribute(e, t);
                let s = window.getComputedStyle(e).getPropertyValue(t);
                e.style.setProperty(t, `${i(Number.parseFloat(s))}px`)
            })
        }
        _saveInitialAttribute(e, t) {
            let i = e.style.getPropertyValue(t);
            i && B.setDataAttribute(e, t, i)
        }
        _resetElementAttributes(e, t) {
            this._applyManipulationCallback(e, e => {
                let i = B.getDataAttribute(e, t);
                null !== i ? (B.removeDataAttribute(e, t), e.style.setProperty(t, i)) : e.style.removeProperty(t)
            })
        }
        _applyManipulationCallback(e, t) {
            if (a(e)) t(e);
            else
                for (let i of X.find(e, this._element)) t(i)
        }
    }
    let t2 = "show",
        t5 = "mousedown.bs.backdrop",
        tX = {
            className: "modal-backdrop",
            clickCallback: null,
            isAnimated: !1,
            isVisible: !0,
            rootElement: "body"
        },
        t4 = {
            className: "string",
            clickCallback: "(function|null)",
            isAnimated: "boolean",
            isVisible: "boolean",
            rootElement: "(element|string)"
        };
    class t7 extends q {
        constructor(e) {
            super(), this._config = this._getConfig(e), this._isAppended = !1, this._element = null
        }
        static get Default() {
            return tX
        }
        static get DefaultType() {
            return t4
        }
        static get NAME() {
            return "backdrop"
        }
        show(e) {
            if (!this._config.isVisible) return void g(e);
            this._append();
            let t = this._getElement();
            this._config.isAnimated && h(t), t.classList.add(t2), this._emulateAnimation(() => {
                g(e)
            })
        }
        hide(e) {
            this._config.isVisible ? (this._getElement().classList.remove(t2), this._emulateAnimation(() => {
                this.dispose(), g(e)
            })) : g(e)
        }
        dispose() {
            this._isAppended && (I.off(this._element, t5), this._element.remove(), this._isAppended = !1)
        }
        _getElement() {
            if (!this._element) {
                let e = document.createElement("div");
                e.className = this._config.className, this._config.isAnimated && e.classList.add("fade"), this._element = e
            }
            return this._element
        }
        _configAfterMerge(e) {
            return e.rootElement = r(e.rootElement), e
        }
        _append() {
            if (this._isAppended) return;
            let e = this._getElement();
            this._config.rootElement.append(e), I.on(e, t5, () => {
                g(this._config.clickCallback)
            }), this._isAppended = !0
        }
        _emulateAnimation(e) {
            v(e, this._getElement(), this._config.isAnimated)
        }
    }
    let t6 = ".bs.focustrap",
        tG = "backward",
        tU = {
            autofocus: !0,
            trapElement: null
        },
        tK = {
            autofocus: "boolean",
            trapElement: "element"
        };
    class tQ extends q {
        constructor(e) {
            super(), this._config = this._getConfig(e), this._isActive = !1, this._lastTabNavDirection = null
        }
        static get Default() {
            return tU
        }
        static get DefaultType() {
            return tK
        }
        static get NAME() {
            return "focustrap"
        }
        activate() {
            this._isActive || (this._config.autofocus && this._config.trapElement.focus(), I.off(document, t6), I.on(document, "focusin.bs.focustrap", e => this._handleFocusin(e)), I.on(document, "keydown.tab.bs.focustrap", e => this._handleKeydown(e)), this._isActive = !0)
        }
        deactivate() {
            this._isActive && (this._isActive = !1, I.off(document, t6))
        }
        _handleFocusin(e) {
            let {
                trapElement: t
            } = this._config;
            if (e.target === document || e.target === t || t.contains(e.target)) return;
            let i = X.focusableChildren(t);
            0 === i.length ? t.focus() : this._lastTabNavDirection === tG ? i[i.length - 1].focus() : i[0].focus()
        }
        _handleKeydown(e) {
            "Tab" === e.key && (this._lastTabNavDirection = e.shiftKey ? tG : "forward")
        }
    }
    let tZ = "hidden.bs.modal",
        tJ = "show.bs.modal",
        ie = "modal-open",
        it = "show",
        ii = "modal-static",
        is = {
            backdrop: !0,
            focus: !0,
            keyboard: !0
        },
        ia = {
            backdrop: "(boolean|string)",
            focus: "boolean",
            keyboard: "boolean"
        };
    class ir extends W {
        constructor(e, t) {
            super(e, t), this._dialog = X.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new tV, this._addEventListeners()
        }
        static get Default() {
            return is
        }
        static get DefaultType() {
            return ia
        }
        static get NAME() {
            return "modal"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || this._isTransitioning || I.trigger(this._element, tJ, {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(ie), this._adjustDialog(), this._backdrop.show(() => this._showElement(e)))
        }
        hide() {
            this._isShown && !this._isTransitioning && (I.trigger(this._element, "hide.bs.modal").defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(it), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())))
        }
        dispose() {
            for (let e of [window, this._dialog]) I.off(e, ".bs.modal");
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        handleUpdate() {
            this._adjustDialog()
        }
        _initializeBackDrop() {
            return new t7({
                isVisible: Boolean(this._config.backdrop),
                isAnimated: this._isAnimated()
            })
        }
        _initializeFocusTrap() {
            return new tQ({
                trapElement: this._element
            })
        }
        _showElement(e) {
            document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
            let t = X.findOne(".modal-body", this._dialog);
            t && (t.scrollTop = 0), h(this._element), this._element.classList.add(it), this._queueCallback(() => {
                this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, I.trigger(this._element, "shown.bs.modal", {
                    relatedTarget: e
                })
            }, this._dialog, this._isAnimated())
        }
        _addEventListeners() {
            I.on(this._element, "keydown.dismiss.bs.modal", e => {
                if ("Escape" === e.key) return this._config.keyboard ? (e.preventDefault(), void this.hide()) : void this._triggerBackdropTransition()
            }), I.on(window, "resize.bs.modal", () => {
                this._isShown && !this._isTransitioning && this._adjustDialog()
            }), I.on(this._element, "mousedown.dismiss.bs.modal", e => {
                e.target === e.currentTarget && ("static" !== this._config.backdrop ? this._config.backdrop && this.hide() : this._triggerBackdropTransition())
            })
        }
        _hideModal() {
            this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
                document.body.classList.remove(ie), this._resetAdjustments(), this._scrollBar.reset(), I.trigger(this._element, tZ)
            })
        }
        _isAnimated() {
            return this._element.classList.contains("fade")
        }
        _triggerBackdropTransition() {
            if (I.trigger(this._element, "hidePrevented.bs.modal").defaultPrevented) return;
            let e = this._element.scrollHeight > document.documentElement.clientHeight,
                t = this._element.style.overflowY;
            "hidden" === t || this._element.classList.contains(ii) || (e || (this._element.style.overflowY = "hidden"), this._element.classList.add(ii), this._queueCallback(() => {
                this._element.classList.remove(ii), this._queueCallback(() => {
                    this._element.style.overflowY = t
                }, this._dialog)
            }, this._dialog), this._element.focus())
        }
        _adjustDialog() {
            let e = this._element.scrollHeight > document.documentElement.clientHeight,
                t = this._scrollBar.getWidth(),
                i = t > 0;
            if (i && !e) {
                let n = f() ? "paddingLeft" : "paddingRight";
                this._element.style[n] = `${t}px`
            }
            if (!i && e) {
                let s = f() ? "paddingRight" : "paddingLeft";
                this._element.style[s] = `${t}px`
            }
        }
        _resetAdjustments() {
            this._element.style.paddingLeft = "", this._element.style.paddingRight = ""
        }
        static jQueryInterface(e, t) {
            return this.each(function() {
                let i = ir.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === i[e]) throw TypeError(`No method named "${e}"`);
                    i[e](t)
                }
            })
        }
    }
    I.on(document, "click.bs.modal.data-api", '[data-bs-toggle="modal"]', function(e) {
        let t = n(this);
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), I.one(t, tJ, e => {
            e.defaultPrevented || I.one(t, tZ, () => {
                o(this) && this.focus()
            })
        });
        let i = X.findOne(".modal.show");
        i && ir.getInstance(i).hide(), ir.getOrCreateInstance(t).toggle(this)
    }), F(ir), m(ir);
    let io = "show",
        il = "showing",
        id = "hiding",
        ic = ".offcanvas.show",
        ih = "hidePrevented.bs.offcanvas",
        iu = "hidden.bs.offcanvas",
        ip = {
            backdrop: !0,
            keyboard: !0,
            scroll: !1
        },
        im = {
            backdrop: "(boolean|string)",
            keyboard: "boolean",
            scroll: "boolean"
        };
    class ig extends W {
        constructor(e, t) {
            super(e, t), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners()
        }
        static get Default() {
            return ip
        }
        static get DefaultType() {
            return im
        }
        static get NAME() {
            return "offcanvas"
        }
        toggle(e) {
            return this._isShown ? this.hide() : this.show(e)
        }
        show(e) {
            this._isShown || I.trigger(this._element, "show.bs.offcanvas", {
                relatedTarget: e
            }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || (new tV).hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(il), this._queueCallback(() => {
                this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(io), this._element.classList.remove(il), I.trigger(this._element, "shown.bs.offcanvas", {
                    relatedTarget: e
                })
            }, this._element, !0))
        }
        hide() {
            this._isShown && (I.trigger(this._element, "hide.bs.offcanvas").defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(id), this._backdrop.hide(), this._queueCallback(() => {
                this._element.classList.remove(io, id), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || (new tV).reset(), I.trigger(this._element, iu)
            }, this._element, !0)))
        }
        dispose() {
            this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose()
        }
        _initializeBackDrop() {
            let e = Boolean(this._config.backdrop);
            return new t7({
                className: "offcanvas-backdrop",
                isVisible: e,
                isAnimated: !0,
                rootElement: this._element.parentNode,
                clickCallback: e ? () => {
                    "static" !== this._config.backdrop ? this.hide() : I.trigger(this._element, ih)
                } : null
            })
        }
        _initializeFocusTrap() {
            return new tQ({
                trapElement: this._element
            })
        }
        _addEventListeners() {
            I.on(this._element, "keydown.dismiss.bs.offcanvas", e => {
                "Escape" === e.key && (this._config.keyboard ? this.hide() : I.trigger(this._element, ih))
            })
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = ig.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    I.on(document, "click.bs.offcanvas.data-api", '[data-bs-toggle="offcanvas"]', function(e) {
        let t = n(this);
        if (["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this)) return;
        I.one(t, iu, () => {
            o(this) && this.focus()
        });
        let i = X.findOne(ic);
        i && i !== t && ig.getInstance(i).hide(), ig.getOrCreateInstance(t).toggle(this)
    }), I.on(window, "load.bs.offcanvas.data-api", () => {
        for (let e of X.find(ic)) ig.getOrCreateInstance(e).show()
    }), I.on(window, "resize.bs.offcanvas", () => {
        for (let e of X.find("[aria-modal][class*=show][class*=offcanvas-]")) "fixed" !== getComputedStyle(e).position && ig.getOrCreateInstance(e).hide()
    }), F(ig), m(ig);
    let iv = new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]),
        iy = /^(?:(?:https?|mailto|ftp|tel|file|sms):|[^#&/:?]*(?:[#/?]|$))/i,
        i$ = /^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,
        ib = (e, t) => {
            let i = e.nodeName.toLowerCase();
            return t.includes(i) ? !iv.has(i) || Boolean(iy.test(e.nodeValue) || i$.test(e.nodeValue)) : t.filter(e => e instanceof RegExp).some(e => e.test(i))
        },
        iw = {
            "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i],
            a: ["target", "href", "title", "rel"],
            area: [],
            b: [],
            br: [],
            col: [],
            code: [],
            div: [],
            em: [],
            hr: [],
            h1: [],
            h2: [],
            h3: [],
            h4: [],
            h5: [],
            h6: [],
            i: [],
            img: ["src", "srcset", "alt", "title", "width", "height"],
            li: [],
            ol: [],
            p: [],
            pre: [],
            s: [],
            small: [],
            span: [],
            sub: [],
            sup: [],
            strong: [],
            u: [],
            ul: []
        },
        i_ = {
            allowList: iw,
            content: {},
            extraClass: "",
            html: !1,
            sanitize: !0,
            sanitizeFn: null,
            template: "<div></div>"
        },
        iC = {
            allowList: "object",
            content: "object",
            extraClass: "(string|function)",
            html: "boolean",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            template: "string"
        },
        i8 = {
            entry: "(string|element|function|null)",
            selector: "(string|element)"
        };
    class ix extends q {
        constructor(e) {
            super(), this._config = this._getConfig(e)
        }
        static get Default() {
            return i_
        }
        static get DefaultType() {
            return iC
        }
        static get NAME() {
            return "TemplateFactory"
        }
        getContent() {
            return Object.values(this._config.content).map(e => this._resolvePossibleFunction(e)).filter(Boolean)
        }
        hasContent() {
            return this.getContent().length > 0
        }
        changeContent(e) {
            return this._checkContent(e), this._config.content = {
                ...this._config.content,
                ...e
            }, this
        }
        toHtml() {
            let e = document.createElement("div");
            for (let [t, i] of(e.innerHTML = this._maybeSanitize(this._config.template), Object.entries(this._config.content))) this._setContent(e, i, t);
            let n = e.children[0],
                s = this._resolvePossibleFunction(this._config.extraClass);
            return s && n.classList.add(...s.split(" ")), n
        }
        _typeCheckConfig(e) {
            super._typeCheckConfig(e), this._checkContent(e.content)
        }
        _checkContent(e) {
            for (let [t, i] of Object.entries(e)) super._typeCheckConfig({
                selector: t,
                entry: i
            }, i8)
        }
        _setContent(e, t, i) {
            let n = X.findOne(i, e);
            n && ((t = this._resolvePossibleFunction(t)) ? a(t) ? this._putElementInTemplate(r(t), n) : this._config.html ? n.innerHTML = this._maybeSanitize(t) : n.textContent = t : n.remove())
        }
        _maybeSanitize(e) {
            return this._config.sanitize ? function(e, t, i) {
                if (!e.length) return e;
                if (i && "function" == typeof i) return i(e);
                let n = (new window.DOMParser).parseFromString(e, "text/html"),
                    s = [].concat(...n.body.querySelectorAll("*"));
                for (let a of s) {
                    let r = a.nodeName.toLowerCase();
                    if (!Object.keys(t).includes(r)) {
                        a.remove();
                        continue
                    }
                    let o = [].concat(...a.attributes),
                        l = [].concat(t["*"] || [], t[r] || []);
                    for (let d of o) ib(d, l) || a.removeAttribute(d.nodeName)
                }
                return n.body.innerHTML
            }(e, this._config.allowList, this._config.sanitizeFn) : e
        }
        _resolvePossibleFunction(e) {
            return "function" == typeof e ? e(this) : e
        }
        _putElementInTemplate(e, t) {
            if (this._config.html) return t.innerHTML = "", void t.append(e);
            t.textContent = e.textContent
        }
    }
    let ik = new Set(["sanitize", "allowList", "sanitizeFn"]),
        iT = "fade",
        iE = "show",
        iS = ".modal",
        iD = "hide.bs.modal",
        iM = "hover",
        iA = "focus",
        iP = {
            AUTO: "auto",
            TOP: "top",
            RIGHT: f() ? "left" : "right",
            BOTTOM: "bottom",
            LEFT: f() ? "right" : "left"
        },
        iL = {
            allowList: iw,
            animation: !0,
            boundary: "clippingParents",
            container: !1,
            customClass: "",
            delay: 0,
            fallbackPlacements: ["top", "right", "bottom", "left"],
            html: !1,
            offset: [0, 0],
            placement: "top",
            popperConfig: null,
            sanitize: !0,
            sanitizeFn: null,
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            title: "",
            trigger: "hover focus"
        },
        iI = {
            allowList: "object",
            animation: "boolean",
            boundary: "(string|element)",
            container: "(string|element|boolean)",
            customClass: "(string|function)",
            delay: "(number|object)",
            fallbackPlacements: "array",
            html: "boolean",
            offset: "(array|string|function)",
            placement: "(string|function)",
            popperConfig: "(null|object|function)",
            sanitize: "boolean",
            sanitizeFn: "(null|function)",
            selector: "(string|boolean)",
            template: "string",
            title: "(string|element|function)",
            trigger: "string"
        };
    class i9 extends W {
        constructor(e, t) {
            if (void 0 === tS) throw TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");
            super(e, t), this._isEnabled = !0, this._timeout = 0, this._isHovered = !1, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners()
        }
        static get Default() {
            return iL
        }
        static get DefaultType() {
            return iI
        }
        static get NAME() {
            return "tooltip"
        }
        enable() {
            this._isEnabled = !0
        }
        disable() {
            this._isEnabled = !1
        }
        toggleEnabled() {
            this._isEnabled = !this._isEnabled
        }
        toggle(e) {
            if (this._isEnabled) {
                if (e) {
                    let t = this._initializeOnDelegatedTarget(e);
                    return t._activeTrigger.click = !t._activeTrigger.click, void(t._isWithActiveTrigger() ? t._enter() : t._leave())
                }
                this._isShown() ? this._leave() : this._enter()
            }
        }
        dispose() {
            clearTimeout(this._timeout), I.off(this._element.closest(iS), iD, this._hideModalHandler), this.tip && this.tip.remove(), this._disposePopper(), super.dispose()
        }
        show() {
            if ("none" === this._element.style.display) throw Error("Please use show on visible elements");
            if (!this._isWithContent() || !this._isEnabled) return;
            let e = I.trigger(this._element, this.constructor.eventName("show")),
                t = (d(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
            if (e.defaultPrevented || !t) return;
            this.tip && (this.tip.remove(), this.tip = null);
            let i = this._getTipElement();
            this._element.setAttribute("aria-describedby", i.getAttribute("id"));
            let {
                container: n
            } = this._config;
            if (this._element.ownerDocument.documentElement.contains(this.tip) || (n.append(i), I.trigger(this._element, this.constructor.eventName("inserted"))), this._popper ? this._popper.update() : this._popper = this._createPopper(i), i.classList.add(iE), "ontouchstart" in document.documentElement)
                for (let s of [].concat(...document.body.children)) I.on(s, "mouseover", c);
            this._queueCallback(() => {
                let e = this._isHovered;
                this._isHovered = !1, I.trigger(this._element, this.constructor.eventName("shown")), e && this._leave()
            }, this.tip, this._isAnimated())
        }
        hide() {
            if (!this._isShown() || I.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) return;
            let e = this._getTipElement();
            if (e.classList.remove(iE), "ontouchstart" in document.documentElement)
                for (let t of [].concat(...document.body.children)) I.off(t, "mouseover", c);
            this._activeTrigger.click = !1, this._activeTrigger.focus = !1, this._activeTrigger.hover = !1, this._isHovered = !1, this._queueCallback(() => {
                this._isWithActiveTrigger() || (this._isHovered || e.remove(), this._element.removeAttribute("aria-describedby"), I.trigger(this._element, this.constructor.eventName("hidden")), this._disposePopper())
            }, this.tip, this._isAnimated())
        }
        update() {
            this._popper && this._popper.update()
        }
        _isWithContent() {
            return Boolean(this._getTitle())
        }
        _getTipElement() {
            return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip
        }
        _createTipElement(e) {
            let t = this._getTemplateFactory(e).toHtml();
            if (!t) return null;
            t.classList.remove(iT, iE), t.classList.add(`bs-${this.constructor.NAME}-auto`);
            let i = (e => {
                do e += Math.floor(1e6 * Math.random()); while (document.getElementById(e));
                return e
            })(this.constructor.NAME).toString();
            return t.setAttribute("id", i), this._isAnimated() && t.classList.add(iT), t
        }
        setContent(e) {
            this._newContent = e, this._isShown() && (this._disposePopper(), this.show())
        }
        _getTemplateFactory(e) {
            return this._templateFactory ? this._templateFactory.changeContent(e) : this._templateFactory = new ix({
                ...this._config,
                content: e,
                extraClass: this._resolvePossibleFunction(this._config.customClass)
            }), this._templateFactory
        }
        _getContentForTemplate() {
            return {
                ".tooltip-inner": this._getTitle()
            }
        }
        _getTitle() {
            return this._resolvePossibleFunction(this._config.title) || this._config.originalTitle
        }
        _initializeOnDelegatedTarget(e) {
            return this.constructor.getOrCreateInstance(e.delegateTarget, this._getDelegateConfig())
        }
        _isAnimated() {
            return this._config.animation || this.tip && this.tip.classList.contains(iT)
        }
        _isShown() {
            return this.tip && this.tip.classList.contains(iE)
        }
        _createPopper(e) {
            let t = "function" == typeof this._config.placement ? this._config.placement.call(this, e, this._element) : this._config.placement,
                i = iP[t.toUpperCase()];
            return tE(this._element, e, this._getPopperConfig(i))
        }
        _getOffset() {
            let {
                offset: e
            } = this._config;
            return "string" == typeof e ? e.split(",").map(e => Number.parseInt(e, 10)) : "function" == typeof e ? t => e(t, this._element) : e
        }
        _resolvePossibleFunction(e) {
            return "function" == typeof e ? e.call(this._element) : e
        }
        _getPopperConfig(e) {
            let t = {
                placement: e,
                modifiers: [{
                    name: "flip",
                    options: {
                        fallbackPlacements: this._config.fallbackPlacements
                    }
                }, {
                    name: "offset",
                    options: {
                        offset: this._getOffset()
                    }
                }, {
                    name: "preventOverflow",
                    options: {
                        boundary: this._config.boundary
                    }
                }, {
                    name: "arrow",
                    options: {
                        element: `.${this.constructor.NAME}-arrow`
                    }
                }, {
                    name: "preSetPlacement",
                    enabled: !0,
                    phase: "beforeMain",
                    fn: e => {
                        this._getTipElement().setAttribute("data-popper-placement", e.state.placement)
                    }
                }]
            };
            return {
                ...t,
                ..."function" == typeof this._config.popperConfig ? this._config.popperConfig(t) : this._config.popperConfig
            }
        }
        _setListeners() {
            let e = this._config.trigger.split(" ");
            for (let t of e)
                if ("click" === t) I.on(this._element, this.constructor.eventName("click"), this._config.selector, e => this.toggle(e));
                else if ("manual" !== t) {
                let i = t === iM ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"),
                    n = t === iM ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
                I.on(this._element, i, this._config.selector, e => {
                    let t = this._initializeOnDelegatedTarget(e);
                    t._activeTrigger["focusin" === e.type ? iA : iM] = !0, t._enter()
                }), I.on(this._element, n, this._config.selector, e => {
                    let t = this._initializeOnDelegatedTarget(e);
                    t._activeTrigger["focusout" === e.type ? iA : iM] = t._element.contains(e.relatedTarget), t._leave()
                })
            }
            this._hideModalHandler = () => {
                this._element && this.hide()
            }, I.on(this._element.closest(iS), iD, this._hideModalHandler), this._config.selector ? this._config = {
                ...this._config,
                trigger: "manual",
                selector: ""
            } : this._fixTitle()
        }
        _fixTitle() {
            let e = this._config.originalTitle;
            e && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", e), this._element.removeAttribute("title"))
        }
        _enter() {
            this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
                this._isHovered && this.show()
            }, this._config.delay.show))
        }
        _leave() {
            this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
                this._isHovered || this.hide()
            }, this._config.delay.hide))
        }
        _setTimeout(e, t) {
            clearTimeout(this._timeout), this._timeout = setTimeout(e, t)
        }
        _isWithActiveTrigger() {
            return Object.values(this._activeTrigger).includes(!0)
        }
        _getConfig(e) {
            let t = B.getDataAttributes(this._element);
            for (let i of Object.keys(t)) ik.has(i) && delete t[i];
            return e = {
                ...t,
                ..."object" == typeof e && e ? e : {}
            }, e = this._mergeConfigObj(e), e = this._configAfterMerge(e), this._typeCheckConfig(e), e
        }
        _configAfterMerge(e) {
            return e.container = !1 === e.container ? document.body : r(e.container), "number" == typeof e.delay && (e.delay = {
                show: e.delay,
                hide: e.delay
            }), e.originalTitle = this._element.getAttribute("title") || "", "number" == typeof e.title && (e.title = e.title.toString()), "number" == typeof e.content && (e.content = e.content.toString()), e
        }
        _getDelegateConfig() {
            let e = {};
            for (let t in this._config) this.constructor.Default[t] !== this._config[t] && (e[t] = this._config[t]);
            return e
        }
        _disposePopper() {
            this._popper && (this._popper.destroy(), this._popper = null)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = i9.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    m(i9);
    let iO = {
            ...i9.Default,
            content: "",
            offset: [0, 8],
            placement: "right",
            template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>',
            trigger: "click"
        },
        iN = {
            ...i9.DefaultType,
            content: "(null|string|element|function)"
        };
    class iz extends i9 {
        static get Default() {
            return iO
        }
        static get DefaultType() {
            return iN
        }
        static get NAME() {
            return "popover"
        }
        _isWithContent() {
            return this._getTitle() || this._getContent()
        }
        _getContentForTemplate() {
            return {
                ".popover-header": this._getTitle(),
                ".popover-body": this._getContent()
            }
        }
        _getContent() {
            return this._resolvePossibleFunction(this._config.content)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = iz.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    m(iz);
    let i0 = "click.bs.scrollspy",
        iH = "active",
        iY = "[href]",
        iB = {
            offset: null,
            rootMargin: "0px 0px -25%",
            smoothScroll: !1,
            target: null
        },
        iq = {
            offset: "(number|null)",
            rootMargin: "string",
            smoothScroll: "boolean",
            target: "element"
        };
    class iW extends W {
        constructor(e, t) {
            super(e, t), this._targetLinks = new Map, this._observableSections = new Map, this._rootElement = "visible" === getComputedStyle(this._element).overflowY ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = {
                visibleEntryTop: 0,
                parentScrollTop: 0
            }, this.refresh()
        }
        static get Default() {
            return iB
        }
        static get DefaultType() {
            return iq
        }
        static get NAME() {
            return "scrollspy"
        }
        refresh() {
            for (let e of (this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver(), this._observableSections.values())) this._observer.observe(e)
        }
        dispose() {
            this._observer.disconnect(), super.dispose()
        }
        _configAfterMerge(e) {
            return e.target = r(e.target) || document.body, e
        }
        _maybeEnableSmoothScroll() {
            this._config.smoothScroll && (I.off(this._config.target, i0), I.on(this._config.target, i0, iY, e => {
                let t = this._observableSections.get(e.target.hash);
                if (t) {
                    e.preventDefault();
                    let i = this._rootElement || window,
                        n = t.offsetTop - this._element.offsetTop;
                    if (i.scrollTo) return void i.scrollTo({
                        top: n,
                        behavior: "smooth"
                    });
                    i.scrollTop = n
                }
            }))
        }
        _getNewObserver() {
            let e = {
                root: this._rootElement,
                threshold: [.1, .5, 1],
                rootMargin: this._getRootMargin()
            };
            return new IntersectionObserver(e => this._observerCallback(e), e)
        }
        _observerCallback(e) {
            let t = e => this._targetLinks.get(`#${e.target.id}`),
                i = e => {
                    this._previousScrollData.visibleEntryTop = e.target.offsetTop, this._process(t(e))
                },
                n = (this._rootElement || document.documentElement).scrollTop,
                s = n >= this._previousScrollData.parentScrollTop;
            for (let a of (this._previousScrollData.parentScrollTop = n, e)) {
                if (!a.isIntersecting) {
                    this._activeTarget = null, this._clearActiveClass(t(a));
                    continue
                }
                let r = a.target.offsetTop >= this._previousScrollData.visibleEntryTop;
                if (s && r) {
                    if (i(a), !n) return
                } else s || r || i(a)
            }
        }
        _getRootMargin() {
            return this._config.offset ? `${this._config.offset}px 0px -30%` : this._config.rootMargin
        }
        _initializeTargetsAndObservables() {
            this._targetLinks = new Map, this._observableSections = new Map;
            let e = X.find(iY, this._config.target);
            for (let t of e) {
                if (!t.hash || l(t)) continue;
                let i = X.findOne(t.hash, this._element);
                o(i) && (this._targetLinks.set(t.hash, t), this._observableSections.set(t.hash, i))
            }
        }
        _process(e) {
            this._activeTarget !== e && (this._clearActiveClass(this._config.target), this._activeTarget = e, e.classList.add(iH), this._activateParents(e), I.trigger(this._element, "activate.bs.scrollspy", {
                relatedTarget: e
            }))
        }
        _activateParents(e) {
            if (e.classList.contains("dropdown-item")) X.findOne(".dropdown-toggle", e.closest(".dropdown")).classList.add(iH);
            else
                for (let t of X.parents(e, ".nav, .list-group"))
                    for (let i of X.prev(t, ".nav-link, .nav-item > .nav-link, .list-group-item")) i.classList.add(iH)
        }
        _clearActiveClass(e) {
            e.classList.remove(iH);
            let t = X.find("[href].active", e);
            for (let i of t) i.classList.remove(iH)
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = iW.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    I.on(window, "load.bs.scrollspy.data-api", () => {
        for (let e of X.find('[data-bs-spy="scroll"]')) iW.getOrCreateInstance(e)
    }), m(iW);
    let i1 = "ArrowRight",
        i3 = "ArrowDown",
        iF = "active",
        iR = "fade",
        ij = "show",
        iV = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',
        i2 = `.nav-link:not(.dropdown-toggle), .list-group-item:not(.dropdown-toggle), [role="tab"]:not(.dropdown-toggle), ${iV}`;
    class i5 extends W {
        constructor(e) {
            super(e), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), I.on(this._element, "keydown.bs.tab", e => this._keydown(e)))
        }
        static get NAME() {
            return "tab"
        }
        show() {
            let e = this._element;
            if (this._elemIsActive(e)) return;
            let t = this._getActiveElem(),
                i = t ? I.trigger(t, "hide.bs.tab", {
                    relatedTarget: e
                }) : null;
            I.trigger(e, "show.bs.tab", {
                relatedTarget: t
            }).defaultPrevented || i && i.defaultPrevented || (this._deactivate(t, e), this._activate(e, t))
        }
        _activate(e, t) {
            e && (e.classList.add(iF), this._activate(n(e)), this._queueCallback(() => {
                "tab" === e.getAttribute("role") ? (e.focus(), e.removeAttribute("tabindex"), e.setAttribute("aria-selected", !0), this._toggleDropDown(e, !0), I.trigger(e, "shown.bs.tab", {
                    relatedTarget: t
                })) : e.classList.add(ij)
            }, e, e.classList.contains(iR)))
        }
        _deactivate(e, t) {
            e && (e.classList.remove(iF), e.blur(), this._deactivate(n(e)), this._queueCallback(() => {
                "tab" === e.getAttribute("role") ? (e.setAttribute("aria-selected", !1), e.setAttribute("tabindex", "-1"), this._toggleDropDown(e, !1), I.trigger(e, "hidden.bs.tab", {
                    relatedTarget: t
                })) : e.classList.remove(ij)
            }, e, e.classList.contains(iR)))
        }
        _keydown(e) {
            if (!["ArrowLeft", i1, "ArrowUp", i3].includes(e.key)) return;
            e.stopPropagation(), e.preventDefault();
            let t = [i1, i3].includes(e.key),
                i = y(this._getChildren().filter(e => !l(e)), e.target, t, !0);
            i && i5.getOrCreateInstance(i).show()
        }
        _getChildren() {
            return X.find(i2, this._parent)
        }
        _getActiveElem() {
            return this._getChildren().find(e => this._elemIsActive(e)) || null
        }
        _setInitialAttributes(e, t) {
            for (let i of (this._setAttributeIfNotExists(e, "role", "tablist"), t)) this._setInitialAttributesOnChild(i)
        }
        _setInitialAttributesOnChild(e) {
            e = this._getInnerElement(e);
            let t = this._elemIsActive(e),
                i = this._getOuterElement(e);
            e.setAttribute("aria-selected", t), i !== e && this._setAttributeIfNotExists(i, "role", "presentation"), t || e.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(e, "role", "tab"), this._setInitialAttributesOnTargetPanel(e)
        }
        _setInitialAttributesOnTargetPanel(e) {
            let t = n(e);
            t && (this._setAttributeIfNotExists(t, "role", "tabpanel"), e.id && this._setAttributeIfNotExists(t, "aria-labelledby", `#${e.id}`))
        }
        _toggleDropDown(e, t) {
            let i = this._getOuterElement(e);
            if (!i.classList.contains("dropdown")) return;
            let n = (e, n) => {
                let s = X.findOne(e, i);
                s && s.classList.toggle(n, t)
            };
            n(".dropdown-toggle", iF), n(".dropdown-menu", ij), n(".dropdown-item", iF), i.setAttribute("aria-expanded", t)
        }
        _setAttributeIfNotExists(e, t, i) {
            e.hasAttribute(t) || e.setAttribute(t, i)
        }
        _elemIsActive(e) {
            return e.classList.contains(iF)
        }
        _getInnerElement(e) {
            return e.matches(i2) ? e : X.findOne(i2, e)
        }
        _getOuterElement(e) {
            return e.closest(".nav-item, .list-group-item") || e
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = i5.getOrCreateInstance(this);
                if ("string" == typeof e) {
                    if (void 0 === t[e] || e.startsWith("_") || "constructor" === e) throw TypeError(`No method named "${e}"`);
                    t[e]()
                }
            })
        }
    }
    I.on(document, "click.bs.tab", iV, function(e) {
        ["A", "AREA"].includes(this.tagName) && e.preventDefault(), l(this) || i5.getOrCreateInstance(this).show()
    }), I.on(window, "load.bs.tab", () => {
        for (let e of X.find('.active[data-bs-toggle="tab"], .active[data-bs-toggle="pill"], .active[data-bs-toggle="list"]')) i5.getOrCreateInstance(e)
    }), m(i5);
    let iX = "hide",
        i4 = "show",
        i7 = "showing",
        i6 = {
            animation: "boolean",
            autohide: "boolean",
            delay: "number"
        },
        iG = {
            animation: !0,
            autohide: !0,
            delay: 5e3
        };
    class iU extends W {
        constructor(e, t) {
            super(e, t), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners()
        }
        static get Default() {
            return iG
        }
        static get DefaultType() {
            return i6
        }
        static get NAME() {
            return "toast"
        }
        show() {
            I.trigger(this._element, "show.bs.toast").defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(iX), h(this._element), this._element.classList.add(i4, i7), this._queueCallback(() => {
                this._element.classList.remove(i7), I.trigger(this._element, "shown.bs.toast"), this._maybeScheduleHide()
            }, this._element, this._config.animation))
        }
        hide() {
            this.isShown() && (I.trigger(this._element, "hide.bs.toast").defaultPrevented || (this._element.classList.add(i7), this._queueCallback(() => {
                this._element.classList.add(iX), this._element.classList.remove(i7, i4), I.trigger(this._element, "hidden.bs.toast")
            }, this._element, this._config.animation)))
        }
        dispose() {
            this._clearTimeout(), this.isShown() && this._element.classList.remove(i4), super.dispose()
        }
        isShown() {
            return this._element.classList.contains(i4)
        }
        _maybeScheduleHide() {
            this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
                this.hide()
            }, this._config.delay)))
        }
        _onInteraction(e, t) {
            switch (e.type) {
                case "mouseover":
                case "mouseout":
                    this._hasMouseInteraction = t;
                    break;
                case "focusin":
                case "focusout":
                    this._hasKeyboardInteraction = t
            }
            if (t) return void this._clearTimeout();
            let i = e.relatedTarget;
            this._element === i || this._element.contains(i) || this._maybeScheduleHide()
        }
        _setListeners() {
            I.on(this._element, "mouseover.bs.toast", e => this._onInteraction(e, !0)), I.on(this._element, "mouseout.bs.toast", e => this._onInteraction(e, !1)), I.on(this._element, "focusin.bs.toast", e => this._onInteraction(e, !0)), I.on(this._element, "focusout.bs.toast", e => this._onInteraction(e, !1))
        }
        _clearTimeout() {
            clearTimeout(this._timeout), this._timeout = null
        }
        static jQueryInterface(e) {
            return this.each(function() {
                let t = iU.getOrCreateInstance(this, e);
                if ("string" == typeof e) {
                    if (void 0 === t[e]) throw TypeError(`No method named "${e}"`);
                    t[e](this)
                }
            })
        }
    }
    return F(iU), m(iU), {
        Alert: R,
        Button: V,
        Carousel: eo,
        Collapse: ef,
        Dropdown: t1,
        Modal: ir,
        Offcanvas: ig,
        Popover: iz,
        ScrollSpy: iW,
        Tab: i5,
        Toast: iU,
        Tooltip: i9
    }
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).flatpickr = t()
}(this, function() {
    "use strict";
    var e = function() {
        return (e = Object.assign || function(e) {
            for (var t, i = 1, n = arguments.length; i < n; i++)
                for (var s in t = arguments[i]) Object.prototype.hasOwnProperty.call(t, s) && (e[s] = t[s]);
            return e
        }).apply(this, arguments)
    };

    function t() {
        for (var e = 0, t = 0, i = arguments.length; t < i; t++) e += arguments[t].length;
        var n = Array(e),
            s = 0;
        for (t = 0; t < i; t++)
            for (var a = arguments[t], r = 0, o = a.length; r < o; r++, s++) n[s] = a[r];
        return n
    }
    var i = ["onChange", "onClose", "onDayCreate", "onDestroy", "onKeyDown", "onMonthChange", "onOpen", "onParseConfig", "onReady", "onValueUpdate", "onYearChange", "onPreCalendarPosition"],
        n = {
            _disable: [],
            allowInput: !1,
            allowInvalidPreload: !1,
            altFormat: "F j, Y",
            altInput: !1,
            altInputClass: "form-control input",
            animate: "object" == typeof window && -1 === window.navigator.userAgent.indexOf("MSIE"),
            ariaDateFormat: "F j, Y",
            autoFillDefaultTime: !0,
            clickOpens: !0,
            closeOnSelect: !0,
            conjunction: ", ",
            dateFormat: "Y-m-d",
            defaultHour: 12,
            defaultMinute: 0,
            defaultSeconds: 0,
            disable: [],
            disableMobile: !1,
            enableSeconds: !1,
            enableTime: !1,
            errorHandler: function(e) {
                return "undefined" != typeof console && console.warn(e)
            },
            getWeek: function(e) {
                var t = new Date(e.getTime());
                t.setHours(0, 0, 0, 0), t.setDate(t.getDate() + 3 - (t.getDay() + 6) % 7);
                var i = new Date(t.getFullYear(), 0, 4);
                return 1 + Math.round(((t.getTime() - i.getTime()) / 864e5 - 3 + (i.getDay() + 6) % 7) / 7)
            },
            hourIncrement: 1,
            ignoredFocusElements: [],
            inline: !1,
            locale: "default",
            minuteIncrement: 5,
            mode: "single",
            monthSelectorType: "dropdown",
            nextArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M13.207 8.472l-7.854 7.854-0.707-0.707 7.146-7.146-7.146-7.148 0.707-0.707 7.854 7.854z' /></svg>",
            noCalendar: !1,
            now: new Date,
            onChange: [],
            onClose: [],
            onDayCreate: [],
            onDestroy: [],
            onKeyDown: [],
            onMonthChange: [],
            onOpen: [],
            onParseConfig: [],
            onReady: [],
            onValueUpdate: [],
            onYearChange: [],
            onPreCalendarPosition: [],
            plugins: [],
            position: "auto",
            positionElement: void 0,
            prevArrow: "<svg version='1.1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' viewBox='0 0 17 17'><g></g><path d='M5.207 8.471l7.146 7.147-0.707 0.707-7.853-7.854 7.854-7.853 0.707 0.707-7.147 7.146z' /></svg>",
            shorthandCurrentMonth: !1,
            showMonths: 1,
            static: !1,
            time_24hr: !1,
            weekNumbers: !1,
            wrap: !1
        },
        s = {
            weekdays: {
                shorthand: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
                longhand: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
            },
            months: {
                shorthand: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
                longhand: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
            },
            daysInMonth: [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
            firstDayOfWeek: 0,
            ordinal: function(e) {
                var t = e % 100;
                if (t > 3 && t < 21) return "th";
                switch (t % 10) {
                    case 1:
                        return "st";
                    case 2:
                        return "nd";
                    case 3:
                        return "rd";
                    default:
                        return "th"
                }
            },
            rangeSeparator: " to ",
            weekAbbreviation: "Wk",
            scrollTitle: "Scroll to increment",
            toggleTitle: "Click to toggle",
            amPM: ["AM", "PM"],
            yearAriaLabel: "Year",
            monthAriaLabel: "Month",
            hourAriaLabel: "Hour",
            minuteAriaLabel: "Minute",
            time_24hr: !1
        },
        a = function(e, t) {
            return void 0 === t && (t = 2), ("000" + e).slice(-1 * t)
        },
        r = function(e) {
            return !0 === e ? 1 : 0
        };

    function o(e, t) {
        var i;
        return function() {
            var n = this,
                s = arguments;
            clearTimeout(i), i = setTimeout(function() {
                return e.apply(n, s)
            }, t)
        }
    }
    var l = function(e) {
        return e instanceof Array ? e : [e]
    };

    function d(e, t, i) {
        if (!0 === i) return e.classList.add(t);
        e.classList.remove(t)
    }

    function c(e, t, i) {
        var n = window.document.createElement(e);
        return t = t || "", i = i || "", n.className = t, void 0 !== i && (n.textContent = i), n
    }

    function h(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }

    function u(e, t) {
        var i = c("div", "numInputWrapper"),
            n = c("input", "numInput " + e),
            s = c("span", "arrowUp"),
            a = c("span", "arrowDown");
        if (-1 === navigator.userAgent.indexOf("MSIE 9.0") ? n.type = "number" : (n.type = "text", n.pattern = "\\d*"), void 0 !== t)
            for (var r in t) n.setAttribute(r, t[r]);
        return i.appendChild(n), i.appendChild(s), i.appendChild(a), i
    }

    function p(e) {
        try {
            return "function" == typeof e.composedPath ? e.composedPath()[0] : e.target
        } catch (t) {
            return e.target
        }
    }
    var f = function() {},
        m = function(e, t, i) {
            return i.months[t ? "shorthand" : "longhand"][e]
        },
        g = {
            D: f,
            F: function(e, t, i) {
                e.setMonth(i.months.longhand.indexOf(t))
            },
            G: function(e, t) {
                e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(t))
            },
            H: function(e, t) {
                e.setHours(parseFloat(t))
            },
            J: function(e, t) {
                e.setDate(parseFloat(t))
            },
            K: function(e, t, i) {
                e.setHours(e.getHours() % 12 + 12 * r(RegExp(i.amPM[1], "i").test(t)))
            },
            M: function(e, t, i) {
                e.setMonth(i.months.shorthand.indexOf(t))
            },
            S: function(e, t) {
                e.setSeconds(parseFloat(t))
            },
            U: function(e, t) {
                return new Date(1e3 * parseFloat(t))
            },
            W: function(e, t, i) {
                var n = parseInt(t),
                    s = new Date(e.getFullYear(), 0, 2 + 7 * (n - 1), 0, 0, 0, 0);
                return s.setDate(s.getDate() - s.getDay() + i.firstDayOfWeek), s
            },
            Y: function(e, t) {
                e.setFullYear(parseFloat(t))
            },
            Z: function(e, t) {
                return new Date(t)
            },
            d: function(e, t) {
                e.setDate(parseFloat(t))
            },
            h: function(e, t) {
                e.setHours((e.getHours() >= 12 ? 12 : 0) + parseFloat(t))
            },
            i: function(e, t) {
                e.setMinutes(parseFloat(t))
            },
            j: function(e, t) {
                e.setDate(parseFloat(t))
            },
            l: f,
            m: function(e, t) {
                e.setMonth(parseFloat(t) - 1)
            },
            n: function(e, t) {
                e.setMonth(parseFloat(t) - 1)
            },
            s: function(e, t) {
                e.setSeconds(parseFloat(t))
            },
            u: function(e, t) {
                return new Date(parseFloat(t))
            },
            w: f,
            y: function(e, t) {
                e.setFullYear(2e3 + parseFloat(t))
            }
        },
        v = {
            D: "",
            F: "",
            G: "(\\d\\d|\\d)",
            H: "(\\d\\d|\\d)",
            J: "(\\d\\d|\\d)\\w+",
            K: "",
            M: "",
            S: "(\\d\\d|\\d)",
            U: "(.+)",
            W: "(\\d\\d|\\d)",
            Y: "(\\d{4})",
            Z: "(.+)",
            d: "(\\d\\d|\\d)",
            h: "(\\d\\d|\\d)",
            i: "(\\d\\d|\\d)",
            j: "(\\d\\d|\\d)",
            l: "",
            m: "(\\d\\d|\\d)",
            n: "(\\d\\d|\\d)",
            s: "(\\d\\d|\\d)",
            u: "(.+)",
            w: "(\\d\\d|\\d)",
            y: "(\\d{2})"
        },
        y = {
            Z: function(e) {
                return e.toISOString()
            },
            D: function(e, t, i) {
                return t.weekdays.shorthand[y.w(e, t, i)]
            },
            F: function(e, t, i) {
                return m(y.n(e, t, i) - 1, !1, t)
            },
            G: function(e, t, i) {
                return a(y.h(e, t, i))
            },
            H: function(e) {
                return a(e.getHours())
            },
            J: function(e, t) {
                return void 0 !== t.ordinal ? e.getDate() + t.ordinal(e.getDate()) : e.getDate()
            },
            K: function(e, t) {
                return t.amPM[r(e.getHours() > 11)]
            },
            M: function(e, t) {
                return m(e.getMonth(), !0, t)
            },
            S: function(e) {
                return a(e.getSeconds())
            },
            U: function(e) {
                return e.getTime() / 1e3
            },
            W: function(e, t, i) {
                return i.getWeek(e)
            },
            Y: function(e) {
                return a(e.getFullYear(), 4)
            },
            d: function(e) {
                return a(e.getDate())
            },
            h: function(e) {
                return e.getHours() % 12 ? e.getHours() % 12 : 12
            },
            i: function(e) {
                return a(e.getMinutes())
            },
            j: function(e) {
                return e.getDate()
            },
            l: function(e, t) {
                return t.weekdays.longhand[e.getDay()]
            },
            m: function(e) {
                return a(e.getMonth() + 1)
            },
            n: function(e) {
                return e.getMonth() + 1
            },
            s: function(e) {
                return e.getSeconds()
            },
            u: function(e) {
                return e.getTime()
            },
            w: function(e) {
                return e.getDay()
            },
            y: function(e) {
                return String(e.getFullYear()).substring(2)
            }
        },
        $ = function(e) {
            var t = e.config,
                i = void 0 === t ? n : t,
                a = e.l10n,
                r = void 0 === a ? s : a,
                o = e.isMobile,
                l = void 0 !== o && o;
            return function(e, t, n) {
                var s = n || r;
                return void 0 === i.formatDate || l ? t.split("").map(function(t, n, a) {
                    return y[t] && "\\" !== a[n - 1] ? y[t](e, s, i) : "\\" !== t ? t : ""
                }).join("") : i.formatDate(e, t, s)
            }
        },
        b = function(e) {
            var t = e.config,
                i = void 0 === t ? n : t,
                a = e.l10n,
                r = void 0 === a ? s : a;
            return function(e, t, s, a) {
                if (0 === e || e) {
                    var o, l = a || r;
                    if (e instanceof Date) o = new Date(e.getTime());
                    else if ("string" != typeof e && void 0 !== e.toFixed) o = new Date(e);
                    else if ("string" == typeof e) {
                        var d = t || (i || n).dateFormat,
                            c = String(e).trim();
                        if ("today" === c) o = new Date, s = !0;
                        else if (i && i.parseDate) o = i.parseDate(e, d);
                        else if (/Z$/.test(c) || /GMT$/.test(c)) o = new Date(e);
                        else {
                            for (var h = void 0, u = [], p = 0, f = 0, m = ""; p < d.length; p++) {
                                var y = d[p],
                                    $ = "\\" === y,
                                    b = "\\" === d[p - 1] || $;
                                if (v[y] && !b) {
                                    var w = RegExp(m += v[y]).exec(e);
                                    w && (h = !0) && u["Y" !== y ? "push" : "unshift"]({
                                        fn: g[y],
                                        val: w[++f]
                                    })
                                } else $ || (m += ".")
                            }
                            o = i && i.noCalendar ? new Date((new Date).setHours(0, 0, 0, 0)) : new Date((new Date).getFullYear(), 0, 1, 0, 0, 0, 0), u.forEach(function(e) {
                                var t;
                                return o = (0, e.fn)(o, e.val, l) || o
                            }), o = h ? o : void 0
                        }
                    }
                    if (o instanceof Date && !isNaN(o.getTime())) return !0 === s && o.setHours(0, 0, 0, 0), o;
                    i.errorHandler(Error("Invalid date provided: " + e))
                }
            }
        };

    function w(e, t, i) {
        return void 0 === i && (i = !0), !1 !== i ? new Date(e.getTime()).setHours(0, 0, 0, 0) - new Date(t.getTime()).setHours(0, 0, 0, 0) : e.getTime() - t.getTime()
    }
    var _ = function(e, t, i) {
        return 3600 * e + 60 * t + i
    };

    function C(e) {
        var t = e.defaultHour,
            i = e.defaultMinute,
            n = e.defaultSeconds;
        if (void 0 !== e.minDate) {
            var s = e.minDate.getHours(),
                a = e.minDate.getMinutes(),
                r = e.minDate.getSeconds();
            t < s && (t = s), t === s && i < a && (i = a), t === s && i === a && n < r && (n = e.minDate.getSeconds())
        }
        if (void 0 !== e.maxDate) {
            var o = e.maxDate.getHours(),
                l = e.maxDate.getMinutes();
            (t = Math.min(t, o)) === o && (i = Math.min(l, i)), t === o && i === l && (n = e.maxDate.getSeconds())
        }
        return {
            hours: t,
            minutes: i,
            seconds: n
        }
    }

    function x(f, g) {
        var y, x, k = {
            config: e(e({}, n), T.defaultConfig),
            l10n: s
        };

        function E() {
            var e;
            return (null === (e = k.calendarContainer) || void 0 === e ? void 0 : e.getRootNode()).activeElement || document.activeElement
        }

        function S(e) {
            return e.bind(k)
        }

        function D() {
            var e = k.config;
            !1 === e.weekNumbers && 1 === e.showMonths || !0 !== e.noCalendar && window.requestAnimationFrame(function() {
                if (void 0 !== k.calendarContainer && (k.calendarContainer.style.visibility = "hidden", k.calendarContainer.style.display = "block"), void 0 !== k.daysContainer) {
                    var t = (k.days.offsetWidth + 1) * e.showMonths;
                    k.daysContainer.style.width = t + "px", k.calendarContainer.style.width = t + (void 0 !== k.weekWrapper ? k.weekWrapper.offsetWidth : 0) + "px", k.calendarContainer.style.removeProperty("visibility"), k.calendarContainer.style.removeProperty("display")
                }
            })
        }

        function M(e) {
            if (0 === k.selectedDates.length) {
                var t = void 0 === k.config.minDate || w(new Date, k.config.minDate) >= 0 ? new Date : new Date(k.config.minDate.getTime()),
                    i = C(k.config);
                t.setHours(i.hours, i.minutes, i.seconds, t.getMilliseconds()), k.selectedDates = [t], k.latestSelectedDateObj = t
            }
            void 0 !== e && "blur" !== e.type && function(e) {
                e.preventDefault();
                var t = "keydown" === e.type,
                    i = p(e),
                    n = i;
                void 0 !== k.amPM && i === k.amPM && (k.amPM.textContent = k.l10n.amPM[r(k.amPM.textContent === k.l10n.amPM[0])]);
                var s = parseFloat(n.getAttribute("min")),
                    o = parseFloat(n.getAttribute("max")),
                    l = parseFloat(n.getAttribute("step")),
                    d = parseInt(n.value, 10),
                    c = d + l * (e.delta || (t ? 38 === e.which ? 1 : -1 : 0));
                if (void 0 !== n.value && 2 === n.value.length) {
                    var h = n === k.hourElement,
                        u = n === k.minuteElement;
                    c < s ? (c = o + c + r(!h) + (r(h) && r(!k.amPM)), u && Y(void 0, -1, k.hourElement)) : c > o && (c = n === k.hourElement ? c - o - r(!k.amPM) : s, u && Y(void 0, 1, k.hourElement)), k.amPM && h && (1 === l ? c + d === 23 : Math.abs(c - d) > l) && (k.amPM.textContent = k.l10n.amPM[r(k.amPM.textContent === k.l10n.amPM[0])]), n.value = a(c)
                }
            }(e);
            var n = k._input.value;
            A(), eC(), k._input.value !== n && k._debouncedChange()
        }

        function A() {
            if (void 0 !== k.hourElement && void 0 !== k.minuteElement) {
                var e, t, i = (parseInt(k.hourElement.value.slice(-2), 10) || 0) % 24,
                    n = (parseInt(k.minuteElement.value, 10) || 0) % 60,
                    s = void 0 !== k.secondElement ? (parseInt(k.secondElement.value, 10) || 0) % 60 : 0;
                void 0 !== k.amPM && (i = (e = i) % 12 + 12 * r((t = k.amPM.textContent) === k.l10n.amPM[1]));
                var a = void 0 !== k.config.minTime || k.config.minDate && k.minDateHasTime && k.latestSelectedDateObj && 0 === w(k.latestSelectedDateObj, k.config.minDate, !0),
                    o = void 0 !== k.config.maxTime || k.config.maxDate && k.maxDateHasTime && k.latestSelectedDateObj && 0 === w(k.latestSelectedDateObj, k.config.maxDate, !0);
                if (void 0 !== k.config.maxTime && void 0 !== k.config.minTime && k.config.minTime > k.config.maxTime) {
                    var l = _(k.config.minTime.getHours(), k.config.minTime.getMinutes(), k.config.minTime.getSeconds()),
                        d = _(k.config.maxTime.getHours(), k.config.maxTime.getMinutes(), k.config.maxTime.getSeconds()),
                        c = _(i, n, s);
                    if (c > d && c < l) {
                        var h, u, p, f = (u = Math.floor((h = l) / 3600), p = (h - 3600 * u) / 60, [u, p, h - 3600 * u - 60 * p]);
                        i = f[0], n = f[1], s = f[2]
                    }
                } else {
                    if (o) {
                        var m = void 0 !== k.config.maxTime ? k.config.maxTime : k.config.maxDate;
                        (i = Math.min(i, m.getHours())) === m.getHours() && (n = Math.min(n, m.getMinutes())), n === m.getMinutes() && (s = Math.min(s, m.getSeconds()))
                    }
                    if (a) {
                        var g = void 0 !== k.config.minTime ? k.config.minTime : k.config.minDate;
                        (i = Math.max(i, g.getHours())) === g.getHours() && n < g.getMinutes() && (n = g.getMinutes()), n === g.getMinutes() && (s = Math.max(s, g.getSeconds()))
                    }
                }
                L(i, n, s)
            }
        }

        function P(e) {
            var t = e || k.latestSelectedDateObj;
            t && t instanceof Date && L(t.getHours(), t.getMinutes(), t.getSeconds())
        }

        function L(e, t, i) {
            void 0 !== k.latestSelectedDateObj && k.latestSelectedDateObj.setHours(e % 24, t, i || 0, 0), k.hourElement && k.minuteElement && !k.isMobile && (k.hourElement.value = a(k.config.time_24hr ? e : (12 + e) % 12 + 12 * r(e % 12 == 0)), k.minuteElement.value = a(t), void 0 !== k.amPM && (k.amPM.textContent = k.l10n.amPM[r(e >= 12)]), void 0 !== k.secondElement && (k.secondElement.value = a(i)))
        }

        function I(e) {
            var t = parseInt(p(e).value) + (e.delta || 0);
            (t / 1e3 > 1 || "Enter" === e.key && !/[^\d]/.test(t.toString())) && ee(t)
        }

        function O(e, t, i, n) {
            return t instanceof Array ? t.forEach(function(t) {
                return O(e, t, i, n)
            }) : e instanceof Array ? e.forEach(function(e) {
                return O(e, t, i, n)
            }) : (e.addEventListener(t, i, n), void k._handlers.push({
                remove: function() {
                    return e.removeEventListener(t, i, n)
                }
            }))
        }

        function N() {
            ey("onChange")
        }

        function z(e, t) {
            var i = void 0 !== e ? k.parseDate(e) : k.latestSelectedDateObj || (k.config.minDate && k.config.minDate > k.now ? k.config.minDate : k.config.maxDate && k.config.maxDate < k.now ? k.config.maxDate : k.now),
                n = k.currentYear,
                s = k.currentMonth;
            try {
                void 0 !== i && (k.currentYear = i.getFullYear(), k.currentMonth = i.getMonth())
            } catch (a) {
                a.message = "Invalid date supplied: " + i, k.config.errorHandler(a)
            }
            t && k.currentYear !== n && (ey("onYearChange"), V()), t && (k.currentYear !== n || k.currentMonth !== s) && ey("onMonthChange"), k.redraw()
        }

        function H(e) {
            var t = p(e);
            ~t.className.indexOf("arrow") && Y(e, t.classList.contains("arrowUp") ? 1 : -1)
        }

        function Y(e, t, i) {
            var n = e && p(e),
                s = i || n && n.parentNode && n.parentNode.firstChild,
                a = e$("increment");
            a.delta = t, s && s.dispatchEvent(a)
        }

        function B(e, t, i, n) {
            var s, a = et(t, !0),
                r = c("span", e, t.getDate().toString());
            return r.dateObj = t, r.$i = n, r.setAttribute("aria-label", k.formatDate(t, k.config.ariaDateFormat)), -1 === e.indexOf("hidden") && 0 === w(t, k.now) && (k.todayDateElem = r, r.classList.add("today"), r.setAttribute("aria-current", "date")), a ? (r.tabIndex = -1, eb(t) && (r.classList.add("selected"), k.selectedDateElem = r, "range" === k.config.mode && (d(r, "startRange", k.selectedDates[0] && 0 === w(t, k.selectedDates[0], !0)), d(r, "endRange", k.selectedDates[1] && 0 === w(t, k.selectedDates[1], !0)), "nextMonthDay" === e && r.classList.add("inRange")))) : r.classList.add("flatpickr-disabled"), "range" === k.config.mode && (s = t, !("range" !== k.config.mode || k.selectedDates.length < 2) && w(s, k.selectedDates[0]) >= 0 && 0 >= w(s, k.selectedDates[1])) && !eb(t) && r.classList.add("inRange"), k.weekNumbers && 1 === k.config.showMonths && "prevMonthDay" !== e && n % 7 == 6 && k.weekNumbers.insertAdjacentHTML("beforeend", "<span class='flatpickr-day'>" + k.config.getWeek(t) + "</span>"), ey("onDayCreate", r), r
        }

        function q(e) {
            e.focus(), "range" === k.config.mode && ea(e)
        }

        function W(e) {
            for (var t = e > 0 ? 0 : k.config.showMonths - 1, i = e > 0 ? k.config.showMonths : -1, n = t; n != i; n += e)
                for (var s = k.daysContainer.children[n], a = e > 0 ? 0 : s.children.length - 1, r = e > 0 ? s.children.length : -1, o = a; o != r; o += e) {
                    var l = s.children[o];
                    if (-1 === l.className.indexOf("hidden") && et(l.dateObj)) return l
                }
        }

        function F(e, t) {
            var i = E(),
                n = ei(i || document.body),
                s = void 0 !== e ? e : n ? i : void 0 !== k.selectedDateElem && ei(k.selectedDateElem) ? k.selectedDateElem : void 0 !== k.todayDateElem && ei(k.todayDateElem) ? k.todayDateElem : W(t > 0 ? 1 : -1);
            void 0 === s ? k._input.focus() : n ? function(e, t) {
                for (var i = -1 === e.className.indexOf("Month") ? e.dateObj.getMonth() : k.currentMonth, n = t > 0 ? k.config.showMonths : -1, s = t > 0 ? 1 : -1, a = i - k.currentMonth; a != n; a += s)
                    for (var r = k.daysContainer.children[a], o = i - k.currentMonth === a ? e.$i + t : t < 0 ? r.children.length - 1 : 0, l = r.children.length, d = o; d >= 0 && d < l && d != (t > 0 ? l : -1); d += s) {
                        var c = r.children[d];
                        if (-1 === c.className.indexOf("hidden") && et(c.dateObj) && Math.abs(e.$i - d) >= Math.abs(t)) return q(c)
                    }
                k.changeMonth(s), F(W(s), 0)
            }(s, t) : q(s)
        }

        function R(e, t) {
            for (var i = (new Date(e, t, 1).getDay() - k.l10n.firstDayOfWeek + 7) % 7, n = k.utils.getDaysInMonth((t - 1 + 12) % 12, e), s = k.utils.getDaysInMonth(t, e), a = window.document.createDocumentFragment(), r = k.config.showMonths > 1, o = r ? "prevMonthDay hidden" : "prevMonthDay", l = r ? "nextMonthDay hidden" : "nextMonthDay", d = n + 1 - i, h = 0; d <= n; d++, h++) a.appendChild(B("flatpickr-day " + o, new Date(e, t - 1, d), 0, h));
            for (d = 1; d <= s; d++, h++) a.appendChild(B("flatpickr-day", new Date(e, t, d), 0, h));
            for (var u = s + 1; u <= 42 - i && (1 === k.config.showMonths || h % 7 != 0); u++, h++) a.appendChild(B("flatpickr-day " + l, new Date(e, t + 1, u % s), 0, h));
            var p = c("div", "dayContainer");
            return p.appendChild(a), p
        }

        function j() {
            if (void 0 !== k.daysContainer) {
                h(k.daysContainer), k.weekNumbers && h(k.weekNumbers);
                for (var e = document.createDocumentFragment(), t = 0; t < k.config.showMonths; t++) {
                    var i = new Date(k.currentYear, k.currentMonth, 1);
                    i.setMonth(k.currentMonth + t), e.appendChild(R(i.getFullYear(), i.getMonth()))
                }
                k.daysContainer.appendChild(e), k.days = k.daysContainer.firstChild, "range" === k.config.mode && 1 === k.selectedDates.length && ea()
            }
        }

        function V() {
            if (!(k.config.showMonths > 1 || "dropdown" !== k.config.monthSelectorType)) {
                k.monthsDropdownContainer.tabIndex = -1, k.monthsDropdownContainer.innerHTML = "";
                for (var e, t = 0; t < 12; t++)
                    if (e = t, !(void 0 !== k.config.minDate && k.currentYear === k.config.minDate.getFullYear() && e < k.config.minDate.getMonth()) && !(void 0 !== k.config.maxDate && k.currentYear === k.config.maxDate.getFullYear() && e > k.config.maxDate.getMonth())) {
                        var i = c("option", "flatpickr-monthDropdown-month");
                        i.value = new Date(k.currentYear, t).getMonth().toString(), i.textContent = m(t, k.config.shorthandCurrentMonth, k.l10n), i.tabIndex = -1, k.currentMonth === t && (i.selected = !0), k.monthsDropdownContainer.appendChild(i)
                    }
            }
        }

        function X() {
            var e, t = c("div", "flatpickr-month"),
                i = window.document.createDocumentFragment();
            k.config.showMonths > 1 || "static" === k.config.monthSelectorType ? e = c("span", "cur-month") : (k.monthsDropdownContainer = c("select", "flatpickr-monthDropdown-months"), k.monthsDropdownContainer.setAttribute("aria-label", k.l10n.monthAriaLabel), O(k.monthsDropdownContainer, "change", function(e) {
                var t = parseInt(p(e).value, 10);
                k.changeMonth(t - k.currentMonth), ey("onMonthChange")
            }), V(), e = k.monthsDropdownContainer);
            var n = u("cur-year", {
                    tabindex: "-1"
                }),
                s = n.getElementsByTagName("input")[0];
            s.setAttribute("aria-label", k.l10n.yearAriaLabel), k.config.minDate && s.setAttribute("min", k.config.minDate.getFullYear().toString()), k.config.maxDate && (s.setAttribute("max", k.config.maxDate.getFullYear().toString()), s.disabled = !!k.config.minDate && k.config.minDate.getFullYear() === k.config.maxDate.getFullYear());
            var a = c("div", "flatpickr-current-month");
            return a.appendChild(e), a.appendChild(n), i.appendChild(a), t.appendChild(i), {
                container: t,
                yearElement: s,
                monthElement: e
            }
        }

        function G() {
            h(k.monthNav), k.monthNav.appendChild(k.prevMonthNav), k.config.showMonths && (k.yearElements = [], k.monthElements = []);
            for (var e = k.config.showMonths; e--;) {
                var t = X();
                k.yearElements.push(t.yearElement), k.monthElements.push(t.monthElement), k.monthNav.appendChild(t.container)
            }
            k.monthNav.appendChild(k.nextMonthNav)
        }

        function U() {
            k.weekdayContainer ? h(k.weekdayContainer) : k.weekdayContainer = c("div", "flatpickr-weekdays");
            for (var e = k.config.showMonths; e--;) {
                var t = c("div", "flatpickr-weekdaycontainer");
                k.weekdayContainer.appendChild(t)
            }
            return K(), k.weekdayContainer
        }

        function K() {
            if (k.weekdayContainer) {
                var e = k.l10n.firstDayOfWeek,
                    i = t(k.l10n.weekdays.shorthand);
                e > 0 && e < i.length && (i = t(i.splice(e, i.length), i.splice(0, e)));
                for (var n = k.config.showMonths; n--;) k.weekdayContainer.children[n].innerHTML = "\n      <span class='flatpickr-weekday'>\n        " + i.join("</span><span class='flatpickr-weekday'>") + "\n      </span>\n      "
            }
        }

        function Q(e, t) {
            void 0 === t && (t = !0);
            var i = t ? e : e - k.currentMonth;
            i < 0 && !0 === k._hidePrevMonthArrow || i > 0 && !0 === k._hideNextMonthArrow || (k.currentMonth += i, (k.currentMonth < 0 || k.currentMonth > 11) && (k.currentYear += k.currentMonth > 11 ? 1 : -1, k.currentMonth = (k.currentMonth + 12) % 12, ey("onYearChange"), V()), j(), ey("onMonthChange"), ew())
        }

        function Z(e) {
            return k.calendarContainer.contains(e)
        }

        function J(e) {
            if (k.isOpen && !k.config.inline) {
                var t = p(e),
                    i = Z(t),
                    n = !(t === k.input || t === k.altInput || k.element.contains(t) || e.path && e.path.indexOf && (~e.path.indexOf(k.input) || ~e.path.indexOf(k.altInput))) && !i && !Z(e.relatedTarget),
                    s = !k.config.ignoredFocusElements.some(function(e) {
                        return e.contains(t)
                    });
                n && s && (k.config.allowInput && k.setDate(k._input.value, !1, k.config.altInput ? k.config.altFormat : k.config.dateFormat), void 0 !== k.timeContainer && void 0 !== k.minuteElement && void 0 !== k.hourElement && "" !== k.input.value && void 0 !== k.input.value && M(), k.close(), k.config && "range" === k.config.mode && 1 === k.selectedDates.length && k.clear(!1))
            }
        }

        function ee(e) {
            if (!(!e || k.config.minDate && e < k.config.minDate.getFullYear() || k.config.maxDate && e > k.config.maxDate.getFullYear())) {
                var t = e,
                    i = k.currentYear !== t;
                k.currentYear = t || k.currentYear, k.config.maxDate && k.currentYear === k.config.maxDate.getFullYear() ? k.currentMonth = Math.min(k.config.maxDate.getMonth(), k.currentMonth) : k.config.minDate && k.currentYear === k.config.minDate.getFullYear() && (k.currentMonth = Math.max(k.config.minDate.getMonth(), k.currentMonth)), i && (k.redraw(), ey("onYearChange"), V())
            }
        }

        function et(e, t) {
            void 0 === t && (t = !0);
            var i, n = k.parseDate(e, void 0, t);
            if (k.config.minDate && n && 0 > w(n, k.config.minDate, void 0 !== t ? t : !k.minDateHasTime) || k.config.maxDate && n && w(n, k.config.maxDate, void 0 !== t ? t : !k.maxDateHasTime) > 0) return !1;
            if (!k.config.enable && 0 === k.config.disable.length) return !0;
            if (void 0 === n) return !1;
            for (var s = !!k.config.enable, a = null !== (i = k.config.enable) && void 0 !== i ? i : k.config.disable, r = 0, o = void 0; r < a.length; r++) {
                if ("function" == typeof(o = a[r]) && o(n) || o instanceof Date && void 0 !== n && o.getTime() === n.getTime()) return s;
                if ("string" == typeof o) {
                    var l = k.parseDate(o, void 0, !0);
                    return l && l.getTime() === n.getTime() ? s : !s
                }
                if ("object" == typeof o && void 0 !== n && o.from && o.to && n.getTime() >= o.from.getTime() && n.getTime() <= o.to.getTime()) return s
            }
            return !s
        }

        function ei(e) {
            return void 0 !== k.daysContainer && -1 === e.className.indexOf("hidden") && -1 === e.className.indexOf("flatpickr-disabled") && k.daysContainer.contains(e)
        }

        function en(e) {
            var t = e.target === k._input,
                i = k._input.value.trimEnd() !== e_();
            !t || !i || e.relatedTarget && Z(e.relatedTarget) || k.setDate(k._input.value, !0, e.target === k.altInput ? k.config.altFormat : k.config.dateFormat)
        }

        function es(e) {
            var t = p(e),
                i = k.config.wrap ? f.contains(t) : t === k._input,
                n = k.config.allowInput,
                s = k.isOpen && (!n || !i),
                a = k.config.inline && i && !n;
            if (13 === e.keyCode && i) {
                if (n) return k.setDate(k._input.value, !0, t === k.altInput ? k.config.altFormat : k.config.dateFormat), k.close(), t.blur();
                k.open()
            } else if (Z(t) || s || a) {
                var r = !!k.timeContainer && k.timeContainer.contains(t);
                switch (e.keyCode) {
                    case 13:
                        r ? (e.preventDefault(), M(), eu()) : ep(e);
                        break;
                    case 27:
                        e.preventDefault(), eu();
                        break;
                    case 8:
                    case 46:
                        i && !k.config.allowInput && (e.preventDefault(), k.clear());
                        break;
                    case 37:
                    case 39:
                        if (r || i) k.hourElement && k.hourElement.focus();
                        else {
                            e.preventDefault();
                            var o = E();
                            if (void 0 !== k.daysContainer && (!1 === n || o && ei(o))) {
                                var l = 39 === e.keyCode ? 1 : -1;
                                e.ctrlKey ? (e.stopPropagation(), Q(l), F(W(1), 0)) : F(void 0, l)
                            }
                        }
                        break;
                    case 38:
                    case 40:
                        e.preventDefault();
                        var d = 40 === e.keyCode ? 1 : -1;
                        k.daysContainer && void 0 !== t.$i || t === k.input || t === k.altInput ? e.ctrlKey ? (e.stopPropagation(), ee(k.currentYear - d), F(W(1), 0)) : r || F(void 0, 7 * d) : t === k.currentYearElement ? ee(k.currentYear - d) : k.config.enableTime && (!r && k.hourElement && k.hourElement.focus(), M(e), k._debouncedChange());
                        break;
                    case 9:
                        if (r) {
                            var c = [k.hourElement, k.minuteElement, k.secondElement, k.amPM].concat(k.pluginElements).filter(function(e) {
                                    return e
                                }),
                                h = c.indexOf(t);
                            if (-1 !== h) {
                                var u = c[h + (e.shiftKey ? -1 : 1)];
                                e.preventDefault(), (u || k._input).focus()
                            }
                        } else !k.config.noCalendar && k.daysContainer && k.daysContainer.contains(t) && e.shiftKey && (e.preventDefault(), k._input.focus())
                }
            }
            if (void 0 !== k.amPM && t === k.amPM) switch (e.key) {
                case k.l10n.amPM[0].charAt(0):
                case k.l10n.amPM[0].charAt(0).toLowerCase():
                    k.amPM.textContent = k.l10n.amPM[0], A(), eC();
                    break;
                case k.l10n.amPM[1].charAt(0):
                case k.l10n.amPM[1].charAt(0).toLowerCase():
                    k.amPM.textContent = k.l10n.amPM[1], A(), eC()
            }(i || Z(t)) && ey("onKeyDown", e)
        }

        function ea(e, t) {
            if (void 0 === t && (t = "flatpickr-day"), 1 === k.selectedDates.length && (!e || e.classList.contains(t) && !e.classList.contains("flatpickr-disabled"))) {
                for (var i = e ? e.dateObj.getTime() : k.days.firstElementChild.dateObj.getTime(), n = k.parseDate(k.selectedDates[0], void 0, !0).getTime(), s = Math.min(i, k.selectedDates[0].getTime()), a = Math.max(i, k.selectedDates[0].getTime()), r = !1, o = 0, l = 0, d = s; d < a; d += 864e5) et(new Date(d), !0) || (r = r || d > s && d < a, d < n && (!o || d > o) ? o = d : d > n && (!l || d < l) && (l = d));
                Array.from(k.rContainer.querySelectorAll("*:nth-child(-n+" + k.config.showMonths + ") > ." + t)).forEach(function(t) {
                    var s, a, d, c = t.dateObj.getTime(),
                        h = o > 0 && c < o || l > 0 && c > l;
                    if (h) return t.classList.add("notAllowed"), void["inRange", "startRange", "endRange"].forEach(function(e) {
                        t.classList.remove(e)
                    });
                    r && !h || (["startRange", "inRange", "endRange", "notAllowed"].forEach(function(e) {
                        t.classList.remove(e)
                    }), void 0 !== e && (e.classList.add(i <= k.selectedDates[0].getTime() ? "startRange" : "endRange"), n < i && c === n ? t.classList.add("startRange") : n > i && c === n && t.classList.add("endRange"), c >= o && (0 === l || c <= l) && (a = n, d = i, (s = c) > Math.min(a, d) && s < Math.max(a, d)) && t.classList.add("inRange")))
                })
            }
        }

        function er() {
            !k.isOpen || k.config.static || k.config.inline || ec()
        }

        function eo(e) {
            return function(t) {
                var i = k.config["_" + e + "Date"] = k.parseDate(t, k.config.dateFormat),
                    n = k.config["_" + ("min" === e ? "max" : "min") + "Date"];
                void 0 !== i && (k["min" === e ? "minDateHasTime" : "maxDateHasTime"] = i.getHours() > 0 || i.getMinutes() > 0 || i.getSeconds() > 0), k.selectedDates && (k.selectedDates = k.selectedDates.filter(function(e) {
                    return et(e)
                }), k.selectedDates.length || "min" !== e || P(i), eC()), k.daysContainer && (eh(), void 0 !== i ? k.currentYearElement[e] = i.getFullYear().toString() : k.currentYearElement.removeAttribute(e), k.currentYearElement.disabled = !!n && void 0 !== i && n.getFullYear() === i.getFullYear())
            }
        }

        function el() {
            return k.config.wrap ? f.querySelector("[data-input]") : f
        }

        function ed() {
            "object" != typeof k.config.locale && void 0 === T.l10ns[k.config.locale] && k.config.errorHandler(Error("flatpickr: invalid locale " + k.config.locale)), k.l10n = e(e({}, T.l10ns.default), "object" == typeof k.config.locale ? k.config.locale : "default" !== k.config.locale ? T.l10ns[k.config.locale] : void 0), v.D = "(" + k.l10n.weekdays.shorthand.join("|") + ")", v.l = "(" + k.l10n.weekdays.longhand.join("|") + ")", v.M = "(" + k.l10n.months.shorthand.join("|") + ")", v.F = "(" + k.l10n.months.longhand.join("|") + ")", v.K = "(" + k.l10n.amPM[0] + "|" + k.l10n.amPM[1] + "|" + k.l10n.amPM[0].toLowerCase() + "|" + k.l10n.amPM[1].toLowerCase() + ")", void 0 === e(e({}, g), JSON.parse(JSON.stringify(f.dataset || {}))).time_24hr && void 0 === T.defaultConfig.time_24hr && (k.config.time_24hr = k.l10n.time_24hr), k.formatDate = $(k), k.parseDate = b({
                config: k.config,
                l10n: k.l10n
            })
        }

        function ec(e) {
            if ("function" != typeof k.config.position) {
                if (void 0 !== k.calendarContainer) {
                    ey("onPreCalendarPosition");
                    var t = e || k._positionElement,
                        i = Array.prototype.reduce.call(k.calendarContainer.children, function(e, t) {
                            return e + t.offsetHeight
                        }, 0),
                        n = k.calendarContainer.offsetWidth,
                        s = k.config.position.split(" "),
                        a = s[0],
                        r = s.length > 1 ? s[1] : null,
                        o = t.getBoundingClientRect(),
                        l = window.innerHeight - o.bottom,
                        c = "above" === a || "below" !== a && l < i && o.top > i,
                        h = window.pageYOffset + o.top + (c ? -i - 2 : t.offsetHeight + 2);
                    if (d(k.calendarContainer, "arrowTop", !c), d(k.calendarContainer, "arrowBottom", c), !k.config.inline) {
                        var u = window.pageXOffset + o.left,
                            p = !1,
                            f = !1;
                        "center" === r ? (u -= (n - o.width) / 2, p = !0) : "right" === r && (u -= n - o.width, f = !0), d(k.calendarContainer, "arrowLeft", !p && !f), d(k.calendarContainer, "arrowCenter", p), d(k.calendarContainer, "arrowRight", f);
                        var m = window.document.body.offsetWidth - (window.pageXOffset + o.right),
                            g = u + n > window.document.body.offsetWidth,
                            v = m + n > window.document.body.offsetWidth;
                        if (d(k.calendarContainer, "rightMost", g), !k.config.static) {
                            if (k.calendarContainer.style.top = h + "px", g) {
                                if (v) {
                                    var y = function() {
                                        for (var e, t = null, i = 0; i < document.styleSheets.length; i++) {
                                            var n = document.styleSheets[i];
                                            if (n.cssRules) {
                                                try {
                                                    n.cssRules
                                                } catch (s) {
                                                    continue
                                                }
                                                t = n;
                                                break
                                            }
                                        }
                                        return null != t ? t : (e = document.createElement("style"), document.head.appendChild(e), e.sheet)
                                    }();
                                    if (void 0 === y) return;
                                    var $ = window.document.body.offsetWidth,
                                        b = y.cssRules.length,
                                        w = "{left:" + o.left + "px;right:auto;}";
                                    d(k.calendarContainer, "rightMost", !1), d(k.calendarContainer, "centerMost", !0), y.insertRule(".flatpickr-calendar.centerMost:before,.flatpickr-calendar.centerMost:after" + w, b), k.calendarContainer.style.left = Math.max(0, $ / 2 - n / 2) + "px", k.calendarContainer.style.right = "auto"
                                } else k.calendarContainer.style.left = "auto", k.calendarContainer.style.right = m + "px"
                            } else k.calendarContainer.style.left = u + "px", k.calendarContainer.style.right = "auto"
                        }
                    }
                }
            } else k.config.position(k, e)
        }

        function eh() {
            k.config.noCalendar || k.isMobile || (V(), ew(), j())
        }

        function eu() {
            k._input.focus(), -1 !== window.navigator.userAgent.indexOf("MSIE") || void 0 !== navigator.msMaxTouchPoints ? setTimeout(k.close, 0) : k.close()
        }

        function ep(e) {
            e.preventDefault(), e.stopPropagation();
            var t = function e(t, i) {
                return i(t) ? t : t.parentNode ? e(t.parentNode, i) : void 0
            }(p(e), function(e) {
                return e.classList && e.classList.contains("flatpickr-day") && !e.classList.contains("flatpickr-disabled") && !e.classList.contains("notAllowed")
            });
            if (void 0 !== t) {
                var i = t,
                    n = k.latestSelectedDateObj = new Date(i.dateObj.getTime()),
                    s = (n.getMonth() < k.currentMonth || n.getMonth() > k.currentMonth + k.config.showMonths - 1) && "range" !== k.config.mode;
                if (k.selectedDateElem = i, "single" === k.config.mode) k.selectedDates = [n];
                else if ("multiple" === k.config.mode) {
                    var a = eb(n);
                    a ? k.selectedDates.splice(parseInt(a), 1) : k.selectedDates.push(n)
                } else "range" === k.config.mode && (2 === k.selectedDates.length && k.clear(!1, !1), k.latestSelectedDateObj = n, k.selectedDates.push(n), 0 !== w(n, k.selectedDates[0], !0) && k.selectedDates.sort(function(e, t) {
                    return e.getTime() - t.getTime()
                }));
                if (A(), s) {
                    var r = k.currentYear !== n.getFullYear();
                    k.currentYear = n.getFullYear(), k.currentMonth = n.getMonth(), r && (ey("onYearChange"), V()), ey("onMonthChange")
                }
                if (ew(), j(), eC(), s || "range" === k.config.mode || 1 !== k.config.showMonths ? void 0 !== k.selectedDateElem && void 0 === k.hourElement && k.selectedDateElem && k.selectedDateElem.focus() : q(i), void 0 !== k.hourElement && void 0 !== k.hourElement && k.hourElement.focus(), k.config.closeOnSelect) {
                    var o = "single" === k.config.mode && !k.config.enableTime,
                        l = "range" === k.config.mode && 2 === k.selectedDates.length && !k.config.enableTime;
                    (o || l) && eu()
                }
                N()
            }
        }
        k.parseDate = b({
            config: k.config,
            l10n: k.l10n
        }), k._handlers = [], k.pluginElements = [], k.loadedPlugins = [], k._bind = O, k._setHoursFromDate = P, k._positionCalendar = ec, k.changeMonth = Q, k.changeYear = ee, k.clear = function(e, t) {
            if (void 0 === e && (e = !0), void 0 === t && (t = !0), k.input.value = "", void 0 !== k.altInput && (k.altInput.value = ""), void 0 !== k.mobileInput && (k.mobileInput.value = ""), k.selectedDates = [], k.latestSelectedDateObj = void 0, !0 === t && (k.currentYear = k._initialDate.getFullYear(), k.currentMonth = k._initialDate.getMonth()), !0 === k.config.enableTime) {
                var i, n = C(k.config),
                    s = n.hours;
                L(s, n.minutes, n.seconds)
            }
            k.redraw(), e && ey("onChange")
        }, k.close = function() {
            k.isOpen = !1, k.isMobile || (void 0 !== k.calendarContainer && k.calendarContainer.classList.remove("open"), void 0 !== k._input && k._input.classList.remove("active")), ey("onClose")
        }, k.onMouseOver = ea, k._createElement = c, k.createDay = B, k.destroy = function() {
            void 0 !== k.config && ey("onDestroy");
            for (var e = k._handlers.length; e--;) k._handlers[e].remove();
            if (k._handlers = [], k.mobileInput) k.mobileInput.parentNode && k.mobileInput.parentNode.removeChild(k.mobileInput), k.mobileInput = void 0;
            else if (k.calendarContainer && k.calendarContainer.parentNode) {
                if (k.config.static && k.calendarContainer.parentNode) {
                    var t = k.calendarContainer.parentNode;
                    if (t.lastChild && t.removeChild(t.lastChild), t.parentNode) {
                        for (; t.firstChild;) t.parentNode.insertBefore(t.firstChild, t);
                        t.parentNode.removeChild(t)
                    }
                } else k.calendarContainer.parentNode.removeChild(k.calendarContainer)
            }
            k.altInput && (k.input.type = "text", k.altInput.parentNode && k.altInput.parentNode.removeChild(k.altInput), delete k.altInput), k.input && (k.input.type = k.input._type, k.input.classList.remove("flatpickr-input"), k.input.removeAttribute("readonly")), ["_showTimeInput", "latestSelectedDateObj", "_hideNextMonthArrow", "_hidePrevMonthArrow", "__hideNextMonthArrow", "__hidePrevMonthArrow", "isMobile", "isOpen", "selectedDateElem", "minDateHasTime", "maxDateHasTime", "days", "daysContainer", "_input", "_positionElement", "innerContainer", "rContainer", "monthNav", "todayDateElem", "calendarContainer", "weekdayContainer", "prevMonthNav", "nextMonthNav", "monthsDropdownContainer", "currentMonthElement", "currentYearElement", "navigationCurrentMonth", "selectedDateElem", "config"].forEach(function(e) {
                try {
                    delete k[e]
                } catch (t) {}
            })
        }, k.isEnabled = et, k.jumpToDate = z, k.updateValue = eC, k.open = function(e, t) {
            if (void 0 === t && (t = k._positionElement), !0 === k.isMobile) {
                if (e) {
                    e.preventDefault();
                    var i = p(e);
                    i && i.blur()
                }
                return void 0 !== k.mobileInput && (k.mobileInput.focus(), k.mobileInput.click()), void ey("onOpen")
            }
            if (!k._input.disabled && !k.config.inline) {
                var n = k.isOpen;
                k.isOpen = !0, n || (k.calendarContainer.classList.add("open"), k._input.classList.add("active"), ey("onOpen"), ec(t)), !0 === k.config.enableTime && !0 === k.config.noCalendar && (!1 !== k.config.allowInput || void 0 !== e && k.timeContainer.contains(e.relatedTarget) || setTimeout(function() {
                    return k.hourElement.select()
                }, 50))
            }
        }, k.redraw = eh, k.set = function(e, t) {
            if (null !== e && "object" == typeof e)
                for (var n in Object.assign(k.config, e), e) void 0 !== ef[n] && ef[n].forEach(function(e) {
                    return e()
                });
            else k.config[e] = t, void 0 !== ef[e] ? ef[e].forEach(function(e) {
                return e()
            }) : i.indexOf(e) > -1 && (k.config[e] = l(t));
            k.redraw(), eC(!0)
        }, k.setDate = function(e, t, i) {
            if (void 0 === t && (t = !1), void 0 === i && (i = k.config.dateFormat), 0 !== e && !e || e instanceof Array && 0 === e.length) return k.clear(t);
            em(e, i), k.latestSelectedDateObj = k.selectedDates[k.selectedDates.length - 1], k.redraw(), z(void 0, t), P(), 0 === k.selectedDates.length && k.clear(!1), eC(t), t && ey("onChange")
        }, k.toggle = function(e) {
            if (!0 === k.isOpen) return k.close();
            k.open(e)
        };
        var ef = {
            locale: [ed, K],
            showMonths: [G, D, U],
            minDate: [z],
            maxDate: [z],
            positionElement: [ev],
            clickOpens: [function() {
                !0 === k.config.clickOpens ? (O(k._input, "focus", k.open), O(k._input, "click", k.open)) : (k._input.removeEventListener("focus", k.open), k._input.removeEventListener("click", k.open))
            }]
        };

        function em(e, t) {
            var i = [];
            if (e instanceof Array) i = e.map(function(e) {
                return k.parseDate(e, t)
            });
            else if (e instanceof Date || "number" == typeof e) i = [k.parseDate(e, t)];
            else if ("string" == typeof e) switch (k.config.mode) {
                case "single":
                case "time":
                    i = [k.parseDate(e, t)];
                    break;
                case "multiple":
                    i = e.split(k.config.conjunction).map(function(e) {
                        return k.parseDate(e, t)
                    });
                    break;
                case "range":
                    i = e.split(k.l10n.rangeSeparator).map(function(e) {
                        return k.parseDate(e, t)
                    })
            } else k.config.errorHandler(Error("Invalid date supplied: " + JSON.stringify(e)));
            k.selectedDates = k.config.allowInvalidPreload ? i : i.filter(function(e) {
                return e instanceof Date && et(e, !1)
            }), "range" === k.config.mode && k.selectedDates.sort(function(e, t) {
                return e.getTime() - t.getTime()
            })
        }

        function eg(e) {
            return e.slice().map(function(e) {
                return "string" == typeof e || "number" == typeof e || e instanceof Date ? k.parseDate(e, void 0, !0) : e && "object" == typeof e && e.from && e.to ? {
                    from: k.parseDate(e.from, void 0),
                    to: k.parseDate(e.to, void 0)
                } : e
            }).filter(function(e) {
                return e
            })
        }

        function ev() {
            k._positionElement = k.config.positionElement || k._input
        }

        function ey(e, t) {
            if (void 0 !== k.config) {
                var i = k.config[e];
                if (void 0 !== i && i.length > 0)
                    for (var n = 0; i[n] && n < i.length; n++) i[n](k.selectedDates, k.input.value, k, t);
                "onChange" === e && (k.input.dispatchEvent(e$("change")), k.input.dispatchEvent(e$("input")))
            }
        }

        function e$(e) {
            var t = document.createEvent("Event");
            return t.initEvent(e, !0, !0), t
        }

        function eb(e) {
            for (var t = 0; t < k.selectedDates.length; t++) {
                var i = k.selectedDates[t];
                if (i instanceof Date && 0 === w(i, e)) return "" + t
            }
            return !1
        }

        function ew() {
            k.config.noCalendar || k.isMobile || !k.monthNav || (k.yearElements.forEach(function(e, t) {
                var i = new Date(k.currentYear, k.currentMonth, 1);
                i.setMonth(k.currentMonth + t), k.config.showMonths > 1 || "static" === k.config.monthSelectorType ? k.monthElements[t].textContent = m(i.getMonth(), k.config.shorthandCurrentMonth, k.l10n) + " " : k.monthsDropdownContainer.value = i.getMonth().toString(), e.value = i.getFullYear().toString()
            }), k._hidePrevMonthArrow = void 0 !== k.config.minDate && (k.currentYear === k.config.minDate.getFullYear() ? k.currentMonth <= k.config.minDate.getMonth() : k.currentYear < k.config.minDate.getFullYear()), k._hideNextMonthArrow = void 0 !== k.config.maxDate && (k.currentYear === k.config.maxDate.getFullYear() ? k.currentMonth + 1 > k.config.maxDate.getMonth() : k.currentYear > k.config.maxDate.getFullYear()))
        }

        function e_(e) {
            var t = e || (k.config.altInput ? k.config.altFormat : k.config.dateFormat);
            return k.selectedDates.map(function(e) {
                return k.formatDate(e, t)
            }).filter(function(e, t, i) {
                return "range" !== k.config.mode || k.config.enableTime || i.indexOf(e) === t
            }).join("range" !== k.config.mode ? k.config.conjunction : k.l10n.rangeSeparator)
        }

        function eC(e) {
            void 0 === e && (e = !0), void 0 !== k.mobileInput && k.mobileFormatStr && (k.mobileInput.value = void 0 !== k.latestSelectedDateObj ? k.formatDate(k.latestSelectedDateObj, k.mobileFormatStr) : ""), k.input.value = e_(k.config.dateFormat), void 0 !== k.altInput && (k.altInput.value = e_(k.config.altFormat)), !1 !== e && ey("onValueUpdate")
        }

        function e8(e) {
            var t = p(e),
                i = k.prevMonthNav.contains(t),
                n = k.nextMonthNav.contains(t);
            i || n ? Q(i ? -1 : 1) : k.yearElements.indexOf(t) >= 0 ? t.select() : t.classList.contains("arrowUp") ? k.changeYear(k.currentYear + 1) : t.classList.contains("arrowDown") && k.changeYear(k.currentYear - 1)
        }
        return k.element = k.input = f, k.isOpen = !1,
            function() {
                var t = ["wrap", "weekNumbers", "allowInput", "allowInvalidPreload", "clickOpens", "time_24hr", "enableTime", "noCalendar", "altInput", "shorthandCurrentMonth", "inline", "static", "enableSeconds", "disableMobile"],
                    s = e(e({}, JSON.parse(JSON.stringify(f.dataset || {}))), g),
                    a = {};
                k.config.parseDate = s.parseDate, k.config.formatDate = s.formatDate, Object.defineProperty(k.config, "enable", {
                    get: function() {
                        return k.config._enable
                    },
                    set: function(e) {
                        k.config._enable = eg(e)
                    }
                }), Object.defineProperty(k.config, "disable", {
                    get: function() {
                        return k.config._disable
                    },
                    set: function(e) {
                        k.config._disable = eg(e)
                    }
                });
                var r = "time" === s.mode;
                if (!s.dateFormat && (s.enableTime || r)) {
                    var o = T.defaultConfig.dateFormat || n.dateFormat;
                    a.dateFormat = s.noCalendar || r ? "H:i" + (s.enableSeconds ? ":S" : "") : o + " H:i" + (s.enableSeconds ? ":S" : "")
                }
                if (s.altInput && (s.enableTime || r) && !s.altFormat) {
                    var d = T.defaultConfig.altFormat || n.altFormat;
                    a.altFormat = s.noCalendar || r ? "h:i" + (s.enableSeconds ? ":S K" : " K") : d + " h:i" + (s.enableSeconds ? ":S" : "") + " K"
                }
                Object.defineProperty(k.config, "minDate", {
                    get: function() {
                        return k.config._minDate
                    },
                    set: eo("min")
                }), Object.defineProperty(k.config, "maxDate", {
                    get: function() {
                        return k.config._maxDate
                    },
                    set: eo("max")
                });
                var c = function(e) {
                    return function(t) {
                        k.config["min" === e ? "_minTime" : "_maxTime"] = k.parseDate(t, "H:i:S")
                    }
                };
                Object.defineProperty(k.config, "minTime", {
                    get: function() {
                        return k.config._minTime
                    },
                    set: c("min")
                }), Object.defineProperty(k.config, "maxTime", {
                    get: function() {
                        return k.config._maxTime
                    },
                    set: c("max")
                }), "time" === s.mode && (k.config.noCalendar = !0, k.config.enableTime = !0), Object.assign(k.config, a, s);
                for (var h = 0; h < t.length; h++) k.config[t[h]] = !0 === k.config[t[h]] || "true" === k.config[t[h]];
                for (i.filter(function(e) {
                        return void 0 !== k.config[e]
                    }).forEach(function(e) {
                        k.config[e] = l(k.config[e] || []).map(S)
                    }), k.isMobile = !k.config.disableMobile && !k.config.inline && "single" === k.config.mode && !k.config.disable.length && !k.config.enable && !k.config.weekNumbers && /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent), h = 0; h < k.config.plugins.length; h++) {
                    var u = k.config.plugins[h](k) || {};
                    for (var p in u) i.indexOf(p) > -1 ? k.config[p] = l(u[p]).map(S).concat(k.config[p]) : void 0 === s[p] && (k.config[p] = u[p])
                }
                s.altInputClass || (k.config.altInputClass = el().className + " " + k.config.altInputClass), ey("onParseConfig")
            }(), ed(),
            function() {
                if (k.input = el(), !k.input) return void k.config.errorHandler(Error("Invalid input element specified"));
                k.input._type = k.input.type, k.input.type = "text", k.input.classList.add("flatpickr-input"), k._input = k.input, k.config.altInput && (k.altInput = c(k.input.nodeName, k.config.altInputClass), k._input = k.altInput, k.altInput.placeholder = k.input.placeholder, k.altInput.disabled = k.input.disabled, k.altInput.required = k.input.required, k.altInput.tabIndex = k.input.tabIndex, k.altInput.type = "text", k.input.setAttribute("type", "hidden"), !k.config.static && k.input.parentNode && k.input.parentNode.insertBefore(k.altInput, k.input.nextSibling)), k.config.allowInput || k._input.setAttribute("readonly", "readonly"), ev()
            }(), k.selectedDates = [], k.now = k.parseDate(k.config.now) || new Date, (y = k.config.defaultDate || (("INPUT" === k.input.nodeName || "TEXTAREA" === k.input.nodeName) && k.input.placeholder && k.input.value === k.input.placeholder ? null : k.input.value)) && em(y, k.config.dateFormat), k._initialDate = k.selectedDates.length > 0 ? k.selectedDates[0] : k.config.minDate && k.config.minDate.getTime() > k.now.getTime() ? k.config.minDate : k.config.maxDate && k.config.maxDate.getTime() < k.now.getTime() ? k.config.maxDate : k.now, k.currentYear = k._initialDate.getFullYear(), k.currentMonth = k._initialDate.getMonth(), k.selectedDates.length > 0 && (k.latestSelectedDateObj = k.selectedDates[0]), void 0 !== k.config.minTime && (k.config.minTime = k.parseDate(k.config.minTime, "H:i")), void 0 !== k.config.maxTime && (k.config.maxTime = k.parseDate(k.config.maxTime, "H:i")), k.minDateHasTime = !!k.config.minDate && (k.config.minDate.getHours() > 0 || k.config.minDate.getMinutes() > 0 || k.config.minDate.getSeconds() > 0), k.maxDateHasTime = !!k.config.maxDate && (k.config.maxDate.getHours() > 0 || k.config.maxDate.getMinutes() > 0 || k.config.maxDate.getSeconds() > 0), k.utils = {
                getDaysInMonth: function(e, t) {
                    return void 0 === e && (e = k.currentMonth), void 0 === t && (t = k.currentYear), 1 === e && (t % 4 == 0 && t % 100 != 0 || t % 400 == 0) ? 29 : k.l10n.daysInMonth[e]
                }
            }, k.isMobile || function() {
                var e = window.document.createDocumentFragment();
                if (k.calendarContainer = c("div", "flatpickr-calendar"), k.calendarContainer.tabIndex = -1, !k.config.noCalendar) {
                    if (e.appendChild((k.monthNav = c("div", "flatpickr-months"), k.yearElements = [], k.monthElements = [], k.prevMonthNav = c("span", "flatpickr-prev-month"), k.prevMonthNav.innerHTML = k.config.prevArrow, k.nextMonthNav = c("span", "flatpickr-next-month"), k.nextMonthNav.innerHTML = k.config.nextArrow, G(), Object.defineProperty(k, "_hidePrevMonthArrow", {
                            get: function() {
                                return k.__hidePrevMonthArrow
                            },
                            set: function(e) {
                                k.__hidePrevMonthArrow !== e && (d(k.prevMonthNav, "flatpickr-disabled", e), k.__hidePrevMonthArrow = e)
                            }
                        }), Object.defineProperty(k, "_hideNextMonthArrow", {
                            get: function() {
                                return k.__hideNextMonthArrow
                            },
                            set: function(e) {
                                k.__hideNextMonthArrow !== e && (d(k.nextMonthNav, "flatpickr-disabled", e), k.__hideNextMonthArrow = e)
                            }
                        }), k.currentYearElement = k.yearElements[0], ew(), k.monthNav)), k.innerContainer = c("div", "flatpickr-innerContainer"), k.config.weekNumbers) {
                        var t, i, n = (k.calendarContainer.classList.add("hasWeeks"), (t = c("div", "flatpickr-weekwrapper")).appendChild(c("span", "flatpickr-weekday", k.l10n.weekAbbreviation)), i = c("div", "flatpickr-weeks"), t.appendChild(i), {
                                weekWrapper: t,
                                weekNumbers: i
                            }),
                            s = n.weekWrapper,
                            o = n.weekNumbers;
                        k.innerContainer.appendChild(s), k.weekNumbers = o, k.weekWrapper = s
                    }
                    k.rContainer = c("div", "flatpickr-rContainer"), k.rContainer.appendChild(U()), k.daysContainer || (k.daysContainer = c("div", "flatpickr-days"), k.daysContainer.tabIndex = -1), j(), k.rContainer.appendChild(k.daysContainer), k.innerContainer.appendChild(k.rContainer), e.appendChild(k.innerContainer)
                }
                k.config.enableTime && e.appendChild(function() {
                    k.calendarContainer.classList.add("hasTime"), k.config.noCalendar && k.calendarContainer.classList.add("noCalendar");
                    var e = C(k.config);
                    k.timeContainer = c("div", "flatpickr-time"), k.timeContainer.tabIndex = -1;
                    var t = c("span", "flatpickr-time-separator", ":"),
                        i = u("flatpickr-hour", {
                            "aria-label": k.l10n.hourAriaLabel
                        });
                    k.hourElement = i.getElementsByTagName("input")[0];
                    var n = u("flatpickr-minute", {
                        "aria-label": k.l10n.minuteAriaLabel
                    });
                    if (k.minuteElement = n.getElementsByTagName("input")[0], k.hourElement.tabIndex = k.minuteElement.tabIndex = -1, k.hourElement.value = a(k.latestSelectedDateObj ? k.latestSelectedDateObj.getHours() : k.config.time_24hr ? e.hours : function(e) {
                            switch (e % 24) {
                                case 0:
                                case 12:
                                    return 12;
                                default:
                                    return e % 12
                            }
                        }(e.hours)), k.minuteElement.value = a(k.latestSelectedDateObj ? k.latestSelectedDateObj.getMinutes() : e.minutes), k.hourElement.setAttribute("step", k.config.hourIncrement.toString()), k.minuteElement.setAttribute("step", k.config.minuteIncrement.toString()), k.hourElement.setAttribute("min", k.config.time_24hr ? "0" : "1"), k.hourElement.setAttribute("max", k.config.time_24hr ? "23" : "12"), k.hourElement.setAttribute("maxlength", "2"), k.minuteElement.setAttribute("min", "0"), k.minuteElement.setAttribute("max", "59"), k.minuteElement.setAttribute("maxlength", "2"), k.timeContainer.appendChild(i), k.timeContainer.appendChild(t), k.timeContainer.appendChild(n), k.config.time_24hr && k.timeContainer.classList.add("time24hr"), k.config.enableSeconds) {
                        k.timeContainer.classList.add("hasSeconds");
                        var s = u("flatpickr-second");
                        k.secondElement = s.getElementsByTagName("input")[0], k.secondElement.value = a(k.latestSelectedDateObj ? k.latestSelectedDateObj.getSeconds() : e.seconds), k.secondElement.setAttribute("step", k.minuteElement.getAttribute("step")), k.secondElement.setAttribute("min", "0"), k.secondElement.setAttribute("max", "59"), k.secondElement.setAttribute("maxlength", "2"), k.timeContainer.appendChild(c("span", "flatpickr-time-separator", ":")), k.timeContainer.appendChild(s)
                    }
                    return k.config.time_24hr || (k.amPM = c("span", "flatpickr-am-pm", k.l10n.amPM[r((k.latestSelectedDateObj ? k.hourElement.value : k.config.defaultHour) > 11)]), k.amPM.title = k.l10n.toggleTitle, k.amPM.tabIndex = -1, k.timeContainer.appendChild(k.amPM)), k.timeContainer
                }()), d(k.calendarContainer, "rangeMode", "range" === k.config.mode), d(k.calendarContainer, "animate", !0 === k.config.animate), d(k.calendarContainer, "multiMonth", k.config.showMonths > 1), k.calendarContainer.appendChild(e);
                var l = void 0 !== k.config.appendTo && void 0 !== k.config.appendTo.nodeType;
                if ((k.config.inline || k.config.static) && (k.calendarContainer.classList.add(k.config.inline ? "inline" : "static"), k.config.inline && (!l && k.element.parentNode ? k.element.parentNode.insertBefore(k.calendarContainer, k._input.nextSibling) : void 0 !== k.config.appendTo && k.config.appendTo.appendChild(k.calendarContainer)), k.config.static)) {
                    var h = c("div", "flatpickr-wrapper");
                    k.element.parentNode && k.element.parentNode.insertBefore(h, k.element), h.appendChild(k.element), k.altInput && h.appendChild(k.altInput), h.appendChild(k.calendarContainer)
                }
                k.config.static || k.config.inline || (void 0 !== k.config.appendTo ? k.config.appendTo : window.document.body).appendChild(k.calendarContainer)
            }(),
            function() {
                if (k.config.wrap && ["open", "close", "toggle", "clear"].forEach(function(e) {
                        Array.prototype.forEach.call(k.element.querySelectorAll("[data-" + e + "]"), function(t) {
                            return O(t, "click", k[e])
                        })
                    }), k.isMobile) return void
                function() {
                    var e = k.config.enableTime ? k.config.noCalendar ? "time" : "datetime-local" : "date";
                    k.mobileInput = c("input", k.input.className + " flatpickr-mobile"), k.mobileInput.tabIndex = 1, k.mobileInput.type = e, k.mobileInput.disabled = k.input.disabled, k.mobileInput.required = k.input.required, k.mobileInput.placeholder = k.input.placeholder, k.mobileFormatStr = "datetime-local" === e ? "Y-m-d\\TH:i:S" : "date" === e ? "Y-m-d" : "H:i:S", k.selectedDates.length > 0 && (k.mobileInput.defaultValue = k.mobileInput.value = k.formatDate(k.selectedDates[0], k.mobileFormatStr)), k.config.minDate && (k.mobileInput.min = k.formatDate(k.config.minDate, "Y-m-d")), k.config.maxDate && (k.mobileInput.max = k.formatDate(k.config.maxDate, "Y-m-d")), k.input.getAttribute("step") && (k.mobileInput.step = String(k.input.getAttribute("step"))), k.input.type = "hidden", void 0 !== k.altInput && (k.altInput.type = "hidden");
                    try {
                        k.input.parentNode && k.input.parentNode.insertBefore(k.mobileInput, k.input.nextSibling)
                    } catch (t) {}
                    O(k.mobileInput, "change", function(e) {
                        k.setDate(p(e).value, !1, k.mobileFormatStr), ey("onChange"), ey("onClose")
                    })
                }();
                var e = o(er, 50);
                if (k._debouncedChange = o(N, 300), k.daysContainer && !/iPhone|iPad|iPod/i.test(navigator.userAgent) && O(k.daysContainer, "mouseover", function(e) {
                        "range" === k.config.mode && ea(p(e))
                    }), O(k._input, "keydown", es), void 0 !== k.calendarContainer && O(k.calendarContainer, "keydown", es), k.config.inline || k.config.static || O(window, "resize", e), void 0 !== window.ontouchstart ? O(window.document, "touchstart", J) : O(window.document, "mousedown", J), O(window.document, "focus", J, {
                        capture: !0
                    }), !0 === k.config.clickOpens && (O(k._input, "focus", k.open), O(k._input, "click", k.open)), void 0 !== k.daysContainer && (O(k.monthNav, "click", e8), O(k.monthNav, ["keyup", "increment"], I), O(k.daysContainer, "click", ep)), void 0 !== k.timeContainer && void 0 !== k.minuteElement && void 0 !== k.hourElement) {
                    var t = function(e) {
                        return p(e).select()
                    };
                    O(k.timeContainer, ["increment"], M), O(k.timeContainer, "blur", M, {
                        capture: !0
                    }), O(k.timeContainer, "click", H), O([k.hourElement, k.minuteElement], ["focus", "click"], t), void 0 !== k.secondElement && O(k.secondElement, "focus", function() {
                        return k.secondElement && k.secondElement.select()
                    }), void 0 !== k.amPM && O(k.amPM, "click", function(e) {
                        M(e)
                    })
                }
                k.config.allowInput && O(k._input, "blur", en)
            }(), (k.selectedDates.length || k.config.noCalendar) && (k.config.enableTime && P(k.config.noCalendar ? k.latestSelectedDateObj : void 0), eC(!1)), D(), x = /^((?!chrome|android).)*safari/i.test(navigator.userAgent), !k.isMobile && x && ec(), ey("onReady"), k
    }

    function k(e, t) {
        for (var i = Array.prototype.slice.call(e).filter(function(e) {
                return e instanceof HTMLElement
            }), n = [], s = 0; s < i.length; s++) {
            var a = i[s];
            try {
                if (null !== a.getAttribute("data-fp-omit")) continue;
                void 0 !== a._flatpickr && (a._flatpickr.destroy(), a._flatpickr = void 0), a._flatpickr = x(a, t || {}), n.push(a._flatpickr)
            } catch (r) {
                console.error(r)
            }
        }
        return 1 === n.length ? n[0] : n
    }
    "function" != typeof Object.assign && (Object.assign = function(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        if (!e) throw TypeError("Cannot convert undefined or null to object");
        for (var n = function(t) {
                t && Object.keys(t).forEach(function(i) {
                    return e[i] = t[i]
                })
            }, s = 0, a = t; s < a.length; s++) n(a[s]);
        return e
    }), "undefined" != typeof HTMLElement && "undefined" != typeof HTMLCollection && "undefined" != typeof NodeList && (HTMLCollection.prototype.flatpickr = NodeList.prototype.flatpickr = function(e) {
        return k(this, e)
    }, HTMLElement.prototype.flatpickr = function(e) {
        return k([this], e)
    });
    var T = function(e, t) {
        return "string" == typeof e ? k(window.document.querySelectorAll(e), t) : e instanceof Node ? k([e], t) : k(e, t)
    };
    return T.defaultConfig = {}, T.l10ns = {
        en: e({}, s),
        default: e({}, s)
    }, T.localize = function(t) {
        T.l10ns.default = e(e({}, T.l10ns.default), t)
    }, T.setDefaults = function(t) {
        T.defaultConfig = e(e({}, T.defaultConfig), t)
    }, T.parseDate = b({}), T.formatDate = $({}), T.compareDates = w, "undefined" != typeof jQuery && void 0 !== jQuery.fn && (jQuery.fn.flatpickr = function(e) {
        return k(this, e)
    }), Date.prototype.fp_incr = function(e) {
        return new Date(this.getFullYear(), this.getMonth(), this.getDate() + ("string" == typeof e ? parseInt(e, 10) : e))
    }, "undefined" != typeof window && (window.flatpickr = T), T
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = e || self).GLightbox = t()
}(this, function() {
    "use strict";

    function e(t) {
        return (e = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e) {
            return typeof e
        } : function(e) {
            return e && "function" == typeof Symbol && e.constructor === Symbol && e !== Symbol.prototype ? "symbol" : typeof e
        })(t)
    }

    function t(e, t) {
        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
    }

    function i(e, t) {
        for (var i = 0; i < t.length; i++) {
            var n = t[i];
            n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
        }
    }

    function n(e, t, n) {
        return t && i(e.prototype, t), n && i(e, n), e
    }
    var s = Date.now();

    function a() {
        var e = {},
            t = !0,
            i = 0,
            n = arguments.length;
        for ("[object Boolean]" === Object.prototype.toString.call(arguments[0]) && (t = arguments[0], i++); i < n; i++) {
            var s = arguments[i];
            ! function(i) {
                for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (t && "[object Object]" === Object.prototype.toString.call(i[n]) ? e[n] = a(!0, e[n], i[n]) : e[n] = i[n])
            }(s)
        }
        return e
    }

    function r(e, t) {
        if ((x(e) || e === window || e === document) && (e = [e]), T(e) || E(e) || (e = [e]), 0 != M(e)) {
            if (T(e) && !E(e))
                for (var i = e.length, n = 0; n < i && !1 !== t.call(e[n], e[n], n, e); n++);
            else if (E(e)) {
                for (var s in e)
                    if (D(e, s) && !1 === t.call(e[s], e[s], s, e)) break
            }
        }
    }

    function o(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
            i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
            n = e[s] = e[s] || [],
            a = {
                all: n,
                evt: null,
                found: null
            };
        return t && i && M(n) > 0 && r(n, function(e, n) {
            if (e.eventName == t && e.fn.toString() == i.toString()) return a.found = !0, a.evt = n, !1
        }), a
    }

    function l(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
            i = t.onElement,
            n = t.withCallback,
            s = t.avoidDuplicate,
            a = void 0 === s || s,
            l = t.once,
            d = void 0 !== l && l,
            c = t.useCapture,
            h = void 0 !== c && c,
            u = arguments.length > 2 ? arguments[2] : void 0,
            p = i || [];

        function f(e) {
            _(n) && n.call(u, e, this), d && f.destroy()
        }
        return C(p) && (p = document.querySelectorAll(p)), f.destroy = function() {
            r(p, function(t) {
                var i = o(t, e, f);
                i.found && i.all.splice(i.evt, 1), t.removeEventListener && t.removeEventListener(e, f, h)
            })
        }, r(p, function(t) {
            var i = o(t, e, f);
            (t.addEventListener && a && !i.found || !a) && (t.addEventListener(e, f, h), i.all.push({
                eventName: e,
                fn: f
            }))
        }), f
    }

    function d(e, t) {
        r(t.split(" "), function(t) {
            return e.classList.add(t)
        })
    }

    function c(e, t) {
        r(t.split(" "), function(t) {
            return e.classList.remove(t)
        })
    }

    function h(e, t) {
        return e.classList.contains(t)
    }

    function u(e, t) {
        for (; e !== document.body;) {
            if (!(e = e.parentElement)) return !1;
            if ("function" == typeof e.matches ? e.matches(t) : e.msMatchesSelector(t)) return e
        }
    }

    function p(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "",
            i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
        if (!e || "" === t) return !1;
        if ("none" === t) return _(i) && i(), !1;
        var n = function e() {
                var t, i = document.createElement("fakeelement"),
                    n = {
                        animation: "animationend",
                        OAnimation: "oAnimationEnd",
                        MozAnimation: "animationend",
                        WebkitAnimation: "webkitAnimationEnd"
                    };
                for (t in n)
                    if (void 0 !== i.style[t]) return n[t]
            }(),
            s = t.split(" ");
        r(s, function(t) {
            d(e, "g" + t)
        }), l(n, {
            onElement: e,
            avoidDuplicate: !1,
            once: !0,
            withCallback: function(e, t) {
                r(s, function(e) {
                    c(t, "g" + e)
                }), _(i) && i()
            }
        })
    }

    function f(e) {
        var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "";
        if ("" === t) return e.style.webkitTransform = "", e.style.MozTransform = "", e.style.msTransform = "", e.style.OTransform = "", e.style.transform = "", !1;
        e.style.webkitTransform = t, e.style.MozTransform = t, e.style.msTransform = t, e.style.OTransform = t, e.style.transform = t
    }

    function m(e) {
        e.style.display = "block"
    }

    function g(e) {
        e.style.display = "none"
    }

    function v(e) {
        var t = document.createDocumentFragment(),
            i = document.createElement("div");
        for (i.innerHTML = e; i.firstChild;) t.appendChild(i.firstChild);
        return t
    }

    function y() {
        return {
            width: window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            height: window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight
        }
    }

    function $(e, t, i, n) {
        if (e()) t();
        else {
            i || (i = 100);
            var s, a = setInterval(function() {
                e() && (clearInterval(a), s && clearTimeout(s), t())
            }, i);
            n && (s = setTimeout(function() {
                clearInterval(a)
            }, n))
        }
    }

    function b(e, t, i) {
        if (S(e)) console.error("Inject assets error");
        else if (_(t) && (i = t, t = !1), C(t) && t in window) _(i) && i();
        else {
            var n;
            if (-1 !== e.indexOf(".css")) {
                if ((n = document.querySelectorAll('link[href="' + e + '"]')) && n.length > 0) return void(_(i) && i());
                var s = document.getElementsByTagName("head")[0],
                    a = s.querySelectorAll('link[rel="stylesheet"]'),
                    r = document.createElement("link");
                return r.rel = "stylesheet", r.type = "text/css", r.href = e, r.media = "all", a ? s.insertBefore(r, a[0]) : s.appendChild(r), void(_(i) && i())
            }
            if ((n = document.querySelectorAll('script[src="' + e + '"]')) && n.length > 0) {
                if (_(i)) {
                    if (C(t)) return $(function() {
                        return void 0 !== window[t]
                    }, function() {
                        i()
                    }), !1;
                    i()
                }
            } else {
                var o = document.createElement("script");
                o.type = "text/javascript", o.src = e, o.onload = function() {
                    if (_(i)) {
                        if (C(t)) return $(function() {
                            return void 0 !== window[t]
                        }, function() {
                            i()
                        }), !1;
                        i()
                    }
                }, document.body.appendChild(o)
            }
        }
    }

    function w() {
        return "navigator" in window && window.navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(Android)|(PlayBook)|(BB10)|(BlackBerry)|(Opera Mini)|(IEMobile)|(webOS)|(MeeGo)/i)
    }

    function _(e) {
        return "function" == typeof e
    }

    function C(e) {
        return "string" == typeof e
    }

    function x(e) {
        return !(!e || !e.nodeType || 1 != e.nodeType)
    }

    function k(e) {
        return Array.isArray(e)
    }

    function T(e) {
        return e && e.length && isFinite(e.length)
    }

    function E(t) {
        return "object" === e(t) && null != t && !_(t) && !k(t)
    }

    function S(e) {
        return null == e
    }

    function D(e, t) {
        return null !== e && hasOwnProperty.call(e, t)
    }

    function M(e) {
        if (E(e)) {
            if (e.keys) return e.keys().length;
            var t = 0;
            for (var i in e) D(e, i) && t++;
            return t
        }
        return e.length
    }

    function A(e) {
        return !isNaN(parseFloat(e)) && isFinite(e)
    }

    function P() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1,
            t = document.querySelectorAll(".gbtn[data-taborder]:not(.disabled)");
        if (!t.length) return !1;
        if (1 == t.length) return t[0];
        "string" == typeof e && (e = parseInt(e));
        var i = [];
        r(t, function(e) {
            i.push(e.getAttribute("data-taborder"))
        });
        var n = Math.max.apply(Math, i.map(function(e) {
                return parseInt(e)
            })),
            s = e < 0 ? 1 : e + 1;
        s > n && (s = "1");
        var a = i.filter(function(e) {
            return e >= parseInt(s)
        }).sort()[0];
        return document.querySelector('.gbtn[data-taborder="'.concat(a, '"]'))
    }

    function L(e) {
        return Math.sqrt(e.x * e.x + e.y * e.y)
    }
    var I = function() {
        function e(i) {
            t(this, e), this.handlers = [], this.el = i
        }
        return n(e, [{
            key: "add",
            value: function(e) {
                this.handlers.push(e)
            }
        }, {
            key: "del",
            value: function(e) {
                e || (this.handlers = []);
                for (var t = this.handlers.length; t >= 0; t--) this.handlers[t] === e && this.handlers.splice(t, 1)
            }
        }, {
            key: "dispatch",
            value: function() {
                for (var e = 0, t = this.handlers.length; e < t; e++) {
                    var i = this.handlers[e];
                    "function" == typeof i && i.apply(this.el, arguments)
                }
            }
        }]), e
    }();

    function O(e, t) {
        var i = new I(e);
        return i.add(t), i
    }
    var N = function() {
        function e(i, n) {
            t(this, e), this.element = "string" == typeof i ? document.querySelector(i) : i, this.start = this.start.bind(this), this.move = this.move.bind(this), this.end = this.end.bind(this), this.cancel = this.cancel.bind(this), this.element.addEventListener("touchstart", this.start, !1), this.element.addEventListener("touchmove", this.move, !1), this.element.addEventListener("touchend", this.end, !1), this.element.addEventListener("touchcancel", this.cancel, !1), this.preV = {
                x: null,
                y: null
            }, this.pinchStartLen = null, this.zoom = 1, this.isDoubleTap = !1;
            var s = function() {};
            this.rotate = O(this.element, n.rotate || s), this.touchStart = O(this.element, n.touchStart || s), this.multipointStart = O(this.element, n.multipointStart || s), this.multipointEnd = O(this.element, n.multipointEnd || s), this.pinch = O(this.element, n.pinch || s), this.swipe = O(this.element, n.swipe || s), this.tap = O(this.element, n.tap || s), this.doubleTap = O(this.element, n.doubleTap || s), this.longTap = O(this.element, n.longTap || s), this.singleTap = O(this.element, n.singleTap || s), this.pressMove = O(this.element, n.pressMove || s), this.twoFingerPressMove = O(this.element, n.twoFingerPressMove || s), this.touchMove = O(this.element, n.touchMove || s), this.touchEnd = O(this.element, n.touchEnd || s), this.touchCancel = O(this.element, n.touchCancel || s), this.translateContainer = this.element, this._cancelAllHandler = this.cancelAll.bind(this), window.addEventListener("scroll", this._cancelAllHandler), this.delta = null, this.last = null, this.now = null, this.tapTimeout = null, this.singleTapTimeout = null, this.longTapTimeout = null, this.swipeTimeout = null, this.x1 = this.x2 = this.y1 = this.y2 = null, this.preTapPosition = {
                x: null,
                y: null
            }
        }
        return n(e, [{
            key: "start",
            value: function(e) {
                if (e.touches) {
                    if (e.target && e.target.nodeName && ["a", "button", "input"].indexOf(e.target.nodeName.toLowerCase()) >= 0) console.log("ignore drag for this touched element", e.target.nodeName.toLowerCase());
                    else {
                        this.now = Date.now(), this.x1 = e.touches[0].pageX, this.y1 = e.touches[0].pageY, this.delta = this.now - (this.last || this.now), this.touchStart.dispatch(e, this.element), null !== this.preTapPosition.x && (this.isDoubleTap = this.delta > 0 && this.delta <= 250 && 30 > Math.abs(this.preTapPosition.x - this.x1) && 30 > Math.abs(this.preTapPosition.y - this.y1), this.isDoubleTap && clearTimeout(this.singleTapTimeout)), this.preTapPosition.x = this.x1, this.preTapPosition.y = this.y1, this.last = this.now;
                        var t = this.preV;
                        if (e.touches.length > 1) {
                            this._cancelLongTap(), this._cancelSingleTap();
                            var i = {
                                x: e.touches[1].pageX - this.x1,
                                y: e.touches[1].pageY - this.y1
                            };
                            t.x = i.x, t.y = i.y, this.pinchStartLen = L(t), this.multipointStart.dispatch(e, this.element)
                        }
                        this._preventTap = !1, this.longTapTimeout = setTimeout((function() {
                            this.longTap.dispatch(e, this.element), this._preventTap = !0
                        }).bind(this), 750)
                    }
                }
            }
        }, {
            key: "move",
            value: function(e) {
                if (e.touches) {
                    var t = this.preV,
                        i = e.touches.length,
                        n = e.touches[0].pageX,
                        s = e.touches[0].pageY;
                    if (this.isDoubleTap = !1, i > 1) {
                        var a, r, o, l, d, c = e.touches[1].pageX,
                            h = e.touches[1].pageY,
                            u = {
                                x: e.touches[1].pageX - n,
                                y: e.touches[1].pageY - s
                            };
                        null !== t.x && (this.pinchStartLen > 0 && (e.zoom = L(u) / this.pinchStartLen, this.pinch.dispatch(e, this.element)), e.angle = (a = u, o = function(e, t) {
                            var i = L(e) * L(t);
                            if (0 === i) return 0;
                            var n, s, a = (n = e, s = t, (n.x * s.x + n.y * s.y) / i);
                            return a > 1 && (a = 1), Math.acos(a)
                        }(a, r = t), l = a, d = r, l.x * d.y - d.x * l.y > 0 && (o *= -1), 180 * o / Math.PI), this.rotate.dispatch(e, this.element)), t.x = u.x, t.y = u.y, null !== this.x2 && null !== this.sx2 ? (e.deltaX = (n - this.x2 + c - this.sx2) / 2, e.deltaY = (s - this.y2 + h - this.sy2) / 2) : (e.deltaX = 0, e.deltaY = 0), this.twoFingerPressMove.dispatch(e, this.element), this.sx2 = c, this.sy2 = h
                    } else {
                        if (null !== this.x2) {
                            e.deltaX = n - this.x2, e.deltaY = s - this.y2;
                            var p = Math.abs(this.x1 - this.x2),
                                f = Math.abs(this.y1 - this.y2);
                            (p > 10 || f > 10) && (this._preventTap = !0)
                        } else e.deltaX = 0, e.deltaY = 0;
                        this.pressMove.dispatch(e, this.element)
                    }
                    this.touchMove.dispatch(e, this.element), this._cancelLongTap(), this.x2 = n, this.y2 = s, i > 1 && e.preventDefault()
                }
            }
        }, {
            key: "end",
            value: function(e) {
                if (e.changedTouches) {
                    this._cancelLongTap();
                    var t = this;
                    e.touches.length < 2 && (this.multipointEnd.dispatch(e, this.element), this.sx2 = this.sy2 = null), this.x2 && Math.abs(this.x1 - this.x2) > 30 || this.y2 && Math.abs(this.y1 - this.y2) > 30 ? (e.direction = this._swipeDirection(this.x1, this.x2, this.y1, this.y2), this.swipeTimeout = setTimeout(function() {
                        t.swipe.dispatch(e, t.element)
                    }, 0)) : (this.tapTimeout = setTimeout(function() {
                        t._preventTap || t.tap.dispatch(e, t.element), t.isDoubleTap && (t.doubleTap.dispatch(e, t.element), t.isDoubleTap = !1)
                    }, 0), t.isDoubleTap || (t.singleTapTimeout = setTimeout(function() {
                        t.singleTap.dispatch(e, t.element)
                    }, 250))), this.touchEnd.dispatch(e, this.element), this.preV.x = 0, this.preV.y = 0, this.zoom = 1, this.pinchStartLen = null, this.x1 = this.x2 = this.y1 = this.y2 = null
                }
            }
        }, {
            key: "cancelAll",
            value: function() {
                this._preventTap = !0, clearTimeout(this.singleTapTimeout), clearTimeout(this.tapTimeout), clearTimeout(this.longTapTimeout), clearTimeout(this.swipeTimeout)
            }
        }, {
            key: "cancel",
            value: function(e) {
                this.cancelAll(), this.touchCancel.dispatch(e, this.element)
            }
        }, {
            key: "_cancelLongTap",
            value: function() {
                clearTimeout(this.longTapTimeout)
            }
        }, {
            key: "_cancelSingleTap",
            value: function() {
                clearTimeout(this.singleTapTimeout)
            }
        }, {
            key: "_swipeDirection",
            value: function(e, t, i, n) {
                return Math.abs(e - t) >= Math.abs(i - n) ? e - t > 0 ? "Left" : "Right" : i - n > 0 ? "Up" : "Down"
            }
        }, {
            key: "on",
            value: function(e, t) {
                this[e] && this[e].add(t)
            }
        }, {
            key: "off",
            value: function(e, t) {
                this[e] && this[e].del(t)
            }
        }, {
            key: "destroy",
            value: function() {
                return this.singleTapTimeout && clearTimeout(this.singleTapTimeout), this.tapTimeout && clearTimeout(this.tapTimeout), this.longTapTimeout && clearTimeout(this.longTapTimeout), this.swipeTimeout && clearTimeout(this.swipeTimeout), this.element.removeEventListener("touchstart", this.start), this.element.removeEventListener("touchmove", this.move), this.element.removeEventListener("touchend", this.end), this.element.removeEventListener("touchcancel", this.cancel), this.rotate.del(), this.touchStart.del(), this.multipointStart.del(), this.multipointEnd.del(), this.pinch.del(), this.swipe.del(), this.tap.del(), this.doubleTap.del(), this.longTap.del(), this.singleTap.del(), this.pressMove.del(), this.twoFingerPressMove.del(), this.touchMove.del(), this.touchEnd.del(), this.touchCancel.del(), this.preV = this.pinchStartLen = this.zoom = this.isDoubleTap = this.delta = this.last = this.now = this.tapTimeout = this.singleTapTimeout = this.longTapTimeout = this.swipeTimeout = this.x1 = this.x2 = this.y1 = this.y2 = this.preTapPosition = this.rotate = this.touchStart = this.multipointStart = this.multipointEnd = this.pinch = this.swipe = this.tap = this.doubleTap = this.longTap = this.singleTap = this.pressMove = this.touchMove = this.touchEnd = this.touchCancel = this.twoFingerPressMove = null, window.removeEventListener("scroll", this._cancelAllHandler), null
            }
        }]), e
    }();

    function z(e) {
        var t = function() {
                var e, t = document.createElement("fakeelement"),
                    i = {
                        transition: "transitionend",
                        OTransition: "oTransitionEnd",
                        MozTransition: "transitionend",
                        WebkitTransition: "webkitTransitionEnd"
                    };
                for (e in i)
                    if (void 0 !== t.style[e]) return i[e]
            }(),
            i = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth,
            n = h(e, "gslide-media") ? e : e.querySelector(".gslide-media"),
            s = u(n, ".ginner-container"),
            a = e.querySelector(".gslide-description");
        i > 769 && (n = s), d(n, "greset"), f(n, "translate3d(0, 0, 0)"), l(t, {
            onElement: n,
            once: !0,
            withCallback: function(e, t) {
                c(n, "greset")
            }
        }), n.style.opacity = "", a && (a.style.opacity = "")
    }
    var H = function() {
            function e(i, n) {
                var s = this,
                    a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null;
                if (t(this, e), this.img = i, this.slide = n, this.onclose = a, this.img.setZoomEvents) return !1;
                this.active = !1, this.zoomedIn = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.img.addEventListener("mousedown", function(e) {
                    return s.dragStart(e)
                }, !1), this.img.addEventListener("mouseup", function(e) {
                    return s.dragEnd(e)
                }, !1), this.img.addEventListener("mousemove", function(e) {
                    return s.drag(e)
                }, !1), this.img.addEventListener("click", function(e) {
                    return s.slide.classList.contains("dragging-nav") ? (s.zoomOut(), !1) : s.zoomedIn ? void(s.zoomedIn && !s.dragging && s.zoomOut()) : s.zoomIn()
                }, !1), this.img.setZoomEvents = !0
            }
            return n(e, [{
                key: "zoomIn",
                value: function() {
                    var e = this.widowWidth();
                    if (!(this.zoomedIn || e <= 768)) {
                        var t = this.img;
                        if (t.setAttribute("data-style", t.getAttribute("style")), t.style.maxWidth = t.naturalWidth + "px", t.style.maxHeight = t.naturalHeight + "px", t.naturalWidth > e) {
                            var i = e / 2 - t.naturalWidth / 2;
                            this.setTranslate(this.img.parentNode, i, 0)
                        }
                        this.slide.classList.add("zoomed"), this.zoomedIn = !0
                    }
                }
            }, {
                key: "zoomOut",
                value: function() {
                    this.img.parentNode.setAttribute("style", ""), this.img.setAttribute("style", this.img.getAttribute("data-style")), this.slide.classList.remove("zoomed"), this.zoomedIn = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.onclose && "function" == typeof this.onclose && this.onclose()
                }
            }, {
                key: "dragStart",
                value: function(e) {
                    e.preventDefault(), this.zoomedIn ? ("touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset), e.target === this.img && (this.active = !0, this.img.classList.add("dragging"))) : this.active = !1
                }
            }, {
                key: "dragEnd",
                value: function(e) {
                    var t = this;
                    e.preventDefault(), this.initialX = this.currentX, this.initialY = this.currentY, this.active = !1, setTimeout(function() {
                        t.dragging = !1, t.img.isDragging = !1, t.img.classList.remove("dragging")
                    }, 100)
                }
            }, {
                key: "drag",
                value: function(e) {
                    this.active && (e.preventDefault(), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.img.isDragging = !0, this.dragging = !0, this.setTranslate(this.img, this.currentX, this.currentY))
                }
            }, {
                key: "onMove",
                value: function(e) {
                    if (this.zoomedIn) {
                        var t = e.clientX - this.img.naturalWidth / 2,
                            i = e.clientY - this.img.naturalHeight / 2;
                        this.setTranslate(this.img, t, i)
                    }
                }
            }, {
                key: "setTranslate",
                value: function(e, t, i) {
                    e.style.transform = "translate3d(" + t + "px, " + i + "px, 0)"
                }
            }, {
                key: "widowWidth",
                value: function() {
                    return window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
                }
            }]), e
        }(),
        Y = function() {
            function e() {
                var i = this,
                    n = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e);
                var s = n.dragEl,
                    a = n.toleranceX,
                    r = n.toleranceY,
                    o = n.slide,
                    l = n.instance;
                this.el = s, this.active = !1, this.dragging = !1, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.direction = null, this.lastDirection = null, this.toleranceX = void 0 === a ? 40 : a, this.toleranceY = void 0 === r ? 65 : r, this.toleranceReached = !1, this.dragContainer = this.el, this.slide = void 0 === o ? null : o, this.instance = void 0 === l ? null : l, this.el.addEventListener("mousedown", function(e) {
                    return i.dragStart(e)
                }, !1), this.el.addEventListener("mouseup", function(e) {
                    return i.dragEnd(e)
                }, !1), this.el.addEventListener("mousemove", function(e) {
                    return i.drag(e)
                }, !1)
            }
            return n(e, [{
                key: "dragStart",
                value: function(e) {
                    if (this.slide.classList.contains("zoomed")) this.active = !1;
                    else {
                        "touchstart" === e.type ? (this.initialX = e.touches[0].clientX - this.xOffset, this.initialY = e.touches[0].clientY - this.yOffset) : (this.initialX = e.clientX - this.xOffset, this.initialY = e.clientY - this.yOffset);
                        var t = e.target.nodeName.toLowerCase();
                        e.target.classList.contains("nodrag") || u(e.target, ".nodrag") || -1 !== ["input", "select", "textarea", "button", "a"].indexOf(t) ? this.active = !1 : (e.preventDefault(), (e.target === this.el || "img" !== t && u(e.target, ".gslide-inline")) && (this.active = !0, this.el.classList.add("dragging"), this.dragContainer = u(e.target, ".ginner-container")))
                    }
                }
            }, {
                key: "dragEnd",
                value: function(e) {
                    var t = this;
                    e && e.preventDefault(), this.initialX = 0, this.initialY = 0, this.currentX = null, this.currentY = null, this.initialX = null, this.initialY = null, this.xOffset = 0, this.yOffset = 0, this.active = !1, this.doSlideChange && (this.instance.preventOutsideClick = !0, "right" == this.doSlideChange && this.instance.prevSlide(), "left" == this.doSlideChange && this.instance.nextSlide()), this.doSlideClose && this.instance.close(), this.toleranceReached || this.setTranslate(this.dragContainer, 0, 0, !0), setTimeout(function() {
                        t.instance.preventOutsideClick = !1, t.toleranceReached = !1, t.lastDirection = null, t.dragging = !1, t.el.isDragging = !1, t.el.classList.remove("dragging"), t.slide.classList.remove("dragging-nav"), t.dragContainer.style.transform = "", t.dragContainer.style.transition = ""
                    }, 100)
                }
            }, {
                key: "drag",
                value: function(e) {
                    if (this.active) {
                        e.preventDefault(), this.slide.classList.add("dragging-nav"), "touchmove" === e.type ? (this.currentX = e.touches[0].clientX - this.initialX, this.currentY = e.touches[0].clientY - this.initialY) : (this.currentX = e.clientX - this.initialX, this.currentY = e.clientY - this.initialY), this.xOffset = this.currentX, this.yOffset = this.currentY, this.el.isDragging = !0, this.dragging = !0, this.doSlideChange = !1, this.doSlideClose = !1;
                        var t = Math.abs(this.currentX),
                            i = Math.abs(this.currentY);
                        if (t > 0 && t >= Math.abs(this.currentY) && (!this.lastDirection || "x" == this.lastDirection)) {
                            this.yOffset = 0, this.lastDirection = "x", this.setTranslate(this.dragContainer, this.currentX, 0);
                            var n = this.shouldChange();
                            if (!this.instance.settings.dragAutoSnap && n && (this.doSlideChange = n), this.instance.settings.dragAutoSnap && n) return this.instance.preventOutsideClick = !0, this.toleranceReached = !0, this.active = !1, this.instance.preventOutsideClick = !0, this.dragEnd(null), "right" == n && this.instance.prevSlide(), void("left" == n && this.instance.nextSlide())
                        }
                        if (this.toleranceY > 0 && i > 0 && i >= t && (!this.lastDirection || "y" == this.lastDirection)) {
                            this.xOffset = 0, this.lastDirection = "y", this.setTranslate(this.dragContainer, 0, this.currentY);
                            var s = this.shouldClose();
                            return !this.instance.settings.dragAutoSnap && s && (this.doSlideClose = !0), void(this.instance.settings.dragAutoSnap && s && this.instance.close())
                        }
                    }
                }
            }, {
                key: "shouldChange",
                value: function() {
                    var e = !1;
                    if (Math.abs(this.currentX) >= this.toleranceX) {
                        var t = this.currentX > 0 ? "right" : "left";
                        ("left" == t && this.slide !== this.slide.parentNode.lastChild || "right" == t && this.slide !== this.slide.parentNode.firstChild) && (e = t)
                    }
                    return e
                }
            }, {
                key: "shouldClose",
                value: function() {
                    var e = !1;
                    return Math.abs(this.currentY) >= this.toleranceY && (e = !0), e
                }
            }, {
                key: "setTranslate",
                value: function(e, t, i) {
                    var n = arguments.length > 3 && void 0 !== arguments[3] && arguments[3];
                    e.style.transition = n ? "all .2s ease" : "", e.style.transform = "translate3d(".concat(t, "px, ").concat(i, "px, 0)")
                }
            }]), e
        }();

    function B(e, t, i, n) {
        var s = this,
            a = e.querySelector(".ginner-container"),
            r = "gvideo" + i,
            o = e.querySelector(".gslide-media"),
            l = this.getAllPlayers();
        d(a, "gvideo-container"), o.insertBefore(v('<div class="gvideo-wrapper"></div>'), o.firstChild);
        var c = e.querySelector(".gvideo-wrapper");
        b(this.settings.plyr.css, "Plyr");
        var h = t.href,
            u = null == t ? void 0 : t.videoProvider,
            p = !1;
        o.style.maxWidth = t.width, b(this.settings.plyr.js, "Plyr", function() {
            if (!u && h.match(/vimeo\.com\/([0-9]*)/) && (u = "vimeo"), !u && (h.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || h.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || h.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/)) && (u = "youtube"), "local" === u || !u) {
                u = "local";
                var a = '<video id="' + r + '" ';
                a += 'style="background:#000; max-width: '.concat(t.width, ';" '), a += 'preload="metadata" ', a += 'x-webkit-airplay="allow" ', a += "playsinline ", a += "controls ", a += 'class="gvideo-local">', a += '<source src="'.concat(h, '">'), p = v(a += "</video>")
            }
            var o = p || v('<div id="'.concat(r, '" data-plyr-provider="').concat(u, '" data-plyr-embed-id="').concat(h, '"></div>'));
            d(c, "".concat(u, "-video gvideo")), c.appendChild(o), c.setAttribute("data-id", r), c.setAttribute("data-index", i);
            var f = D(s.settings.plyr, "config") ? s.settings.plyr.config : {},
                m = new Plyr("#" + r, f);
            m.on("ready", function(e) {
                l[r] = e.detail.plyr, _(n) && n()
            }), $(function() {
                return e.querySelector("iframe") && "true" == e.querySelector("iframe").dataset.ready
            }, function() {
                s.resize(e)
            }), m.on("enterfullscreen", q), m.on("exitfullscreen", q)
        })
    }

    function q(e) {
        var t = u(e.target, ".gslide-media");
        "enterfullscreen" === e.type && d(t, "fullscreen"), "exitfullscreen" === e.type && c(t, "fullscreen")
    }

    function W(e, t, i, n) {
        var s, a = this,
            r = e.querySelector(".gslide-media"),
            o = !(!D(t, "href") || !t.href) && t.href.split("#").pop().trim(),
            c = !(!D(t, "content") || !t.content) && t.content;
        if (c && (C(c) && (s = v('<div class="ginlined-content">'.concat(c, "</div>"))), x(c))) {
            "none" == c.style.display && (c.style.display = "block");
            var h = document.createElement("div");
            h.className = "ginlined-content", h.appendChild(c), s = h
        }
        if (o) {
            var u = document.getElementById(o);
            if (!u) return !1;
            var p = u.cloneNode(!0);
            p.style.height = t.height, p.style.maxWidth = t.width, d(p, "ginlined-content"), s = p
        }
        if (!s) return console.error("Unable to append inline slide content", t), !1;
        r.style.height = t.height, r.style.width = t.width, r.appendChild(s), this.events["inlineclose" + o] = l("click", {
            onElement: r.querySelectorAll(".gtrigger-close"),
            withCallback: function(e) {
                e.preventDefault(), a.close()
            }
        }), _(n) && n()
    }

    function F(e, t, i, n) {
        var s, a, r, o, l, c, h = e.querySelector(".gslide-media"),
            u = (a = (s = {
                url: t.href,
                callback: n
            }).url, r = s.allow, o = s.callback, l = s.appendTo, (c = document.createElement("iframe")).className = "vimeo-video gvideo", c.src = a, c.style.width = "100%", c.style.height = "100%", r && c.setAttribute("allow", r), c.onload = function() {
                c.onload = null, d(c, "node-ready"), _(o) && o()
            }, l && l.appendChild(c), c);
        h.parentNode.style.maxWidth = t.width, h.parentNode.style.height = t.height, h.appendChild(u)
    }
    var R = function() {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e), this.defaults = {
                    href: "",
                    sizes: "",
                    srcset: "",
                    title: "",
                    type: "",
                    videoProvider: "",
                    description: "",
                    alt: "",
                    descPosition: "bottom",
                    effect: "",
                    width: "",
                    height: "",
                    content: !1,
                    zoomable: !0,
                    draggable: !0
                }, E(i) && (this.defaults = a(this.defaults, i))
            }
            return n(e, [{
                key: "sourceType",
                value: function(e) {
                    var t = e;
                    return null !== (e = e.toLowerCase()).match(/\.(jpeg|jpg|jpe|gif|png|apn|webp|avif|svg)/) ? "image" : e.match(/(youtube\.com|youtube-nocookie\.com)\/watch\?v=([a-zA-Z0-9\-_]+)/) || e.match(/youtu\.be\/([a-zA-Z0-9\-_]+)/) || e.match(/(youtube\.com|youtube-nocookie\.com)\/embed\/([a-zA-Z0-9\-_]+)/) || e.match(/vimeo\.com\/([0-9]*)/) || null !== e.match(/\.(mp4|ogg|webm|mov)/) ? "video" : null !== e.match(/\.(mp3|wav|wma|aac|ogg)/) ? "audio" : e.indexOf("#") > -1 && "" !== t.split("#").pop().trim() ? "inline" : e.indexOf("goajax=true") > -1 ? "ajax" : "external"
                }
            }, {
                key: "parseConfig",
                value: function(e, t) {
                    var i, n = this,
                        s = a({
                            descPosition: t.descPosition
                        }, this.defaults);
                    if (E(e) && !x(e)) {
                        D(e, "type") || (D(e, "content") && e.content ? e.type = "inline" : D(e, "href") && (e.type = this.sourceType(e.href)));
                        var o = a(s, e);
                        return this.setSize(o, t), o
                    }
                    var l = "",
                        d = e.getAttribute("data-glightbox"),
                        c = e.nodeName.toLowerCase();
                    if ("a" === c && (l = e.href), "img" === c && (l = e.src, s.alt = e.alt), s.href = l, r(s, function(i, a) {
                            D(t, a) && "width" !== a && (s[a] = t[a]);
                            var r = e.dataset[a];
                            S(r) || (s[a] = n.sanitizeValue(r))
                        }), s.content && (s.type = "inline"), !s.type && l && (s.type = this.sourceType(l)), S(d)) {
                        if (!s.title && "a" == c) {
                            var h = e.title;
                            S(h) || "" === h || (s.title = h)
                        }
                        if (!s.title && "img" == c) {
                            var u = e.alt;
                            S(u) || "" === u || (s.title = u)
                        }
                    } else {
                        var p = [];
                        r(s, function(e, t) {
                            p.push(";\\s?" + t)
                        }), p = p.join("\\s?:|"), "" !== d.trim() && r(s, function(e, t) {
                            var i = RegExp("s?" + t + "s?:s?(.*?)(" + p + "s?:|$)"),
                                a = d.match(i);
                            if (a && a.length && a[1]) {
                                var r = a[1].trim().replace(/;\s*$/, "");
                                s[t] = n.sanitizeValue(r)
                            }
                        })
                    }
                    if (s.description && "." === s.description.substring(0, 1)) {
                        try {
                            i = document.querySelector(s.description).innerHTML
                        } catch (f) {
                            if (!(f instanceof DOMException)) throw f
                        }
                        i && (s.description = i)
                    }
                    if (!s.description) {
                        var m = e.querySelector(".glightbox-desc");
                        m && (s.description = m.innerHTML)
                    }
                    return this.setSize(s, t, e), this.slideConfig = s, s
                }
            }, {
                key: "setSize",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                        n = "video" == e.type ? this.checkSize(t.videosWidth) : this.checkSize(t.width),
                        s = this.checkSize(t.height);
                    return e.width = D(e, "width") && "" !== e.width ? this.checkSize(e.width) : n, e.height = D(e, "height") && "" !== e.height ? this.checkSize(e.height) : s, i && "image" == e.type && (e._hasCustomWidth = !!i.dataset.width, e._hasCustomHeight = !!i.dataset.height), e
                }
            }, {
                key: "checkSize",
                value: function(e) {
                    return A(e) ? "".concat(e, "px") : e
                }
            }, {
                key: "sanitizeValue",
                value: function(e) {
                    return "true" !== e && "false" !== e ? e : "true" === e
                }
            }]), e
        }(),
        j = function() {
            function e(i, n, s) {
                t(this, e), this.element = i, this.instance = n, this.index = s
            }
            return n(e, [{
                key: "setContent",
                value: function() {
                    var e, t, i, n, s, a, r = this,
                        o = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        l = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    if (h(o, "loaded")) return !1;
                    var c = this.instance.settings,
                        u = this.slideConfig,
                        p = w();
                    _(c.beforeSlideLoad) && c.beforeSlideLoad({
                        index: this.index,
                        slide: o,
                        player: !1
                    });
                    var f = u.type,
                        m = u.descPosition,
                        g = o.querySelector(".gslide-media"),
                        v = o.querySelector(".gslide-title"),
                        y = o.querySelector(".gslide-desc"),
                        $ = o.querySelector(".gdesc-inner"),
                        b = l,
                        C = "gSlideTitle_" + this.index,
                        x = "gSlideDesc_" + this.index;
                    if (_(c.afterSlideLoad) && (b = function() {
                            _(l) && l(), c.afterSlideLoad({
                                index: r.index,
                                slide: o,
                                player: r.instance.getSlidePlayerInstance(r.index)
                            })
                        }), "" == u.title && "" == u.description ? $ && $.parentNode.parentNode.removeChild($.parentNode) : (v && "" !== u.title ? (v.id = C, v.innerHTML = u.title) : v.parentNode.removeChild(v), y && "" !== u.description ? (y.id = x, p && c.moreLength > 0 ? (u.smallDescription = this.slideShortDesc(u.description, c.moreLength, c.moreText), y.innerHTML = u.smallDescription, this.descriptionEvents(y, u)) : y.innerHTML = u.description) : y.parentNode.removeChild(y), d(g.parentNode, "desc-".concat(m)), d($.parentNode, "description-".concat(m))), d(g, "gslide-".concat(f)), d(o, "loaded"), "video" !== f) {
                        if ("external" !== f) return "inline" === f ? (W.apply(this.instance, [o, u, this.index, b]), void(u.draggable && new Y({
                            dragEl: o.querySelector(".gslide-inline"),
                            toleranceX: c.dragToleranceX,
                            toleranceY: c.dragToleranceY,
                            slide: o,
                            instance: this.instance
                        }))) : void("image" !== f ? _(b) && b() : (e = o, t = u, i = this.index, n = function() {
                            var e = o.querySelector("img");
                            u.draggable && new Y({
                                dragEl: e,
                                toleranceX: c.dragToleranceX,
                                toleranceY: c.dragToleranceY,
                                slide: o,
                                instance: r.instance
                            }), u.zoomable && e.naturalWidth > e.offsetWidth && (d(e, "zoomable"), new H(e, o, function() {
                                r.instance.resize()
                            })), _(b) && b()
                        }, s = e.querySelector(".gslide-media"), void((a = new Image).addEventListener("load", function() {
                            _(n) && n()
                        }, !1), a.src = t.href, "" != t.sizes && "" != t.srcset && (a.sizes = t.sizes, a.srcset = t.srcset), a.alt = "", S(t.alt) || "" === t.alt || (a.alt = t.alt), "" !== t.title && a.setAttribute("aria-labelledby", "gSlideTitle_" + i), "" !== t.description && a.setAttribute("aria-describedby", "gSlideDesc_" + i), t.hasOwnProperty("_hasCustomWidth") && t._hasCustomWidth && (a.style.width = t.width), t.hasOwnProperty("_hasCustomHeight") && t._hasCustomHeight && (a.style.height = t.height), s.insertBefore(a, s.firstChild))));
                        F.apply(this, [o, u, this.index, b])
                    } else B.apply(this.instance, [o, u, this.index, b])
                }
            }, {
                key: "slideShortDesc",
                value: function(e) {
                    var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 50,
                        i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2],
                        n = document.createElement("div");
                    if (n.innerHTML = e, (e = n.innerText.trim()).length <= t) return e;
                    var s = e.substr(0, t - 1);
                    return i ? (n = null, s + '... <a href="#" class="desc-more">' + i + "</a>") : s
                }
            }, {
                key: "descriptionEvents",
                value: function(e, t) {
                    var i = this,
                        n = e.querySelector(".desc-more");
                    if (!n) return !1;
                    l("click", {
                        onElement: n,
                        withCallback: function(e, n) {
                            e.preventDefault();
                            var s = document.body,
                                a = u(n, ".gslide-desc");
                            if (!a) return !1;
                            a.innerHTML = t.description, d(s, "gdesc-open");
                            var r = l("click", {
                                onElement: [s, u(a, ".gslide-description")],
                                withCallback: function(e, n) {
                                    "a" !== e.target.nodeName.toLowerCase() && (c(s, "gdesc-open"), d(s, "gdesc-closed"), a.innerHTML = t.smallDescription, i.descriptionEvents(a, t), setTimeout(function() {
                                        c(s, "gdesc-closed")
                                    }, 400), r.destroy())
                                }
                            })
                        }
                    })
                }
            }, {
                key: "create",
                value: function() {
                    return v(this.instance.settings.slideHTML)
                }
            }, {
                key: "getConfig",
                value: function() {
                    x(this.element) || this.element.hasOwnProperty("draggable") || (this.element.draggable = this.instance.settings.draggable);
                    var e = new R(this.instance.settings.slideExtraAttributes);
                    return this.slideConfig = e.parseConfig(this.element, this.instance.settings), this.slideConfig
                }
            }]), e
        }(),
        V = w(),
        X = null !== w() || void 0 !== document.createTouch || "ontouchstart" in window || "onmsgesturechange" in window || navigator.msMaxTouchPoints,
        G = document.getElementsByTagName("html")[0],
        U = {
            selector: ".glightbox",
            elements: null,
            skin: "clean",
            theme: "clean",
            closeButton: !0,
            startAt: null,
            autoplayVideos: !0,
            autofocusVideos: !0,
            descPosition: "bottom",
            width: "900px",
            height: "506px",
            videosWidth: "960px",
            beforeSlideChange: null,
            afterSlideChange: null,
            beforeSlideLoad: null,
            afterSlideLoad: null,
            slideInserted: null,
            slideRemoved: null,
            slideExtraAttributes: null,
            onOpen: null,
            onClose: null,
            loop: !1,
            zoomable: !0,
            draggable: !0,
            dragAutoSnap: !1,
            dragToleranceX: 40,
            dragToleranceY: 65,
            preload: !0,
            oneSlidePerOpen: !1,
            touchNavigation: !0,
            touchFollowAxis: !0,
            keyboardNavigation: !0,
            closeOnOutsideClick: !0,
            plugins: !1,
            plyr: {
                css: "https://cdn.plyr.io/3.6.12/plyr.css",
                js: "https://cdn.plyr.io/3.6.12/plyr.js",
                config: {
                    ratio: "16:9",
                    fullscreen: {
                        enabled: !0,
                        iosNative: !0
                    },
                    youtube: {
                        noCookie: !0,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3
                    },
                    vimeo: {
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        transparent: !1
                    }
                }
            },
            openEffect: "zoom",
            closeEffect: "zoom",
            slideEffect: "slide",
            moreText: "See more",
            moreLength: 60,
            cssEfects: {
                fade: {
                    in: "fadeIn",
                    out: "fadeOut"
                },
                zoom: {
                    in: "zoomIn",
                    out: "zoomOut"
                },
                slide: {
                    in: "slideInRight",
                    out: "slideOutLeft"
                },
                slideBack: {
                    in: "slideInLeft",
                    out: "slideOutRight"
                },
                none: {
                    in: "none",
                    out: "none"
                }
            },
            svg: {
                close: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 512 512" xml:space="preserve"><g><g><path d="M505.943,6.058c-8.077-8.077-21.172-8.077-29.249,0L6.058,476.693c-8.077,8.077-8.077,21.172,0,29.249C10.096,509.982,15.39,512,20.683,512c5.293,0,10.586-2.019,14.625-6.059L505.943,35.306C514.019,27.23,514.019,14.135,505.943,6.058z"/></g></g><g><g><path d="M505.942,476.694L35.306,6.059c-8.076-8.077-21.172-8.077-29.248,0c-8.077,8.076-8.077,21.171,0,29.248l470.636,470.636c4.038,4.039,9.332,6.058,14.625,6.058c5.293,0,10.587-2.019,14.624-6.057C514.018,497.866,514.018,484.771,505.942,476.694z"/></g></g></svg>',
                next: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"> <g><path d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z"/></g></svg>',
                prev: '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 477.175 477.175" xml:space="preserve"><g><path d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"/></g></svg>'
            },
            slideHTML: '<div class="gslide">\n    <div class="gslide-inner-content">\n        <div class="ginner-container">\n            <div class="gslide-media">\n            </div>\n            <div class="gslide-description">\n                <div class="gdesc-inner">\n                    <h4 class="gslide-title"></h4>\n                    <div class="gslide-desc"></div>\n                </div>\n            </div>\n        </div>\n    </div>\n</div>',
            lightboxHTML: '<div id="glightbox-body" class="glightbox-container" tabindex="-1" role="dialog" aria-hidden="false">\n    <div class="gloader visible"></div>\n    <div class="goverlay"></div>\n    <div class="gcontainer">\n    <div id="glightbox-slider" class="gslider"></div>\n    <button class="gclose gbtn" aria-label="Close" data-taborder="3">{closeSVG}</button>\n    <button class="gprev gbtn" aria-label="Previous" data-taborder="2">{prevSVG}</button>\n    <button class="gnext gbtn" aria-label="Next" data-taborder="1">{nextSVG}</button>\n</div>\n</div>'
        },
        K = function() {
            function e() {
                var i = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                t(this, e), this.customOptions = i, this.settings = a(U, i), this.effectsClasses = this.getAnimationClasses(), this.videoPlayers = {}, this.apiEvents = [], this.fullElementsList = !1
            }
            return n(e, [{
                key: "init",
                value: function() {
                    var e = this,
                        t = this.getSelector();
                    t && (this.baseEvents = l("click", {
                        onElement: t,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.open(i)
                        }
                    })), this.elements = this.getElements()
                }
            }, {
                key: "open",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null,
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                    if (0 === this.elements.length) return !1;
                    this.activeSlide = null, this.prevActiveSlideIndex = null, this.prevActiveSlide = null;
                    var i = A(t) ? t : this.settings.startAt;
                    if (x(e)) {
                        var n = e.getAttribute("data-gallery");
                        n && (this.fullElementsList = this.elements, this.elements = this.getGalleryElements(this.elements, n)), S(i) && (i = this.getElementIndex(e)) < 0 && (i = 0)
                    }
                    A(i) || (i = 0), this.build(), p(this.overlay, "none" === this.settings.openEffect ? "none" : this.settings.cssEfects.fade.in);
                    var s = document.body,
                        a = window.innerWidth - document.documentElement.clientWidth;
                    if (a > 0) {
                        var r = document.createElement("style");
                        r.type = "text/css", r.className = "gcss-styles", r.innerText = ".gscrollbar-fixer {margin-right: ".concat(a, "px}"), document.head.appendChild(r), d(s, "gscrollbar-fixer")
                    }
                    d(s, "glightbox-open"), d(G, "glightbox-open"), V && (d(document.body, "glightbox-mobile"), this.settings.slideEffect = "slide"), this.showSlide(i, !0), 1 === this.elements.length ? (d(this.prevButton, "glightbox-button-hidden"), d(this.nextButton, "glightbox-button-hidden")) : (c(this.prevButton, "glightbox-button-hidden"), c(this.nextButton, "glightbox-button-hidden")), this.lightboxOpen = !0, this.trigger("open"), _(this.settings.onOpen) && this.settings.onOpen(), X && this.settings.touchNavigation && function e(t) {
                        if (t.events.hasOwnProperty("touch")) return !1;
                        var i, n, s, a = y(),
                            r = a.width,
                            o = a.height,
                            l = !1,
                            p = null,
                            m = null,
                            g = null,
                            v = !1,
                            $ = 1,
                            b = 1,
                            w = !1,
                            _ = !1,
                            C = null,
                            x = null,
                            k = null,
                            T = null,
                            E = 0,
                            S = 0,
                            D = !1,
                            M = !1,
                            A = {},
                            P = {},
                            L = 0,
                            I = 0,
                            O = document.getElementById("glightbox-slider"),
                            H = document.querySelector(".goverlay"),
                            Y = new N(O, {
                                touchStart: function(e) {
                                    l = !0, (h(e.targetTouches[0].target, "ginner-container") || u(e.targetTouches[0].target, ".gslide-desc") || "a" == e.targetTouches[0].target.nodeName.toLowerCase()) && (l = !1), u(e.targetTouches[0].target, ".gslide-inline") && !h(e.targetTouches[0].target.parentNode, "gslide-inline") && (l = !1), !l || (P = e.targetTouches[0], A.pageX = e.targetTouches[0].pageX, A.pageY = e.targetTouches[0].pageY, L = e.targetTouches[0].clientX, I = e.targetTouches[0].clientY, m = (p = t.activeSlide).querySelector(".gslide-media"), s = p.querySelector(".gslide-inline"), g = null, h(m, "gslide-image") && (g = m.querySelector("img")), (window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth) > 769 && (m = p.querySelector(".ginner-container")), c(H, "greset"), e.pageX > 20 && e.pageX < window.innerWidth - 20 || e.preventDefault())
                                },
                                touchMove: function(e) {
                                    if (l && (P = e.targetTouches[0], !w && !_)) {
                                        if (s && s.offsetHeight > o && 13 >= Math.abs(A.pageX - P.pageX)) return !1;
                                        v = !0;
                                        var a, d, c = e.targetTouches[0].clientX;
                                        if (Math.abs(L - c) > Math.abs(I - e.targetTouches[0].clientY) ? (D = !1, M = !0) : (M = !1, D = !0), E = 100 * (i = P.pageX - A.pageX) / r, S = 100 * (n = P.pageY - A.pageY) / o, D && g && (a = 1 - Math.abs(n) / o, H.style.opacity = a, t.settings.touchFollowAxis && (E = 0)), M && (a = 1 - Math.abs(i) / r, m.style.opacity = a, t.settings.touchFollowAxis && (S = 0)), !g) return f(m, "translate3d(".concat(E, "%, 0, 0)"));
                                        f(m, "translate3d(".concat(E, "%, ").concat(S, "%, 0)"))
                                    }
                                },
                                touchEnd: function() {
                                    if (l) {
                                        if (v = !1, _ || w) return k = C, void(T = x);
                                        var e = Math.abs(parseInt(S)),
                                            i = Math.abs(parseInt(E));
                                        if (!(e > 29 && g)) return e < 29 && i < 25 ? (d(H, "greset"), H.style.opacity = 1, z(m)) : void 0;
                                        t.close()
                                    }
                                },
                                multipointEnd: function() {
                                    setTimeout(function() {
                                        w = !1
                                    }, 50)
                                },
                                multipointStart: function() {
                                    w = !0, $ = b || 1
                                },
                                pinch: function(e) {
                                    if (!g || v) return !1;
                                    w = !0, g.scaleX = g.scaleY = $ * e.zoom;
                                    var t = $ * e.zoom;
                                    if (_ = !0, t <= 1) return _ = !1, t = 1, T = null, k = null, C = null, x = null, void g.setAttribute("style", "");
                                    t > 4.5 && (t = 4.5), g.style.transform = "scale3d(".concat(t, ", ").concat(t, ", 1)"), b = t
                                },
                                pressMove: function(e) {
                                    if (_ && !w) {
                                        var t = P.pageX - A.pageX,
                                            i = P.pageY - A.pageY;
                                        k && (t += k), T && (i += T), C = t, x = i;
                                        var n = "translate3d(".concat(t, "px, ").concat(i, "px, 0)");
                                        b && (n += " scale3d(".concat(b, ", ").concat(b, ", 1)")), f(g, n)
                                    }
                                },
                                swipe: function(e) {
                                    if (!_) {
                                        if (w) w = !1;
                                        else {
                                            if ("Left" == e.direction) {
                                                if (t.index == t.elements.length - 1) return z(m);
                                                t.nextSlide()
                                            }
                                            if ("Right" == e.direction) {
                                                if (0 == t.index) return z(m);
                                                t.prevSlide()
                                            }
                                        }
                                    }
                                }
                            });
                        t.events.touch = Y
                    }(this), this.settings.keyboardNavigation && function e(t) {
                        if (t.events.hasOwnProperty("keyboard")) return !1;
                        t.events.keyboard = l("keydown", {
                            onElement: window,
                            withCallback: function(e, i) {
                                var n = (e = e || window.event).keyCode;
                                if (9 == n) {
                                    var s = document.querySelector(".gbtn.focused");
                                    if (!s) {
                                        var a = !(!document.activeElement || !document.activeElement.nodeName) && document.activeElement.nodeName.toLocaleLowerCase();
                                        if ("input" == a || "textarea" == a || "button" == a) return
                                    }
                                    e.preventDefault();
                                    var r = document.querySelectorAll(".gbtn[data-taborder]");
                                    if (!r || r.length <= 0) return;
                                    if (!s) {
                                        var o = P();
                                        return void(o && (o.focus(), d(o, "focused")))
                                    }
                                    var l = P(s.getAttribute("data-taborder"));
                                    c(s, "focused"), l && (l.focus(), d(l, "focused"))
                                }
                                39 == n && t.nextSlide(), 37 == n && t.prevSlide(), 27 == n && t.close()
                            }
                        })
                    }(this)
                }
            }, {
                key: "openAt",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    this.open(null, e)
                }
            }, {
                key: "showSlide",
                value: function() {
                    var e = this,
                        t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        i = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                    m(this.loader), this.index = parseInt(t);
                    var n = this.slidesContainer.querySelector(".current");
                    n && c(n, "current"), this.slideAnimateOut();
                    var s = this.slidesContainer.querySelectorAll(".gslide")[t];
                    if (h(s, "loaded")) this.slideAnimateIn(s, i), g(this.loader);
                    else {
                        m(this.loader);
                        var a = this.elements[t],
                            r = {
                                index: this.index,
                                slide: s,
                                slideNode: s,
                                slideConfig: a.slideConfig,
                                slideIndex: this.index,
                                trigger: a.node,
                                player: null
                            };
                        this.trigger("slide_before_load", r), a.instance.setContent(s, function() {
                            g(e.loader), e.resize(), e.slideAnimateIn(s, i), e.trigger("slide_after_load", r)
                        })
                    }
                    this.slideDescription = s.querySelector(".gslide-description"), this.slideDescriptionContained = this.slideDescription && h(this.slideDescription.parentNode, "gslide-media"), this.settings.preload && (this.preloadSlide(t + 1), this.preloadSlide(t - 1)), this.updateNavigationClasses(), this.activeSlide = s
                }
            }, {
                key: "preloadSlide",
                value: function(e) {
                    var t = this;
                    if (e < 0 || e > this.elements.length - 1 || S(this.elements[e])) return !1;
                    var i = this.slidesContainer.querySelectorAll(".gslide")[e];
                    if (h(i, "loaded")) return !1;
                    var n = this.elements[e],
                        s = n.type,
                        a = {
                            index: e,
                            slide: i,
                            slideNode: i,
                            slideConfig: n.slideConfig,
                            slideIndex: e,
                            trigger: n.node,
                            player: null
                        };
                    this.trigger("slide_before_load", a), "video" === s || "external" === s ? setTimeout(function() {
                        n.instance.setContent(i, function() {
                            t.trigger("slide_after_load", a)
                        })
                    }, 200) : n.instance.setContent(i, function() {
                        t.trigger("slide_after_load", a)
                    })
                }
            }, {
                key: "prevSlide",
                value: function() {
                    this.goToSlide(this.index - 1)
                }
            }, {
                key: "nextSlide",
                value: function() {
                    this.goToSlide(this.index + 1)
                }
            }, {
                key: "goToSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0];
                    if (this.prevActiveSlide = this.activeSlide, this.prevActiveSlideIndex = this.index, !this.loop() && (e < 0 || e > this.elements.length - 1)) return !1;
                    e < 0 ? e = this.elements.length - 1 : e >= this.elements.length && (e = 0), this.showSlide(e)
                }
            }, {
                key: "insertSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                        t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : -1;
                    t < 0 && (t = this.elements.length);
                    var i = new j(e, this, t),
                        n = i.getConfig(),
                        s = a({}, n),
                        r = i.create(),
                        o = this.elements.length - 1;
                    s.index = t, s.node = !1, s.instance = i, s.slideConfig = n, this.elements.splice(t, 0, s);
                    var l = null,
                        d = null;
                    if (this.slidesContainer) {
                        if (t > o) this.slidesContainer.appendChild(r);
                        else {
                            var c = this.slidesContainer.querySelectorAll(".gslide")[t];
                            this.slidesContainer.insertBefore(r, c)
                        }(this.settings.preload && 0 == this.index && 0 == t || this.index - 1 == t || this.index + 1 == t) && this.preloadSlide(t), 0 === this.index && 0 === t && (this.index = 1), this.updateNavigationClasses(), l = this.slidesContainer.querySelectorAll(".gslide")[t], d = this.getSlidePlayerInstance(t), s.slideNode = l
                    }
                    this.trigger("slide_inserted", {
                        index: t,
                        slide: l,
                        slideNode: l,
                        slideConfig: n,
                        slideIndex: t,
                        trigger: null,
                        player: d
                    }), _(this.settings.slideInserted) && this.settings.slideInserted({
                        index: t,
                        slide: l,
                        player: d
                    })
                }
            }, {
                key: "removeSlide",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : -1;
                    if (e < 0 || e > this.elements.length - 1) return !1;
                    var t = this.slidesContainer && this.slidesContainer.querySelectorAll(".gslide")[e];
                    t && (this.getActiveSlideIndex() == e && (e == this.elements.length - 1 ? this.prevSlide() : this.nextSlide()), t.parentNode.removeChild(t)), this.elements.splice(e, 1), this.trigger("slide_removed", e), _(this.settings.slideRemoved) && this.settings.slideRemoved(e)
                }
            }, {
                key: "slideAnimateIn",
                value: function(e, t) {
                    var i = this,
                        n = e.querySelector(".gslide-media"),
                        s = e.querySelector(".gslide-description"),
                        a = {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlide,
                            slideConfig: S(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: S(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        r = {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideConfig: this.elements[this.index].slideConfig,
                            slideIndex: this.index,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        };
                    if (n.offsetWidth > 0 && s && (g(s), s.style.display = ""), c(e, this.effectsClasses), t) p(e, this.settings.cssEfects[this.settings.openEffect].in, function() {
                        i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                            prev: a,
                            current: r
                        }), _(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [a, r])
                    });
                    else {
                        var o = this.settings.slideEffect,
                            l = "none" !== o ? this.settings.cssEfects[o].in : o;
                        this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (l = this.settings.cssEfects.slideBack.in), p(e, l, function() {
                            i.settings.autoplayVideos && i.slidePlayerPlay(e), i.trigger("slide_changed", {
                                prev: a,
                                current: r
                            }), _(i.settings.afterSlideChange) && i.settings.afterSlideChange.apply(i, [a, r])
                        })
                    }
                    setTimeout(function() {
                        i.resize(e)
                    }, 100), d(e, "current")
                }
            }, {
                key: "slideAnimateOut",
                value: function() {
                    if (!this.prevActiveSlide) return !1;
                    var e = this.prevActiveSlide;
                    c(e, this.effectsClasses), d(e, "prev");
                    var t = this.settings.slideEffect,
                        i = "none" !== t ? this.settings.cssEfects[t].out : t;
                    this.slidePlayerPause(e), this.trigger("slide_before_change", {
                        prev: {
                            index: this.prevActiveSlideIndex,
                            slide: this.prevActiveSlide,
                            slideNode: this.prevActiveSlide,
                            slideIndex: this.prevActiveSlideIndex,
                            slideConfig: S(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].slideConfig,
                            trigger: S(this.prevActiveSlideIndex) ? null : this.elements[this.prevActiveSlideIndex].node,
                            player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                        },
                        current: {
                            index: this.index,
                            slide: this.activeSlide,
                            slideNode: this.activeSlide,
                            slideIndex: this.index,
                            slideConfig: this.elements[this.index].slideConfig,
                            trigger: this.elements[this.index].node,
                            player: this.getSlidePlayerInstance(this.index)
                        }
                    }), _(this.settings.beforeSlideChange) && this.settings.beforeSlideChange.apply(this, [{
                        index: this.prevActiveSlideIndex,
                        slide: this.prevActiveSlide,
                        player: this.getSlidePlayerInstance(this.prevActiveSlideIndex)
                    }, {
                        index: this.index,
                        slide: this.activeSlide,
                        player: this.getSlidePlayerInstance(this.index)
                    }]), this.prevActiveSlideIndex > this.index && "slide" == this.settings.slideEffect && (i = this.settings.cssEfects.slideBack.out), p(e, i, function() {
                        var t = e.querySelector(".ginner-container"),
                            i = e.querySelector(".gslide-media"),
                            n = e.querySelector(".gslide-description");
                        t.style.transform = "", i.style.transform = "", c(i, "greset"), i.style.opacity = "", n && (n.style.opacity = ""), c(e, "prev")
                    })
                }
            }, {
                key: "getAllPlayers",
                value: function() {
                    return this.videoPlayers
                }
            }, {
                key: "getSlidePlayerInstance",
                value: function(e) {
                    var t = "gvideo" + e,
                        i = this.getAllPlayers();
                    return !(!D(i, t) || !i[t]) && i[t]
                }
            }, {
                key: "stopSlideVideo",
                value: function(e) {
                    if (x(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    console.log("stopSlideVideo is deprecated, use slidePlayerPause");
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause()
                }
            }, {
                key: "slidePlayerPause",
                value: function(e) {
                    if (x(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    var i = this.getSlidePlayerInstance(e);
                    i && i.playing && i.pause()
                }
            }, {
                key: "playSlideVideo",
                value: function(e) {
                    if (x(e)) {
                        var t = e.querySelector(".gvideo-wrapper");
                        t && (e = t.getAttribute("data-index"))
                    }
                    console.log("playSlideVideo is deprecated, use slidePlayerPlay");
                    var i = this.getSlidePlayerInstance(e);
                    i && !i.playing && i.play()
                }
            }, {
                key: "slidePlayerPlay",
                value: function(e) {
                    var t;
                    if (!V || null !== (t = this.settings.plyr.config) && void 0 !== t && t.muted) {
                        if (x(e)) {
                            var i = e.querySelector(".gvideo-wrapper");
                            i && (e = i.getAttribute("data-index"))
                        }
                        var n = this.getSlidePlayerInstance(e);
                        n && !n.playing && (n.play(), this.settings.autofocusVideos && n.elements.container.focus())
                    }
                }
            }, {
                key: "setElements",
                value: function(e) {
                    var t = this;
                    this.settings.elements = !1;
                    var i = [];
                    e && e.length && r(e, function(e, n) {
                        var s = new j(e, t, n),
                            r = s.getConfig(),
                            o = a({}, r);
                        o.slideConfig = r, o.instance = s, o.index = n, i.push(o)
                    }), this.elements = i, this.lightboxOpen && (this.slidesContainer.innerHTML = "", this.elements.length && (r(this.elements, function() {
                        var e = v(t.settings.slideHTML);
                        t.slidesContainer.appendChild(e)
                    }), this.showSlide(0, !0)))
                }
            }, {
                key: "getElementIndex",
                value: function(e) {
                    var t = !1;
                    return r(this.elements, function(i, n) {
                        if (D(i, "node") && i.node == e) return t = n, !0
                    }), t
                }
            }, {
                key: "getElements",
                value: function() {
                    var e = this,
                        t = [];
                    this.elements = this.elements ? this.elements : [], !S(this.settings.elements) && k(this.settings.elements) && this.settings.elements.length && r(this.settings.elements, function(i, n) {
                        var s = new j(i, e, n),
                            r = s.getConfig(),
                            o = a({}, r);
                        o.node = !1, o.index = n, o.instance = s, o.slideConfig = r, t.push(o)
                    });
                    var i = !1;
                    return this.getSelector() && (i = document.querySelectorAll(this.getSelector())), i && r(i, function(i, n) {
                        var s = new j(i, e, n),
                            r = s.getConfig(),
                            o = a({}, r);
                        o.node = i, o.index = n, o.instance = s, o.slideConfig = r, o.gallery = i.getAttribute("data-gallery"), t.push(o)
                    }), t
                }
            }, {
                key: "getGalleryElements",
                value: function(e, t) {
                    return e.filter(function(e) {
                        return e.gallery == t
                    })
                }
            }, {
                key: "getSelector",
                value: function() {
                    return !this.settings.elements && (this.settings.selector && "data-" == this.settings.selector.substring(0, 5) ? "*[".concat(this.settings.selector, "]") : this.settings.selector)
                }
            }, {
                key: "getActiveSlide",
                value: function() {
                    return this.slidesContainer.querySelectorAll(".gslide")[this.index]
                }
            }, {
                key: "getActiveSlideIndex",
                value: function() {
                    return this.index
                }
            }, {
                key: "getAnimationClasses",
                value: function() {
                    var e = [];
                    for (var t in this.settings.cssEfects)
                        if (this.settings.cssEfects.hasOwnProperty(t)) {
                            var i = this.settings.cssEfects[t];
                            e.push("g".concat(i.in)), e.push("g".concat(i.out))
                        } return e.join(" ")
                }
            }, {
                key: "build",
                value: function() {
                    var e = this;
                    if (this.built) return !1;
                    var t = document.body.childNodes,
                        i = [];
                    r(t, function(e) {
                        e.parentNode == document.body && "#" !== e.nodeName.charAt(0) && e.hasAttribute && !e.hasAttribute("aria-hidden") && (i.push(e), e.setAttribute("aria-hidden", "true"))
                    });
                    var n = D(this.settings.svg, "next") ? this.settings.svg.next : "",
                        s = D(this.settings.svg, "prev") ? this.settings.svg.prev : "",
                        a = D(this.settings.svg, "close") ? this.settings.svg.close : "",
                        o = this.settings.lightboxHTML;
                    o = v(o = (o = (o = o.replace(/{nextSVG}/g, n)).replace(/{prevSVG}/g, s)).replace(/{closeSVG}/g, a)), document.body.appendChild(o);
                    var c = document.getElementById("glightbox-body");
                    this.modal = c;
                    var p = c.querySelector(".gclose");
                    this.prevButton = c.querySelector(".gprev"), this.nextButton = c.querySelector(".gnext"), this.overlay = c.querySelector(".goverlay"), this.loader = c.querySelector(".gloader"), this.slidesContainer = document.getElementById("glightbox-slider"), this.bodyHiddenChildElms = i, this.events = {}, d(this.modal, "glightbox-" + this.settings.skin), this.settings.closeButton && p && (this.events.close = l("click", {
                        onElement: p,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.close()
                        }
                    })), p && !this.settings.closeButton && p.parentNode.removeChild(p), this.nextButton && (this.events.next = l("click", {
                        onElement: this.nextButton,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.nextSlide()
                        }
                    })), this.prevButton && (this.events.prev = l("click", {
                        onElement: this.prevButton,
                        withCallback: function(t, i) {
                            t.preventDefault(), e.prevSlide()
                        }
                    })), this.settings.closeOnOutsideClick && (this.events.outClose = l("click", {
                        onElement: c,
                        withCallback: function(t, i) {
                            e.preventOutsideClick || h(document.body, "glightbox-mobile") || u(t.target, ".ginner-container") || u(t.target, ".gbtn") || h(t.target, "gnext") || h(t.target, "gprev") || e.close()
                        }
                    })), r(this.elements, function(t, i) {
                        e.slidesContainer.appendChild(t.instance.create()), t.slideNode = e.slidesContainer.querySelectorAll(".gslide")[i]
                    }), X && d(document.body, "glightbox-touch"), this.events.resize = l("resize", {
                        onElement: window,
                        withCallback: function() {
                            e.resize()
                        }
                    }), this.built = !0
                }
            }, {
                key: "resize",
                value: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : null;
                    if ((e = e || this.activeSlide) && !h(e, "zoomed")) {
                        var t = y(),
                            i = e.querySelector(".gvideo-wrapper"),
                            n = e.querySelector(".gslide-image"),
                            s = this.slideDescription,
                            a = t.width,
                            r = t.height;
                        if (a <= 768 ? d(document.body, "glightbox-mobile") : c(document.body, "glightbox-mobile"), i || n) {
                            var o = !1;
                            if (s && (h(s, "description-bottom") || h(s, "description-top")) && !h(s, "gabsolute") && (o = !0), n) {
                                if (a <= 768) n.querySelector("img");
                                else if (o) {
                                    var l = s.offsetHeight,
                                        u = n.querySelector("img");
                                    u.setAttribute("style", "max-height: calc(100vh - ".concat(l, "px)")), s.setAttribute("style", "max-width: ".concat(u.offsetWidth, "px;"))
                                }
                            }
                            if (i) {
                                var p = D(this.settings.plyr.config, "ratio") ? this.settings.plyr.config.ratio : "";
                                if (!p) {
                                    var f = i.clientWidth,
                                        m = i.clientHeight,
                                        g = f / m;
                                    p = "".concat(f / g, ":").concat(m / g)
                                }
                                var v = p.split(":"),
                                    $ = this.settings.videosWidth,
                                    b = this.settings.videosWidth,
                                    w = (b = A($) || -1 !== $.indexOf("px") ? parseInt($) : -1 !== $.indexOf("vw") ? a * parseInt($) / 100 : -1 !== $.indexOf("vh") ? r * parseInt($) / 100 : -1 !== $.indexOf("%") ? a * parseInt($) / 100 : parseInt(i.clientWidth)) / (parseInt(v[0]) / parseInt(v[1]));
                                if (w = Math.floor(w), o && (r -= s.offsetHeight), b > a || w > r || r < w && a > b) {
                                    var _ = i.offsetWidth,
                                        C = i.offsetHeight,
                                        x = r / C,
                                        k = {
                                            width: _ * x,
                                            height: C * x
                                        };
                                    i.parentNode.setAttribute("style", "max-width: ".concat(k.width, "px")), o && s.setAttribute("style", "max-width: ".concat(k.width, "px;"))
                                } else i.parentNode.style.maxWidth = "".concat($), o && s.setAttribute("style", "max-width: ".concat($, ";"))
                            }
                        }
                    }
                }
            }, {
                key: "reload",
                value: function() {
                    this.init()
                }
            }, {
                key: "updateNavigationClasses",
                value: function() {
                    var e = this.loop();
                    c(this.nextButton, "disabled"), c(this.prevButton, "disabled"), 0 == this.index && this.elements.length - 1 == 0 ? (d(this.prevButton, "disabled"), d(this.nextButton, "disabled")) : 0 !== this.index || e ? this.index !== this.elements.length - 1 || e || d(this.nextButton, "disabled") : d(this.prevButton, "disabled")
                }
            }, {
                key: "loop",
                value: function() {
                    var e = D(this.settings, "loopAtEnd") ? this.settings.loopAtEnd : null;
                    return D(this.settings, "loop") ? this.settings.loop : e
                }
            }, {
                key: "close",
                value: function() {
                    var e = this;
                    if (!this.lightboxOpen) {
                        if (this.events) {
                            for (var t in this.events) this.events.hasOwnProperty(t) && this.events[t].destroy();
                            this.events = null
                        }
                        return !1
                    }
                    if (this.closing) return !1;
                    this.closing = !0, this.slidePlayerPause(this.activeSlide), this.fullElementsList && (this.elements = this.fullElementsList), this.bodyHiddenChildElms.length && r(this.bodyHiddenChildElms, function(e) {
                        e.removeAttribute("aria-hidden")
                    }), d(this.modal, "glightbox-closing"), p(this.overlay, "none" == this.settings.openEffect ? "none" : this.settings.cssEfects.fade.out), p(this.activeSlide, this.settings.cssEfects[this.settings.closeEffect].out, function() {
                        if (e.activeSlide = null, e.prevActiveSlideIndex = null, e.prevActiveSlide = null, e.built = !1, e.events) {
                            for (var t in e.events) e.events.hasOwnProperty(t) && e.events[t].destroy();
                            e.events = null
                        }
                        var i = document.body;
                        c(G, "glightbox-open"), c(i, "glightbox-open touching gdesc-open glightbox-touch glightbox-mobile gscrollbar-fixer"), e.modal.parentNode.removeChild(e.modal), e.trigger("close"), _(e.settings.onClose) && e.settings.onClose();
                        var n = document.querySelector(".gcss-styles");
                        n && n.parentNode.removeChild(n), e.lightboxOpen = !1, e.closing = null
                    })
                }
            }, {
                key: "destroy",
                value: function() {
                    this.close(), this.clearAllEvents(), this.baseEvents && this.baseEvents.destroy()
                }
            }, {
                key: "on",
                value: function(e, t) {
                    var i = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                    if (!e || !_(t)) throw TypeError("Event name and callback must be defined");
                    this.apiEvents.push({
                        evt: e,
                        once: i,
                        callback: t
                    })
                }
            }, {
                key: "once",
                value: function(e, t) {
                    this.on(e, t, !0)
                }
            }, {
                key: "trigger",
                value: function(e) {
                    var t = this,
                        i = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null,
                        n = [];
                    r(this.apiEvents, function(t, s) {
                        var a = t.evt,
                            r = t.once,
                            o = t.callback;
                        a == e && (o(i), r && n.push(s))
                    }), n.length && r(n, function(e) {
                        return t.apiEvents.splice(e, 1)
                    })
                }
            }, {
                key: "clearAllEvents",
                value: function() {
                    this.apiEvents.splice(0, this.apiEvents.length)
                }
            }, {
                key: "version",
                value: function() {
                    return "3.1.0"
                }
            }]), e
        }();
    return function() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
            t = new K(e);
        return t.init(), t
    }
}),
function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? t(exports) : "function" == typeof define && define.amd ? define(["exports"], t) : t(e.fecha = {})
}(this, function(e) {
    "use strict";
    var t = /d{1,4}|M{1,4}|YY(?:YY)?|S{1,3}|Do|ZZ|Z|([HhMsDm])\1?|[aA]|"[^"]*"|'[^']*'/g,
        i = "[^\\s]+",
        n = /\[([^]*?)\]/gm;

    function s(e, t) {
        for (var i = [], n = 0, s = e.length; n < s; n++) i.push(e[n].substr(0, t));
        return i
    }
    var a = function(e) {
        return function(t, i) {
            var n = i[e].map(function(e) {
                return e.toLowerCase()
            }).indexOf(t.toLowerCase());
            return n > -1 ? n : null
        }
    };

    function r(e) {
        for (var t = [], i = 1; i < arguments.length; i++) t[i - 1] = arguments[i];
        for (var n = 0, s = t; n < s.length; n++) {
            var a = s[n];
            for (var r in a) e[r] = a[r]
        }
        return e
    }
    var o = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
        l = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        d = s(l, 3),
        c = {
            dayNamesShort: s(o, 3),
            dayNames: o,
            monthNamesShort: d,
            monthNames: l,
            amPm: ["am", "pm"],
            DoFn: function(e) {
                return e + ["th", "st", "nd", "rd"][e % 10 > 3 ? 0 : (e - e % 10 != 10 ? 1 : 0) * e % 10]
            }
        },
        h = r({}, c),
        u = function(e) {
            return h = r(h, e)
        },
        p = function(e) {
            return e.replace(/[|\\{()[^$+*?.-]/g, "\\$&")
        },
        f = function(e, t) {
            for (void 0 === t && (t = 2), e = String(e); e.length < t;) e = "0" + e;
            return e
        },
        m = {
            D: function(e) {
                return String(e.getDate())
            },
            DD: function(e) {
                return f(e.getDate())
            },
            Do: function(e, t) {
                return t.DoFn(e.getDate())
            },
            d: function(e) {
                return String(e.getDay())
            },
            dd: function(e) {
                return f(e.getDay())
            },
            ddd: function(e, t) {
                return t.dayNamesShort[e.getDay()]
            },
            dddd: function(e, t) {
                return t.dayNames[e.getDay()]
            },
            M: function(e) {
                return String(e.getMonth() + 1)
            },
            MM: function(e) {
                return f(e.getMonth() + 1)
            },
            MMM: function(e, t) {
                return t.monthNamesShort[e.getMonth()]
            },
            MMMM: function(e, t) {
                return t.monthNames[e.getMonth()]
            },
            YY: function(e) {
                return f(String(e.getFullYear()), 4).substr(2)
            },
            YYYY: function(e) {
                return f(e.getFullYear(), 4)
            },
            h: function(e) {
                return String(e.getHours() % 12 || 12)
            },
            hh: function(e) {
                return f(e.getHours() % 12 || 12)
            },
            H: function(e) {
                return String(e.getHours())
            },
            HH: function(e) {
                return f(e.getHours())
            },
            m: function(e) {
                return String(e.getMinutes())
            },
            mm: function(e) {
                return f(e.getMinutes())
            },
            s: function(e) {
                return String(e.getSeconds())
            },
            ss: function(e) {
                return f(e.getSeconds())
            },
            S: function(e) {
                return String(Math.round(e.getMilliseconds() / 100))
            },
            SS: function(e) {
                return f(Math.round(e.getMilliseconds() / 10), 2)
            },
            SSS: function(e) {
                return f(e.getMilliseconds(), 3)
            },
            a: function(e, t) {
                return 12 > e.getHours() ? t.amPm[0] : t.amPm[1]
            },
            A: function(e, t) {
                return 12 > e.getHours() ? t.amPm[0].toUpperCase() : t.amPm[1].toUpperCase()
            },
            ZZ: function(e) {
                var t = e.getTimezoneOffset();
                return (t > 0 ? "-" : "+") + f(100 * Math.floor(Math.abs(t) / 60) + Math.abs(t) % 60, 4)
            },
            Z: function(e) {
                var t = e.getTimezoneOffset();
                return (t > 0 ? "-" : "+") + f(Math.floor(Math.abs(t) / 60), 2) + ":" + f(Math.abs(t) % 60, 2)
            }
        },
        g = function(e) {
            return +e - 1
        },
        v = [null, "\\d\\d?"],
        y = [null, i],
        $ = ["isPm", i, function(e, t) {
            var i = e.toLowerCase();
            return i === t.amPm[0] ? 0 : i === t.amPm[1] ? 1 : null
        }],
        b = ["timezoneOffset", "[^\\s]*?[\\+\\-]\\d\\d:?\\d\\d|[^\\s]*?Z?", function(e) {
            var t = (e + "").match(/([+-]|\d\d)/gi);
            if (t) {
                var i = 60 * +t[1] + parseInt(t[2], 10);
                return "+" === t[0] ? i : -i
            }
            return 0
        }],
        w = {
            D: ["day", "\\d\\d?"],
            DD: ["day", "\\d\\d"],
            Do: ["day", "\\d\\d?" + i, function(e) {
                return parseInt(e, 10)
            }],
            M: ["month", "\\d\\d?", g],
            MM: ["month", "\\d\\d", g],
            YY: ["year", "\\d\\d", function(e) {
                var t = +("" + (new Date).getFullYear()).substr(0, 2);
                return +("" + (+e > 68 ? t - 1 : t) + e)
            }],
            h: ["hour", "\\d\\d?", void 0, "isPm"],
            hh: ["hour", "\\d\\d", void 0, "isPm"],
            H: ["hour", "\\d\\d?"],
            HH: ["hour", "\\d\\d"],
            m: ["minute", "\\d\\d?"],
            mm: ["minute", "\\d\\d"],
            s: ["second", "\\d\\d?"],
            ss: ["second", "\\d\\d"],
            YYYY: ["year", "\\d{4}"],
            S: ["millisecond", "\\d", function(e) {
                return 100 * +e
            }],
            SS: ["millisecond", "\\d\\d", function(e) {
                return 10 * +e
            }],
            SSS: ["millisecond", "\\d{3}"],
            d: v,
            dd: v,
            ddd: y,
            dddd: y,
            MMM: ["month", i, a("monthNamesShort")],
            MMMM: ["month", i, a("monthNames")],
            a: $,
            A: $,
            ZZ: b,
            Z: b
        },
        _ = {
            default: "ddd MMM DD YYYY HH:mm:ss",
            shortDate: "M/D/YY",
            mediumDate: "MMM D, YYYY",
            longDate: "MMMM D, YYYY",
            fullDate: "dddd, MMMM D, YYYY",
            isoDate: "YYYY-MM-DD",
            isoDateTime: "YYYY-MM-DDTHH:mm:ssZ",
            shortTime: "HH:mm",
            mediumTime: "HH:mm:ss",
            longTime: "HH:mm:ss.SSS"
        },
        C = function(e) {
            return r(_, e)
        },
        x = function(e, i, s) {
            if (void 0 === i && (i = _.default), void 0 === s && (s = {}), "number" == typeof e && (e = new Date(e)), "[object Date]" !== Object.prototype.toString.call(e) || isNaN(e.getTime())) throw Error("Invalid Date pass to format");
            var a = [];
            i = (i = _[i] || i).replace(n, function(e, t) {
                return a.push(t), "@@@"
            });
            var o = r(r({}, h), s);
            return (i = i.replace(t, function(t) {
                return m[t](e, o)
            })).replace(/@@@/g, function() {
                return a.shift()
            })
        };

    function k(e, i, s) {
        if (void 0 === s && (s = {}), "string" != typeof i) throw Error("Invalid format in fecha parse");
        if (i = _[i] || i, e.length > 1e3) return null;
        var a = {
                year: (new Date).getFullYear(),
                month: 0,
                day: 1,
                hour: 0,
                minute: 0,
                second: 0,
                millisecond: 0,
                isPm: null,
                timezoneOffset: null
            },
            o = [],
            l = [],
            d = i.replace(n, function(e, t) {
                return l.push(p(t)), "@@@"
            }),
            c = {},
            u = {};
        d = p(d).replace(t, function(e) {
            var t = w[e],
                i = t[0],
                n = t[1],
                s = t[3];
            if (c[i]) throw Error("Invalid format. " + i + " specified twice in format");
            return c[i] = !0, s && (u[s] = !0), o.push(t), "(" + n + ")"
        }), Object.keys(u).forEach(function(e) {
            if (!c[e]) throw Error("Invalid format. " + e + " is required in specified format")
        }), d = d.replace(/@@@/g, function() {
            return l.shift()
        });
        var f = e.match(RegExp(d, "i"));
        if (!f) return null;
        for (var m, g = r(r({}, h), s), v = 1; v < f.length; v++) {
            var y = o[v - 1],
                $ = y[0],
                b = y[2],
                C = b ? b(f[v], g) : +f[v];
            if (null == C) return null;
            a[$] = C
        }
        if (1 === a.isPm && null != a.hour && 12 != +a.hour ? a.hour = +a.hour + 12 : 0 === a.isPm && 12 == +a.hour && (a.hour = 0), null == a.timezoneOffset) {
            m = new Date(a.year, a.month, a.day, a.hour, a.minute, a.second, a.millisecond);
            for (var x = [
                    ["month", "getMonth"],
                    ["day", "getDate"],
                    ["hour", "getHours"],
                    ["minute", "getMinutes"],
                    ["second", "getSeconds"]
                ], k = (v = 0, x.length); v < k; v++)
                if (c[x[v][0]] && a[x[v][0]] !== m[x[v][1]]()) return null
        } else if (m = new Date(Date.UTC(a.year, a.month, a.day, a.hour, a.minute - a.timezoneOffset, a.second, a.millisecond)), a.month > 11 || a.month < 0 || a.day > 31 || a.day < 1 || a.hour > 23 || a.hour < 0 || a.minute > 59 || a.minute < 0 || a.second > 59 || a.second < 0) return null;
        return m
    }
    e.assign = r, e.default = {
        format: x,
        parse: k,
        defaultI18n: c,
        setGlobalDateI18n: u,
        setGlobalDateMasks: C
    }, e.format = x, e.parse = k, e.defaultI18n = c, e.setGlobalDateI18n = u, e.setGlobalDateMasks = C, Object.defineProperty(e, "__esModule", {
        value: !0
    })
}); /*! hotel-datepicker 4.4.1 - Copyright 2022 Benito Lopez (http://lopezb.com) - https://github.com/benitolopez/hotel-datepicker - MIT */
var HotelDatepicker = function() {
    "use strict";

    function e(t, i) {
        this._boundedEventHandlers = {}, this.id = e.getNewId(), i = i || {}, this.format = i.format || "YYYY-MM-DD", this.infoFormat = i.infoFormat || this.format, this.separator = i.separator || " - ", this.startOfWeek = i.startOfWeek || "sunday", this.startDate = i.startDate || new Date, this.endDate = i.endDate || !1, this.minNights = i.minNights || 1, this.maxNights = i.maxNights || 0, this.selectForward = i.selectForward || !1, this.disabledDates = i.disabledDates || [], this.noCheckInDates = i.noCheckInDates || [], this.noCheckOutDates = i.noCheckOutDates || [], this.disabledDaysOfWeek = i.disabledDaysOfWeek || [], this.noCheckInDaysOfWeek = i.noCheckInDaysOfWeek || [], this.noCheckOutDaysOfWeek = i.noCheckOutDaysOfWeek || [], this.enableCheckout = i.enableCheckout || !1, this.preventContainerClose = i.preventContainerClose || !1, this.container = i.container || "", this.animationSpeed = i.animationSpeed || ".5s", this.hoveringTooltip = i.hoveringTooltip || !0, this.autoClose = void 0 === i.autoClose || i.autoClose, this.showTopbar = void 0 === i.showTopbar || i.showTopbar, this.topbarPosition = "bottom" === i.topbarPosition ? "bottom" : "top", this.moveBothMonths = i.moveBothMonths || !1, this.inline = i.inline || !1, this.clearButton = Boolean(this.inline && i.clearButton), this.submitButton = Boolean(this.inline && i.submitButton), this.submitButtonName = this.submitButton && i.submitButtonName ? i.submitButtonName : "", this.i18n = i.i18n || {
            selected: "Your stay:",
            night: "Night",
            nights: "Nights",
            button: "Close",
            clearButton: "Clear",
            submitButton: "Submit",
            "checkin-disabled": "Check-in disabled",
            "checkout-disabled": "Check-out disabled",
            "day-names-short": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            "day-names": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            "month-names-short": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            "month-names": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            "error-more": "Date range should not be more than 1 night",
            "error-more-plural": "Date range should not be more than %d nights",
            "error-less": "Date range should not be less than 1 night",
            "error-less-plural": "Date range should not be less than %d nights",
            "info-more": "Please select a date range of at least 1 night",
            "info-more-plural": "Please select a date range of at least %d nights",
            "info-range": "Please select a date range between %d and %d nights",
            "info-range-equal": "Please select a date range of %d nights",
            "info-default": "Please select a date range"
        }, this.getValue = i.getValue || function() {
            return t.value
        }, this.setValue = i.setValue || function(e) {
            t.value = e
        }, this.onDayClick = void 0 !== i.onDayClick && i.onDayClick, this.onOpenDatepicker = void 0 !== i.onOpenDatepicker && i.onOpenDatepicker, this.onSelectRange = void 0 !== i.onSelectRange && i.onSelectRange, this.input = t, this.init()
    }
    var t = 0;
    return e.prototype.addBoundedListener = function(e, t, i, n) {
        e in this._boundedEventHandlers || (this._boundedEventHandlers[e] = {}), t in this._boundedEventHandlers[e] || (this._boundedEventHandlers[e][t] = []), i = i.bind(this), this._boundedEventHandlers[e][t].push([i, n]), e.addEventListener(t, i, n)
    }, e.prototype.removeAllBoundedListeners = function(e, t) {
        if (e in this._boundedEventHandlers) {
            var i = this._boundedEventHandlers[e];
            if (t in i)
                for (var n = i[t], s = n.length; s--;) {
                    var a = n[s];
                    e.removeEventListener(t, a[0], a[1])
                }
        }
    }, e.getNewId = function() {
        return ++t
    }, e.prototype.setFechaI18n = function() {
        fecha.setGlobalDateI18n({
            dayNamesShort: this.i18n["day-names-short"],
            dayNames: this.i18n["day-names"],
            monthNamesShort: this.i18n["month-names-short"],
            monthNames: this.i18n["month-names"]
        })
    }, e.prototype.getWeekDayNames = function() {
        var e = "";
        if ("monday" === this.startOfWeek)
            for (var t = 0; t < 7; t++) e += '<th class="datepicker__week-name">' + this.lang("day-names-short")[(1 + t) % 7] + "</th>";
        else
            for (var i = 0; i < 7; i++) e += '<th class="datepicker__week-name">' + this.lang("day-names-short")[i] + "</th>";
        return e
    }, e.prototype.getMonthDom = function(e) {
        return document.getElementById(this.getMonthTableId(e))
    }, e.prototype.getMonthName = function(e) {
        return this.lang("month-names")[e]
    }, e.prototype.getDatepickerId = function() {
        return "datepicker-" + this.generateId()
    }, e.prototype.getMonthTableId = function(e) {
        return "month-" + e + "-" + this.generateId()
    }, e.prototype.getCloseButtonId = function() {
        return "close-" + this.generateId()
    }, e.prototype.getClearButtonId = function() {
        return "clear-" + this.generateId()
    }, e.prototype.getSubmitButtonId = function() {
        return "submit-" + this.generateId()
    }, e.prototype.getTooltipId = function() {
        return "tooltip-" + this.generateId()
    }, e.prototype.getNextMonth = function(e) {
        return e = new Date(e.valueOf()), new Date(e.setMonth(e.getMonth() + 1, 1))
    }, e.prototype.getPrevMonth = function(e) {
        return e = new Date(e.valueOf()), new Date(e.setMonth(e.getMonth() - 1, 1))
    }, e.prototype.getDateString = function(e, t) {
        return void 0 === t && (t = this.format), this.setFechaI18n(), fecha.format(e, t)
    }, e.prototype.parseDate = function(e, t) {
        return void 0 === t && (t = this.format), this.setFechaI18n(), fecha.parse(e, t)
    }, e.prototype.init = function() {
        this.parent = this.container || this.input.parentElement, this.start = !1, this.end = !1, this.minDays = 1 < this.minNights ? this.minNights + 1 : 2, this.maxDays = 0 < this.maxNights ? this.maxNights + 1 : 0, this.startDate && "string" == typeof this.startDate && (this.startDate = this.parseDate(this.startDate)), this.endDate && "string" == typeof this.endDate && (this.endDate = this.parseDate(this.endDate)), this.isTouchDevice() && (this.hoveringTooltip = !1), this.isOpen = !1, this.changed = !1, this.createDom();
        var e = new Date;
        this.startDate && 0 > this.compareMonth(e, this.startDate) && (e = new Date(this.startDate.getTime())), this.endDate && 0 < this.compareMonth(this.getNextMonth(e), this.endDate) && (e = new Date(this.getPrevMonth(this.endDate.getTime()))), 0 < this.disabledDates.length && this.parseDisabledDates(), 0 < this.disabledDaysOfWeek.length && this.getDisabledDays(), this.showMonth(e, 1), this.showMonth(this.getNextMonth(e), 2), this.topBarDefaultText(), this.inline && (this.openDatepicker(), this.clearButton && (document.getElementById(this.getClearButtonId()).disabled = !0), this.submitButton && (document.getElementById(this.getSubmitButtonId()).disabled = !0)), this.addListeners(), this.isFirstDisabledDate = 0, this.lastDisabledDate = !1
    }, e.prototype.addListeners = function() {
        for (var e = this, t = this.datepicker.getElementsByClassName("datepicker__month-button--next"), i = 0; i < t.length; i++) t[i].addEventListener("click", function(t) {
            return e.goToNextMonth(t)
        });
        for (var n = this.datepicker.getElementsByClassName("datepicker__month-button--prev"), s = 0; s < n.length; s++) n[s].addEventListener("click", function(t) {
            return e.goToPreviousMonth(t)
        });
        this.addBoundedListener(this.input, "click", function(t) {
            return e.openDatepicker(t)
        }), this.showTopbar && !this.inline && document.getElementById(this.getCloseButtonId()).addEventListener("click", function(t) {
            return e.closeDatepicker(t)
        }), this.showTopbar && this.clearButton && document.getElementById(this.getClearButtonId()).addEventListener("click", function(t) {
            return e.clearDatepicker(t)
        }), window.addEventListener("resize", function(t) {
            return e.onResizeDatepicker(t)
        }), this.datepicker.addEventListener("mouseover", function(t) {
            return e.datepickerHover(t)
        }), this.datepicker.addEventListener("mouseout", function(t) {
            return e.datepickerMouseOut(t)
        }), this.addBoundedListener(this.input, "change", function() {
            return e.checkAndSetDefaultValue()
        })
    }, e.prototype.generateId = function() {
        return this.input.id || this.id
    }, e.prototype.createDom = function() {
        var e = this.createDatepickerDomString();
        this.parent.insertAdjacentHTML("beforeend", e), this.datepicker = document.getElementById(this.getDatepickerId())
    }, e.prototype.createDatepickerDomString = function() {
        var e = this.inline ? " datepicker--inline" : "",
            t = (this.showTopbar && "bottom" === this.topbarPosition && (e += " datepicker--topbar-bottom"), this.inline || (e += " datepicker--topbar-has-close-button"), this.clearButton && (e += " datepicker--topbar-has-clear-button"), this.submitButton && (e += " datepicker--topbar-has-submit-button"), this.inline ? "" : ' style="display:none"'),
            i = '<div id="' + this.getDatepickerId() + '"' + t + ' class="datepicker datepicker--closed' + e + '">',
            t = (i += '<div class="datepicker__inner">', "");
        this.showTopbar && (t += '<div class="datepicker__topbar"><div class="datepicker__info datepicker__info--selected"><span class="datepicker__info datepicker__info--selected-label">' + this.lang("selected") + ' </span> <strong class="datepicker__info-text datepicker__info-text--start-day">...</strong> <span class="datepicker__info-text datepicker__info--separator">' + this.separator + '</span> <strong class="datepicker__info-text datepicker__info-text--end-day">...</strong> <em class="datepicker__info-text datepicker__info-text--selected-days">(<span></span>)</em></div><div class="datepicker__info datepicker__info--feedback"></div>', this.inline || (t += '<button type="button" id="' + this.getCloseButtonId() + '" class="datepicker__close-button">' + this.lang("button") + "</button>"), (this.clearButton || this.submitButton) && (t += '<div class="datepicker__buttons">'), this.clearButton && (t += '<button type="button" id="' + this.getClearButtonId() + '" class="datepicker__clear-button">' + this.lang("clearButton") + "</button>"), this.submitButton && (t += '<input type="submit" id="' + this.getSubmitButtonId() + '" class="datepicker__submit-button" value="' + this.lang("submitButton") + '" name="' + this.submitButtonName + '">'), (this.clearButton || this.submitButton) && (t += "</div>"), t += "</div>"), this.showTopbar && "top" === this.topbarPosition && (i += t), i += '<div class="datepicker__months">';
        for (var n = 1; n <= 2; n++) i += '<table id="' + this.getMonthTableId(n) + '" class="datepicker__month datepicker__month--month' + n + '"><thead><tr class="datepicker__month-caption"><th><span class="datepicker__month-button datepicker__month-button--prev" month="' + n + '">&lt;</span></th><th colspan="5" class="datepicker__month-name"></th><th><span class="datepicker__month-button datepicker__month-button--next" month="' + n + '">&gt;</span></th></tr><tr class="datepicker__week-days">' + this.getWeekDayNames(n) + "</tr></thead><tbody></tbody></table>";
        return i += "</div>", this.showTopbar && "bottom" === this.topbarPosition && (i += t), i = (i += '<div style="display:none" id="' + this.getTooltipId() + '" class="datepicker__tooltip"></div>') + "</div></div>"
    }, e.prototype.showMonth = function(e, t) {
        e.setHours(0, 0, 0, 0);
        var i = this.getMonthName(e.getMonth()),
            n = this.getMonthDom(t),
            s = n.getElementsByClassName("datepicker__month-name")[0],
            n = n.getElementsByTagName("tbody")[0];
        s.textContent = i + " " + e.getFullYear(), this.emptyElement(n), n.insertAdjacentHTML("beforeend", this.createMonthDomString(e)), this.updateSelectableRange(), this["month" + t] = e
    }, e.prototype.createMonthDomString = function(e) {
        var t = [],
            i = "",
            n = (e.setDate(1), e.getDay()),
            s = e.getMonth();
        if (0 < (n = 0 === n && "monday" === this.startOfWeek ? 7 : n))
            for (var a = n; 0 < a; a--) {
                var r = new Date(e.getTime() - 864e5 * a),
                    o = this.isValidDate(r.getTime());
                (this.startDate && 0 > this.compareDay(r, this.startDate) || this.endDate && 0 < this.compareDay(r, this.endDate)) && (o = !1), t.push({
                    date: r,
                    type: "lastMonth",
                    day: r.getDate(),
                    time: r.getTime(),
                    valid: o
                })
            }
        for (var l = 0; l < 40; l++) {
            var d = this.addDays(e, l);
            o = this.isValidDate(d.getTime()), (this.startDate && 0 > this.compareDay(d, this.startDate) || this.endDate && 0 < this.compareDay(d, this.endDate)) && (o = !1), t.push({
                date: d,
                type: d.getMonth() === s ? "visibleMonth" : "nextMonth",
                day: d.getDate(),
                time: d.getTime(),
                valid: o
            })
        }
        for (var c = 0; c < 6 && "nextMonth" !== t[7 * c].type; c++) {
            i += '<tr class="datepicker__week-row">';
            for (var h = 0; h < 7; h++) {
                var u = t[7 * c + ("monday" === this.startOfWeek ? h + 1 : h)],
                    p = this.getDayClasses(u),
                    f = "",
                    p = (this.hasClass(u, "datepicker__month-day--no-checkin") && (f = this.i18n["checkin-disabled"]), this.hasClass(u, "datepicker__month-day--no-checkout") && (f && (f += ". "), f += this.i18n["checkout-disabled"]), {
                        daytype: u.type,
                        time: u.time,
                        class: p.join(" ")
                    });
                f && (p.title = f), i += '<td class="' + p.class + '" ' + this.printAttributes(p) + ">" + u.day + "</td>"
            }
            i += "</tr>"
        }
        return i
    }, e.prototype.openDatepicker = function() {
        var e = this;
        this.isOpen || (this.removeClass(this.datepicker, "datepicker--closed"), this.addClass(this.datepicker, "datepicker--open"), this.checkAndSetDefaultValue(), this.inline || this.slideDown(this.datepicker, this.animationSpeed), this.isOpen = !0, this.showSelectedDays(), this.disableNextPrevButtons(), this.addBoundedListener(document, "click", function(t) {
            return e.documentClick(t)
        }), this.onOpenDatepicker && this.onOpenDatepicker())
    }, e.prototype.closeDatepicker = function() {
        var e;
        this.isOpen && !this.inline && (this.removeClass(this.datepicker, "datepicker--open"), this.addClass(this.datepicker, "datepicker--closed"), this.slideUp(this.datepicker, this.animationSpeed), this.isOpen = !1, (e = document.createEvent("Event")).initEvent("afterClose", !0, !0), this.input.dispatchEvent(e), this.removeAllBoundedListeners(document, "click"))
    }, e.prototype.autoclose = function() {
        this.autoClose && this.changed && this.isOpen && this.start && this.end && !this.inline && this.closeDatepicker()
    }, e.prototype.documentClick = function(e) {
        this.parent.contains(e.target) || e.target === this.input ? "td" === e.target.tagName.toLowerCase() && this.dayClicked(e.target) : this.preventContainerClose || this.closeDatepicker()
    }, e.prototype.datepickerHover = function(e) {
        e.target.tagName && "td" === e.target.tagName.toLowerCase() && this.dayHovering(e.target)
    }, e.prototype.datepickerMouseOut = function(e) {
        e.target.tagName && "td" === e.target.tagName.toLowerCase() && (document.getElementById(this.getTooltipId()).style.display = "none")
    }, e.prototype.onResizeDatepicker = function() {
        this.checkAndSetDefaultValue(!0)
    }, e.prototype.getDayClasses = function(e) {
        var t, i, n, s = this.getDateString(e.time) === this.getDateString(new Date),
            a = this.getDateString(e.time) === this.getDateString(this.startDate),
            r = !1,
            o = !1,
            l = !1,
            d = !1,
            c = !1,
            h = !1;
        return !e.valid && "visibleMonth" !== e.type || (t = this.getDateString(e.time, "YYYY-MM-DD"), 0 < this.disabledDates.length && ((n = this.getClosestDisabledDates(e.date))[0] && n[1] && this.compareDay(e.date, n[0]) && 0 < this.countDays(n[0], n[1]) - 2 && (i = this.countDays(n[1], e.date) - 1, n = this.countDays(e.date, n[0]) - 1, (this.selectForward && i < this.minDays || !this.selectForward && i < this.minDays && n < this.minDays) && (e.valid = !1), !e.valid && this.enableCheckout && 2 == i && (h = !0)), -1 < this.disabledDates.indexOf(t) ? (r = (e.valid = !1, !0), this.isFirstDisabledDate++, this.lastDisabledDate = e.date) : this.isFirstDisabledDate = 0, e.valid && this.lastDisabledDate && 0 < this.compareDay(e.date, this.lastDisabledDate) && 2 === this.countDays(e.date, this.lastDisabledDate) && (c = !0)), 0 < this.disabledDaysOfWeek.length && -1 < this.disabledDaysOfWeek.indexOf(fecha.format(e.time, "dddd")) && (d = (e.valid = !1, !0)), 0 < this.noCheckInDates.length && -1 < this.noCheckInDates.indexOf(t) && (c = (o = !0, !1)), 0 < this.noCheckOutDates.length && -1 < this.noCheckOutDates.indexOf(t) && (l = !0), 0 < this.noCheckInDaysOfWeek.length && -1 < this.noCheckInDaysOfWeek.indexOf(fecha.format(e.time, "dddd")) && (c = (o = !0, !1)), 0 < this.noCheckOutDaysOfWeek.length && -1 < this.noCheckOutDaysOfWeek.indexOf(fecha.format(e.time, "dddd")) && (l = !0)), ["datepicker__month-day", "datepicker__month-day--" + e.type, "datepicker__month-day--" + (e.valid ? "valid" : "invalid"), s ? "datepicker__month-day--today" : "", r ? "datepicker__month-day--disabled" : "", r && this.enableCheckout && 1 === this.isFirstDisabledDate ? "datepicker__month-day--checkout-enabled" : "", h ? "datepicker__month-day--before-disabled-date" : "", a || c ? "datepicker__month-day--checkin-only" : "", o ? "datepicker__month-day--no-checkin" : "", l ? "datepicker__month-day--no-checkout" : "", d ? "datepicker__month-day--day-of-week-disabled" : ""]
    }, e.prototype.checkAndSetDayClasses = function() {
        for (var e = this.datepicker.getElementsByTagName("td"), t = 0; t < e.length; t++) {
            var i = parseInt(e[t].getAttribute("time"), 10),
                n = new Date(i),
                s = e[t].getAttribute("daytype"),
                a = void 0,
                a = this.isValidDate(n.getTime()),
                s = ((this.startDate && 0 > this.compareDay(n, this.startDate) || this.endDate && 0 < this.compareDay(n, this.endDate)) && (a = !1), {
                    date: n,
                    type: s,
                    day: n.getDate(),
                    time: i,
                    valid: a
                }),
                n = this.getDayClasses(s);
            e[t].className = n.join(" ")
        }
    }, e.prototype.checkAndSetDefaultValue = function(e) {
        void 0 === e && (e = !1);
        var t, i = this.getValue(),
            i = i ? i.split(this.separator) : "";
        i && 2 <= i.length ? (t = this.format, this.changed = !1, this.setDateRange(this.parseDate(i[0], t), this.parseDate(i[1], t), e), this.changed = !0) : this.showTopbar && (this.datepicker.getElementsByClassName("datepicker__info--selected")[0].style.display = "none", e && (i = new Date, this.startDate && 0 > this.compareMonth(i, this.startDate) && (i = new Date(this.startDate.getTime())), this.endDate && 0 < this.compareMonth(this.getNextMonth(i), this.endDate) && (i = new Date(this.getPrevMonth(this.endDate.getTime()))), this.start && !this.end && this.clearSelection(), this.showMonth(i, 1), this.showMonth(this.getNextMonth(i), 2)))
    }, e.prototype.setDateRange = function(e, t, i) {
        void 0 === i && (i = !1), e.getTime() > t.getTime() && (n = t, t = e, e = n, n = null);
        var n = !0;
        if (!(n = !(this.startDate && 0 > this.compareDay(e, this.startDate) || this.endDate && 0 < this.compareDay(t, this.endDate)) && n)) return this.showMonth(this.startDate, 1), this.showMonth(this.getNextMonth(this.startDate), 2), this.showSelectedDays(), void this.disableNextPrevButtons();
        e.setTime(e.getTime() + 432e5), t.setTime(t.getTime() + 432e5), this.start = e.getTime(), this.end = t.getTime(), 0 < this.compareDay(e, t) && 0 === this.compareMonth(e, t) && (t = this.getNextMonth(e)), 0 === this.compareMonth(e, t) && (t = this.getNextMonth(e)), this.showMonth(e, 1), this.showMonth(t, 2), this.showSelectedDays(), this.disableNextPrevButtons(), this.checkSelection(), this.showSelectedInfo(), i || this.autoclose()
    }, e.prototype.showSelectedDays = function() {
        if (this.start || this.end)
            for (var e = this.datepicker.getElementsByTagName("td"), t = 0; t < e.length; t++) {
                var i = parseInt(e[t].getAttribute("time"), 10);
                this.start && this.end && this.end >= i && this.start <= i || this.start && !this.end && this.getDateString(this.start, "YYYY-MM-DD") === this.getDateString(i, "YYYY-MM-DD") ? this.addClass(e[t], "datepicker__month-day--selected") : this.removeClass(e[t], "datepicker__month-day--selected"), this.start && this.getDateString(this.start, "YYYY-MM-DD") === this.getDateString(i, "YYYY-MM-DD") ? this.addClass(e[t], "datepicker__month-day--first-day-selected") : this.removeClass(e[t], "datepicker__month-day--first-day-selected"), this.end && this.getDateString(this.end, "YYYY-MM-DD") === this.getDateString(i, "YYYY-MM-DD") ? this.addClass(e[t], "datepicker__month-day--last-day-selected") : this.removeClass(e[t], "datepicker__month-day--last-day-selected")
            }
    }, e.prototype.showSelectedInfo = function() {
        var e, t, i, n, s, a, r;
        this.showTopbar ? (a = (s = this.datepicker.getElementsByClassName("datepicker__info--selected")[0]).getElementsByClassName("datepicker__info-text--start-day")[0], r = s.getElementsByClassName("datepicker__info-text--end-day")[0], e = s.getElementsByClassName("datepicker__info-text--selected-days")[0], t = document.getElementById(this.getCloseButtonId()), i = document.getElementById(this.getClearButtonId()), n = document.getElementById(this.getSubmitButtonId()), a.textContent = "...", r.textContent = "...", e.style.display = "none", this.start && (s.style.display = "", a.textContent = this.getDateString(new Date(parseInt(this.start, 10)), this.infoFormat), this.inline && this.clearButton && (i.disabled = !1)), this.end && (r.textContent = this.getDateString(new Date(parseInt(this.end, 10)), this.infoFormat)), this.start && this.end ? (a = 1 == (s = this.countDays(this.end, this.start) - 1) ? s + " " + this.lang("night") : s + " " + this.lang("nights"), r = this.getDateString(new Date(this.start)) + this.separator + this.getDateString(new Date(this.end)), e.style.display = "", e.firstElementChild.textContent = a, this.inline ? this.submitButton && (n.disabled = !1) : t.disabled = !1, this.setValue(r, this.getDateString(new Date(this.start)), this.getDateString(new Date(this.end))), this.changed = !0) : this.inline ? (!this.clearButton || this.start || this.end || (i.disabled = !0), this.submitButton && (n.disabled = !0)) : t.disabled = !0) : this.start && this.end && (s = this.getDateString(new Date(this.start)) + this.separator + this.getDateString(new Date(this.end)), this.setValue(s, this.getDateString(new Date(this.start)), this.getDateString(new Date(this.end))), this.changed = !0)
    }, e.prototype.dayClicked = function(e) {
        if (!this.hasClass(e, "datepicker__month-day--invalid")) {
            var t = this.start && this.end || !this.start && !this.end,
                i = parseInt(e.getAttribute("time"), 10);
            if (t) {
                if (this.hasClass(e, "datepicker__month-day--no-checkin")) return
            } else if (this.start) {
                if (this.start > i && this.hasClass(e, "datepicker__month-day--no-checkin")) return;
                var n = this.datepicker.querySelectorAll('td[time="' + this.start + '"]')[0];
                if (n && this.hasClass(n, "datepicker__month-day--no-checkout") && this.start > i || this.hasClass(e, "datepicker__month-day--no-checkout") && i > this.start) return
            }
            this.addClass(e, "datepicker__month-day--selected"), t ? (this.start = i, this.end = !1) : this.start && (this.end = i), this.start && this.end && this.start > this.end && (n = this.end, this.end = this.start, this.start = n), this.start = parseInt(this.start, 10), this.end = parseInt(this.end, 10), this.clearHovering(), this.start && !this.end && this.dayHovering(e), this.updateSelectableRange(), this.checkSelection(), this.showSelectedInfo(), this.start && this.end && this.checkAndSetDayClasses(), this.showSelectedDays(), this.autoclose(), this.onDayClick && this.onDayClick(), this.end && this.onSelectRange && this.onSelectRange()
        }
    }, e.prototype.isValidDate = function(e) {
        if (e = parseInt(e, 10), this.startDate && 0 > this.compareDay(e, this.startDate) || this.endDate && 0 < this.compareDay(e, this.endDate)) return !1;
        if (this.start && !this.end) {
            if (0 < this.maxDays && this.countDays(e, this.start) > this.maxDays || 0 < this.minDays && 1 < this.countDays(e, this.start) && this.countDays(e, this.start) < this.minDays || this.selectForward && e < this.start) return !1;
            if (0 < this.disabledDates.length) {
                var t = this.getClosestDisabledDates(new Date(parseInt(this.start, 10)));
                if (t[0] && 0 >= this.compareDay(e, t[0]) || t[1] && 0 <= this.compareDay(e, t[1])) return !1
            }
            if (0 < this.disabledDaysOfWeek.length && ((t = this.getClosestDisabledDays(new Date(parseInt(this.start, 10))))[0] && 0 >= this.compareDay(e, t[0]) || t[1] && 0 <= this.compareDay(e, t[1]))) return !1
        }
        return !0
    }, e.prototype.checkSelection = function() {
        var e = this.countDays(this.end, this.start),
            t = !!this.showTopbar && this.datepicker.getElementsByClassName("datepicker__info--feedback")[0];
        if (this.maxDays && e > this.maxDays) {
            this.start = !1, this.end = !1;
            for (var i = this.datepicker.getElementsByTagName("td"), n = 0; n < i.length; n++) this.removeClass(i[n], "datepicker__month-day--selected"), this.removeClass(i[n], "datepicker__month-day--first-day-selected"), this.removeClass(i[n], "datepicker__month-day--last-day-selected");
            this.showTopbar && (s = this.maxDays - 1, this.topBarErrorText(t, "error-more", s))
        } else if (this.minDays && e < this.minDays) {
            this.start = !1, this.end = !1;
            for (var s, a = this.datepicker.getElementsByTagName("td"), r = 0; r < a.length; r++) this.removeClass(a[r], "datepicker__month-day--selected"), this.removeClass(a[r], "datepicker__month-day--first-day-selected"), this.removeClass(a[r], "datepicker__month-day--last-day-selected");
            this.showTopbar && (s = this.minDays - 1, this.topBarErrorText(t, "error-less", s))
        } else this.start || this.end ? this.showTopbar && (this.removeClass(t, "datepicker__info--error"), this.removeClass(t, "datepicker__info--help")) : this.showTopbar && (this.removeClass(t, "datepicker__info--error"), this.addClass(t, "datepicker__info--help"))
    }, e.prototype.addDays = function(e, t) {
        return (e = new Date(e)).setDate(e.getDate() + t), e
    }, e.prototype.substractDays = function(e, t) {
        return (e = new Date(e)).setDate(e.getDate() - t), e
    }, e.prototype.countDays = function(e, t) {
        return Math.abs(this.daysFrom1970(e) - this.daysFrom1970(t)) + 1
    }, e.prototype.compareDay = function(e, t) {
        return 0 < (e = parseInt(this.getDateString(e, "YYYYMMDD"), 10) - parseInt(this.getDateString(t, "YYYYMMDD"), 10)) ? 1 : 0 == e ? 0 : -1
    }, e.prototype.compareMonth = function(e, t) {
        return 0 < (e = parseInt(this.getDateString(e, "YYYYMM"), 10) - parseInt(this.getDateString(t, "YYYYMM"), 10)) ? 1 : 0 == e ? 0 : -1
    }, e.prototype.daysFrom1970 = function(e) {
        return Math.round(this.toLocalTimestamp(e) / 864e5)
    }, e.prototype.toLocalTimestamp = function(e) {
        return "string" != typeof(e = "object" == typeof e && e.getTime ? e.getTime() : e) || e.match(/\d{13}/) || (e = this.parseDate(e).getTime()), e = parseInt(e, 10) - 60 * (new Date).getTimezoneOffset() * 1e3
    }, e.prototype.printAttributes = function(e) {
        var t, i = e,
            n = "";
        for (t in e) Object.prototype.hasOwnProperty.call(i, t) && (n += t + '="' + i[t] + '" ');
        return n
    }, e.prototype.goToNextMonth = function(e) {
        var e = e.target.getAttribute("month"),
            t = 1 < e,
            i = t ? this.month2 : this.month1,
            i = this.getNextMonth(i);
        !this.isSingleMonth() && !t && 0 <= this.compareMonth(i, this.month2) || this.isMonthOutOfRange(i) || (this.moveBothMonths && t && this.showMonth(this.month2, 1), this.showMonth(i, e), this.showSelectedDays(), this.disableNextPrevButtons())
    }, e.prototype.goToPreviousMonth = function(e) {
        var e = e.target.getAttribute("month"),
            t = 1 < e,
            i = t ? this.month2 : this.month1,
            i = this.getPrevMonth(i);
        t && 0 >= this.compareMonth(i, this.month1) || this.isMonthOutOfRange(i) || (this.moveBothMonths && !t && this.showMonth(this.month1, 2), this.showMonth(i, e), this.showSelectedDays(), this.disableNextPrevButtons())
    }, e.prototype.isSingleMonth = function() {
        return !this.isVisible(this.getMonthDom(2))
    }, e.prototype.isMonthOutOfRange = function(e) {
        return e = new Date(e.valueOf()), !!(this.startDate && new Date(e.getFullYear(), e.getMonth() + 1, 0, 23, 59, 59) < this.startDate || this.endDate && new Date(e.getFullYear(), e.getMonth(), 1) > this.endDate)
    }, e.prototype.disableNextPrevButtons = function() {
        var e, t, i;
        this.isSingleMonth() || (e = parseInt(this.getDateString(this.month1, "YYYYMM"), 10), t = parseInt(this.getDateString(this.month2, "YYYYMM"), 10), e = Math.abs(e - t), t = this.datepicker.getElementsByClassName("datepicker__month-button--next"), i = this.datepicker.getElementsByClassName("datepicker__month-button--prev"), 1 < e && 89 !== e ? (this.removeClass(t[0], "datepicker__month-button--disabled"), this.removeClass(i[1], "datepicker__month-button--disabled")) : (this.addClass(t[0], "datepicker__month-button--disabled"), this.addClass(i[1], "datepicker__month-button--disabled")), this.isMonthOutOfRange(this.getPrevMonth(this.month1)) ? this.addClass(i[0], "datepicker__month-button--disabled") : this.removeClass(i[0], "datepicker__month-button--disabled"), this.isMonthOutOfRange(this.getNextMonth(this.month2)) ? this.addClass(t[1], "datepicker__month-button--disabled") : this.removeClass(t[1], "datepicker__month-button--disabled"))
    }, e.prototype.topBarDefaultText = function() {
        var e, t;
        this.showTopbar && (e = "", e = this.minDays && this.maxDays ? this.minDays === this.maxDays ? this.lang("info-range-equal") : this.lang("info-range") : this.minDays && 2 < this.minDays ? this.lang("info-more-plural") : this.minDays ? this.lang("info-more") : this.lang("info-default"), t = this.datepicker.getElementsByClassName("datepicker__info--feedback")[0], e = e.replace(/%d/, this.minDays - 1).replace(/%d/, this.maxDays - 1), this.addClass(t, "datepicker__info--help"), this.removeClass(t, "datepicker__info--error"), t.textContent = e)
    }, e.prototype.topBarErrorText = function(e, t, i) {
        this.showTopbar && (this.addClass(e, "datepicker__info--error"), this.removeClass(e, "datepicker__info--help"), 1 < i ? (t = (t = this.lang(t + "-plural")).replace("%d", i), e.textContent = t) : t = this.lang(t), this.datepicker.getElementsByClassName("datepicker__info--selected")[0].style.display = "none")
    }, e.prototype.updateSelectableRange = function() {
        for (var e, t = this.datepicker.getElementsByTagName("td"), i = this.start && !this.end, n = 0; n < t.length; n++) this.hasClass(t[n], "datepicker__month-day--invalid") && this.hasClass(t[n], "datepicker__month-day--tmp") && (this.removeClass(t[n], "datepicker__month-day--tmp"), this.hasClass(t[n], "datepicker__month-day--tmpinvalid") ? this.removeClass(t[n], "datepicker__month-day--tmpinvalid") : (this.removeClass(t[n], "datepicker__month-day--invalid"), this.addClass(t[n], "datepicker__month-day--valid"))), i ? this.hasClass(t[n], "datepicker__month-day--visibleMonth") && (this.hasClass(t[n], "datepicker__month-day--valid") || this.hasClass(t[n], "datepicker__month-day--disabled") || this.hasClass(t[n], "datepicker__month-day--before-disabled-date")) && (e = parseInt(t[n].getAttribute("time"), 10), this.isValidDate(e) ? (this.addClass(t[n], "datepicker__month-day--valid"), this.addClass(t[n], "datepicker__month-day--tmp"), this.removeClass(t[n], "datepicker__month-day--invalid"), this.removeClass(t[n], "datepicker__month-day--disabled")) : (this.hasClass(t[n], "datepicker__month-day--invalid") && this.addClass(t[n], "datepicker__month-day--tmpinvalid"), this.addClass(t[n], "datepicker__month-day--invalid"), this.addClass(t[n], "datepicker__month-day--tmp"), this.removeClass(t[n], "datepicker__month-day--valid"))) : (this.hasClass(t[n], "datepicker__month-day--checkout-enabled") || this.hasClass(t[n], "datepicker__month-day--before-disabled-date")) && (this.addClass(t[n], "datepicker__month-day--invalid"), this.removeClass(t[n], "datepicker__month-day--valid"), this.hasClass(t[n], "datepicker__month-day--before-disabled-date") || this.addClass(t[n], "datepicker__month-day--disabled"));
        return !0
    }, e.prototype.dayHovering = function(e) {
        var t, i, n, s = parseInt(e.getAttribute("time"), 10),
            a = "";
        if (!this.hasClass(e, "datepicker__month-day--invalid")) {
            for (var r, o = this.datepicker.getElementsByTagName("td"), l = 0; l < o.length; l++) {
                var d = parseInt(o[l].getAttribute("time"), 10);
                d === s ? this.addClass(o[l], "datepicker__month-day--hovering") : this.removeClass(o[l], "datepicker__month-day--hovering"), this.start && !this.end && (this.start < d && d <= s || this.start > d && s <= d) ? this.addClass(o[l], "datepicker__month-day--hovering") : this.removeClass(o[l], "datepicker__month-day--hovering")
            }
            this.start && !this.end && (r = this.countDays(s, this.start) - 1, this.hoveringTooltip && ("function" == typeof this.hoveringTooltip ? a = this.hoveringTooltip(r, this.start, s) : !0 === this.hoveringTooltip && 0 < r && (a = r + " " + (1 == r ? this.lang("night") : this.lang("nights")))))
        }
        a ? (r = e.getBoundingClientRect(), e = this.datepicker.getBoundingClientRect(), t = r.left - e.left, i = r.top - e.top, t += r.width / 2, (n = document.getElementById(this.getTooltipId())).style.display = "", n.textContent = a, e = n.getBoundingClientRect().width, r = n.getBoundingClientRect().height, t -= e / 2, i -= r, setTimeout(function() {
            n.style.left = t + "px", n.style.top = i + "px"
        }, 10)) : document.getElementById(this.getTooltipId()).style.display = "none"
    }, e.prototype.clearHovering = function() {
        for (var e = this.datepicker.getElementsByTagName("td"), t = 0; t < e.length; t++) this.removeClass(e[t], "datepicker__month-day--hovering");
        document.getElementById(this.getTooltipId()).style.display = "none"
    }, e.prototype.clearSelection = function() {
        this.start = !1, this.end = !1;
        for (var e = this.datepicker.getElementsByTagName("td"), t = 0; t < e.length; t++) this.removeClass(e[t], "datepicker__month-day--selected"), this.removeClass(e[t], "datepicker__month-day--first-day-selected"), this.removeClass(e[t], "datepicker__month-day--last-day-selected"), this.removeClass(e[t], "datepicker__month-day--hovering");
        this.setValue(""), this.checkSelection(), this.showSelectedInfo(), this.showSelectedDays()
    }, e.prototype.clearDatepicker = function() {
        this.start = !1, this.end = !1;
        for (var e = this.datepicker.getElementsByTagName("td"), t = 0; t < e.length; t++) this.removeClass(e[t], "datepicker__month-day--selected"), this.removeClass(e[t], "datepicker__month-day--first-day-selected"), this.removeClass(e[t], "datepicker__month-day--last-day-selected"), this.removeClass(e[t], "datepicker__month-day--hovering");
        this.setValue(""), this.checkSelection(), this.showSelectedInfo(), this.datepicker.getElementsByClassName("datepicker__info--selected")[0].style.display = "none", this.showSelectedDays(), this.updateSelectableRange()
    }, e.prototype.parseDisabledDates = function() {
        var e = [];
        this.setFechaI18n();
        for (var t = 0; t < this.disabledDates.length; t++) e[t] = fecha.parse(this.disabledDates[t], "YYYY-MM-DD");
        e.sort(function(e, t) {
            return e - t
        }), this.disabledDatesTime = e
    }, e.prototype.getClosestDisabledDates = function(e) {
        var t = [!1, !1];
        if (e < this.disabledDatesTime[0]) t = this.enableCheckout ? [!1, this.addDays(this.disabledDatesTime[0], 1)] : [!1, this.disabledDatesTime[0]];
        else if (e > this.disabledDatesTime[this.disabledDatesTime.length - 1]) t = [this.disabledDatesTime[this.disabledDatesTime.length - 1], !1];
        else {
            for (var i, n = this.disabledDatesTime.length, s = this.disabledDatesTime.length, a = Math.abs(new Date(0, 0, 0).valueOf()), r = a, o = -a, l = 0; l < this.disabledDatesTime.length; ++l)(i = e - this.disabledDatesTime[l]) < 0 && o < i && (s = l, o = i), 0 < i && i < r && (n = l, r = i);
            this.disabledDatesTime[n] && (t[0] = this.disabledDatesTime[n]), void 0 === this.disabledDatesTime[n] ? t[1] = !1 : this.enableCheckout ? t[1] = this.addDays(this.disabledDatesTime[s], 1) : t[1] = this.disabledDatesTime[s]
        }
        return t
    }, e.prototype.getDisabledDays = function() {
        for (var e = [], t = [], i = new Date, n = 0; n < 7; n++) {
            var s = this.addDays(i, n);
            e[fecha.format(s, "d")] = fecha.format(s, "dddd")
        }
        for (var a = 0; a < this.disabledDaysOfWeek.length; a++) t.push(e.indexOf(this.disabledDaysOfWeek[a]));
        t.sort(), this.disabledDaysIndexes = t
    }, e.prototype.getClosestDisabledDays = function(e) {
        for (var t = [!1, !1], i = 0; i < 7; i++) {
            var n = this.substractDays(e, i);
            if (-1 < this.disabledDaysIndexes.indexOf(parseInt(fecha.format(n, "d"), 10))) {
                t[0] = n;
                break
            }
        }
        for (var s = 0; s < 7; s++) {
            var a = this.addDays(e, s);
            if (-1 < this.disabledDaysIndexes.indexOf(parseInt(fecha.format(a, "d"), 10))) {
                t[1] = a;
                break
            }
        }
        return t
    }, e.prototype.lang = function(e) {
        return e in this.i18n ? this.i18n[e] : ""
    }, e.prototype.emptyElement = function(e) {
        for (; e.firstChild;) e.removeChild(e.firstChild)
    }, e.prototype.classRegex = function(e) {
        return RegExp("(^|\\s+)" + e + "(\\s+|$)")
    }, e.prototype.hasClass = function(e, t) {
        return this.classRegex(t).test(e.className)
    }, e.prototype.addClass = function(e, t) {
        this.hasClass(e, t) || (e.className = e.className + " " + t)
    }, e.prototype.removeClass = function(e, t) {
        e.className = e.className.replace(this.classRegex(t), " ")
    }, e.prototype.isVisible = function(e) {
        return e.offsetWidth || e.offsetHeight || e.getClientRects().length
    }, e.prototype.slideDown = function(e, t) {
        e.style.display = "";
        var i = e.getBoundingClientRect().height;
        e.style.height = 0, this.recalc(e.offsetHeight), e.style.transition = "height " + t, e.style.height = i + "px", e.addEventListener("transitionend", function() {
            e.style.height = e.style.transition = e.style.display = ""
        })
    }, e.prototype.slideUp = function(e, t) {
        var i = e.getBoundingClientRect().height;
        e.style.height = i + "px", this.recalc(e.offsetHeight), e.style.transition = "height " + t, e.style.height = 0, e.addEventListener("transitionend", function() {
            e.style.display = "none"
        })
    }, e.prototype.recalc = function(e) {
        return e.offsetHeight
    }, e.prototype.isTouchDevice = function() {
        return "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch
    }, e.prototype.open = function() {
        this.openDatepicker()
    }, e.prototype.close = function() {
        this.closeDatepicker()
    }, e.prototype.getDatePicker = function() {
        return this.datepicker
    }, e.prototype.setRange = function(e, t) {
        "string" == typeof e && "string" == typeof t && (e = this.parseDate(e), t = this.parseDate(t)), this.setDateRange(e, t)
    }, e.prototype.clear = function() {
        this.clearSelection()
    }, e.prototype.getNights = function() {
        var e, t, i = 0;
        return this.start && this.end ? i = this.countDays(this.end, this.start) - 1 : (e = (e = this.getValue()) ? e.split(this.separator) : "") && 2 <= e.length && (t = this.format, i = this.countDays(this.parseDate(e[0], t), this.parseDate(e[1], t)) - 1), i
    }, e.prototype.destroy = function() {
        document.getElementById(this.getDatepickerId()) && (this.removeAllBoundedListeners(this.input, "click"), this.removeAllBoundedListeners(document, "click"), this.removeAllBoundedListeners(this.input, "change"), this.datepicker.parentNode.removeChild(this.datepicker))
    }, e
}();
"use strict";
/*!
 * imagesLoaded PACKAGED v4.1.4
 * JavaScript is all like "You images are done yet or what?"
 * MIT License
 */
! function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[e] = i[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], s = 0; s < i.length; s++) {
                var a = i[s];
                n && n[a] && (this.off(e, a), delete n[a]), a.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter")) : e.imagesLoaded = t(e, e.EvEmitter)
}("undefined" != typeof window ? window : this, function(e, t) {
    function i(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }

    function n(e, t, s) {
        if (!(this instanceof n)) return new n(e, t, s);
        var a, d = e;
        return "string" == typeof e && (d = document.querySelectorAll(e)), d ? (this.elements = (a = d, Array.isArray(a) ? a : "object" == typeof a && "number" == typeof a.length ? l.call(a) : [a]), this.options = i({}, this.options), "function" == typeof t ? s = t : i(this.options, t), s && this.on("always", s), this.getImages(), r && (this.jqDeferred = new r.Deferred), void setTimeout(this.check.bind(this))) : void o.error("Bad element for imagesLoaded " + (d || e))
    }

    function s(e) {
        this.img = e
    }

    function a(e, t) {
        this.url = e, this.element = t, this.img = new Image
    }
    var r = e.jQuery,
        o = e.console,
        l = Array.prototype.slice;
    n.prototype = Object.create(t.prototype), n.prototype.options = {}, n.prototype.getImages = function() {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, n.prototype.addElementImages = function(e) {
        "IMG" == e.nodeName && this.addImage(e), !0 === this.options.background && this.addElementBackgroundImages(e);
        var t = e.nodeType;
        if (t && d[t]) {
            for (var i = e.querySelectorAll("img"), n = 0; n < i.length; n++) {
                var s = i[n];
                this.addImage(s)
            }
            if ("string" == typeof this.options.background) {
                var a = e.querySelectorAll(this.options.background);
                for (n = 0; n < a.length; n++) {
                    var r = a[n];
                    this.addElementBackgroundImages(r)
                }
            }
        }
    };
    var d = {
        1: !0,
        9: !0,
        11: !0
    };
    return n.prototype.addElementBackgroundImages = function(e) {
        var t = getComputedStyle(e);
        if (t)
            for (var i = /url\((['"])?(.*?)\1\)/gi, n = i.exec(t.backgroundImage); null !== n;) {
                var s = n && n[2];
                s && this.addBackground(s, e), n = i.exec(t.backgroundImage)
            }
    }, n.prototype.addImage = function(e) {
        var t = new s(e);
        this.images.push(t)
    }, n.prototype.addBackground = function(e, t) {
        var i = new a(e, t);
        this.images.push(i)
    }, n.prototype.check = function() {
        function e(e, i, n) {
            setTimeout(function() {
                t.progress(e, i, n)
            })
        }
        var t = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function(t) {
            t.once("progress", e), t.check()
        }) : void this.complete()
    }, n.prototype.progress = function(e, t, i) {
        this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !e.isLoaded, this.emitEvent("progress", [this, e, t]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, e), this.progressedCount == this.images.length && this.complete(), this.options.debug && o && o.log("progress: " + i, e, t)
    }, n.prototype.complete = function() {
        var e = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(e, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var t = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[t](this)
        }
    }, s.prototype = Object.create(t.prototype), s.prototype.check = function() {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void(this.proxyImage.src = this.img.src))
    }, s.prototype.getIsImageComplete = function() {
        return this.img.complete && this.img.naturalWidth
    }, s.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.img, t])
    }, s.prototype.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, s.prototype.onload = function() {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, s.prototype.onerror = function() {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, s.prototype.unbindEvents = function() {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, a.prototype = Object.create(s.prototype), a.prototype.check = function() {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, a.prototype.unbindEvents = function() {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, a.prototype.confirm = function(e, t) {
        this.isLoaded = e, this.emitEvent("progress", [this, this.element, t])
    }, n.makeJQueryPlugin = function(t) {
        (t = t || e.jQuery) && ((r = t).fn.imagesLoaded = function(e, t) {
            return new n(this, e, t).jqDeferred.promise(r(this))
        })
    }, n.makeJQueryPlugin(), n
}),
function(e, t) {
    "object" == typeof exports && "object" == typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("kursor", [], t) : "object" == typeof exports ? exports.kursor = t() : e.kursor = t()
}("undefined" != typeof self ? self : this, function() {
    return function(e) {
        var t = {};

        function i(n) {
            if (t[n]) return t[n].exports;
            var s = t[n] = {
                i: n,
                l: !1,
                exports: {}
            };
            return e[n].call(s.exports, s, s.exports, i), s.l = !0, s.exports
        }
        return i.m = e, i.c = t, i.d = function(e, t, n) {
            i.o(e, t) || Object.defineProperty(e, t, {
                enumerable: !0,
                get: n
            })
        }, i.r = function(e) {
            "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                value: "Module"
            }), Object.defineProperty(e, "__esModule", {
                value: !0
            })
        }, i.t = function(e, t) {
            if (1 & t && (e = i(e)), 8 & t || 4 & t && "object" == typeof e && e && e.__esModule) return e;
            var n = Object.create(null);
            if (i.r(n), Object.defineProperty(n, "default", {
                    enumerable: !0,
                    value: e
                }), 2 & t && "string" != typeof e)
                for (var s in e) i.d(n, s, (function(t) {
                    return e[t]
                }).bind(null, s));
            return n
        }, i.n = function(e) {
            var t = e && e.__esModule ? function() {
                return e.default
            } : function() {
                return e
            };
            return i.d(t, "a", t), t
        }, i.o = function(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }, i.p = "/dist/", i(i.s = 0)
    }([function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.default = void 0, i(1);
        var n = i(2);

        function s(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }
        var a = 1,
            r = function() {
                var e, t, i;

                function r() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                    ! function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    }(this, r);
                    var t = {
                        type: 1,
                        ...e
                    };
                    this.props = t, this.key = 1 === a ? "" : a, a++, this.render(), this.hovers(), this.mousemove(), this.down()
                }
                return e = r, t = [{
                    key: "color",
                    value: function(e) {
                        (0, n.setColor)("color", e, this.kursor), (0, n.setColor)("color", e, this.kursorChild)
                    }
                }, {
                    key: "hidden",
                    value: function() {
                        !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0] ? (this.addClass("kursor--hidden"), this.addClass("kursorChild--hidden", !0)) : (this.removeClass("kursor--hidden"), this.removeClass("kursorChild--hidden", !0))
                    }
                }, {
                    key: "createWrapper",
                    value: function() {
                        var e = document.createElement("div");
                        e.setAttribute("id", "kursorWrapper"), document.querySelector(this.props.el).insertBefore(e, document.querySelector(this.props.el).firstChild)
                    }
                }, {
                    key: "render",
                    value: function() {
                        this.createCursor("kursorChild"), this.createCursor("kursor"), this.props.hasOwnProperty("removeDefaultCursor") && this.props.removeDefaultCursor && document.body.classList.add("notCursor"), this.props.hasOwnProperty("type") && this.addClass("kursor--".concat(this.props.type))
                    }
                }, {
                    key: "down",
                    value: function() {
                        var e = this;
                        document.addEventListener("mousedown", function(t) {
                            e.addClass("kursor--down")
                        }), document.addEventListener("mouseup", function(t) {
                            e.removeClass("kursor--down")
                        })
                    }
                }, {
                    key: "mousemove",
                    value: function() {
                        var e = this,
                            t = this.props.hasOwnProperty("el"),
                            i = window;
                        t && (i = document.querySelector(this.props.el)), i.addEventListener("mousemove", function(i) {
                            var n = document.querySelector(".kursor" + e.key),
                                s = document.querySelector(".kursorChild" + e.key);
                            if (t) {
                                var a = i.target !== document.querySelector(e.props.el),
                                    r = i.target.closest(e.props.el);
                                a ? (n = r.querySelector(".kursor" + e.key), s = r.querySelector(".kursorChild" + e.key)) : (n = i.target.querySelector(".kursor" + e.key), s = i.target.querySelector(".kursorChild" + e.key)), n.style.left = "".concat(a ? i.offsetX + i.target.offsetLeft : i.offsetX, "px"), n.style.top = "".concat(a ? i.offsetY + i.target.offsetTop : i.offsetY, "px"), s.style.left = "".concat(a ? i.offsetX + i.target.offsetLeft : i.offsetX, "px"), s.style.top = "".concat(a ? i.offsetY + i.target.offsetTop : i.offsetY, "px")
                            } else n.style.left = "".concat(i.x, "px"), n.style.top = "".concat(i.y, "px"), s.style.left = "".concat(i.x, "px"), s.style.top = "".concat(i.y, "px")
                        });
                        var n = document;
                        t && (n = document.querySelector(this.props.el)), n.addEventListener("mouseenter", function(t) {
                            e.removeClass("kursor--hidden"), e.removeClass("kursorChild--hidden", !0)
                        }), n.addEventListener("mouseleave", function(t) {
                            e.addClass("kursor--hidden"), e.addClass("kursorChild--hidden", !0)
                        })
                    }
                }, {
                    key: "hovers",
                    value: function() {
                        var e = this,
                            t = document.querySelectorAll(".k-hover" + this.key);
                        console.log(t), t.forEach(function(t) {
                            t.addEventListener("mouseenter", function() {
                                e.addClass("--hover")
                            }), t.addEventListener("mouseleave", function() {
                                e.removeClass("--hover")
                            })
                        })
                    }
                }, {
                    key: "createCursor",
                    value: function(e) {
                        this[e] = document.createElement("div"), this[e].setAttribute("class", e), this[e].classList.add(e + this.key), this[e].setAttribute("style", "--k-color: 0,0,0"), this.props.hasOwnProperty("el") ? (this[e].classList.add("".concat(e, "--hidden")), this[e].classList.add("kursor--absolute"), document.querySelector(this.props.el).insertBefore(this[e], document.querySelector(this.props.el).firstChild)) : document.body.insertBefore(this[e], document.body.firstChild), this.props.hasOwnProperty("color") && (0, n.setColor)("color", this.props.color, this[e])
                    }
                }, {
                    key: "addClass",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        document.querySelector(t ? ".kursorChild" + this.key : ".kursor" + this.key).classList.add(e)
                    }
                }, {
                    key: "removeClass",
                    value: function(e) {
                        var t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                        document.querySelector(t ? ".kursorChild" + this.key : ".kursor" + this.key).classList.remove(e)
                    }
                }, {
                    key: "name",
                    get: function() {
                        return this._name
                    }
                }], s(e.prototype, t), i && s(e, i), r
            }();
        t.default = r, e.exports = t.default
    }, function(e, t, i) {}, function(e, t, i) {
        "use strict";
        Object.defineProperty(t, "__esModule", {
            value: !0
        }), t.setColor = void 0;
        var n = function(e, t, i) {
            i ? i.style.setProperty("--k-".concat(e), t) : document.documentElement.style.setProperty("--k-".concat(e), t)
        };
        t.setColor = function(e, t, i) {
            var s, a = /^(rgb|rgba)/.test(t),
                r = /^(#)/.test(t);
            if (a) {
                var o = t.replace(/[rgba()]/g, "").split(",");
                n(e, s = "".concat(o[0], ",").concat(o[1], ",").concat(o[2]), i)
            } else if (r) {
                var l, d, c = (l = (l = t).replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i, function(e, t, i, n) {
                    return t + t + i + i + n + n
                }), (d = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(l)) ? {
                    r: parseInt(d[1], 16),
                    g: parseInt(d[2], 16),
                    b: parseInt(d[3], 16)
                } : null);
                n(e, s = "".concat(c.r, ",").concat(c.g, ",").concat(c.b), i)
            }
        }
    }])
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("jquery")) : e.jQueryBridget = t(e, e.jQuery)
}(window, function(e, t) {
    "use strict";

    function i(i, a, o) {
        (o = o || t || e.jQuery) && (a.prototype.option || (a.prototype.option = function(e) {
            o.isPlainObject(e) && (this.options = o.extend(!0, this.options, e))
        }), o.fn[i] = function(e) {
            if ("string" == typeof e) {
                var t, n, l, d, c, h = s.call(arguments, 1);
                return t = this, n = e, l = h, c = "$()." + i + '("' + n + '")', t.each(function(e, t) {
                    var s = o.data(t, i);
                    if (!s) return void r(i + " not initialized. Cannot call methods, i.e. " + c);
                    var a = s[n];
                    if (!a || "_" == n.charAt(0)) return void r(c + " is not a valid method");
                    var h = a.apply(s, l);
                    d = void 0 === d ? h : d
                }), void 0 !== d ? d : t
            }
            return function e(t, n) {
                t.each(function(e, t) {
                    var s = o.data(t, i);
                    s ? (s.option(n), s._init()) : (s = new a(t, n), o.data(t, i, s))
                })
            }(this, e), this
        }, n(o))
    }

    function n(e) {
        !e || e && e.bridget || (e.bridget = i)
    }
    var s = Array.prototype.slice,
        a = e.console,
        r = void 0 === a ? function() {} : function(e) {
            a.error(e)
        };
    return n(t || e.jQuery), i
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", t) : "object" == typeof module && module.exports ? module.exports = t() : e.EvEmitter = t()
}("undefined" != typeof window ? window : this, function() {
    function e() {}
    var t = e.prototype;
    return t.on = function(e, t) {
        if (e && t) {
            var i = this._events = this._events || {},
                n = i[e] = i[e] || [];
            return -1 == n.indexOf(t) && n.push(t), this
        }
    }, t.once = function(e, t) {
        if (e && t) {
            this.on(e, t);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[e] = i[e] || {})[t] = !0, this
        }
    }, t.off = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            var n = i.indexOf(t);
            return -1 != n && i.splice(n, 1), this
        }
    }, t.emitEvent = function(e, t) {
        var i = this._events && this._events[e];
        if (i && i.length) {
            i = i.slice(0), t = t || [];
            for (var n = this._onceEvents && this._onceEvents[e], s = 0; s < i.length; s++) {
                var a = i[s];
                n && n[a] && (this.off(e, a), delete n[a]), a.apply(this, t)
            }
            return this
        }
    }, t.allOff = function() {
        delete this._events, delete this._onceEvents
    }, e
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("get-size/get-size", t) : "object" == typeof module && module.exports ? module.exports = t() : e.getSize = t()
}(window, function() {
    "use strict";

    function e(e) {
        var t = parseFloat(e);
        return -1 == e.indexOf("%") && !isNaN(t) && t
    }

    function t(e) {
        var t = getComputedStyle(e);
        return t || s("Style returned " + t + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), t
    }

    function i(s) {
        if (function s() {
                if (!o) {
                    o = !0;
                    var a = document.createElement("div");
                    a.style.width = "200px", a.style.padding = "1px 2px 3px 4px", a.style.borderStyle = "solid", a.style.borderWidth = "1px 2px 3px 4px", a.style.boxSizing = "border-box";
                    var r = document.body || document.documentElement;
                    r.appendChild(a);
                    var l = t(a);
                    n = 200 == Math.round(e(l.width)), i.isBoxSizeOuter = n, r.removeChild(a)
                }
            }(), "string" == typeof s && (s = document.querySelector(s)), s && "object" == typeof s && s.nodeType) {
            var l = t(s);
            if ("none" == l.display) return function e() {
                for (var t = {
                        width: 0,
                        height: 0,
                        innerWidth: 0,
                        innerHeight: 0,
                        outerWidth: 0,
                        outerHeight: 0
                    }, i = 0; r > i; i++) t[a[i]] = 0;
                return t
            }();
            var d = {};
            d.width = s.offsetWidth, d.height = s.offsetHeight;
            for (var c = d.isBorderBox = "border-box" == l.boxSizing, h = 0; r > h; h++) {
                var u = a[h],
                    p = parseFloat(l[u]);
                d[u] = isNaN(p) ? 0 : p
            }
            var f = d.paddingLeft + d.paddingRight,
                m = d.paddingTop + d.paddingBottom,
                g = d.marginLeft + d.marginRight,
                v = d.marginTop + d.marginBottom,
                y = d.borderLeftWidth + d.borderRightWidth,
                $ = d.borderTopWidth + d.borderBottomWidth,
                b = c && n,
                w = e(l.width);
            !1 !== w && (d.width = w + (b ? 0 : f + y));
            var _ = e(l.height);
            return !1 !== _ && (d.height = _ + (b ? 0 : m + $)), d.innerWidth = d.width - (f + y), d.innerHeight = d.height - (m + $), d.outerWidth = d.width + g, d.outerHeight = d.height + v, d
        }
    }
    var n, s = "undefined" == typeof console ? function e() {} : function(e) {
            console.error(e)
        },
        a = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        r = a.length,
        o = !1;
    return i
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", t) : "object" == typeof module && module.exports ? module.exports = t() : e.matchesSelector = t()
}(window, function() {
    "use strict";
    var e = function() {
        var e = window.Element.prototype;
        if (e.matches) return "matches";
        if (e.matchesSelector) return "matchesSelector";
        for (var t = ["webkit", "moz", "ms", "o"], i = 0; i < t.length; i++) {
            var n = t[i] + "MatchesSelector";
            if (e[n]) return n
        }
    }();
    return function(t, i) {
        return t[e](i)
    }
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function(i) {
        return t(e, i)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("desandro-matches-selector")) : e.fizzyUIUtils = t(e, e.matchesSelector)
}(window, function(e, t) {
    var i = {};
    i.extend = function(e, t) {
        for (var i in t) e[i] = t[i];
        return e
    }, i.modulo = function(e, t) {
        return (e % t + t) % t
    };
    var n = Array.prototype.slice;
    i.makeArray = function(e) {
        return Array.isArray(e) ? e : null == e ? [] : "object" == typeof e && "number" == typeof e.length ? n.call(e) : [e]
    }, i.removeFrom = function(e, t) {
        var i = e.indexOf(t); - 1 != i && e.splice(i, 1)
    }, i.getParent = function(e, i) {
        for (; e.parentNode && e != document.body;)
            if (t(e = e.parentNode, i)) return e
    }, i.getQueryElement = function(e) {
        return "string" == typeof e ? document.querySelector(e) : e
    }, i.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, i.filterFindElements = function(e, n) {
        e = i.makeArray(e);
        var s = [];
        return e.forEach(function(e) {
            if (e instanceof HTMLElement) {
                if (!n) return void s.push(e);
                t(e, n) && s.push(e);
                for (var i = e.querySelectorAll(n), a = 0; a < i.length; a++) s.push(i[a])
            }
        }), s
    }, i.debounceMethod = function(e, t, i) {
        i = i || 100;
        var n = e.prototype[t],
            s = t + "Timeout";
        e.prototype[t] = function() {
            clearTimeout(this[s]);
            var e = arguments,
                t = this;
            this[s] = setTimeout(function() {
                n.apply(t, e), delete t[s]
            }, i)
        }
    }, i.docReady = function(e) {
        var t = document.readyState;
        "complete" == t || "interactive" == t ? setTimeout(e) : document.addEventListener("DOMContentLoaded", e)
    }, i.toDashed = function(e) {
        return e.replace(/(.)([A-Z])/g, function(e, t, i) {
            return t + "-" + i
        }).toLowerCase()
    };
    var s = e.console;
    return i.htmlInit = function(t, n) {
        i.docReady(function() {
            var a = i.toDashed(n),
                r = "data-" + a,
                o = document.querySelectorAll("[" + r + "]"),
                l = document.querySelectorAll(".js-" + a),
                d = i.makeArray(o).concat(i.makeArray(l)),
                c = r + "-options",
                h = e.jQuery;
            d.forEach(function(e) {
                var i, a = e.getAttribute(r) || e.getAttribute(c);
                try {
                    i = a && JSON.parse(a)
                } catch (o) {
                    return void(s && s.error("Error parsing " + r + " on " + e.className + ": " + o))
                }
                var l = new t(e, i);
                h && h.data(e, n, l)
            })
        })
    }, i
}),
function(e, t) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("ev-emitter"), require("get-size")) : (e.Outlayer = {}, e.Outlayer.Item = t(e.EvEmitter, e.getSize))
}(window, function(e, t) {
    "use strict";

    function i(e, t) {
        e && (this.element = e, this.layout = t, this.position = {
            x: 0,
            y: 0
        }, this._create())
    }
    var n, s = document.documentElement.style,
        a = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        r = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        o = {
            WebkitTransition: "webkitTransitionEnd",
            transition: "transitionend"
        } [a],
        l = {
            transform: r,
            transition: a,
            transitionDuration: a + "Duration",
            transitionProperty: a + "Property",
            transitionDelay: a + "Delay"
        },
        d = i.prototype = Object.create(e.prototype);
    d.constructor = i, d._create = function() {
        this._transn = {
            ingProperties: {},
            clean: {},
            onEnd: {}
        }, this.css({
            position: "absolute"
        })
    }, d.handleEvent = function(e) {
        var t = "on" + e.type;
        this[t] && this[t](e)
    }, d.getSize = function() {
        this.size = t(this.element)
    }, d.css = function(e) {
        var t = this.element.style;
        for (var i in e) t[l[i] || i] = e[i]
    }, d.getPosition = function() {
        var e = getComputedStyle(this.element),
            t = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"),
            n = e[t ? "left" : "right"],
            s = e[i ? "top" : "bottom"],
            a = parseFloat(n),
            r = parseFloat(s),
            o = this.layout.size; - 1 != n.indexOf("%") && (a = a / 100 * o.width), -1 != s.indexOf("%") && (r = r / 100 * o.height), a = isNaN(a) ? 0 : a, r = isNaN(r) ? 0 : r, a -= t ? o.paddingLeft : o.paddingRight, r -= i ? o.paddingTop : o.paddingBottom, this.position.x = a, this.position.y = r
    }, d.layoutPosition = function() {
        var e = this.layout.size,
            t = {},
            i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop"),
            s = i ? "left" : "right",
            a = i ? "right" : "left",
            r = this.position.x + e[i ? "paddingLeft" : "paddingRight"];
        t[s] = this.getXValue(r), t[a] = "";
        var o = n ? "top" : "bottom",
            l = n ? "bottom" : "top",
            d = this.position.y + e[n ? "paddingTop" : "paddingBottom"];
        t[o] = this.getYValue(d), t[l] = "", this.css(t), this.emitEvent("layout", [this])
    }, d.getXValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !t ? e / this.layout.size.width * 100 + "%" : e + "px"
    }, d.getYValue = function(e) {
        var t = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && t ? e / this.layout.size.height * 100 + "%" : e + "px"
    }, d._transitionTo = function(e, t) {
        this.getPosition();
        var i = this.position.x,
            n = this.position.y,
            s = e == this.position.x && t == this.position.y;
        if (this.setPosition(e, t), s && !this.isTransitioning) return void this.layoutPosition();
        var a = {};
        a.transform = this.getTranslate(e - i, t - n), this.transition({
            to: a,
            onTransitionEnd: {
                transform: this.layoutPosition
            },
            isCleaning: !0
        })
    }, d.getTranslate = function(e, t) {
        var i = this.layout._getOption("originLeft"),
            n = this.layout._getOption("originTop");
        return "translate3d(" + (e = i ? e : -e) + "px, " + (t = n ? t : -t) + "px, 0)"
    }, d.goTo = function(e, t) {
        this.setPosition(e, t), this.layoutPosition()
    }, d.moveTo = d._transitionTo, d.setPosition = function(e, t) {
        this.position.x = parseFloat(e), this.position.y = parseFloat(t)
    }, d._nonTransition = function(e) {
        for (var t in this.css(e.to), e.isCleaning && this._removeStyles(e.to), e.onTransitionEnd) e.onTransitionEnd[t].call(this)
    }, d.transition = function(e) {
        if (!parseFloat(this.layout.options.transitionDuration)) return void this._nonTransition(e);
        var t = this._transn;
        for (var i in e.onTransitionEnd) t.onEnd[i] = e.onTransitionEnd[i];
        for (i in e.to) t.ingProperties[i] = !0, e.isCleaning && (t.clean[i] = !0);
        if (e.from) {
            this.css(e.from);
            var n = this.element.offsetHeight;
            n = null
        }
        this.enableTransition(e.to), this.css(e.to), this.isTransitioning = !0
    };
    var c = "opacity," + (n = r).replace(/([A-Z])/g, function(e) {
        return "-" + e.toLowerCase()
    });
    d.enableTransition = function() {
        if (!this.isTransitioning) {
            var e = this.layout.options.transitionDuration;
            e = "number" == typeof e ? e + "ms" : e, this.css({
                transitionProperty: c,
                transitionDuration: e,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(o, this, !1)
        }
    }, d.onwebkitTransitionEnd = function(e) {
        this.ontransitionend(e)
    }, d.onotransitionend = function(e) {
        this.ontransitionend(e)
    };
    var h = {
        "-webkit-transform": "transform"
    };
    d.ontransitionend = function(e) {
        if (e.target === this.element) {
            var t = this._transn,
                i = h[e.propertyName] || e.propertyName;
            delete t.ingProperties[i],
                function e(t) {
                    for (var i in t) return !1;
                    return i = null, !0
                }(t.ingProperties) && this.disableTransition(), i in t.clean && (this.element.style[e.propertyName] = "", delete t.clean[i]), i in t.onEnd && (t.onEnd[i].call(this), delete t.onEnd[i]), this.emitEvent("transitionEnd", [this])
        }
    }, d.disableTransition = function() {
        this.removeTransitionStyles(), this.element.removeEventListener(o, this, !1), this.isTransitioning = !1
    }, d._removeStyles = function(e) {
        var t = {};
        for (var i in e) t[i] = "";
        this.css(t)
    };
    var u = {
        transitionProperty: "",
        transitionDuration: "",
        transitionDelay: ""
    };
    return d.removeTransitionStyles = function() {
        this.css(u)
    }, d.stagger = function(e) {
        e = isNaN(e) ? 0 : e, this.staggerDelay = e + "ms"
    }, d.removeElem = function() {
        this.element.parentNode.removeChild(this.element), this.css({
            display: ""
        }), this.emitEvent("remove", [this])
    }, d.remove = function() {
        return a && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function() {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, d.reveal = function() {
        delete this.isHidden, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: e.hiddenStyle,
            to: e.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, d.onRevealTransitionEnd = function() {
        this.isHidden || this.emitEvent("reveal")
    }, d.getHideRevealTransitionEndProperty = function(e) {
        var t = this.layout.options[e];
        if (t.opacity) return "opacity";
        for (var i in t) return i
    }, d.hide = function() {
        this.isHidden = !0, this.css({
            display: ""
        });
        var e = this.layout.options,
            t = {};
        t[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: e.visibleStyle,
            to: e.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: t
        })
    }, d.onHideTransitionEnd = function() {
        this.isHidden && (this.css({
            display: "none"
        }), this.emitEvent("hide"))
    }, d.destroy = function() {
        this.css({
            position: "",
            left: "",
            right: "",
            top: "",
            bottom: "",
            transition: "",
            transform: ""
        })
    }, i
}),
function(e, t) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function(i, n, s, a) {
        return t(e, i, n, s, a)
    }) : "object" == typeof module && module.exports ? module.exports = t(e, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : e.Outlayer = t(e, e.EvEmitter, e.getSize, e.fizzyUIUtils, e.Outlayer.Item)
}(window, function(e, t, i, n, s) {
    "use strict";

    function a(e, t) {
        var i = n.getQueryElement(e);
        if (!i) return void(o && o.error("Bad element for " + this.constructor.namespace + ": " + (i || e)));
        this.element = i, l && (this.$element = l(this.element)), this.options = n.extend({}, this.constructor.defaults), this.option(t);
        var s = ++c;
        this.element.outlayerGUID = s, h[s] = this, this._create(), this._getOption("initLayout") && this.layout()
    }

    function r(e) {
        function t() {
            e.apply(this, arguments)
        }
        return t.prototype = Object.create(e.prototype), t.prototype.constructor = t, t
    }
    var o = e.console,
        l = e.jQuery,
        d = function() {},
        c = 0,
        h = {};
    a.namespace = "outlayer", a.Item = s, a.defaults = {
        containerStyle: {
            position: "relative"
        },
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {
            opacity: 0,
            transform: "scale(0.001)"
        },
        visibleStyle: {
            opacity: 1,
            transform: "scale(1)"
        }
    };
    var u = a.prototype;
    n.extend(u, t.prototype), u.option = function(e) {
        n.extend(this.options, e)
    }, u._getOption = function(e) {
        var t = this.constructor.compatOptions[e];
        return t && void 0 !== this.options[t] ? this.options[t] : this.options[e]
    }, a.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, u._create = function() {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), n.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, u.reloadItems = function() {
        this.items = this._itemize(this.element.children)
    }, u._itemize = function(e) {
        for (var t = this._filterFindItemElements(e), i = this.constructor.Item, n = [], s = 0; s < t.length; s++) {
            var a = t[s],
                r = new i(a, this);
            n.push(r)
        }
        return n
    }, u._filterFindItemElements = function(e) {
        return n.filterFindElements(e, this.options.itemSelector)
    }, u.getItemElements = function() {
        return this.items.map(function(e) {
            return e.element
        })
    }, u.layout = function() {
        this._resetLayout(), this._manageStamps();
        var e = this._getOption("layoutInstant"),
            t = void 0 !== e ? e : !this._isLayoutInited;
        this.layoutItems(this.items, t), this._isLayoutInited = !0
    }, u._init = u.layout, u._resetLayout = function() {
        this.getSize()
    }, u.getSize = function() {
        this.size = i(this.element)
    }, u._getMeasurement = function(e, t) {
        var n, s = this.options[e];
        s ? ("string" == typeof s ? n = this.element.querySelector(s) : s instanceof HTMLElement && (n = s), this[e] = n ? i(n)[t] : s) : this[e] = 0
    }, u.layoutItems = function(e, t) {
        e = this._getItemsForLayout(e), this._layoutItems(e, t), this._postLayout()
    }, u._getItemsForLayout = function(e) {
        return e.filter(function(e) {
            return !e.isIgnored
        })
    }, u._layoutItems = function(e, t) {
        if (this._emitCompleteOnItems("layout", e), e && e.length) {
            var i = [];
            e.forEach(function(e) {
                var n = this._getItemLayoutPosition(e);
                n.item = e, n.isInstant = t || e.isLayoutInstant, i.push(n)
            }, this), this._processLayoutQueue(i)
        }
    }, u._getItemLayoutPosition = function() {
        return {
            x: 0,
            y: 0
        }
    }, u._processLayoutQueue = function(e) {
        this.updateStagger(), e.forEach(function(e, t) {
            this._positionItem(e.item, e.x, e.y, e.isInstant, t)
        }, this)
    }, u.updateStagger = function() {
        var e = this.options.stagger;
        return null == e ? void(this.stagger = 0) : (this.stagger = function e(t) {
            if ("number" == typeof t) return t;
            var i = t.match(/(^\d*\.?\d*)(\w*)/),
                n = i && i[1],
                s = i && i[2];
            return n.length ? (n = parseFloat(n)) * (p[s] || 1) : 0
        }(e), this.stagger)
    }, u._positionItem = function(e, t, i, n, s) {
        n ? e.goTo(t, i) : (e.stagger(s * this.stagger), e.moveTo(t, i))
    }, u._postLayout = function() {
        this.resizeContainer()
    }, u.resizeContainer = function() {
        if (this._getOption("resizeContainer")) {
            var e = this._getContainerSize();
            e && (this._setContainerMeasure(e.width, !0), this._setContainerMeasure(e.height, !1))
        }
    }, u._getContainerSize = d, u._setContainerMeasure = function(e, t) {
        if (void 0 !== e) {
            var i = this.size;
            i.isBorderBox && (e += t ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), e = Math.max(e, 0), this.element.style[t ? "width" : "height"] = e + "px"
        }
    }, u._emitCompleteOnItems = function(e, t) {
        function i() {
            s.dispatchEvent(e + "Complete", null, [t])
        }

        function n() {
            ++r == a && i()
        }
        var s = this,
            a = t.length;
        if (!t || !a) return void i();
        var r = 0;
        t.forEach(function(t) {
            t.once(e, n)
        })
    }, u.dispatchEvent = function(e, t, i) {
        var n = t ? [t].concat(i) : i;
        if (this.emitEvent(e, n), l) {
            if (this.$element = this.$element || l(this.element), t) {
                var s = l.Event(t);
                s.type = e, this.$element.trigger(s, i)
            } else this.$element.trigger(e, i)
        }
    }, u.ignore = function(e) {
        var t = this.getItem(e);
        t && (t.isIgnored = !0)
    }, u.unignore = function(e) {
        var t = this.getItem(e);
        t && delete t.isIgnored
    }, u.stamp = function(e) {
        (e = this._find(e)) && (this.stamps = this.stamps.concat(e), e.forEach(this.ignore, this))
    }, u.unstamp = function(e) {
        (e = this._find(e)) && e.forEach(function(e) {
            n.removeFrom(this.stamps, e), this.unignore(e)
        }, this)
    }, u._find = function(e) {
        return e ? ("string" == typeof e && (e = this.element.querySelectorAll(e)), e = n.makeArray(e)) : void 0
    }, u._manageStamps = function() {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, u._getBoundingRect = function() {
        var e = this.element.getBoundingClientRect(),
            t = this.size;
        this._boundingRect = {
            left: e.left + t.paddingLeft + t.borderLeftWidth,
            top: e.top + t.paddingTop + t.borderTopWidth,
            right: e.right - (t.paddingRight + t.borderRightWidth),
            bottom: e.bottom - (t.paddingBottom + t.borderBottomWidth)
        }
    }, u._manageStamp = d, u._getElementOffset = function(e) {
        var t = e.getBoundingClientRect(),
            n = this._boundingRect,
            s = i(e);
        return {
            left: t.left - n.left - s.marginLeft,
            top: t.top - n.top - s.marginTop,
            right: n.right - t.right - s.marginRight,
            bottom: n.bottom - t.bottom - s.marginBottom
        }
    }, u.handleEvent = n.handleEvent, u.bindResize = function() {
        e.addEventListener("resize", this), this.isResizeBound = !0
    }, u.unbindResize = function() {
        e.removeEventListener("resize", this), this.isResizeBound = !1
    }, u.onresize = function() {
        this.resize()
    }, n.debounceMethod(a, "onresize", 100), u.resize = function() {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, u.needsResizeLayout = function() {
        var e = i(this.element);
        return this.size && e && e.innerWidth !== this.size.innerWidth
    }, u.addItems = function(e) {
        var t = this._itemize(e);
        return t.length && (this.items = this.items.concat(t)), t
    }, u.appended = function(e) {
        var t = this.addItems(e);
        t.length && (this.layoutItems(t, !0), this.reveal(t))
    }, u.prepended = function(e) {
        var t = this._itemize(e);
        if (t.length) {
            var i = this.items.slice(0);
            this.items = t.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(t, !0), this.reveal(t), this.layoutItems(i)
        }
    }, u.reveal = function(e) {
        if (this._emitCompleteOnItems("reveal", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach(function(e, i) {
                e.stagger(i * t), e.reveal()
            })
        }
    }, u.hide = function(e) {
        if (this._emitCompleteOnItems("hide", e), e && e.length) {
            var t = this.updateStagger();
            e.forEach(function(e, i) {
                e.stagger(i * t), e.hide()
            })
        }
    }, u.revealItemElements = function(e) {
        var t = this.getItems(e);
        this.reveal(t)
    }, u.hideItemElements = function(e) {
        var t = this.getItems(e);
        this.hide(t)
    }, u.getItem = function(e) {
        for (var t = 0; t < this.items.length; t++) {
            var i = this.items[t];
            if (i.element == e) return i
        }
    }, u.getItems = function(e) {
        e = n.makeArray(e);
        var t = [];
        return e.forEach(function(e) {
            var i = this.getItem(e);
            i && t.push(i)
        }, this), t
    }, u.remove = function(e) {
        var t = this.getItems(e);
        this._emitCompleteOnItems("remove", t), t && t.length && t.forEach(function(e) {
            e.remove(), n.removeFrom(this.items, e)
        }, this)
    }, u.destroy = function() {
        var e = this.element.style;
        e.height = "", e.position = "", e.width = "", this.items.forEach(function(e) {
            e.destroy()
        }), this.unbindResize(), delete h[this.element.outlayerGUID], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, a.data = function(e) {
        var t = (e = n.getQueryElement(e)) && e.outlayerGUID;
        return t && h[t]
    }, a.create = function(e, t) {
        var i = r(a);
        return i.defaults = n.extend({}, a.defaults), n.extend(i.defaults, t), i.compatOptions = n.extend({}, a.compatOptions), i.namespace = e, i.data = a.data, i.Item = r(s), n.htmlInit(i, e), l && l.bridget && l.bridget(e, i), i
    };
    var p = {
        ms: 1,
        s: 1e3
    };
    return a.Item = s, a
}),
function(e, t) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size"], t) : "object" == typeof module && module.exports ? module.exports = t(require("outlayer"), require("get-size")) : e.Masonry = t(e.Outlayer, e.getSize)
}(window, function(e, t) {
    var i = e.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var n = i.prototype;
    return n._resetLayout = function() {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var e = 0; e < this.cols; e++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, n.measureColumns = function() {
        if (this.getContainerWidth(), !this.columnWidth) {
            var e = this.items[0],
                i = e && e.element;
            this.columnWidth = i && t(i).outerWidth || this.containerWidth
        }
        var n = this.columnWidth += this.gutter,
            s = this.containerWidth + this.gutter,
            a = s / n,
            r = n - s % n;
        a = Math[r && 1 > r ? "round" : "floor"](a), this.cols = Math.max(a, 1)
    }, n.getContainerWidth = function() {
        var e = t(this._getOption("fitWidth") ? this.element.parentNode : this.element);
        this.containerWidth = e && e.innerWidth
    }, n._getItemLayoutPosition = function(e) {
        e.getSize();
        var t = e.size.outerWidth % this.columnWidth,
            i = Math[t && 1 > t ? "round" : "ceil"](e.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var n = this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition", s = this[n](i, e), a = {
                x: this.columnWidth * s.col,
                y: s.y
            }, r = s.y + e.size.outerHeight, o = i + s.col, l = s.col; o > l; l++) this.colYs[l] = r;
        return a
    }, n._getTopColPosition = function(e) {
        var t = this._getTopColGroup(e),
            i = Math.min.apply(Math, t);
        return {
            col: t.indexOf(i),
            y: i
        }
    }, n._getTopColGroup = function(e) {
        if (2 > e) return this.colYs;
        for (var t = [], i = this.cols + 1 - e, n = 0; i > n; n++) t[n] = this._getColGroupY(n, e);
        return t
    }, n._getColGroupY = function(e, t) {
        if (2 > t) return this.colYs[e];
        var i = this.colYs.slice(e, e + t);
        return Math.max.apply(Math, i)
    }, n._getHorizontalColPosition = function(e, t) {
        var i = this.horizontalColIndex % this.cols;
        i = e > 1 && i + e > this.cols ? 0 : i;
        var n = t.size.outerWidth && t.size.outerHeight;
        return this.horizontalColIndex = n ? i + e : this.horizontalColIndex, {
            col: i,
            y: this._getColGroupY(i, e)
        }
    }, n._manageStamp = function(e) {
        var i = t(e),
            n = this._getElementOffset(e),
            s = this._getOption("originLeft") ? n.left : n.right,
            a = s + i.outerWidth,
            r = Math.floor(s / this.columnWidth);
        r = Math.max(0, r);
        var o = Math.floor(a / this.columnWidth);
        o -= a % this.columnWidth ? 0 : 1, o = Math.min(this.cols - 1, o);
        for (var l = this._getOption("originTop"), d = (l ? n.top : n.bottom) + i.outerHeight, c = r; o >= c; c++) this.colYs[c] = Math.max(d, this.colYs[c])
    }, n._getContainerSize = function() {
        this.maxY = Math.max.apply(Math, this.colYs);
        var e = {
            height: this.maxY
        };
        return this._getOption("fitWidth") && (e.width = this._getContainerFitWidth()), e
    }, n._getContainerFitWidth = function() {
        for (var e = 0, t = this.cols; --t && 0 === this.colYs[t];) e++;
        return (this.cols - e) * this.columnWidth - this.gutter
    }, n.needsResizeLayout = function() {
        var e = this.containerWidth;
        return this.getContainerWidth(), e != this.containerWidth
    }, i
}), "object" == typeof navigator && function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define("Plyr", t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Plyr = t()
    }(this, function() {
        "use strict";

        function e(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        function t(e, t) {
            for (var i = 0; i < t.length; i++) {
                var n = t[i];
                n.enumerable = n.enumerable || !1, n.configurable = !0, "value" in n && (n.writable = !0), Object.defineProperty(e, n.key, n)
            }
        }

        function i(e, t, i) {
            return t in e ? Object.defineProperty(e, t, {
                value: i,
                enumerable: !0,
                configurable: !0,
                writable: !0
            }) : e[t] = i, e
        }

        function n(e, t) {
            var i = Object.keys(e);
            if (Object.getOwnPropertySymbols) {
                var n = Object.getOwnPropertySymbols(e);
                t && (n = n.filter(function(t) {
                    return Object.getOwnPropertyDescriptor(e, t).enumerable
                })), i.push.apply(i, n)
            }
            return i
        }

        function s(e) {
            for (var t = 1; t < arguments.length; t++) {
                var s = null != arguments[t] ? arguments[t] : {};
                t % 2 ? n(Object(s), !0).forEach(function(t) {
                    i(e, t, s[t])
                }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(s)) : n(Object(s)).forEach(function(t) {
                    Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(s, t))
                })
            }
            return e
        }
        var a, r, o, l = {
                addCSS: !0,
                thumbWidth: 15,
                watch: !0
            },
            d = function(e) {
                return null != e ? e.constructor : null
            },
            c = function(e, t) {
                return !!(e && t && e instanceof t)
            },
            h = function(e) {
                return d(e) === String
            },
            u = function(e) {
                return Array.isArray(e)
            },
            p = function(e) {
                return c(e, NodeList)
            },
            f = h,
            m = u,
            g = p,
            v = function(e) {
                return c(e, Element)
            },
            y = function(e) {
                return c(e, Event)
            },
            $ = function(e) {
                var t, i;
                return null == (t = e) || (h(e) || u(e) || p(e)) && !e.length || d(i = e) === Object && !Object.keys(e).length
            },
            b = function() {
                var e, i, n;

                function a(e, t) {
                    (function(e, t) {
                        if (!(e instanceof t)) throw TypeError("Cannot call a class as a function")
                    })(this, a), v(e) ? this.element = e : f(e) && (this.element = document.querySelector(e)), v(this.element) && $(this.element.rangeTouch) && (this.config = s({}, l, {}, t), this.init())
                }
                return e = a, i = [{
                    key: "init",
                    value: function() {
                        a.enabled && (this.config.addCSS && (this.element.style.userSelect = "none", this.element.style.webKitUserSelect = "none", this.element.style.touchAction = "manipulation"), this.listeners(!0), this.element.rangeTouch = this)
                    }
                }, {
                    key: "destroy",
                    value: function() {
                        a.enabled && (this.config.addCSS && (this.element.style.userSelect = "", this.element.style.webKitUserSelect = "", this.element.style.touchAction = ""), this.listeners(!1), this.element.rangeTouch = null)
                    }
                }, {
                    key: "listeners",
                    value: function(e) {
                        var t = this,
                            i = e ? "addEventListener" : "removeEventListener";
                        ["touchstart", "touchmove", "touchend"].forEach(function(e) {
                            t.element[i](e, function(e) {
                                return t.set(e)
                            }, !1)
                        })
                    }
                }, {
                    key: "get",
                    value: function(e) {
                        if (!a.enabled || !y(e)) return null;
                        var t, i = e.target,
                            n = e.changedTouches[0],
                            s = parseFloat(i.getAttribute("min")) || 0,
                            r = parseFloat(i.getAttribute("max")) || 100,
                            o = parseFloat(i.getAttribute("step")) || 1,
                            l = i.getBoundingClientRect(),
                            d = 100 / l.width * (this.config.thumbWidth / 2) / 100;
                        return 0 > (t = 100 / l.width * (n.clientX - l.left)) ? t = 0 : 100 < t && (t = 100), 50 > t ? t -= (100 - 2 * t) * d : 50 < t && (t += 2 * (t - 50) * d), s + function e(t, i) {
                            if (1 > i) {
                                var n, s, a = (n = i, (s = "".concat(n).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/)) ? Math.max(0, (s[1] ? s[1].length : 0) - (s[2] ? +s[2] : 0)) : 0);
                                return parseFloat(t.toFixed(a))
                            }
                            return Math.round(t / i) * i
                        }(t / 100 * (r - s), o)
                    }
                }, {
                    key: "set",
                    value: function(e) {
                        a.enabled && y(e) && !e.target.disabled && (e.preventDefault(), e.target.value = this.get(e), function(e, t) {
                            if (e && t) {
                                var i = new Event(t, {
                                    bubbles: !0
                                });
                                e.dispatchEvent(i)
                            }
                        }(e.target, "touchend" === e.type ? "change" : "input"))
                    }
                }], n = [{
                    key: "setup",
                    value: function(e) {
                        var t = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {},
                            i = null;
                        if ($(e) || f(e) ? i = Array.from(document.querySelectorAll(f(e) ? e : 'input[type="range"]')) : v(e) ? i = [e] : g(e) ? i = Array.from(e) : m(e) && (i = e.filter(v)), $(i)) return null;
                        var n = s({}, l, {}, t);
                        return f(e) && n.watch && new MutationObserver(function(t) {
                            Array.from(t).forEach(function(t) {
                                Array.from(t.addedNodes).forEach(function(t) {
                                    var i, s;
                                    v(t) && (i = t, (function() {
                                        return Array.from(document.querySelectorAll(s)).includes(this)
                                    }).call(i, s = e)) && new a(t, n)
                                })
                            })
                        }).observe(document.body, {
                            childList: !0,
                            subtree: !0
                        }), i.map(function(e) {
                            return new a(e, t)
                        })
                    }
                }, {
                    key: "enabled",
                    get: function() {
                        return "ontouchstart" in document.documentElement
                    }
                }], i && t(e.prototype, i), n && t(e, n), a
            }();
        let w = e => null != e ? e.constructor : null,
            _ = (e, t) => Boolean(e && t && e instanceof t),
            C = e => null == e,
            x = e => w(e) === Object,
            k = e => w(e) === String,
            T = e => w(e) === Function,
            E = e => Array.isArray(e),
            S = e => _(e, NodeList),
            D = e => C(e) || (k(e) || E(e) || S(e)) && !e.length || x(e) && !Object.keys(e).length;
        var M = C,
            A = x,
            P = e => w(e) === Number && !Number.isNaN(e),
            L = k,
            I = e => w(e) === Boolean,
            O = T,
            N = E,
            z = S,
            H = e => null !== e && "object" == typeof e && 1 === e.nodeType && "object" == typeof e.style && "object" == typeof e.ownerDocument,
            Y = e => _(e, Event),
            B = e => _(e, KeyboardEvent),
            q = e => _(e, TextTrack) || !C(e) && k(e.kind),
            W = e => _(e, Promise) && T(e.then),
            F = e => {
                if (_(e, window.URL)) return !0;
                if (!k(e)) return !1;
                let t = e;
                e.startsWith("http://") && e.startsWith("https://") || (t = `http://${e}`);
                try {
                    return !D(new URL(t).hostname)
                } catch (i) {
                    return !1
                }
            },
            R = D;
        let j = (() => {
            let e = document.createElement("span"),
                t = {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd otransitionend",
                    transition: "transitionend"
                },
                i = Object.keys(t).find(t => void 0 !== e.style[t]);
            return !!L(i) && t[i]
        })();

        function V(e, t) {
            setTimeout(() => {
                try {
                    e.hidden = !0, e.offsetHeight, e.hidden = !1
                } catch (t) {}
            }, t)
        }
        let X = {
            isIE: Boolean(window.document.documentMode),
            isEdge: window.navigator.userAgent.includes("Edge"),
            isWebkit: "WebkitAppearance" in document.documentElement.style && !/Edge/.test(navigator.userAgent),
            isIPhone: /(iPhone|iPod)/gi.test(navigator.platform),
            isIos: "MacIntel" === navigator.platform && navigator.maxTouchPoints > 1 || /(iPad|iPhone|iPod)/gi.test(navigator.platform)
        };

        function G(e, t) {
            return t.split(".").reduce((e, t) => e && e[t], e)
        }

        function U(e = {}, ...t) {
            if (!t.length) return e;
            let i = t.shift();
            return A(i) ? (Object.keys(i).forEach(t => {
                A(i[t]) ? (Object.keys(e).includes(t) || Object.assign(e, {
                    [t]: {}
                }), U(e[t], i[t])) : Object.assign(e, {
                    [t]: i[t]
                })
            }), U(e, ...t)) : e
        }

        function K(e, t) {
            let i = e.length ? e : [e];
            Array.from(i).reverse().forEach((e, i) => {
                let n = i > 0 ? t.cloneNode(!0) : t,
                    s = e.parentNode,
                    a = e.nextSibling;
                n.appendChild(e), a ? s.insertBefore(n, a) : s.appendChild(n)
            })
        }

        function Q(e, t) {
            H(e) && !R(t) && Object.entries(t).filter(([, e]) => !M(e)).forEach(([t, i]) => e.setAttribute(t, i))
        }

        function Z(e, t, i) {
            let n = document.createElement(e);
            return A(t) && Q(n, t), L(i) && (n.innerText = i), n
        }

        function J(e, t, i, n) {
            H(t) && t.appendChild(Z(e, i, n))
        }

        function ee(e) {
            z(e) || N(e) ? Array.from(e).forEach(ee) : H(e) && H(e.parentNode) && e.parentNode.removeChild(e)
        }

        function et(e) {
            if (!H(e)) return;
            let {
                length: t
            } = e.childNodes;
            for (; t > 0;) e.removeChild(e.lastChild), t -= 1
        }

        function ei(e, t) {
            return H(t) && H(t.parentNode) && H(e) ? (t.parentNode.replaceChild(e, t), e) : null
        }

        function en(e, t) {
            if (!L(e) || R(e)) return {};
            let i = {},
                n = U({}, t);
            return e.split(",").forEach(e => {
                let t = e.trim(),
                    s = t.replace(".", ""),
                    a = t.replace(/[[\]]/g, "").split("="),
                    [r] = a,
                    o = a.length > 1 ? a[1].replace(/["']/g, "") : "";
                switch (t.charAt(0)) {
                    case ".":
                        L(n.class) ? i.class = `${n.class} ${s}` : i.class = s;
                        break;
                    case "#":
                        i.id = t.replace("#", "");
                        break;
                    case "[":
                        i[r] = o
                }
            }), U(n, i)
        }

        function es(e, t) {
            if (!H(e)) return;
            let i = t;
            I(i) || (i = !e.hidden), e.hidden = i
        }

        function ea(e, t, i) {
            if (z(e)) return Array.from(e).map(e => ea(e, t, i));
            if (H(e)) {
                let n = "toggle";
                return void 0 !== i && (n = i ? "add" : "remove"), e.classList[n](t), e.classList.contains(t)
            }
            return !1
        }

        function er(e, t) {
            return H(e) && e.classList.contains(t)
        }

        function eo(e, t) {
            let {
                prototype: i
            } = Element;
            return (i.matches || i.webkitMatchesSelector || i.mozMatchesSelector || i.msMatchesSelector || function() {
                return Array.from(document.querySelectorAll(t)).includes(this)
            }).call(e, t)
        }

        function el(e) {
            return this.elements.container.querySelectorAll(e)
        }

        function ed(e) {
            return this.elements.container.querySelector(e)
        }

        function ec(e = null, t = !1) {
            H(e) && (e.focus({
                preventScroll: !0
            }), t && ea(e, this.config.classNames.tabFocus))
        }
        let eh = {
                "audio/ogg": "vorbis",
                "audio/wav": "1",
                "video/webm": "vp8, vorbis",
                "video/mp4": "avc1.42E01E, mp4a.40.2",
                "video/ogg": "theora"
            },
            eu = {
                audio: "canPlayType" in document.createElement("audio"),
                video: "canPlayType" in document.createElement("video"),
                check(e, t, i) {
                    let n = X.isIPhone && i && eu.playsinline,
                        s = eu[e] || "html5" !== t;
                    return {
                        api: s,
                        ui: s && eu.rangeInput && ("video" !== e || !X.isIPhone || n)
                    }
                },
                pip: !(X.isIPhone || !O(Z("video").webkitSetPresentationMode) && (!document.pictureInPictureEnabled || Z("video").disablePictureInPicture)),
                airplay: O(window.WebKitPlaybackTargetAvailabilityEvent),
                playsinline: "playsInline" in document.createElement("video"),
                mime(e) {
                    if (R(e)) return !1;
                    let [t] = e.split("/"), i = e;
                    if (!this.isHTML5 || t !== this.type) return !1;
                    Object.keys(eh).includes(i) && (i += `; codecs="${eh[e]}"`);
                    try {
                        return Boolean(i && this.media.canPlayType(i).replace(/no/, ""))
                    } catch (n) {
                        return !1
                    }
                },
                textTracks: "textTracks" in document.createElement("video"),
                rangeInput: (() => {
                    let e = document.createElement("input");
                    return e.type = "range", "range" === e.type
                })(),
                touch: "ontouchstart" in document.documentElement,
                transitions: !1 !== j,
                reducedMotion: "matchMedia" in window && window.matchMedia("(prefers-reduced-motion)").matches
            },
            ep = (() => {
                let e = !1;
                try {
                    let t = Object.defineProperty({}, "passive", {
                        get: () => (e = !0, null)
                    });
                    window.addEventListener("test", null, t), window.removeEventListener("test", null, t)
                } catch (i) {}
                return e
            })();

        function ef(e, t, i, n = !1, s = !0, a = !1) {
            if (!e || !("addEventListener" in e) || R(t) || !O(i)) return;
            let r = t.split(" "),
                o = a;
            ep && (o = {
                passive: s,
                capture: a
            }), r.forEach(t => {
                this && this.eventListeners && n && this.eventListeners.push({
                    element: e,
                    type: t,
                    callback: i,
                    options: o
                }), e[n ? "addEventListener" : "removeEventListener"](t, i, o)
            })
        }

        function em(e, t = "", i, n = !0, s = !1) {
            ef.call(this, e, t, i, !0, n, s)
        }

        function eg(e, t = "", i, n = !0, s = !1) {
            ef.call(this, e, t, i, !1, n, s)
        }

        function ev(e, t = "", i, n = !0, s = !1) {
            let a = (...r) => {
                eg(e, t, a, n, s), i.apply(this, r)
            };
            ef.call(this, e, t, a, !0, n, s)
        }

        function ey(e, t = "", i = !1, n = {}) {
            if (!H(e) || R(t)) return;
            let s = new CustomEvent(t, {
                bubbles: i,
                detail: {
                    ...n,
                    plyr: this
                }
            });
            e.dispatchEvent(s)
        }

        function e$() {
            this && this.eventListeners && (this.eventListeners.forEach(e => {
                let {
                    element: t,
                    type: i,
                    callback: n,
                    options: s
                } = e;
                t.removeEventListener(i, n, s)
            }), this.eventListeners = [])
        }

        function eb() {
            return new Promise(e => this.ready ? setTimeout(e, 0) : em.call(this, this.elements.container, "ready", e)).then(() => {})
        }

        function ew(e) {
            W(e) && e.then(null, () => {})
        }

        function e_(e) {
            return N(e) ? e.filter((t, i) => e.indexOf(t) === i) : e
        }

        function eC(e, t) {
            return N(e) && e.length ? e.reduce((e, i) => Math.abs(i - t) < Math.abs(e - t) ? i : e) : null
        }

        function e8(e) {
            return !(!window || !window.CSS) && window.CSS.supports(e)
        }
        let ex = [
            [1, 1],
            [4, 3],
            [3, 4],
            [5, 4],
            [4, 5],
            [3, 2],
            [2, 3],
            [16, 10],
            [10, 16],
            [16, 9],
            [9, 16],
            [21, 9],
            [9, 21],
            [32, 9],
            [9, 32]
        ].reduce((e, [t, i]) => ({
            ...e,
            [t / i]: [t, i]
        }), {});

        function ek(e) {
            return !!(N(e) || L(e) && e.includes(":")) && (N(e) ? e : e.split(":")).map(Number).every(P)
        }

        function eT(e) {
            if (!N(e) || !e.every(P)) return null;
            let [t, i] = e, n = (e, t) => 0 === t ? e : n(t, e % t), s = n(t, i);
            return [t / s, i / s]
        }

        function eE(e) {
            let t = e => ek(e) ? e.split(":").map(Number) : null,
                i = t(e);
            if (null === i && (i = t(this.config.ratio)), null === i && !R(this.embed) && N(this.embed.ratio) && ({
                    ratio: i
                } = this.embed), null === i && this.isHTML5) {
                let {
                    videoWidth: n,
                    videoHeight: s
                } = this.media;
                i = [n, s]
            }
            return eT(i)
        }

        function eS(e) {
            if (!this.isVideo) return {};
            let {
                wrapper: t
            } = this.elements, i = eE.call(this, e);
            if (!N(i)) return {};
            let [n, s] = eT(i), a = 100 / n * s;
            if (e8(`aspect-ratio: ${n}/${s}`) ? t.style.aspectRatio = `${n}/${s}` : t.style.paddingBottom = `${a}%`, this.isVimeo && !this.config.vimeo.premium && this.supported.ui) {
                let r = 100 / this.media.offsetWidth * parseInt(window.getComputedStyle(this.media).paddingBottom, 10);
                this.fullscreen.active ? t.style.paddingBottom = null : this.media.style.transform = `translateY(-${(r-a)/(r/50)}%)`
            } else this.isHTML5 && t.classList.add(this.config.classNames.videoFixedRatio);
            return {
                padding: a,
                ratio: i
            }
        }

        function eD(e, t, i = .05) {
            let n = e / t,
                s = eC(Object.keys(ex), n);
            return Math.abs(s - n) <= i ? ex[s] : [e, t]
        }
        let eM = {
            getSources() {
                return this.isHTML5 ? Array.from(this.media.querySelectorAll("source")).filter(e => {
                    let t = e.getAttribute("type");
                    return !!R(t) || eu.mime.call(this, t)
                }) : []
            },
            getQualityOptions() {
                return this.config.quality.forced ? this.config.quality.options : eM.getSources.call(this).map(e => Number(e.getAttribute("size"))).filter(Boolean)
            },
            setup() {
                if (!this.isHTML5) return;
                let e = this;
                e.options.speed = e.config.speed.options, R(this.config.ratio) || eS.call(e), Object.defineProperty(e.media, "quality", {
                    get() {
                        let t = eM.getSources.call(e).find(t => t.getAttribute("src") === e.source);
                        return t && Number(t.getAttribute("size"))
                    },
                    set(t) {
                        if (e.quality !== t) {
                            if (e.config.quality.forced && O(e.config.quality.onChange)) e.config.quality.onChange(t);
                            else {
                                let i = eM.getSources.call(e).find(e => Number(e.getAttribute("size")) === t);
                                if (!i) return;
                                let {
                                    currentTime: n,
                                    paused: s,
                                    preload: a,
                                    readyState: r,
                                    playbackRate: o
                                } = e.media;
                                e.media.src = i.getAttribute("src"), ("none" !== a || r) && (e.once("loadedmetadata", () => {
                                    e.speed = o, e.currentTime = n, s || ew(e.play())
                                }), e.media.load())
                            }
                            ey.call(e, e.media, "qualitychange", !1, {
                                quality: t
                            })
                        }
                    }
                })
            },
            cancelRequests() {
                this.isHTML5 && (ee(eM.getSources.call(this)), this.media.setAttribute("src", this.config.blankVideo), this.media.load(), this.debug.log("Cancelled network requests"))
            }
        };

        function eA(e, ...t) {
            return R(e) ? e : e.toString().replace(/{(\d+)}/g, (e, i) => t[i].toString())
        }
        let eP = (e = "", t = "", i = "") => e.replace(RegExp(t.toString().replace(/([.*+?^=!:${}()|[\]/\\])/g, "\\$1"), "g"), i.toString()),
            eL = (e = "") => e.toString().replace(/\w\S*/g, e => e.charAt(0).toUpperCase() + e.substr(1).toLowerCase());

        function eI(e) {
            let t = document.createElement("div");
            return t.appendChild(e), t.innerHTML
        }
        let e9 = {
                pip: "PIP",
                airplay: "AirPlay",
                html5: "HTML5",
                vimeo: "Vimeo",
                youtube: "YouTube"
            },
            eO = {
                get(e = "", t = {}) {
                    if (R(e) || R(t)) return "";
                    let i = G(t.i18n, e);
                    if (R(i)) return Object.keys(e9).includes(e) ? e9[e] : "";
                    let n = {
                        "{seektime}": t.seekTime,
                        "{title}": t.title
                    };
                    return Object.entries(n).forEach(([e, t]) => {
                        i = eP(i, e, t)
                    }), i
                }
            };
        class eN {
            constructor(t) {
                e(this, "get", e => {
                    if (!eN.supported || !this.enabled) return null;
                    let t = window.localStorage.getItem(this.key);
                    if (R(t)) return null;
                    let i = JSON.parse(t);
                    return L(e) && e.length ? i[e] : i
                }), e(this, "set", e => {
                    if (!eN.supported || !this.enabled || !A(e)) return;
                    let t = this.get();
                    R(t) && (t = {}), U(t, e);
                    try {
                        window.localStorage.setItem(this.key, JSON.stringify(t))
                    } catch (i) {}
                }), this.enabled = t.config.storage.enabled, this.key = t.config.storage.key
            }
            static get supported() {
                try {
                    if (!("localStorage" in window)) return !1;
                    let e = "___test";
                    return window.localStorage.setItem(e, e), window.localStorage.removeItem(e), !0
                } catch (t) {
                    return !1
                }
            }
        }

        function ez(e, t = "text") {
            return new Promise((i, n) => {
                try {
                    let s = new XMLHttpRequest;
                    if (!("withCredentials" in s)) return;
                    s.addEventListener("load", () => {
                        if ("text" === t) try {
                            i(JSON.parse(s.responseText))
                        } catch (e) {
                            i(s.responseText)
                        } else i(s.response)
                    }), s.addEventListener("error", () => {
                        throw Error(s.status)
                    }), s.open("GET", e, !0), s.responseType = t, s.send()
                } catch (a) {
                    n(a)
                }
            })
        }

        function e0(e, t) {
            if (!L(e)) return;
            let i = L(t),
                n = !1,
                s = () => null !== document.getElementById(t),
                a = (e, t) => {
                    e.innerHTML = t, i && s() || document.body.insertAdjacentElement("afterbegin", e)
                };
            if (!i || !s()) {
                let r = eN.supported,
                    o = document.createElement("div");
                if (o.setAttribute("hidden", ""), i && o.setAttribute("id", t), r) {
                    let l = window.localStorage.getItem(`cache-${t}`);
                    if (n = null !== l) {
                        let d = JSON.parse(l);
                        a(o, d.content)
                    }
                }
                ez(e).then(e => {
                    if (!R(e)) {
                        if (r) try {
                            window.localStorage.setItem(`cache-${t}`, JSON.stringify({
                                content: e
                            }))
                        } catch (i) {}
                        a(o, e)
                    }
                }).catch(() => {})
            }
        }
        let eH = e => Math.trunc(e / 60 / 60 % 60, 10);

        function eY(e = 0, t = !1, i = !1) {
            var n, s;
            if (!P(e)) return eY(void 0, t, i);
            let a = e => `0${e}`.slice(-2),
                r = eH(e),
                o = Math.trunc((n = e) / 60 % 60, 10),
                l = Math.trunc(e % 60, 10);
            return `${i&&e>0?"-":""}${r=t||r>0?`${r}:`:""}${a(o)}:${a(l)}`
        }
        let eB = {
            getIconUrl() {
                let e = new URL(this.config.iconUrl, window.location),
                    t = window.location.host ? window.location.host : window.top.location.host,
                    i = e.host !== t || X.isIE && !window.svg4everybody;
                return {
                    url: this.config.iconUrl,
                    cors: i
                }
            },
            findElements() {
                try {
                    return this.elements.controls = ed.call(this, this.config.selectors.controls.wrapper), this.elements.buttons = {
                        play: el.call(this, this.config.selectors.buttons.play),
                        pause: ed.call(this, this.config.selectors.buttons.pause),
                        restart: ed.call(this, this.config.selectors.buttons.restart),
                        rewind: ed.call(this, this.config.selectors.buttons.rewind),
                        fastForward: ed.call(this, this.config.selectors.buttons.fastForward),
                        mute: ed.call(this, this.config.selectors.buttons.mute),
                        pip: ed.call(this, this.config.selectors.buttons.pip),
                        airplay: ed.call(this, this.config.selectors.buttons.airplay),
                        settings: ed.call(this, this.config.selectors.buttons.settings),
                        captions: ed.call(this, this.config.selectors.buttons.captions),
                        fullscreen: ed.call(this, this.config.selectors.buttons.fullscreen)
                    }, this.elements.progress = ed.call(this, this.config.selectors.progress), this.elements.inputs = {
                        seek: ed.call(this, this.config.selectors.inputs.seek),
                        volume: ed.call(this, this.config.selectors.inputs.volume)
                    }, this.elements.display = {
                        buffer: ed.call(this, this.config.selectors.display.buffer),
                        currentTime: ed.call(this, this.config.selectors.display.currentTime),
                        duration: ed.call(this, this.config.selectors.display.duration)
                    }, H(this.elements.progress) && (this.elements.display.seekTooltip = this.elements.progress.querySelector(`.${this.config.classNames.tooltip}`)), !0
                } catch (e) {
                    return this.debug.warn("It looks like there is a problem with your custom controls HTML", e), this.toggleNativeControls(!0), !1
                }
            },
            createIcon(e, t) {
                let i = "http://www.w3.org/2000/svg",
                    n = eB.getIconUrl.call(this),
                    s = `${n.cors?"":n.url}#${this.config.iconPrefix}`,
                    a = document.createElementNS(i, "svg");
                Q(a, U(t, {
                    "aria-hidden": "true",
                    focusable: "false"
                }));
                let r = document.createElementNS(i, "use"),
                    o = `${s}-${e}`;
                return "href" in r && r.setAttributeNS("http://www.w3.org/1999/xlink", "href", o), r.setAttributeNS("http://www.w3.org/1999/xlink", "xlink:href", o), a.appendChild(r), a
            },
            createLabel(e, t = {}) {
                let i = eO.get(e, this.config);
                return Z("span", {
                    ...t,
                    class: [t.class, this.config.classNames.hidden].filter(Boolean).join(" ")
                }, i)
            },
            createBadge(e) {
                if (R(e)) return null;
                let t = Z("span", {
                    class: this.config.classNames.menu.value
                });
                return t.appendChild(Z("span", {
                    class: this.config.classNames.menu.badge
                }, e)), t
            },
            createButton(e, t) {
                let i = U({}, t),
                    n = function e(t = "") {
                        let i = t.toString();
                        return (i = function(e = "") {
                            let t = e.toString();
                            return t = eP(t, "-", " "), t = eP(t, "_", " "), t = eL(t), eP(t, " ", "")
                        }(i)).charAt(0).toLowerCase() + i.slice(1)
                    }(e),
                    s = {
                        element: "button",
                        toggle: !1,
                        label: null,
                        icon: null,
                        labelPressed: null,
                        iconPressed: null
                    };
                switch (["element", "icon", "label"].forEach(e => {
                        Object.keys(i).includes(e) && (s[e] = i[e], delete i[e])
                    }), "button" !== s.element || Object.keys(i).includes("type") || (i.type = "button"), Object.keys(i).includes("class") ? i.class.split(" ").some(e => e === this.config.classNames.control) || U(i, {
                        class: `${i.class} ${this.config.classNames.control}`
                    }) : i.class = this.config.classNames.control, e) {
                    case "play":
                        s.toggle = !0, s.label = "play", s.labelPressed = "pause", s.icon = "play", s.iconPressed = "pause";
                        break;
                    case "mute":
                        s.toggle = !0, s.label = "mute", s.labelPressed = "unmute", s.icon = "volume", s.iconPressed = "muted";
                        break;
                    case "captions":
                        s.toggle = !0, s.label = "enableCaptions", s.labelPressed = "disableCaptions", s.icon = "captions-off", s.iconPressed = "captions-on";
                        break;
                    case "fullscreen":
                        s.toggle = !0, s.label = "enterFullscreen", s.labelPressed = "exitFullscreen", s.icon = "enter-fullscreen", s.iconPressed = "exit-fullscreen";
                        break;
                    case "play-large":
                        i.class += ` ${this.config.classNames.control}--overlaid`, n = "play", s.label = "play", s.icon = "play";
                        break;
                    default:
                        R(s.label) && (s.label = n), R(s.icon) && (s.icon = e)
                }
                let a = Z(s.element);
                return s.toggle ? (a.appendChild(eB.createIcon.call(this, s.iconPressed, {
                    class: "icon--pressed"
                })), a.appendChild(eB.createIcon.call(this, s.icon, {
                    class: "icon--not-pressed"
                })), a.appendChild(eB.createLabel.call(this, s.labelPressed, {
                    class: "label--pressed"
                })), a.appendChild(eB.createLabel.call(this, s.label, {
                    class: "label--not-pressed"
                }))) : (a.appendChild(eB.createIcon.call(this, s.icon)), a.appendChild(eB.createLabel.call(this, s.label))), U(i, en(this.config.selectors.buttons[n], i)), Q(a, i), "play" === n ? (N(this.elements.buttons[n]) || (this.elements.buttons[n] = []), this.elements.buttons[n].push(a)) : this.elements.buttons[n] = a, a
            },
            createRange(e, t) {
                let i = Z("input", U(en(this.config.selectors.inputs[e]), {
                    type: "range",
                    min: 0,
                    max: 100,
                    step: .01,
                    value: 0,
                    autocomplete: "off",
                    role: "slider",
                    "aria-label": eO.get(e, this.config),
                    "aria-valuemin": 0,
                    "aria-valuemax": 100,
                    "aria-valuenow": 0
                }, t));
                return this.elements.inputs[e] = i, eB.updateRangeFill.call(this, i), b.setup(i), i
            },
            createProgress(e, t) {
                let i = Z("progress", U(en(this.config.selectors.display[e]), {
                    min: 0,
                    max: 100,
                    value: 0,
                    role: "progressbar",
                    "aria-hidden": !0
                }, t));
                if ("volume" !== e) {
                    i.appendChild(Z("span", null, "0"));
                    let n = {
                            played: "played",
                            buffer: "buffered"
                        } [e],
                        s = n ? eO.get(n, this.config) : "";
                    i.innerText = `% ${s.toLowerCase()}`
                }
                return this.elements.display[e] = i, i
            },
            createTime(e, t) {
                let i = en(this.config.selectors.display[e], t),
                    n = Z("div", U(i, {
                        class: `${i.class?i.class:""} ${this.config.classNames.display.time} `.trim(),
                        "aria-label": eO.get(e, this.config)
                    }), "00:00");
                return this.elements.display[e] = n, n
            },
            bindMenuItemShortcuts(e, t) {
                em.call(this, e, "keydown keyup", i => {
                    if (![32, 38, 39, 40].includes(i.which) || (i.preventDefault(), i.stopPropagation(), "keydown" === i.type)) return;
                    let n = eo(e, '[role="menuitemradio"]');
                    if (!n && [32, 39].includes(i.which)) eB.showMenuPanel.call(this, t, !0);
                    else {
                        let s;
                        32 !== i.which && (40 === i.which || n && 39 === i.which ? H(s = e.nextElementSibling) || (s = e.parentNode.firstElementChild) : H(s = e.previousElementSibling) || (s = e.parentNode.lastElementChild), ec.call(this, s, !0))
                    }
                }, !1), em.call(this, e, "keyup", e => {
                    13 === e.which && eB.focusFirstMenuItem.call(this, null, !0)
                })
            },
            createMenuItem({
                value: e,
                list: t,
                type: i,
                title: n,
                badge: s = null,
                checked: a = !1
            }) {
                let r = en(this.config.selectors.inputs[i]),
                    o = Z("button", U(r, {
                        type: "button",
                        role: "menuitemradio",
                        class: `${this.config.classNames.control} ${r.class?r.class:""}`.trim(),
                        "aria-checked": a,
                        value: e
                    })),
                    l = Z("span");
                l.innerHTML = n, H(s) && l.appendChild(s), o.appendChild(l), Object.defineProperty(o, "checked", {
                    enumerable: !0,
                    get: () => "true" === o.getAttribute("aria-checked"),
                    set(e) {
                        e && Array.from(o.parentNode.children).filter(e => eo(e, '[role="menuitemradio"]')).forEach(e => e.setAttribute("aria-checked", "false")), o.setAttribute("aria-checked", e ? "true" : "false")
                    }
                }), this.listeners.bind(o, "click keyup", t => {
                    if (!B(t) || 32 === t.which) {
                        switch (t.preventDefault(), t.stopPropagation(), o.checked = !0, i) {
                            case "language":
                                this.currentTrack = Number(e);
                                break;
                            case "quality":
                                this.quality = e;
                                break;
                            case "speed":
                                this.speed = parseFloat(e)
                        }
                        eB.showMenuPanel.call(this, "home", B(t))
                    }
                }, i, !1), eB.bindMenuItemShortcuts.call(this, o, i), t.appendChild(o)
            },
            formatTime(e = 0, t = !1) {
                return P(e) ? eY(e, eH(this.duration) > 0, t) : e
            },
            updateTimeDisplay(e = null, t = 0, i = !1) {
                H(e) && P(t) && (e.innerText = eB.formatTime(t, i))
            },
            updateVolume() {
                this.supported.ui && (H(this.elements.inputs.volume) && eB.setRange.call(this, this.elements.inputs.volume, this.muted ? 0 : this.volume), H(this.elements.buttons.mute) && (this.elements.buttons.mute.pressed = this.muted || 0 === this.volume))
            },
            setRange(e, t = 0) {
                H(e) && (e.value = t, eB.updateRangeFill.call(this, e))
            },
            updateProgress(e) {
                var t, i;
                if (!this.supported.ui || !Y(e)) return;
                let n = 0;
                if (e) switch (e.type) {
                    case "timeupdate":
                    case "seeking":
                    case "seeked":
                        t = this.currentTime, i = this.duration, n = 0 === t || 0 === i || Number.isNaN(t) || Number.isNaN(i) ? 0 : (t / i * 100).toFixed(2), "timeupdate" === e.type && eB.setRange.call(this, this.elements.inputs.seek, n);
                        break;
                    case "playing":
                    case "progress":
                        ((e, t) => {
                            let i = P(t) ? t : 0,
                                n = H(e) ? e : this.elements.display.buffer;
                            if (H(n)) {
                                n.value = i;
                                let s = n.getElementsByTagName("span")[0];
                                H(s) && (s.childNodes[0].nodeValue = i)
                            }
                        })(this.elements.display.buffer, 100 * this.buffered)
                }
            },
            updateRangeFill(e) {
                let t = Y(e) ? e.target : e;
                if (H(t) && "range" === t.getAttribute("type")) {
                    if (eo(t, this.config.selectors.inputs.seek)) {
                        t.setAttribute("aria-valuenow", this.currentTime);
                        let i = eB.formatTime(this.currentTime),
                            n = eB.formatTime(this.duration),
                            s = eO.get("seekLabel", this.config);
                        t.setAttribute("aria-valuetext", s.replace("{currentTime}", i).replace("{duration}", n))
                    } else if (eo(t, this.config.selectors.inputs.volume)) {
                        let a = 100 * t.value;
                        t.setAttribute("aria-valuenow", a), t.setAttribute("aria-valuetext", `${a.toFixed(1)}%`)
                    } else t.setAttribute("aria-valuenow", t.value);
                    X.isWebkit && t.style.setProperty("--value", t.value / t.max * 100 + "%")
                }
            },
            updateSeekTooltip(e) {
                if (!this.config.tooltips.seek || !H(this.elements.inputs.seek) || !H(this.elements.display.seekTooltip) || 0 === this.duration) return;
                let t = `${this.config.classNames.tooltip}--visible`,
                    i = e => ea(this.elements.display.seekTooltip, t, e);
                if (this.touch) return void i(!1);
                let n = 0,
                    s = this.elements.progress.getBoundingClientRect();
                if (Y(e)) n = 100 / s.width * (e.pageX - s.left);
                else {
                    if (!er(this.elements.display.seekTooltip, t)) return;
                    n = parseFloat(this.elements.display.seekTooltip.style.left, 10)
                }
                n < 0 ? n = 0 : n > 100 && (n = 100), eB.updateTimeDisplay.call(this, this.elements.display.seekTooltip, this.duration / 100 * n), this.elements.display.seekTooltip.style.left = `${n}%`, Y(e) && ["mouseenter", "mouseleave"].includes(e.type) && i("mouseenter" === e.type)
            },
            timeUpdate(e) {
                let t = !H(this.elements.display.duration) && this.config.invertTime;
                eB.updateTimeDisplay.call(this, this.elements.display.currentTime, t ? this.duration - this.currentTime : this.currentTime, t), e && "timeupdate" === e.type && this.media.seeking || eB.updateProgress.call(this, e)
            },
            durationUpdate() {
                if (!this.supported.ui || !this.config.invertTime && this.currentTime) return;
                if (this.duration >= 4294967296) return es(this.elements.display.currentTime, !0), void es(this.elements.progress, !0);
                H(this.elements.inputs.seek) && this.elements.inputs.seek.setAttribute("aria-valuemax", this.duration);
                let e = H(this.elements.display.duration);
                !e && this.config.displayDuration && this.paused && eB.updateTimeDisplay.call(this, this.elements.display.currentTime, this.duration), e && eB.updateTimeDisplay.call(this, this.elements.display.duration, this.duration), eB.updateSeekTooltip.call(this)
            },
            toggleMenuButton(e, t) {
                es(this.elements.settings.buttons[e], !t)
            },
            updateSetting(e, t, i) {
                let n = this.elements.settings.panels[e],
                    s = null,
                    a = t;
                if ("captions" === e) s = this.currentTrack;
                else {
                    if (s = R(i) ? this[e] : i, R(s) && (s = this.config[e].default), !R(this.options[e]) && !this.options[e].includes(s)) return void this.debug.warn(`Unsupported value of '${s}' for ${e}`);
                    if (!this.config[e].options.includes(s)) return void this.debug.warn(`Disabled value of '${s}' for ${e}`)
                }
                if (H(a) || (a = n && n.querySelector('[role="menu"]')), !H(a)) return;
                this.elements.settings.buttons[e].querySelector(`.${this.config.classNames.menu.value}`).innerHTML = eB.getLabel.call(this, e, s);
                let r = a && a.querySelector(`[value="${s}"]`);
                H(r) && (r.checked = !0)
            },
            getLabel(e, t) {
                switch (e) {
                    case "speed":
                        return 1 === t ? eO.get("normal", this.config) : `${t}&times;`;
                    case "quality":
                        if (P(t)) {
                            let i = eO.get(`qualityLabel.${t}`, this.config);
                            return i.length ? i : `${t}p`
                        }
                        return eL(t);
                    case "captions":
                        return e1.getLabel.call(this);
                    default:
                        return null
                }
            },
            setQualityMenu(e) {
                if (!H(this.elements.settings.panels.quality)) return;
                let t = "quality",
                    i = this.elements.settings.panels.quality.querySelector('[role="menu"]');
                N(e) && (this.options.quality = e_(e).filter(e => this.config.quality.options.includes(e)));
                let n = !R(this.options.quality) && this.options.quality.length > 1;
                if (eB.toggleMenuButton.call(this, t, n), et(i), eB.checkMenu.call(this), !n) return;
                let s = e => {
                    let t = eO.get(`qualityBadge.${e}`, this.config);
                    return t.length ? eB.createBadge.call(this, t) : null
                };
                this.options.quality.sort((e, t) => {
                    let i = this.config.quality.options;
                    return i.indexOf(e) > i.indexOf(t) ? 1 : -1
                }).forEach(e => {
                    eB.createMenuItem.call(this, {
                        value: e,
                        list: i,
                        type: t,
                        title: eB.getLabel.call(this, "quality", e),
                        badge: s(e)
                    })
                }), eB.updateSetting.call(this, t, i)
            },
            setCaptionsMenu() {
                if (!H(this.elements.settings.panels.captions)) return;
                let e = "captions",
                    t = this.elements.settings.panels.captions.querySelector('[role="menu"]'),
                    i = e1.getTracks.call(this),
                    n = Boolean(i.length);
                if (eB.toggleMenuButton.call(this, e, n), et(t), eB.checkMenu.call(this), !n) return;
                let s = i.map((e, i) => ({
                    value: i,
                    checked: this.captions.toggled && this.currentTrack === i,
                    title: e1.getLabel.call(this, e),
                    badge: e.language && eB.createBadge.call(this, e.language.toUpperCase()),
                    list: t,
                    type: "language"
                }));
                s.unshift({
                    value: -1,
                    checked: !this.captions.toggled,
                    title: eO.get("disabled", this.config),
                    list: t,
                    type: "language"
                }), s.forEach(eB.createMenuItem.bind(this)), eB.updateSetting.call(this, e, t)
            },
            setSpeedMenu() {
                if (!H(this.elements.settings.panels.speed)) return;
                let e = "speed",
                    t = this.elements.settings.panels.speed.querySelector('[role="menu"]');
                this.options.speed = this.options.speed.filter(e => e >= this.minimumSpeed && e <= this.maximumSpeed);
                let i = !R(this.options.speed) && this.options.speed.length > 1;
                eB.toggleMenuButton.call(this, e, i), et(t), eB.checkMenu.call(this), i && (this.options.speed.forEach(i => {
                    eB.createMenuItem.call(this, {
                        value: i,
                        list: t,
                        type: e,
                        title: eB.getLabel.call(this, "speed", i)
                    })
                }), eB.updateSetting.call(this, e, t))
            },
            checkMenu() {
                let {
                    buttons: e
                } = this.elements.settings, t = !R(e) && Object.values(e).some(e => !e.hidden);
                es(this.elements.settings.menu, !t)
            },
            focusFirstMenuItem(e, t = !1) {
                if (this.elements.settings.popup.hidden) return;
                let i = e;
                H(i) || (i = Object.values(this.elements.settings.panels).find(e => !e.hidden));
                let n = i.querySelector('[role^="menuitem"]');
                ec.call(this, n, t)
            },
            toggleMenu(e) {
                let {
                    popup: t
                } = this.elements.settings, i = this.elements.buttons.settings;
                if (!H(t) || !H(i)) return;
                let {
                    hidden: n
                } = t, s = n;
                if (I(e)) s = e;
                else if (B(e) && 27 === e.which) s = !1;
                else if (Y(e)) {
                    let a = O(e.composedPath) ? e.composedPath()[0] : e.target,
                        r = t.contains(a);
                    if (r || !r && e.target !== i && s) return
                }
                i.setAttribute("aria-expanded", s), es(t, !s), ea(this.elements.container, this.config.classNames.menu.open, s), s && B(e) ? eB.focusFirstMenuItem.call(this, null, !0) : s || n || ec.call(this, i, B(e))
            },
            getMenuSize(e) {
                let t = e.cloneNode(!0);
                t.style.position = "absolute", t.style.opacity = 0, t.removeAttribute("hidden"), e.parentNode.appendChild(t);
                let i = t.scrollWidth,
                    n = t.scrollHeight;
                return ee(t), {
                    width: i,
                    height: n
                }
            },
            showMenuPanel(e = "", t = !1) {
                let i = this.elements.container.querySelector(`#plyr-settings-${this.id}-${e}`);
                if (!H(i)) return;
                let n = i.parentNode,
                    s = Array.from(n.children).find(e => !e.hidden);
                if (eu.transitions && !eu.reducedMotion) {
                    n.style.width = `${s.scrollWidth}px`, n.style.height = `${s.scrollHeight}px`;
                    let a = eB.getMenuSize.call(this, i),
                        r = e => {
                            e.target === n && ["width", "height"].includes(e.propertyName) && (n.style.width = "", n.style.height = "", eg.call(this, n, j, r))
                        };
                    em.call(this, n, j, r), n.style.width = `${a.width}px`, n.style.height = `${a.height}px`
                }
                es(s, !0), es(i, !1), eB.focusFirstMenuItem.call(this, i, t)
            },
            setDownloadUrl() {
                let e = this.elements.buttons.download;
                H(e) && e.setAttribute("href", this.download)
            },
            create(e) {
                let {
                    bindMenuItemShortcuts: t,
                    createButton: i,
                    createProgress: n,
                    createRange: s,
                    createTime: a,
                    setQualityMenu: r,
                    setSpeedMenu: o,
                    showMenuPanel: l
                } = eB;
                this.elements.controls = null, N(this.config.controls) && this.config.controls.includes("play-large") && this.elements.container.appendChild(i.call(this, "play-large"));
                let d = Z("div", en(this.config.selectors.controls.wrapper));
                this.elements.controls = d;
                let c = {
                    class: "plyr__controls__item"
                };
                return e_(N(this.config.controls) ? this.config.controls : []).forEach(r => {
                    if ("restart" === r && d.appendChild(i.call(this, "restart", c)), "rewind" === r && d.appendChild(i.call(this, "rewind", c)), "play" === r && d.appendChild(i.call(this, "play", c)), "fast-forward" === r && d.appendChild(i.call(this, "fast-forward", c)), "progress" === r) {
                        let o = Z("div", {
                                class: `${c.class} plyr__progress__container`
                            }),
                            h = Z("div", en(this.config.selectors.progress));
                        if (h.appendChild(s.call(this, "seek", {
                                id: `plyr-seek-${e.id}`
                            })), h.appendChild(n.call(this, "buffer")), this.config.tooltips.seek) {
                            let u = Z("span", {
                                class: this.config.classNames.tooltip
                            }, "00:00");
                            h.appendChild(u), this.elements.display.seekTooltip = u
                        }
                        this.elements.progress = h, o.appendChild(this.elements.progress), d.appendChild(o)
                    }
                    if ("current-time" === r && d.appendChild(a.call(this, "currentTime", c)), "duration" === r && d.appendChild(a.call(this, "duration", c)), "mute" === r || "volume" === r) {
                        let {
                            volume: p
                        } = this.elements;
                        if (H(p) && d.contains(p) || (p = Z("div", U({}, c, {
                                class: `${c.class} plyr__volume`.trim()
                            })), this.elements.volume = p, d.appendChild(p)), "mute" === r && p.appendChild(i.call(this, "mute")), "volume" === r && !X.isIos) {
                            let f = {
                                max: 1,
                                step: .05,
                                value: this.config.volume
                            };
                            p.appendChild(s.call(this, "volume", U(f, {
                                id: `plyr-volume-${e.id}`
                            })))
                        }
                    }
                    if ("captions" === r && d.appendChild(i.call(this, "captions", c)), "settings" === r && !R(this.config.settings)) {
                        let m = Z("div", U({}, c, {
                            class: `${c.class} plyr__menu`.trim(),
                            hidden: ""
                        }));
                        m.appendChild(i.call(this, "settings", {
                            "aria-haspopup": !0,
                            "aria-controls": `plyr-settings-${e.id}`,
                            "aria-expanded": !1
                        }));
                        let g = Z("div", {
                                class: "plyr__menu__container",
                                id: `plyr-settings-${e.id}`,
                                hidden: ""
                            }),
                            v = Z("div"),
                            y = Z("div", {
                                id: `plyr-settings-${e.id}-home`
                            }),
                            $ = Z("div", {
                                role: "menu"
                            });
                        y.appendChild($), v.appendChild(y), this.elements.settings.panels.home = y, this.config.settings.forEach(i => {
                            let n = Z("button", U(en(this.config.selectors.buttons.settings), {
                                type: "button",
                                class: `${this.config.classNames.control} ${this.config.classNames.control}--forward`,
                                role: "menuitem",
                                "aria-haspopup": !0,
                                hidden: ""
                            }));
                            t.call(this, n, i), em.call(this, n, "click", () => {
                                l.call(this, i, !1)
                            });
                            let s = Z("span", null, eO.get(i, this.config)),
                                a = Z("span", {
                                    class: this.config.classNames.menu.value
                                });
                            a.innerHTML = e[i], s.appendChild(a), n.appendChild(s), $.appendChild(n);
                            let r = Z("div", {
                                    id: `plyr-settings-${e.id}-${i}`,
                                    hidden: ""
                                }),
                                o = Z("button", {
                                    type: "button",
                                    class: `${this.config.classNames.control} ${this.config.classNames.control}--back`
                                });
                            o.appendChild(Z("span", {
                                "aria-hidden": !0
                            }, eO.get(i, this.config))), o.appendChild(Z("span", {
                                class: this.config.classNames.hidden
                            }, eO.get("menuBack", this.config))), em.call(this, r, "keydown", e => {
                                37 === e.which && (e.preventDefault(), e.stopPropagation(), l.call(this, "home", !0))
                            }, !1), em.call(this, o, "click", () => {
                                l.call(this, "home", !1)
                            }), r.appendChild(o), r.appendChild(Z("div", {
                                role: "menu"
                            })), v.appendChild(r), this.elements.settings.buttons[i] = n, this.elements.settings.panels[i] = r
                        }), g.appendChild(v), m.appendChild(g), d.appendChild(m), this.elements.settings.popup = g, this.elements.settings.menu = m
                    }
                    if ("pip" === r && eu.pip && d.appendChild(i.call(this, "pip", c)), "airplay" === r && eu.airplay && d.appendChild(i.call(this, "airplay", c)), "download" === r) {
                        let b = U({}, c, {
                            element: "a",
                            href: this.download,
                            target: "_blank"
                        });
                        this.isHTML5 && (b.download = "");
                        let {
                            download: w
                        } = this.config.urls;
                        !F(w) && this.isEmbed && U(b, {
                            icon: `logo-${this.provider}`,
                            label: this.provider
                        }), d.appendChild(i.call(this, "download", b))
                    }
                    "fullscreen" === r && d.appendChild(i.call(this, "fullscreen", c))
                }), this.isHTML5 && r.call(this, eM.getQualityOptions.call(this)), o.call(this), d
            },
            inject() {
                var e;
                if (this.config.loadSprite) {
                    let t = eB.getIconUrl.call(this);
                    t.cors && e0(t.url, "sprite-plyr")
                }
                this.id = Math.floor(1e4 * Math.random());
                let i = null;
                this.elements.controls = null;
                let n = {
                        id: this.id,
                        seektime: this.config.seekTime,
                        title: this.config.title
                    },
                    s = !0;
                O(this.config.controls) && (this.config.controls = this.config.controls.call(this, n)), this.config.controls || (this.config.controls = []), H(this.config.controls) || L(this.config.controls) ? i = this.config.controls : (i = eB.create.call(this, {
                    id: this.id,
                    seektime: this.config.seekTime,
                    speed: this.speed,
                    quality: this.quality,
                    captions: e1.getLabel.call(this)
                }), s = !1);
                let a, r;
                if (s && L(this.config.controls) && (i = (r = e = i, Object.entries(n).forEach(([e, t]) => {
                        r = eP(r, `{${e}}`, t)
                    }), r)), L(this.config.selectors.controls.container) && (a = document.querySelector(this.config.selectors.controls.container)), H(a) || (a = this.elements.container), a[H(i) ? "insertAdjacentElement" : "insertAdjacentHTML"]("afterbegin", i), H(this.elements.controls) || eB.findElements.call(this), !R(this.elements.buttons)) {
                    let o = e => {
                        let t = this.config.classNames.controlPressed;
                        Object.defineProperty(e, "pressed", {
                            enumerable: !0,
                            get: () => er(e, t),
                            set(i = !1) {
                                ea(e, t, i)
                            }
                        })
                    };
                    Object.values(this.elements.buttons).filter(Boolean).forEach(e => {
                        N(e) || z(e) ? Array.from(e).filter(Boolean).forEach(o) : o(e)
                    })
                }
                if (X.isEdge && V(a), this.config.tooltips.controls) {
                    let {
                        classNames: l,
                        selectors: d
                    } = this.config, c = `${d.controls.wrapper} ${d.labels} .${l.hidden}`, h = el.call(this, c);
                    Array.from(h).forEach(e => {
                        ea(e, this.config.classNames.hidden, !1), ea(e, this.config.classNames.tooltip, !0)
                    })
                }
            }
        };

        function eq(e, t = !0) {
            let i = e;
            if (t) {
                let n = document.createElement("a");
                n.href = i, i = n.href
            }
            try {
                return new URL(i)
            } catch (s) {
                return null
            }
        }

        function eW(e) {
            let t = new URLSearchParams;
            return A(e) && Object.entries(e).forEach(([e, i]) => {
                t.set(e, i)
            }), t
        }
        let e1 = {
                setup() {
                    var e, t;
                    if (!this.supported.ui) return;
                    if (!this.isVideo || this.isYouTube || this.isHTML5 && !eu.textTracks) return void(N(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && eB.setCaptionsMenu.call(this));
                    if (H(this.elements.captions) || (this.elements.captions = Z("div", en(this.config.selectors.captions)), e = this.elements.captions, t = this.elements.wrapper, H(e) && H(t) && t.parentNode.insertBefore(e, t.nextSibling)), X.isIE && window.URL) {
                        let i = this.media.querySelectorAll("track");
                        Array.from(i).forEach(e => {
                            let t = e.getAttribute("src"),
                                i = eq(t);
                            null !== i && i.hostname !== window.location.href.hostname && ["http:", "https:"].includes(i.protocol) && ez(t, "blob").then(t => {
                                e.setAttribute("src", window.URL.createObjectURL(t))
                            }).catch(() => {
                                ee(e)
                            })
                        })
                    }
                    let n = e_((navigator.languages || [navigator.language || navigator.userLanguage || "en"]).map(e => e.split("-")[0])),
                        s = (this.storage.get("language") || this.config.captions.language || "auto").toLowerCase();
                    "auto" === s && ([s] = n);
                    let a = this.storage.get("captions");
                    if (I(a) || ({
                            active: a
                        } = this.config.captions), Object.assign(this.captions, {
                            toggled: !1,
                            active: a,
                            language: s,
                            languages: n
                        }), this.isHTML5) {
                        let r = this.config.captions.update ? "addtrack removetrack" : "removetrack";
                        em.call(this, this.media.textTracks, r, e1.update.bind(this))
                    }
                    setTimeout(e1.update.bind(this), 0)
                },
                update() {
                    let e = e1.getTracks.call(this, !0),
                        {
                            active: t,
                            language: i,
                            meta: n,
                            currentTrackNode: s
                        } = this.captions,
                        a = Boolean(e.find(e => e.language === i));
                    this.isHTML5 && this.isVideo && e.filter(e => !n.get(e)).forEach(e => {
                        this.debug.log("Track added", e), n.set(e, {
                            default: "showing" === e.mode
                        }), "showing" === e.mode && (e.mode = "hidden"), em.call(this, e, "cuechange", () => e1.updateCues.call(this))
                    }), (a && this.language !== i || !e.includes(s)) && (e1.setLanguage.call(this, i), e1.toggle.call(this, t && a)), this.elements && ea(this.elements.container, this.config.classNames.captions.enabled, !R(e)), N(this.config.controls) && this.config.controls.includes("settings") && this.config.settings.includes("captions") && eB.setCaptionsMenu.call(this)
                },
                toggle(e, t = !0) {
                    if (!this.supported.ui) return;
                    let {
                        toggled: i
                    } = this.captions, n = this.config.classNames.captions.active, s = M(e) ? !i : e;
                    if (s !== i) {
                        if (t || (this.captions.active = s, this.storage.set({
                                captions: s
                            })), !this.language && s && !t) {
                            let a = e1.getTracks.call(this),
                                r = e1.findTrack.call(this, [this.captions.language, ...this.captions.languages], !0);
                            return this.captions.language = r.language, void e1.set.call(this, a.indexOf(r))
                        }
                        this.elements.buttons.captions && (this.elements.buttons.captions.pressed = s), ea(this.elements.container, n, s), this.captions.toggled = s, eB.updateSetting.call(this, "captions"), ey.call(this, this.media, s ? "captionsenabled" : "captionsdisabled")
                    }
                    setTimeout(() => {
                        s && this.captions.toggled && (this.captions.currentTrackNode.mode = "hidden")
                    })
                },
                set(e, t = !0) {
                    let i = e1.getTracks.call(this);
                    if (-1 !== e) {
                        if (P(e)) {
                            if (e in i) {
                                if (this.captions.currentTrack !== e) {
                                    this.captions.currentTrack = e;
                                    let n = i[e],
                                        {
                                            language: s
                                        } = n || {};
                                    this.captions.currentTrackNode = n, eB.updateSetting.call(this, "captions"), t || (this.captions.language = s, this.storage.set({
                                        language: s
                                    })), this.isVimeo && this.embed.enableTextTrack(s), ey.call(this, this.media, "languagechange")
                                }
                                e1.toggle.call(this, !0, t), this.isHTML5 && this.isVideo && e1.updateCues.call(this)
                            } else this.debug.warn("Track not found", e)
                        } else this.debug.warn("Invalid caption argument", e)
                    } else e1.toggle.call(this, !1, t)
                },
                setLanguage(e, t = !0) {
                    if (!L(e)) return void this.debug.warn("Invalid language argument", e);
                    let i = e.toLowerCase();
                    this.captions.language = i;
                    let n = e1.getTracks.call(this),
                        s = e1.findTrack.call(this, [i]);
                    e1.set.call(this, n.indexOf(s), t)
                },
                getTracks(e = !1) {
                    return Array.from((this.media || {}).textTracks || []).filter(t => !this.isHTML5 || e || this.captions.meta.has(t)).filter(e => ["captions", "subtitles"].includes(e.kind))
                },
                findTrack(e, t = !1) {
                    let i = e1.getTracks.call(this),
                        n = e => Number((this.captions.meta.get(e) || {}).default),
                        s = Array.from(i).sort((e, t) => n(t) - n(e)),
                        a;
                    return e.every(e => !(a = s.find(t => t.language === e))), a || (t ? s[0] : void 0)
                },
                getCurrentTrack() {
                    return e1.getTracks.call(this)[this.currentTrack]
                },
                getLabel(e) {
                    let t = e;
                    return !q(t) && eu.textTracks && this.captions.toggled && (t = e1.getCurrentTrack.call(this)), q(t) ? R(t.label) ? R(t.language) ? eO.get("enabled", this.config) : e.language.toUpperCase() : t.label : eO.get("disabled", this.config)
                },
                updateCues(e) {
                    if (!this.supported.ui) return;
                    if (!H(this.elements.captions)) return void this.debug.warn("No captions element to render to");
                    if (!M(e) && !Array.isArray(e)) return void this.debug.warn("updateCues: Invalid input", e);
                    let t = e;
                    if (!t) {
                        let i = e1.getCurrentTrack.call(this);
                        t = Array.from((i || {}).activeCues || []).map(e => e.getCueAsHTML()).map(eI)
                    }
                    let n = t.map(e => e.trim()).join("\n");
                    if (n !== this.elements.captions.innerHTML) {
                        et(this.elements.captions);
                        let s = Z("span", en(this.config.selectors.caption));
                        s.innerHTML = n, this.elements.captions.appendChild(s), ey.call(this, this.media, "cuechange")
                    }
                }
            },
            e3 = {
                enabled: !0,
                title: "",
                debug: !1,
                autoplay: !1,
                autopause: !0,
                playsinline: !0,
                seekTime: 10,
                volume: 1,
                muted: !1,
                duration: null,
                displayDuration: !0,
                invertTime: !0,
                toggleInvert: !0,
                ratio: null,
                clickToPlay: !0,
                hideControls: !0,
                resetOnEnd: !1,
                disableContextMenu: !0,
                loadSprite: !0,
                iconPrefix: "plyr",
                iconUrl: "https://cdn.plyr.io/3.6.12/plyr.svg",
                blankVideo: "https://cdn.plyr.io/static/blank.mp4",
                quality: {
                    default: 576,
                    options: [4320, 2880, 2160, 1440, 1080, 720, 576, 480, 360, 240],
                    forced: !1,
                    onChange: null
                },
                loop: {
                    active: !1
                },
                speed: {
                    selected: 1,
                    options: [.5, .75, 1, 1.25, 1.5, 1.75, 2, 4]
                },
                keyboard: {
                    focused: !0,
                    global: !1
                },
                tooltips: {
                    controls: !1,
                    seek: !0
                },
                captions: {
                    active: !1,
                    language: "auto",
                    update: !1
                },
                fullscreen: {
                    enabled: !0,
                    fallback: !0,
                    iosNative: !1
                },
                storage: {
                    enabled: !0,
                    key: "plyr"
                },
                controls: ["play-large", "play", "progress", "current-time", "mute", "volume", "captions", "settings", "pip", "airplay", "fullscreen"],
                settings: ["captions", "quality", "speed"],
                i18n: {
                    restart: "Restart",
                    rewind: "Rewind {seektime}s",
                    play: "Play",
                    pause: "Pause",
                    fastForward: "Forward {seektime}s",
                    seek: "Seek",
                    seekLabel: "{currentTime} of {duration}",
                    played: "Played",
                    buffered: "Buffered",
                    currentTime: "Current time",
                    duration: "Duration",
                    volume: "Volume",
                    mute: "Mute",
                    unmute: "Unmute",
                    enableCaptions: "Enable captions",
                    disableCaptions: "Disable captions",
                    download: "Download",
                    enterFullscreen: "Enter fullscreen",
                    exitFullscreen: "Exit fullscreen",
                    frameTitle: "Player for {title}",
                    captions: "Captions",
                    settings: "Settings",
                    pip: "PIP",
                    menuBack: "Go back to previous menu",
                    speed: "Speed",
                    normal: "Normal",
                    quality: "Quality",
                    loop: "Loop",
                    start: "Start",
                    end: "End",
                    all: "All",
                    reset: "Reset",
                    disabled: "Disabled",
                    enabled: "Enabled",
                    advertisement: "Ad",
                    qualityBadge: {
                        2160: "4K",
                        1440: "HD",
                        1080: "HD",
                        720: "HD",
                        576: "SD",
                        480: "SD"
                    }
                },
                urls: {
                    download: null,
                    vimeo: {
                        sdk: "https://player.vimeo.com/api/player.js",
                        iframe: "https://player.vimeo.com/video/{0}?{1}",
                        api: "https://vimeo.com/api/oembed.json?url={0}"
                    },
                    youtube: {
                        sdk: "https://www.youtube.com/iframe_api",
                        api: "https://noembed.com/embed?url=https://www.youtube.com/watch?v={0}"
                    },
                    googleIMA: {
                        sdk: "https://imasdk.googleapis.com/js/sdkloader/ima3.js"
                    }
                },
                listeners: {
                    seek: null,
                    play: null,
                    pause: null,
                    restart: null,
                    rewind: null,
                    fastForward: null,
                    mute: null,
                    volume: null,
                    captions: null,
                    download: null,
                    fullscreen: null,
                    pip: null,
                    airplay: null,
                    speed: null,
                    quality: null,
                    loop: null,
                    language: null
                },
                events: ["ended", "progress", "stalled", "playing", "waiting", "canplay", "canplaythrough", "loadstart", "loadeddata", "loadedmetadata", "timeupdate", "volumechange", "play", "pause", "error", "seeking", "seeked", "emptied", "ratechange", "cuechange", "download", "enterfullscreen", "exitfullscreen", "captionsenabled", "captionsdisabled", "languagechange", "controlshidden", "controlsshown", "ready", "statechange", "qualitychange", "adsloaded", "adscontentpause", "adscontentresume", "adstarted", "adsmidpoint", "adscomplete", "adsallcomplete", "adsimpression", "adsclick"],
                selectors: {
                    editable: "input, textarea, select, [contenteditable]",
                    container: ".plyr",
                    controls: {
                        container: null,
                        wrapper: ".plyr__controls"
                    },
                    labels: "[data-plyr]",
                    buttons: {
                        play: '[data-plyr="play"]',
                        pause: '[data-plyr="pause"]',
                        restart: '[data-plyr="restart"]',
                        rewind: '[data-plyr="rewind"]',
                        fastForward: '[data-plyr="fast-forward"]',
                        mute: '[data-plyr="mute"]',
                        captions: '[data-plyr="captions"]',
                        download: '[data-plyr="download"]',
                        fullscreen: '[data-plyr="fullscreen"]',
                        pip: '[data-plyr="pip"]',
                        airplay: '[data-plyr="airplay"]',
                        settings: '[data-plyr="settings"]',
                        loop: '[data-plyr="loop"]'
                    },
                    inputs: {
                        seek: '[data-plyr="seek"]',
                        volume: '[data-plyr="volume"]',
                        speed: '[data-plyr="speed"]',
                        language: '[data-plyr="language"]',
                        quality: '[data-plyr="quality"]'
                    },
                    display: {
                        currentTime: ".plyr__time--current",
                        duration: ".plyr__time--duration",
                        buffer: ".plyr__progress__buffer",
                        loop: ".plyr__progress__loop",
                        volume: ".plyr__volume--display"
                    },
                    progress: ".plyr__progress",
                    captions: ".plyr__captions",
                    caption: ".plyr__caption"
                },
                classNames: {
                    type: "plyr--{0}",
                    provider: "plyr--{0}",
                    video: "plyr__video-wrapper",
                    embed: "plyr__video-embed",
                    videoFixedRatio: "plyr__video-wrapper--fixed-ratio",
                    embedContainer: "plyr__video-embed__container",
                    poster: "plyr__poster",
                    posterEnabled: "plyr__poster-enabled",
                    ads: "plyr__ads",
                    control: "plyr__control",
                    controlPressed: "plyr__control--pressed",
                    playing: "plyr--playing",
                    paused: "plyr--paused",
                    stopped: "plyr--stopped",
                    loading: "plyr--loading",
                    hover: "plyr--hover",
                    tooltip: "plyr__tooltip",
                    cues: "plyr__cues",
                    hidden: "plyr__sr-only",
                    hideControls: "plyr--hide-controls",
                    isIos: "plyr--is-ios",
                    isTouch: "plyr--is-touch",
                    uiSupported: "plyr--full-ui",
                    noTransition: "plyr--no-transition",
                    display: {
                        time: "plyr__time"
                    },
                    menu: {
                        value: "plyr__menu__value",
                        badge: "plyr__badge",
                        open: "plyr--menu-open"
                    },
                    captions: {
                        enabled: "plyr--captions-enabled",
                        active: "plyr--captions-active"
                    },
                    fullscreen: {
                        enabled: "plyr--fullscreen-enabled",
                        fallback: "plyr--fullscreen-fallback"
                    },
                    pip: {
                        supported: "plyr--pip-supported",
                        active: "plyr--pip-active"
                    },
                    airplay: {
                        supported: "plyr--airplay-supported",
                        active: "plyr--airplay-active"
                    },
                    tabFocus: "plyr__tab-focus",
                    previewThumbnails: {
                        thumbContainer: "plyr__preview-thumb",
                        thumbContainerShown: "plyr__preview-thumb--is-shown",
                        imageContainer: "plyr__preview-thumb__image-container",
                        timeContainer: "plyr__preview-thumb__time-container",
                        scrubbingContainer: "plyr__preview-scrubbing",
                        scrubbingContainerShown: "plyr__preview-scrubbing--is-shown"
                    }
                },
                attributes: {
                    embed: {
                        provider: "data-plyr-provider",
                        id: "data-plyr-embed-id",
                        hash: "data-plyr-embed-hash"
                    }
                },
                ads: {
                    enabled: !1,
                    publisherId: "",
                    tagUrl: ""
                },
                previewThumbnails: {
                    enabled: !1,
                    src: ""
                },
                vimeo: {
                    byline: !1,
                    portrait: !1,
                    title: !1,
                    speed: !0,
                    transparent: !1,
                    customControls: !0,
                    referrerPolicy: null,
                    premium: !1
                },
                youtube: {
                    rel: 0,
                    showinfo: 0,
                    iv_load_policy: 3,
                    modestbranding: 1,
                    customControls: !0,
                    noCookie: !1
                }
            },
            eF = "picture-in-picture",
            eR = {
                html5: "html5",
                youtube: "youtube",
                vimeo: "vimeo"
            },
            ej = "video",
            eV = () => {};
        class e2 {
            constructor(t) {
                e(this, "onChange", () => {
                    if (!this.enabled) return;
                    let e = this.player.elements.buttons.fullscreen;
                    H(e) && (e.pressed = this.active);
                    let t = this.target === this.player.media ? this.target : this.player.elements.container;
                    ey.call(this.player, t, this.active ? "enterfullscreen" : "exitfullscreen", !0)
                }), e(this, "toggleFallback", (e = !1) => {
                    if (e ? this.scrollPosition = {
                            x: window.scrollX || 0,
                            y: window.scrollY || 0
                        } : window.scrollTo(this.scrollPosition.x, this.scrollPosition.y), document.body.style.overflow = e ? "hidden" : "", ea(this.target, this.player.config.classNames.fullscreen.fallback, e), X.isIos) {
                        let t = document.head.querySelector('meta[name="viewport"]'),
                            i = "viewport-fit=cover";
                        t || (t = document.createElement("meta")).setAttribute("name", "viewport");
                        let n = L(t.content) && t.content.includes(i);
                        e ? (this.cleanupViewport = !n, n || (t.content += `,${i}`)) : this.cleanupViewport && (t.content = t.content.split(",").filter(e => e.trim() !== i).join(","))
                    }
                    this.onChange()
                }), e(this, "trapFocus", e => {
                    if (X.isIos || !this.active || "Tab" !== e.key || 9 !== e.keyCode) return;
                    let t = document.activeElement,
                        i = el.call(this.player, "a[href], button:not(:disabled), input:not(:disabled), [tabindex]"),
                        [n] = i,
                        s = i[i.length - 1];
                    t !== s || e.shiftKey ? t === n && e.shiftKey && (s.focus(), e.preventDefault()) : (n.focus(), e.preventDefault())
                }), e(this, "update", () => {
                    if (this.enabled) {
                        let e;
                        e = this.forceFallback ? "Fallback (forced)" : e2.native ? "Native" : "Fallback", this.player.debug.log(`${e} fullscreen enabled`)
                    } else this.player.debug.log("Fullscreen not supported and fallback disabled");
                    ea(this.player.elements.container, this.player.config.classNames.fullscreen.enabled, this.enabled)
                }), e(this, "enter", () => {
                    this.enabled && (X.isIos && this.player.config.fullscreen.iosNative ? this.player.isVimeo ? this.player.embed.requestFullscreen() : this.target.webkitEnterFullscreen() : !e2.native || this.forceFallback ? this.toggleFallback(!0) : this.prefix ? R(this.prefix) || this.target[`${this.prefix}Request${this.property}`]() : this.target.requestFullscreen({
                        navigationUI: "hide"
                    }))
                }), e(this, "exit", () => {
                    if (this.enabled) {
                        if (X.isIos && this.player.config.fullscreen.iosNative) this.target.webkitExitFullscreen(), ew(this.player.play());
                        else if (!e2.native || this.forceFallback) this.toggleFallback(!1);
                        else if (this.prefix) {
                            if (!R(this.prefix)) {
                                let e = "moz" === this.prefix ? "Cancel" : "Exit";
                                document[`${this.prefix}${e}${this.property}`]()
                            }
                        } else(document.cancelFullScreen || document.exitFullscreen).call(document)
                    }
                }), e(this, "toggle", () => {
                    this.active ? this.exit() : this.enter()
                }), this.player = t, this.prefix = e2.prefix, this.property = e2.property, this.scrollPosition = {
                    x: 0,
                    y: 0
                }, this.forceFallback = "force" === t.config.fullscreen.fallback, this.player.elements.fullscreen = t.config.fullscreen.container && function(e, t) {
                    let {
                        prototype: i
                    } = Element;
                    return (i.closest || function() {
                        let e = this;
                        do {
                            if (eo.matches(e, t)) return e;
                            e = e.parentElement || e.parentNode
                        } while (null !== e && 1 === e.nodeType);
                        return null
                    }).call(e, t)
                }(this.player.elements.container, t.config.fullscreen.container), em.call(this.player, document, "ms" === this.prefix ? "MSFullscreenChange" : `${this.prefix}fullscreenchange`, () => {
                    this.onChange()
                }), em.call(this.player, this.player.elements.container, "dblclick", e => {
                    H(this.player.elements.controls) && this.player.elements.controls.contains(e.target) || this.player.listeners.proxy(e, this.toggle, "fullscreen")
                }), em.call(this, this.player.elements.container, "keydown", e => this.trapFocus(e)), this.update()
            }
            static get native() {
                return !!(document.fullscreenEnabled || document.webkitFullscreenEnabled || document.mozFullScreenEnabled || document.msFullscreenEnabled)
            }
            get usingNative() {
                return e2.native && !this.forceFallback
            }
            static get prefix() {
                if (O(document.exitFullscreen)) return "";
                let e = "";
                return ["webkit", "moz", "ms"].some(t => !(!O(document[`${t}ExitFullscreen`]) && !O(document[`${t}CancelFullScreen`])) && (e = t, !0)), e
            }
            static get property() {
                return "moz" === this.prefix ? "FullScreen" : "Fullscreen"
            }
            get enabled() {
                return (e2.native || this.player.config.fullscreen.fallback) && this.player.config.fullscreen.enabled && this.player.supported.ui && this.player.isVideo
            }
            get active() {
                if (!this.enabled) return !1;
                if (!e2.native || this.forceFallback) return er(this.target, this.player.config.classNames.fullscreen.fallback);
                let e = this.prefix ? this.target.getRootNode()[`${this.prefix}${this.property}Element`] : this.target.getRootNode().fullscreenElement;
                return e && e.shadowRoot ? e === this.target.getRootNode().host : e === this.target
            }
            get target() {
                return X.isIos && this.player.config.fullscreen.iosNative ? this.player.media : this.player.elements.fullscreen || this.player.elements.container
            }
        }

        function e5(e, t = 1) {
            return new Promise((i, n) => {
                let s = new Image,
                    a = () => {
                        delete s.onload, delete s.onerror, (s.naturalWidth >= t ? i : n)(s)
                    };
                Object.assign(s, {
                    onload: a,
                    onerror: a,
                    src: e
                })
            })
        }
        let eX = {
            addStyleHook() {
                ea(this.elements.container, this.config.selectors.container.replace(".", ""), !0), ea(this.elements.container, this.config.classNames.uiSupported, this.supported.ui)
            },
            toggleNativeControls(e = !1) {
                e && this.isHTML5 ? this.media.setAttribute("controls", "") : this.media.removeAttribute("controls")
            },
            build() {
                if (this.listeners.media(), !this.supported.ui) return this.debug.warn(`Basic support only for ${this.provider} ${this.type}`), void eX.toggleNativeControls.call(this, !0);
                H(this.elements.controls) || (eB.inject.call(this), this.listeners.controls()), eX.toggleNativeControls.call(this), this.isHTML5 && e1.setup.call(this), this.volume = null, this.muted = null, this.loop = null, this.quality = null, this.speed = null, eB.updateVolume.call(this), eB.timeUpdate.call(this), eB.durationUpdate.call(this), eX.checkPlaying.call(this), ea(this.elements.container, this.config.classNames.pip.supported, eu.pip && this.isHTML5 && this.isVideo), ea(this.elements.container, this.config.classNames.airplay.supported, eu.airplay && this.isHTML5), ea(this.elements.container, this.config.classNames.isIos, X.isIos), ea(this.elements.container, this.config.classNames.isTouch, this.touch), this.ready = !0, setTimeout(() => {
                    ey.call(this, this.media, "ready")
                }, 0), eX.setTitle.call(this), this.poster && eX.setPoster.call(this, this.poster, !1).catch(() => {}), this.config.duration && eB.durationUpdate.call(this)
            },
            setTitle() {
                let e = eO.get("play", this.config);
                if (L(this.config.title) && !R(this.config.title) && (e += `, ${this.config.title}`), Array.from(this.elements.buttons.play || []).forEach(t => {
                        t.setAttribute("aria-label", e)
                    }), this.isEmbed) {
                    let t = ed.call(this, "iframe");
                    if (!H(t)) return;
                    let i = R(this.config.title) ? "video" : this.config.title,
                        n = eO.get("frameTitle", this.config);
                    t.setAttribute("title", n.replace("{title}", i))
                }
            },
            togglePoster(e) {
                ea(this.elements.container, this.config.classNames.posterEnabled, e)
            },
            setPoster(e, t = !0) {
                return t && this.poster ? Promise.reject(Error("Poster already set")) : (this.media.setAttribute("data-poster", e), this.elements.poster.removeAttribute("hidden"), eb.call(this).then(() => e5(e)).catch(t => {
                    throw e === this.poster && eX.togglePoster.call(this, !1), t
                }).then(() => {
                    if (e !== this.poster) throw Error("setPoster cancelled by later call to setPoster")
                }).then(() => (Object.assign(this.elements.poster.style, {
                    backgroundImage: `url('${e}')`,
                    backgroundSize: ""
                }), eX.togglePoster.call(this, !0), e)))
            },
            checkPlaying(e) {
                ea(this.elements.container, this.config.classNames.playing, this.playing), ea(this.elements.container, this.config.classNames.paused, this.paused), ea(this.elements.container, this.config.classNames.stopped, this.stopped), Array.from(this.elements.buttons.play || []).forEach(e => {
                    Object.assign(e, {
                        pressed: this.playing
                    }), e.setAttribute("aria-label", eO.get(this.playing ? "pause" : "play", this.config))
                }), Y(e) && "timeupdate" === e.type || eX.toggleControls.call(this)
            },
            checkLoading(e) {
                this.loading = ["stalled", "waiting"].includes(e.type), clearTimeout(this.timers.loading), this.timers.loading = setTimeout(() => {
                    ea(this.elements.container, this.config.classNames.loading, this.loading), eX.toggleControls.call(this)
                }, this.loading ? 250 : 0)
            },
            toggleControls(e) {
                let {
                    controls: t
                } = this.elements;
                if (t && this.config.hideControls) {
                    let i = this.touch && this.lastSeekTime + 2e3 > Date.now();
                    this.toggleControls(Boolean(e || this.loading || this.paused || t.pressed || t.hover || i))
                }
            },
            migrateStyles() {
                Object.values({
                    ...this.media.style
                }).filter(e => !R(e) && L(e) && e.startsWith("--plyr")).forEach(e => {
                    this.elements.container.style.setProperty(e, this.media.style.getPropertyValue(e)), this.media.style.removeProperty(e)
                }), R(this.media.style) && this.media.removeAttribute("style")
            }
        };
        "undefined" != typeof globalThis ? globalThis : "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
        var e4 = ((a = function(e, t) {
            e.exports = function() {
                var e = function() {},
                    t = {},
                    i = {},
                    n = {};

                function s(e, t) {
                    if (e) {
                        var s = n[e];
                        if (i[e] = t, s)
                            for (; s.length;) s[0](e, t), s.splice(0, 1)
                    }
                }

                function a(t, i) {
                    t.call && (t = {
                        success: t
                    }), i.length ? (t.error || e)(i) : (t.success || e)(t)
                }

                function r(t, i, n, s) {
                    var a, o, l = document,
                        d = n.async,
                        c = (n.numRetries || 0) + 1,
                        h = n.before || e,
                        u = t.replace(/[\?|#].*$/, ""),
                        p = t.replace(/^(css|img)!/, "");
                    s = s || 0, /(^css!|\.css$)/.test(u) ? ((o = l.createElement("link")).rel = "stylesheet", o.href = p, (a = "hideFocus" in o) && o.relList && (a = 0, o.rel = "preload", o.as = "style")) : /(^img!|\.(png|gif|jpg|svg|webp)$)/.test(u) ? (o = l.createElement("img")).src = p : ((o = l.createElement("script")).src = t, o.async = void 0 === d || d), o.onload = o.onerror = o.onbeforeload = function(e) {
                        var l = e.type[0];
                        if (a) try {
                            o.sheet.cssText.length || (l = "e")
                        } catch (d) {
                            18 != d.code && (l = "e")
                        }
                        if ("e" == l) {
                            if ((s += 1) < c) return r(t, i, n, s)
                        } else if ("preload" == o.rel && "style" == o.as) return o.rel = "stylesheet";
                        i(t, l, e.defaultPrevented)
                    }, !1 !== h(t, o) && l.head.appendChild(o)
                }

                function o(e, i, n) {
                    var o, l;
                    if (i && i.trim && (o = i), l = (o ? n : i) || {}, o) {
                        if (o in t) throw "LoadJS";
                        t[o] = !0
                    }

                    function d(t, i) {
                        ! function e(t, i, n) {
                            var s, a, o = (t = t.push ? t : [t]).length,
                                l = o,
                                d = [];
                            for (s = function(e, t, n) {
                                    if ("e" == t && d.push(e), "b" == t) {
                                        if (!n) return;
                                        d.push(e)
                                    }--o || i(d)
                                }, a = 0; a < l; a++) r(t[a], s, n)
                        }(e, function(e) {
                            a(l, e), t && a({
                                success: t,
                                error: i
                            }, e), s(o, e)
                        }, l)
                    }
                    if (l.returnPromise) return new Promise(d);
                    d()
                }
                return o.ready = function(e, t) {
                    return function e(t, s) {
                        t = t.push ? t : [t];
                        var a, r, o, l = [],
                            d = t.length,
                            c = d;
                        for (a = function(e, t) {
                                t.length && l.push(e), --c || s(l)
                            }; d--;)(o = i[r = t[d]]) ? a(r, o) : (n[r] = n[r] || []).push(a)
                    }(e, function(e) {
                        a(t, e)
                    }), o
                }, o.done = function(e) {
                    s(e, [])
                }, o.reset = function() {
                    t = {}, i = {}, n = {}
                }, o.isDefined = function(e) {
                    return e in t
                }, o
            }()
        })(r = {
            exports: {}
        }, r.exports), r.exports);

        function e7(e) {
            return new Promise((t, i) => {
                e4(e, {
                    success: t,
                    error: i
                })
            })
        }

        function e6(e) {
            e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, ey.call(this, this.media, e ? "play" : "pause"))
        }
        let eG = {
            setup() {
                let e = this;
                ea(e.elements.wrapper, e.config.classNames.embed, !0), e.options.speed = e.config.speed.options, eS.call(e), A(window.Vimeo) ? eG.ready.call(e) : e7(e.config.urls.vimeo.sdk).then(() => {
                    eG.ready.call(e)
                }).catch(t => {
                    e.debug.warn("Vimeo SDK (player.js) failed to load", t)
                })
            },
            ready() {
                var e;
                let t = this,
                    i = t.config.vimeo,
                    {
                        premium: n,
                        referrerPolicy: s,
                        ...a
                    } = i,
                    r = t.media.getAttribute("src"),
                    o = "";
                R(r) ? (r = t.media.getAttribute(t.config.attributes.embed.id), o = t.media.getAttribute(t.config.attributes.embed.hash)) : o = function(e) {
                    let t = e.match(/^.*(?:vimeo.com\/|video\/)(?:\d+)(?:\?.*&*h=|\/)+(?<hash>[\d,a-f]+)/);
                    return t ? t.groups.hash : null
                }(r);
                let l = o ? {
                    h: o
                } : {};
                n && Object.assign(a, {
                    controls: !1,
                    sidedock: !1
                });
                let d = eW({
                        loop: t.config.loop.active,
                        autoplay: t.autoplay,
                        muted: t.muted,
                        gesture: "media",
                        playsinline: !this.config.fullscreen.iosNative,
                        ...l,
                        ...a
                    }),
                    c = R(e = r) ? null : P(Number(e)) ? e : e.match(/^.*(vimeo.com\/|video\/)(\d+).*/) ? RegExp.$2 : e,
                    h = Z("iframe"),
                    u = eA(t.config.urls.vimeo.iframe, c, d);
                if (h.setAttribute("src", u), h.setAttribute("allowfullscreen", ""), h.setAttribute("allow", "autoplay; fullscreen; picture-in-picture; encrypted-media; accelerometer; gyroscope"), R(s) || h.setAttribute("referrerPolicy", s), n || !i.customControls) h.setAttribute("data-poster", t.poster), t.media = ei(h, t.media);
                else {
                    let p = Z("div", {
                        class: t.config.classNames.embedContainer,
                        "data-poster": t.poster
                    });
                    p.appendChild(h), t.media = ei(p, t.media)
                }
                i.customControls || ez(eA(t.config.urls.vimeo.api, u)).then(e => {
                    !R(e) && e.thumbnail_url && eX.setPoster.call(t, e.thumbnail_url).catch(() => {})
                }), t.embed = new window.Vimeo.Player(h, {
                    autopause: t.config.autopause,
                    muted: t.muted
                }), t.media.paused = !0, t.media.currentTime = 0, t.supported.ui && t.embed.disableTextTrack(), t.media.play = () => (e6.call(t, !0), t.embed.play()), t.media.pause = () => (e6.call(t, !1), t.embed.pause()), t.media.stop = () => {
                    t.pause(), t.currentTime = 0
                };
                let {
                    currentTime: f
                } = t.media;
                Object.defineProperty(t.media, "currentTime", {
                    get: () => f,
                    set(e) {
                        let {
                            embed: i,
                            media: n,
                            paused: s,
                            volume: a
                        } = t, r = s && !i.hasPlayed;
                        n.seeking = !0, ey.call(t, n, "seeking"), Promise.resolve(r && i.setVolume(0)).then(() => i.setCurrentTime(e)).then(() => r && i.pause()).then(() => r && i.setVolume(a)).catch(() => {})
                    }
                });
                let m = t.config.speed.selected;
                Object.defineProperty(t.media, "playbackRate", {
                    get: () => m,
                    set(e) {
                        t.embed.setPlaybackRate(e).then(() => {
                            m = e, ey.call(t, t.media, "ratechange")
                        }).catch(() => {
                            t.options.speed = [1]
                        })
                    }
                });
                let {
                    volume: g
                } = t.config;
                Object.defineProperty(t.media, "volume", {
                    get: () => g,
                    set(e) {
                        t.embed.setVolume(e).then(() => {
                            g = e, ey.call(t, t.media, "volumechange")
                        })
                    }
                });
                let {
                    muted: v
                } = t.config;
                Object.defineProperty(t.media, "muted", {
                    get: () => v,
                    set(e) {
                        let i = !!I(e) && e;
                        t.embed.setVolume(i ? 0 : t.config.volume).then(() => {
                            v = i, ey.call(t, t.media, "volumechange")
                        })
                    }
                });
                let y, {
                    loop: $
                } = t.config;
                Object.defineProperty(t.media, "loop", {
                    get: () => $,
                    set(e) {
                        let i = I(e) ? e : t.config.loop.active;
                        t.embed.setLoop(i).then(() => {
                            $ = i
                        })
                    }
                }), t.embed.getVideoUrl().then(e => {
                    y = e, eB.setDownloadUrl.call(t)
                }).catch(e => {
                    this.debug.warn(e)
                }), Object.defineProperty(t.media, "currentSrc", {
                    get: () => y
                }), Object.defineProperty(t.media, "ended", {
                    get: () => t.currentTime === t.duration
                }), Promise.all([t.embed.getVideoWidth(), t.embed.getVideoHeight()]).then(e => {
                    let [i, n] = e;
                    t.embed.ratio = eD(i, n), eS.call(this)
                }), t.embed.setAutopause(t.config.autopause).then(e => {
                    t.config.autopause = e
                }), t.embed.getVideoTitle().then(e => {
                    t.config.title = e, eX.setTitle.call(this)
                }), t.embed.getCurrentTime().then(e => {
                    f = e, ey.call(t, t.media, "timeupdate")
                }), t.embed.getDuration().then(e => {
                    t.media.duration = e, ey.call(t, t.media, "durationchange")
                }), t.embed.getTextTracks().then(e => {
                    t.media.textTracks = e, e1.setup.call(t)
                }), t.embed.on("cuechange", ({
                    cues: e = []
                }) => {
                    let i = e.map(e => (function(e) {
                        let t = document.createDocumentFragment(),
                            i = document.createElement("div");
                        return t.appendChild(i), i.innerHTML = e, t.firstChild.innerText
                    })(e.text));
                    e1.updateCues.call(t, i)
                }), t.embed.on("loaded", () => {
                    t.embed.getPaused().then(e => {
                        e6.call(t, !e), e || ey.call(t, t.media, "playing")
                    }), H(t.embed.element) && t.supported.ui && t.embed.element.setAttribute("tabindex", -1)
                }), t.embed.on("bufferstart", () => {
                    ey.call(t, t.media, "waiting")
                }), t.embed.on("bufferend", () => {
                    ey.call(t, t.media, "playing")
                }), t.embed.on("play", () => {
                    e6.call(t, !0), ey.call(t, t.media, "playing")
                }), t.embed.on("pause", () => {
                    e6.call(t, !1)
                }), t.embed.on("timeupdate", e => {
                    t.media.seeking = !1, f = e.seconds, ey.call(t, t.media, "timeupdate")
                }), t.embed.on("progress", e => {
                    t.media.buffered = e.percent, ey.call(t, t.media, "progress"), 1 === parseInt(e.percent, 10) && ey.call(t, t.media, "canplaythrough"), t.embed.getDuration().then(e => {
                        e !== t.media.duration && (t.media.duration = e, ey.call(t, t.media, "durationchange"))
                    })
                }), t.embed.on("seeked", () => {
                    t.media.seeking = !1, ey.call(t, t.media, "seeked")
                }), t.embed.on("ended", () => {
                    t.media.paused = !0, ey.call(t, t.media, "ended")
                }), t.embed.on("error", e => {
                    t.media.error = e, ey.call(t, t.media, "error")
                }), i.customControls && setTimeout(() => eX.build.call(t), 0)
            }
        };

        function eU(e) {
            e && !this.embed.hasPlayed && (this.embed.hasPlayed = !0), this.media.paused === e && (this.media.paused = !e, ey.call(this, this.media, e ? "play" : "pause"))
        }
        let eK = {
                setup() {
                    if (ea(this.elements.wrapper, this.config.classNames.embed, !0), A(window.YT) && O(window.YT.Player)) eK.ready.call(this);
                    else {
                        let e = window.onYouTubeIframeAPIReady;
                        window.onYouTubeIframeAPIReady = () => {
                            O(e) && e(), eK.ready.call(this)
                        }, e7(this.config.urls.youtube.sdk).catch(e => {
                            this.debug.warn("YouTube API failed to load", e)
                        })
                    }
                },
                getTitle(e) {
                    ez(eA(this.config.urls.youtube.api, e)).then(e => {
                        if (A(e)) {
                            let {
                                title: t,
                                height: i,
                                width: n
                            } = e;
                            this.config.title = t, eX.setTitle.call(this), this.embed.ratio = eD(n, i)
                        }
                        eS.call(this)
                    }).catch(() => {
                        eS.call(this)
                    })
                },
                ready() {
                    var e, t;
                    let i = this,
                        n = i.config.youtube,
                        s = i.media && i.media.getAttribute("id");
                    if (!R(s) && s.startsWith("youtube-")) return;
                    let a = i.media.getAttribute("src");
                    R(a) && (a = i.media.getAttribute(this.config.attributes.embed.id));
                    let r = R(e = a) ? null : e.match(/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/) ? RegExp.$2 : e,
                        o = Z("div", {
                            id: `${i.provider}-${Math.floor(1e4*Math.random())}`,
                            "data-poster": n.customControls ? i.poster : void 0
                        });
                    if (i.media = ei(o, i.media), n.customControls) {
                        let l = e => `https://i.ytimg.com/vi/${r}/${e}default.jpg`;
                        e5(l("maxres"), 121).catch(() => e5(l("sd"), 121)).catch(() => e5(l("hq"))).then(e => eX.setPoster.call(i, e.src)).then(e => {
                            e.includes("maxres") || (i.elements.poster.style.backgroundSize = "cover")
                        }).catch(() => {})
                    }
                    i.embed = new window.YT.Player(i.media, {
                        videoId: r,
                        host: (t = n).noCookie ? "https://www.youtube-nocookie.com" : "http:" === window.location.protocol ? "http://www.youtube.com" : void 0,
                        playerVars: U({}, {
                            autoplay: i.config.autoplay ? 1 : 0,
                            hl: i.config.hl,
                            controls: i.supported.ui && n.customControls ? 0 : 1,
                            disablekb: 1,
                            playsinline: i.config.fullscreen.iosNative ? 0 : 1,
                            cc_load_policy: i.captions.active ? 1 : 0,
                            cc_lang_pref: i.config.captions.language,
                            widget_referrer: window ? window.location.href : null
                        }, n),
                        events: {
                            onError(e) {
                                if (!i.media.error) {
                                    let t = e.data;
                                    i.media.error = {
                                        code: t,
                                        message: ({
                                            2: "The request contains an invalid parameter value. For example, this error occurs if you specify a video ID that does not have 11 characters, or if the video ID contains invalid characters, such as exclamation points or asterisks.",
                                            5: "The requested content cannot be played in an HTML5 player or another error related to the HTML5 player has occurred.",
                                            100: "The video requested was not found. This error occurs when a video has been removed (for any reason) or has been marked as private.",
                                            101: "The owner of the requested video does not allow it to be played in embedded players.",
                                            150: "The owner of the requested video does not allow it to be played in embedded players."
                                        })[t] || "An unknown error occured"
                                    }, ey.call(i, i.media, "error")
                                }
                            },
                            onPlaybackRateChange(e) {
                                let t = e.target;
                                i.media.playbackRate = t.getPlaybackRate(), ey.call(i, i.media, "ratechange")
                            },
                            onReady(e) {
                                if (O(i.media.play)) return;
                                let t = e.target;
                                eK.getTitle.call(i, r), i.media.play = () => {
                                    eU.call(i, !0), t.playVideo()
                                }, i.media.pause = () => {
                                    eU.call(i, !1), t.pauseVideo()
                                }, i.media.stop = () => {
                                    t.stopVideo()
                                }, i.media.duration = t.getDuration(), i.media.paused = !0, i.media.currentTime = 0, Object.defineProperty(i.media, "currentTime", {
                                    get: () => Number(t.getCurrentTime()),
                                    set(e) {
                                        i.paused && !i.embed.hasPlayed && i.embed.mute(), i.media.seeking = !0, ey.call(i, i.media, "seeking"), t.seekTo(e)
                                    }
                                }), Object.defineProperty(i.media, "playbackRate", {
                                    get: () => t.getPlaybackRate(),
                                    set(e) {
                                        t.setPlaybackRate(e)
                                    }
                                });
                                let {
                                    volume: s
                                } = i.config;
                                Object.defineProperty(i.media, "volume", {
                                    get: () => s,
                                    set(e) {
                                        s = e, t.setVolume(100 * s), ey.call(i, i.media, "volumechange")
                                    }
                                });
                                let {
                                    muted: a
                                } = i.config;
                                Object.defineProperty(i.media, "muted", {
                                    get: () => a,
                                    set(e) {
                                        let n = I(e) ? e : a;
                                        a = n, t[n ? "mute" : "unMute"](), t.setVolume(100 * s), ey.call(i, i.media, "volumechange")
                                    }
                                }), Object.defineProperty(i.media, "currentSrc", {
                                    get: () => t.getVideoUrl()
                                }), Object.defineProperty(i.media, "ended", {
                                    get: () => i.currentTime === i.duration
                                });
                                let o = t.getAvailablePlaybackRates();
                                i.options.speed = o.filter(e => i.config.speed.options.includes(e)), i.supported.ui && n.customControls && i.media.setAttribute("tabindex", -1), ey.call(i, i.media, "timeupdate"), ey.call(i, i.media, "durationchange"), clearInterval(i.timers.buffering), i.timers.buffering = setInterval(() => {
                                    i.media.buffered = t.getVideoLoadedFraction(), (null === i.media.lastBuffered || i.media.lastBuffered < i.media.buffered) && ey.call(i, i.media, "progress"), i.media.lastBuffered = i.media.buffered, 1 === i.media.buffered && (clearInterval(i.timers.buffering), ey.call(i, i.media, "canplaythrough"))
                                }, 200), n.customControls && setTimeout(() => eX.build.call(i), 50)
                            },
                            onStateChange(e) {
                                let t = e.target;
                                switch (clearInterval(i.timers.playing), i.media.seeking && [1, 2].includes(e.data) && (i.media.seeking = !1, ey.call(i, i.media, "seeked")), e.data) {
                                    case -1:
                                        ey.call(i, i.media, "timeupdate"), i.media.buffered = t.getVideoLoadedFraction(), ey.call(i, i.media, "progress");
                                        break;
                                    case 0:
                                        eU.call(i, !1), i.media.loop ? (t.stopVideo(), t.playVideo()) : ey.call(i, i.media, "ended");
                                        break;
                                    case 1:
                                        n.customControls && !i.config.autoplay && i.media.paused && !i.embed.hasPlayed ? i.media.pause() : (eU.call(i, !0), ey.call(i, i.media, "playing"), i.timers.playing = setInterval(() => {
                                            ey.call(i, i.media, "timeupdate")
                                        }, 50), i.media.duration !== t.getDuration() && (i.media.duration = t.getDuration(), ey.call(i, i.media, "durationchange")));
                                        break;
                                    case 2:
                                        i.muted || i.embed.unMute(), eU.call(i, !1);
                                        break;
                                    case 3:
                                        ey.call(i, i.media, "waiting")
                                }
                                ey.call(i, i.elements.container, "statechange", !1, {
                                    code: e.data
                                })
                            }
                        }
                    })
                }
            },
            eQ = {
                setup() {
                    this.media ? (ea(this.elements.container, this.config.classNames.type.replace("{0}", this.type), !0), ea(this.elements.container, this.config.classNames.provider.replace("{0}", this.provider), !0), this.isEmbed && ea(this.elements.container, this.config.classNames.type.replace("{0}", "video"), !0), this.isVideo && (this.elements.wrapper = Z("div", {
                        class: this.config.classNames.video
                    }), K(this.media, this.elements.wrapper), this.elements.poster = Z("div", {
                        class: this.config.classNames.poster
                    }), this.elements.wrapper.appendChild(this.elements.poster)), this.isHTML5 ? eM.setup.call(this) : this.isYouTube ? eK.setup.call(this) : this.isVimeo && eG.setup.call(this)) : this.debug.warn("No media element found!")
                }
            },
            eZ = e => {
                let t = [];
                return e.split(/\r\n\r\n|\n\n|\r\r/).forEach(e => {
                    let i = {};
                    e.split(/\r\n|\n|\r/).forEach(e => {
                        if (P(i.startTime)) {
                            if (!R(e.trim()) && R(i.text)) {
                                let t = e.trim().split("#xywh=");
                                [i.text] = t, t[1] && ([i.x, i.y, i.w, i.h] = t[1].split(","))
                            }
                        } else {
                            let n = e.match(/([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})( ?--> ?)([0-9]{2})?:?([0-9]{2}):([0-9]{2}).([0-9]{2,3})/);
                            n && (i.startTime = 60 * Number(n[1] || 0) * 60 + 60 * Number(n[2]) + Number(n[3]) + Number(`0.${n[4]}`), i.endTime = 60 * Number(n[6] || 0) * 60 + 60 * Number(n[7]) + Number(n[8]) + Number(`0.${n[9]}`))
                        }
                    }), i.text && t.push(i)
                }), t
            },
            eJ = (e, t) => {
                let i = {};
                return e > t.width / t.height ? (i.width = t.width, i.height = 1 / e * t.width) : (i.height = t.height, i.width = e * t.height), i
            };
        class te {
            constructor(t) {
                e(this, "load", () => {
                    this.player.elements.display.seekTooltip && (this.player.elements.display.seekTooltip.hidden = this.enabled), this.enabled && this.getThumbnails().then(() => {
                        this.enabled && (this.render(), this.determineContainerAutoSizing(), this.loaded = !0)
                    })
                }), e(this, "getThumbnails", () => new Promise(e => {
                    let {
                        src: t
                    } = this.player.config.previewThumbnails;
                    if (R(t)) throw Error("Missing previewThumbnails.src config attribute");
                    let i = () => {
                        this.thumbnails.sort((e, t) => e.height - t.height), this.player.debug.log("Preview thumbnails", this.thumbnails), e()
                    };
                    if (O(t)) t(e => {
                        this.thumbnails = e, i()
                    });
                    else {
                        let n = (L(t) ? [t] : t).map(e => this.getThumbnail(e));
                        Promise.all(n).then(i)
                    }
                })), e(this, "getThumbnail", e => new Promise(t => {
                    ez(e).then(i => {
                        let n = {
                            frames: eZ(i),
                            height: null,
                            urlPrefix: ""
                        };
                        n.frames[0].text.startsWith("/") || n.frames[0].text.startsWith("http://") || n.frames[0].text.startsWith("https://") || (n.urlPrefix = e.substring(0, e.lastIndexOf("/") + 1));
                        let s = new Image;
                        s.onload = () => {
                            n.height = s.naturalHeight, n.width = s.naturalWidth, this.thumbnails.push(n), t()
                        }, s.src = n.urlPrefix + n.frames[0].text
                    })
                })), e(this, "startMove", e => {
                    if (this.loaded && Y(e) && ["touchmove", "mousemove"].includes(e.type) && this.player.media.duration) {
                        if ("touchmove" === e.type) this.seekTime = this.player.media.duration * (this.player.elements.inputs.seek.value / 100);
                        else {
                            let t = this.player.elements.progress.getBoundingClientRect(),
                                i = 100 / t.width * (e.pageX - t.left);
                            this.seekTime = this.player.media.duration * (i / 100), this.seekTime < 0 && (this.seekTime = 0), this.seekTime > this.player.media.duration - 1 && (this.seekTime = this.player.media.duration - 1), this.mousePosX = e.pageX, this.elements.thumb.time.innerText = eY(this.seekTime)
                        }
                        this.showImageAtCurrentTime()
                    }
                }), e(this, "endMove", () => {
                    this.toggleThumbContainer(!1, !0)
                }), e(this, "startScrubbing", e => {
                    (M(e.button) || !1 === e.button || 0 === e.button) && (this.mouseDown = !0, this.player.media.duration && (this.toggleScrubbingContainer(!0), this.toggleThumbContainer(!1, !0), this.showImageAtCurrentTime()))
                }), e(this, "endScrubbing", () => {
                    this.mouseDown = !1, Math.ceil(this.lastTime) === Math.ceil(this.player.media.currentTime) ? this.toggleScrubbingContainer(!1) : ev.call(this.player, this.player.media, "timeupdate", () => {
                        this.mouseDown || this.toggleScrubbingContainer(!1)
                    })
                }), e(this, "listeners", () => {
                    this.player.on("play", () => {
                        this.toggleThumbContainer(!1, !0)
                    }), this.player.on("seeked", () => {
                        this.toggleThumbContainer(!1)
                    }), this.player.on("timeupdate", () => {
                        this.lastTime = this.player.media.currentTime
                    })
                }), e(this, "render", () => {
                    this.elements.thumb.container = Z("div", {
                        class: this.player.config.classNames.previewThumbnails.thumbContainer
                    }), this.elements.thumb.imageContainer = Z("div", {
                        class: this.player.config.classNames.previewThumbnails.imageContainer
                    }), this.elements.thumb.container.appendChild(this.elements.thumb.imageContainer);
                    let e = Z("div", {
                        class: this.player.config.classNames.previewThumbnails.timeContainer
                    });
                    this.elements.thumb.time = Z("span", {}, "00:00"), e.appendChild(this.elements.thumb.time), this.elements.thumb.container.appendChild(e), H(this.player.elements.progress) && this.player.elements.progress.appendChild(this.elements.thumb.container), this.elements.scrubbing.container = Z("div", {
                        class: this.player.config.classNames.previewThumbnails.scrubbingContainer
                    }), this.player.elements.wrapper.appendChild(this.elements.scrubbing.container)
                }), e(this, "destroy", () => {
                    this.elements.thumb.container && this.elements.thumb.container.remove(), this.elements.scrubbing.container && this.elements.scrubbing.container.remove()
                }), e(this, "showImageAtCurrentTime", () => {
                    this.mouseDown ? this.setScrubbingContainerSize() : this.setThumbContainerSizeAndPos();
                    let e = this.thumbnails[0].frames.findIndex(e => this.seekTime >= e.startTime && this.seekTime <= e.endTime),
                        t = e >= 0,
                        i = 0;
                    this.mouseDown || this.toggleThumbContainer(t), t && (this.thumbnails.forEach((t, n) => {
                        this.loadedImages.includes(t.frames[e].text) && (i = n)
                    }), e !== this.showingThumb && (this.showingThumb = e, this.loadImage(i)))
                }), e(this, "loadImage", (e = 0) => {
                    let t = this.showingThumb,
                        i = this.thumbnails[e],
                        {
                            urlPrefix: n
                        } = i,
                        s = i.frames[t],
                        a = i.frames[t].text,
                        r = n + a;
                    if (this.currentImageElement && this.currentImageElement.dataset.filename === a) this.showImage(this.currentImageElement, s, e, t, a, !1), this.currentImageElement.dataset.index = t, this.removeOldImages(this.currentImageElement);
                    else {
                        this.loadingImage && this.usingSprites && (this.loadingImage.onload = null);
                        let o = new Image;
                        o.src = r, o.dataset.index = t, o.dataset.filename = a, this.showingThumbFilename = a, this.player.debug.log(`Loading image: ${r}`), o.onload = () => this.showImage(o, s, e, t, a, !0), this.loadingImage = o, this.removeOldImages(o)
                    }
                }), e(this, "showImage", (e, t, i, n, s, a = !0) => {
                    this.player.debug.log(`Showing thumb: ${s}. num: ${n}. qual: ${i}. newimg: ${a}`), this.setImageSizeAndOffset(e, t), a && (this.currentImageContainer.appendChild(e), this.currentImageElement = e, this.loadedImages.includes(s) || this.loadedImages.push(s)), this.preloadNearby(n, !0).then(this.preloadNearby(n, !1)).then(this.getHigherQuality(i, e, t, s))
                }), e(this, "removeOldImages", e => {
                    Array.from(this.currentImageContainer.children).forEach(t => {
                        if ("img" !== t.tagName.toLowerCase()) return;
                        let i = this.usingSprites ? 500 : 1e3;
                        if (t.dataset.index !== e.dataset.index && !t.dataset.deleting) {
                            t.dataset.deleting = !0;
                            let {
                                currentImageContainer: n
                            } = this;
                            setTimeout(() => {
                                n.removeChild(t), this.player.debug.log(`Removing thumb: ${t.dataset.filename}`)
                            }, i)
                        }
                    })
                }), e(this, "preloadNearby", (e, t = !0) => new Promise(i => {
                    setTimeout(() => {
                        let n = this.thumbnails[0].frames[e].text;
                        if (this.showingThumbFilename === n) {
                            let s;
                            s = t ? this.thumbnails[0].frames.slice(e) : this.thumbnails[0].frames.slice(0, e).reverse();
                            let a = !1;
                            s.forEach(e => {
                                let t = e.text;
                                if (t !== n && !this.loadedImages.includes(t)) {
                                    a = !0, this.player.debug.log(`Preloading thumb filename: ${t}`);
                                    let {
                                        urlPrefix: s
                                    } = this.thumbnails[0], r = new Image;
                                    r.src = s + t, r.onload = () => {
                                        this.player.debug.log(`Preloaded thumb filename: ${t}`), this.loadedImages.includes(t) || this.loadedImages.push(t), i()
                                    }
                                }
                            }), a || i()
                        }
                    }, 300)
                })), e(this, "getHigherQuality", (e, t, i, n) => {
                    if (e < this.thumbnails.length - 1) {
                        let s = t.naturalHeight;
                        this.usingSprites && (s = i.h), s < this.thumbContainerHeight && setTimeout(() => {
                            this.showingThumbFilename === n && (this.player.debug.log(`Showing higher quality thumb for: ${n}`), this.loadImage(e + 1))
                        }, 300)
                    }
                }), e(this, "toggleThumbContainer", (e = !1, t = !1) => {
                    let i = this.player.config.classNames.previewThumbnails.thumbContainerShown;
                    this.elements.thumb.container.classList.toggle(i, e), !e && t && (this.showingThumb = null, this.showingThumbFilename = null)
                }), e(this, "toggleScrubbingContainer", (e = !1) => {
                    let t = this.player.config.classNames.previewThumbnails.scrubbingContainerShown;
                    this.elements.scrubbing.container.classList.toggle(t, e), e || (this.showingThumb = null, this.showingThumbFilename = null)
                }), e(this, "determineContainerAutoSizing", () => {
                    (this.elements.thumb.imageContainer.clientHeight > 20 || this.elements.thumb.imageContainer.clientWidth > 20) && (this.sizeSpecifiedInCSS = !0)
                }), e(this, "setThumbContainerSizeAndPos", () => {
                    if (this.sizeSpecifiedInCSS) {
                        if (this.elements.thumb.imageContainer.clientHeight > 20 && this.elements.thumb.imageContainer.clientWidth < 20) {
                            let e = Math.floor(this.elements.thumb.imageContainer.clientHeight * this.thumbAspectRatio);
                            this.elements.thumb.imageContainer.style.width = `${e}px`
                        } else if (this.elements.thumb.imageContainer.clientHeight < 20 && this.elements.thumb.imageContainer.clientWidth > 20) {
                            let t = Math.floor(this.elements.thumb.imageContainer.clientWidth / this.thumbAspectRatio);
                            this.elements.thumb.imageContainer.style.height = `${t}px`
                        }
                    } else {
                        let i = Math.floor(this.thumbContainerHeight * this.thumbAspectRatio);
                        this.elements.thumb.imageContainer.style.height = `${this.thumbContainerHeight}px`, this.elements.thumb.imageContainer.style.width = `${i}px`
                    }
                    this.setThumbContainerPos()
                }), e(this, "setThumbContainerPos", () => {
                    let e = this.player.elements.progress.getBoundingClientRect(),
                        t = this.player.elements.container.getBoundingClientRect(),
                        {
                            container: i
                        } = this.elements.thumb,
                        n = t.left - e.left + 10,
                        s = t.right - e.left - i.clientWidth - 10,
                        a = this.mousePosX - e.left - i.clientWidth / 2;
                    a < n && (a = n), a > s && (a = s), i.style.left = `${a}px`
                }), e(this, "setScrubbingContainerSize", () => {
                    let {
                        width: e,
                        height: t
                    } = eJ(this.thumbAspectRatio, {
                        width: this.player.media.clientWidth,
                        height: this.player.media.clientHeight
                    });
                    this.elements.scrubbing.container.style.width = `${e}px`, this.elements.scrubbing.container.style.height = `${t}px`
                }), e(this, "setImageSizeAndOffset", (e, t) => {
                    if (!this.usingSprites) return;
                    let i = this.thumbContainerHeight / t.h;
                    e.style.height = e.naturalHeight * i + "px", e.style.width = e.naturalWidth * i + "px", e.style.left = `-${t.x*i}px`, e.style.top = `-${t.y*i}px`
                }), this.player = t, this.thumbnails = [], this.loaded = !1, this.lastMouseMoveTime = Date.now(), this.mouseDown = !1, this.loadedImages = [], this.elements = {
                    thumb: {},
                    scrubbing: {}
                }, this.load()
            }
            get enabled() {
                return this.player.isHTML5 && this.player.isVideo && this.player.config.previewThumbnails.enabled
            }
            get currentImageContainer() {
                return this.mouseDown ? this.elements.scrubbing.container : this.elements.thumb.imageContainer
            }
            get usingSprites() {
                return Object.keys(this.thumbnails[0].frames[0]).includes("w")
            }
            get thumbAspectRatio() {
                return this.usingSprites ? this.thumbnails[0].frames[0].w / this.thumbnails[0].frames[0].h : this.thumbnails[0].width / this.thumbnails[0].height
            }
            get thumbContainerHeight() {
                if (this.mouseDown) {
                    let {
                        height: e
                    } = eJ(this.thumbAspectRatio, {
                        width: this.player.media.clientWidth,
                        height: this.player.media.clientHeight
                    });
                    return e
                }
                return this.sizeSpecifiedInCSS ? this.elements.thumb.imageContainer.clientHeight : Math.floor(this.player.media.clientWidth / this.thumbAspectRatio / 4)
            }
            get currentImageElement() {
                return this.mouseDown ? this.currentScrubbingImageElement : this.currentThumbnailImageElement
            }
            set currentImageElement(e) {
                this.mouseDown ? this.currentScrubbingImageElement = e : this.currentThumbnailImageElement = e
            }
        }
        let tt = {
            insertElements(e, t) {
                L(t) ? J(e, this.media, {
                    src: t
                }) : N(t) && t.forEach(t => {
                    J(e, this.media, t)
                })
            },
            change(e) {
                G(e, "sources.length") ? (eM.cancelRequests.call(this), this.destroy.call(this, () => {
                    this.options.quality = [], ee(this.media), this.media = null, H(this.elements.container) && this.elements.container.removeAttribute("class");
                    let {
                        sources: t,
                        type: i
                    } = e, [{
                        provider: n = eR.html5,
                        src: s
                    }] = t;
                    Object.assign(this, {
                        provider: n,
                        type: i,
                        supported: eu.check(i, n, this.config.playsinline),
                        media: Z("html5" === n ? i : "div", "html5" === n ? {} : {
                            src: s
                        })
                    }), this.elements.container.appendChild(this.media), I(e.autoplay) && (this.config.autoplay = e.autoplay), this.isHTML5 && (this.config.crossorigin && this.media.setAttribute("crossorigin", ""), this.config.autoplay && this.media.setAttribute("autoplay", ""), R(e.poster) || (this.poster = e.poster), this.config.loop.active && this.media.setAttribute("loop", ""), this.config.muted && this.media.setAttribute("muted", ""), this.config.playsinline && this.media.setAttribute("playsinline", "")), eX.addStyleHook.call(this), this.isHTML5 && tt.insertElements.call(this, "source", t), this.config.title = e.title, eQ.setup.call(this), this.isHTML5 && Object.keys(e).includes("tracks") && tt.insertElements.call(this, "track", e.tracks), (this.isHTML5 || this.isEmbed && !this.supported.ui) && eX.build.call(this), this.isHTML5 && this.media.load(), R(e.previewThumbnails) || (Object.assign(this.config.previewThumbnails, e.previewThumbnails), this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), this.config.previewThumbnails.enabled && (this.previewThumbnails = new te(this))), this.fullscreen.update()
                }, !0)) : this.debug.warn("Invalid source format")
            }
        };
        class ti {
            constructor(t, i) {
                if (e(this, "play", () => O(this.media.play) ? (this.ads && this.ads.enabled && this.ads.managerPromise.then(() => this.ads.play()).catch(() => ew(this.media.play())), this.media.play()) : null), e(this, "pause", () => this.playing && O(this.media.pause) ? this.media.pause() : null), e(this, "togglePlay", e => (I(e) ? e : !this.playing) ? this.play() : this.pause()), e(this, "stop", () => {
                        this.isHTML5 ? (this.pause(), this.restart()) : O(this.media.stop) && this.media.stop()
                    }), e(this, "restart", () => {
                        this.currentTime = 0
                    }), e(this, "rewind", e => {
                        this.currentTime -= P(e) ? e : this.config.seekTime
                    }), e(this, "forward", e => {
                        this.currentTime += P(e) ? e : this.config.seekTime
                    }), e(this, "increaseVolume", e => {
                        let t = this.media.muted ? 0 : this.volume;
                        this.volume = t + (P(e) ? e : 0)
                    }), e(this, "decreaseVolume", e => {
                        this.increaseVolume(-e)
                    }), e(this, "airplay", () => {
                        eu.airplay && this.media.webkitShowPlaybackTargetPicker()
                    }), e(this, "toggleControls", e => {
                        if (this.supported.ui && !this.isAudio) {
                            let t = er(this.elements.container, this.config.classNames.hideControls),
                                i = ea(this.elements.container, this.config.classNames.hideControls, void 0 === e ? void 0 : !e);
                            return i && N(this.config.controls) && this.config.controls.includes("settings") && !R(this.config.settings) && eB.toggleMenu.call(this, !1), i !== t && ey.call(this, this.media, i ? "controlshidden" : "controlsshown"), !i
                        }
                        return !1
                    }), e(this, "on", (e, t) => {
                        em.call(this, this.elements.container, e, t)
                    }), e(this, "once", (e, t) => {
                        ev.call(this, this.elements.container, e, t)
                    }), e(this, "off", (e, t) => {
                        eg(this.elements.container, e, t)
                    }), e(this, "destroy", (e, t = !1) => {
                        if (!this.ready) return;
                        let i = () => {
                            document.body.style.overflow = "", this.embed = null, t ? (Object.keys(this.elements).length && (ee(this.elements.buttons.play), ee(this.elements.captions), ee(this.elements.controls), ee(this.elements.wrapper), this.elements.buttons.play = null, this.elements.captions = null, this.elements.controls = null, this.elements.wrapper = null), O(e) && e()) : (e$.call(this), eM.cancelRequests.call(this), ei(this.elements.original, this.elements.container), ey.call(this, this.elements.original, "destroyed", !0), O(e) && e.call(this.elements.original), this.ready = !1, setTimeout(() => {
                                this.elements = null, this.media = null
                            }, 200))
                        };
                        this.stop(), clearTimeout(this.timers.loading), clearTimeout(this.timers.controls), clearTimeout(this.timers.resized), this.isHTML5 ? (eX.toggleNativeControls.call(this, !0), i()) : this.isYouTube ? (clearInterval(this.timers.buffering), clearInterval(this.timers.playing), null !== this.embed && O(this.embed.destroy) && this.embed.destroy(), i()) : this.isVimeo && (null !== this.embed && this.embed.unload().then(i), setTimeout(i, 200))
                    }), e(this, "supports", e => eu.mime.call(this, e)), this.timers = {}, this.ready = !1, this.loading = !1, this.failed = !1, this.touch = eu.touch, this.media = t, L(this.media) && (this.media = document.querySelectorAll(this.media)), (window.jQuery && this.media instanceof jQuery || z(this.media) || N(this.media)) && (this.media = this.media[0]), this.config = U({}, e3, ti.defaults, i || {}, (() => {
                        try {
                            return JSON.parse(this.media.getAttribute("data-plyr-config"))
                        } catch (e) {
                            return {}
                        }
                    })()), this.elements = {
                        container: null,
                        fullscreen: null,
                        captions: null,
                        buttons: {},
                        display: {},
                        progress: {},
                        inputs: {},
                        settings: {
                            popup: null,
                            menu: null,
                            panels: {},
                            buttons: {}
                        }
                    }, this.captions = {
                        active: null,
                        currentTrack: -1,
                        meta: new WeakMap
                    }, this.fullscreen = {
                        active: !1
                    }, this.options = {
                        speed: [],
                        quality: []
                    }, this.debug = new class e {
                        constructor(e = !1) {
                            this.enabled = window.console && e, this.enabled && this.log("Debugging enabled")
                        }
                        get log() {
                            return this.enabled ? Function.prototype.bind.call(console.log, console) : eV
                        }
                        get warn() {
                            return this.enabled ? Function.prototype.bind.call(console.warn, console) : eV
                        }
                        get error() {
                            return this.enabled ? Function.prototype.bind.call(console.error, console) : eV
                        }
                    }(this.config.debug), this.debug.log("Config", this.config), this.debug.log("Support", eu), M(this.media) || !H(this.media)) return void this.debug.error("Setup failed: no suitable element passed");
                if (this.media.plyr) return void this.debug.warn("Target already setup");
                if (!this.config.enabled) return void this.debug.error("Setup failed: disabled by config");
                if (!eu.check().api) return void this.debug.error("Setup failed: no support");
                let n = this.media.cloneNode(!0);
                n.autoplay = !1, this.elements.original = n;
                let s = this.media.tagName.toLowerCase(),
                    a = null,
                    r = null;
                switch (s) {
                    case "div":
                        if (H(a = this.media.querySelector("iframe"))) {
                            var o;
                            if (r = eq(a.getAttribute("src")), this.provider = (o = r.toString(), /^(https?:\/\/)?(www\.)?(youtube\.com|youtube-nocookie\.com|youtu\.?be)\/.+$/.test(o) ? eR.youtube : /^https?:\/\/player.vimeo.com\/video\/\d{0,9}(?=\b|\/)/.test(o) ? eR.vimeo : null), this.elements.container = this.media, this.media = a, this.elements.container.className = "", r.search.length) {
                                let l = ["1", "true"];
                                l.includes(r.searchParams.get("autoplay")) && (this.config.autoplay = !0), l.includes(r.searchParams.get("loop")) && (this.config.loop.active = !0), this.isYouTube ? (this.config.playsinline = l.includes(r.searchParams.get("playsinline")), this.config.youtube.hl = r.searchParams.get("hl")) : this.config.playsinline = !0
                            }
                        } else this.provider = this.media.getAttribute(this.config.attributes.embed.provider), this.media.removeAttribute(this.config.attributes.embed.provider);
                        if (R(this.provider) || !Object.values(eR).includes(this.provider)) return void this.debug.error("Setup failed: Invalid provider");
                        this.type = ej;
                        break;
                    case "video":
                    case "audio":
                        this.type = s, this.provider = eR.html5, this.media.hasAttribute("crossorigin") && (this.config.crossorigin = !0), this.media.hasAttribute("autoplay") && (this.config.autoplay = !0), (this.media.hasAttribute("playsinline") || this.media.hasAttribute("webkit-playsinline")) && (this.config.playsinline = !0), this.media.hasAttribute("muted") && (this.config.muted = !0), this.media.hasAttribute("loop") && (this.config.loop.active = !0);
                        break;
                    default:
                        return void this.debug.error("Setup failed: unsupported type")
                }
                this.supported = eu.check(this.type, this.provider, this.config.playsinline), this.supported.api ? (this.eventListeners = [], this.listeners = new class t {
                    constructor(t) {
                        e(this, "firstTouch", () => {
                            let {
                                player: e
                            } = this, {
                                elements: t
                            } = e;
                            e.touch = !0, ea(t.container, e.config.classNames.isTouch, !0)
                        }), e(this, "setTabFocus", e => {
                            let {
                                player: t
                            } = this, {
                                elements: i
                            } = t;
                            if (clearTimeout(this.focusTimer), "keydown" === e.type && 9 !== e.which) return;
                            "keydown" === e.type && (this.lastKeyDown = e.timeStamp);
                            let n = e.timeStamp - this.lastKeyDown <= 20;
                            ("focus" !== e.type || n) && ((() => {
                                let e = t.config.classNames.tabFocus;
                                ea(el.call(t, `.${e}`), e, !1)
                            })(), "focusout" !== e.type && (this.focusTimer = setTimeout(() => {
                                let e = document.activeElement;
                                i.container.contains(e) && ea(document.activeElement, t.config.classNames.tabFocus, !0)
                            }, 10)))
                        }), e(this, "global", (e = !0) => {
                            let {
                                player: t
                            } = this;
                            t.config.keyboard.global && ef.call(t, window, "keydown keyup", this.handleKey, e, !1), ef.call(t, document.body, "click", this.toggleMenu, e), ev.call(t, document.body, "touchstart", this.firstTouch), ef.call(t, document.body, "keydown focus blur focusout", this.setTabFocus, e, !1, !0)
                        }), e(this, "container", () => {
                            let {
                                player: e
                            } = this, {
                                config: t,
                                elements: i,
                                timers: n
                            } = e;
                            !t.keyboard.global && t.keyboard.focused && em.call(e, i.container, "keydown keyup", this.handleKey, !1), em.call(e, i.container, "mousemove mouseleave touchstart touchmove enterfullscreen exitfullscreen", t => {
                                let {
                                    controls: s
                                } = i;
                                s && "enterfullscreen" === t.type && (s.pressed = !1, s.hover = !1);
                                let a = 0;
                                ["touchstart", "touchmove", "mousemove"].includes(t.type) && (eX.toggleControls.call(e, !0), a = e.touch ? 3e3 : 2e3), clearTimeout(n.controls), n.controls = setTimeout(() => eX.toggleControls.call(e, !1), a)
                            });
                            let s = () => {
                                    if (!e.isVimeo || e.config.vimeo.premium) return;
                                    let t = i.wrapper,
                                        {
                                            active: n
                                        } = e.fullscreen,
                                        [s, a] = eE.call(e),
                                        r = e8(`aspect-ratio: ${s} / ${a}`);
                                    if (!n) return void(r ? (t.style.width = null, t.style.height = null) : (t.style.maxWidth = null, t.style.margin = null));
                                    let [o, l] = [Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0), Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)], d = o / l > s / a;
                                    r ? (t.style.width = d ? "auto" : "100%", t.style.height = d ? "100%" : "auto") : (t.style.maxWidth = d ? l / a * s + "px" : null, t.style.margin = d ? "0 auto" : null)
                                },
                                a = () => {
                                    clearTimeout(n.resized), n.resized = setTimeout(s, 50)
                                };
                            em.call(e, i.container, "enterfullscreen exitfullscreen", t => {
                                let {
                                    target: n
                                } = e.fullscreen;
                                n === i.container && (!e.isEmbed && R(e.config.ratio) || (s(), ("enterfullscreen" === t.type ? em : eg).call(e, window, "resize", a)))
                            })
                        }), e(this, "media", () => {
                            let {
                                player: e
                            } = this, {
                                elements: t
                            } = e;
                            if (em.call(e, e.media, "timeupdate seeking seeked", t => eB.timeUpdate.call(e, t)), em.call(e, e.media, "durationchange loadeddata loadedmetadata", t => eB.durationUpdate.call(e, t)), em.call(e, e.media, "ended", () => {
                                    e.isHTML5 && e.isVideo && e.config.resetOnEnd && (e.restart(), e.pause())
                                }), em.call(e, e.media, "progress playing seeking seeked", t => eB.updateProgress.call(e, t)), em.call(e, e.media, "volumechange", t => eB.updateVolume.call(e, t)), em.call(e, e.media, "playing play pause ended emptied timeupdate", t => eX.checkPlaying.call(e, t)), em.call(e, e.media, "waiting canplay seeked playing", t => eX.checkLoading.call(e, t)), e.supported.ui && e.config.clickToPlay && !e.isAudio) {
                                let i = ed.call(e, `.${e.config.classNames.video}`);
                                if (!H(i)) return;
                                em.call(e, t.container, "click", n => {
                                    ([t.container, i].includes(n.target) || i.contains(n.target)) && (e.touch && e.config.hideControls || (e.ended ? (this.proxy(n, e.restart, "restart"), this.proxy(n, () => {
                                        ew(e.play())
                                    }, "play")) : this.proxy(n, () => {
                                        ew(e.togglePlay())
                                    }, "play")))
                                })
                            }
                            e.supported.ui && e.config.disableContextMenu && em.call(e, t.wrapper, "contextmenu", e => {
                                e.preventDefault()
                            }, !1), em.call(e, e.media, "volumechange", () => {
                                e.storage.set({
                                    volume: e.volume,
                                    muted: e.muted
                                })
                            }), em.call(e, e.media, "ratechange", () => {
                                eB.updateSetting.call(e, "speed"), e.storage.set({
                                    speed: e.speed
                                })
                            }), em.call(e, e.media, "qualitychange", t => {
                                eB.updateSetting.call(e, "quality", null, t.detail.quality)
                            }), em.call(e, e.media, "ready qualitychange", () => {
                                eB.setDownloadUrl.call(e)
                            });
                            let n = e.config.events.concat(["keyup", "keydown"]).join(" ");
                            em.call(e, e.media, n, i => {
                                let {
                                    detail: n = {}
                                } = i;
                                "error" === i.type && (n = e.media.error), ey.call(e, t.container, i.type, !0, n)
                            })
                        }), e(this, "proxy", (e, t, i) => {
                            let {
                                player: n
                            } = this, s = n.config.listeners[i], a = !0;
                            O(s) && (a = s.call(n, e)), !1 !== a && O(t) && t.call(n, e)
                        }), e(this, "bind", (e, t, i, n, s = !0) => {
                            let {
                                player: a
                            } = this, r = a.config.listeners[n], o = O(r);
                            em.call(a, e, t, e => this.proxy(e, i, n), s && !o)
                        }), e(this, "controls", () => {
                            let {
                                player: e
                            } = this, {
                                elements: t
                            } = e, i = X.isIE ? "change" : "input";
                            if (t.buttons.play && Array.from(t.buttons.play).forEach(t => {
                                    this.bind(t, "click", () => {
                                        ew(e.togglePlay())
                                    }, "play")
                                }), this.bind(t.buttons.restart, "click", e.restart, "restart"), this.bind(t.buttons.rewind, "click", () => {
                                    e.lastSeekTime = Date.now(), e.rewind()
                                }, "rewind"), this.bind(t.buttons.fastForward, "click", () => {
                                    e.lastSeekTime = Date.now(), e.forward()
                                }, "fastForward"), this.bind(t.buttons.mute, "click", () => {
                                    e.muted = !e.muted
                                }, "mute"), this.bind(t.buttons.captions, "click", () => e.toggleCaptions()), this.bind(t.buttons.download, "click", () => {
                                    ey.call(e, e.media, "download")
                                }, "download"), this.bind(t.buttons.fullscreen, "click", () => {
                                    e.fullscreen.toggle()
                                }, "fullscreen"), this.bind(t.buttons.pip, "click", () => {
                                    e.pip = "toggle"
                                }, "pip"), this.bind(t.buttons.airplay, "click", e.airplay, "airplay"), this.bind(t.buttons.settings, "click", t => {
                                    t.stopPropagation(), t.preventDefault(), eB.toggleMenu.call(e, t)
                                }, null, !1), this.bind(t.buttons.settings, "keyup", t => {
                                    let i = t.which;
                                    [13, 32].includes(i) && (13 !== i ? (t.preventDefault(), t.stopPropagation(), eB.toggleMenu.call(e, t)) : eB.focusFirstMenuItem.call(e, null, !0))
                                }, null, !1), this.bind(t.settings.menu, "keydown", t => {
                                    27 === t.which && eB.toggleMenu.call(e, t)
                                }), this.bind(t.inputs.seek, "mousedown mousemove", e => {
                                    let i = t.progress.getBoundingClientRect(),
                                        n = 100 / i.width * (e.pageX - i.left);
                                    e.currentTarget.setAttribute("seek-value", n)
                                }), this.bind(t.inputs.seek, "mousedown mouseup keydown keyup touchstart touchend", t => {
                                    let i = t.currentTarget,
                                        n = t.keyCode ? t.keyCode : t.which,
                                        s = "play-on-seeked";
                                    if (B(t) && 39 !== n && 37 !== n) return;
                                    e.lastSeekTime = Date.now();
                                    let a = i.hasAttribute(s),
                                        r = ["mouseup", "touchend", "keyup"].includes(t.type);
                                    a && r ? (i.removeAttribute(s), ew(e.play())) : !r && e.playing && (i.setAttribute(s, ""), e.pause())
                                }), X.isIos) {
                                let n = el.call(e, 'input[type="range"]');
                                Array.from(n).forEach(e => this.bind(e, i, e => V(e.target)))
                            }
                            this.bind(t.inputs.seek, i, t => {
                                let i = t.currentTarget,
                                    n = i.getAttribute("seek-value");
                                R(n) && (n = i.value), i.removeAttribute("seek-value"), e.currentTime = n / i.max * e.duration
                            }, "seek"), this.bind(t.progress, "mouseenter mouseleave mousemove", t => eB.updateSeekTooltip.call(e, t)), this.bind(t.progress, "mousemove touchmove", t => {
                                let {
                                    previewThumbnails: i
                                } = e;
                                i && i.loaded && i.startMove(t)
                            }), this.bind(t.progress, "mouseleave touchend click", () => {
                                let {
                                    previewThumbnails: t
                                } = e;
                                t && t.loaded && t.endMove(!1, !0)
                            }), this.bind(t.progress, "mousedown touchstart", t => {
                                let {
                                    previewThumbnails: i
                                } = e;
                                i && i.loaded && i.startScrubbing(t)
                            }), this.bind(t.progress, "mouseup touchend", t => {
                                let {
                                    previewThumbnails: i
                                } = e;
                                i && i.loaded && i.endScrubbing(t)
                            }), X.isWebkit && Array.from(el.call(e, 'input[type="range"]')).forEach(t => {
                                this.bind(t, "input", t => eB.updateRangeFill.call(e, t.target))
                            }), e.config.toggleInvert && !H(t.display.duration) && this.bind(t.display.currentTime, "click", () => {
                                0 !== e.currentTime && (e.config.invertTime = !e.config.invertTime, eB.timeUpdate.call(e))
                            }), this.bind(t.inputs.volume, i, t => {
                                e.volume = t.target.value
                            }, "volume"), this.bind(t.controls, "mouseenter mouseleave", i => {
                                t.controls.hover = !e.touch && "mouseenter" === i.type
                            }), t.fullscreen && Array.from(t.fullscreen.children).filter(e => !e.contains(t.container)).forEach(i => {
                                this.bind(i, "mouseenter mouseleave", i => {
                                    t.controls && (t.controls.hover = !e.touch && "mouseenter" === i.type)
                                })
                            }), this.bind(t.controls, "mousedown mouseup touchstart touchend touchcancel", e => {
                                t.controls.pressed = ["mousedown", "touchstart"].includes(e.type)
                            }), this.bind(t.controls, "focusin", () => {
                                let {
                                    config: i,
                                    timers: n
                                } = e;
                                ea(t.controls, i.classNames.noTransition, !0), eX.toggleControls.call(e, !0), setTimeout(() => {
                                    ea(t.controls, i.classNames.noTransition, !1)
                                }, 0);
                                let s = this.touch ? 3e3 : 4e3;
                                clearTimeout(n.controls), n.controls = setTimeout(() => eX.toggleControls.call(e, !1), s)
                            }), this.bind(t.inputs.volume, "wheel", t => {
                                let i = t.webkitDirectionInvertedFromDevice,
                                    [n, s] = [t.deltaX, -t.deltaY].map(e => i ? -e : e),
                                    a = Math.sign(Math.abs(n) > Math.abs(s) ? n : s);
                                e.increaseVolume(a / 50);
                                let {
                                    volume: r
                                } = e.media;
                                (1 === a && r < 1 || -1 === a && r > 0) && t.preventDefault()
                            }, "volume", !1)
                        }), this.player = t, this.lastKey = null, this.focusTimer = null, this.lastKeyDown = null, this.handleKey = this.handleKey.bind(this), this.toggleMenu = this.toggleMenu.bind(this), this.setTabFocus = this.setTabFocus.bind(this), this.firstTouch = this.firstTouch.bind(this)
                    }
                    handleKey(e) {
                        let {
                            player: t
                        } = this, {
                            elements: i
                        } = t, n = e.keyCode ? e.keyCode : e.which, s = "keydown" === e.type, a = s && n === this.lastKey;
                        if (!e.altKey && !e.ctrlKey && !e.metaKey && !e.shiftKey && P(n)) {
                            if (s) {
                                let r = document.activeElement;
                                if (H(r)) {
                                    let {
                                        editable: o
                                    } = t.config.selectors, {
                                        seek: l
                                    } = i.inputs;
                                    if (r !== l && eo(r, o) || 32 === e.which && eo(r, 'button, [role^="menuitem"]')) return
                                }
                                switch ([32, 37, 38, 39, 40, 48, 49, 50, 51, 52, 53, 54, 56, 57, 67, 70, 73, 75, 76, 77, 79].includes(n) && (e.preventDefault(), e.stopPropagation()), n) {
                                    case 48:
                                    case 49:
                                    case 50:
                                    case 51:
                                    case 52:
                                    case 53:
                                    case 54:
                                    case 55:
                                    case 56:
                                    case 57:
                                        a || (t.currentTime = t.duration / 10 * (n - 48));
                                        break;
                                    case 32:
                                    case 75:
                                        a || ew(t.togglePlay());
                                        break;
                                    case 38:
                                        t.increaseVolume(.1);
                                        break;
                                    case 40:
                                        t.decreaseVolume(.1);
                                        break;
                                    case 77:
                                        a || (t.muted = !t.muted);
                                        break;
                                    case 39:
                                        t.forward();
                                        break;
                                    case 37:
                                        t.rewind();
                                        break;
                                    case 70:
                                        t.fullscreen.toggle();
                                        break;
                                    case 67:
                                        a || t.toggleCaptions();
                                        break;
                                    case 76:
                                        t.loop = !t.loop
                                }
                                27 === n && !t.fullscreen.usingNative && t.fullscreen.active && t.fullscreen.toggle(), this.lastKey = n
                            } else this.lastKey = null
                        }
                    }
                    toggleMenu(e) {
                        eB.toggleMenu.call(this.player, e)
                    }
                }(this), this.storage = new eN(this), this.media.plyr = this, H(this.elements.container) || (this.elements.container = Z("div", {
                    tabindex: 0
                }), K(this.media, this.elements.container)), eX.migrateStyles.call(this), eX.addStyleHook.call(this), eQ.setup.call(this), this.config.debug && em.call(this, this.elements.container, this.config.events.join(" "), e => {
                    this.debug.log(`event: ${e.type}`)
                }), this.fullscreen = new e2(this), (this.isHTML5 || this.isEmbed && !this.supported.ui) && eX.build.call(this), this.listeners.container(), this.listeners.global(), this.config.ads.enabled && (this.ads = new class t {
                    constructor(t) {
                        e(this, "load", () => {
                            this.enabled && (A(window.google) && A(window.google.ima) ? this.ready() : e7(this.player.config.urls.googleIMA.sdk).then(() => {
                                this.ready()
                            }).catch(() => {
                                this.trigger("error", Error("Google IMA SDK failed to load"))
                            }))
                        }), e(this, "ready", () => {
                            var e;
                            this.enabled || ((e = this).manager && e.manager.destroy(), e.elements.displayContainer && e.elements.displayContainer.destroy(), e.elements.container.remove()), this.startSafetyTimer(12e3, "ready()"), this.managerPromise.then(() => {
                                this.clearSafetyTimer("onAdsManagerLoaded()")
                            }), this.listeners(), this.setupIMA()
                        }), e(this, "setupIMA", () => {
                            this.elements.container = Z("div", {
                                class: this.player.config.classNames.ads
                            }), this.player.elements.container.appendChild(this.elements.container), google.ima.settings.setVpaidMode(google.ima.ImaSdkSettings.VpaidMode.ENABLED), google.ima.settings.setLocale(this.player.config.ads.language), google.ima.settings.setDisableCustomPlaybackForIOS10Plus(this.player.config.playsinline), this.elements.displayContainer = new google.ima.AdDisplayContainer(this.elements.container, this.player.media), this.loader = new google.ima.AdsLoader(this.elements.displayContainer), this.loader.addEventListener(google.ima.AdsManagerLoadedEvent.Type.ADS_MANAGER_LOADED, e => this.onAdsManagerLoaded(e), !1), this.loader.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e => this.onAdError(e), !1), this.requestAds()
                        }), e(this, "requestAds", () => {
                            let {
                                container: e
                            } = this.player.elements;
                            try {
                                let t = new google.ima.AdsRequest;
                                t.adTagUrl = this.tagUrl, t.linearAdSlotWidth = e.offsetWidth, t.linearAdSlotHeight = e.offsetHeight, t.nonLinearAdSlotWidth = e.offsetWidth, t.nonLinearAdSlotHeight = e.offsetHeight, t.forceNonLinearFullSlot = !1, t.setAdWillPlayMuted(!this.player.muted), this.loader.requestAds(t)
                            } catch (i) {
                                this.onAdError(i)
                            }
                        }), e(this, "pollCountdown", (e = !1) => {
                            if (!e) return clearInterval(this.countdownTimer), void this.elements.container.removeAttribute("data-badge-text");
                            this.countdownTimer = setInterval(() => {
                                let e = eY(Math.max(this.manager.getRemainingTime(), 0)),
                                    t = `${eO.get("advertisement",this.player.config)} - ${e}`;
                                this.elements.container.setAttribute("data-badge-text", t)
                            }, 100)
                        }), e(this, "onAdsManagerLoaded", e => {
                            if (!this.enabled) return;
                            let t = new google.ima.AdsRenderingSettings;
                            t.restoreCustomPlaybackStateOnAdBreakComplete = !0, t.enablePreloading = !0, this.manager = e.getAdsManager(this.player, t), this.cuePoints = this.manager.getCuePoints(), this.manager.addEventListener(google.ima.AdErrorEvent.Type.AD_ERROR, e => this.onAdError(e)), Object.keys(google.ima.AdEvent.Type).forEach(e => {
                                this.manager.addEventListener(google.ima.AdEvent.Type[e], e => this.onAdEvent(e))
                            }), this.trigger("loaded")
                        }), e(this, "addCuePoints", () => {
                            R(this.cuePoints) || this.cuePoints.forEach(e => {
                                if (0 !== e && -1 !== e && e < this.player.duration) {
                                    let t = this.player.elements.progress;
                                    if (H(t)) {
                                        let i = 100 / this.player.duration * e,
                                            n = Z("span", {
                                                class: this.player.config.classNames.cues
                                            });
                                        n.style.left = `${i.toString()}%`, t.appendChild(n)
                                    }
                                }
                            })
                        }), e(this, "onAdEvent", e => {
                            let {
                                container: t
                            } = this.player.elements, i = e.getAd(), n = e.getAdData();
                            switch ((e => {
                                    ey.call(this.player, this.player.media, `ads${e.replace(/_/g,"").toLowerCase()}`)
                                })(e.type), e.type) {
                                case google.ima.AdEvent.Type.LOADED:
                                    this.trigger("loaded"), this.pollCountdown(!0), i.isLinear() || (i.width = t.offsetWidth, i.height = t.offsetHeight);
                                    break;
                                case google.ima.AdEvent.Type.STARTED:
                                    this.manager.setVolume(this.player.volume);
                                    break;
                                case google.ima.AdEvent.Type.ALL_ADS_COMPLETED:
                                    this.player.ended ? this.loadAds() : this.loader.contentComplete();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_PAUSE_REQUESTED:
                                    this.pauseContent();
                                    break;
                                case google.ima.AdEvent.Type.CONTENT_RESUME_REQUESTED:
                                    this.pollCountdown(), this.resumeContent();
                                    break;
                                case google.ima.AdEvent.Type.LOG:
                                    n.adError && this.player.debug.warn(`Non-fatal ad error: ${n.adError.getMessage()}`)
                            }
                        }), e(this, "onAdError", e => {
                            this.cancel(), this.player.debug.warn("Ads error", e)
                        }), e(this, "listeners", () => {
                            let {
                                container: e
                            } = this.player.elements, t;
                            this.player.on("canplay", () => {
                                this.addCuePoints()
                            }), this.player.on("ended", () => {
                                this.loader.contentComplete()
                            }), this.player.on("timeupdate", () => {
                                t = this.player.currentTime
                            }), this.player.on("seeked", () => {
                                let e = this.player.currentTime;
                                R(this.cuePoints) || this.cuePoints.forEach((i, n) => {
                                    t < i && i < e && (this.manager.discardAdBreak(), this.cuePoints.splice(n, 1))
                                })
                            }), window.addEventListener("resize", () => {
                                this.manager && this.manager.resize(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL)
                            })
                        }), e(this, "play", () => {
                            let {
                                container: e
                            } = this.player.elements;
                            this.managerPromise || this.resumeContent(), this.managerPromise.then(() => {
                                this.manager.setVolume(this.player.volume), this.elements.displayContainer.initialize();
                                try {
                                    this.initialized || (this.manager.init(e.offsetWidth, e.offsetHeight, google.ima.ViewMode.NORMAL), this.manager.start()), this.initialized = !0
                                } catch (t) {
                                    this.onAdError(t)
                                }
                            }).catch(() => {})
                        }), e(this, "resumeContent", () => {
                            this.elements.container.style.zIndex = "", this.playing = !1, ew(this.player.media.play())
                        }), e(this, "pauseContent", () => {
                            this.elements.container.style.zIndex = 3, this.playing = !0, this.player.media.pause()
                        }), e(this, "cancel", () => {
                            this.initialized && this.resumeContent(), this.trigger("error"), this.loadAds()
                        }), e(this, "loadAds", () => {
                            this.managerPromise.then(() => {
                                this.manager && this.manager.destroy(), this.managerPromise = new Promise(e => {
                                    this.on("loaded", e), this.player.debug.log(this.manager)
                                }), this.initialized = !1, this.requestAds()
                            }).catch(() => {})
                        }), e(this, "trigger", (e, ...t) => {
                            let i = this.events[e];
                            N(i) && i.forEach(e => {
                                O(e) && e.apply(this, t)
                            })
                        }), e(this, "on", (e, t) => (N(this.events[e]) || (this.events[e] = []), this.events[e].push(t), this)), e(this, "startSafetyTimer", (e, t) => {
                            this.player.debug.log(`Safety timer invoked from: ${t}`), this.safetyTimer = setTimeout(() => {
                                this.cancel(), this.clearSafetyTimer("startSafetyTimer()")
                            }, e)
                        }), e(this, "clearSafetyTimer", e => {
                            M(this.safetyTimer) || (this.player.debug.log(`Safety timer cleared from: ${e}`), clearTimeout(this.safetyTimer), this.safetyTimer = null)
                        }), this.player = t, this.config = t.config.ads, this.playing = !1, this.initialized = !1, this.elements = {
                            container: null,
                            displayContainer: null
                        }, this.manager = null, this.loader = null, this.cuePoints = null, this.events = {}, this.safetyTimer = null, this.countdownTimer = null, this.managerPromise = new Promise((e, t) => {
                            this.on("loaded", e), this.on("error", t)
                        }), this.load()
                    }
                    get enabled() {
                        let {
                            config: e
                        } = this;
                        return this.player.isHTML5 && this.player.isVideo && e.enabled && (!R(e.publisherId) || F(e.tagUrl))
                    }
                    get tagUrl() {
                        let {
                            config: e
                        } = this;
                        return F(e.tagUrl) ? e.tagUrl : `https://go.aniview.com/api/adserver6/vast/?${eW({AV_PUBLISHERID:"58c25bb0073ef448b1087ad6",AV_CHANNELID:"5a0458dc28a06145e4519d21",AV_URL:window.location.hostname,cb:Date.now(),AV_WIDTH:640,AV_HEIGHT:480,AV_CDIM2:e.publisherId})}`
                    }
                }(this)), this.isHTML5 && this.config.autoplay && this.once("canplay", () => ew(this.play())), this.lastSeekTime = 0, this.config.previewThumbnails.enabled && (this.previewThumbnails = new te(this))) : this.debug.error("Setup failed: no support")
            }
            get isHTML5() {
                return this.provider === eR.html5
            }
            get isEmbed() {
                return this.isYouTube || this.isVimeo
            }
            get isYouTube() {
                return this.provider === eR.youtube
            }
            get isVimeo() {
                return this.provider === eR.vimeo
            }
            get isVideo() {
                return this.type === ej
            }
            get isAudio() {
                return "audio" === this.type
            }
            get playing() {
                return Boolean(this.ready && !this.paused && !this.ended)
            }
            get paused() {
                return Boolean(this.media.paused)
            }
            get stopped() {
                return Boolean(this.paused && 0 === this.currentTime)
            }
            get ended() {
                return Boolean(this.media.ended)
            }
            set currentTime(e) {
                if (!this.duration) return;
                let t = P(e) && e > 0;
                this.media.currentTime = t ? Math.min(e, this.duration) : 0, this.debug.log(`Seeking to ${this.currentTime} seconds`)
            }
            get currentTime() {
                return Number(this.media.currentTime)
            }
            get buffered() {
                let {
                    buffered: e
                } = this.media;
                return P(e) ? e : e && e.length && this.duration > 0 ? e.end(0) / this.duration : 0
            }
            get seeking() {
                return Boolean(this.media.seeking)
            }
            get duration() {
                let e = parseFloat(this.config.duration),
                    t = (this.media || {}).duration,
                    i = P(t) && t !== 1 / 0 ? t : 0;
                return e || i
            }
            set volume(e) {
                let t = e;
                L(t) && (t = Number(t)), P(t) || (t = this.storage.get("volume")), P(t) || ({
                    volume: t
                } = this.config), t > 1 && (t = 1), t < 0 && (t = 0), this.config.volume = t, this.media.volume = t, !R(e) && this.muted && t > 0 && (this.muted = !1)
            }
            get volume() {
                return Number(this.media.volume)
            }
            set muted(e) {
                let t = e;
                I(t) || (t = this.storage.get("muted")), I(t) || (t = this.config.muted), this.config.muted = t, this.media.muted = t
            }
            get muted() {
                return Boolean(this.media.muted)
            }
            get hasAudio() {
                return !this.isHTML5 || !!this.isAudio || Boolean(this.media.mozHasAudio) || Boolean(this.media.webkitAudioDecodedByteCount) || Boolean(this.media.audioTracks && this.media.audioTracks.length)
            }
            set speed(e) {
                let t = null;
                P(e) && (t = e), P(t) || (t = this.storage.get("speed")), P(t) || (t = this.config.speed.selected);
                let {
                    minimumSpeed: i,
                    maximumSpeed: n
                } = this;
                t = function(e = 0, t = 0, i = 255) {
                    return Math.min(Math.max(e, t), i)
                }(t, i, n), this.config.speed.selected = t, setTimeout(() => {
                    this.media && (this.media.playbackRate = t)
                }, 0)
            }
            get speed() {
                return Number(this.media.playbackRate)
            }
            get minimumSpeed() {
                return this.isYouTube ? Math.min(...this.options.speed) : this.isVimeo ? .5 : .0625
            }
            get maximumSpeed() {
                return this.isYouTube ? Math.max(...this.options.speed) : this.isVimeo ? 2 : 16
            }
            set quality(e) {
                let t = this.config.quality,
                    i = this.options.quality;
                if (!i.length) return;
                let n = [!R(e) && Number(e), this.storage.get("quality"), t.selected, t.default].find(P),
                    s = !0;
                if (!i.includes(n)) {
                    let a = eC(i, n);
                    this.debug.warn(`Unsupported quality option: ${n}, using ${a} instead`), n = a, s = !1
                }
                t.selected = n, this.media.quality = n, s && this.storage.set({
                    quality: n
                })
            }
            get quality() {
                return this.media.quality
            }
            set loop(e) {
                let t = I(e) ? e : this.config.loop.active;
                this.config.loop.active = t, this.media.loop = t
            }
            get loop() {
                return Boolean(this.media.loop)
            }
            set source(e) {
                tt.change.call(this, e)
            }
            get source() {
                return this.media.currentSrc
            }
            get download() {
                let {
                    download: e
                } = this.config.urls;
                return F(e) ? e : this.source
            }
            set download(e) {
                F(e) && (this.config.urls.download = e, eB.setDownloadUrl.call(this))
            }
            set poster(e) {
                this.isVideo ? eX.setPoster.call(this, e, !1).catch(() => {}) : this.debug.warn("Poster can only be set for video")
            }
            get poster() {
                return this.isVideo ? this.media.getAttribute("poster") || this.media.getAttribute("data-poster") : null
            }
            get ratio() {
                if (!this.isVideo) return null;
                let e = eT(eE.call(this));
                return N(e) ? e.join(":") : e
            }
            set ratio(e) {
                this.isVideo ? L(e) && ek(e) ? (this.config.ratio = eT(e), eS.call(this)) : this.debug.error(`Invalid aspect ratio specified (${e})`) : this.debug.warn("Aspect ratio can only be set for video")
            }
            set autoplay(e) {
                let t = I(e) ? e : this.config.autoplay;
                this.config.autoplay = t
            }
            get autoplay() {
                return Boolean(this.config.autoplay)
            }
            toggleCaptions(e) {
                e1.toggle.call(this, e, !1)
            }
            set currentTrack(e) {
                e1.set.call(this, e, !1), e1.setup()
            }
            get currentTrack() {
                let {
                    toggled: e,
                    currentTrack: t
                } = this.captions;
                return e ? t : -1
            }
            set language(e) {
                e1.setLanguage.call(this, e, !1)
            }
            get language() {
                return (e1.getCurrentTrack.call(this) || {}).language
            }
            set pip(e) {
                if (!eu.pip) return;
                let t = I(e) ? e : !this.pip;
                O(this.media.webkitSetPresentationMode) && this.media.webkitSetPresentationMode(t ? eF : "inline"), O(this.media.requestPictureInPicture) && (!this.pip && t ? this.media.requestPictureInPicture() : this.pip && !t && document.exitPictureInPicture())
            }
            get pip() {
                return eu.pip ? R(this.media.webkitPresentationMode) ? this.media === document.pictureInPictureElement : this.media.webkitPresentationMode === eF : null
            }
            setPreviewThumbnails(e) {
                this.previewThumbnails && this.previewThumbnails.loaded && (this.previewThumbnails.destroy(), this.previewThumbnails = null), Object.assign(this.config.previewThumbnails, e), this.config.previewThumbnails.enabled && (this.previewThumbnails = new te(this))
            }
            static supported(e, t, i) {
                return eu.check(e, t, i)
            }
            static loadSprite(e, t) {
                return e0(e, t)
            }
            static setup(e, t = {}) {
                let i = null;
                return L(e) ? i = Array.from(document.querySelectorAll(e)) : z(e) ? i = Array.from(e) : N(e) && (i = e.filter(H)), R(i) ? null : i.map(e => new ti(e, t))
            }
        }
        return ti.defaults = JSON.parse(JSON.stringify(o = e3)), ti
    }),
    function(e, t) {
        "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t()
    }(this, function() {
        "use strict";

        function e(e) {
            return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object
        }

        function t(i, n) {
            void 0 === i && (i = {}), void 0 === n && (n = {}), Object.keys(n).forEach(s => {
                void 0 === i[s] ? i[s] = n[s] : e(n[s]) && e(i[s]) && Object.keys(n[s]).length > 0 && t(i[s], n[s])
            })
        }
        let i = {
            body: {},
            addEventListener() {},
            removeEventListener() {},
            activeElement: {
                blur() {},
                nodeName: ""
            },
            querySelector: () => null,
            querySelectorAll: () => [],
            getElementById: () => null,
            createEvent: () => ({
                initEvent() {}
            }),
            createElement: () => ({
                children: [],
                childNodes: [],
                style: {},
                setAttribute() {},
                getElementsByTagName: () => []
            }),
            createElementNS: () => ({}),
            importNode: () => null,
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

        function n() {
            let e = "undefined" != typeof document ? document : {};
            return t(e, i), e
        }
        let s = {
            document: i,
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
                replaceState() {},
                pushState() {},
                go() {},
                back() {}
            },
            CustomEvent: function() {
                return this
            },
            addEventListener() {},
            removeEventListener() {},
            getComputedStyle: () => ({
                getPropertyValue: () => ""
            }),
            Image() {},
            Date() {},
            screen: {},
            setTimeout() {},
            clearTimeout() {},
            matchMedia: () => ({}),
            requestAnimationFrame: e => "undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0),
            cancelAnimationFrame(e) {
                "undefined" != typeof setTimeout && clearTimeout(e)
            }
        };

        function a() {
            let e = "undefined" != typeof window ? window : {};
            return t(e, s), e
        }
        class r extends Array {
            constructor(e) {
                "number" == typeof e ? super(e) : (super(...e || []), function(e) {
                    let t = e.__proto__;
                    Object.defineProperty(e, "__proto__", {
                        get: () => t,
                        set(e) {
                            t.__proto__ = e
                        }
                    })
                }(this))
            }
        }

        function o(e) {
            void 0 === e && (e = []);
            let t = [];
            return e.forEach(e => {
                Array.isArray(e) ? t.push(...o(e)) : t.push(e)
            }), t
        }

        function l(e, t) {
            return Array.prototype.filter.call(e, t)
        }

        function d(e, t) {
            let i = a(),
                s = n(),
                o = [];
            if (!t && e instanceof r) return e;
            if (!e) return new r(o);
            if ("string" == typeof e) {
                let l = e.trim();
                if (l.indexOf("<") >= 0 && l.indexOf(">") >= 0) {
                    let d = "div";
                    0 === l.indexOf("<li") && (d = "ul"), 0 === l.indexOf("<tr") && (d = "tbody"), 0 !== l.indexOf("<td") && 0 !== l.indexOf("<th") || (d = "tr"), 0 === l.indexOf("<tbody") && (d = "table"), 0 === l.indexOf("<option") && (d = "select");
                    let c = s.createElement(d);
                    c.innerHTML = l;
                    for (let h = 0; h < c.childNodes.length; h += 1) o.push(c.childNodes[h])
                } else o = function(e, t) {
                    if ("string" != typeof e) return [e];
                    let i = [],
                        n = t.querySelectorAll(e);
                    for (let s = 0; s < n.length; s += 1) i.push(n[s]);
                    return i
                }(e.trim(), t || s)
            } else if (e.nodeType || e === i || e === s) o.push(e);
            else if (Array.isArray(e)) {
                if (e instanceof r) return e;
                o = e
            }
            return new r(function(e) {
                let t = [];
                for (let i = 0; i < e.length; i += 1) - 1 === t.indexOf(e[i]) && t.push(e[i]);
                return t
            }(o))
        }
        d.fn = r.prototype;
        let c = {
            addClass: function() {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                let n = o(t.map(e => e.split(" ")));
                return this.forEach(e => {
                    e.classList.add(...n)
                }), this
            },
            removeClass: function() {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                let n = o(t.map(e => e.split(" ")));
                return this.forEach(e => {
                    e.classList.remove(...n)
                }), this
            },
            hasClass: function() {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                let n = o(t.map(e => e.split(" ")));
                return l(this, e => n.filter(t => e.classList.contains(t)).length > 0).length > 0
            },
            toggleClass: function() {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                let n = o(t.map(e => e.split(" ")));
                this.forEach(e => {
                    n.forEach(t => {
                        e.classList.toggle(t)
                    })
                })
            },
            attr: function(e, t) {
                if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
                for (let i = 0; i < this.length; i += 1)
                    if (2 === arguments.length) this[i].setAttribute(e, t);
                    else
                        for (let n in e) this[i][n] = e[n], this[i].setAttribute(n, e[n]);
                return this
            },
            removeAttr: function(e) {
                for (let t = 0; t < this.length; t += 1) this[t].removeAttribute(e);
                return this
            },
            transform: function(e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transform = e;
                return this
            },
            transition: function(e) {
                for (let t = 0; t < this.length; t += 1) this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
                return this
            },
            on: function() {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                let [n, s, a, r] = t;

                function o(e) {
                    let t = e.target;
                    if (!t) return;
                    let i = e.target.dom7EventData || [];
                    if (0 > i.indexOf(e) && i.unshift(e), d(t).is(s)) a.apply(t, i);
                    else {
                        let n = d(t).parents();
                        for (let r = 0; r < n.length; r += 1) d(n[r]).is(s) && a.apply(n[r], i)
                    }
                }

                function l(e) {
                    let t = e && e.target && e.target.dom7EventData || [];
                    0 > t.indexOf(e) && t.unshift(e), a.apply(this, t)
                }
                "function" == typeof t[1] && ([n, a, r] = t, s = void 0), r || (r = !1);
                let c = n.split(" "),
                    h;
                for (let u = 0; u < this.length; u += 1) {
                    let p = this[u];
                    if (s)
                        for (h = 0; h < c.length; h += 1) {
                            let f = c[h];
                            p.dom7LiveListeners || (p.dom7LiveListeners = {}), p.dom7LiveListeners[f] || (p.dom7LiveListeners[f] = []), p.dom7LiveListeners[f].push({
                                listener: a,
                                proxyListener: o
                            }), p.addEventListener(f, o, r)
                        } else
                            for (h = 0; h < c.length; h += 1) {
                                let m = c[h];
                                p.dom7Listeners || (p.dom7Listeners = {}), p.dom7Listeners[m] || (p.dom7Listeners[m] = []), p.dom7Listeners[m].push({
                                    listener: a,
                                    proxyListener: l
                                }), p.addEventListener(m, l, r)
                            }
                }
                return this
            },
            off: function() {
                for (var e = arguments.length, t = Array(e), i = 0; i < e; i++) t[i] = arguments[i];
                let [n, s, a, r] = t;
                "function" == typeof t[1] && ([n, a, r] = t, s = void 0), r || (r = !1);
                let o = n.split(" ");
                for (let l = 0; l < o.length; l += 1) {
                    let d = o[l];
                    for (let c = 0; c < this.length; c += 1) {
                        let h = this[c],
                            u;
                        if (!s && h.dom7Listeners ? u = h.dom7Listeners[d] : s && h.dom7LiveListeners && (u = h.dom7LiveListeners[d]), u && u.length)
                            for (let p = u.length - 1; p >= 0; p -= 1) {
                                let f = u[p];
                                a && f.listener === a || a && f.listener && f.listener.dom7proxy && f.listener.dom7proxy === a ? (h.removeEventListener(d, f.proxyListener, r), u.splice(p, 1)) : a || (h.removeEventListener(d, f.proxyListener, r), u.splice(p, 1))
                            }
                    }
                }
                return this
            },
            trigger: function() {
                let e = a();
                for (var t = arguments.length, i = Array(t), n = 0; n < t; n++) i[n] = arguments[n];
                let s = i[0].split(" "),
                    r = i[1];
                for (let o = 0; o < s.length; o += 1) {
                    let l = s[o];
                    for (let d = 0; d < this.length; d += 1) {
                        let c = this[d];
                        if (e.CustomEvent) {
                            let h = new e.CustomEvent(l, {
                                detail: r,
                                bubbles: !0,
                                cancelable: !0
                            });
                            c.dom7EventData = i.filter((e, t) => t > 0), c.dispatchEvent(h), c.dom7EventData = [], delete c.dom7EventData
                        }
                    }
                }
                return this
            },
            transitionEnd: function(e) {
                let t = this;
                return e && t.on("transitionend", function i(n) {
                    n.target === this && (e.call(this, n), t.off("transitionend", i))
                }), this
            },
            outerWidth: function(e) {
                if (this.length > 0) {
                    if (e) {
                        let t = this.styles();
                        return this[0].offsetWidth + parseFloat(t.getPropertyValue("margin-right")) + parseFloat(t.getPropertyValue("margin-left"))
                    }
                    return this[0].offsetWidth
                }
                return null
            },
            outerHeight: function(e) {
                if (this.length > 0) {
                    if (e) {
                        let t = this.styles();
                        return this[0].offsetHeight + parseFloat(t.getPropertyValue("margin-top")) + parseFloat(t.getPropertyValue("margin-bottom"))
                    }
                    return this[0].offsetHeight
                }
                return null
            },
            styles: function() {
                let e = a();
                return this[0] ? e.getComputedStyle(this[0], null) : {}
            },
            offset: function() {
                if (this.length > 0) {
                    let e = a(),
                        t = n(),
                        i = this[0],
                        s = i.getBoundingClientRect(),
                        r = t.body,
                        o = i.clientTop || r.clientTop || 0,
                        l = i.clientLeft || r.clientLeft || 0,
                        d = i === e ? e.scrollY : i.scrollTop,
                        c = i === e ? e.scrollX : i.scrollLeft;
                    return {
                        top: s.top + d - o,
                        left: s.left + c - l
                    }
                }
                return null
            },
            css: function(e, t) {
                let i = a(),
                    n;
                if (1 === arguments.length) {
                    if ("string" != typeof e) {
                        for (n = 0; n < this.length; n += 1)
                            for (let s in e) this[n].style[s] = e[s];
                        return this
                    }
                    if (this[0]) return i.getComputedStyle(this[0], null).getPropertyValue(e)
                }
                if (2 === arguments.length && "string" == typeof e)
                    for (n = 0; n < this.length; n += 1) this[n].style[e] = t;
                return this
            },
            each: function(e) {
                return e && this.forEach((t, i) => {
                    e.apply(t, [t, i])
                }), this
            },
            html: function(e) {
                if (void 0 === e) return this[0] ? this[0].innerHTML : null;
                for (let t = 0; t < this.length; t += 1) this[t].innerHTML = e;
                return this
            },
            text: function(e) {
                if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
                for (let t = 0; t < this.length; t += 1) this[t].textContent = e;
                return this
            },
            is: function(e) {
                let t = a(),
                    i = n(),
                    s = this[0],
                    o, l;
                if (!s || void 0 === e) return !1;
                if ("string" == typeof e) {
                    if (s.matches) return s.matches(e);
                    if (s.webkitMatchesSelector) return s.webkitMatchesSelector(e);
                    if (s.msMatchesSelector) return s.msMatchesSelector(e);
                    for (o = d(e), l = 0; l < o.length; l += 1)
                        if (o[l] === s) return !0;
                    return !1
                }
                if (e === i) return s === i;
                if (e === t) return s === t;
                if (e.nodeType || e instanceof r) {
                    for (o = e.nodeType ? [e] : e, l = 0; l < o.length; l += 1)
                        if (o[l] === s) return !0
                }
                return !1
            },
            index: function() {
                let e, t = this[0];
                if (t) {
                    for (e = 0; null !== (t = t.previousSibling);) 1 === t.nodeType && (e += 1);
                    return e
                }
            },
            eq: function(e) {
                if (void 0 === e) return this;
                let t = this.length;
                if (e > t - 1) return d([]);
                if (e < 0) {
                    let i = t + e;
                    return d(i < 0 ? [] : [this[i]])
                }
                return d([this[e]])
            },
            append: function() {
                let e, t = n();
                for (let i = 0; i < arguments.length; i += 1) {
                    e = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                    for (let s = 0; s < this.length; s += 1)
                        if ("string" == typeof e) {
                            let a = t.createElement("div");
                            for (a.innerHTML = e; a.firstChild;) this[s].appendChild(a.firstChild)
                        } else if (e instanceof r)
                        for (let o = 0; o < e.length; o += 1) this[s].appendChild(e[o]);
                    else this[s].appendChild(e)
                }
                return this
            },
            prepend: function(e) {
                let t = n(),
                    i, s;
                for (i = 0; i < this.length; i += 1)
                    if ("string" == typeof e) {
                        let a = t.createElement("div");
                        for (a.innerHTML = e, s = a.childNodes.length - 1; s >= 0; s -= 1) this[i].insertBefore(a.childNodes[s], this[i].childNodes[0])
                    } else if (e instanceof r)
                    for (s = 0; s < e.length; s += 1) this[i].insertBefore(e[s], this[i].childNodes[0]);
                else this[i].insertBefore(e, this[i].childNodes[0]);
                return this
            },
            next: function(e) {
                return this.length > 0 ? e ? this[0].nextElementSibling && d(this[0].nextElementSibling).is(e) ? d([this[0].nextElementSibling]) : d([]) : this[0].nextElementSibling ? d([this[0].nextElementSibling]) : d([]) : d([])
            },
            nextAll: function(e) {
                let t = [],
                    i = this[0];
                if (!i) return d([]);
                for (; i.nextElementSibling;) {
                    let n = i.nextElementSibling;
                    e ? d(n).is(e) && t.push(n) : t.push(n), i = n
                }
                return d(t)
            },
            prev: function(e) {
                if (this.length > 0) {
                    let t = this[0];
                    return e ? t.previousElementSibling && d(t.previousElementSibling).is(e) ? d([t.previousElementSibling]) : d([]) : t.previousElementSibling ? d([t.previousElementSibling]) : d([])
                }
                return d([])
            },
            prevAll: function(e) {
                let t = [],
                    i = this[0];
                if (!i) return d([]);
                for (; i.previousElementSibling;) {
                    let n = i.previousElementSibling;
                    e ? d(n).is(e) && t.push(n) : t.push(n), i = n
                }
                return d(t)
            },
            parent: function(e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) null !== this[i].parentNode && (e ? d(this[i].parentNode).is(e) && t.push(this[i].parentNode) : t.push(this[i].parentNode));
                return d(t)
            },
            parents: function(e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let n = this[i].parentNode;
                    for (; n;) e ? d(n).is(e) && t.push(n) : t.push(n), n = n.parentNode
                }
                return d(t)
            },
            closest: function(e) {
                let t = this;
                return void 0 === e ? d([]) : (t.is(e) || (t = t.parents(e).eq(0)), t)
            },
            find: function(e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let n = this[i].querySelectorAll(e);
                    for (let s = 0; s < n.length; s += 1) t.push(n[s])
                }
                return d(t)
            },
            children: function(e) {
                let t = [];
                for (let i = 0; i < this.length; i += 1) {
                    let n = this[i].children;
                    for (let s = 0; s < n.length; s += 1) e && !d(n[s]).is(e) || t.push(n[s])
                }
                return d(t)
            },
            filter: function(e) {
                return d(l(this, e))
            },
            remove: function() {
                for (let e = 0; e < this.length; e += 1) this[e].parentNode && this[e].parentNode.removeChild(this[e]);
                return this
            }
        };

        function h(e, t) {
            return void 0 === t && (t = 0), setTimeout(e, t)
        }

        function u() {
            return Date.now()
        }

        function p(e, t) {
            void 0 === t && (t = "x");
            let i = a(),
                n, s, r, o = function(e) {
                    let t = a(),
                        i;
                    return t.getComputedStyle && (i = t.getComputedStyle(e, null)), !i && e.currentStyle && (i = e.currentStyle), i || (i = e.style), i
                }(e);
            return i.WebKitCSSMatrix ? ((s = o.transform || o.webkitTransform).split(",").length > 6 && (s = s.split(", ").map(e => e.replace(",", ".")).join(", ")), r = new i.WebKitCSSMatrix("none" === s ? "" : s)) : n = (r = o.MozTransform || o.OTransform || o.MsTransform || o.msTransform || o.transform || o.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,")).toString().split(","), "x" === t && (s = i.WebKitCSSMatrix ? r.m41 : 16 === n.length ? parseFloat(n[12]) : parseFloat(n[4])), "y" === t && (s = i.WebKitCSSMatrix ? r.m42 : 16 === n.length ? parseFloat(n[13]) : parseFloat(n[5])), s || 0
        }

        function f(e) {
            return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1)
        }

        function m(e) {
            return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType)
        }

        function g() {
            let e = Object(arguments.length <= 0 ? void 0 : arguments[0]),
                t = ["__proto__", "constructor", "prototype"];
            for (let i = 1; i < arguments.length; i += 1) {
                let n = i < 0 || arguments.length <= i ? void 0 : arguments[i];
                if (null != n && !m(n)) {
                    let s = Object.keys(Object(n)).filter(e => 0 > t.indexOf(e));
                    for (let a = 0, r = s.length; a < r; a += 1) {
                        let o = s[a],
                            l = Object.getOwnPropertyDescriptor(n, o);
                        void 0 !== l && l.enumerable && (f(e[o]) && f(n[o]) ? n[o].__swiper__ ? e[o] = n[o] : g(e[o], n[o]) : !f(e[o]) && f(n[o]) ? (e[o] = {}, n[o].__swiper__ ? e[o] = n[o] : g(e[o], n[o])) : e[o] = n[o])
                    }
                }
            }
            return e
        }

        function v(e, t, i) {
            e.style.setProperty(t, i)
        }

        function y(e) {
            let {
                swiper: t,
                targetPosition: i,
                side: n
            } = e, s = a(), r = -t.translate, o, l = null, d = t.params.speed;
            t.wrapperEl.style.scrollSnapType = "none", s.cancelAnimationFrame(t.cssModeFrameID);
            let c = i > r ? "next" : "prev",
                h = (e, t) => "next" === c && e >= t || "prev" === c && e <= t,
                u = () => {
                    o = (new Date).getTime(), null === l && (l = o);
                    let e = Math.max(Math.min((o - l) / d, 1), 0),
                        a = r + (.5 - Math.cos(e * Math.PI) / 2) * (i - r);
                    if (h(a, i) && (a = i), t.wrapperEl.scrollTo({
                            [n]: a
                        }), h(a, i)) return t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.scrollSnapType = "", setTimeout(() => {
                        t.wrapperEl.style.overflow = "", t.wrapperEl.scrollTo({
                            [n]: a
                        })
                    }), void s.cancelAnimationFrame(t.cssModeFrameID);
                    t.cssModeFrameID = s.requestAnimationFrame(u)
                };
            u()
        }
        let $, b, w;

        function _() {
            return $ || ($ = function() {
                let e = a(),
                    t = n();
                return {
                    smoothScroll: t.documentElement && "scrollBehavior" in t.documentElement.style,
                    touch: !!("ontouchstart" in e || e.DocumentTouch && t instanceof e.DocumentTouch),
                    passiveListener: function() {
                        let t = !1;
                        try {
                            let i = Object.defineProperty({}, "passive", {
                                get() {
                                    t = !0
                                }
                            });
                            e.addEventListener("testPassiveListener", null, i)
                        } catch (n) {}
                        return t
                    }(),
                    gestures: "ongesturestart" in e
                }
            }()), $
        }

        function C(e) {
            let {
                swiper: t,
                runCallbacks: i,
                direction: n,
                step: s
            } = e, {
                activeIndex: a,
                previousIndex: r
            } = t, o = n;
            if (o || (o = a > r ? "next" : a < r ? "prev" : "reset"), t.emit(`transition${s}`), i && a !== r) {
                if ("reset" === o) return void t.emit(`slideResetTransition${s}`);
                t.emit(`slideChangeTransition${s}`), "next" === o ? t.emit(`slideNextTransition${s}`) : t.emit(`slidePrevTransition${s}`)
            }
        }

        function x(e) {
            let t = this,
                i = n(),
                s = a(),
                r = t.touchEventsData,
                {
                    params: o,
                    touches: l,
                    enabled: c
                } = t;
            if (!c || t.animating && o.preventInteractionOnTransition) return;
            !t.animating && o.cssMode && o.loop && t.loopFix();
            let h = e;
            h.originalEvent && (h = h.originalEvent);
            let p = d(h.target);
            if ("wrapper" === o.touchEventsTarget && !p.closest(t.wrapperEl).length || (r.isTouchEvent = "touchstart" === h.type, !r.isTouchEvent && "which" in h && 3 === h.which) || !r.isTouchEvent && "button" in h && h.button > 0 || r.isTouched && r.isMoved) return;
            let f = !!o.noSwipingClass && "" !== o.noSwipingClass,
                m = e.composedPath ? e.composedPath() : e.path;
            f && h.target && h.target.shadowRoot && m && (p = d(m[0]));
            let g = o.noSwipingSelector ? o.noSwipingSelector : `.${o.noSwipingClass}`,
                v = !(!h.target || !h.target.shadowRoot);
            if (o.noSwiping && (v ? function(e, t) {
                    return void 0 === t && (t = this),
                        function t(i) {
                            if (!i || i === n() || i === a()) return null;
                            i.assignedSlot && (i = i.assignedSlot);
                            let s = i.closest(e);
                            return s || i.getRootNode ? s || t(i.getRootNode().host) : null
                        }(t)
                }(g, p[0]) : p.closest(g)[0])) return void(t.allowClick = !0);
            if (o.swipeHandler && !p.closest(o.swipeHandler)[0]) return;
            l.currentX = "touchstart" === h.type ? h.targetTouches[0].pageX : h.pageX, l.currentY = "touchstart" === h.type ? h.targetTouches[0].pageY : h.pageY;
            let y = l.currentX,
                $ = l.currentY,
                b = o.edgeSwipeDetection || o.iOSEdgeSwipeDetection,
                w = o.edgeSwipeThreshold || o.iOSEdgeSwipeThreshold;
            if (b && (y <= w || y >= s.innerWidth - w)) {
                if ("prevent" !== b) return;
                e.preventDefault()
            }
            if (Object.assign(r, {
                    isTouched: !0,
                    isMoved: !1,
                    allowTouchCallbacks: !0,
                    isScrolling: void 0,
                    startMoving: void 0
                }), l.startX = y, l.startY = $, r.touchStartTime = u(), t.allowClick = !0, t.updateSize(), t.swipeDirection = void 0, o.threshold > 0 && (r.allowThresholdMove = !1), "touchstart" !== h.type) {
                let _ = !0;
                p.is(r.focusableElements) && (_ = !1, "SELECT" === p[0].nodeName && (r.isTouched = !1)), i.activeElement && d(i.activeElement).is(r.focusableElements) && i.activeElement !== p[0] && i.activeElement.blur();
                let C = _ && t.allowTouchMove && o.touchStartPreventDefault;
                (o.touchStartForcePreventDefault || C) && !p[0].isContentEditable && h.preventDefault()
            }
            t.params.freeMode && t.params.freeMode.enabled && t.freeMode && t.animating && !o.cssMode && t.freeMode.onTouchStart(), t.emit("touchStart", h)
        }

        function k(e) {
            let t = n(),
                i = this,
                s = i.touchEventsData,
                {
                    params: a,
                    touches: r,
                    rtlTranslate: o,
                    enabled: l
                } = i;
            if (!l) return;
            let c = e;
            if (c.originalEvent && (c = c.originalEvent), !s.isTouched) return void(s.startMoving && s.isScrolling && i.emit("touchMoveOpposite", c));
            if (s.isTouchEvent && "touchmove" !== c.type) return;
            let h = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]),
                p = "touchmove" === c.type ? h.pageX : c.pageX,
                f = "touchmove" === c.type ? h.pageY : c.pageY;
            if (c.preventedByNestedSwiper) return r.startX = p, void(r.startY = f);
            if (!i.allowTouchMove) return d(c.target).is(s.focusableElements) || (i.allowClick = !1), void(s.isTouched && (Object.assign(r, {
                startX: p,
                startY: f,
                currentX: p,
                currentY: f
            }), s.touchStartTime = u()));
            if (s.isTouchEvent && a.touchReleaseOnEdges && !a.loop) {
                if (i.isVertical()) {
                    if (f < r.startY && i.translate <= i.maxTranslate() || f > r.startY && i.translate >= i.minTranslate()) return s.isTouched = !1, void(s.isMoved = !1)
                } else if (p < r.startX && i.translate <= i.maxTranslate() || p > r.startX && i.translate >= i.minTranslate()) return
            }
            if (s.isTouchEvent && t.activeElement && c.target === t.activeElement && d(c.target).is(s.focusableElements)) return s.isMoved = !0, void(i.allowClick = !1);
            if (s.allowTouchCallbacks && i.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
            r.currentX = p, r.currentY = f;
            let m = r.currentX - r.startX,
                g = r.currentY - r.startY;
            if (i.params.threshold && Math.sqrt(m ** 2 + g ** 2) < i.params.threshold) return;
            if (void 0 === s.isScrolling) {
                let v;
                i.isHorizontal() && r.currentY === r.startY || i.isVertical() && r.currentX === r.startX ? s.isScrolling = !1 : m * m + g * g >= 25 && (v = 180 * Math.atan2(Math.abs(g), Math.abs(m)) / Math.PI, s.isScrolling = i.isHorizontal() ? v > a.touchAngle : 90 - v > a.touchAngle)
            }
            if (s.isScrolling && i.emit("touchMoveOpposite", c), void 0 === s.startMoving && (r.currentX === r.startX && r.currentY === r.startY || (s.startMoving = !0)), s.isScrolling) return void(s.isTouched = !1);
            if (!s.startMoving) return;
            i.allowClick = !1, !a.cssMode && c.cancelable && c.preventDefault(), a.touchMoveStopPropagation && !a.nested && c.stopPropagation(), s.isMoved || (a.loop && !a.cssMode && i.loopFix(), s.startTranslate = i.getTranslate(), i.setTransition(0), i.animating && i.$wrapperEl.trigger("webkitTransitionEnd transitionend"), s.allowMomentumBounce = !1, a.grabCursor && (!0 === i.allowSlideNext || !0 === i.allowSlidePrev) && i.setGrabCursor(!0), i.emit("sliderFirstMove", c)), i.emit("sliderMove", c), s.isMoved = !0;
            let y = i.isHorizontal() ? m : g;
            r.diff = y, y *= a.touchRatio, o && (y = -y), i.swipeDirection = y > 0 ? "prev" : "next", s.currentTranslate = y + s.startTranslate;
            let $ = !0,
                b = a.resistanceRatio;
            if (a.touchReleaseOnEdges && (b = 0), y > 0 && s.currentTranslate > i.minTranslate() ? ($ = !1, a.resistance && (s.currentTranslate = i.minTranslate() - 1 + (-i.minTranslate() + s.startTranslate + y) ** b)) : y < 0 && s.currentTranslate < i.maxTranslate() && ($ = !1, a.resistance && (s.currentTranslate = i.maxTranslate() + 1 - (i.maxTranslate() - s.startTranslate - y) ** b)), $ && (c.preventedByNestedSwiper = !0), !i.allowSlideNext && "next" === i.swipeDirection && s.currentTranslate < s.startTranslate && (s.currentTranslate = s.startTranslate), !i.allowSlidePrev && "prev" === i.swipeDirection && s.currentTranslate > s.startTranslate && (s.currentTranslate = s.startTranslate), i.allowSlidePrev || i.allowSlideNext || (s.currentTranslate = s.startTranslate), a.threshold > 0) {
                if (!(Math.abs(y) > a.threshold || s.allowThresholdMove)) return void(s.currentTranslate = s.startTranslate);
                if (!s.allowThresholdMove) return s.allowThresholdMove = !0, r.startX = r.currentX, r.startY = r.currentY, s.currentTranslate = s.startTranslate, void(r.diff = i.isHorizontal() ? r.currentX - r.startX : r.currentY - r.startY)
            }
            a.followFinger && !a.cssMode && ((a.freeMode && a.freeMode.enabled && i.freeMode || a.watchSlidesProgress) && (i.updateActiveIndex(), i.updateSlidesClasses()), i.params.freeMode && a.freeMode.enabled && i.freeMode && i.freeMode.onTouchMove(), i.updateProgress(s.currentTranslate), i.setTranslate(s.currentTranslate))
        }

        function T(e) {
            let t = this,
                i = t.touchEventsData,
                {
                    params: n,
                    touches: s,
                    rtlTranslate: a,
                    slidesGrid: r,
                    enabled: o
                } = t;
            if (!o) return;
            let l = e;
            if (l.originalEvent && (l = l.originalEvent), i.allowTouchCallbacks && t.emit("touchEnd", l), i.allowTouchCallbacks = !1, !i.isTouched) return i.isMoved && n.grabCursor && t.setGrabCursor(!1), i.isMoved = !1, void(i.startMoving = !1);
            n.grabCursor && i.isMoved && i.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
            let d = u(),
                c = d - i.touchStartTime;
            if (t.allowClick) {
                let p = l.path || l.composedPath && l.composedPath();
                t.updateClickedSlide(p && p[0] || l.target), t.emit("tap click", l), c < 300 && d - i.lastClickTime < 300 && t.emit("doubleTap doubleClick", l)
            }
            if (i.lastClickTime = u(), h(() => {
                    t.destroyed || (t.allowClick = !0)
                }), !i.isTouched || !i.isMoved || !t.swipeDirection || 0 === s.diff || i.currentTranslate === i.startTranslate) return i.isTouched = !1, i.isMoved = !1, void(i.startMoving = !1);
            let f;
            if (i.isTouched = !1, i.isMoved = !1, i.startMoving = !1, f = n.followFinger ? a ? t.translate : -t.translate : -i.currentTranslate, n.cssMode) return;
            if (t.params.freeMode && n.freeMode.enabled) return void t.freeMode.onTouchEnd({
                currentPos: f
            });
            let m = 0,
                g = t.slidesSizesGrid[0];
            for (let v = 0; v < r.length; v += v < n.slidesPerGroupSkip ? 1 : n.slidesPerGroup) {
                let y = v < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
                void 0 !== r[v + y] ? f >= r[v] && f < r[v + y] && (m = v, g = r[v + y] - r[v]) : f >= r[v] && (m = v, g = r[r.length - 1] - r[r.length - 2])
            }
            let $ = null,
                b = null;
            n.rewind && (t.isBeginning ? b = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && ($ = 0));
            let w = (f - r[m]) / g,
                _ = m < n.slidesPerGroupSkip - 1 ? 1 : n.slidesPerGroup;
            if (c > n.longSwipesMs) {
                if (!n.longSwipes) return void t.slideTo(t.activeIndex);
                "next" === t.swipeDirection && (w >= n.longSwipesRatio ? t.slideTo(n.rewind && t.isEnd ? $ : m + _) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - n.longSwipesRatio ? t.slideTo(m + _) : null !== b && w < 0 && Math.abs(w) > n.longSwipesRatio ? t.slideTo(b) : t.slideTo(m))
            } else {
                if (!n.shortSwipes) return void t.slideTo(t.activeIndex);
                t.navigation && (l.target === t.navigation.nextEl || l.target === t.navigation.prevEl) ? l.target === t.navigation.nextEl ? t.slideTo(m + _) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== $ ? $ : m + _), "prev" === t.swipeDirection && t.slideTo(null !== b ? b : m))
            }
        }

        function E() {
            let e = this,
                {
                    params: t,
                    el: i
                } = e;
            if (i && 0 === i.offsetWidth) return;
            t.breakpoints && e.setBreakpoint();
            let {
                allowSlideNext: n,
                allowSlidePrev: s,
                snapGrid: a
            } = e;
            e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = s, e.allowSlideNext = n, e.params.watchOverflow && a !== e.snapGrid && e.checkOverflow()
        }

        function S(e) {
            this.enabled && (this.allowClick || (this.params.preventClicks && e.preventDefault(), this.params.preventClicksPropagation && this.animating && (e.stopPropagation(), e.stopImmediatePropagation())))
        }

        function D() {
            let e = this,
                {
                    wrapperEl: t,
                    rtlTranslate: i,
                    enabled: n
                } = e;
            if (!n) return;
            let s;
            e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
            let a = e.maxTranslate() - e.minTranslate();
            (s = 0 === a ? 0 : (e.translate - e.minTranslate()) / a) !== e.progress && e.updateProgress(i ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1)
        }
        Object.keys(c).forEach(e => {
            Object.defineProperty(d.fn, e, {
                value: c[e],
                writable: !0
            })
        });
        let M = !1;

        function A() {}
        let P = (e, t) => {
                let i = n(),
                    {
                        params: s,
                        touchEvents: a,
                        el: r,
                        wrapperEl: o,
                        device: l,
                        support: d
                    } = e,
                    c = !!s.nested,
                    h = "on" === t ? "addEventListener" : "removeEventListener",
                    u = t;
                if (d.touch) {
                    let p = !("touchstart" !== a.start || !d.passiveListener || !s.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                    r[h](a.start, e.onTouchStart, p), r[h](a.move, e.onTouchMove, d.passiveListener ? {
                        passive: !1,
                        capture: c
                    } : c), r[h](a.end, e.onTouchEnd, p), a.cancel && r[h](a.cancel, e.onTouchEnd, p)
                } else r[h](a.start, e.onTouchStart, !1), i[h](a.move, e.onTouchMove, c), i[h](a.end, e.onTouchEnd, !1);
                (s.preventClicks || s.preventClicksPropagation) && r[h]("click", e.onClick, !0), s.cssMode && o[h]("scroll", e.onScroll), s.updateOnWindowResize ? e[u](l.ios || l.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", E, !0) : e[u]("observerUpdate", E, !0)
            },
            L = (e, t) => e.grid && t.grid && t.grid.rows > 1;
        var I = {
            init: !0,
            direction: "horizontal",
            touchEventsTarget: "wrapper",
            initialSlide: 0,
            speed: 300,
            cssMode: !1,
            updateOnWindowResize: !0,
            resizeObserver: !0,
            nested: !1,
            createElements: !1,
            enabled: !0,
            focusableElements: "input, select, option, textarea, button, video, label",
            width: null,
            height: null,
            preventInteractionOnTransition: !1,
            userAgent: null,
            url: null,
            edgeSwipeDetection: !1,
            edgeSwipeThreshold: 20,
            autoHeight: !1,
            setWrapperSize: !1,
            virtualTranslate: !1,
            effect: "slide",
            breakpoints: void 0,
            breakpointsBase: "window",
            spaceBetween: 0,
            slidesPerView: 1,
            slidesPerGroup: 1,
            slidesPerGroupSkip: 0,
            slidesPerGroupAuto: !1,
            centeredSlides: !1,
            centeredSlidesBounds: !1,
            slidesOffsetBefore: 0,
            slidesOffsetAfter: 0,
            normalizeSlideIndex: !0,
            centerInsufficientSlides: !1,
            watchOverflow: !0,
            roundLengths: !1,
            touchRatio: 1,
            touchAngle: 45,
            simulateTouch: !0,
            shortSwipes: !0,
            longSwipes: !0,
            longSwipesRatio: .5,
            longSwipesMs: 300,
            followFinger: !0,
            allowTouchMove: !0,
            threshold: 0,
            touchMoveStopPropagation: !1,
            touchStartPreventDefault: !0,
            touchStartForcePreventDefault: !1,
            touchReleaseOnEdges: !1,
            uniqueNavElements: !0,
            resistance: !0,
            resistanceRatio: .85,
            watchSlidesProgress: !1,
            grabCursor: !1,
            preventClicks: !0,
            preventClicksPropagation: !0,
            slideToClickedSlide: !1,
            preloadImages: !0,
            updateOnImagesReady: !0,
            loop: !1,
            loopAdditionalSlides: 0,
            loopedSlides: null,
            loopedSlidesLimit: !0,
            loopFillGroupWithBlank: !1,
            loopPreventsSlide: !0,
            rewind: !1,
            allowSlidePrev: !0,
            allowSlideNext: !0,
            swipeHandler: null,
            noSwiping: !0,
            noSwipingClass: "swiper-no-swiping",
            noSwipingSelector: null,
            passiveListeners: !0,
            maxBackfaceHiddenSlides: 10,
            containerModifierClass: "swiper-",
            slideClass: "swiper-slide",
            slideBlankClass: "swiper-slide-invisible-blank",
            slideActiveClass: "swiper-slide-active",
            slideDuplicateActiveClass: "swiper-slide-duplicate-active",
            slideVisibleClass: "swiper-slide-visible",
            slideDuplicateClass: "swiper-slide-duplicate",
            slideNextClass: "swiper-slide-next",
            slideDuplicateNextClass: "swiper-slide-duplicate-next",
            slidePrevClass: "swiper-slide-prev",
            slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
            wrapperClass: "swiper-wrapper",
            runCallbacksOnInit: !0,
            _emitClasses: !1
        };
        let O = {
                eventsEmitter: {
                    on(e, t, i) {
                        let n = this;
                        if (!n.eventsListeners || n.destroyed || "function" != typeof t) return n;
                        let s = i ? "unshift" : "push";
                        return e.split(" ").forEach(e => {
                            n.eventsListeners[e] || (n.eventsListeners[e] = []), n.eventsListeners[e][s](t)
                        }), n
                    },
                    once(e, t, i) {
                        let n = this;
                        if (!n.eventsListeners || n.destroyed || "function" != typeof t) return n;

                        function s() {
                            n.off(e, s), s.__emitterProxy && delete s.__emitterProxy;
                            for (var i = arguments.length, a = Array(i), r = 0; r < i; r++) a[r] = arguments[r];
                            t.apply(n, a)
                        }
                        return s.__emitterProxy = t, n.on(e, s, i)
                    },
                    onAny(e, t) {
                        return !this.eventsListeners || this.destroyed || "function" != typeof e || 0 > this.eventsAnyListeners.indexOf(e) && this.eventsAnyListeners[t ? "unshift" : "push"](e), this
                    },
                    offAny(e) {
                        if (!this.eventsListeners || this.destroyed || !this.eventsAnyListeners) return this;
                        let t = this.eventsAnyListeners.indexOf(e);
                        return t >= 0 && this.eventsAnyListeners.splice(t, 1), this
                    },
                    off(e, t) {
                        let i = this;
                        return !i.eventsListeners || i.destroyed || i.eventsListeners && e.split(" ").forEach(e => {
                            void 0 === t ? i.eventsListeners[e] = [] : i.eventsListeners[e] && i.eventsListeners[e].forEach((n, s) => {
                                (n === t || n.__emitterProxy && n.__emitterProxy === t) && i.eventsListeners[e].splice(s, 1)
                            })
                        }), i
                    },
                    emit() {
                        let e = this;
                        if (!e.eventsListeners || e.destroyed || !e.eventsListeners) return e;
                        let t, i, n;
                        for (var s = arguments.length, a = Array(s), r = 0; r < s; r++) a[r] = arguments[r];
                        return "string" == typeof a[0] || Array.isArray(a[0]) ? (t = a[0], i = a.slice(1, a.length), n = e) : (t = a[0].events, i = a[0].data, n = a[0].context || e), i.unshift(n), (Array.isArray(t) ? t : t.split(" ")).forEach(t => {
                            e.eventsAnyListeners && e.eventsAnyListeners.length && e.eventsAnyListeners.forEach(e => {
                                e.apply(n, [t, ...i])
                            }), e.eventsListeners && e.eventsListeners[t] && e.eventsListeners[t].forEach(e => {
                                e.apply(n, i)
                            })
                        }), e
                    }
                },
                update: {
                    updateSize: function() {
                        let e, t, i = this.$el;
                        e = void 0 !== this.params.width && null !== this.params.width ? this.params.width : i[0].clientWidth, t = void 0 !== this.params.height && null !== this.params.height ? this.params.height : i[0].clientHeight, 0 === e && this.isHorizontal() || 0 === t && this.isVertical() || (e = e - parseInt(i.css("padding-left") || 0, 10) - parseInt(i.css("padding-right") || 0, 10), t = t - parseInt(i.css("padding-top") || 0, 10) - parseInt(i.css("padding-bottom") || 0, 10), Number.isNaN(e) && (e = 0), Number.isNaN(t) && (t = 0), Object.assign(this, {
                            width: e,
                            height: t,
                            size: this.isHorizontal() ? e : t
                        }))
                    },
                    updateSlides: function() {
                        let e = this;

                        function t(t) {
                            return e.isHorizontal() ? t : ({
                                width: "height",
                                "margin-top": "margin-left",
                                "margin-bottom ": "margin-right",
                                "margin-left": "margin-top",
                                "margin-right": "margin-bottom",
                                "padding-left": "padding-top",
                                "padding-right": "padding-bottom",
                                marginRight: "marginBottom"
                            })[t]
                        }

                        function i(e, i) {
                            return parseFloat(e.getPropertyValue(t(i)) || 0)
                        }
                        let n = e.params,
                            {
                                $wrapperEl: s,
                                size: a,
                                rtlTranslate: r,
                                wrongRTL: o
                            } = e,
                            l = e.virtual && n.virtual.enabled,
                            d = l ? e.virtual.slides.length : e.slides.length,
                            c = s.children(`.${e.params.slideClass}`),
                            h = l ? e.virtual.slides.length : c.length,
                            u = [],
                            p = [],
                            f = [],
                            m = n.slidesOffsetBefore;
                        "function" == typeof m && (m = n.slidesOffsetBefore.call(e));
                        let g = n.slidesOffsetAfter;
                        "function" == typeof g && (g = n.slidesOffsetAfter.call(e));
                        let y = e.snapGrid.length,
                            $ = e.slidesGrid.length,
                            b = n.spaceBetween,
                            w = -m,
                            _ = 0,
                            C = 0;
                        if (void 0 === a) return;
                        "string" == typeof b && b.indexOf("%") >= 0 && (b = parseFloat(b.replace("%", "")) / 100 * a), e.virtualSize = -b, r ? c.css({
                            marginLeft: "",
                            marginBottom: "",
                            marginTop: ""
                        }) : c.css({
                            marginRight: "",
                            marginBottom: "",
                            marginTop: ""
                        }), n.centeredSlides && n.cssMode && (v(e.wrapperEl, "--swiper-centered-offset-before", ""), v(e.wrapperEl, "--swiper-centered-offset-after", ""));
                        let x = n.grid && n.grid.rows > 1 && e.grid,
                            k;
                        x && e.grid.initSlides(h);
                        let T = "auto" === n.slidesPerView && n.breakpoints && Object.keys(n.breakpoints).filter(e => void 0 !== n.breakpoints[e].slidesPerView).length > 0;
                        for (let E = 0; E < h; E += 1) {
                            k = 0;
                            let S = c.eq(E);
                            if (x && e.grid.updateSlide(E, S, h, t), "none" !== S.css("display")) {
                                if ("auto" === n.slidesPerView) {
                                    T && (c[E].style[t("width")] = "");
                                    let D = getComputedStyle(S[0]),
                                        M = S[0].style.transform,
                                        A = S[0].style.webkitTransform;
                                    if (M && (S[0].style.transform = "none"), A && (S[0].style.webkitTransform = "none"), n.roundLengths) k = e.isHorizontal() ? S.outerWidth(!0) : S.outerHeight(!0);
                                    else {
                                        let P = i(D, "width"),
                                            L = i(D, "padding-left"),
                                            I = i(D, "padding-right"),
                                            O = i(D, "margin-left"),
                                            N = i(D, "margin-right"),
                                            z = D.getPropertyValue("box-sizing");
                                        if (z && "border-box" === z) k = P + O + N;
                                        else {
                                            let {
                                                clientWidth: H,
                                                offsetWidth: Y
                                            } = S[0];
                                            k = P + L + I + O + N + (Y - H)
                                        }
                                    }
                                    M && (S[0].style.transform = M), A && (S[0].style.webkitTransform = A), n.roundLengths && (k = Math.floor(k))
                                } else k = (a - (n.slidesPerView - 1) * b) / n.slidesPerView, n.roundLengths && (k = Math.floor(k)), c[E] && (c[E].style[t("width")] = `${k}px`);
                                c[E] && (c[E].swiperSlideSize = k), f.push(k), n.centeredSlides ? (w = w + k / 2 + _ / 2 + b, 0 === _ && 0 !== E && (w = w - a / 2 - b), 0 === E && (w = w - a / 2 - b), .001 > Math.abs(w) && (w = 0), n.roundLengths && (w = Math.floor(w)), C % n.slidesPerGroup == 0 && u.push(w), p.push(w)) : (n.roundLengths && (w = Math.floor(w)), (C - Math.min(e.params.slidesPerGroupSkip, C)) % e.params.slidesPerGroup == 0 && u.push(w), p.push(w), w = w + k + b), e.virtualSize += k + b, _ = k, C += 1
                            }
                        }
                        if (e.virtualSize = Math.max(e.virtualSize, a) + g, r && o && ("slide" === n.effect || "coverflow" === n.effect) && s.css({
                                width: `${e.virtualSize+n.spaceBetween}px`
                            }), n.setWrapperSize && s.css({
                                [t("width")]: `${e.virtualSize+n.spaceBetween}px`
                            }), x && e.grid.updateWrapperSize(k, u, t), !n.centeredSlides) {
                            let B = [];
                            for (let q = 0; q < u.length; q += 1) {
                                let W = u[q];
                                n.roundLengths && (W = Math.floor(W)), u[q] <= e.virtualSize - a && B.push(W)
                            }
                            u = B, Math.floor(e.virtualSize - a) - Math.floor(u[u.length - 1]) > 1 && u.push(e.virtualSize - a)
                        }
                        if (0 === u.length && (u = [0]), 0 !== n.spaceBetween) {
                            let F = e.isHorizontal() && r ? "marginLeft" : t("marginRight");
                            c.filter((e, t) => !n.cssMode || t !== c.length - 1).css({
                                [F]: `${b}px`
                            })
                        }
                        if (n.centeredSlides && n.centeredSlidesBounds) {
                            let R = 0;
                            f.forEach(e => {
                                R += e + (n.spaceBetween ? n.spaceBetween : 0)
                            }), R -= n.spaceBetween;
                            let j = R - a;
                            u = u.map(e => e < 0 ? -m : e > j ? j + g : e)
                        }
                        if (n.centerInsufficientSlides) {
                            let V = 0;
                            if (f.forEach(e => {
                                    V += e + (n.spaceBetween ? n.spaceBetween : 0)
                                }), (V -= n.spaceBetween) < a) {
                                let X = (a - V) / 2;
                                u.forEach((e, t) => {
                                    u[t] = e - X
                                }), p.forEach((e, t) => {
                                    p[t] = e + X
                                })
                            }
                        }
                        if (Object.assign(e, {
                                slides: c,
                                snapGrid: u,
                                slidesGrid: p,
                                slidesSizesGrid: f
                            }), n.centeredSlides && n.cssMode && !n.centeredSlidesBounds) {
                            v(e.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v(e.wrapperEl, "--swiper-centered-offset-after", e.size / 2 - f[f.length - 1] / 2 + "px");
                            let G = -e.snapGrid[0],
                                U = -e.slidesGrid[0];
                            e.snapGrid = e.snapGrid.map(e => e + G), e.slidesGrid = e.slidesGrid.map(e => e + U)
                        }
                        if (h !== d && e.emit("slidesLengthChange"), u.length !== y && (e.params.watchOverflow && e.checkOverflow(), e.emit("snapGridLengthChange")), p.length !== $ && e.emit("slidesGridLengthChange"), n.watchSlidesProgress && e.updateSlidesOffset(), !(l || n.cssMode || "slide" !== n.effect && "fade" !== n.effect)) {
                            let K = `${n.containerModifierClass}backface-hidden`,
                                Q = e.$el.hasClass(K);
                            h <= n.maxBackfaceHiddenSlides ? Q || e.$el.addClass(K) : Q && e.$el.removeClass(K)
                        }
                    },
                    updateAutoHeight: function(e) {
                        let t = this,
                            i = [],
                            n = t.virtual && t.params.virtual.enabled,
                            s, a = 0;
                        "number" == typeof e ? t.setTransition(e) : !0 === e && t.setTransition(t.params.speed);
                        let r = e => n ? t.slides.filter(t => parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e)[0] : t.slides.eq(e)[0];
                        if ("auto" !== t.params.slidesPerView && t.params.slidesPerView > 1) {
                            if (t.params.centeredSlides)(t.visibleSlides || d([])).each(e => {
                                i.push(e)
                            });
                            else
                                for (s = 0; s < Math.ceil(t.params.slidesPerView); s += 1) {
                                    let o = t.activeIndex + s;
                                    if (o > t.slides.length && !n) break;
                                    i.push(r(o))
                                }
                        } else i.push(r(t.activeIndex));
                        for (s = 0; s < i.length; s += 1)
                            if (void 0 !== i[s]) {
                                let l = i[s].offsetHeight;
                                a = l > a ? l : a
                            }(a || 0 === a) && t.$wrapperEl.css("height", `${a}px`)
                    },
                    updateSlidesOffset: function() {
                        let e = this.slides;
                        for (let t = 0; t < e.length; t += 1) e[t].swiperSlideOffset = this.isHorizontal() ? e[t].offsetLeft : e[t].offsetTop
                    },
                    updateSlidesProgress: function(e) {
                        void 0 === e && (e = this && this.translate || 0);
                        let t = this,
                            i = t.params,
                            {
                                slides: n,
                                rtlTranslate: s,
                                snapGrid: a
                            } = t;
                        if (0 === n.length) return;
                        void 0 === n[0].swiperSlideOffset && t.updateSlidesOffset();
                        let r = -e;
                        s && (r = e), n.removeClass(i.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
                        for (let o = 0; o < n.length; o += 1) {
                            let l = n[o],
                                c = l.swiperSlideOffset;
                            i.cssMode && i.centeredSlides && (c -= n[0].swiperSlideOffset);
                            let h = (r + (i.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + i.spaceBetween),
                                u = (r - a[0] + (i.centeredSlides ? t.minTranslate() : 0) - c) / (l.swiperSlideSize + i.spaceBetween),
                                p = -(r - c),
                                f = p + t.slidesSizesGrid[o];
                            (p >= 0 && p < t.size - 1 || f > 1 && f <= t.size || p <= 0 && f >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(o), n.eq(o).addClass(i.slideVisibleClass)), l.progress = s ? -h : h, l.originalProgress = s ? -u : u
                        }
                        t.visibleSlides = d(t.visibleSlides)
                    },
                    updateProgress: function(e) {
                        if (void 0 === e) {
                            let t = this.rtlTranslate ? -1 : 1;
                            e = this && this.translate && this.translate * t || 0
                        }
                        let i = this.params,
                            n = this.maxTranslate() - this.minTranslate(),
                            {
                                progress: s,
                                isBeginning: a,
                                isEnd: r
                            } = this,
                            o = a,
                            l = r;
                        0 === n ? (s = 0, a = !0, r = !0) : (a = (s = (e - this.minTranslate()) / n) <= 0, r = s >= 1), Object.assign(this, {
                            progress: s,
                            isBeginning: a,
                            isEnd: r
                        }), (i.watchSlidesProgress || i.centeredSlides && i.autoHeight) && this.updateSlidesProgress(e), a && !o && this.emit("reachBeginning toEdge"), r && !l && this.emit("reachEnd toEdge"), (o && !a || l && !r) && this.emit("fromEdge"), this.emit("progress", s)
                    },
                    updateSlidesClasses: function() {
                        let {
                            slides: e,
                            params: t,
                            $wrapperEl: i,
                            activeIndex: n,
                            realIndex: s
                        } = this, a = this.virtual && t.virtual.enabled, r;
                        e.removeClass(`${t.slideActiveClass} ${t.slideNextClass} ${t.slidePrevClass} ${t.slideDuplicateActiveClass} ${t.slideDuplicateNextClass} ${t.slideDuplicatePrevClass}`), (r = a ? this.$wrapperEl.find(`.${t.slideClass}[data-swiper-slide-index="${n}"]`) : e.eq(n)).addClass(t.slideActiveClass), t.loop && (r.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${s}"]`).addClass(t.slideDuplicateActiveClass) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${s}"]`).addClass(t.slideDuplicateActiveClass));
                        let o = r.nextAll(`.${t.slideClass}`).eq(0).addClass(t.slideNextClass);
                        t.loop && 0 === o.length && (o = e.eq(0)).addClass(t.slideNextClass);
                        let l = r.prevAll(`.${t.slideClass}`).eq(0).addClass(t.slidePrevClass);
                        t.loop && 0 === l.length && (l = e.eq(-1)).addClass(t.slidePrevClass), t.loop && (o.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicateNextClass), l.hasClass(t.slideDuplicateClass) ? i.children(`.${t.slideClass}:not(.${t.slideDuplicateClass})[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass) : i.children(`.${t.slideClass}.${t.slideDuplicateClass}[data-swiper-slide-index="${l.attr("data-swiper-slide-index")}"]`).addClass(t.slideDuplicatePrevClass)), this.emitSlidesClasses()
                    },
                    updateActiveIndex: function(e) {
                        let t = this,
                            i = t.rtlTranslate ? t.translate : -t.translate,
                            {
                                slidesGrid: n,
                                snapGrid: s,
                                params: a,
                                activeIndex: r,
                                realIndex: o,
                                snapIndex: l
                            } = t,
                            d, c = e;
                        if (void 0 === c) {
                            for (let h = 0; h < n.length; h += 1) void 0 !== n[h + 1] ? i >= n[h] && i < n[h + 1] - (n[h + 1] - n[h]) / 2 ? c = h : i >= n[h] && i < n[h + 1] && (c = h + 1) : i >= n[h] && (c = h);
                            a.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0)
                        }
                        if (s.indexOf(i) >= 0) d = s.indexOf(i);
                        else {
                            let u = Math.min(a.slidesPerGroupSkip, c);
                            d = u + Math.floor((c - u) / a.slidesPerGroup)
                        }
                        if (d >= s.length && (d = s.length - 1), c === r) return void(d !== l && (t.snapIndex = d, t.emit("snapIndexChange")));
                        let p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
                        Object.assign(t, {
                            snapIndex: d,
                            realIndex: p,
                            previousIndex: r,
                            activeIndex: c
                        }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), o !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange")
                    },
                    updateClickedSlide: function(e) {
                        let t = this,
                            i = t.params,
                            n = d(e).closest(`.${i.slideClass}`)[0],
                            s, a = !1;
                        if (n) {
                            for (let r = 0; r < t.slides.length; r += 1)
                                if (t.slides[r] === n) {
                                    a = !0, s = r;
                                    break
                                }
                        }
                        if (!n || !a) return t.clickedSlide = void 0, void(t.clickedIndex = void 0);
                        t.clickedSlide = n, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d(n).attr("data-swiper-slide-index"), 10) : t.clickedIndex = s, i.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide()
                    }
                },
                translate: {
                    getTranslate: function(e) {
                        void 0 === e && (e = this.isHorizontal() ? "x" : "y");
                        let {
                            params: t,
                            rtlTranslate: i,
                            translate: n,
                            $wrapperEl: s
                        } = this;
                        if (t.virtualTranslate) return i ? -n : n;
                        if (t.cssMode) return n;
                        let a = p(s[0], e);
                        return i && (a = -a), a || 0
                    },
                    setTranslate: function(e, t) {
                        let i = this,
                            {
                                rtlTranslate: n,
                                params: s,
                                $wrapperEl: a,
                                wrapperEl: r,
                                progress: o
                            } = i,
                            l, d = 0,
                            c = 0;
                        i.isHorizontal() ? d = n ? -e : e : c = e, s.roundLengths && (d = Math.floor(d), c = Math.floor(c)), s.cssMode ? r[i.isHorizontal() ? "scrollLeft" : "scrollTop"] = i.isHorizontal() ? -d : -c : s.virtualTranslate || a.transform(`translate3d(${d}px, ${c}px, 0px)`), i.previousTranslate = i.translate, i.translate = i.isHorizontal() ? d : c;
                        let h = i.maxTranslate() - i.minTranslate();
                        (l = 0 === h ? 0 : (e - i.minTranslate()) / h) !== o && i.updateProgress(e), i.emit("setTranslate", i.translate, t)
                    },
                    minTranslate: function() {
                        return -this.snapGrid[0]
                    },
                    maxTranslate: function() {
                        return -this.snapGrid[this.snapGrid.length - 1]
                    },
                    translateTo: function(e, t, i, n, s) {
                        void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), void 0 === n && (n = !0);
                        let a = this,
                            {
                                params: r,
                                wrapperEl: o
                            } = a;
                        if (a.animating && r.preventInteractionOnTransition) return !1;
                        let l = a.minTranslate(),
                            d = a.maxTranslate(),
                            c;
                        if (c = n && e > l ? l : n && e < d ? d : e, a.updateProgress(c), r.cssMode) {
                            let h = a.isHorizontal();
                            if (0 === t) o[h ? "scrollLeft" : "scrollTop"] = -c;
                            else {
                                if (!a.support.smoothScroll) return y({
                                    swiper: a,
                                    targetPosition: -c,
                                    side: h ? "left" : "top"
                                }), !0;
                                o.scrollTo({
                                    [h ? "left" : "top"]: -c,
                                    behavior: "smooth"
                                })
                            }
                            return !0
                        }
                        return 0 === t ? (a.setTransition(0), a.setTranslate(c), i && (a.emit("beforeTransitionStart", t, s), a.emit("transitionEnd"))) : (a.setTransition(t), a.setTranslate(c), i && (a.emit("beforeTransitionStart", t, s), a.emit("transitionStart")), a.animating || (a.animating = !0, a.onTranslateToWrapperTransitionEnd || (a.onTranslateToWrapperTransitionEnd = function(e) {
                            a && !a.destroyed && e.target === this && (a.$wrapperEl[0].removeEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].removeEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd), a.onTranslateToWrapperTransitionEnd = null, delete a.onTranslateToWrapperTransitionEnd, i && a.emit("transitionEnd"))
                        }), a.$wrapperEl[0].addEventListener("transitionend", a.onTranslateToWrapperTransitionEnd), a.$wrapperEl[0].addEventListener("webkitTransitionEnd", a.onTranslateToWrapperTransitionEnd))), !0
                    }
                },
                transition: {
                    setTransition: function(e, t) {
                        this.params.cssMode || this.$wrapperEl.transition(e), this.emit("setTransition", e, t)
                    },
                    transitionStart: function(e, t) {
                        void 0 === e && (e = !0);
                        let {
                            params: i
                        } = this;
                        i.cssMode || (i.autoHeight && this.updateAutoHeight(), C({
                            swiper: this,
                            runCallbacks: e,
                            direction: t,
                            step: "Start"
                        }))
                    },
                    transitionEnd: function(e, t) {
                        void 0 === e && (e = !0);
                        let i = this,
                            {
                                params: n
                            } = i;
                        i.animating = !1, n.cssMode || (i.setTransition(0), C({
                            swiper: i,
                            runCallbacks: e,
                            direction: t,
                            step: "End"
                        }))
                    }
                },
                slide: {
                    slideTo: function(e, t, i, n, s) {
                        if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "number" != typeof e && "string" != typeof e) throw Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e}] given.`);
                        if ("string" == typeof e) {
                            let a = parseInt(e, 10);
                            if (!isFinite(a)) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                            e = a
                        }
                        let r = this,
                            o = e;
                        o < 0 && (o = 0);
                        let {
                            params: l,
                            snapGrid: d,
                            slidesGrid: c,
                            previousIndex: h,
                            activeIndex: u,
                            rtlTranslate: p,
                            wrapperEl: f,
                            enabled: m
                        } = r;
                        if (r.animating && l.preventInteractionOnTransition || !m && !n && !s) return !1;
                        let g = Math.min(r.params.slidesPerGroupSkip, o),
                            v = g + Math.floor((o - g) / r.params.slidesPerGroup);
                        v >= d.length && (v = d.length - 1);
                        let $ = -d[v];
                        if (l.normalizeSlideIndex)
                            for (let b = 0; b < c.length; b += 1) {
                                let w = -Math.floor(100 * $),
                                    _ = Math.floor(100 * c[b]),
                                    C = Math.floor(100 * c[b + 1]);
                                void 0 !== c[b + 1] ? w >= _ && w < C - (C - _) / 2 ? o = b : w >= _ && w < C && (o = b + 1) : w >= _ && (o = b)
                            }
                        if (r.initialized && o !== u && (!r.allowSlideNext && $ < r.translate && $ < r.minTranslate() || !r.allowSlidePrev && $ > r.translate && $ > r.maxTranslate() && (u || 0) !== o)) return !1;
                        let x;
                        if (o !== (h || 0) && i && r.emit("beforeSlideChangeStart"), r.updateProgress($), x = o > u ? "next" : o < u ? "prev" : "reset", p && -$ === r.translate || !p && $ === r.translate) return r.updateActiveIndex(o), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate($), "reset" !== x && (r.transitionStart(i, x), r.transitionEnd(i, x)), !1;
                        if (l.cssMode) {
                            let k = r.isHorizontal(),
                                T = p ? $ : -$;
                            if (0 === t) {
                                let E = r.virtual && r.params.virtual.enabled;
                                E && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), f[k ? "scrollLeft" : "scrollTop"] = T, E && requestAnimationFrame(() => {
                                    r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1
                                })
                            } else {
                                if (!r.support.smoothScroll) return y({
                                    swiper: r,
                                    targetPosition: T,
                                    side: k ? "left" : "top"
                                }), !0;
                                f.scrollTo({
                                    [k ? "left" : "top"]: T,
                                    behavior: "smooth"
                                })
                            }
                            return !0
                        }
                        return r.setTransition(t), r.setTranslate($), r.updateActiveIndex(o), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, n), r.transitionStart(i, x), 0 === t ? r.transitionEnd(i, x) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                            r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(i, x))
                        }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0
                    },
                    slideToLoop: function(e, t, i, n) {
                        if (void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === i && (i = !0), "string" == typeof e) {
                            let s = parseInt(e, 10);
                            if (!isFinite(s)) throw Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e}] given.`);
                            e = s
                        }
                        let a = e;
                        return this.params.loop && (a += this.loopedSlides), this.slideTo(a, t, i, n)
                    },
                    slideNext: function(e, t, i) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        let n = this,
                            {
                                animating: s,
                                enabled: a,
                                params: r
                            } = n;
                        if (!a) return n;
                        let o = r.slidesPerGroup;
                        "auto" === r.slidesPerView && 1 === r.slidesPerGroup && r.slidesPerGroupAuto && (o = Math.max(n.slidesPerViewDynamic("current", !0), 1));
                        let l = n.activeIndex < r.slidesPerGroupSkip ? 1 : o;
                        if (r.loop) {
                            if (s && r.loopPreventsSlide) return !1;
                            n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                        }
                        return r.rewind && n.isEnd ? n.slideTo(0, e, t, i) : n.slideTo(n.activeIndex + l, e, t, i)
                    },
                    slidePrev: function(e, t, i) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
                        let n = this,
                            {
                                params: s,
                                animating: a,
                                snapGrid: r,
                                slidesGrid: o,
                                rtlTranslate: l,
                                enabled: d
                            } = n;
                        if (!d) return n;
                        if (s.loop) {
                            if (a && s.loopPreventsSlide) return !1;
                            n.loopFix(), n._clientLeft = n.$wrapperEl[0].clientLeft
                        }

                        function c(e) {
                            return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e)
                        }
                        let h = c(l ? n.translate : -n.translate),
                            u = r.map(e => c(e)),
                            p = r[u.indexOf(h) - 1];
                        if (void 0 === p && s.cssMode) {
                            let f;
                            r.forEach((e, t) => {
                                h >= e && (f = t)
                            }), void 0 !== f && (p = r[f > 0 ? f - 1 : f])
                        }
                        let m = 0;
                        if (void 0 !== p && ((m = o.indexOf(p)) < 0 && (m = n.activeIndex - 1), "auto" === s.slidesPerView && 1 === s.slidesPerGroup && s.slidesPerGroupAuto && (m = Math.max(m = m - n.slidesPerViewDynamic("previous", !0) + 1, 0))), s.rewind && n.isBeginning) {
                            let g = n.params.virtual && n.params.virtual.enabled && n.virtual ? n.virtual.slides.length - 1 : n.slides.length - 1;
                            return n.slideTo(g, e, t, i)
                        }
                        return n.slideTo(m, e, t, i)
                    },
                    slideReset: function(e, t, i) {
                        return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, i)
                    },
                    slideToClosest: function(e, t, i, n) {
                        void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === n && (n = .5);
                        let s = this.activeIndex,
                            a = Math.min(this.params.slidesPerGroupSkip, s),
                            r = a + Math.floor((s - a) / this.params.slidesPerGroup),
                            o = this.rtlTranslate ? this.translate : -this.translate;
                        if (o >= this.snapGrid[r]) {
                            let l = this.snapGrid[r];
                            o - l > (this.snapGrid[r + 1] - l) * n && (s += this.params.slidesPerGroup)
                        } else {
                            let d = this.snapGrid[r - 1];
                            o - d <= (this.snapGrid[r] - d) * n && (s -= this.params.slidesPerGroup)
                        }
                        return s = Math.min(s = Math.max(s, 0), this.slidesGrid.length - 1), this.slideTo(s, e, t, i)
                    },
                    slideToClickedSlide: function() {
                        let e = this,
                            {
                                params: t,
                                $wrapperEl: i
                            } = e,
                            n = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView,
                            s, a = e.clickedIndex;
                        if (t.loop) {
                            if (e.animating) return;
                            s = parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? a < e.loopedSlides - n / 2 || a > e.slides.length - e.loopedSlides + n / 2 ? (e.loopFix(), a = i.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), h(() => {
                                e.slideTo(a)
                            })) : e.slideTo(a) : a > e.slides.length - n ? (e.loopFix(), a = i.children(`.${t.slideClass}[data-swiper-slide-index="${s}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), h(() => {
                                e.slideTo(a)
                            })) : e.slideTo(a)
                        } else e.slideTo(a)
                    }
                },
                loop: {
                    loopCreate: function() {
                        let e = this,
                            t = n(),
                            {
                                params: i,
                                $wrapperEl: s
                            } = e,
                            a = s.children().length > 0 ? d(s.children()[0].parentNode) : s;
                        a.children(`.${i.slideClass}.${i.slideDuplicateClass}`).remove();
                        let r = a.children(`.${i.slideClass}`);
                        if (i.loopFillGroupWithBlank) {
                            let o = i.slidesPerGroup - r.length % i.slidesPerGroup;
                            if (o !== i.slidesPerGroup) {
                                for (let l = 0; l < o; l += 1) {
                                    let c = d(t.createElement("div")).addClass(`${i.slideClass} ${i.slideBlankClass}`);
                                    a.append(c)
                                }
                                r = a.children(`.${i.slideClass}`)
                            }
                        }
                        "auto" !== i.slidesPerView || i.loopedSlides || (i.loopedSlides = r.length), e.loopedSlides = Math.ceil(parseFloat(i.loopedSlides || i.slidesPerView, 10)), e.loopedSlides += i.loopAdditionalSlides, e.loopedSlides > r.length && e.params.loopedSlidesLimit && (e.loopedSlides = r.length);
                        let h = [],
                            u = [];
                        r.each((e, t) => {
                            d(e).attr("data-swiper-slide-index", t)
                        });
                        for (let p = 0; p < e.loopedSlides; p += 1) {
                            let f = p - Math.floor(p / r.length) * r.length;
                            u.push(r.eq(f)[0]), h.unshift(r.eq(r.length - f - 1)[0])
                        }
                        for (let m = 0; m < u.length; m += 1) a.append(d(u[m].cloneNode(!0)).addClass(i.slideDuplicateClass));
                        for (let g = h.length - 1; g >= 0; g -= 1) a.prepend(d(h[g].cloneNode(!0)).addClass(i.slideDuplicateClass))
                    },
                    loopFix: function() {
                        let e = this;
                        e.emit("beforeLoopFix");
                        let {
                            activeIndex: t,
                            slides: i,
                            loopedSlides: n,
                            allowSlidePrev: s,
                            allowSlideNext: a,
                            snapGrid: r,
                            rtlTranslate: o
                        } = e, l;
                        e.allowSlidePrev = !0, e.allowSlideNext = !0;
                        let d = -r[t] - e.getTranslate();
                        t < n ? (l = i.length - 3 * n + t, l += n, e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)) : t >= i.length - n && (l = -i.length + t + n, l += n, e.slideTo(l, 0, !1, !0) && 0 !== d && e.setTranslate((o ? -e.translate : e.translate) - d)), e.allowSlidePrev = s, e.allowSlideNext = a, e.emit("loopFix")
                    },
                    loopDestroy: function() {
                        let {
                            $wrapperEl: e,
                            params: t,
                            slides: i
                        } = this;
                        e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), i.removeAttr("data-swiper-slide-index")
                    }
                },
                grabCursor: {
                    setGrabCursor: function(e) {
                        if (this.support.touch || !this.params.simulateTouch || this.params.watchOverflow && this.isLocked || this.params.cssMode) return;
                        let t = "container" === this.params.touchEventsTarget ? this.el : this.wrapperEl;
                        t.style.cursor = "move", t.style.cursor = e ? "grabbing" : "grab"
                    },
                    unsetGrabCursor: function() {
                        let e = this;
                        e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "")
                    }
                },
                events: {
                    attachEvents: function() {
                        let e = this,
                            t = n(),
                            {
                                params: i,
                                support: s
                            } = e;
                        e.onTouchStart = x.bind(e), e.onTouchMove = k.bind(e), e.onTouchEnd = T.bind(e), i.cssMode && (e.onScroll = D.bind(e)), e.onClick = S.bind(e), s.touch && !M && (t.addEventListener("touchstart", A), M = !0), P(e, "on")
                    },
                    detachEvents: function() {
                        P(this, "off")
                    }
                },
                breakpoints: {
                    setBreakpoint: function() {
                        let e = this,
                            {
                                activeIndex: t,
                                initialized: i,
                                loopedSlides: n = 0,
                                params: s,
                                $el: a
                            } = e,
                            r = s.breakpoints;
                        if (!r || r && 0 === Object.keys(r).length) return;
                        let o = e.getBreakpoint(r, e.params.breakpointsBase, e.el);
                        if (!o || e.currentBreakpoint === o) return;
                        let l = (o in r ? r[o] : void 0) || e.originalParams,
                            d = L(e, s),
                            c = L(e, l),
                            h = s.enabled;
                        d && !c ? (a.removeClass(`${s.containerModifierClass}grid ${s.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (a.addClass(`${s.containerModifierClass}grid`), (l.grid.fill && "column" === l.grid.fill || !l.grid.fill && "column" === s.grid.fill) && a.addClass(`${s.containerModifierClass}grid-column`), e.emitContainerClasses()), ["navigation", "pagination", "scrollbar"].forEach(t => {
                            let i = s[t] && s[t].enabled,
                                n = l[t] && l[t].enabled;
                            i && !n && e[t].disable(), !i && n && e[t].enable()
                        });
                        let u = l.direction && l.direction !== s.direction,
                            p = s.loop && (l.slidesPerView !== s.slidesPerView || u);
                        u && i && e.changeDirection(), g(e.params, l);
                        let f = e.params.enabled;
                        Object.assign(e, {
                            allowTouchMove: e.params.allowTouchMove,
                            allowSlideNext: e.params.allowSlideNext,
                            allowSlidePrev: e.params.allowSlidePrev
                        }), h && !f ? e.disable() : !h && f && e.enable(), e.currentBreakpoint = o, e.emit("_beforeBreakpoint", l), p && i && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - n + e.loopedSlides, 0, !1)), e.emit("breakpoint", l)
                    },
                    getBreakpoint: function(e, t, i) {
                        if (void 0 === t && (t = "window"), !e || "container" === t && !i) return;
                        let n = !1,
                            s = a(),
                            r = "window" === t ? s.innerHeight : i.clientHeight,
                            o = Object.keys(e).map(e => {
                                if ("string" == typeof e && 0 === e.indexOf("@")) {
                                    let t = parseFloat(e.substr(1));
                                    return {
                                        value: r * t,
                                        point: e
                                    }
                                }
                                return {
                                    value: e,
                                    point: e
                                }
                            });
                        o.sort((e, t) => parseInt(e.value, 10) - parseInt(t.value, 10));
                        for (let l = 0; l < o.length; l += 1) {
                            let {
                                point: d,
                                value: c
                            } = o[l];
                            "window" === t ? s.matchMedia(`(min-width: ${c}px)`).matches && (n = d) : c <= i.clientWidth && (n = d)
                        }
                        return n || "max"
                    }
                },
                checkOverflow: {
                    checkOverflow: function() {
                        let e = this,
                            {
                                isLocked: t,
                                params: i
                            } = e,
                            {
                                slidesOffsetBefore: n
                            } = i;
                        if (n) {
                            let s = e.slides.length - 1,
                                a = e.slidesGrid[s] + e.slidesSizesGrid[s] + 2 * n;
                            e.isLocked = e.size > a
                        } else e.isLocked = 1 === e.snapGrid.length;
                        !0 === i.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === i.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock")
                    }
                },
                classes: {
                    addClasses: function() {
                        let {
                            classNames: e,
                            params: t,
                            rtl: i,
                            $el: n,
                            device: s,
                            support: a
                        } = this, r = function(e, t) {
                            let i = [];
                            return e.forEach(e => {
                                "object" == typeof e ? Object.keys(e).forEach(n => {
                                    e[n] && i.push(t + n)
                                }) : "string" == typeof e && i.push(t + e)
                            }), i
                        }(["initialized", t.direction, {
                            "pointer-events": !a.touch
                        }, {
                            "free-mode": this.params.freeMode && t.freeMode.enabled
                        }, {
                            autoheight: t.autoHeight
                        }, {
                            rtl: i
                        }, {
                            grid: t.grid && t.grid.rows > 1
                        }, {
                            "grid-column": t.grid && t.grid.rows > 1 && "column" === t.grid.fill
                        }, {
                            android: s.android
                        }, {
                            ios: s.ios
                        }, {
                            "css-mode": t.cssMode
                        }, {
                            centered: t.cssMode && t.centeredSlides
                        }, {
                            "watch-progress": t.watchSlidesProgress
                        }], t.containerModifierClass);
                        e.push(...r), n.addClass([...e].join(" ")), this.emitContainerClasses()
                    },
                    removeClasses: function() {
                        let {
                            $el: e,
                            classNames: t
                        } = this;
                        e.removeClass(t.join(" ")), this.emitContainerClasses()
                    }
                },
                images: {
                    loadImage: function(e, t, i, n, s, r) {
                        let o = a(),
                            l;

                        function c() {
                            r && r()
                        }
                        d(e).parent("picture")[0] || e.complete && s ? c() : t ? ((l = new o.Image).onload = c, l.onerror = c, n && (l.sizes = n), i && (l.srcset = i), t && (l.src = t)) : c()
                    },
                    preloadImages: function() {
                        let e = this;

                        function t() {
                            null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")))
                        }
                        e.imagesToLoad = e.$el.find("img");
                        for (let i = 0; i < e.imagesToLoad.length; i += 1) {
                            let n = e.imagesToLoad[i];
                            e.loadImage(n, n.currentSrc || n.getAttribute("src"), n.srcset || n.getAttribute("srcset"), n.sizes || n.getAttribute("sizes"), !0, t)
                        }
                    }
                }
            },
            N = {};
        class z {
            constructor() {
                let e, t;
                for (var i, n = arguments.length, s = Array(n), r = 0; r < n; r++) s[r] = arguments[r];
                if (1 === s.length && s[0].constructor && "Object" === Object.prototype.toString.call(s[0]).slice(8, -1) ? t = s[0] : [e, t] = s, t || (t = {}), t = g({}, t), e && !t.el && (t.el = e), t.el && d(t.el).length > 1) {
                    let o = [];
                    return d(t.el).each(e => {
                        let i = g({}, t, {
                            el: e
                        });
                        o.push(new z(i))
                    }), o
                }
                let l = this;
                l.__swiper__ = !0, l.support = _(), l.device = (i = {
                    userAgent: t.userAgent
                }, b || (b = function(e) {
                    let {
                        userAgent: t
                    } = void 0 === e ? {} : e, i = _(), n = a(), s = n.navigator.platform, r = t || n.navigator.userAgent, o = {
                        ios: !1,
                        android: !1
                    }, l = n.screen.width, d = n.screen.height, c = r.match(/(Android);?[\s\/]+([\d.]+)?/), h = r.match(/(iPad).*OS\s([\d_]+)/), u = r.match(/(iPod)(.*OS\s([\d_]+))?/), p = !h && r.match(/(iPhone\sOS|iOS)\s([\d_]+)/), f = "MacIntel" === s;
                    return !h && f && i.touch && ["1024x1366", "1366x1024", "834x1194", "1194x834", "834x1112", "1112x834", "768x1024", "1024x768", "820x1180", "1180x820", "810x1080", "1080x810"].indexOf(`${l}x${d}`) >= 0 && ((h = r.match(/(Version)\/([\d.]+)/)) || (h = [0, 1, "13_0_0"]), f = !1), c && "Win32" !== s && (o.os = "android", o.android = !0), (h || p || u) && (o.os = "ios", o.ios = !0), o
                }(i)), b), l.browser = (w || (w = function() {
                    let e = a();
                    return {
                        isSafari: function() {
                            let t = e.navigator.userAgent.toLowerCase();
                            return t.indexOf("safari") >= 0 && 0 > t.indexOf("chrome") && 0 > t.indexOf("android")
                        }(),
                        isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
                    }
                }()), w), l.eventsListeners = {}, l.eventsAnyListeners = [], l.modules = [...l.__modules__], t.modules && Array.isArray(t.modules) && l.modules.push(...t.modules);
                let c = {};
                l.modules.forEach(e => {
                    var i, n;
                    e({
                        swiper: l,
                        extendParams: (i = t, n = c, function(e) {
                            void 0 === e && (e = {});
                            let t = Object.keys(e)[0],
                                s = e[t];
                            "object" == typeof s && null !== s && (["navigation", "pagination", "scrollbar"].indexOf(t) >= 0 && !0 === i[t] && (i[t] = {
                                auto: !0
                            }), t in i && "enabled" in s && (!0 === i[t] && (i[t] = {
                                enabled: !0
                            }), "object" != typeof i[t] || "enabled" in i[t] || (i[t].enabled = !0), i[t] || (i[t] = {
                                enabled: !1
                            }))), g(n, e)
                        }),
                        on: l.on.bind(l),
                        once: l.once.bind(l),
                        off: l.off.bind(l),
                        emit: l.emit.bind(l)
                    })
                });
                let h = g({}, I, c);
                return l.params = g({}, h, N, t), l.originalParams = g({}, l.params), l.passedParams = g({}, t), l.params && l.params.on && Object.keys(l.params.on).forEach(e => {
                    l.on(e, l.params.on[e])
                }), l.params && l.params.onAny && l.onAny(l.params.onAny), l.$ = d, Object.assign(l, {
                    enabled: l.params.enabled,
                    el: e,
                    classNames: [],
                    slides: d(),
                    slidesGrid: [],
                    snapGrid: [],
                    slidesSizesGrid: [],
                    isHorizontal: () => "horizontal" === l.params.direction,
                    isVertical: () => "vertical" === l.params.direction,
                    activeIndex: 0,
                    realIndex: 0,
                    isBeginning: !0,
                    isEnd: !1,
                    translate: 0,
                    previousTranslate: 0,
                    progress: 0,
                    velocity: 0,
                    animating: !1,
                    allowSlideNext: l.params.allowSlideNext,
                    allowSlidePrev: l.params.allowSlidePrev,
                    touchEvents: function() {
                        let e = ["touchstart", "touchmove", "touchend", "touchcancel"],
                            t = ["pointerdown", "pointermove", "pointerup"];
                        return l.touchEventsTouch = {
                            start: e[0],
                            move: e[1],
                            end: e[2],
                            cancel: e[3]
                        }, l.touchEventsDesktop = {
                            start: t[0],
                            move: t[1],
                            end: t[2]
                        }, l.support.touch || !l.params.simulateTouch ? l.touchEventsTouch : l.touchEventsDesktop
                    }(),
                    touchEventsData: {
                        isTouched: void 0,
                        isMoved: void 0,
                        allowTouchCallbacks: void 0,
                        touchStartTime: void 0,
                        isScrolling: void 0,
                        currentTranslate: void 0,
                        startTranslate: void 0,
                        allowThresholdMove: void 0,
                        focusableElements: l.params.focusableElements,
                        lastClickTime: u(),
                        clickTimeout: void 0,
                        velocities: [],
                        allowMomentumBounce: void 0,
                        isTouchEvent: void 0,
                        startMoving: void 0
                    },
                    allowClick: !0,
                    allowTouchMove: l.params.allowTouchMove,
                    touches: {
                        startX: 0,
                        startY: 0,
                        currentX: 0,
                        currentY: 0,
                        diff: 0
                    },
                    imagesToLoad: [],
                    imagesLoaded: 0
                }), l.emit("_swiper"), l.params.init && l.init(), l
            }
            enable() {
                let e = this;
                e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"))
            }
            disable() {
                let e = this;
                e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"))
            }
            setProgress(e, t) {
                e = Math.min(Math.max(e, 0), 1);
                let i = this.minTranslate(),
                    n = (this.maxTranslate() - i) * e + i;
                this.translateTo(n, void 0 === t ? 0 : t), this.updateActiveIndex(), this.updateSlidesClasses()
            }
            emitContainerClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el) return;
                let t = e.el.className.split(" ").filter(t => 0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass));
                e.emit("_containerClasses", t.join(" "))
            }
            getSlideClasses(e) {
                let t = this;
                return t.destroyed ? "" : e.className.split(" ").filter(e => 0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)).join(" ")
            }
            emitSlidesClasses() {
                let e = this;
                if (!e.params._emitClasses || !e.el) return;
                let t = [];
                e.slides.each(i => {
                    let n = e.getSlideClasses(i);
                    t.push({
                        slideEl: i,
                        classNames: n
                    }), e.emit("_slideClass", i, n)
                }), e.emit("_slideClasses", t)
            }
            slidesPerViewDynamic(e, t) {
                void 0 === e && (e = "current"), void 0 === t && (t = !1);
                let {
                    params: i,
                    slides: n,
                    slidesGrid: s,
                    slidesSizesGrid: a,
                    size: r,
                    activeIndex: o
                } = this, l = 1;
                if (i.centeredSlides) {
                    let d, c = n[o].swiperSlideSize;
                    for (let h = o + 1; h < n.length; h += 1) n[h] && !d && (c += n[h].swiperSlideSize, l += 1, c > r && (d = !0));
                    for (let u = o - 1; u >= 0; u -= 1) n[u] && !d && (c += n[u].swiperSlideSize, l += 1, c > r && (d = !0))
                } else if ("current" === e)
                    for (let p = o + 1; p < n.length; p += 1)(t ? s[p] + a[p] - s[o] < r : s[p] - s[o] < r) && (l += 1);
                else
                    for (let f = o - 1; f >= 0; f -= 1) s[o] - s[f] < r && (l += 1);
                return l
            }
            update() {
                let e = this;
                if (!e || e.destroyed) return;
                let {
                    snapGrid: t,
                    params: i
                } = e;

                function n() {
                    let t = e.rtlTranslate ? -1 * e.translate : e.translate,
                        i = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                    e.setTranslate(i), e.updateActiveIndex(), e.updateSlidesClasses()
                }
                let s;
                i.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (n(), e.params.autoHeight && e.updateAutoHeight()) : (s = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0)) || n(), i.watchOverflow && t !== e.snapGrid && e.checkOverflow(), e.emit("update")
            }
            changeDirection(e, t) {
                void 0 === t && (t = !0);
                let i = this,
                    n = i.params.direction;
                return e || (e = "horizontal" === n ? "vertical" : "horizontal"), e === n || "horizontal" !== e && "vertical" !== e || (i.$el.removeClass(`${i.params.containerModifierClass}${n}`).addClass(`${i.params.containerModifierClass}${e}`), i.emitContainerClasses(), i.params.direction = e, i.slides.each(t => {
                    "vertical" === e ? t.style.width = "" : t.style.height = ""
                }), i.emit("changeDirection"), t && i.update()), i
            }
            changeLanguageDirection(e) {
                let t = this;
                t.rtl && "rtl" === e || !t.rtl && "ltr" === e || (t.rtl = "rtl" === e, t.rtlTranslate = "horizontal" === t.params.direction && t.rtl, t.rtl ? (t.$el.addClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "rtl") : (t.$el.removeClass(`${t.params.containerModifierClass}rtl`), t.el.dir = "ltr"), t.update())
            }
            mount(e) {
                let t = this;
                if (t.mounted) return !0;
                let i = d(e || t.params.el);
                if (!(e = i[0])) return !1;
                e.swiper = t;
                let s = () => `.${(t.params.wrapperClass||"").trim().split(" ").join(".")}`,
                    a = (() => {
                        if (e && e.shadowRoot && e.shadowRoot.querySelector) {
                            let t = d(e.shadowRoot.querySelector(s()));
                            return t.children = e => i.children(e), t
                        }
                        return i.children ? i.children(s()) : d(i).children(s())
                    })();
                if (0 === a.length && t.params.createElements) {
                    let r = n().createElement("div");
                    a = d(r), r.className = t.params.wrapperClass, i.append(r), i.children(`.${t.params.slideClass}`).each(e => {
                        a.append(e)
                    })
                }
                return Object.assign(t, {
                    $el: i,
                    el: e,
                    $wrapperEl: a,
                    wrapperEl: a[0],
                    mounted: !0,
                    rtl: "rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction"),
                    rtlTranslate: "horizontal" === t.params.direction && ("rtl" === e.dir.toLowerCase() || "rtl" === i.css("direction")),
                    wrongRTL: "-webkit-box" === a.css("display")
                }), !0
            }
            init(e) {
                let t = this;
                return t.initialized || !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t
            }
            destroy(e, t) {
                void 0 === e && (e = !0), void 0 === t && (t = !0);
                let i = this,
                    {
                        params: n,
                        $el: s,
                        $wrapperEl: a,
                        slides: r
                    } = i;
                return void 0 === i.params || i.destroyed || (i.emit("beforeDestroy"), i.initialized = !1, i.detachEvents(), n.loop && i.loopDestroy(), t && (i.removeClasses(), s.removeAttr("style"), a.removeAttr("style"), r && r.length && r.removeClass([n.slideVisibleClass, n.slideActiveClass, n.slideNextClass, n.slidePrevClass].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), i.emit("destroy"), Object.keys(i.eventsListeners).forEach(e => {
                    i.off(e)
                }), !1 !== e && (i.$el[0].swiper = null, function(e) {
                    let t = e;
                    Object.keys(t).forEach(e => {
                        try {
                            t[e] = null
                        } catch (i) {}
                        try {
                            delete t[e]
                        } catch (n) {}
                    })
                }(i)), i.destroyed = !0), null
            }
            static extendDefaults(e) {
                g(N, e)
            }
            static get extendedDefaults() {
                return N
            }
            static get defaults() {
                return I
            }
            static installModule(e) {
                z.prototype.__modules__ || (z.prototype.__modules__ = []);
                let t = z.prototype.__modules__;
                "function" == typeof e && 0 > t.indexOf(e) && t.push(e)
            }
            static use(e) {
                return Array.isArray(e) ? (e.forEach(e => z.installModule(e)), z) : (z.installModule(e), z)
            }
        }

        function H(e, t, i, s) {
            let a = n();
            return e.params.createElements && Object.keys(s).forEach(n => {
                if (!i[n] && !0 === i.auto) {
                    let r = e.$el.children(`.${s[n]}`)[0];
                    r || ((r = a.createElement("div")).className = s[n], e.$el.append(r)), i[n] = r, t[n] = r
                }
            }), i
        }

        function Y(e) {
            return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g,"\\$1").replace(/ /g,".")}`
        }

        function B(e) {
            let {
                $wrapperEl: t,
                params: i
            } = this;
            if (i.loop && this.loopDestroy(), "object" == typeof e && "length" in e)
                for (let n = 0; n < e.length; n += 1) e[n] && t.append(e[n]);
            else t.append(e);
            i.loop && this.loopCreate(), i.observer || this.update()
        }

        function q(e) {
            let {
                params: t,
                $wrapperEl: i,
                activeIndex: n
            } = this;
            t.loop && this.loopDestroy();
            let s = n + 1;
            if ("object" == typeof e && "length" in e) {
                for (let a = 0; a < e.length; a += 1) e[a] && i.prepend(e[a]);
                s = n + e.length
            } else i.prepend(e);
            t.loop && this.loopCreate(), t.observer || this.update(), this.slideTo(s, 0, !1)
        }

        function W(e, t) {
            let i = this,
                {
                    $wrapperEl: n,
                    params: s,
                    activeIndex: a
                } = i,
                r = a;
            s.loop && (r -= i.loopedSlides, i.loopDestroy(), i.slides = n.children(`.${s.slideClass}`));
            let o = i.slides.length;
            if (e <= 0) return void i.prependSlide(t);
            if (e >= o) return void i.appendSlide(t);
            let l = r > e ? r + 1 : r,
                d = [];
            for (let c = o - 1; c >= e; c -= 1) {
                let h = i.slides.eq(c);
                h.remove(), d.unshift(h)
            }
            if ("object" == typeof t && "length" in t) {
                for (let u = 0; u < t.length; u += 1) t[u] && n.append(t[u]);
                l = r > e ? r + t.length : r
            } else n.append(t);
            for (let p = 0; p < d.length; p += 1) n.append(d[p]);
            s.loop && i.loopCreate(), s.observer || i.update(), s.loop ? i.slideTo(l + i.loopedSlides, 0, !1) : i.slideTo(l, 0, !1)
        }

        function F(e) {
            let t = this,
                {
                    params: i,
                    $wrapperEl: n,
                    activeIndex: s
                } = t,
                a = s;
            i.loop && (a -= t.loopedSlides, t.loopDestroy(), t.slides = n.children(`.${i.slideClass}`));
            let r, o = a;
            if ("object" == typeof e && "length" in e) {
                for (let l = 0; l < e.length; l += 1) r = e[l], t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1);
                o = Math.max(o, 0)
            } else r = e, t.slides[r] && t.slides.eq(r).remove(), r < o && (o -= 1), o = Math.max(o, 0);
            i.loop && t.loopCreate(), i.observer || t.update(), i.loop ? t.slideTo(o + t.loopedSlides, 0, !1) : t.slideTo(o, 0, !1)
        }

        function R() {
            let e = [];
            for (let t = 0; t < this.slides.length; t += 1) e.push(t);
            this.removeSlide(e)
        }

        function j(e) {
            let {
                effect: t,
                swiper: i,
                on: n,
                setTranslate: s,
                setTransition: a,
                overwriteParams: r,
                perspective: o,
                recreateShadows: l,
                getEffectParams: d
            } = e, c;
            n("beforeInit", () => {
                if (i.params.effect !== t) return;
                i.classNames.push(`${i.params.containerModifierClass}${t}`), o && o() && i.classNames.push(`${i.params.containerModifierClass}3d`);
                let e = r ? r() : {};
                Object.assign(i.params, e), Object.assign(i.originalParams, e)
            }), n("setTranslate", () => {
                i.params.effect === t && s()
            }), n("setTransition", (e, n) => {
                i.params.effect === t && a(n)
            }), n("transitionEnd", () => {
                i.params.effect === t && l && d && d().slideShadows && (i.slides.each(e => {
                    i.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove()
                }), l())
            }), n("virtualUpdate", () => {
                i.params.effect === t && (i.slides.length || (c = !0), requestAnimationFrame(() => {
                    c && i.slides && i.slides.length && (s(), c = !1)
                }))
            })
        }

        function V(e, t) {
            return e.transformEl ? t.find(e.transformEl).css({
                "backface-visibility": "hidden",
                "-webkit-backface-visibility": "hidden"
            }) : t
        }

        function X(e) {
            let {
                swiper: t,
                duration: i,
                transformEl: n,
                allSlides: s
            } = e, {
                slides: a,
                activeIndex: r,
                $wrapperEl: o
            } = t;
            if (t.params.virtualTranslate && 0 !== i) {
                let l, d = !1;
                (l = s ? n ? a.find(n) : a : n ? a.eq(r).find(n) : a.eq(r)).transitionEnd(() => {
                    if (d || !t || t.destroyed) return;
                    d = !0, t.animating = !1;
                    let e = ["webkitTransitionEnd", "transitionend"];
                    for (let i = 0; i < e.length; i += 1) o.trigger(e[i])
                })
            }
        }

        function G(e, t, i) {
            let n = "swiper-slide-shadow" + (i ? `-${i}` : ""),
                s = e.transformEl ? t.find(e.transformEl) : t,
                a = s.children(`.${n}`);
            return a.length || (a = d(`<div class="swiper-slide-shadow${i?`-${i}`:""}"></div>`), s.append(a)), a
        }
        Object.keys(O).forEach(e => {
            Object.keys(O[e]).forEach(t => {
                z.prototype[t] = O[e][t]
            })
        }), z.use([function(e) {
            let {
                swiper: t,
                on: i,
                emit: n
            } = e, s = a(), r = null, o = null, l = () => {
                t && !t.destroyed && t.initialized && (n("beforeResize"), n("resize"))
            }, d = () => {
                t && !t.destroyed && t.initialized && n("orientationchange")
            };
            i("init", () => {
                t.params.resizeObserver && void 0 !== s.ResizeObserver ? t && !t.destroyed && t.initialized && (r = new ResizeObserver(e => {
                    o = s.requestAnimationFrame(() => {
                        let {
                            width: i,
                            height: n
                        } = t, s = i, a = n;
                        e.forEach(e => {
                            let {
                                contentBoxSize: i,
                                contentRect: n,
                                target: r
                            } = e;
                            r && r !== t.el || (s = n ? n.width : (i[0] || i).inlineSize, a = n ? n.height : (i[0] || i).blockSize)
                        }), s === i && a === n || l()
                    })
                })).observe(t.el) : (s.addEventListener("resize", l), s.addEventListener("orientationchange", d))
            }), i("destroy", () => {
                o && s.cancelAnimationFrame(o), r && r.unobserve && t.el && (r.unobserve(t.el), r = null), s.removeEventListener("resize", l), s.removeEventListener("orientationchange", d)
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n,
                emit: s
            } = e, r = [], o = a(), l = function(e, t) {
                void 0 === t && (t = {});
                let i = new(o.MutationObserver || o.WebkitMutationObserver)(e => {
                    if (1 === e.length) return void s("observerUpdate", e[0]);
                    let t = function() {
                        s("observerUpdate", e[0])
                    };
                    o.requestAnimationFrame ? o.requestAnimationFrame(t) : o.setTimeout(t, 0)
                });
                i.observe(e, {
                    attributes: void 0 === t.attributes || t.attributes,
                    childList: void 0 === t.childList || t.childList,
                    characterData: void 0 === t.characterData || t.characterData
                }), r.push(i)
            };
            i({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }), n("init", () => {
                if (t.params.observer) {
                    if (t.params.observeParents) {
                        let e = t.$el.parents();
                        for (let i = 0; i < e.length; i += 1) l(e[i])
                    }
                    l(t.$el[0], {
                        childList: t.params.observeSlideChildren
                    }), l(t.$wrapperEl[0], {
                        attributes: !1
                    })
                }
            }), n("destroy", () => {
                r.forEach(e => {
                    e.disconnect()
                }), r.splice(0, r.length)
            })
        }]);
        let U = [function(e) {
            let t, {
                swiper: i,
                extendParams: n,
                on: s,
                emit: a
            } = e;

            function r(e, t) {
                let n = i.params.virtual;
                if (n.cache && i.virtual.cache[t]) return i.virtual.cache[t];
                let s = n.renderSlide ? d(n.renderSlide.call(i, e, t)) : d(`<div class="${i.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                return s.attr("data-swiper-slide-index") || s.attr("data-swiper-slide-index", t), n.cache && (i.virtual.cache[t] = s), s
            }

            function o(e) {
                let {
                    slidesPerView: t,
                    slidesPerGroup: n,
                    centeredSlides: s
                } = i.params, {
                    addSlidesBefore: o,
                    addSlidesAfter: l
                } = i.params.virtual, {
                    from: d,
                    to: c,
                    slides: h,
                    slidesGrid: u,
                    offset: p
                } = i.virtual;
                i.params.cssMode || i.updateActiveIndex();
                let f = i.activeIndex || 0,
                    m, g, v;
                m = i.rtlTranslate ? "right" : i.isHorizontal() ? "left" : "top", s ? (g = Math.floor(t / 2) + n + l, v = Math.floor(t / 2) + n + o) : (g = t + (n - 1) + l, v = n + o);
                let y = Math.max((f || 0) - v, 0),
                    $ = Math.min((f || 0) + g, h.length - 1),
                    b = (i.slidesGrid[y] || 0) - (i.slidesGrid[0] || 0);

                function w() {
                    i.updateSlides(), i.updateProgress(), i.updateSlidesClasses(), i.lazy && i.params.lazy.enabled && i.lazy.load(), a("virtualUpdate")
                }
                if (Object.assign(i.virtual, {
                        from: y,
                        to: $,
                        offset: b,
                        slidesGrid: i.slidesGrid
                    }), d === y && c === $ && !e) return i.slidesGrid !== u && b !== p && i.slides.css(m, `${b}px`), i.updateProgress(), void a("virtualUpdate");
                if (i.params.virtual.renderExternal) return i.params.virtual.renderExternal.call(i, {
                    offset: b,
                    from: y,
                    to: $,
                    slides: function() {
                        let e = [];
                        for (let t = y; t <= $; t += 1) e.push(h[t]);
                        return e
                    }()
                }), void(i.params.virtual.renderExternalUpdate ? w() : a("virtualUpdate"));
                let _ = [],
                    C = [];
                if (e) i.$wrapperEl.find(`.${i.params.slideClass}`).remove();
                else
                    for (let x = d; x <= c; x += 1)(x < y || x > $) && i.$wrapperEl.find(`.${i.params.slideClass}[data-swiper-slide-index="${x}"]`).remove();
                for (let k = 0; k < h.length; k += 1) k >= y && k <= $ && (void 0 === c || e ? C.push(k) : (k > c && C.push(k), k < d && _.push(k)));
                C.forEach(e => {
                    i.$wrapperEl.append(r(h[e], e))
                }), _.sort((e, t) => t - e).forEach(e => {
                    i.$wrapperEl.prepend(r(h[e], e))
                }), i.$wrapperEl.children(".swiper-slide").css(m, `${b}px`), w()
            }
            n({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            }), i.virtual = {
                cache: {},
                from: void 0,
                to: void 0,
                slides: [],
                offset: 0,
                slidesGrid: []
            }, s("beforeInit", () => {
                i.params.virtual.enabled && (i.virtual.slides = i.params.virtual.slides, i.classNames.push(`${i.params.containerModifierClass}virtual`), i.params.watchSlidesProgress = !0, i.originalParams.watchSlidesProgress = !0, i.params.initialSlide || o())
            }), s("setTranslate", () => {
                i.params.virtual.enabled && (i.params.cssMode && !i._immediateVirtual ? (clearTimeout(t), t = setTimeout(() => {
                    o()
                }, 100)) : o())
            }), s("init update resize", () => {
                i.params.virtual.enabled && i.params.cssMode && v(i.wrapperEl, "--swiper-virtual-size", `${i.virtualSize}px`)
            }), Object.assign(i.virtual, {
                appendSlide: function(e) {
                    if ("object" == typeof e && "length" in e)
                        for (let t = 0; t < e.length; t += 1) e[t] && i.virtual.slides.push(e[t]);
                    else i.virtual.slides.push(e);
                    o(!0)
                },
                prependSlide: function(e) {
                    let t = i.activeIndex,
                        n = t + 1,
                        s = 1;
                    if (Array.isArray(e)) {
                        for (let a = 0; a < e.length; a += 1) e[a] && i.virtual.slides.unshift(e[a]);
                        n = t + e.length, s = e.length
                    } else i.virtual.slides.unshift(e);
                    if (i.params.virtual.cache) {
                        let r = i.virtual.cache,
                            l = {};
                        Object.keys(r).forEach(e => {
                            let t = r[e],
                                i = t.attr("data-swiper-slide-index");
                            i && t.attr("data-swiper-slide-index", parseInt(i, 10) + s), l[parseInt(e, 10) + s] = t
                        }), i.virtual.cache = l
                    }
                    o(!0), i.slideTo(n, 0)
                },
                removeSlide: function(e) {
                    if (null == e) return;
                    let t = i.activeIndex;
                    if (Array.isArray(e))
                        for (let n = e.length - 1; n >= 0; n -= 1) i.virtual.slides.splice(e[n], 1), i.params.virtual.cache && delete i.virtual.cache[e[n]], e[n] < t && (t -= 1), t = Math.max(t, 0);
                    else i.virtual.slides.splice(e, 1), i.params.virtual.cache && delete i.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                    o(!0), i.slideTo(t, 0)
                },
                removeAllSlides: function() {
                    i.virtual.slides = [], i.params.virtual.cache && (i.virtual.cache = {}), o(!0), i.slideTo(0, 0)
                },
                update: o
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: r
            } = e, o = n(), l = a();

            function c(e) {
                if (!t.enabled) return;
                let {
                    rtlTranslate: i
                } = t, n = e;
                n.originalEvent && (n = n.originalEvent);
                let s = n.keyCode || n.charCode,
                    a = t.params.keyboard.pageUpDown,
                    d = a && 33 === s,
                    c = a && 34 === s,
                    h = 37 === s,
                    u = 39 === s,
                    p = 38 === s,
                    f = 40 === s;
                if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && f || c) || !t.allowSlidePrev && (t.isHorizontal() && h || t.isVertical() && p || d)) return !1;
                if (!(n.shiftKey || n.altKey || n.ctrlKey || n.metaKey || o.activeElement && o.activeElement.nodeName && ("input" === o.activeElement.nodeName.toLowerCase() || "textarea" === o.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (d || c || h || u || p || f)) {
                        let m = !1;
                        if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                        let g = t.$el,
                            v = g[0].clientWidth,
                            y = g[0].clientHeight,
                            $ = l.innerWidth,
                            b = l.innerHeight,
                            w = t.$el.offset();
                        i && (w.left -= t.$el[0].scrollLeft);
                        let _ = [
                            [w.left, w.top],
                            [w.left + v, w.top],
                            [w.left, w.top + y],
                            [w.left + v, w.top + y]
                        ];
                        for (let C = 0; C < _.length; C += 1) {
                            let x = _[C];
                            if (x[0] >= 0 && x[0] <= $ && x[1] >= 0 && x[1] <= b) {
                                if (0 === x[0] && 0 === x[1]) continue;
                                m = !0
                            }
                        }
                        if (!m) return
                    }
                    t.isHorizontal() ? ((d || c || h || u) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), ((c || u) && !i || (d || h) && i) && t.slideNext(), ((d || h) && !i || (c || u) && i) && t.slidePrev()) : ((d || c || p || f) && (n.preventDefault ? n.preventDefault() : n.returnValue = !1), (c || f) && t.slideNext(), (d || p) && t.slidePrev()), r("keyPress", s)
                }
            }

            function h() {
                t.keyboard.enabled || (d(o).on("keydown", c), t.keyboard.enabled = !0)
            }

            function u() {
                t.keyboard.enabled && (d(o).off("keydown", c), t.keyboard.enabled = !1)
            }
            t.keyboard = {
                enabled: !1
            }, i({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }), s("init", () => {
                t.params.keyboard.enabled && h()
            }), s("destroy", () => {
                t.keyboard.enabled && u()
            }), Object.assign(t.keyboard, {
                enable: h,
                disable: u
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n,
                emit: s
            } = e, r = a(), o;
            i({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            }), t.mousewheel = {
                enabled: !1
            };
            let l, c = u(),
                p = [];

            function f() {
                t.enabled && (t.mouseEntered = !0)
            }

            function m() {
                t.enabled && (t.mouseEntered = !1)
            }

            function g(e) {
                return !(t.params.mousewheel.thresholdDelta && e.delta < t.params.mousewheel.thresholdDelta) && !(t.params.mousewheel.thresholdTime && u() - c < t.params.mousewheel.thresholdTime) && (e.delta >= 6 && u() - c < 60 || (e.direction < 0 ? t.isEnd && !t.params.loop || t.animating || (t.slideNext(), s("scroll", e.raw)) : t.isBeginning && !t.params.loop || t.animating || (t.slidePrev(), s("scroll", e.raw)), c = (new r.Date).getTime(), !1))
            }

            function v(e) {
                var i;
                let n = e,
                    a = !0;
                if (!t.enabled) return;
                let r = t.params.mousewheel;
                t.params.cssMode && n.preventDefault();
                let c = t.$el;
                if ("container" !== t.params.mousewheel.eventsTarget && (c = d(t.params.mousewheel.eventsTarget)), !t.mouseEntered && !c[0].contains(n.target) && !r.releaseOnEdges) return !0;
                n.originalEvent && (n = n.originalEvent);
                let f = 0,
                    m, v, y, $, b = t.rtlTranslate ? -1 : 1,
                    w = (i = n, m = 0, v = 0, y = 0, $ = 0, "detail" in i && (v = i.detail), "wheelDelta" in i && (v = -i.wheelDelta / 120), "wheelDeltaY" in i && (v = -i.wheelDeltaY / 120), "wheelDeltaX" in i && (m = -i.wheelDeltaX / 120), "axis" in i && i.axis === i.HORIZONTAL_AXIS && (m = v, v = 0), y = 10 * m, $ = 10 * v, "deltaY" in i && ($ = i.deltaY), "deltaX" in i && (y = i.deltaX), i.shiftKey && !y && (y = $, $ = 0), (y || $) && i.deltaMode && (1 === i.deltaMode ? (y *= 40, $ *= 40) : (y *= 800, $ *= 800)), y && !m && (m = y < 1 ? -1 : 1), $ && !v && (v = $ < 1 ? -1 : 1), {
                        spinX: m,
                        spinY: v,
                        pixelX: y,
                        pixelY: $
                    });
                if (r.forceToAxis) {
                    if (t.isHorizontal()) {
                        if (!(Math.abs(w.pixelX) > Math.abs(w.pixelY))) return !0;
                        f = -w.pixelX * b
                    } else {
                        if (!(Math.abs(w.pixelY) > Math.abs(w.pixelX))) return !0;
                        f = -w.pixelY
                    }
                } else f = Math.abs(w.pixelX) > Math.abs(w.pixelY) ? -w.pixelX * b : -w.pixelY;
                if (0 === f) return !0;
                r.invert && (f = -f);
                let _ = t.getTranslate() + f * r.sensitivity;
                if (_ >= t.minTranslate() && (_ = t.minTranslate()), _ <= t.maxTranslate() && (_ = t.maxTranslate()), (a = !!t.params.loop || !(_ === t.minTranslate() || _ === t.maxTranslate())) && t.params.nested && n.stopPropagation(), t.params.freeMode && t.params.freeMode.enabled) {
                    let C = {
                            time: u(),
                            delta: Math.abs(f),
                            direction: Math.sign(f)
                        },
                        x = l && C.time < l.time + 500 && C.delta <= l.delta && C.direction === l.direction;
                    if (!x) {
                        l = void 0, t.params.loop && t.loopFix();
                        let k = t.getTranslate() + f * r.sensitivity,
                            T = t.isBeginning,
                            E = t.isEnd;
                        if (k >= t.minTranslate() && (k = t.minTranslate()), k <= t.maxTranslate() && (k = t.maxTranslate()), t.setTransition(0), t.setTranslate(k), t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses(), (!T && t.isBeginning || !E && t.isEnd) && t.updateSlidesClasses(), t.params.freeMode.sticky) {
                            clearTimeout(o), o = void 0, p.length >= 15 && p.shift();
                            let S = p.length ? p[p.length - 1] : void 0,
                                D = p[0];
                            if (p.push(C), S && (C.delta > S.delta || C.direction !== S.direction)) p.splice(0);
                            else if (p.length >= 15 && C.time - D.time < 500 && D.delta - C.delta >= 1 && C.delta <= 6) {
                                let M = f > 0 ? .8 : .2;
                                l = C, p.splice(0), o = h(() => {
                                    t.slideToClosest(t.params.speed, !0, void 0, M)
                                }, 0)
                            }
                            o || (o = h(() => {
                                l = C, p.splice(0), t.slideToClosest(t.params.speed, !0, void 0, .5)
                            }, 500))
                        }
                        if (x || s("scroll", n), t.params.autoplay && t.params.autoplayDisableOnInteraction && t.autoplay.stop(), k === t.minTranslate() || k === t.maxTranslate()) return !0
                    }
                } else {
                    let A = {
                        time: u(),
                        delta: Math.abs(f),
                        direction: Math.sign(f),
                        raw: e
                    };
                    p.length >= 2 && p.shift();
                    let P = p.length ? p[p.length - 1] : void 0;
                    if (p.push(A), P ? (A.direction !== P.direction || A.delta > P.delta || A.time > P.time + 150) && g(A) : g(A), function(e) {
                            let i = t.params.mousewheel;
                            if (e.direction < 0) {
                                if (t.isEnd && !t.params.loop && i.releaseOnEdges) return !0
                            } else if (t.isBeginning && !t.params.loop && i.releaseOnEdges) return !0;
                            return !1
                        }(A)) return !0
                }
                return n.preventDefault ? n.preventDefault() : n.returnValue = !1, !1
            }

            function y(e) {
                let i = t.$el;
                "container" !== t.params.mousewheel.eventsTarget && (i = d(t.params.mousewheel.eventsTarget)), i[e]("mouseenter", f), i[e]("mouseleave", m), i[e]("wheel", v)
            }

            function $() {
                return t.params.cssMode ? (t.wrapperEl.removeEventListener("wheel", v), !0) : !t.mousewheel.enabled && (y("on"), t.mousewheel.enabled = !0, !0)
            }

            function b() {
                return t.params.cssMode ? (t.wrapperEl.addEventListener(event, v), !0) : !!t.mousewheel.enabled && (y("off"), t.mousewheel.enabled = !1, !0)
            }
            n("init", () => {
                !t.params.mousewheel.enabled && t.params.cssMode && b(), t.params.mousewheel.enabled && $()
            }), n("destroy", () => {
                t.params.cssMode && $(), t.mousewheel.enabled && b()
            }), Object.assign(t.mousewheel, {
                enable: $,
                disable: b
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n,
                emit: s
            } = e;

            function a(e) {
                let i;
                return e && (i = d(e), t.params.uniqueNavElements && "string" == typeof e && i.length > 1 && 1 === t.$el.find(e).length && (i = t.$el.find(e))), i
            }

            function r(e, i) {
                let n = t.params.navigation;
                e && e.length > 0 && (e[i ? "addClass" : "removeClass"](n.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = i), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](n.lockClass))
            }

            function o() {
                if (t.params.loop) return;
                let {
                    $nextEl: e,
                    $prevEl: i
                } = t.navigation;
                r(i, t.isBeginning && !t.params.rewind), r(e, t.isEnd && !t.params.rewind)
            }

            function l(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && (t.slidePrev(), s("navigationPrev"))
            }

            function c(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && (t.slideNext(), s("navigationNext"))
            }

            function h() {
                let e = t.params.navigation;
                if (t.params.navigation = H(t, t.originalParams.navigation, t.params.navigation, {
                        nextEl: "swiper-button-next",
                        prevEl: "swiper-button-prev"
                    }), !e.nextEl && !e.prevEl) return;
                let i = a(e.nextEl),
                    n = a(e.prevEl);
                i && i.length > 0 && i.on("click", c), n && n.length > 0 && n.on("click", l), Object.assign(t.navigation, {
                    $nextEl: i,
                    nextEl: i && i[0],
                    $prevEl: n,
                    prevEl: n && n[0]
                }), t.enabled || (i && i.addClass(e.lockClass), n && n.addClass(e.lockClass))
            }

            function u() {
                let {
                    $nextEl: e,
                    $prevEl: i
                } = t.navigation;
                e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), i && i.length && (i.off("click", l), i.removeClass(t.params.navigation.disabledClass))
            }
            i({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock",
                    navigationDisabledClass: "swiper-navigation-disabled"
                }
            }), t.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            }, n("init", () => {
                !1 === t.params.navigation.enabled ? p() : (h(), o())
            }), n("toEdge fromEdge lock unlock", () => {
                o()
            }), n("destroy", () => {
                u()
            }), n("enable disable", () => {
                let {
                    $nextEl: e,
                    $prevEl: i
                } = t.navigation;
                e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), i && i[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass)
            }), n("click", (e, i) => {
                let {
                    $nextEl: n,
                    $prevEl: a
                } = t.navigation, r = i.target;
                if (t.params.navigation.hideOnClick && !d(r).is(a) && !d(r).is(n)) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === r || t.pagination.el.contains(r))) return;
                    let o;
                    n ? o = n.hasClass(t.params.navigation.hiddenClass) : a && (o = a.hasClass(t.params.navigation.hiddenClass)), s(!0 === o ? "navigationShow" : "navigationHide"), n && n.toggleClass(t.params.navigation.hiddenClass), a && a.toggleClass(t.params.navigation.hiddenClass)
                }
            });
            let p = () => {
                t.$el.addClass(t.params.navigation.navigationDisabledClass), u()
            };
            Object.assign(t.navigation, {
                enable() {
                    t.$el.removeClass(t.params.navigation.navigationDisabledClass), h(), o()
                },
                disable: p,
                update: o,
                init: h,
                destroy: u
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n,
                emit: s
            } = e, a = "swiper-pagination", r;
            i({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: e => e,
                    formatFractionTotal: e => e,
                    bulletClass: `${a}-bullet`,
                    bulletActiveClass: `${a}-bullet-active`,
                    modifierClass: `${a}-`,
                    currentClass: `${a}-current`,
                    totalClass: `${a}-total`,
                    hiddenClass: `${a}-hidden`,
                    progressbarFillClass: `${a}-progressbar-fill`,
                    progressbarOppositeClass: `${a}-progressbar-opposite`,
                    clickableClass: `${a}-clickable`,
                    lockClass: `${a}-lock`,
                    horizontalClass: `${a}-horizontal`,
                    verticalClass: `${a}-vertical`,
                    paginationDisabledClass: `${a}-disabled`
                }
            }), t.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let o = 0;

            function l() {
                return !t.params.pagination.el || !t.pagination.el || !t.pagination.$el || 0 === t.pagination.$el.length
            }

            function c(e, i) {
                let {
                    bulletActiveClass: n
                } = t.params.pagination;
                e[i]().addClass(`${n}-${i}`)[i]().addClass(`${n}-${i}-${i}`)
            }

            function h() {
                let e = t.rtl,
                    i = t.params.pagination;
                if (l()) return;
                let n = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    a = t.pagination.$el,
                    h, u = t.params.loop ? Math.ceil((n - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                if (t.params.loop ? ((h = Math.ceil((t.activeIndex - t.loopedSlides) / t.params.slidesPerGroup)) > n - 1 - 2 * t.loopedSlides && (h -= n - 2 * t.loopedSlides), h > u - 1 && (h -= u), h < 0 && "bullets" !== t.params.paginationType && (h = u + h)) : h = void 0 !== t.snapIndex ? t.snapIndex : t.activeIndex || 0, "bullets" === i.type && t.pagination.bullets && t.pagination.bullets.length > 0) {
                    let p = t.pagination.bullets,
                        f, m, g;
                    if (i.dynamicBullets && (r = p.eq(0)[t.isHorizontal() ? "outerWidth" : "outerHeight"](!0), a.css(t.isHorizontal() ? "width" : "height", r * (i.dynamicMainBullets + 4) + "px"), i.dynamicMainBullets > 1 && void 0 !== t.previousIndex && ((o += h - (t.previousIndex - t.loopedSlides || 0)) > i.dynamicMainBullets - 1 ? o = i.dynamicMainBullets - 1 : o < 0 && (o = 0)), g = ((m = (f = Math.max(h - o, 0)) + (Math.min(p.length, i.dynamicMainBullets) - 1)) + f) / 2), p.removeClass(["", "-next", "-next-next", "-prev", "-prev-prev", "-main"].map(e => `${i.bulletActiveClass}${e}`).join(" ")), a.length > 1) p.each(e => {
                        let t = d(e),
                            n = t.index();
                        n === h && t.addClass(i.bulletActiveClass), i.dynamicBullets && (n >= f && n <= m && t.addClass(`${i.bulletActiveClass}-main`), n === f && c(t, "prev"), n === m && c(t, "next"))
                    });
                    else {
                        let v = p.eq(h),
                            y = v.index();
                        if (v.addClass(i.bulletActiveClass), i.dynamicBullets) {
                            let $ = p.eq(f),
                                b = p.eq(m);
                            for (let w = f; w <= m; w += 1) p.eq(w).addClass(`${i.bulletActiveClass}-main`);
                            if (t.params.loop) {
                                if (y >= p.length) {
                                    for (let _ = i.dynamicMainBullets; _ >= 0; _ -= 1) p.eq(p.length - _).addClass(`${i.bulletActiveClass}-main`);
                                    p.eq(p.length - i.dynamicMainBullets - 1).addClass(`${i.bulletActiveClass}-prev`)
                                } else c($, "prev"), c(b, "next")
                            } else c($, "prev"), c(b, "next")
                        }
                    }
                    if (i.dynamicBullets) {
                        let C = Math.min(p.length, i.dynamicMainBullets + 4),
                            x = (r * C - r) / 2 - g * r;
                        p.css(t.isHorizontal() ? e ? "right" : "left" : "top", `${x}px`)
                    }
                }
                if ("fraction" === i.type && (a.find(Y(i.currentClass)).text(i.formatFractionCurrent(h + 1)), a.find(Y(i.totalClass)).text(i.formatFractionTotal(u))), "progressbar" === i.type) {
                    let k;
                    k = i.progressbarOpposite ? t.isHorizontal() ? "vertical" : "horizontal" : t.isHorizontal() ? "horizontal" : "vertical";
                    let T = (h + 1) / u,
                        E = 1,
                        S = 1;
                    "horizontal" === k ? E = T : S = T, a.find(Y(i.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${E}) scaleY(${S})`).transition(t.params.speed)
                }
                "custom" === i.type && i.renderCustom ? (a.html(i.renderCustom(t, h + 1, u)), s("paginationRender", a[0])) : s("paginationUpdate", a[0]), t.params.watchOverflow && t.enabled && a[t.isLocked ? "addClass" : "removeClass"](i.lockClass)
            }

            function u() {
                let e = t.params.pagination;
                if (l()) return;
                let i = t.virtual && t.params.virtual.enabled ? t.virtual.slides.length : t.slides.length,
                    n = t.pagination.$el,
                    a = "";
                if ("bullets" === e.type) {
                    let r = t.params.loop ? Math.ceil((i - 2 * t.loopedSlides) / t.params.slidesPerGroup) : t.snapGrid.length;
                    t.params.freeMode && t.params.freeMode.enabled && !t.params.loop && r > i && (r = i);
                    for (let o = 0; o < r; o += 1) e.renderBullet ? a += e.renderBullet.call(t, o, e.bulletClass) : a += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                    n.html(a), t.pagination.bullets = n.find(Y(e.bulletClass))
                }
                "fraction" === e.type && (a = e.renderFraction ? e.renderFraction.call(t, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, n.html(a)), "progressbar" === e.type && (a = e.renderProgressbar ? e.renderProgressbar.call(t, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, n.html(a)), "custom" !== e.type && s("paginationRender", t.pagination.$el[0])
            }

            function p() {
                t.params.pagination = H(t, t.originalParams.pagination, t.params.pagination, {
                    el: "swiper-pagination"
                });
                let e = t.params.pagination;
                if (!e.el) return;
                let i = d(e.el);
                0 !== i.length && (t.params.uniqueNavElements && "string" == typeof e.el && i.length > 1 && (i = t.$el.find(e.el)).length > 1 && (i = i.filter(e => d(e).parents(".swiper")[0] === t.el)), "bullets" === e.type && e.clickable && i.addClass(e.clickableClass), i.addClass(e.modifierClass + e.type), i.addClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), "bullets" === e.type && e.dynamicBullets && (i.addClass(`${e.modifierClass}${e.type}-dynamic`), o = 0, e.dynamicMainBullets < 1 && (e.dynamicMainBullets = 1)), "progressbar" === e.type && e.progressbarOpposite && i.addClass(e.progressbarOppositeClass), e.clickable && i.on("click", Y(e.bulletClass), function(e) {
                    e.preventDefault();
                    let i = d(this).index() * t.params.slidesPerGroup;
                    t.params.loop && (i += t.loopedSlides), t.slideTo(i)
                }), Object.assign(t.pagination, {
                    $el: i,
                    el: i[0]
                }), t.enabled || i.addClass(e.lockClass))
            }

            function f() {
                let e = t.params.pagination;
                if (l()) return;
                let i = t.pagination.$el;
                i.removeClass(e.hiddenClass), i.removeClass(e.modifierClass + e.type), i.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.pagination.bullets && t.pagination.bullets.removeClass && t.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && i.off("click", Y(e.bulletClass))
            }
            n("init", () => {
                !1 === t.params.pagination.enabled ? m() : (p(), u(), h())
            }), n("activeIndexChange", () => {
                (t.params.loop || void 0 === t.snapIndex) && h()
            }), n("snapIndexChange", () => {
                t.params.loop || h()
            }), n("slidesLengthChange", () => {
                t.params.loop && (u(), h())
            }), n("snapGridLengthChange", () => {
                t.params.loop || (u(), h())
            }), n("destroy", () => {
                f()
            }), n("enable disable", () => {
                let {
                    $el: e
                } = t.pagination;
                e && e[t.enabled ? "removeClass" : "addClass"](t.params.pagination.lockClass)
            }), n("lock unlock", () => {
                h()
            }), n("click", (e, i) => {
                let n = i.target,
                    {
                        $el: a
                    } = t.pagination;
                if (t.params.pagination.el && t.params.pagination.hideOnClick && a && a.length > 0 && !d(n).hasClass(t.params.pagination.bulletClass)) {
                    if (t.navigation && (t.navigation.nextEl && n === t.navigation.nextEl || t.navigation.prevEl && n === t.navigation.prevEl)) return;
                    let r = a.hasClass(t.params.pagination.hiddenClass);
                    s(!0 === r ? "paginationShow" : "paginationHide"), a.toggleClass(t.params.pagination.hiddenClass)
                }
            });
            let m = () => {
                t.$el.addClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.addClass(t.params.pagination.paginationDisabledClass), f()
            };
            Object.assign(t.pagination, {
                enable() {
                    t.$el.removeClass(t.params.pagination.paginationDisabledClass), t.pagination.$el && t.pagination.$el.removeClass(t.params.pagination.paginationDisabledClass), p(), u(), h()
                },
                disable: m,
                render: u,
                update: h,
                init: p,
                destroy: f
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: s,
                emit: a
            } = e, r = n(), o, l, c, u, p = !1, f = null, m = null;

            function g() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                let {
                    scrollbar: e,
                    rtlTranslate: i,
                    progress: n
                } = t, {
                    $dragEl: s,
                    $el: a
                } = e, r = t.params.scrollbar, o = l, d = (c - l) * n;
                i ? (d = -d) > 0 ? (o = l - d, d = 0) : -d + l > c && (o = c + d) : d < 0 ? (o = l + d, d = 0) : d + l > c && (o = c - d), t.isHorizontal() ? (s.transform(`translate3d(${d}px, 0, 0)`), s[0].style.width = `${o}px`) : (s.transform(`translate3d(0px, ${d}px, 0)`), s[0].style.height = `${o}px`), r.hide && (clearTimeout(f), a[0].style.opacity = 1, f = setTimeout(() => {
                    a[0].style.opacity = 0, a.transition(400)
                }, 1e3))
            }

            function v() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                let {
                    scrollbar: e
                } = t, {
                    $dragEl: i,
                    $el: n
                } = e;
                i[0].style.width = "", i[0].style.height = "", c = t.isHorizontal() ? n[0].offsetWidth : n[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), l = "auto" === t.params.scrollbar.dragSize ? c * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? i[0].style.width = `${l}px` : i[0].style.height = `${l}px`, n[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (n[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass)
            }

            function y(e) {
                return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY
            }

            function $(e) {
                let {
                    scrollbar: i,
                    rtlTranslate: n
                } = t, {
                    $el: s
                } = i, a;
                a = Math.max(Math.min(a = (y(e) - s.offset()[t.isHorizontal() ? "left" : "top"] - (null !== o ? o : l / 2)) / (c - l), 1), 0), n && (a = 1 - a);
                let r = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * a;
                t.updateProgress(r), t.setTranslate(r), t.updateActiveIndex(), t.updateSlidesClasses()
            }

            function b(e) {
                let i = t.params.scrollbar,
                    {
                        scrollbar: n,
                        $wrapperEl: s
                    } = t,
                    {
                        $el: r,
                        $dragEl: l
                    } = n;
                p = !0, o = e.target === l[0] || e.target === l ? y(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), s.transition(100), l.transition(100), $(e), clearTimeout(m), r.transition(0), i.hide && r.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), a("scrollbarDragStart", e)
            }

            function w(e) {
                let {
                    scrollbar: i,
                    $wrapperEl: n
                } = t, {
                    $el: s,
                    $dragEl: r
                } = i;
                p && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, $(e), n.transition(0), s.transition(0), r.transition(0), a("scrollbarDragMove", e))
            }

            function _(e) {
                let i = t.params.scrollbar,
                    {
                        scrollbar: n,
                        $wrapperEl: s
                    } = t,
                    {
                        $el: r
                    } = n;
                p && (p = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), s.transition("")), i.hide && (clearTimeout(m), m = h(() => {
                    r.css("opacity", 0), r.transition(400)
                }, 1e3)), a("scrollbarDragEnd", e), i.snapOnRelease && t.slideToClosest())
            }

            function C(e) {
                let {
                    scrollbar: i,
                    touchEventsTouch: n,
                    touchEventsDesktop: s,
                    params: a,
                    support: o
                } = t, l = i.$el;
                if (!l) return;
                let d = l[0],
                    c = !(!o.passiveListener || !a.passiveListeners) && {
                        passive: !1,
                        capture: !1
                    },
                    h = !(!o.passiveListener || !a.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    };
                if (!d) return;
                let u = "on" === e ? "addEventListener" : "removeEventListener";
                o.touch ? (d[u](n.start, b, c), d[u](n.move, w, c), d[u](n.end, _, h)) : (d[u](s.start, b, c), r[u](s.move, w, c), r[u](s.end, _, h))
            }

            function x() {
                let {
                    scrollbar: e,
                    $el: i
                } = t;
                t.params.scrollbar = H(t, t.originalParams.scrollbar, t.params.scrollbar, {
                    el: "swiper-scrollbar"
                });
                let n = t.params.scrollbar;
                if (!n.el) return;
                let s = d(n.el);
                t.params.uniqueNavElements && "string" == typeof n.el && s.length > 1 && 1 === i.find(n.el).length && (s = i.find(n.el)), s.addClass(t.isHorizontal() ? n.horizontalClass : n.verticalClass);
                let a = s.find(`.${t.params.scrollbar.dragClass}`);
                0 === a.length && (a = d(`<div class="${t.params.scrollbar.dragClass}"></div>`), s.append(a)), Object.assign(e, {
                    $el: s,
                    el: s[0],
                    $dragEl: a,
                    dragEl: a[0]
                }), n.draggable && t.params.scrollbar.el && t.scrollbar.el && C("on"), s && s[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
            }

            function k() {
                let e = t.params.scrollbar,
                    i = t.scrollbar.$el;
                i && i.removeClass(t.isHorizontal() ? e.horizontalClass : e.verticalClass), t.params.scrollbar.el && t.scrollbar.el && C("off")
            }
            i({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag",
                    scrollbarDisabledClass: "swiper-scrollbar-disabled",
                    horizontalClass: "swiper-scrollbar-horizontal",
                    verticalClass: "swiper-scrollbar-vertical"
                }
            }), t.scrollbar = {
                el: null,
                dragEl: null,
                $el: null,
                $dragEl: null
            }, s("init", () => {
                !1 === t.params.scrollbar.enabled ? T() : (x(), v(), g())
            }), s("update resize observerUpdate lock unlock", () => {
                v()
            }), s("setTranslate", () => {
                g()
            }), s("setTransition", (e, i) => {
                var n;
                n = i, t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(n)
            }), s("enable disable", () => {
                let {
                    $el: e
                } = t.scrollbar;
                e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass)
            }), s("destroy", () => {
                k()
            });
            let T = () => {
                t.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.addClass(t.params.scrollbar.scrollbarDisabledClass), k()
            };
            Object.assign(t.scrollbar, {
                enable() {
                    t.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), t.scrollbar.$el && t.scrollbar.$el.removeClass(t.params.scrollbar.scrollbarDisabledClass), x(), v(), g()
                },
                disable: T,
                updateSize: v,
                setTranslate: g,
                init: x,
                destroy: k
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n
            } = e;
            i({
                parallax: {
                    enabled: !1
                }
            });
            let s = (e, i) => {
                    let {
                        rtl: n
                    } = t, s = d(e), a = n ? -1 : 1, r = s.attr("data-swiper-parallax") || "0", o = s.attr("data-swiper-parallax-x"), l = s.attr("data-swiper-parallax-y"), c = s.attr("data-swiper-parallax-scale"), h = s.attr("data-swiper-parallax-opacity");
                    o || l ? (o = o || "0", l = l || "0") : t.isHorizontal() ? (o = r, l = "0") : (l = r, o = "0"), o = o.indexOf("%") >= 0 ? parseInt(o, 10) * i * a + "%" : o * i * a + "px", l = l.indexOf("%") >= 0 ? parseInt(l, 10) * i + "%" : l * i + "px", null != h && (s[0].style.opacity = h - (h - 1) * (1 - Math.abs(i))), null == c ? s.transform(`translate3d(${o}, ${l}, 0px)`) : s.transform(`translate3d(${o}, ${l}, 0px) scale(${c-(c-1)*(1-Math.abs(i))})`)
                },
                a = () => {
                    let {
                        $el: e,
                        slides: i,
                        progress: n,
                        snapGrid: a
                    } = t;
                    e.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                        s(e, n)
                    }), i.each((e, i) => {
                        let r = e.progress;
                        t.params.slidesPerGroup > 1 && "auto" !== t.params.slidesPerView && (r += Math.ceil(i / 2) - n * (a.length - 1)), r = Math.min(Math.max(r, -1), 1), d(e).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(e => {
                            s(e, r)
                        })
                    })
                };
            n("beforeInit", () => {
                t.params.parallax.enabled && (t.params.watchSlidesProgress = !0, t.originalParams.watchSlidesProgress = !0)
            }), n("init", () => {
                t.params.parallax.enabled && a()
            }), n("setTranslate", () => {
                t.params.parallax.enabled && a()
            }), n("setTransition", (e, i) => {
                t.params.parallax.enabled && function(e) {
                    void 0 === e && (e = t.params.speed);
                    let {
                        $el: i
                    } = t;
                    i.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each(t => {
                        let i = d(t),
                            n = parseInt(i.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (n = 0), i.transition(n)
                    })
                }(i)
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n,
                emit: s
            } = e, r = a();
            i({
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            }), t.zoom = {
                enabled: !1
            };
            let o, l, c, h = 1,
                u = !1,
                f = {
                    $slideEl: void 0,
                    slideWidth: void 0,
                    slideHeight: void 0,
                    $imageEl: void 0,
                    $imageWrapEl: void 0,
                    maxRatio: 3
                },
                m = {
                    isTouched: void 0,
                    isMoved: void 0,
                    currentX: void 0,
                    currentY: void 0,
                    minX: void 0,
                    minY: void 0,
                    maxX: void 0,
                    maxY: void 0,
                    width: void 0,
                    height: void 0,
                    startX: void 0,
                    startY: void 0,
                    touchesStart: {},
                    touchesCurrent: {}
                },
                g = {
                    x: void 0,
                    y: void 0,
                    prevPositionX: void 0,
                    prevPositionY: void 0,
                    prevTime: void 0
                },
                v = 1;

            function y(e) {
                if (e.targetTouches.length < 2) return 1;
                let t = e.targetTouches[0].pageX,
                    i = e.targetTouches[0].pageY,
                    n = e.targetTouches[1].pageX,
                    s = e.targetTouches[1].pageY;
                return Math.sqrt((n - t) ** 2 + (s - i) ** 2)
            }

            function $(e) {
                let i = t.support,
                    n = t.params.zoom;
                if (l = !1, c = !1, !i.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    l = !0, f.scaleStart = y(e)
                }
                f.$slideEl && f.$slideEl.length || (f.$slideEl = d(e.target).closest(`.${t.params.slideClass}`), 0 === f.$slideEl.length && (f.$slideEl = t.slides.eq(t.activeIndex)), f.$imageEl = f.$slideEl.find(`.${n.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), f.$imageWrapEl = f.$imageEl.parent(`.${n.containerClass}`), f.maxRatio = f.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, 0 !== f.$imageWrapEl.length) ? (f.$imageEl && f.$imageEl.transition(0), u = !0) : f.$imageEl = void 0
            }

            function b(e) {
                let i = t.support,
                    n = t.params.zoom,
                    s = t.zoom;
                if (!i.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    c = !0, f.scaleMove = y(e)
                }
                f.$imageEl && 0 !== f.$imageEl.length ? (i.gestures ? s.scale = e.scale * h : s.scale = f.scaleMove / f.scaleStart * h, s.scale > f.maxRatio && (s.scale = f.maxRatio - 1 + (s.scale - f.maxRatio + 1) ** .5), s.scale < n.minRatio && (s.scale = n.minRatio + 1 - (n.minRatio - s.scale + 1) ** .5), f.$imageEl.transform(`translate3d(0,0,0) scale(${s.scale})`)) : "gesturechange" === e.type && $(e)
            }

            function w(e) {
                let i = t.device,
                    n = t.support,
                    s = t.params.zoom,
                    a = t.zoom;
                if (!n.gestures) {
                    if (!l || !c || "touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !i.android) return;
                    l = !1, c = !1
                }
                f.$imageEl && 0 !== f.$imageEl.length && (a.scale = Math.max(Math.min(a.scale, f.maxRatio), s.minRatio), f.$imageEl.transition(t.params.speed).transform(`translate3d(0,0,0) scale(${a.scale})`), h = a.scale, u = !1, 1 === a.scale && (f.$slideEl = void 0))
            }

            function _(e) {
                let i = t.zoom;
                if (!f.$imageEl || 0 === f.$imageEl.length || (t.allowClick = !1, !m.isTouched || !f.$slideEl)) return;
                m.isMoved || (m.width = f.$imageEl[0].offsetWidth, m.height = f.$imageEl[0].offsetHeight, m.startX = p(f.$imageWrapEl[0], "x") || 0, m.startY = p(f.$imageWrapEl[0], "y") || 0, f.slideWidth = f.$slideEl[0].offsetWidth, f.slideHeight = f.$slideEl[0].offsetHeight, f.$imageWrapEl.transition(0));
                let n = m.width * i.scale,
                    s = m.height * i.scale;
                if (!(n < f.slideWidth && s < f.slideHeight)) {
                    if (m.minX = Math.min(f.slideWidth / 2 - n / 2, 0), m.maxX = -m.minX, m.minY = Math.min(f.slideHeight / 2 - s / 2, 0), m.maxY = -m.minY, m.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, m.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !m.isMoved && !u && (t.isHorizontal() && (Math.floor(m.minX) === Math.floor(m.startX) && m.touchesCurrent.x < m.touchesStart.x || Math.floor(m.maxX) === Math.floor(m.startX) && m.touchesCurrent.x > m.touchesStart.x) || !t.isHorizontal() && (Math.floor(m.minY) === Math.floor(m.startY) && m.touchesCurrent.y < m.touchesStart.y || Math.floor(m.maxY) === Math.floor(m.startY) && m.touchesCurrent.y > m.touchesStart.y))) return void(m.isTouched = !1);
                    e.cancelable && e.preventDefault(), e.stopPropagation(), m.isMoved = !0, m.currentX = m.touchesCurrent.x - m.touchesStart.x + m.startX, m.currentY = m.touchesCurrent.y - m.touchesStart.y + m.startY, m.currentX < m.minX && (m.currentX = m.minX + 1 - (m.minX - m.currentX + 1) ** .8), m.currentX > m.maxX && (m.currentX = m.maxX - 1 + (m.currentX - m.maxX + 1) ** .8), m.currentY < m.minY && (m.currentY = m.minY + 1 - (m.minY - m.currentY + 1) ** .8), m.currentY > m.maxY && (m.currentY = m.maxY - 1 + (m.currentY - m.maxY + 1) ** .8), g.prevPositionX || (g.prevPositionX = m.touchesCurrent.x), g.prevPositionY || (g.prevPositionY = m.touchesCurrent.y), g.prevTime || (g.prevTime = Date.now()), g.x = (m.touchesCurrent.x - g.prevPositionX) / (Date.now() - g.prevTime) / 2, g.y = (m.touchesCurrent.y - g.prevPositionY) / (Date.now() - g.prevTime) / 2, 2 > Math.abs(m.touchesCurrent.x - g.prevPositionX) && (g.x = 0), 2 > Math.abs(m.touchesCurrent.y - g.prevPositionY) && (g.y = 0), g.prevPositionX = m.touchesCurrent.x, g.prevPositionY = m.touchesCurrent.y, g.prevTime = Date.now(), f.$imageWrapEl.transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
                }
            }

            function C() {
                let e = t.zoom;
                f.$slideEl && t.previousIndex !== t.activeIndex && (f.$imageEl && f.$imageEl.transform("translate3d(0,0,0) scale(1)"), f.$imageWrapEl && f.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, h = 1, f.$slideEl = void 0, f.$imageEl = void 0, f.$imageWrapEl = void 0)
            }

            function x(e) {
                let i = t.zoom,
                    n = t.params.zoom;
                if (f.$slideEl || (e && e.target && (f.$slideEl = d(e.target).closest(`.${t.params.slideClass}`)), f.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? f.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : f.$slideEl = t.slides.eq(t.activeIndex)), f.$imageEl = f.$slideEl.find(`.${n.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), f.$imageWrapEl = f.$imageEl.parent(`.${n.containerClass}`)), !f.$imageEl || 0 === f.$imageEl.length || !f.$imageWrapEl || 0 === f.$imageWrapEl.length) return;
                let s, a, o, l, c, u, p, g, v, y, $, b, w, _, C, x, k, T;
                t.params.cssMode && (t.wrapperEl.style.overflow = "hidden", t.wrapperEl.style.touchAction = "none"), f.$slideEl.addClass(`${n.zoomedSlideClass}`), void 0 === m.touchesStart.x && e ? (s = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, a = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (s = m.touchesStart.x, a = m.touchesStart.y), i.scale = f.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, h = f.$imageWrapEl.attr("data-swiper-zoom") || n.maxRatio, e ? (k = f.$slideEl[0].offsetWidth, T = f.$slideEl[0].offsetHeight, o = f.$slideEl.offset().left + r.scrollX, l = f.$slideEl.offset().top + r.scrollY, c = o + k / 2 - s, u = l + T / 2 - a, v = f.$imageEl[0].offsetWidth, y = f.$imageEl[0].offsetHeight, $ = v * i.scale, b = y * i.scale, w = Math.min(k / 2 - $ / 2, 0), _ = Math.min(T / 2 - b / 2, 0), C = -w, x = -_, p = c * i.scale, g = u * i.scale, p < w && (p = w), p > C && (p = C), g < _ && (g = _), g > x && (g = x)) : (p = 0, g = 0), f.$imageWrapEl.transition(300).transform(`translate3d(${p}px, ${g}px,0)`), f.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${i.scale})`)
            }

            function k() {
                let e = t.zoom,
                    i = t.params.zoom;
                f.$slideEl || (t.params.virtual && t.params.virtual.enabled && t.virtual ? f.$slideEl = t.$wrapperEl.children(`.${t.params.slideActiveClass}`) : f.$slideEl = t.slides.eq(t.activeIndex), f.$imageEl = f.$slideEl.find(`.${i.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), f.$imageWrapEl = f.$imageEl.parent(`.${i.containerClass}`)), f.$imageEl && 0 !== f.$imageEl.length && f.$imageWrapEl && 0 !== f.$imageWrapEl.length && (t.params.cssMode && (t.wrapperEl.style.overflow = "", t.wrapperEl.style.touchAction = ""), e.scale = 1, h = 1, f.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), f.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), f.$slideEl.removeClass(`${i.zoomedSlideClass}`), f.$slideEl = void 0)
            }

            function T(e) {
                let i = t.zoom;
                i.scale && 1 !== i.scale ? k() : x(e)
            }

            function E() {
                let e = t.support;
                return {
                    passiveListener: !("touchstart" !== t.touchEvents.start || !e.passiveListener || !t.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    },
                    activeListenerWithCapture: !e.passiveListener || {
                        passive: !1,
                        capture: !0
                    }
                }
            }

            function S() {
                return `.${t.params.slideClass}`
            }

            function D(e) {
                let {
                    passiveListener: i
                } = E(), n = S();
                t.$wrapperEl[e]("gesturestart", n, $, i), t.$wrapperEl[e]("gesturechange", n, b, i), t.$wrapperEl[e]("gestureend", n, w, i)
            }

            function M() {
                o || (o = !0, D("on"))
            }

            function A() {
                o && (o = !1, D("off"))
            }

            function P() {
                let e = t.zoom;
                if (e.enabled) return;
                e.enabled = !0;
                let i = t.support,
                    {
                        passiveListener: n,
                        activeListenerWithCapture: s
                    } = E(),
                    a = S();
                i.gestures ? (t.$wrapperEl.on(t.touchEvents.start, M, n), t.$wrapperEl.on(t.touchEvents.end, A, n)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.on(t.touchEvents.start, a, $, n), t.$wrapperEl.on(t.touchEvents.move, a, b, s), t.$wrapperEl.on(t.touchEvents.end, a, w, n), t.touchEvents.cancel && t.$wrapperEl.on(t.touchEvents.cancel, a, w, n)), t.$wrapperEl.on(t.touchEvents.move, `.${t.params.zoom.containerClass}`, _, s)
            }

            function L() {
                let e = t.zoom;
                if (!e.enabled) return;
                let i = t.support;
                e.enabled = !1;
                let {
                    passiveListener: n,
                    activeListenerWithCapture: s
                } = E(), a = S();
                i.gestures ? (t.$wrapperEl.off(t.touchEvents.start, M, n), t.$wrapperEl.off(t.touchEvents.end, A, n)) : "touchstart" === t.touchEvents.start && (t.$wrapperEl.off(t.touchEvents.start, a, $, n), t.$wrapperEl.off(t.touchEvents.move, a, b, s), t.$wrapperEl.off(t.touchEvents.end, a, w, n), t.touchEvents.cancel && t.$wrapperEl.off(t.touchEvents.cancel, a, w, n)), t.$wrapperEl.off(t.touchEvents.move, `.${t.params.zoom.containerClass}`, _, s)
            }
            Object.defineProperty(t.zoom, "scale", {
                get: () => v,
                set(e) {
                    if (v !== e) {
                        let t = f.$imageEl ? f.$imageEl[0] : void 0,
                            i = f.$slideEl ? f.$slideEl[0] : void 0;
                        s("zoomChange", e, t, i)
                    }
                    v = e
                }
            }), n("init", () => {
                t.params.zoom.enabled && P()
            }), n("destroy", () => {
                L()
            }), n("touchStart", (e, i) => {
                t.zoom.enabled && function(e) {
                    let i = t.device;
                    f.$imageEl && 0 !== f.$imageEl.length && (m.isTouched || (i.android && e.cancelable && e.preventDefault(), m.isTouched = !0, m.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, m.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY))
                }(i)
            }), n("touchEnd", (e, i) => {
                t.zoom.enabled && function() {
                    let e = t.zoom;
                    if (!f.$imageEl || 0 === f.$imageEl.length) return;
                    if (!m.isTouched || !m.isMoved) return m.isTouched = !1, void(m.isMoved = !1);
                    m.isTouched = !1, m.isMoved = !1;
                    let i = 300,
                        n = 300,
                        s = g.x * i,
                        a = m.currentX + s,
                        r = g.y * n,
                        o = m.currentY + r;
                    0 !== g.x && (i = Math.abs((a - m.currentX) / g.x)), 0 !== g.y && (n = Math.abs((o - m.currentY) / g.y));
                    let l = Math.max(i, n);
                    m.currentX = a, m.currentY = o;
                    let d = m.width * e.scale,
                        c = m.height * e.scale;
                    m.minX = Math.min(f.slideWidth / 2 - d / 2, 0), m.maxX = -m.minX, m.minY = Math.min(f.slideHeight / 2 - c / 2, 0), m.maxY = -m.minY, m.currentX = Math.max(Math.min(m.currentX, m.maxX), m.minX), m.currentY = Math.max(Math.min(m.currentY, m.maxY), m.minY), f.$imageWrapEl.transition(l).transform(`translate3d(${m.currentX}px, ${m.currentY}px,0)`)
                }()
            }), n("doubleTap", (e, i) => {
                !t.animating && t.params.zoom.enabled && t.zoom.enabled && t.params.zoom.toggle && T(i)
            }), n("transitionEnd", () => {
                t.zoom.enabled && t.params.zoom.enabled && C()
            }), n("slideChange", () => {
                t.zoom.enabled && t.params.zoom.enabled && t.params.cssMode && C()
            }), Object.assign(t.zoom, {
                enable: P,
                disable: L,
                in: x,
                out: k,
                toggle: T
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n,
                emit: s
            } = e;
            i({
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            }), t.lazy = {};
            let r = !1,
                o = !1;

            function l(e, i) {
                void 0 === i && (i = !0);
                let n = t.params.lazy;
                if (void 0 === e || 0 === t.slides.length) return;
                let a = t.virtual && t.params.virtual.enabled ? t.$wrapperEl.children(`.${t.params.slideClass}[data-swiper-slide-index="${e}"]`) : t.slides.eq(e),
                    r = a.find(`.${n.elementClass}:not(.${n.loadedClass}):not(.${n.loadingClass})`);
                !a.hasClass(n.elementClass) || a.hasClass(n.loadedClass) || a.hasClass(n.loadingClass) || r.push(a[0]), 0 !== r.length && r.each(e => {
                    let r = d(e);
                    r.addClass(n.loadingClass);
                    let o = r.attr("data-background"),
                        c = r.attr("data-src"),
                        h = r.attr("data-srcset"),
                        u = r.attr("data-sizes"),
                        p = r.parent("picture");
                    t.loadImage(r[0], c || o, h, u, !1, () => {
                        if (null != t && t && (!t || t.params) && !t.destroyed) {
                            if (o ? (r.css("background-image", `url("${o}")`), r.removeAttr("data-background")) : (h && (r.attr("srcset", h), r.removeAttr("data-srcset")), u && (r.attr("sizes", u), r.removeAttr("data-sizes")), p.length && p.children("source").each(e => {
                                    let t = d(e);
                                    t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"))
                                }), c && (r.attr("src", c), r.removeAttr("data-src"))), r.addClass(n.loadedClass).removeClass(n.loadingClass), a.find(`.${n.preloaderClass}`).remove(), t.params.loop && i) {
                                let e = a.attr("data-swiper-slide-index");
                                a.hasClass(t.params.slideDuplicateClass) ? l(t.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t.params.slideDuplicateClass})`).index(), !1) : l(t.$wrapperEl.children(`.${t.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1)
                            }
                            s("lazyImageReady", a[0], r[0]), t.params.autoHeight && t.updateAutoHeight()
                        }
                    }), s("lazyImageLoad", a[0], r[0])
                })
            }

            function c() {
                let {
                    $wrapperEl: e,
                    params: i,
                    slides: n,
                    activeIndex: s
                } = t, a = t.virtual && i.virtual.enabled, r = i.lazy, c = i.slidesPerView;

                function h(t) {
                    if (a) {
                        if (e.children(`.${i.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0
                    } else if (n[t]) return !0;
                    return !1
                }

                function u(e) {
                    return a ? d(e).attr("data-swiper-slide-index") : d(e).index()
                }
                if ("auto" === c && (c = 0), o || (o = !0), t.params.watchSlidesProgress) e.children(`.${i.slideVisibleClass}`).each(e => {
                    l(a ? d(e).attr("data-swiper-slide-index") : d(e).index())
                });
                else if (c > 1)
                    for (let p = s; p < s + c; p += 1) h(p) && l(p);
                else l(s);
                if (r.loadPrevNext) {
                    if (c > 1 || r.loadPrevNextAmount && r.loadPrevNextAmount > 1) {
                        let f = r.loadPrevNextAmount,
                            m = Math.ceil(c),
                            g = Math.min(s + m + Math.max(f, m), n.length),
                            v = Math.max(s - Math.max(m, f), 0);
                        for (let y = s + m; y < g; y += 1) h(y) && l(y);
                        for (let $ = v; $ < s; $ += 1) h($) && l($)
                    } else {
                        let b = e.children(`.${i.slideNextClass}`);
                        b.length > 0 && l(u(b));
                        let w = e.children(`.${i.slidePrevClass}`);
                        w.length > 0 && l(u(w))
                    }
                }
            }

            function h() {
                let e = a();
                if (!t || t.destroyed) return;
                let i = t.params.lazy.scrollingElement ? d(t.params.lazy.scrollingElement) : d(e),
                    n = i[0] === e,
                    s = n ? e.innerWidth : i[0].offsetWidth,
                    o = n ? e.innerHeight : i[0].offsetHeight,
                    l = t.$el.offset(),
                    {
                        rtlTranslate: u
                    } = t,
                    p = !1;
                u && (l.left -= t.$el[0].scrollLeft);
                let f = [
                    [l.left, l.top],
                    [l.left + t.width, l.top],
                    [l.left, l.top + t.height],
                    [l.left + t.width, l.top + t.height]
                ];
                for (let m = 0; m < f.length; m += 1) {
                    let g = f[m];
                    if (g[0] >= 0 && g[0] <= s && g[1] >= 0 && g[1] <= o) {
                        if (0 === g[0] && 0 === g[1]) continue;
                        p = !0
                    }
                }
                let v = !("touchstart" !== t.touchEvents.start || !t.support.passiveListener || !t.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                p ? (c(), i.off("scroll", h, v)) : r || (r = !0, i.on("scroll", h, v))
            }
            n("beforeInit", () => {
                t.params.lazy.enabled && t.params.preloadImages && (t.params.preloadImages = !1)
            }), n("init", () => {
                t.params.lazy.enabled && (t.params.lazy.checkInView ? h() : c())
            }), n("scroll", () => {
                t.params.freeMode && t.params.freeMode.enabled && !t.params.freeMode.sticky && c()
            }), n("scrollbarDragMove resize _freeModeNoMomentumRelease", () => {
                t.params.lazy.enabled && (t.params.lazy.checkInView ? h() : c())
            }), n("transitionStart", () => {
                t.params.lazy.enabled && (t.params.lazy.loadOnTransitionStart || !t.params.lazy.loadOnTransitionStart && !o) && (t.params.lazy.checkInView ? h() : c())
            }), n("transitionEnd", () => {
                t.params.lazy.enabled && !t.params.lazy.loadOnTransitionStart && (t.params.lazy.checkInView ? h() : c())
            }), n("slideChange", () => {
                let {
                    lazy: e,
                    cssMode: i,
                    watchSlidesProgress: n,
                    touchReleaseOnEdges: s,
                    resistanceRatio: a
                } = t.params;
                e.enabled && (i || n && (s || 0 === a)) && c()
            }), n("destroy", () => {
                t.$el && t.$el.find(`.${t.params.lazy.loadingClass}`).removeClass(t.params.lazy.loadingClass)
            }), Object.assign(t.lazy, {
                load: c,
                loadInSlide: l
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n
            } = e;

            function s(e, t) {
                let i, n, s, a = (e, t) => {
                        for (n = -1, i = e.length; i - n > 1;) e[s = i + n >> 1] <= t ? n = s : i = s;
                        return i
                    },
                    r, o;
                return this.x = e, this.y = t, this.lastIndex = e.length - 1, this.interpolate = function(e) {
                    return e ? (r = (o = a(this.x, e)) - 1, (e - this.x[r]) * (this.y[o] - this.y[r]) / (this.x[o] - this.x[r]) + this.y[r]) : 0
                }, this
            }

            function a() {
                t.controller.control && t.controller.spline && (t.controller.spline = void 0, delete t.controller.spline)
            }
            i({
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            }), t.controller = {
                control: void 0
            }, n("beforeInit", () => {
                t.controller.control = t.params.controller.control
            }), n("update", () => {
                a()
            }), n("resize", () => {
                a()
            }), n("observerUpdate", () => {
                a()
            }), n("setTranslate", (e, i, n) => {
                t.controller.control && t.controller.setTranslate(i, n)
            }), n("setTransition", (e, i, n) => {
                t.controller.control && t.controller.setTransition(i, n)
            }), Object.assign(t.controller, {
                setTranslate: function(e, i) {
                    let n = t.controller.control,
                        a, r, o = t.constructor;

                    function l(e) {
                        var i;
                        let n = t.rtlTranslate ? -t.translate : t.translate;
                        "slide" === t.params.controller.by && (i = e, t.controller.spline || (t.controller.spline = t.params.loop ? new s(t.slidesGrid, i.slidesGrid) : new s(t.snapGrid, i.snapGrid)), r = -t.controller.spline.interpolate(-n)), r && "container" !== t.params.controller.by || (a = (e.maxTranslate() - e.minTranslate()) / (t.maxTranslate() - t.minTranslate()), r = (n - t.minTranslate()) * a + e.minTranslate()), t.params.controller.inverse && (r = e.maxTranslate() - r), e.updateProgress(r), e.setTranslate(r, t), e.updateActiveIndex(), e.updateSlidesClasses()
                    }
                    if (Array.isArray(n))
                        for (let d = 0; d < n.length; d += 1) n[d] !== i && n[d] instanceof o && l(n[d]);
                    else n instanceof o && i !== n && l(n)
                },
                setTransition: function(e, i) {
                    let n = t.constructor,
                        s = t.controller.control,
                        a;

                    function r(i) {
                        i.setTransition(e, t), 0 !== e && (i.transitionStart(), i.params.autoHeight && h(() => {
                            i.updateAutoHeight()
                        }), i.$wrapperEl.transitionEnd(() => {
                            s && (i.params.loop && "slide" === t.params.controller.by && i.loopFix(), i.transitionEnd())
                        }))
                    }
                    if (Array.isArray(s))
                        for (a = 0; a < s.length; a += 1) s[a] !== i && s[a] instanceof n && r(s[a]);
                    else s instanceof n && i !== s && r(s)
                }
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n
            } = e;
            i({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null
                }
            }), t.a11y = {
                clicked: !1
            };
            let s = null;

            function a(e) {
                let t = s;
                0 !== t.length && (t.html(""), t.html(e))
            }

            function r(e) {
                e.attr("tabIndex", "0")
            }

            function o(e) {
                e.attr("tabIndex", "-1")
            }

            function l(e, t) {
                e.attr("role", t)
            }

            function c(e, t) {
                e.attr("aria-roledescription", t)
            }

            function h(e, t) {
                e.attr("aria-label", t)
            }

            function u(e) {
                e.attr("aria-disabled", !0)
            }

            function p(e) {
                e.attr("aria-disabled", !1)
            }

            function f(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode) return;
                let i = t.params.a11y,
                    n = d(e.target);
                t.navigation && t.navigation.$nextEl && n.is(t.navigation.$nextEl) && (t.isEnd && !t.params.loop || t.slideNext(), t.isEnd ? a(i.lastSlideMessage) : a(i.nextSlideMessage)), t.navigation && t.navigation.$prevEl && n.is(t.navigation.$prevEl) && (t.isBeginning && !t.params.loop || t.slidePrev(), t.isBeginning ? a(i.firstSlideMessage) : a(i.prevSlideMessage)), t.pagination && n.is(Y(t.params.pagination.bulletClass)) && n[0].click()
            }

            function m() {
                return t.pagination && t.pagination.bullets && t.pagination.bullets.length
            }

            function g() {
                return m() && t.params.pagination.clickable
            }
            let v = (e, t, i) => {
                    r(e), "BUTTON" !== e[0].tagName && (l(e, "button"), e.on("keydown", f)), h(e, i),
                        function(e, t) {
                            e.attr("aria-controls", t)
                        }(e, t)
                },
                y = () => {
                    t.a11y.clicked = !0
                },
                $ = () => {
                    t.a11y.clicked = !1
                },
                b = e => {
                    if (t.a11y.clicked) return;
                    let i = e.target.closest(`.${t.params.slideClass}`);
                    if (!i || !t.slides.includes(i)) return;
                    let n = t.slides.indexOf(i) === t.activeIndex,
                        s = t.params.watchSlidesProgress && t.visibleSlides && t.visibleSlides.includes(i);
                    n || s || (t.isHorizontal() ? t.el.scrollLeft = 0 : t.el.scrollTop = 0, t.slideTo(t.slides.indexOf(i), 0))
                },
                w = () => {
                    let e = t.params.a11y;
                    e.itemRoleDescriptionMessage && c(d(t.slides), e.itemRoleDescriptionMessage), e.slideRole && l(d(t.slides), e.slideRole);
                    let i = t.params.loop ? t.slides.filter(e => !e.classList.contains(t.params.slideDuplicateClass)).length : t.slides.length;
                    e.slideLabelMessage && t.slides.each((n, s) => {
                        let a = d(n),
                            r = t.params.loop ? parseInt(a.attr("data-swiper-slide-index"), 10) : s;
                        h(a, e.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, i))
                    })
                },
                _ = () => {
                    var e, i;
                    let n = t.params.a11y;
                    t.$el.append(s);
                    let a = t.$el;
                    n.containerRoleDescriptionMessage && c(a, n.containerRoleDescriptionMessage), n.containerMessage && h(a, n.containerMessage);
                    let r = t.$wrapperEl,
                        o = n.id || r.attr("id") || `swiper-wrapper-${e=16,"x".repeat(e).replace(/x/g,()=>Math.round(16*Math.random()).toString(16))}`,
                        l = t.params.autoplay && t.params.autoplay.enabled ? "off" : "polite",
                        d, u;
                    i = o, r.attr("id", i),
                        function(e, t) {
                            e.attr("aria-live", t)
                        }(r, l), w(), t.navigation && t.navigation.$nextEl && (d = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (u = t.navigation.$prevEl), d && d.length && v(d, o, n.nextSlideMessage), u && u.length && v(u, o, n.prevSlideMessage), g() && t.pagination.$el.on("keydown", Y(t.params.pagination.bulletClass), f), t.$el.on("focus", b, !0), t.$el.on("pointerdown", y, !0), t.$el.on("pointerup", $, !0)
                };
            n("beforeInit", () => {
                s = d(`<span class="${t.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`)
            }), n("afterInit", () => {
                t.params.a11y.enabled && _()
            }), n("slidesLengthChange snapGridLengthChange slidesGridLengthChange", () => {
                t.params.a11y.enabled && w()
            }), n("fromEdge toEdge afterInit lock unlock", () => {
                t.params.a11y.enabled && function() {
                    if (t.params.loop || t.params.rewind || !t.navigation) return;
                    let {
                        $nextEl: e,
                        $prevEl: i
                    } = t.navigation;
                    i && i.length > 0 && (t.isBeginning ? (u(i), o(i)) : (p(i), r(i))), e && e.length > 0 && (t.isEnd ? (u(e), o(e)) : (p(e), r(e)))
                }()
            }), n("paginationUpdate", () => {
                t.params.a11y.enabled && function() {
                    let e = t.params.a11y;
                    m() && t.pagination.bullets.each(i => {
                        let n = d(i);
                        t.params.pagination.clickable && (r(n), t.params.pagination.renderBullet || (l(n, "button"), h(n, e.paginationBulletMessage.replace(/\{\{index\}\}/, n.index() + 1)))), n.is(`.${t.params.pagination.bulletActiveClass}`) ? n.attr("aria-current", "true") : n.removeAttr("aria-current")
                    })
                }()
            }), n("destroy", () => {
                let e, i;
                t.params.a11y.enabled && (s && s.length > 0 && s.remove(), t.navigation && t.navigation.$nextEl && (e = t.navigation.$nextEl), t.navigation && t.navigation.$prevEl && (i = t.navigation.$prevEl), e && e.off("keydown", f), i && i.off("keydown", f), g() && t.pagination.$el.off("keydown", Y(t.params.pagination.bulletClass), f), t.$el.off("focus", b, !0), t.$el.off("pointerdown", y, !0), t.$el.off("pointerup", $, !0))
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n
            } = e;
            i({
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides",
                    keepQuery: !1
                }
            });
            let s = !1,
                r = {},
                o = e => e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, ""),
                l = e => {
                    let t = a(),
                        i;
                    i = e ? new URL(e) : t.location;
                    let n = i.pathname.slice(1).split("/").filter(e => "" !== e),
                        s = n.length;
                    return {
                        key: n[s - 2],
                        value: n[s - 1]
                    }
                },
                d = (e, i) => {
                    let n = a();
                    if (!s || !t.params.history.enabled) return;
                    let r;
                    r = t.params.url ? new URL(t.params.url) : n.location;
                    let l = t.slides.eq(i),
                        d = o(l.attr("data-history"));
                    if (t.params.history.root.length > 0) {
                        let c = t.params.history.root;
                        "/" === c[c.length - 1] && (c = c.slice(0, c.length - 1)), d = `${c}/${e}/${d}`
                    } else r.pathname.includes(e) || (d = `${e}/${d}`);
                    t.params.history.keepQuery && (d += r.search);
                    let h = n.history.state;
                    h && h.value === d || (t.params.history.replaceState ? n.history.replaceState({
                        value: d
                    }, null, d) : n.history.pushState({
                        value: d
                    }, null, d))
                },
                c = (e, i, n) => {
                    if (i)
                        for (let s = 0, a = t.slides.length; s < a; s += 1) {
                            let r = t.slides.eq(s);
                            if (o(r.attr("data-history")) === i && !r.hasClass(t.params.slideDuplicateClass)) {
                                let l = r.index();
                                t.slideTo(l, e, n)
                            }
                        } else t.slideTo(0, e, n)
                },
                h = () => {
                    r = l(t.params.url), c(t.params.speed, r.value, !1)
                };
            n("init", () => {
                t.params.history.enabled && (() => {
                    let e = a();
                    if (t.params.history) {
                        if (!e.history || !e.history.pushState) return t.params.history.enabled = !1, void(t.params.hashNavigation.enabled = !0);
                        s = !0, ((r = l(t.params.url)).key || r.value) && (c(0, r.value, t.params.runCallbacksOnInit), t.params.history.replaceState || e.addEventListener("popstate", h))
                    }
                })()
            }), n("destroy", () => {
                t.params.history.enabled && (() => {
                    let e = a();
                    t.params.history.replaceState || e.removeEventListener("popstate", h)
                })()
            }), n("transitionEnd _freeModeNoMomentumRelease", () => {
                s && d(t.params.history.key, t.activeIndex)
            }), n("slideChange", () => {
                s && t.params.cssMode && d(t.params.history.key, t.activeIndex)
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                emit: s,
                on: r
            } = e, o = !1, l = n(), c = a();
            i({
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            });
            let h = () => {
                    s("hashChange");
                    let e = l.location.hash.replace("#", "");
                    if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                        let i = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                        if (void 0 === i) return;
                        t.slideTo(i)
                    }
                },
                u = () => {
                    if (o && t.params.hashNavigation.enabled) {
                        if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), s("hashSet");
                        else {
                            let e = t.slides.eq(t.activeIndex),
                                i = e.attr("data-hash") || e.attr("data-history");
                            l.location.hash = i || "", s("hashSet")
                        }
                    }
                };
            r("init", () => {
                t.params.hashNavigation.enabled && (() => {
                    if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                    o = !0;
                    let e = l.location.hash.replace("#", "");
                    if (e)
                        for (let i = 0, n = t.slides.length; i < n; i += 1) {
                            let s = t.slides.eq(i);
                            if ((s.attr("data-hash") || s.attr("data-history")) === e && !s.hasClass(t.params.slideDuplicateClass)) {
                                let a = s.index();
                                t.slideTo(a, 0, t.params.runCallbacksOnInit, !0)
                            }
                        }
                    t.params.hashNavigation.watchState && d(c).on("hashchange", h)
                })()
            }), r("destroy", () => {
                t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d(c).off("hashchange", h)
            }), r("transitionEnd _freeModeNoMomentumRelease", () => {
                o && u()
            }), r("slideChange", () => {
                o && t.params.cssMode && u()
            })
        }, function(e) {
            let t, {
                swiper: i,
                extendParams: s,
                on: a,
                emit: r
            } = e;

            function o() {
                if (!i.size) return i.autoplay.running = !1, void(i.autoplay.paused = !1);
                let e = i.slides.eq(i.activeIndex),
                    n = i.params.autoplay.delay;
                e.attr("data-swiper-autoplay") && (n = e.attr("data-swiper-autoplay") || i.params.autoplay.delay), clearTimeout(t), t = h(() => {
                    let e;
                    i.params.autoplay.reverseDirection ? i.params.loop ? (i.loopFix(), e = i.slidePrev(i.params.speed, !0, !0), r("autoplay")) : i.isBeginning ? i.params.autoplay.stopOnLastSlide ? d() : (e = i.slideTo(i.slides.length - 1, i.params.speed, !0, !0), r("autoplay")) : (e = i.slidePrev(i.params.speed, !0, !0), r("autoplay")) : i.params.loop ? (i.loopFix(), e = i.slideNext(i.params.speed, !0, !0), r("autoplay")) : i.isEnd ? i.params.autoplay.stopOnLastSlide ? d() : (e = i.slideTo(0, i.params.speed, !0, !0), r("autoplay")) : (e = i.slideNext(i.params.speed, !0, !0), r("autoplay")), (i.params.cssMode && i.autoplay.running || !1 === e) && o()
                }, n)
            }

            function l() {
                return void 0 === t && !i.autoplay.running && (i.autoplay.running = !0, r("autoplayStart"), o(), !0)
            }

            function d() {
                return !!i.autoplay.running && void 0 !== t && (t && (clearTimeout(t), t = void 0), i.autoplay.running = !1, r("autoplayStop"), !0)
            }

            function c(e) {
                i.autoplay.running && (i.autoplay.paused || (t && clearTimeout(t), i.autoplay.paused = !0, 0 !== e && i.params.autoplay.waitForTransition ? ["transitionend", "webkitTransitionEnd"].forEach(e => {
                    i.$wrapperEl[0].addEventListener(e, p)
                }) : (i.autoplay.paused = !1, o())))
            }

            function u() {
                let e = n();
                "hidden" === e.visibilityState && i.autoplay.running && c(), "visible" === e.visibilityState && i.autoplay.paused && (o(), i.autoplay.paused = !1)
            }

            function p(e) {
                i && !i.destroyed && i.$wrapperEl && e.target === i.$wrapperEl[0] && (["transitionend", "webkitTransitionEnd"].forEach(e => {
                    i.$wrapperEl[0].removeEventListener(e, p)
                }), i.autoplay.paused = !1, i.autoplay.running ? o() : d())
            }

            function f() {
                i.params.autoplay.disableOnInteraction ? d() : (r("autoplayPause"), c()), ["transitionend", "webkitTransitionEnd"].forEach(e => {
                    i.$wrapperEl[0].removeEventListener(e, p)
                })
            }

            function m() {
                i.params.autoplay.disableOnInteraction || (i.autoplay.paused = !1, r("autoplayResume"), o())
            }
            i.autoplay = {
                running: !1,
                paused: !1
            }, s({
                autoplay: {
                    enabled: !1,
                    delay: 3e3,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            }), a("init", () => {
                i.params.autoplay.enabled && (l(), n().addEventListener("visibilitychange", u), i.params.autoplay.pauseOnMouseEnter && (i.$el.on("mouseenter", f), i.$el.on("mouseleave", m)))
            }), a("beforeTransitionStart", (e, t, n) => {
                i.autoplay.running && (n || !i.params.autoplay.disableOnInteraction ? i.autoplay.pause(t) : d())
            }), a("sliderFirstMove", () => {
                i.autoplay.running && (i.params.autoplay.disableOnInteraction ? d() : c())
            }), a("touchEnd", () => {
                i.params.cssMode && i.autoplay.paused && !i.params.autoplay.disableOnInteraction && o()
            }), a("destroy", () => {
                i.$el.off("mouseenter", f), i.$el.off("mouseleave", m), i.autoplay.running && d(), n().removeEventListener("visibilitychange", u)
            }), Object.assign(i.autoplay, {
                pause: c,
                run: o,
                start: l,
                stop: d
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n
            } = e;
            i({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let s = !1,
                a = !1;

            function r() {
                let e = t.thumbs.swiper;
                if (!e || e.destroyed) return;
                let i = e.clickedIndex,
                    n = e.clickedSlide;
                if (n && d(n).hasClass(t.params.thumbs.slideThumbActiveClass) || null == i) return;
                let s;
                if (s = e.params.loop ? parseInt(d(e.clickedSlide).attr("data-swiper-slide-index"), 10) : i, t.params.loop) {
                    let a = t.activeIndex;
                    t.slides.eq(a).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, a = t.activeIndex);
                    let r = t.slides.eq(a).prevAll(`[data-swiper-slide-index="${s}"]`).eq(0).index(),
                        o = t.slides.eq(a).nextAll(`[data-swiper-slide-index="${s}"]`).eq(0).index();
                    s = void 0 === r ? o : void 0 === o ? r : o - a < a - r ? o : r
                }
                t.slideTo(s)
            }

            function o() {
                let {
                    thumbs: e
                } = t.params;
                if (s) return !1;
                s = !0;
                let i = t.constructor;
                if (e.swiper instanceof i) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                });
                else if (f(e.swiper)) {
                    let n = Object.assign({}, e.swiper);
                    Object.assign(n, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), t.thumbs.swiper = new i(n), a = !0
                }
                return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", r), !0
            }

            function l(e) {
                let i = t.thumbs.swiper;
                if (!i || i.destroyed) return;
                let n = "auto" === i.params.slidesPerView ? i.slidesPerViewDynamic() : i.params.slidesPerView,
                    s = 1,
                    a = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (s = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (s = 1), s = Math.floor(s), i.slides.removeClass(a), i.params.loop || i.params.virtual && i.params.virtual.enabled)
                    for (let r = 0; r < s; r += 1) i.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex+r}"]`).addClass(a);
                else
                    for (let o = 0; o < s; o += 1) i.slides.eq(t.realIndex + o).addClass(a);
                let l = t.params.thumbs.autoScrollOffset,
                    d = l && !i.params.loop;
                if (t.realIndex !== i.realIndex || d) {
                    let c, h, u = i.activeIndex;
                    if (i.params.loop) {
                        i.slides.eq(u).hasClass(i.params.slideDuplicateClass) && (i.loopFix(), i._clientLeft = i.$wrapperEl[0].clientLeft, u = i.activeIndex);
                        let p = i.slides.eq(u).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(),
                            f = i.slides.eq(u).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                        c = void 0 === p ? f : void 0 === f ? p : f - u == u - p ? i.params.slidesPerGroup > 1 ? f : u : f - u < u - p ? f : p, h = t.activeIndex > t.previousIndex ? "next" : "prev"
                    } else h = (c = t.realIndex) > t.previousIndex ? "next" : "prev";
                    d && (c += "next" === h ? l : -1 * l), i.visibleSlidesIndexes && 0 > i.visibleSlidesIndexes.indexOf(c) && (i.params.centeredSlides ? c = c > u ? c - Math.floor(n / 2) + 1 : c + Math.floor(n / 2) - 1 : c > u && i.params.slidesPerGroup, i.slideTo(c, e ? 0 : void 0))
                }
            }
            t.thumbs = {
                swiper: null
            }, n("beforeInit", () => {
                let {
                    thumbs: e
                } = t.params;
                e && e.swiper && (o(), l(!0))
            }), n("slideChange update resize observerUpdate", () => {
                l()
            }), n("setTransition", (e, i) => {
                let n = t.thumbs.swiper;
                n && !n.destroyed && n.setTransition(i)
            }), n("beforeDestroy", () => {
                let e = t.thumbs.swiper;
                e && !e.destroyed && a && e.destroy()
            }), Object.assign(t.thumbs, {
                init: o,
                update: l
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                emit: n,
                once: s
            } = e;
            i({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: .02
                }
            }), Object.assign(t, {
                freeMode: {
                    onTouchStart: function() {
                        let e = t.getTranslate();
                        t.setTranslate(e), t.setTransition(0), t.touchEventsData.velocities.length = 0, t.freeMode.onTouchEnd({
                            currentPos: t.rtl ? t.translate : -t.translate
                        })
                    },
                    onTouchMove: function() {
                        let {
                            touchEventsData: e,
                            touches: i
                        } = t;
                        0 === e.velocities.length && e.velocities.push({
                            position: i[t.isHorizontal() ? "startX" : "startY"],
                            time: e.touchStartTime
                        }), e.velocities.push({
                            position: i[t.isHorizontal() ? "currentX" : "currentY"],
                            time: u()
                        })
                    },
                    onTouchEnd: function(e) {
                        let {
                            currentPos: i
                        } = e, {
                            params: a,
                            $wrapperEl: r,
                            rtlTranslate: o,
                            snapGrid: l,
                            touchEventsData: d
                        } = t, c = u() - d.touchStartTime;
                        if (i < -t.minTranslate()) t.slideTo(t.activeIndex);
                        else if (i > -t.maxTranslate()) t.slides.length < l.length ? t.slideTo(l.length - 1) : t.slideTo(t.slides.length - 1);
                        else {
                            if (a.freeMode.momentum) {
                                if (d.velocities.length > 1) {
                                    let h = d.velocities.pop(),
                                        p = d.velocities.pop(),
                                        f = h.position - p.position,
                                        m = h.time - p.time;
                                    t.velocity = f / m, t.velocity /= 2, Math.abs(t.velocity) < a.freeMode.minimumVelocity && (t.velocity = 0), (m > 150 || u() - h.time > 300) && (t.velocity = 0)
                                } else t.velocity = 0;
                                t.velocity *= a.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                                let g = 1e3 * a.freeMode.momentumRatio,
                                    v = t.velocity * g,
                                    y = t.translate + v;
                                o && (y = -y);
                                let $, b = !1,
                                    w = 20 * Math.abs(t.velocity) * a.freeMode.momentumBounceRatio,
                                    _;
                                if (y < t.maxTranslate()) a.freeMode.momentumBounce ? (y + t.maxTranslate() < -w && (y = t.maxTranslate() - w), $ = t.maxTranslate(), b = !0, d.allowMomentumBounce = !0) : y = t.maxTranslate(), a.loop && a.centeredSlides && (_ = !0);
                                else if (y > t.minTranslate()) a.freeMode.momentumBounce ? (y - t.minTranslate() > w && (y = t.minTranslate() + w), $ = t.minTranslate(), b = !0, d.allowMomentumBounce = !0) : y = t.minTranslate(), a.loop && a.centeredSlides && (_ = !0);
                                else if (a.freeMode.sticky) {
                                    let C;
                                    for (let x = 0; x < l.length; x += 1)
                                        if (l[x] > -y) {
                                            C = x;
                                            break
                                        } y = -(y = Math.abs(l[C] - y) < Math.abs(l[C - 1] - y) || "next" === t.swipeDirection ? l[C] : l[C - 1])
                                }
                                if (_ && s("transitionEnd", () => {
                                        t.loopFix()
                                    }), 0 !== t.velocity) {
                                    if (g = o ? Math.abs((-y - t.translate) / t.velocity) : Math.abs((y - t.translate) / t.velocity), a.freeMode.sticky) {
                                        let k = Math.abs((o ? -y : y) - t.translate),
                                            T = t.slidesSizesGrid[t.activeIndex];
                                        g = k < T ? a.speed : k < 2 * T ? 1.5 * a.speed : 2.5 * a.speed
                                    }
                                } else if (a.freeMode.sticky) return void t.slideToClosest();
                                a.freeMode.momentumBounce && b ? (t.updateProgress($), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating = !0, r.transitionEnd(() => {
                                    t && !t.destroyed && d.allowMomentumBounce && (n("momentumBounce"), t.setTransition(a.speed), setTimeout(() => {
                                        t.setTranslate($), r.transitionEnd(() => {
                                            t && !t.destroyed && t.transitionEnd()
                                        })
                                    }, 0))
                                })) : t.velocity ? (n("_freeModeNoMomentumRelease"), t.updateProgress(y), t.setTransition(g), t.setTranslate(y), t.transitionStart(!0, t.swipeDirection), t.animating || (t.animating = !0, r.transitionEnd(() => {
                                    t && !t.destroyed && t.transitionEnd()
                                }))) : t.updateProgress(y), t.updateActiveIndex(), t.updateSlidesClasses()
                            } else {
                                if (a.freeMode.sticky) return void t.slideToClosest();
                                a.freeMode && n("_freeModeNoMomentumRelease")
                            }(!a.freeMode.momentum || c >= a.longSwipesMs) && (t.updateProgress(), t.updateActiveIndex(), t.updateSlidesClasses())
                        }
                    }
                }
            })
        }, function(e) {
            let t, i, n, {
                swiper: s,
                extendParams: a
            } = e;
            a({
                grid: {
                    rows: 1,
                    fill: "column"
                }
            }), s.grid = {
                initSlides(e) {
                    let {
                        slidesPerView: a
                    } = s.params, {
                        rows: r,
                        fill: o
                    } = s.params.grid;
                    i = t / r, n = Math.floor(e / r), t = Math.floor(e / r) === e / r ? e : Math.ceil(e / r) * r, "auto" !== a && "row" === o && (t = Math.max(t, a * r))
                },
                updateSlide(e, a, r, o) {
                    let {
                        slidesPerGroup: l,
                        spaceBetween: d
                    } = s.params, {
                        rows: c,
                        fill: h
                    } = s.params.grid, u, p, f;
                    if ("row" === h && l > 1) {
                        let m = Math.floor(e / (l * c)),
                            g = e - c * l * m,
                            v = 0 === m ? l : Math.min(Math.ceil((r - m * c * l) / c), l);
                        f = Math.floor(g / v), u = (p = g - f * v + m * l) + f * t / c, a.css({
                            "-webkit-order": u,
                            order: u
                        })
                    } else "column" === h ? (p = Math.floor(e / c), f = e - p * c, (p > n || p === n && f === c - 1) && (f += 1) >= c && (f = 0, p += 1)) : (f = Math.floor(e / i), p = e - f * i);
                    a.css(o("margin-top"), 0 !== f ? d && `${d}px` : "")
                },
                updateWrapperSize(e, i, n) {
                    let {
                        spaceBetween: a,
                        centeredSlides: r,
                        roundLengths: o
                    } = s.params, {
                        rows: l
                    } = s.params.grid;
                    if (s.virtualSize = (e + a) * t, s.virtualSize = Math.ceil(s.virtualSize / l) - a, s.$wrapperEl.css({
                            [n("width")]: `${s.virtualSize+a}px`
                        }), r) {
                        i.splice(0, i.length);
                        let d = [];
                        for (let c = 0; c < i.length; c += 1) {
                            let h = i[c];
                            o && (h = Math.floor(h)), i[c] < s.virtualSize + i[0] && d.push(h)
                        }
                        i.push(...d)
                    }
                }
            }
        }, function(e) {
            let {
                swiper: t
            } = e;
            Object.assign(t, {
                appendSlide: B.bind(t),
                prependSlide: q.bind(t),
                addSlide: W.bind(t),
                removeSlide: F.bind(t),
                removeAllSlides: R.bind(t)
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n
            } = e;
            i({
                fadeEffect: {
                    crossFade: !1,
                    transformEl: null
                }
            }), j({
                effect: "fade",
                swiper: t,
                on: n,
                setTranslate() {
                    let {
                        slides: e
                    } = t, i = t.params.fadeEffect;
                    for (let n = 0; n < e.length; n += 1) {
                        let s = t.slides.eq(n),
                            a = -s[0].swiperSlideOffset;
                        t.params.virtualTranslate || (a -= t.translate);
                        let r = 0;
                        t.isHorizontal() || (r = a, a = 0);
                        let o = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(s[0].progress), 0) : 1 + Math.min(Math.max(s[0].progress, -1), 0);
                        V(i, s).css({
                            opacity: o
                        }).transform(`translate3d(${a}px, ${r}px, 0px)`)
                    }
                },
                setTransition(e) {
                    let {
                        transformEl: i
                    } = t.params.fadeEffect;
                    (i ? t.slides.find(i) : t.slides).transition(e), X({
                        swiper: t,
                        duration: e,
                        transformEl: i,
                        allSlides: !0
                    })
                },
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n
            } = e;
            i({
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: .94
                }
            });
            let s = (e, t, i) => {
                let n = i ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                    s = i ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === n.length && (n = d(`<div class="swiper-slide-shadow-${i?"left":"top"}"></div>`), e.append(n)), 0 === s.length && (s = d(`<div class="swiper-slide-shadow-${i?"right":"bottom"}"></div>`), e.append(s)), n.length && (n[0].style.opacity = Math.max(-t, 0)), s.length && (s[0].style.opacity = Math.max(t, 0))
            };
            j({
                effect: "cube",
                swiper: t,
                on: n,
                setTranslate() {
                    let {
                        $el: e,
                        $wrapperEl: i,
                        slides: n,
                        width: a,
                        height: r,
                        rtlTranslate: o,
                        size: l,
                        browser: c
                    } = t, h = t.params.cubeEffect, u = t.isHorizontal(), p = t.virtual && t.params.virtual.enabled, f, m = 0;
                    h.shadow && (u ? (0 === (f = i.find(".swiper-cube-shadow")).length && (f = d('<div class="swiper-cube-shadow"></div>'), i.append(f)), f.css({
                        height: `${a}px`
                    })) : 0 === (f = e.find(".swiper-cube-shadow")).length && (f = d('<div class="swiper-cube-shadow"></div>'), e.append(f)));
                    for (let g = 0; g < n.length; g += 1) {
                        let v = n.eq(g),
                            y = g;
                        p && (y = parseInt(v.attr("data-swiper-slide-index"), 10));
                        let $ = 90 * y,
                            b = Math.floor($ / 360);
                        o && (b = Math.floor(-($ = -$) / 360));
                        let w = Math.max(Math.min(v[0].progress, 1), -1),
                            _ = 0,
                            C = 0,
                            x = 0;
                        y % 4 == 0 ? (_ = -(4 * b) * l, x = 0) : (y - 1) % 4 == 0 ? (_ = 0, x = -(4 * b) * l) : (y - 2) % 4 == 0 ? (_ = l + 4 * b * l, x = l) : (y - 3) % 4 == 0 && (_ = -l, x = 3 * l + 4 * l * b), o && (_ = -_), u || (C = _, _ = 0);
                        let k = `rotateX(${u?0:-$}deg) rotateY(${u?$:0}deg) translate3d(${_}px, ${C}px, ${x}px)`;
                        w <= 1 && w > -1 && (m = 90 * y + 90 * w, o && (m = -(90 * y) - 90 * w)), v.transform(k), h.slideShadows && s(v, w, u)
                    }
                    if (i.css({
                            "-webkit-transform-origin": `50% 50% -${l/2}px`,
                            "transform-origin": `50% 50% -${l/2}px`
                        }), h.shadow) {
                        if (u) f.transform(`translate3d(0px, ${a/2+h.shadowOffset}px, ${-a/2}px) rotateX(90deg) rotateZ(0deg) scale(${h.shadowScale})`);
                        else {
                            let T = Math.abs(m) - 90 * Math.floor(Math.abs(m) / 90),
                                E = h.shadowScale,
                                S = h.shadowScale / (1.5 - (Math.sin(2 * T * Math.PI / 360) / 2 + Math.cos(2 * T * Math.PI / 360) / 2)),
                                D = h.shadowOffset;
                            f.transform(`scale3d(${E}, 1, ${S}) translate3d(0px, ${r/2+D}px, ${-r/2/S}px) rotateX(-90deg)`)
                        }
                    }
                    let M = c.isSafari || c.isWebView ? -l / 2 : 0;
                    i.transform(`translate3d(0px,0,${M}px) rotateX(${t.isHorizontal()?0:m}deg) rotateY(${t.isHorizontal()?-m:0}deg)`), i[0].style.setProperty("--swiper-cube-translate-z", `${M}px`)
                },
                setTransition(e) {
                    let {
                        $el: i,
                        slides: n
                    } = t;
                    n.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t.params.cubeEffect.shadow && !t.isHorizontal() && i.find(".swiper-cube-shadow").transition(e)
                },
                recreateShadows() {
                    let e = t.isHorizontal();
                    t.slides.each(t => {
                        let i = Math.max(Math.min(t.progress, 1), -1);
                        s(d(t), i, e)
                    })
                },
                getEffectParams: () => t.params.cubeEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    resistanceRatio: 0,
                    spaceBetween: 0,
                    centeredSlides: !1,
                    virtualTranslate: !0
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n
            } = e;
            i({
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0,
                    transformEl: null
                }
            });
            let s = (e, i, n) => {
                let s = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"),
                    a = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === s.length && (s = G(n, e, t.isHorizontal() ? "left" : "top")), 0 === a.length && (a = G(n, e, t.isHorizontal() ? "right" : "bottom")), s.length && (s[0].style.opacity = Math.max(-i, 0)), a.length && (a[0].style.opacity = Math.max(i, 0))
            };
            j({
                effect: "flip",
                swiper: t,
                on: n,
                setTranslate() {
                    let {
                        slides: e,
                        rtlTranslate: i
                    } = t, n = t.params.flipEffect;
                    for (let a = 0; a < e.length; a += 1) {
                        let r = e.eq(a),
                            o = r[0].progress;
                        t.params.flipEffect.limitRotation && (o = Math.max(Math.min(r[0].progress, 1), -1));
                        let l = r[0].swiperSlideOffset,
                            d = -180 * o,
                            c = 0,
                            h = t.params.cssMode ? -l - t.translate : -l,
                            u = 0;
                        t.isHorizontal() ? i && (d = -d) : (u = h, h = 0, c = -d, d = 0), r[0].style.zIndex = -Math.abs(Math.round(o)) + e.length, n.slideShadows && s(r, o, n);
                        let p = `translate3d(${h}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                        V(n, r).transform(p)
                    }
                },
                setTransition(e) {
                    let {
                        transformEl: i
                    } = t.params.flipEffect;
                    (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), X({
                        swiper: t,
                        duration: e,
                        transformEl: i
                    })
                },
                recreateShadows() {
                    let e = t.params.flipEffect;
                    t.slides.each(i => {
                        let n = d(i),
                            a = n[0].progress;
                        t.params.flipEffect.limitRotation && (a = Math.max(Math.min(i.progress, 1), -1)), s(n, a, e)
                    })
                },
                getEffectParams: () => t.params.flipEffect,
                perspective: () => !0,
                overwriteParams: () => ({
                    slidesPerView: 1,
                    slidesPerGroup: 1,
                    watchSlidesProgress: !0,
                    spaceBetween: 0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n
            } = e;
            i({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0,
                    transformEl: null
                }
            }), j({
                effect: "coverflow",
                swiper: t,
                on: n,
                setTranslate() {
                    let {
                        width: e,
                        height: i,
                        slides: n,
                        slidesSizesGrid: s
                    } = t, a = t.params.coverflowEffect, r = t.isHorizontal(), o = t.translate, l = r ? e / 2 - o : i / 2 - o, d = r ? a.rotate : -a.rotate, c = a.depth;
                    for (let h = 0, u = n.length; h < u; h += 1) {
                        let p = n.eq(h),
                            f = s[h],
                            m = (l - p[0].swiperSlideOffset - f / 2) / f,
                            g = "function" == typeof a.modifier ? a.modifier(m) : m * a.modifier,
                            v = r ? d * g : 0,
                            y = r ? 0 : d * g,
                            $ = -c * Math.abs(g),
                            b = a.stretch;
                        "string" == typeof b && -1 !== b.indexOf("%") && (b = parseFloat(a.stretch) / 100 * f);
                        let w = r ? 0 : b * g,
                            _ = r ? b * g : 0,
                            C = 1 - (1 - a.scale) * Math.abs(g);
                        .001 > Math.abs(_) && (_ = 0), .001 > Math.abs(w) && (w = 0), .001 > Math.abs($) && ($ = 0), .001 > Math.abs(v) && (v = 0), .001 > Math.abs(y) && (y = 0), .001 > Math.abs(C) && (C = 0);
                        let x = `translate3d(${_}px,${w}px,${$}px)  rotateX(${y}deg) rotateY(${v}deg) scale(${C})`;
                        if (V(a, p).transform(x), p[0].style.zIndex = 1 - Math.abs(Math.round(g)), a.slideShadows) {
                            let k = r ? p.find(".swiper-slide-shadow-left") : p.find(".swiper-slide-shadow-top"),
                                T = r ? p.find(".swiper-slide-shadow-right") : p.find(".swiper-slide-shadow-bottom");
                            0 === k.length && (k = G(a, p, r ? "left" : "top")), 0 === T.length && (T = G(a, p, r ? "right" : "bottom")), k.length && (k[0].style.opacity = g > 0 ? g : 0), T.length && (T[0].style.opacity = -g > 0 ? -g : 0)
                        }
                    }
                },
                setTransition(e) {
                    let {
                        transformEl: i
                    } = t.params.coverflowEffect;
                    (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e)
                },
                perspective: () => !0,
                overwriteParams: () => ({
                    watchSlidesProgress: !0
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n
            } = e;
            i({
                creativeEffect: {
                    transformEl: null,
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [0, 0, 0],
                        rotate: [0, 0, 0],
                        opacity: 1,
                        scale: 1
                    }
                }
            });
            let s = e => "string" == typeof e ? e : `${e}px`;
            j({
                effect: "creative",
                swiper: t,
                on: n,
                setTranslate() {
                    let {
                        slides: e,
                        $wrapperEl: i,
                        slidesSizesGrid: n
                    } = t, a = t.params.creativeEffect, {
                        progressMultiplier: r
                    } = a, o = t.params.centeredSlides;
                    if (o) {
                        let l = n[0] / 2 - t.params.slidesOffsetBefore || 0;
                        i.transform(`translateX(calc(50% - ${l}px))`)
                    }
                    for (let d = 0; d < e.length; d += 1) {
                        let c = e.eq(d),
                            h = c[0].progress,
                            u = Math.min(Math.max(c[0].progress, -a.limitProgress), a.limitProgress),
                            p = u;
                        o || (p = Math.min(Math.max(c[0].originalProgress, -a.limitProgress), a.limitProgress));
                        let f = c[0].swiperSlideOffset,
                            m = [t.params.cssMode ? -f - t.translate : -f, 0, 0],
                            g = [0, 0, 0],
                            v = !1;
                        t.isHorizontal() || (m[1] = m[0], m[0] = 0);
                        let y = {
                            translate: [0, 0, 0],
                            rotate: [0, 0, 0],
                            scale: 1,
                            opacity: 1
                        };
                        u < 0 ? (y = a.next, v = !0) : u > 0 && (y = a.prev, v = !0), m.forEach((e, t) => {
                            m[t] = `calc(${e}px + (${s(y.translate[t])} * ${Math.abs(u*r)}))`
                        }), g.forEach((e, t) => {
                            g[t] = y.rotate[t] * Math.abs(u * r)
                        }), c[0].style.zIndex = -Math.abs(Math.round(h)) + e.length;
                        let $ = m.join(", "),
                            b = `rotateX(${g[0]}deg) rotateY(${g[1]}deg) rotateZ(${g[2]}deg)`,
                            w = p < 0 ? `scale(${1+(1-y.scale)*p*r})` : `scale(${1-(1-y.scale)*p*r})`,
                            _ = p < 0 ? 1 + (1 - y.opacity) * p * r : 1 - (1 - y.opacity) * p * r,
                            C = `translate3d(${$}) ${b} ${w}`;
                        if (v && y.shadow || !v) {
                            let x = c.children(".swiper-slide-shadow");
                            if (0 === x.length && y.shadow && (x = G(a, c)), x.length) {
                                let k = a.shadowPerProgress ? u * (1 / a.limitProgress) : u;
                                x[0].style.opacity = Math.min(Math.max(Math.abs(k), 0), 1)
                            }
                        }
                        let T = V(a, c);
                        T.transform(C).css({
                            opacity: _
                        }), y.origin && T.css("transform-origin", y.origin)
                    }
                },
                setTransition(e) {
                    let {
                        transformEl: i
                    } = t.params.creativeEffect;
                    (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), X({
                        swiper: t,
                        duration: e,
                        transformEl: i,
                        allSlides: !0
                    })
                },
                perspective: () => t.params.creativeEffect.perspective,
                overwriteParams: () => ({
                    watchSlidesProgress: !0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }, function(e) {
            let {
                swiper: t,
                extendParams: i,
                on: n
            } = e;
            i({
                cardsEffect: {
                    slideShadows: !0,
                    transformEl: null,
                    rotate: !0,
                    perSlideRotate: 2,
                    perSlideOffset: 8
                }
            }), j({
                effect: "cards",
                swiper: t,
                on: n,
                setTranslate() {
                    let {
                        slides: e,
                        activeIndex: i
                    } = t, n = t.params.cardsEffect, {
                        startTranslate: s,
                        isTouched: a
                    } = t.touchEventsData, r = t.translate;
                    for (let o = 0; o < e.length; o += 1) {
                        let l = e.eq(o),
                            d = l[0].progress,
                            c = Math.min(Math.max(d, -4), 4),
                            h = l[0].swiperSlideOffset;
                        t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (h -= e[0].swiperSlideOffset);
                        let u = t.params.cssMode ? -h - t.translate : -h,
                            p = 0,
                            f = -100 * Math.abs(c),
                            m = 1,
                            g = -n.perSlideRotate * c,
                            v = n.perSlideOffset - .75 * Math.abs(c),
                            y = t.virtual && t.params.virtual.enabled ? t.virtual.from + o : o,
                            $ = (y === i || y === i - 1) && c > 0 && c < 1 && (a || t.params.cssMode) && r < s,
                            b = (y === i || y === i + 1) && c < 0 && c > -1 && (a || t.params.cssMode) && r > s;
                        if ($ || b) {
                            let w = (1 - Math.abs((Math.abs(c) - .5) / .5)) ** .5;
                            g += -28 * c * w, m += -.5 * w, v += 96 * w, p = -25 * w * Math.abs(c) + "%"
                        }
                        if (u = c < 0 ? `calc(${u}px + (${v*Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v*Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
                            let _ = p;
                            p = u, u = _
                        }
                        let C = c < 0 ? "" + (1 + (1 - m) * c) : "" + (1 - (1 - m) * c),
                            x = `
        translate3d(${u}, ${p}, ${f}px)
        rotateZ(${n.rotate?g:0}deg)
        scale(${C})
      `;
                        if (n.slideShadows) {
                            let k = l.find(".swiper-slide-shadow");
                            0 === k.length && (k = G(n, l)), k.length && (k[0].style.opacity = Math.min(Math.max((Math.abs(c) - .5) / .5, 0), 1))
                        }
                        l[0].style.zIndex = -Math.abs(Math.round(d)) + e.length, V(n, l).transform(x)
                    }
                },
                setTransition(e) {
                    let {
                        transformEl: i
                    } = t.params.cardsEffect;
                    (i ? t.slides.find(i) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), X({
                        swiper: t,
                        duration: e,
                        transformEl: i
                    })
                },
                perspective: () => !0,
                overwriteParams: () => ({
                    watchSlidesProgress: !0,
                    virtualTranslate: !t.params.cssMode
                })
            })
        }];
        return z.use(U), z
    });
let theme = {
    init: function() {
        theme.tnCircleCursor(), theme.tnAosAnimation(), theme.tnHeaderSticked(), theme.tnScrollTop(), theme.tnMobileNav(), theme.tnHotelDatePicker(), theme.tnDateTimePicker(), theme.tnMasonry(), theme.tnLightbox(), theme.tnPlayer(), theme.tnSwiper(), theme.tnBackgroundImage(), theme.tnValidation(), theme.tnPreloader()
    },
    tnPreloader() {
        let e = document.querySelector("#preloader");
        e && window.addEventListener("load", () => {
            e.remove()
        })
    },
    tnHeaderSticked() {
        let e = document.querySelector("#header");
        e && document.addEventListener("scroll", () => {
            window.scrollY > 130 ? (e.classList.add("sticked"), window.scrollY >= 260 ? e.classList.add("showed") : e.classList.remove("showed")) : e.classList.remove("sticked")
        })
    },
    tnCircleCursor() {
        new kursor({
            type: 2,
            color: "rgb(66, 67, 69",
            removeDefaultCursor: !0
        })
    },
    tnScrollTop() {
        let e = document.querySelector(".scroll-top");
        if (e) {
            let t = function() {
                window.scrollY > 130 ? e.classList.add("active") : e.classList.remove("active")
            };
            window.addEventListener("load", t), document.addEventListener("scroll", t), e.addEventListener("click", window.scrollTo({
                top: 0,
                behavior: "smooth"
            }))
        }
    },
    tnMobileNav() {
        let e = document.querySelector(".mobile-nav-show"),
            t = document.querySelector(".mobile-nav-hide");

        function i() {
            document.querySelector("body").classList.toggle("mobile-nav-active"), e.classList.toggle("d-none"), t.classList.toggle("d-none")
        }
        document.querySelectorAll(".mobile-nav-toggle").forEach(e => {
            e.addEventListener("click", function(e) {
                e.preventDefault(), i()
            })
        });
        let n = document.querySelectorAll(".navbar .dropdown > a > .dropdown-indicator");
        n.forEach(e => {
            e.addEventListener("click", function(e) {
                if (document.querySelector(".mobile-nav-active")) {
                    e.preventDefault(), this.parentNode.classList.toggle("active"), this.parentNode.nextElementSibling.classList.toggle("dropdown-active");
                    let t = this.parentNode.querySelector(".dropdown-indicator");
                    t.classList.toggle("ficon-thin-arrow-down"), t.classList.toggle("ficon-thin-arrow-up")
                }
            })
        }), document.querySelectorAll("#navbar a").forEach(e => {
            if (e.hash) document.querySelector(e.hash) && e.addEventListener("click", () => {
                document.querySelector(".mobile-nav-active") && i()
            })
        })
    },
    tnMasonry() {
        let e = document.querySelector(".grid-tour-2col");
        if (null != e) {
            let t = new Masonry(e, {
                itemSelector: ".grid-item",
                columnWidth: ".grid-sizer",
                percentPosition: !0
            });
            imagesLoaded(e).on("progress", function() {
                t.layout()
            })
        }
        let i = document.querySelector(".grid-tour-3col");
        if (null != i) {
            let n = new Masonry(i, {
                itemSelector: ".grid-item",
                columnWidth: ".grid-sizer",
                percentPosition: !0
            });
            imagesLoaded(i).on("progress", function() {
                n.layout()
            })
        }
        let s = document.querySelector(".grid-photo-4col");
        if (null != s) {
            let a = new Masonry(s, {
                itemSelector: ".grid-item",
                columnWidth: ".grid-sizer",
                percentPosition: !0
            });
            imagesLoaded(s).on("progress", function() {
                a.layout()
            })
        }
    },
    tnHotelDatePicker() {
        let e = document.getElementsByClassName("checkin-checkout-date");
        if (e.length > 0) {
            let t = new Date,
                i = t.toString();
            t.setDate(t.getDate() + 1);
            let n = t.toString();
            e[0].value = i.slice(4, 15) + " - " + n.slice(4, 15), new HotelDatepicker(e[0], {
                format: "MMM DD YYYY"
            })
        }
    },
    tnDateTimePicker() {
        new flatpickr(".arrival-date", {
            minDate: "today",
            dateFormat: "M d Y",
            allowInput: !0
        }), new flatpickr(".department-date", {
            minDate: "today",
            dateFormat: "M d Y",
            allowInput: !0
        }), new flatpickr(".arrival-time", {
            enableTime: !0,
            noCalendar: !0,
            dateFormat: "H:i"
        })
    },
    tnPlayer() {
        new Plyr(".html5-player"), new Plyr(".vimeo-player"), new Plyr(".youtube-player")
    },
    tnLightbox() {
        GLightbox({
            selector: ".glightbox"
        }), GLightbox({
            selector: ".media-glightbox",
            touchNavigation: !0,
            loop: !1,
            zoomable: !1,
            autoplayVideos: !0,
            moreLength: 0,
            slideExtraAttributes: {
                poster: ""
            },
            plyr: {
                config: {
                    ratio: "16:9",
                    muted: !1,
                    hideControls: !0,
                    youtube: {
                        noCookie: !1,
                        rel: 0,
                        showinfo: 0,
                        iv_load_policy: 3
                    },
                    vimeo: {
                        byline: !1,
                        portrait: !1,
                        title: !1,
                        speed: !0,
                        transparent: !1
                    }
                }
            }
        })
    },
    tnSwiper() {
        new Swiper(".hero-slider .swiper", {
            speed: 1e3,
            loop: !0,
            autoplay: {
                delay: 4e3,
                disableOnInteraction: !1
            },
            navigation: {
                enabled: !1
            },
            pagination: {
                el: ".hero-pagination",
                clickable: !0
            },
            breakpoints: {
                990: {
                    navigation: {
                        nextEl: ".hero-next",
                        prevEl: ".hero-prev",
                        enabled: !0
                    }
                }
            }
        }), new Swiper(".rooms-slider", {
            speed: 1e3,
            loop: !0,
            navigation: {
                enabled: !1
            },
            pagination: {
                el: ".rooms-pagination",
                type: "bullets",
                clickable: !0
            },
            breakpoints: {
                990: {
                    navigation: {
                        nextEl: ".rooms-next",
                        prevEl: ".rooms-prev",
                        enabled: !0
                    },
                    pagination: {
                        type: "fraction",
                        clickable: !1
                    }
                }
            }
        }), new Swiper(".testimonial-swiper", {
            speed: 1e3,
            loop: !0,
            pagination: {
                el: ".testimonial-pagination",
                clickable: !0
            }
        }), new Swiper(".news-swiper", {
            speed: 1e3,
            loop: !0,
            navigation: {
                enabled: !1
            },
            pagination: {
                el: ".news-pagination",
                clickable: !0
            },
            breakpoints: {
                990: {
                    navigation: {
                        nextEl: ".news-next",
                        prevEl: ".news-prev",
                        enabled: !0
                    }
                }
            }
        }), new Swiper(".heading-page-swiper", {
            speed: 1e3,
            navigation: {
                enabled: !1
            },
            pagination: {
                el: ".heading-page-pagination",
                clickable: !0
            },
            breakpoints: {
                1200: {
                    navigation: {
                        nextEl: ".heading-page-next",
                        prevEl: ".heading-page-prev",
                        enabled: !0
                    }
                }
            }
        }), new Swiper(".service-swiper", {
            speed: 1e3,
            loop: !0,
            navigation: {
                enabled: !1
            },
            pagination: {
                el: ".service-pagination",
                clickable: !0
            },
            breakpoints: {
                990: {
                    navigation: {
                        nextEl: ".service-next",
                        prevEl: ".service-prev",
                        enabled: !0
                    }
                }
            }
        }), new Swiper(".other-roooms-swiper", {
            slidesPerView: 1,
            spaceBetween: 50,
            speed: 1e3,
            loop: !0,
            navigation: {
                enabled: !1
            },
            pagination: {
                el: ".other-roooms-pagination",
                clickable: !0,
                enabled: !0
            },
            breakpoints: {
                990: {
                    slidesPerView: 2,
                    navigation: {
                        nextEl: ".other-roooms-next",
                        prevEl: ".other-roooms-prev",
                        enabled: !0
                    },
                    pagination: {
                        enabled: !1
                    }
                }
            }
        }), new Swiper(".other-tours-swiper", {
            slidesPerView: 1,
            spaceBetween: 50,
            speed: 1e3,
            loop: !0,
            navigation: {
                enabled: !1
            },
            pagination: {
                el: ".other-tours-pagination",
                enabled: !0,
                clickable: !0
            },
            breakpoints: {
                1200: {
                    slidesPerView: 3,
                    navigation: {
                        nextEl: ".other-tours-next",
                        prevEl: ".other-tours-prev",
                        enabled: !0
                    },
                    pagination: {
                        enabled: !1
                    }
                },
                990: {
                    slidesPerView: 2,
                    navigation: {
                        nextEl: ".other-tours-next",
                        prevEl: ".other-tours-prev",
                        enabled: !0
                    },
                    pagination: {
                        enabled: !1
                    }
                }
            }
        })
    },
    tnAosAnimation() {
        window.addEventListener("load", () => {
            AOS.init({
                duration: 1e3,
                easing: "ease-in-out",
                once: !0,
                mirror: !1,
                disable: function() {
                    return window.innerWidth < 768
                }
            })
        })
    },
    tnBackgroundImage() {
        let e = document.querySelectorAll(".bg-image");
        for (let t = 0; t < e.length; t++) {
            let i = e[t].getAttribute("data-image-src");
            e[t].style.backgroundImage = "url('" + i + "')"
        }
    },
    tnValidation() {
        var e = document.querySelectorAll(".needs-validation");
        Array.prototype.slice.call(e).forEach(function(e) {
            e.addEventListener("submit", function(t) {
                e.checkValidity() || (t.preventDefault(), t.stopPropagation()), e.classList.add("was-validated")
            }, !1)
        })
    }
};
theme.init();