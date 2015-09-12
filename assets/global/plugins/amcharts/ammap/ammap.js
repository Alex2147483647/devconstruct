if (!AmCharts)var AmCharts = {
    themes: {},
    maps: {},
    inheriting: {},
    charts: [],
    onReadyArray: [],
    useUTC: !1,
    updateRate: 40,
    uid: 0,
    lang: {},
    translations: {},
    mapTranslations: {},
    windows: {},
    initHandlers: []
};
AmCharts.Class = function (a) {
    var b = function () {
        arguments[0] !== AmCharts.inheriting && (this.events = {}, this.construct.apply(this, arguments))
    };
    a.inherits ? (b.prototype = new a.inherits(AmCharts.inheriting), b.base = a.inherits.prototype, delete a.inherits) : (b.prototype.createEvents = function () {
        for (var a = 0, b = arguments.length; a < b; a++)this.events[arguments[a]] = []
    }, b.prototype.listenTo = function (a, b, c) {
        this.removeListener(a, b, c);
        a.events[b].push({
            handler: c,
            scope: this
        })
    }, b.prototype.addListener = function (a, b, c) {
        this.removeListener(this,
            a, b);
        this.events[a].push({
            handler: b,
            scope: c
        })
    }, b.prototype.removeListener = function (a, b, c) {
        if (a && a.events)for (a = a.events[b], b = a.length - 1; 0 <= b; b--)a[b].handler === c && a.splice(b, 1)
    }, b.prototype.fire = function (a, b) {
        for (var c = this.events[a], g = 0, h = c.length; g < h; g++) {
            var k = c[g];
            k.handler.call(k.scope, b)
        }
    });
    for (var c in a)b.prototype[c] = a[c];
    return b
};
AmCharts.addChart = function (a) {
    AmCharts.charts.push(a)
};
AmCharts.removeChart = function (a) {
    for (var b = AmCharts.charts, c = b.length - 1; 0 <= c; c--)b[c] == a && b.splice(c, 1)
};
AmCharts.isModern = !0;
AmCharts.getIEVersion = function () {
    var a = 0;
    if ("Microsoft Internet Explorer" == navigator.appName) {
        var b = navigator.userAgent, c = /MSIE ([0-9]{1,}[.0-9]{0,})/;
        null != c.exec(b) && (a = parseFloat(RegExp.$1))
    } else"Netscape" == navigator.appName && (b = navigator.userAgent, c = /Trident\/.*rv:([0-9]{1,}[.0-9]{0,})/, null != c.exec(b) && (a = parseFloat(RegExp.$1)));
    return a
};
AmCharts.applyLang = function (a, b) {
    var c = AmCharts.translations;
    b.dayNames = AmCharts.dayNames;
    b.shortDayNames = AmCharts.shortDayNames;
    b.monthNames = AmCharts.monthNames;
    b.shortMonthNames = AmCharts.shortMonthNames;
    c && (c = c[a]) && (AmCharts.lang = c, c.monthNames && (b.dayNames = c.dayNames, b.shortDayNames = c.shortDayNames, b.monthNames = c.monthNames, b.shortMonthNames = c.shortMonthNames))
};
AmCharts.IEversion = AmCharts.getIEVersion();
9 > AmCharts.IEversion && 0 < AmCharts.IEversion && (AmCharts.isModern = !1, AmCharts.isIE = !0);
AmCharts.dx = 0;
AmCharts.dy = 0;
if (document.addEventListener || window.opera)AmCharts.isNN = !0, AmCharts.isIE = !1, AmCharts.dx = .5, AmCharts.dy = .5;
document.attachEvent && (AmCharts.isNN = !1, AmCharts.isIE = !0, AmCharts.isModern || (AmCharts.dx = 0, AmCharts.dy = 0));
window.chrome && (AmCharts.chrome = !0);
AmCharts.handleResize = function () {
    for (var a = AmCharts.charts, b = 0; b < a.length; b++) {
        var c = a[b];
        c && c.div && c.handleResize()
    }
};
AmCharts.handleMouseUp = function (a) {
    for (var b = AmCharts.charts, c = 0; c < b.length; c++) {
        var d = b[c];
        d && d.handleReleaseOutside(a)
    }
};
AmCharts.handleMouseMove = function (a) {
    for (var b = AmCharts.charts, c = 0; c < b.length; c++) {
        var d = b[c];
        d && d.handleMouseMove(a)
    }
};
AmCharts.resetMouseOver = function () {
    for (var a = AmCharts.charts, b = 0; b < a.length; b++) {
        var c = a[b];
        c && (c.mouseIsOver = !1)
    }
};
AmCharts.ready = function (a) {
    AmCharts.onReadyArray.push(a)
};
AmCharts.handleLoad = function () {
    AmCharts.isReady = !0;
    for (var a = AmCharts.onReadyArray, b = 0; b < a.length; b++) {
        var c = a[b];
        isNaN(AmCharts.processDelay) ? c() : setTimeout(c, AmCharts.processDelay * b)
    }
};
AmCharts.addInitHandler = function (a, b) {
    AmCharts.initHandlers.push({
        method: a,
        types: b
    })
};
AmCharts.callInitHandler = function (a) {
    var b = AmCharts.initHandlers;
    if (AmCharts.initHandlers)for (var c = 0; c < b.length; c++) {
        var d = b[c];
        d.types && -1 != d.types.indexOf(a.type) && d.method(a)
    }
};
AmCharts.getUniqueId = function () {
    AmCharts.uid++;
    return "AmChartsEl-" + AmCharts.uid
};
AmCharts.isNN && (document.addEventListener("mousemove", AmCharts.handleMouseMove, !0), window.addEventListener("resize", AmCharts.handleResize, !0), document.addEventListener("mouseup", AmCharts.handleMouseUp, !0), window.addEventListener("load", AmCharts.handleLoad, !0));
AmCharts.isIE && (document.attachEvent("onmousemove", AmCharts.handleMouseMove), window.attachEvent("onresize", AmCharts.handleResize), document.attachEvent("onmouseup", AmCharts.handleMouseUp), window.attachEvent("onload", AmCharts.handleLoad));
AmCharts.clear = function () {
    var a = AmCharts.charts;
    if (a)for (var b = 0; b < a.length; b++)a[b].clear();
    AmCharts.charts = null;
    AmCharts.isNN && (document.removeEventListener("mousemove", AmCharts.handleMouseMove, !0), window.removeEventListener("resize", AmCharts.handleResize, !0), document.removeEventListener("mouseup", AmCharts.handleMouseUp, !0), window.removeEventListener("load", AmCharts.handleLoad, !0));
    AmCharts.isIE && (document.detachEvent("onmousemove", AmCharts.handleMouseMove), window.detachEvent("onresize", AmCharts.handleResize),
        document.detachEvent("onmouseup", AmCharts.handleMouseUp), window.detachEvent("onload", AmCharts.handleLoad))
};
AmCharts.makeChart = function (a, b, c) {
    var d = b.type, f = b.theme;
    AmCharts.isString(f) && (f = AmCharts.themes[f], b.theme = f);
    var e;
    switch (d) {
        case "serial":
            e = new AmCharts.AmSerialChart(f);
            break;
        case "xy":
            e = new AmCharts.AmXYChart(f);
            break;
        case "pie":
            e = new AmCharts.AmPieChart(f);
            break;
        case "radar":
            e = new AmCharts.AmRadarChart(f);
            break;
        case "gauge":
            e = new AmCharts.AmAngularGauge(f);
            break;
        case "funnel":
            e = new AmCharts.AmFunnelChart(f);
            break;
        case "map":
            e = new AmCharts.AmMap(f);
            break;
        case "stock":
            e = new AmCharts.AmStockChart(f)
    }
    AmCharts.extend(e,
        b);
    AmCharts.isReady ? isNaN(c) ? e.write(a) : setTimeout(function () {
        AmCharts.realWrite(e, a)
    }, c) : AmCharts.ready(function () {
        isNaN(c) ? e.write(a) : setTimeout(function () {
            AmCharts.realWrite(e, a)
        }, c)
    });
    return e
};
AmCharts.realWrite = function (a, b) {
    a.write(b)
};
AmCharts.toBoolean = function (a, b) {
    if (void 0 === a)return b;
    switch (String(a).toLowerCase()) {
        case "true":
        case "yes":
        case "1":
            return !0;
        case "false":
        case "no":
        case "0":
        case null:
            return !1;
        default:
            return Boolean(a)
    }
};
AmCharts.removeFromArray = function (a, b) {
    var c;
    for (c = a.length - 1; 0 <= c; c--)a[c] == b && a.splice(c, 1)
};
AmCharts.getDecimals = function (a) {
    var b = 0;
    isNaN(a) || (a = String(a), -1 != a.indexOf("e-") ? b = Number(a.split("-")[1]) : -1 != a.indexOf(".") && (b = a.split(".")[1].length));
    return b
};
AmCharts.wrappedText = function (a, b, c, d, f, e, g, h, k) {
    var l = AmCharts.text(a, b, c, d, f, e, g), m = "\n";
    AmCharts.isModern || (m = "<br>");
    if (10 < k)return l;
    if (l) {
        var n = l.getBBox();
        if (n.width > h) {
            l.remove();
            for (var l = [], r = 0; -1 < (index = b.indexOf(" ", r));)l.push(index), r = index + 1;
            for (var p = Math.round(b.length / 2), v = 1E3, x, r = 0; r < l.length; r++) {
                var t = Math.abs(l[r] - p);
                t < v && (x = l[r], v = t)
            }
            if (isNaN(x)) {
                h = Math.ceil(n.width / h);
                if (0 == k)for (r = 1; r < h; r++)x = Math.round(b.length / h * r), b = b.substr(0, x) + m + b.substr(x);
                return AmCharts.text(a, b,
                    c, d, f, e, g)
            }
            b = b.substr(0, x) + m + b.substr(x + 1);
            return AmCharts.wrappedText(a, b, c, d, f, e, g, h, k + 1)
        }
        return l
    }
};
AmCharts.getStyle = function (a, b) {
    var c = "";
    document.defaultView && document.defaultView.getComputedStyle ? c = document.defaultView.getComputedStyle(a, "").getPropertyValue(b) : a.currentStyle && (b = b.replace(/\-(\w)/g, function (a, b) {
        return b.toUpperCase()
    }), c = a.currentStyle[b]);
    return c
};
AmCharts.removePx = function (a) {
    if (void 0 != a)return Number(a.substring(0, a.length - 2))
};
AmCharts.getURL = function (a, b) {
    if (a)if ("_self" != b && b)if ("_top" == b && window.top)window.top.location.href = a; else if ("_parent" == b && window.parent)window.parent.location.href = a; else if ("_blank" == b)window.open(a); else {
        var c = document.getElementsByName(b)[0];
        c ? c.src = a : (c = AmCharts.windows[b]) ? c.opener && !c.opener.closed ? c.location.href = a : AmCharts.windows[b] = window.open(a) : AmCharts.windows[b] = window.open(a)
    } else window.location.href = a
};
AmCharts.ifArray = function (a) {
    return a && 0 < a.length ? !0 : !1
};
AmCharts.callMethod = function (a, b) {
    var c;
    for (c = 0; c < b.length; c++) {
        var d = b[c];
        if (d) {
            if (d[a])d[a]();
            var f = d.length;
            if (0 < f) {
                var e;
                for (e = 0; e < f; e++) {
                    var g = d[e];
                    if (g && g[a])g[a]()
                }
            }
        }
    }
};
AmCharts.toNumber = function (a) {
    return "number" == typeof a ? a : Number(String(a).replace(/[^0-9\-.]+/g, ""))
};
AmCharts.toColor = function (a) {
    if ("" !== a && void 0 !== a)if (-1 != a.indexOf(",")) {
        a = a.split(",");
        var b;
        for (b = 0; b < a.length; b++) {
            var c = a[b].substring(a[b].length - 6, a[b].length);
            a[b] = "#" + c
        }
    } else a = a.substring(a.length - 6, a.length), a = "#" + a;
    return a
};
AmCharts.toCoordinate = function (a, b, c) {
    var d;
    void 0 !== a && (a = String(a), c && c < b && (b = c), d = Number(a), -1 != a.indexOf("!") && (d = b - Number(a.substr(1))), -1 != a.indexOf("%") && (d = b * Number(a.substr(0, a.length - 1)) / 100));
    return d
};
AmCharts.fitToBounds = function (a, b, c) {
    a < b && (a = b);
    a > c && (a = c);
    return a
};
AmCharts.isDefined = function (a) {
    return void 0 === a ? !1 : !0
};
AmCharts.stripNumbers = function (a) {
    return a.replace(/[0-9]+/g, "")
};
AmCharts.roundTo = function (a, b) {
    if (0 > b)return a;
    var c = Math.pow(10, b);
    return Math.round(a * c) / c
};
AmCharts.toFixed = function (a, b) {
    var c = String(Math.round(a * Math.pow(10, b)));
    if (0 < b) {
        var d = c.length;
        if (d < b) {
            var f;
            for (f = 0; f < b - d; f++)c = "0" + c
        }
        d = c.substring(0, c.length - b);
        "" === d && (d = 0);
        return d + "." + c.substring(c.length - b, c.length)
    }
    return String(c)
};
AmCharts.formatDuration = function (a, b, c, d, f, e) {
    var g = AmCharts.intervals, h = e.decimalSeparator;
    if (a >= g[b].contains) {
        var k = a - Math.floor(a / g[b].contains) * g[b].contains;
        "ss" == b && (k = AmCharts.formatNumber(k, e), 1 == k.split(h)[0].length && (k = "0" + k));
        ("mm" == b || "hh" == b) && 10 > k && (k = "0" + k);
        c = k + "" + d[b] + "" + c;
        a = Math.floor(a / g[b].contains);
        b = g[b].nextInterval;
        return AmCharts.formatDuration(a, b, c, d, f, e)
    }
    "ss" == b && (a = AmCharts.formatNumber(a, e), 1 == a.split(h)[0].length && (a = "0" + a));
    ("mm" == b || "hh" == b) && 10 > a && (a = "0" + a);
    c = a + "" +
        d[b] + "" + c;
    if (g[f].count > g[b].count)for (a = g[b].count; a < g[f].count; a++)b = g[b].nextInterval, "ss" == b || "mm" == b || "hh" == b ? c = "00" + d[b] + "" + c : "DD" == b && (c = "0" + d[b] + "" + c);
    ":" == c.charAt(c.length - 1) && (c = c.substring(0, c.length - 1));
    return c
};
AmCharts.formatNumber = function (a, b, c, d, f) {
    a = AmCharts.roundTo(a, b.precision);
    isNaN(c) && (c = b.precision);
    var e = b.decimalSeparator;
    b = b.thousandsSeparator;
    var g;
    g = 0 > a ? "-" : "";
    a = Math.abs(a);
    var h = String(a), k = !1;
    -1 != h.indexOf("e") && (k = !0);
    0 <= c && !k && (h = AmCharts.toFixed(a, c));
    var l = "";
    if (k)l = h; else {
        var h = h.split("."), k = String(h[0]), m;
        for (m = k.length; 0 <= m; m -= 3)l = m != k.length ? 0 !== m ? k.substring(m - 3, m) + b + l : k.substring(m - 3, m) + l : k.substring(m - 3, m);
        void 0 !== h[1] && (l = l + e + h[1]);
        void 0 !== c && 0 < c && "0" != l && (l = AmCharts.addZeroes(l,
            e, c))
    }
    l = g + l;
    "" === g && !0 === d && 0 !== a && (l = "+" + l);
    !0 === f && (l += "%");
    return l
};
AmCharts.addZeroes = function (a, b, c) {
    a = a.split(b);
    void 0 === a[1] && 0 < c && (a[1] = "0");
    return a[1].length < c ? (a[1] += "0", AmCharts.addZeroes(a[0] + b + a[1], b, c)) : void 0 !== a[1] ? a[0] + b + a[1] : a[0]
};
AmCharts.scientificToNormal = function (a) {
    var b;
    a = String(a).split("e");
    var c;
    if ("-" == a[1].substr(0, 1)) {
        b = "0.";
        for (c = 0; c < Math.abs(Number(a[1])) - 1; c++)b += "0";
        b += a[0].split(".").join("")
    } else {
        var d = 0;
        b = a[0].split(".");
        b[1] && (d = b[1].length);
        b = a[0].split(".").join("");
        for (c = 0; c < Math.abs(Number(a[1])) - d; c++)b += "0"
    }
    return b
};
AmCharts.toScientific = function (a, b) {
    if (0 === a)return "0";
    var c = Math.floor(Math.log(Math.abs(a)) * Math.LOG10E);
    Math.pow(10, c);
    mantissa = String(mantissa).split(".").join(b);
    return String(mantissa) + "e" + c
};
AmCharts.randomColor = function () {
    return "#" + ("00000" + (16777216 * Math.random() << 0).toString(16)).substr(-6)
};
AmCharts.hitTest = function (a, b, c) {
    var d = !1, f = a.x, e = a.x + a.width, g = a.y, h = a.y + a.height, k = AmCharts.isInRectangle;
    d || (d = k(f, g, b));
    d || (d = k(f, h, b));
    d || (d = k(e, g, b));
    d || (d = k(e, h, b));
    d || !0 === c || (d = AmCharts.hitTest(b, a, !0));
    return d
};
AmCharts.isInRectangle = function (a, b, c) {
    return a >= c.x - 5 && a <= c.x + c.width + 5 && b >= c.y - 5 && b <= c.y + c.height + 5 ? !0 : !1
};
AmCharts.isPercents = function (a) {
    if (-1 != String(a).indexOf("%"))return !0
};
AmCharts.findPosX = function (a) {
    var b = a, c = a.offsetLeft;
    if (a.offsetParent) {
        for (; a = a.offsetParent;)c += a.offsetLeft;
        for (; (b = b.parentNode) && b != document.body;)c -= b.scrollLeft || 0
    }
    return c
};
AmCharts.findPosY = function (a) {
    var b = a, c = a.offsetTop;
    if (a.offsetParent) {
        for (; a = a.offsetParent;)c += a.offsetTop;
        for (; (b = b.parentNode) && b != document.body;)c -= b.scrollTop || 0
    }
    return c
};
AmCharts.findIfFixed = function (a) {
    if (a.offsetParent)for (; a = a.offsetParent;)if ("fixed" == AmCharts.getStyle(a, "position"))return !0;
    return !1
};
AmCharts.findIfAuto = function (a) {
    return a.style && "auto" == AmCharts.getStyle(a, "overflow") ? !0 : a.parentNode ? AmCharts.findIfAuto(a.parentNode) : !1
};
AmCharts.findScrollLeft = function (a, b) {
    a.scrollLeft && (b += a.scrollLeft);
    return a.parentNode ? AmCharts.findScrollLeft(a.parentNode, b) : b
};
AmCharts.findScrollTop = function (a, b) {
    a.scrollTop && (b += a.scrollTop);
    return a.parentNode ? AmCharts.findScrollTop(a.parentNode, b) : b
};
AmCharts.formatValue = function (a, b, c, d, f, e, g, h) {
    if (b) {
        void 0 === f && (f = "");
        var k;
        for (k = 0; k < c.length; k++) {
            var l = c[k], m = b[l];
            void 0 !== m && (m = e ? AmCharts.addPrefix(m, h, g, d) : AmCharts.formatNumber(m, d), a = a.replace(new RegExp("\\[\\[" + f + "" + l + "\\]\\]", "g"), m))
        }
    }
    return a
};
AmCharts.formatDataContextValue = function (a, b) {
    if (a) {
        var c = a.match(/\[\[.*?\]\]/g), d;
        for (d = 0; d < c.length; d++) {
            var f = c[d], f = f.substr(2, f.length - 4);
            void 0 !== b[f] && (a = a.replace(new RegExp("\\[\\[" + f + "\\]\\]", "g"), b[f]))
        }
    }
    return a
};
AmCharts.massReplace = function (a, b) {
    for (var c in b)if (b.hasOwnProperty(c)) {
        var d = b[c];
        void 0 === d && (d = "");
        a = a.replace(c, d)
    }
    return a
};
AmCharts.cleanFromEmpty = function (a) {
    return a.replace(/\[\[[^\]]*\]\]/g, "")
};
AmCharts.addPrefix = function (a, b, c, d, f) {
    var e = AmCharts.formatNumber(a, d), g = "", h, k, l;
    if (0 === a)return "0";
    0 > a && (g = "-");
    a = Math.abs(a);
    if (1 < a)for (h = b.length - 1; -1 < h; h--) {
        if (a >= b[h].number && (k = a / b[h].number, l = Number(d.precision), 1 > l && (l = 1), c = AmCharts.roundTo(k, l), l = AmCharts.formatNumber(c, {
                precision: -1,
                decimalSeparator: d.decimalSeparator,
                thousandsSeparator: d.thousandsSeparator
            }), !f || k == c)) {
            e = g + "" + l + "" + b[h].prefix;
            break
        }
    } else for (h = 0; h < c.length; h++)if (a <= c[h].number) {
        k = a / c[h].number;
        l = Math.abs(Math.round(Math.log(k) *
            Math.LOG10E));
        k = AmCharts.roundTo(k, l);
        e = g + "" + k + "" + c[h].prefix;
        break
    }
    return e
};
AmCharts.remove = function (a) {
    a && a.remove()
};
AmCharts.recommended = function () {
    var a = "js";
    document.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#BasicStructure", "1.1") || swfobject && swfobject.hasFlashPlayerVersion("8") && (a = "flash");
    return a
};
AmCharts.getEffect = function (a) {
    ">" == a && (a = "easeOutSine");
    "<" == a && (a = "easeInSine");
    "elastic" == a && (a = "easeOutElastic");
    return a
};
AmCharts.getObjById = function (a, b) {
    var c, d;
    for (d = 0; d < a.length; d++) {
        var f = a[d];
        f.id == b && (c = f)
    }
    return c
};
AmCharts.applyTheme = function (a, b, c) {
    b || (b = AmCharts.theme);
    b && b[c] && AmCharts.extend(a, b[c])
};
AmCharts.isString = function (a) {
    return "string" == typeof a ? !0 : !1
};
AmCharts.extend = function (a, b, c) {
    for (var d in b)c ? a.hasOwnProperty(d) || (a[d] = b[d]) : a[d] = b[d];
    return a
};
AmCharts.copyProperties = function (a, b) {
    for (var c in a)a.hasOwnProperty(c) && "events" != c && void 0 !== a[c] && "function" != typeof a[c] && "cname" != c && (b[c] = a[c])
};
AmCharts.processObject = function (a, b, c) {
    !1 === a instanceof b && (a = AmCharts.extend(new b(c), a));
    return a
};
AmCharts.fixNewLines = function (a) {
    var b = RegExp("\\n", "g");
    a && (a = a.replace(b, "<br />"));
    return a
};
AmCharts.fixBrakes = function (a) {
    if (AmCharts.isModern) {
        var b = RegExp("<br>", "g");
        a && (a = a.replace(b, "\n"))
    } else a = AmCharts.fixNewLines(a);
    return a
};
AmCharts.deleteObject = function (a, b) {
    if (a) {
        if (void 0 === b || null === b)b = 20;
        if (0 !== b)if ("[object Array]" === Object.prototype.toString.call(a))for (var c = 0; c < a.length; c++)AmCharts.deleteObject(a[c], b - 1), a[c] = null; else if (a && !a.tagName)try {
            for (c in a)a[c] && ("object" == typeof a[c] && AmCharts.deleteObject(a[c], b - 1), "function" != typeof a[c] && (a[c] = null))
        } catch (d) {
        }
    }
};
AmCharts.bounce = function (a, b, c, d, f) {
    return (b /= f) < 1 / 2.75 ? 7.5625 * d * b * b + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
};
AmCharts.easeInSine = function (a, b, c, d, f) {
    return -d * Math.cos(b / f * (Math.PI / 2)) + d + c
};
AmCharts.easeOutSine = function (a, b, c, d, f) {
    return d * Math.sin(b / f * (Math.PI / 2)) + c
};
AmCharts.easeOutElastic = function (a, b, c, d, f) {
    a = 1.70158;
    var e = 0, g = d;
    if (0 === b)return c;
    if (1 == (b /= f))return c + d;
    e || (e = .3 * f);
    g < Math.abs(d) ? (g = d, a = e / 4) : a = e / (2 * Math.PI) * Math.asin(d / g);
    return g * Math.pow(2, -10 * b) * Math.sin(2 * (b * f - a) * Math.PI / e) + d + c
};
AmCharts.AmDraw = AmCharts.Class({
    construct: function (a, b, c, d) {
        AmCharts.SVG_NS = "http://www.w3.org/2000/svg";
        AmCharts.SVG_XLINK = "http://www.w3.org/1999/xlink";
        AmCharts.hasSVG = !!document.createElementNS && !!document.createElementNS(AmCharts.SVG_NS, "svg").createSVGRect;
        1 > b && (b = 10);
        1 > c && (c = 10);
        this.div = a;
        this.width = b;
        this.height = c;
        this.rBin = document.createElement("div");
        if (AmCharts.hasSVG) {
            AmCharts.SVG = !0;
            var f = this.createSvgElement("svg");
            f.style.position = "absolute";
            f.style.width = b + "px";
            f.style.height = c +
                "px";
            b = this.createSvgElement("desc");
            b.appendChild(document.createTextNode("JavaScript chart by amCharts " + d.version));
            f.appendChild(b);
            AmCharts.rtl && (f.setAttribute("direction", "rtl"), f.style.left = "auto", f.style.right = "0px");
            f.setAttribute("version", "1.1");
            a.appendChild(f);
            this.container = f;
            this.R = new AmCharts.SVGRenderer(this)
        } else AmCharts.isIE && AmCharts.VMLRenderer && (AmCharts.VML = !0, AmCharts.vmlStyleSheet || (document.namespaces.add("amvml", "urn:schemas-microsoft-com:vml"), 31 > document.styleSheets.length ?
            (f = document.createStyleSheet(), f.addRule(".amvml", "behavior:url(#default#VML); display:inline-block; antialias:true"), AmCharts.vmlStyleSheet = f) : document.styleSheets[0].addRule(".amvml", "behavior:url(#default#VML); display:inline-block; antialias:true")), this.container = a, this.R = new AmCharts.VMLRenderer(this, d), this.R.disableSelection(a))
    },
    createSvgElement: function (a) {
        return document.createElementNS(AmCharts.SVG_NS, a)
    },
    circle: function (a, b, c, d) {
        var f = new AmCharts.AmDObject("circle", this);
        f.attr({
            r: c,
            cx: a,
            cy: b
        });
        this.addToContainer(f.node, d);
        return f
    },
    ellipse: function (a, b, c, d, f) {
        var e = new AmCharts.AmDObject("ellipse", this);
        e.attr({
            rx: c,
            ry: d,
            cx: a,
            cy: b
        });
        this.addToContainer(e.node, f);
        return e
    },
    setSize: function (a, b) {
        0 < a && 0 < b && (this.container.style.width = a + "px", this.container.style.height = b + "px")
    },
    rect: function (a, b, c, d, f, e, g) {
        var h = new AmCharts.AmDObject("rect", this);
        AmCharts.VML && (f = Math.round(100 * f / Math.min(c, d)), c += 2 * e, d += 2 * e, h.bw = e, h.node.style.marginLeft = -e, h.node.style.marginTop = -e);
        1 > c && (c =
            1);
        1 > d && (d = 1);
        h.attr({
            x: a,
            y: b,
            width: c,
            height: d,
            rx: f,
            ry: f,
            "stroke-width": e
        });
        this.addToContainer(h.node, g);
        return h
    },
    image: function (a, b, c, d, f, e) {
        var g = new AmCharts.AmDObject("image", this);
        g.attr({
            x: b,
            y: c,
            width: d,
            height: f
        });
        this.R.path(g, a);
        this.addToContainer(g.node, e);
        return g
    },
    addToContainer: function (a, b) {
        b || (b = this.container);
        b.appendChild(a)
    },
    text: function (a, b, c) {
        return this.R.text(a, b, c)
    },
    path: function (a, b, c, d) {
        var f = new AmCharts.AmDObject("path", this);
        d || (d = "100,100");
        f.attr({cs: d});
        c ? f.attr({dd: a}) :
            f.attr({d: a});
        this.addToContainer(f.node, b);
        return f
    },
    set: function (a) {
        return this.R.set(a)
    },
    remove: function (a) {
        if (a) {
            var b = this.rBin;
            b.appendChild(a);
            b.innerHTML = ""
        }
    },
    renderFix: function () {
        var a = this.container, b = a.style, c;
        try {
            c = a.getScreenCTM() || a.createSVGMatrix()
        } catch (d) {
            c = a.createSVGMatrix()
        }
        a = 1 - c.e % 1;
        c = 1 - c.f % 1;
        .5 < a && (a -= 1);
        .5 < c && (c -= 1);
        a && (b.left = a + "px");
        c && (b.top = c + "px")
    },
    update: function () {
        this.R.update()
    }
});
AmCharts.AmDObject = AmCharts.Class({
    construct: function (a, b) {
        this.D = b;
        this.R = b.R;
        this.node = this.R.create(this, a);
        this.y = this.x = 0;
        this.scale = 1
    },
    attr: function (a) {
        this.R.attr(this, a);
        return this
    },
    getAttr: function (a) {
        return this.node.getAttribute(a)
    },
    setAttr: function (a, b) {
        this.R.setAttr(this, a, b);
        return this
    },
    clipRect: function (a, b, c, d) {
        this.R.clipRect(this, a, b, c, d)
    },
    translate: function (a, b, c, d) {
        d || (a = Math.round(a), b = Math.round(b));
        this.R.move(this, a, b, c);
        this.x = a;
        this.y = b;
        this.scale = c;
        this.angle && this.rotate(this.angle)
    },
    rotate: function (a, b) {
        this.R.rotate(this, a, b);
        this.angle = a
    },
    animate: function (a, b, c) {
        for (var d in a)if (a.hasOwnProperty(d)) {
            var f = d, e = a[d];
            c = AmCharts.getEffect(c);
            this.R.animate(this, f, e, b, c)
        }
    },
    push: function (a) {
        if (a) {
            var b = this.node;
            b.appendChild(a.node);
            var c = a.clipPath;
            c && b.appendChild(c);
            (a = a.grad) && b.appendChild(a)
        }
    },
    text: function (a) {
        this.R.setText(this, a)
    },
    remove: function () {
        this.R.remove(this)
    },
    clear: function () {
        var a = this.node;
        if (a.hasChildNodes())for (; 1 <= a.childNodes.length;)a.removeChild(a.firstChild)
    },
    hide: function () {
        this.setAttr("visibility", "hidden")
    },
    show: function () {
        this.setAttr("visibility", "visible")
    },
    getBBox: function () {
        return this.R.getBBox(this)
    },
    toFront: function () {
        var a = this.node;
        if (a) {
            this.prevNextNode = a.nextSibling;
            var b = a.parentNode;
            b && b.appendChild(a)
        }
    },
    toPrevious: function () {
        var a = this.node;
        a && this.prevNextNode && (a = a.parentNode) && a.insertBefore(this.prevNextNode, null)
    },
    toBack: function () {
        var a = this.node;
        if (a) {
            this.prevNextNode = a.nextSibling;
            var b = a.parentNode;
            if (b) {
                var c = b.firstChild;
                c && b.insertBefore(a, c)
            }
        }
    },
    mouseover: function (a) {
        this.R.addListener(this, "mouseover", a);
        return this
    },
    mouseout: function (a) {
        this.R.addListener(this, "mouseout", a);
        return this
    },
    click: function (a) {
        this.R.addListener(this, "click", a);
        return this
    },
    dblclick: function (a) {
        this.R.addListener(this, "dblclick", a);
        return this
    },
    mousedown: function (a) {
        this.R.addListener(this, "mousedown", a);
        return this
    },
    mouseup: function (a) {
        this.R.addListener(this, "mouseup", a);
        return this
    },
    touchstart: function (a) {
        this.R.addListener(this,
            "touchstart", a);
        return this
    },
    touchend: function (a) {
        this.R.addListener(this, "touchend", a);
        return this
    },
    contextmenu: function (a) {
        this.node.addEventListener ? this.node.addEventListener("contextmenu", a, !0) : this.R.addListener(this, "contextmenu", a);
        return this
    },
    stop: function (a) {
        (a = this.animationX) && AmCharts.removeFromArray(this.R.animations, a);
        (a = this.animationY) && AmCharts.removeFromArray(this.R.animations, a)
    },
    length: function () {
        return this.node.childNodes.length
    },
    gradient: function (a, b, c) {
        this.R.gradient(this,
            a, b, c)
    },
    pattern: function (a, b) {
        a && this.R.pattern(this, a, b)
    }
});
AmCharts.SVGRenderer = AmCharts.Class({
    construct: function (a) {
        this.D = a;
        this.animations = []
    },
    create: function (a, b) {
        return document.createElementNS(AmCharts.SVG_NS, b)
    },
    attr: function (a, b) {
        for (var c in b)b.hasOwnProperty(c) && this.setAttr(a, c, b[c])
    },
    setAttr: function (a, b, c) {
        void 0 !== c && a.node.setAttribute(b, c)
    },
    animate: function (a, b, c, d, f) {
        var e = a.node;
        a["an_" + b] && AmCharts.removeFromArray(this.animations, a["an_" + b]);
        "translate" == b ? (e = (e = e.getAttribute("transform")) ? String(e).substring(10, e.length - 1) : "0,0", e =
            e.split(", ").join(" "), e = e.split(" ").join(","), 0 === e && (e = "0,0")) : e = Number(e.getAttribute(b));
        c = {
            obj: a,
            frame: 0,
            attribute: b,
            from: e,
            to: c,
            time: d,
            effect: f
        };
        this.animations.push(c);
        a["an_" + b] = c
    },
    update: function () {
        var a, b = this.animations;
        for (a = b.length - 1; 0 <= a; a--) {
            var c = b[a], d = 1E3 * c.time / AmCharts.updateRate, f = c.frame + 1, e = c.obj, g = c.attribute, h, k, l;
            f <= d ? (c.frame++, "translate" == g ? (h = c.from.split(","), g = Number(h[0]), h = Number(h[1]), isNaN(h) && (h = 0), k = c.to.split(","), l = Number(k[0]), k = Number(k[1]), l = 0 === l - g ? l :
                Math.round(AmCharts[c.effect](0, f, g, l - g, d)), c = 0 === k - h ? k : Math.round(AmCharts[c.effect](0, f, h, k - h, d)), g = "transform", c = "translate(" + l + "," + c + ")") : (k = Number(c.from), h = Number(c.to), l = h - k, c = AmCharts[c.effect](0, f, k, l, d), isNaN(c) && (c = h), 0 === l && this.animations.splice(a, 1)), this.setAttr(e, g, c)) : ("translate" == g ? (k = c.to.split(","), l = Number(k[0]), k = Number(k[1]), e.translate(l, k)) : (h = Number(c.to), this.setAttr(e, g, h)), this.animations.splice(a, 1))
        }
    },
    getBBox: function (a) {
        if (a = a.node)try {
            return a.getBBox()
        } catch (b) {
        }
        return {
            width: 0,
            height: 0,
            x: 0,
            y: 0
        }
    },
    path: function (a, b) {
        a.node.setAttributeNS(AmCharts.SVG_XLINK, "xlink:href", b)
    },
    clipRect: function (a, b, c, d, f) {
        var e = a.node, g = a.clipPath;
        g && this.D.remove(g);
        var h = e.parentNode;
        h && (e = document.createElementNS(AmCharts.SVG_NS, "clipPath"), g = AmCharts.getUniqueId(), e.setAttribute("id", g), this.D.rect(b, c, d, f, 0, 0, e), h.appendChild(e), b = "#", AmCharts.baseHref && !AmCharts.isIE && (b = window.location.href + b), this.setAttr(a, "clip-path", "url(" + b + g + ")"), this.clipPathC++, a.clipPath = e)
    },
    text: function (a, b,
                    c) {
        var d = new AmCharts.AmDObject("text", this.D);
        a = String(a).split("\n");
        var f = b["font-size"], e;
        for (e = 0; e < a.length; e++) {
            var g = this.create(null, "tspan");
            g.appendChild(document.createTextNode(a[e]));
            g.setAttribute("y", (f + 2) * e + Math.round(f / 2));
            g.setAttribute("x", 0);
            d.node.appendChild(g)
        }
        d.node.setAttribute("y", Math.round(f / 2));
        this.attr(d, b);
        this.D.addToContainer(d.node, c);
        return d
    },
    setText: function (a, b) {
        var c = a.node;
        c && (c.removeChild(c.firstChild), c.appendChild(document.createTextNode(b)))
    },
    move: function (a,
                    b, c, d) {
        b = "translate(" + b + "," + c + ")";
        d && (b = b + " scale(" + d + ")");
        this.setAttr(a, "transform", b)
    },
    rotate: function (a, b) {
        var c = a.node.getAttribute("transform"), d = "rotate(" + b + ")";
        c && (d = c + " " + d);
        this.setAttr(a, "transform", d)
    },
    set: function (a) {
        var b = new AmCharts.AmDObject("g", this.D);
        this.D.container.appendChild(b.node);
        if (a) {
            var c;
            for (c = 0; c < a.length; c++)b.push(a[c])
        }
        return b
    },
    addListener: function (a, b, c) {
        a.node["on" + b] = c
    },
    gradient: function (a, b, c, d) {
        var f = a.node, e = a.grad;
        e && this.D.remove(e);
        b = document.createElementNS(AmCharts.SVG_NS,
            b);
        e = AmCharts.getUniqueId();
        b.setAttribute("id", e);
        if (!isNaN(d)) {
            var g = 0, h = 0, k = 0, l = 0;
            90 == d ? k = 100 : 270 == d ? l = 100 : 180 == d ? g = 100 : 0 === d && (h = 100);
            b.setAttribute("x1", g + "%");
            b.setAttribute("x2", h + "%");
            b.setAttribute("y1", k + "%");
            b.setAttribute("y2", l + "%")
        }
        for (d = 0; d < c.length; d++)g = document.createElementNS(AmCharts.SVG_NS, "stop"), h = 100 * d / (c.length - 1), 0 === d && (h = 0), g.setAttribute("offset", h + "%"), g.setAttribute("stop-color", c[d]), b.appendChild(g);
        f.parentNode.appendChild(b);
        c = "#";
        AmCharts.baseHref && !AmCharts.isIE &&
        (c = window.location.href + c);
        f.setAttribute("fill", "url(" + c + e + ")");
        a.grad = b
    },
    pattern: function (a, b, c) {
        var d = a.node;
        isNaN(c) && (c = 1);
        var f = a.patternNode;
        f && this.D.remove(f);
        var f = document.createElementNS(AmCharts.SVG_NS, "pattern"), e = AmCharts.getUniqueId(), g = b;
        b.url && (g = b.url);
        var h = Number(b.width);
        isNaN(h) && (h = 4);
        var k = Number(b.height);
        isNaN(k) && (k = 4);
        h /= c;
        k /= c;
        c = b.x;
        isNaN(c) && (c = 0);
        var l = -Math.random() * Number(b.randomX);
        isNaN(l) || (c = l);
        l = b.y;
        isNaN(l) && (l = 0);
        var m = -Math.random() * Number(b.randomY);
        isNaN(m) ||
        (l = m);
        f.setAttribute("id", e);
        f.setAttribute("width", h);
        f.setAttribute("height", k);
        f.setAttribute("patternUnits", "userSpaceOnUse");
        f.setAttribute("xlink:href", g);
        b.color && (m = document.createElementNS(AmCharts.SVG_NS, "rect"), m.setAttributeNS(null, "height", h), m.setAttributeNS(null, "width", k), m.setAttributeNS(null, "fill", b.color), f.appendChild(m));
        this.D.image(g, 0, 0, h, k, f).translate(c, l);
        g = "#";
        AmCharts.baseHref && !AmCharts.isIE && (g = window.location.href + g);
        d.setAttribute("fill", "url(" + g + e + ")");
        a.patternNode =
            f;
        d.parentNode.appendChild(f)
    },
    remove: function (a) {
        a.clipPath && this.D.remove(a.clipPath);
        a.grad && this.D.remove(a.grad);
        a.patternNode && this.D.remove(a.patternNode);
        this.D.remove(a.node)
    }
});
AmCharts.AmChart = AmCharts.Class({
    construct: function (a) {
        this.theme = a;
        this.version = "3.11.1";
        AmCharts.addChart(this);
        this.createEvents("dataUpdated", "init", "rendered", "drawn", "failed");
        this.height = this.width = "100%";
        this.dataChanged = !0;
        this.chartCreated = !1;
        this.previousWidth = this.previousHeight = 0;
        this.backgroundColor = "#FFFFFF";
        this.borderAlpha = this.backgroundAlpha = 0;
        this.color = this.borderColor = "#000000";
        this.fontFamily = "Verdana";
        this.fontSize = 11;
        this.usePrefixes = !1;
        this.precision = -1;
        this.percentPrecision =
            2;
        this.decimalSeparator = ".";
        this.thousandsSeparator = ",";
        this.labels = [];
        this.allLabels = [];
        this.titles = [];
        this.marginRight = this.marginLeft = this.autoMarginOffset = 0;
        this.timeOuts = [];
        this.creditsPosition = "top-left";
        var b = document.createElement("div"), c = b.style;
        c.overflow = "hidden";
        c.position = "relative";
        c.textAlign = "left";
        this.chartDiv = b;
        b = document.createElement("div");
        c = b.style;
        c.overflow = "hidden";
        c.position = "relative";
        c.textAlign = "left";
        this.legendDiv = b;
        this.titleHeight = 0;
        this.hideBalloonTime = 150;
        this.handDrawScatter =
            2;
        this.handDrawThickness = 1;
        this.prefixesOfBigNumbers = [{
            number: 1E3,
            prefix: "k"
        }, {
            number: 1E6,
            prefix: "M"
        }, {
            number: 1E9,
            prefix: "G"
        }, {
            number: 1E12,
            prefix: "T"
        }, {
            number: 1E15,
            prefix: "P"
        }, {
            number: 1E18,
            prefix: "E"
        }, {
            number: 1E21,
            prefix: "Z"
        }, {
            number: 1E24,
            prefix: "Y"
        }];
        this.prefixesOfSmallNumbers = [{
            number: 1E-24,
            prefix: "y"
        }, {
            number: 1E-21,
            prefix: "z"
        }, {
            number: 1E-18,
            prefix: "a"
        }, {
            number: 1E-15,
            prefix: "f"
        }, {
            number: 1E-12,
            prefix: "p"
        }, {
            number: 1E-9,
            prefix: "n"
        }, {
            number: 1E-6,
            prefix: "\u03bc"
        }, {
            number: .001,
            prefix: "m"
        }];
        this.panEventsEnabled = !0;
        AmCharts.bezierX = 3;
        AmCharts.bezierY = 6;
        this.product = "amcharts";
        this.animations = [];
        this.balloon = new AmCharts.AmBalloon(this.theme);
        this.balloon.chart = this;
        AmCharts.applyTheme(this, a, "AmChart")
    },
    drawChart: function () {
        this.drawBackground();
        this.redrawLabels();
        this.drawTitles();
        this.brr()
    },
    drawBackground: function () {
        AmCharts.remove(this.background);
        var a = this.container, b = this.backgroundColor, c = this.backgroundAlpha, d = this.set;
        AmCharts.isModern || 0 !== c || (c = .001);
        var f = this.updateWidth();
        this.realWidth = f;
        var e = this.updateHeight();
        this.realHeight = e;
        this.background = b = AmCharts.polygon(a, [0, f - 1, f - 1, 0], [0, 0, e - 1, e - 1], b, c, 1, this.borderColor, this.borderAlpha);
        d.push(b);
        if (b = this.backgroundImage)this.path && (b = this.path + b), this.bgImg = a = a.image(b, 0, 0, f, e), d.push(a)
    },
    drawTitles: function () {
        var a = this.titles;
        if (AmCharts.ifArray(a)) {
            var b = 20, c;
            for (c = 0; c < a.length; c++) {
                var d = a[c], f = d.color;
                void 0 === f && (f = this.color);
                var e = d.size;
                isNaN(e) && (e = this.fontSize + 2);
                isNaN(d.alpha);
                var g = this.marginLeft, f = AmCharts.text(this.container,
                    d.text, f, this.fontFamily, e);
                f.translate(g + (this.realWidth - this.marginRight - g) / 2, b);
                f.node.style.pointerEvents = "none";
                g = !0;
                void 0 !== d.bold && (g = d.bold);
                g && f.attr({"font-weight": "bold"});
                f.attr({opacity: d.alpha});
                b += e + 6;
                this.freeLabelsSet.push(f)
            }
        }
    },
    write: function (a) {
        if (a = "object" != typeof a ? document.getElementById(a) : a) {
            a.innerHTML = "";
            this.div = a;
            a.style.overflow = "hidden";
            a.style.textAlign = "left";
            var b = this.chartDiv, c = this.legendDiv, d = this.legend, f = c.style, e = b.style;
            this.measure();
            var g, h = document.createElement("div");
            g = h.style;
            g.position = "relative";
            this.containerDiv = h;
            a.appendChild(h);
            var k = this.exportConfig;
            k && AmCharts.AmExport && !this.AmExport && (this.AmExport = new AmCharts.AmExport(this, k));
            this.amExport && AmCharts.AmExport && (this.AmExport = AmCharts.extend(this.amExport, new AmCharts.AmExport(this), !0));
            this.AmExport && this.AmExport.init && this.AmExport.init();
            if (d)switch (d = this.addLegend(d, d.divId), d.position) {
                case "bottom":
                    h.appendChild(b);
                    h.appendChild(c);
                    break;
                case "top":
                    h.appendChild(c);
                    h.appendChild(b);
                    break;
                case "absolute":
                    g.width = a.style.width;
                    g.height = a.style.height;
                    f.position = "absolute";
                    e.position = "absolute";
                    void 0 !== d.left && (f.left = d.left + "px");
                    void 0 !== d.right && (f.right = d.right + "px");
                    void 0 !== d.top && (f.top = d.top + "px");
                    void 0 !== d.bottom && (f.bottom = d.bottom + "px");
                    d.marginLeft = 0;
                    d.marginRight = 0;
                    h.appendChild(b);
                    h.appendChild(c);
                    break;
                case "right":
                    g.width = a.style.width;
                    g.height = a.style.height;
                    f.position = "relative";
                    e.position = "absolute";
                    h.appendChild(b);
                    h.appendChild(c);
                    break;
                case "left":
                    g.width = a.style.width;
                    g.height = a.style.height;
                    f.position = "absolute";
                    e.position = "relative";
                    h.appendChild(b);
                    h.appendChild(c);
                    break;
                case "outside":
                    h.appendChild(b)
            } else h.appendChild(b);
            this.listenersAdded || (this.addListeners(), this.listenersAdded = !0);
            this.initChart()
        }
    },
    createLabelsSet: function () {
        AmCharts.remove(this.labelsSet);
        this.labelsSet = this.container.set();
        this.freeLabelsSet.push(this.labelsSet)
    },
    initChart: function () {
        AmCharts.callInitHandler(this);
        AmCharts.applyLang(this.language, this);
        var a = this.numberFormatter;
        a && (isNaN(a.precision) || (this.precision = a.precision), void 0 !== a.thousandsSeparator && (this.thousandsSeparator = a.thousandsSeparator), void 0 !== a.decimalSeparator && (this.decimalSeparator = a.decimalSeparator));
        (a = this.percentFormatter) && !isNaN(a.precision) && (this.percentPrecision = a.precision);
        this.nf = {
            precision: this.precision,
            thousandsSeparator: this.thousandsSeparator,
            decimalSeparator: this.decimalSeparator
        };
        this.pf = {
            precision: this.percentPrecision,
            thousandsSeparator: this.thousandsSeparator,
            decimalSeparator: this.decimalSeparator
        };
        this.divIsFixed = AmCharts.findIfFixed(this.chartDiv);
        this.previousHeight = this.divRealHeight;
        this.previousWidth = this.divRealWidth;
        this.destroy();
        this.startInterval();
        a = 0;
        document.attachEvent && !window.opera && (a = 1);
        this.dmouseX = this.dmouseY = 0;
        var b = document.getElementsByTagName("html")[0];
        b && window.getComputedStyle && (b = window.getComputedStyle(b, null)) && (this.dmouseY = AmCharts.removePx(b.getPropertyValue("margin-top")), this.dmouseX = AmCharts.removePx(b.getPropertyValue("margin-left")));
        this.mouseMode = a;
        (a = this.container) ? (a.container.innerHTML = "", this.chartDiv.appendChild(a.container), a.setSize(this.realWidth, this.realHeight)) : a = new AmCharts.AmDraw(this.chartDiv, this.realWidth, this.realHeight, this);
        AmCharts.VML || AmCharts.SVG ? (a.handDrawn = this.handDrawn, a.handDrawScatter = this.handDrawScatter, a.handDrawThickness = this.handDrawThickness, this.container = a, this.set && this.set.remove(), this.set = a.set(), this.gridSet && this.gridSet.remove(), this.gridSet = a.set(), this.cursorLineSet && this.cursorLineSet.remove(),
            this.cursorLineSet = a.set(), this.graphsBehindSet && this.graphsBehindSet.remove(), this.graphsBehindSet = a.set(), this.bulletBehindSet && this.bulletBehindSet.remove(), this.bulletBehindSet = a.set(), this.columnSet && this.columnSet.remove(), this.columnSet = a.set(), this.graphsSet && this.graphsSet.remove(), this.graphsSet = a.set(), this.trendLinesSet && this.trendLinesSet.remove(), this.trendLinesSet = a.set(), this.axesLabelsSet && this.axesLabelsSet.remove(), this.axesLabelsSet = a.set(), this.axesSet && this.axesSet.remove(),
            this.axesSet = a.set(), this.cursorSet && this.cursorSet.remove(), this.cursorSet = a.set(), this.scrollbarsSet && this.scrollbarsSet.remove(), this.scrollbarsSet = a.set(), this.bulletSet && this.bulletSet.remove(), this.bulletSet = a.set(), this.freeLabelsSet && this.freeLabelsSet.remove(), this.freeLabelsSet = a.set(), this.balloonsSet && this.balloonsSet.remove(), this.balloonsSet = a.set(), this.zoomButtonSet && this.zoomButtonSet.remove(), this.zoomButtonSet = a.set(), this.linkSet && this.linkSet.remove(), this.linkSet = a.set(), this.renderFix()) :
            this.fire("failed", {
                type: "failed",
                chart: this
            })
    },
    measure: function () {
        var a = this.div;
        if (a) {
            var b = this.chartDiv, c = a.offsetWidth, d = a.offsetHeight, f = this.container;
            a.clientHeight && (c = a.clientWidth, d = a.clientHeight);
            var e = AmCharts.removePx(AmCharts.getStyle(a, "padding-left")), g = AmCharts.removePx(AmCharts.getStyle(a, "padding-right")), h = AmCharts.removePx(AmCharts.getStyle(a, "padding-top")), k = AmCharts.removePx(AmCharts.getStyle(a, "padding-bottom"));
            isNaN(e) || (c -= e);
            isNaN(g) || (c -= g);
            isNaN(h) || (d -= h);
            isNaN(k) ||
            (d -= k);
            e = a.style;
            a = e.width;
            e = e.height;
            -1 != a.indexOf("px") && (c = AmCharts.removePx(a));
            -1 != e.indexOf("px") && (d = AmCharts.removePx(e));
            a = AmCharts.toCoordinate(this.width, c);
            e = AmCharts.toCoordinate(this.height, d);
            this.balloon = AmCharts.processObject(this.balloon, AmCharts.AmBalloon, this.theme);
            this.balloon.chart = this;
            (a != this.previousWidth || e != this.previousHeight) && 0 < a && 0 < e && (b.style.width = a + "px", b.style.height = e + "px", f && f.setSize(a, e));
            this.balloon.setBounds(2, 2, a - 2, e);
            this.realWidth = a;
            this.realHeight = e;
            this.divRealWidth = c;
            this.divRealHeight = d
        }
    },
    destroy: function () {
        this.chartDiv.innerHTML = "";
        this.clearTimeOuts();
        this.interval && clearInterval(this.interval);
        this.interval = NaN
    },
    clearTimeOuts: function () {
        var a = this.timeOuts;
        if (a) {
            var b;
            for (b = 0; b < a.length; b++)clearTimeout(a[b])
        }
        this.timeOuts = []
    },
    clear: function (a) {
        AmCharts.callMethod("clear", [this.chartScrollbar, this.scrollbarV, this.scrollbarH, this.chartCursor]);
        this.chartCursor = this.scrollbarH = this.scrollbarV = this.chartScrollbar = null;
        this.clearTimeOuts();
        this.interval && clearInterval(this.interval);
        this.container && (this.container.remove(this.chartDiv), this.container.remove(this.legendDiv));
        a || AmCharts.removeChart(this)
    },
    setMouseCursor: function (a) {
        "auto" == a && AmCharts.isNN && (a = "default");
        this.chartDiv.style.cursor = a;
        this.legendDiv.style.cursor = a
    },
    redrawLabels: function () {
        this.labels = [];
        var a = this.allLabels;
        this.createLabelsSet();
        var b;
        for (b = 0; b < a.length; b++)this.drawLabel(a[b])
    },
    drawLabel: function (a) {
        if (this.container) {
            var b = a.y, c = a.text, d = a.align, f =
                a.size, e = a.color, g = a.rotation, h = a.alpha, k = a.bold, l = AmCharts.toCoordinate(a.x, this.realWidth), b = AmCharts.toCoordinate(b, this.realHeight);
            l || (l = 0);
            b || (b = 0);
            void 0 === e && (e = this.color);
            isNaN(f) && (f = this.fontSize);
            d || (d = "start");
            "left" == d && (d = "start");
            "right" == d && (d = "end");
            "center" == d && (d = "middle", g ? b = this.realHeight - b + b / 2 : l = this.realWidth / 2 - l);
            void 0 === h && (h = 1);
            void 0 === g && (g = 0);
            b += f / 2;
            c = AmCharts.text(this.container, c, e, this.fontFamily, f, d, k, h);
            c.translate(l, b);
            0 !== g && c.rotate(g);
            a.url ? (c.setAttr("cursor",
                "pointer"), c.click(function () {
                AmCharts.getURL(a.url)
            })) : c.node.style.pointerEvents = "none";
            this.labelsSet.push(c);
            this.labels.push(c)
        }
    },
    addLabel: function (a, b, c, d, f, e, g, h, k, l) {
        a = {
            x: a,
            y: b,
            text: c,
            align: d,
            size: f,
            color: e,
            alpha: h,
            rotation: g,
            bold: k,
            url: l
        };
        this.container && this.drawLabel(a);
        this.allLabels.push(a)
    },
    clearLabels: function () {
        var a = this.labels, b;
        for (b = a.length - 1; 0 <= b; b--)a[b].remove();
        this.labels = [];
        this.allLabels = []
    },
    updateHeight: function () {
        var a = this.divRealHeight, b = this.legend;
        if (b) {
            var c = this.legendDiv.offsetHeight,
                b = b.position;
            if ("top" == b || "bottom" == b) {
                a -= c;
                if (0 > a || isNaN(a))a = 0;
                this.chartDiv.style.height = a + "px"
            }
        }
        return a
    },
    updateWidth: function () {
        var a = this.divRealWidth, b = this.divRealHeight, c = this.legend;
        if (c) {
            var d = this.legendDiv, f = d.offsetWidth;
            isNaN(c.width) || (f = c.width);
            var e = d.offsetHeight, d = d.style, g = this.chartDiv.style, c = c.position;
            if ("right" == c || "left" == c) {
                a -= f;
                if (0 > a || isNaN(a))a = 0;
                g.width = a + "px";
                "left" == c ? g.left = f + "px" : d.left = a + "px";
                b > e && (d.top = (b - e) / 2 + "px")
            }
        }
        return a
    },
    getTitleHeight: function () {
        var a =
            0, b = this.titles;
        if (0 < b.length) {
            var a = 15, c;
            for (c = 0; c < b.length; c++) {
                var d = b[c].size;
                isNaN(d) && (d = this.fontSize + 2);
                a += d + 6
            }
        }
        return a
    },
    addTitle: function (a, b, c, d, f) {
        isNaN(b) && (b = this.fontSize + 2);
        a = {
            text: a,
            size: b,
            color: c,
            alpha: d,
            bold: f
        };
        this.titles.push(a);
        return a
    },
    addMouseWheel: function () {
        var a = this;
        window.addEventListener && !a.wheelAdded && (window.addEventListener("DOMMouseScroll", function (b) {
            a.handleWheel.call(a, b)
        }, !1), document.addEventListener("mousewheel", function (b) {
            a.handleWheel.call(a, b)
        }, !1), a.wheelAdded = !0)
    },
    handleWheel: function (a) {
        if (this.mouseIsOver) {
            var b = 0;
            a || (a = window.event);
            a.wheelDelta ? b = a.wheelDelta / 120 : a.detail && (b = -a.detail / 3);
            b && this.handleWheelReal(b, a.shiftKey);
            a.preventDefault && a.preventDefault()
        }
    },
    handleWheelReal: function (a) {
    },
    addListeners: function () {
        var a = this, b = a.chartDiv;
        document.addEventListener ? (a.panEventsEnabled && (b.style.msTouchAction = "none", "ontouchstart"in document.documentElement && (b.addEventListener("touchstart", function (b) {
            a.handleTouchMove.call(a, b);
            a.handleTouchStart.call(a,
                b)
        }, !0), b.addEventListener("touchmove", function (b) {
            a.handleTouchMove.call(a, b)
        }, !0), b.addEventListener("touchend", function (b) {
            a.handleTouchEnd.call(a, b)
        }, !0))), b.addEventListener("mousedown", function (b) {
            a.mouseIsOver = !0;
            a.handleMouseMove.call(a, b);
            a.handleMouseDown.call(a, b)
        }, !0), b.addEventListener("mouseover", function (b) {
            a.handleMouseOver.call(a, b)
        }, !0), b.addEventListener("mouseout", function (b) {
            a.handleMouseOut.call(a, b)
        }, !0)) : (b.attachEvent("onmousedown", function (b) {
            a.handleMouseDown.call(a, b)
        }),
            b.attachEvent("onmouseover", function (b) {
                a.handleMouseOver.call(a, b)
            }), b.attachEvent("onmouseout", function (b) {
            a.handleMouseOut.call(a, b)
        }))
    },
    dispDUpd: function () {
        var a;
        this.dispatchDataUpdated && (this.dispatchDataUpdated = !1, a = "dataUpdated", this.fire(a, {
            type: a,
            chart: this
        }));
        this.chartCreated || (a = "init", this.fire(a, {
            type: a,
            chart: this
        }));
        this.chartRendered || (a = "rendered", this.fire(a, {
            type: a,
            chart: this
        }), this.chartRendered = !0);
        a = "drawn";
        this.fire(a, {
            type: a,
            chart: this
        })
    },
    validateSize: function () {
        var a = this;
        a.measure();
        var b = a.legend;
        if ((a.realWidth != a.previousWidth || a.realHeight != a.previousHeight) && 0 < a.realWidth && 0 < a.realHeight) {
            a.sizeChanged = !0;
            if (b) {
                clearTimeout(a.legendInitTO);
                var c = setTimeout(function () {
                    b.invalidateSize()
                }, 100);
                a.timeOuts.push(c);
                a.legendInitTO = c
            }
            a.marginsUpdated = "xy" != a.type ? !1 : !0;
            clearTimeout(a.initTO);
            c = setTimeout(function () {
                a.initChart()
            }, 150);
            a.timeOuts.push(c);
            a.initTO = c
        }
        a.renderFix();
        b && b.renderFix()
    },
    invalidateSize: function () {
        this.previousHeight = this.previousWidth = NaN;
        this.invalidateSizeReal()
    },
    invalidateSizeReal: function () {
        var a = this;
        a.marginsUpdated = !1;
        clearTimeout(a.validateTO);
        var b = setTimeout(function () {
            a.validateSize()
        }, 5);
        a.timeOuts.push(b);
        a.validateTO = b
    },
    validateData: function (a) {
        this.chartCreated && (this.dataChanged = !0, this.marginsUpdated = "xy" != this.type ? !1 : !0, this.initChart(a))
    },
    validateNow: function () {
        this.chartRendered = !1;
        this.write(this.div)
    },
    showItem: function (a) {
        a.hidden = !1;
        this.initChart()
    },
    hideItem: function (a) {
        a.hidden = !0;
        this.initChart()
    },
    hideBalloon: function () {
        var a = this;
        clearInterval(a.hoverInt);
        clearTimeout(a.balloonTO);
        a.hoverInt = setTimeout(function () {
            a.hideBalloonReal.call(a)
        }, a.hideBalloonTime)
    },
    cleanChart: function () {
    },
    hideBalloonReal: function () {
        var a = this.balloon;
        a && a.hide()
    },
    showBalloon: function (a, b, c, d, f) {
        var e = this;
        clearTimeout(e.balloonTO);
        clearInterval(e.hoverInt);
        e.balloonTO = setTimeout(function () {
            e.showBalloonReal.call(e, a, b, c, d, f)
        }, 1)
    },
    showBalloonReal: function (a, b, c, d, f) {
        this.handleMouseMove();
        var e = this.balloon;
        e.enabled && (e.followCursor(!1), e.changeColor(b),
            !c || e.fixedPosition ? (e.setPosition(d, f), e.followCursor(!1)) : e.followCursor(!0), a && e.showBalloon(a))
    },
    handleTouchMove: function (a) {
        this.hideBalloon();
        var b = this.chartDiv;
        a.touches && (a = a.touches.item(0), this.mouseX = a.pageX - AmCharts.findPosX(b), this.mouseY = a.pageY - AmCharts.findPosY(b))
    },
    handleMouseOver: function (a) {
        AmCharts.resetMouseOver();
        this.mouseIsOver = !0
    },
    handleMouseOut: function (a) {
        AmCharts.resetMouseOver();
        this.mouseIsOver = !1
    },
    handleMouseMove: function (a) {
        if (this.mouseIsOver) {
            var b = this.chartDiv;
            a || (a = window.event);
            var c, d;
            if (a) {
                this.posX = AmCharts.findPosX(b);
                this.posY = AmCharts.findPosY(b);
                switch (this.mouseMode) {
                    case 1:
                        c = a.clientX - this.posX;
                        d = a.clientY - this.posY;
                        if (!this.divIsFixed) {
                            var b = document.body, f, e;
                            b && (f = b.scrollLeft, y1 = b.scrollTop);
                            if (b = document.documentElement)e = b.scrollLeft, y2 = b.scrollTop;
                            f = Math.max(f, e);
                            e = Math.max(y1, y2);
                            c += f;
                            d += e
                        }
                        break;
                    case 0:
                        this.divIsFixed ? (c = a.clientX - this.posX, d = a.clientY - this.posY) : (c = a.pageX - this.posX, d = a.pageY - this.posY)
                }
                a.touches && (a = a.touches.item(0),
                    c = a.pageX - this.posX, d = a.pageY - this.posY);
                this.mouseX = c - this.dmouseX;
                this.mouseY = d - this.dmouseY
            }
        }
    },
    handleTouchStart: function (a) {
        this.handleMouseDown(a)
    },
    handleTouchEnd: function (a) {
        AmCharts.resetMouseOver();
        this.handleReleaseOutside(a)
    },
    handleReleaseOutside: function (a) {
    },
    handleMouseDown: function (a) {
        AmCharts.resetMouseOver();
        this.mouseIsOver = !0;
        a && a.preventDefault && a.preventDefault()
    },
    addLegend: function (a, b) {
        a = AmCharts.processObject(a, AmCharts.AmLegend, this.theme);
        a.divId = b;
        var c;
        c = "object" != typeof b &&
        b ? document.getElementById(b) : b;
        this.legend = a;
        a.chart = this;
        c ? (a.div = c, a.position = "outside", a.autoMargins = !1) : a.div = this.legendDiv;
        c = this.handleLegendEvent;
        this.listenTo(a, "showItem", c);
        this.listenTo(a, "hideItem", c);
        this.listenTo(a, "clickMarker", c);
        this.listenTo(a, "rollOverItem", c);
        this.listenTo(a, "rollOutItem", c);
        this.listenTo(a, "rollOverMarker", c);
        this.listenTo(a, "rollOutMarker", c);
        this.listenTo(a, "clickLabel", c);
        return a
    },
    removeLegend: function () {
        this.legend = void 0;
        this.legendDiv.innerHTML = ""
    },
    handleResize: function () {
        (AmCharts.isPercents(this.width) ||
        AmCharts.isPercents(this.height)) && this.invalidateSizeReal();
        this.renderFix()
    },
    renderFix: function () {
        if (!AmCharts.VML) {
            var a = this.container;
            a && a.renderFix()
        }
    },
    getSVG: function () {
        if (AmCharts.hasSVG)return this.container
    },
    animate: function (a, b, c, d, f, e, g) {
        a["an_" + b] && AmCharts.removeFromArray(this.animations, a["an_" + b]);
        c = {
            obj: a,
            frame: 0,
            attribute: b,
            from: c,
            to: d,
            time: f,
            effect: e,
            suffix: g
        };
        a["an_" + b] = c;
        this.animations.push(c);
        return c
    },
    setLegendData: function (a) {
        var b = this.legend;
        b && b.setData(a)
    },
    startInterval: function () {
        var a =
            this;
        clearInterval(a.interval);
        a.interval = setInterval(function () {
            a.updateAnimations.call(a)
        }, AmCharts.updateRate)
    },
    stopAnim: function (a) {
        AmCharts.removeFromArray(this.animations, a)
    },
    updateAnimations: function () {
        var a;
        this.container && this.container.update();
        for (a = this.animations.length - 1; 0 <= a; a--) {
            var b = this.animations[a], c = 1E3 * b.time / AmCharts.updateRate, d = b.frame + 1, f = b.obj, e = b.attribute;
            if (d <= c) {
                b.frame++;
                var g = Number(b.from), h = Number(b.to) - g, c = AmCharts[b.effect](0, d, g, h, c);
                0 === h ? (this.animations.splice(a,
                    1), f.node.style[e] = Number(b.to) + b.suffix) : f.node.style[e] = c + b.suffix
            } else f.node.style[e] = Number(b.to) + b.suffix, this.animations.splice(a, 1)
        }
    },
    inIframe: function () {
        try {
            return window.self !== window.top
        } catch (a) {
            return !0
        }
    },
    brr: function () {
        var a = window.location.hostname.split("."), b;
        2 <= a.length && (b = a[a.length - 2] + "." + a[a.length - 1]);
        this.amLink && (a = this.amLink.parentNode) && a.removeChild(this.amLink);
        a = this.creditsPosition;
        if ("amcharts.com" != b || !0 === this.inIframe()) {
            var c = b = 0, d = this.realWidth, f = this.realHeight;
            if ("serial" == this.type || "xy" == this.type)b = this.marginLeftReal, c = this.marginTopReal, d = b + this.plotAreaWidth, f = c + this.plotAreaHeight;
            var e = "http://www.amcharts.com/javascript-charts/", g = "JavaScript charts", h = "JS chart by amCharts";
            "ammap" == this.product && (e = "http://www.ammap.com/javascript-maps/", g = "Interactive JavaScript maps", h = "JS map by amCharts");
            var k = document.createElement("a"), h = document.createTextNode(h);
            k.setAttribute("href", e);
            k.setAttribute("title", g);
            k.appendChild(h);
            this.chartDiv.appendChild(k);
            this.amLink = k;
            e = k.style;
            e.position = "absolute";
            e.textDecoration = "none";
            e.color = this.color;
            e.fontFamily = this.fontFamily;
            e.fontSize = this.fontSize + "px";
            e.opacity = .7;
            e.display = "block";
            var g = k.offsetWidth, k = k.offsetHeight, h = 5 + b, l = c + 5;
            "bottom-left" == a && (h = 5 + b, l = f - k - 3);
            "bottom-right" == a && (h = d - g - 5, l = f - k - 3);
            "top-right" == a && (h = d - g - 5, l = c + 5);
            e.left = h + "px";
            e.top = l + "px"
        }
    }
});
AmCharts.Slice = AmCharts.Class({
    construct: function () {
    }
});
AmCharts.SerialDataItem = AmCharts.Class({
    construct: function () {
    }
});
AmCharts.GraphDataItem = AmCharts.Class({
    construct: function () {
    }
});
AmCharts.Guide = AmCharts.Class({
    construct: function (a) {
        this.cname = "Guide";
        AmCharts.applyTheme(this, a, this.cname)
    }
});
AmCharts.AmBalloon = AmCharts.Class({
    construct: function (a) {
        this.cname = "AmBalloon";
        this.enabled = !0;
        this.fillColor = "#FFFFFF";
        this.fillAlpha = .8;
        this.borderThickness = 2;
        this.borderColor = "#FFFFFF";
        this.borderAlpha = 1;
        this.cornerRadius = 0;
        this.maximumWidth = 220;
        this.horizontalPadding = 8;
        this.verticalPadding = 4;
        this.pointerWidth = 6;
        this.pointerOrientation = "V";
        this.color = "#000000";
        this.adjustBorderColor = !0;
        this.show = this.follow = this.showBullet = !1;
        this.bulletSize = 3;
        this.shadowAlpha = .4;
        this.shadowColor = "#000000";
        this.fadeOutDuration =
            this.animationDuration = .3;
        this.fixedPosition = !1;
        this.offsetY = 6;
        this.offsetX = 1;
        this.textAlign = "center";
        AmCharts.isModern || (this.offsetY *= 1.5);
        AmCharts.applyTheme(this, a, this.cname)
    },
    draw: function () {
        var a = this.pointToX, b = this.pointToY;
        this.deltaSignX = this.deltaSignY = 1;
        var c = this.chart;
        AmCharts.VML && (this.fadeOutDuration = 0);
        this.xAnim && c.stopAnim(this.xAnim);
        this.yAnim && c.stopAnim(this.yAnim);
        if (!isNaN(a)) {
            var d = this.follow, f = c.container, e = this.set;
            AmCharts.remove(e);
            this.removeDiv();
            e = f.set();
            e.node.style.pointerEvents =
                "none";
            this.set = e;
            c.balloonsSet.push(e);
            if (this.show) {
                var g = this.l, h = this.t, k = this.r, l = this.b, m = this.balloonColor, n = this.fillColor, r = this.borderColor, p = n;
                void 0 != m && (this.adjustBorderColor ? p = r = m : n = m);
                var v = this.horizontalPadding, x = this.verticalPadding, t = this.pointerWidth, z = this.pointerOrientation, A = this.cornerRadius, w = c.fontFamily, s = this.fontSize;
                void 0 == s && (s = c.fontSize);
                var m = document.createElement("div"), u = m.style;
                u.pointerEvents = "none";
                u.position = "absolute";
                var q = this.minWidth, y = "";
                isNaN(q) ||
                (y = "min-width:" + (q - 2 * v) + "px; ");
                m.innerHTML = '<div style="text-align:' + this.textAlign + "; " + y + "max-width:" + this.maxWidth + "px; font-size:" + s + "px; color:" + this.color + "; font-family:" + w + '">' + this.text + "</div>";
                c.chartDiv.appendChild(m);
                this.textDiv = m;
                s = m.offsetWidth;
                w = m.offsetHeight;
                m.clientHeight && (s = m.clientWidth, w = m.clientHeight);
                w += 2 * x;
                y = s + 2 * v;
                !isNaN(q) && y < q && (y = q);
                window.opera && (w += 2);
                var B = !1, s = this.offsetY;
                c.handDrawn && (s += c.handDrawScatter + 2);
                "H" != z ? (q = a - y / 2, b < h + w + 10 && "down" != z ? (B = !0, d && (b += s),
                    s = b + t, this.deltaSignY = -1) : (d && (b -= s), s = b - w - t, this.deltaSignY = 1)) : (2 * t > w && (t = w / 2), s = b - w / 2, a < g + (k - g) / 2 ? (q = a + t, this.deltaSignX = -1) : (q = a - y - t, this.deltaSignX = 1));
                s + w >= l && (s = l - w);
                s < h && (s = h);
                q < g && (q = g);
                q + y > k && (q = k - y);
                var h = s + x, l = q + v, x = this.shadowAlpha, G = this.shadowColor, v = this.borderThickness, C = this.bulletSize, D;
                0 < A || 0 === t ? (0 < x && (a = AmCharts.rect(f, y, w, n, 0, v + 1, G, x, this.cornerRadius), AmCharts.isModern ? a.translate(1, 1) : a.translate(4, 4), e.push(a)), n = AmCharts.rect(f, y, w, n, this.fillAlpha, v, r, this.borderAlpha,
                    this.cornerRadius), this.showBullet && (D = AmCharts.circle(f, C, p, this.fillAlpha), e.push(D))) : (p = [], A = [], "H" != z ? (g = a - q, g > y - t && (g = y - t), g < t && (g = t), p = [0, g - t, a - q, g + t, y, y, 0, 0], A = B ? [0, 0, b - s, 0, 0, w, w, 0] : [w, w, b - s, w, w, 0, 0, w]) : (p = b - s, p > w - t && (p = w - t), p < t && (p = t), A = [0, p - t, b - s, p + t, w, w, 0, 0], p = a < g + (k - g) / 2 ? [0, 0, q < a ? 0 : a - q, 0, 0, y, y, 0] : [y, y, q + y > a ? y : a - q, y, y, 0, 0, y]), 0 < x && (a = AmCharts.polygon(f, p, A, n, 0, v, G, x), a.translate(1, 1), e.push(a)), n = AmCharts.polygon(f, p, A, n, this.fillAlpha, v, r, this.borderAlpha));
                this.bg = n;
                e.push(n);
                n.toFront();
                f = 1 * this.deltaSignX;
                u.left = l + "px";
                u.top = h + "px";
                e.translate(q - f, s);
                n = n.getBBox();
                this.bottom = s + w + 1;
                this.yPos = n.y + s;
                D && D.translate(this.pointToX - q + f, b - s);
                b = this.animationDuration;
                0 < this.animationDuration && !d && !isNaN(this.prevX) && (e.translate(this.prevX, this.prevY), e.animate({translate: q - f + "," + s}, b, "easeOutSine"), m && (u.left = this.prevTX + "px", u.top = this.prevTY + "px", this.xAnim = c.animate({node: m}, "left", this.prevTX, l, b, "easeOutSine", "px"), this.yAnim = c.animate({node: m}, "top", this.prevTY, h, b, "easeOutSine",
                    "px")));
                this.prevX = q - f;
                this.prevY = s;
                this.prevTX = l;
                this.prevTY = h
            }
        }
    },
    followMouse: function () {
        if (this.follow && this.show) {
            var a = this.chart.mouseX - this.offsetX * this.deltaSignX, b = this.chart.mouseY;
            this.pointToX = a;
            this.pointToY = b;
            if (a != this.previousX || b != this.previousY)if (this.previousX = a, this.previousY = b, 0 === this.cornerRadius)this.draw(); else {
                var c = this.set;
                if (c) {
                    var d = c.getBBox(), a = a - d.width / 2, f = b - d.height - 10;
                    a < this.l && (a = this.l);
                    a > this.r - d.width && (a = this.r - d.width);
                    f < this.t && (f = b + 10);
                    c.translate(a, f);
                    b = this.textDiv.style;
                    b.left = a + this.horizontalPadding + "px";
                    b.top = f + this.verticalPadding + "px"
                }
            }
        }
    },
    changeColor: function (a) {
        this.balloonColor = a
    },
    setBounds: function (a, b, c, d) {
        this.l = a;
        this.t = b;
        this.r = c;
        this.b = d;
        this.destroyTO && clearTimeout(this.destroyTO)
    },
    showBalloon: function (a) {
        this.text = a;
        this.show = !0;
        this.destroyTO && clearTimeout(this.destroyTO);
        a = this.chart;
        this.fadeAnim1 && a.stopAnim(this.fadeAnim1);
        this.fadeAnim2 && a.stopAnim(this.fadeAnim2);
        this.draw()
    },
    hide: function () {
        var a = this, b = a.fadeOutDuration,
            c = a.chart;
        if (0 < b) {
            a.destroyTO = setTimeout(function () {
                a.destroy.call(a)
            }, 1E3 * b);
            a.follow = !1;
            a.show = !1;
            var d = a.set;
            d && (d.setAttr("opacity", a.fillAlpha), a.fadeAnim1 = d.animate({opacity: 0}, b, "easeInSine"));
            a.textDiv && (a.fadeAnim2 = c.animate({node: a.textDiv}, "opacity", 1, 0, b, "easeInSine", ""))
        } else a.show = !1, a.follow = !1, a.destroy()
    },
    setPosition: function (a, b, c) {
        this.pointToX = a;
        this.pointToY = b;
        c && (a == this.previousX && b == this.previousY || this.draw());
        this.previousX = a;
        this.previousY = b
    },
    followCursor: function (a) {
        var b =
            this;
        (b.follow = a) ? (b.pShowBullet = b.showBullet, b.showBullet = !1) : void 0 !== b.pShowBullet && (b.showBullet = b.pShowBullet);
        clearInterval(b.interval);
        var c = b.chart.mouseX, d = b.chart.mouseY;
        !isNaN(c) && a && (b.pointToX = c - b.offsetX * b.deltaSignX, b.pointToY = d, b.followMouse(), b.interval = setInterval(function () {
            b.followMouse.call(b)
        }, 40))
    },
    removeDiv: function () {
        if (this.textDiv) {
            var a = this.textDiv.parentNode;
            a && a.removeChild(this.textDiv)
        }
    },
    destroy: function () {
        clearInterval(this.interval);
        AmCharts.remove(this.set);
        this.removeDiv();
        this.set = null
    }
});
AmCharts.circle = function (a, b, c, d, f, e, g, h, k) {
    if (void 0 == f || 0 === f)f = .01;
    void 0 === e && (e = "#000000");
    void 0 === g && (g = 0);
    d = {
        fill: c,
        stroke: e,
        "fill-opacity": d,
        "stroke-width": f,
        "stroke-opacity": g
    };
    a = isNaN(k) ? a.circle(0, 0, b).attr(d) : a.ellipse(0, 0, b, k).attr(d);
    h && a.gradient("radialGradient", [c, AmCharts.adjustLuminosity(c, -.6)]);
    return a
};
AmCharts.text = function (a, b, c, d, f, e, g, h) {
    e || (e = "middle");
    "right" == e && (e = "end");
    isNaN(h) && (h = 1);
    void 0 !== b && (b = String(b), AmCharts.isIE && !AmCharts.isModern && (b = b.replace("&amp;", "&"), b = b.replace("&", "&amp;")));
    c = {
        fill: c,
        "font-family": d,
        "font-size": f,
        opacity: h
    };
    !0 === g && (c["font-weight"] = "bold");
    c["text-anchor"] = e;
    return a.text(b, c)
};
AmCharts.polygon = function (a, b, c, d, f, e, g, h, k, l, m) {
    isNaN(e) && (e = .01);
    isNaN(h) && (h = f);
    var n = d, r = !1;
    "object" == typeof n && 1 < n.length && (r = !0, n = n[0]);
    void 0 === g && (g = n);
    f = {
        fill: n,
        stroke: g,
        "fill-opacity": f,
        "stroke-width": e,
        "stroke-opacity": h
    };
    void 0 !== m && 0 < m && (f["stroke-dasharray"] = m);
    m = AmCharts.dx;
    e = AmCharts.dy;
    a.handDrawn && (c = AmCharts.makeHD(b, c, a.handDrawScatter), b = c[0], c = c[1]);
    g = Math.round;
    l && (g = AmCharts.doNothing);
    l = "M" + (g(b[0]) + m) + "," + (g(c[0]) + e);
    for (h = 1; h < b.length; h++)l += " L" + (g(b[h]) + m) + "," + (g(c[h]) +
        e);
    a = a.path(l + " Z").attr(f);
    r && a.gradient("linearGradient", d, k);
    return a
};
AmCharts.rect = function (a, b, c, d, f, e, g, h, k, l, m) {
    isNaN(e) && (e = 0);
    void 0 === k && (k = 0);
    void 0 === l && (l = 270);
    isNaN(f) && (f = 0);
    var n = d, r = !1;
    "object" == typeof n && (n = n[0], r = !0);
    void 0 === g && (g = n);
    void 0 === h && (h = f);
    b = Math.round(b);
    c = Math.round(c);
    var p = 0, v = 0;
    0 > b && (b = Math.abs(b), p = -b);
    0 > c && (c = Math.abs(c), v = -c);
    p += AmCharts.dx;
    v += AmCharts.dy;
    f = {
        fill: n,
        stroke: g,
        "fill-opacity": f,
        "stroke-opacity": h
    };
    void 0 !== m && 0 < m && (f["stroke-dasharray"] = m);
    a = a.rect(p, v, b, c, k, e).attr(f);
    r && a.gradient("linearGradient", d, l);
    return a
};
AmCharts.bullet = function (a, b, c, d, f, e, g, h, k, l, m) {
    var n;
    "circle" == b && (b = "round");
    switch (b) {
        case "round":
            n = AmCharts.circle(a, c / 2, d, f, e, g, h);
            break;
        case "square":
            n = AmCharts.polygon(a, [-c / 2, c / 2, c / 2, -c / 2], [c / 2, c / 2, -c / 2, -c / 2], d, f, e, g, h, l - 180);
            break;
        case "rectangle":
            n = AmCharts.polygon(a, [-c, c, c, -c], [c / 2, c / 2, -c / 2, -c / 2], d, f, e, g, h, l - 180);
            break;
        case "diamond":
            n = AmCharts.polygon(a, [-c / 2, 0, c / 2, 0], [0, -c / 2, 0, c / 2], d, f, e, g, h);
            break;
        case "triangleUp":
            n = AmCharts.triangle(a, c, 0, d, f, e, g, h);
            break;
        case "triangleDown":
            n = AmCharts.triangle(a,
                c, 180, d, f, e, g, h);
            break;
        case "triangleLeft":
            n = AmCharts.triangle(a, c, 270, d, f, e, g, h);
            break;
        case "triangleRight":
            n = AmCharts.triangle(a, c, 90, d, f, e, g, h);
            break;
        case "bubble":
            n = AmCharts.circle(a, c / 2, d, f, e, g, h, !0);
            break;
        case "line":
            n = AmCharts.line(a, [-c / 2, c / 2], [0, 0], d, f, e, g, h);
            break;
        case "yError":
            n = a.set();
            n.push(AmCharts.line(a, [0, 0], [-c / 2, c / 2], d, f, e));
            n.push(AmCharts.line(a, [-k, k], [-c / 2, -c / 2], d, f, e));
            n.push(AmCharts.line(a, [-k, k], [c / 2, c / 2], d, f, e));
            break;
        case "xError":
            n = a.set(), n.push(AmCharts.line(a, [-c /
            2, c / 2], [0, 0], d, f, e)), n.push(AmCharts.line(a, [-c / 2, -c / 2], [-k, k], d, f, e)), n.push(AmCharts.line(a, [c / 2, c / 2], [-k, k], d, f, e))
    }
    n && n.pattern(m);
    return n
};
AmCharts.triangle = function (a, b, c, d, f, e, g, h) {
    if (void 0 === e || 0 === e)e = 1;
    void 0 === g && (g = "#000");
    void 0 === h && (h = 0);
    d = {
        fill: d,
        stroke: g,
        "fill-opacity": f,
        "stroke-width": e,
        "stroke-opacity": h
    };
    b /= 2;
    var k;
    0 === c && (k = " M" + -b + "," + b + " L0," + -b + " L" + b + "," + b + " Z");
    180 == c && (k = " M" + -b + "," + -b + " L0," + b + " L" + b + "," + -b + " Z");
    90 == c && (k = " M" + -b + "," + -b + " L" + b + ",0 L" + -b + "," + b + " Z");
    270 == c && (k = " M" + -b + ",0 L" + b + "," + b + " L" + b + "," + -b + " Z");
    return a.path(k).attr(d)
};
AmCharts.line = function (a, b, c, d, f, e, g, h, k, l, m) {
    if (a.handDrawn && !m)return AmCharts.handDrawnLine(a, b, c, d, f, e, g, h, k, l, m);
    e = {
        fill: "none",
        "stroke-width": e
    };
    void 0 !== g && 0 < g && (e["stroke-dasharray"] = g);
    isNaN(f) || (e["stroke-opacity"] = f);
    d && (e.stroke = d);
    d = Math.round;
    l && (d = AmCharts.doNothing);
    l = AmCharts.dx;
    f = AmCharts.dy;
    g = "M" + (d(b[0]) + l) + "," + (d(c[0]) + f);
    for (h = 1; h < b.length; h++)g += " L" + (d(b[h]) + l) + "," + (d(c[h]) + f);
    if (AmCharts.VML)return a.path(g, void 0, !0).attr(e);
    k && (g += " M0,0 L0,0");
    return a.path(g).attr(e)
};
AmCharts.makeHD = function (a, b, c) {
    for (var d = [], f = [], e = 1; e < a.length; e++)for (var g = Number(a[e - 1]), h = Number(b[e - 1]), k = Number(a[e]), l = Number(b[e]), m = Math.sqrt(Math.pow(k - g, 2) + Math.pow(l - h, 2)), m = Math.round(m / 50) + 1, k = (k - g) / m, l = (l - h) / m, n = 0; n <= m; n++) {
        var r = g + n * k + Math.random() * c, p = h + n * l + Math.random() * c;
        d.push(r);
        f.push(p)
    }
    return [d, f]
};
AmCharts.handDrawnLine = function (a, b, c, d, f, e, g, h, k, l, m) {
    var n = a.set();
    for (m = 1; m < b.length; m++)for (var r = [b[m - 1], b[m]], p = [c[m - 1], c[m]], p = AmCharts.makeHD(r, p, a.handDrawScatter), r = p[0], p = p[1], v = 1; v < r.length; v++)n.push(AmCharts.line(a, [r[v - 1], r[v]], [p[v - 1], p[v]], d, f, e + Math.random() * a.handDrawThickness - a.handDrawThickness / 2, g, h, k, l, !0));
    return n
};
AmCharts.doNothing = function (a) {
    return a
};
AmCharts.wedge = function (a, b, c, d, f, e, g, h, k, l, m, n) {
    var r = Math.round;
    e = r(e);
    g = r(g);
    h = r(h);
    var p = r(g / e * h), v = AmCharts.VML, x = 359.5 + e / 100;
    359.94 < x && (x = 359.94);
    f >= x && (f = x);
    var t = 1 / 180 * Math.PI, x = b + Math.sin(d * t) * h, z = c - Math.cos(d * t) * p, A = b + Math.sin(d * t) * e, w = c - Math.cos(d * t) * g, s = b + Math.sin((d + f) * t) * e, u = c - Math.cos((d + f) * t) * g, q = b + Math.sin((d + f) * t) * h, t = c - Math.cos((d + f) * t) * p, y = {
        fill: AmCharts.adjustLuminosity(l.fill, -.2),
        "stroke-opacity": 0,
        "fill-opacity": l["fill-opacity"]
    }, B = 0;
    180 < Math.abs(f) && (B = 1);
    d = a.set();
    var G;
    v && (x = r(10 * x), A = r(10 * A), s = r(10 * s), q = r(10 * q), z = r(10 * z), w = r(10 * w), u = r(10 * u), t = r(10 * t), b = r(10 * b), k = r(10 * k), c = r(10 * c), e *= 10, g *= 10, h *= 10, p *= 10, 1 > Math.abs(f) && 1 >= Math.abs(s - A) && 1 >= Math.abs(u - w) && (G = !0));
    f = "";
    var C;
    n && (y["fill-opacity"] = 0, y["stroke-opacity"] = l["stroke-opacity"] / 2, y.stroke = l.stroke);
    0 < k && (C = " M" + x + "," + (z + k) + " L" + A + "," + (w + k), v ? (G || (C += " A" + (b - e) + "," + (k + c - g) + "," + (b + e) + "," + (k + c + g) + "," + A + "," + (w + k) + "," + s + "," + (u + k)), C += " L" + q + "," + (t + k), 0 < h && (G || (C += " B" + (b - h) + "," + (k + c - p) + "," + (b + h) + "," + (k + c + p) +
        "," + q + "," + (k + t) + "," + x + "," + (k + z)))) : (C += " A" + e + "," + g + ",0," + B + ",1," + s + "," + (u + k) + " L" + q + "," + (t + k), 0 < h && (C += " A" + h + "," + p + ",0," + B + ",0," + x + "," + (z + k))), C = a.path(C + " Z", void 0, void 0, "1000,1000").attr(y), d.push(C), C = a.path(" M" + x + "," + z + " L" + x + "," + (z + k) + " L" + A + "," + (w + k) + " L" + A + "," + w + " L" + x + "," + z + " Z", void 0, void 0, "1000,1000").attr(y), k = a.path(" M" + s + "," + u + " L" + s + "," + (u + k) + " L" + q + "," + (t + k) + " L" + q + "," + t + " L" + s + "," + u + " Z", void 0, void 0, "1000,1000").attr(y), d.push(C), d.push(k));
    v ? (G || (f = " A" + r(b - e) + "," + r(c - g) +
        "," + r(b + e) + "," + r(c + g) + "," + r(A) + "," + r(w) + "," + r(s) + "," + r(u)), e = " M" + r(x) + "," + r(z) + " L" + r(A) + "," + r(w) + f + " L" + r(q) + "," + r(t)) : e = " M" + x + "," + z + " L" + A + "," + w + (" A" + e + "," + g + ",0," + B + ",1," + s + "," + u) + " L" + q + "," + t;
    0 < h && (v ? G || (e += " B" + (b - h) + "," + (c - p) + "," + (b + h) + "," + (c + p) + "," + q + "," + t + "," + x + "," + z) : e += " A" + h + "," + p + ",0," + B + ",0," + x + "," + z);
    a.handDrawn && (b = AmCharts.line(a, [x, A], [z, w], l.stroke, l.thickness * Math.random() * a.handDrawThickness, l["stroke-opacity"]), d.push(b));
    a = a.path(e + " Z", void 0, void 0, "1000,1000").attr(l);
    if (m) {
        b = [];
        for (c = 0; c < m.length; c++)b.push(AmCharts.adjustLuminosity(l.fill, m[c]));
        0 < b.length && a.gradient("linearGradient", b)
    }
    a.pattern(n);
    d.push(a);
    return d
};
AmCharts.adjustLuminosity = function (a, b) {
    a = String(a).replace(/[^0-9a-f]/gi, "");
    6 > a.length && (a = String(a[0]) + String(a[0]) + String(a[1]) + String(a[1]) + String(a[2]) + String(a[2]));
    b = b || 0;
    var c = "#", d, f;
    for (f = 0; 3 > f; f++)d = parseInt(a.substr(2 * f, 2), 16), d = Math.round(Math.min(Math.max(0, d + d * b), 255)).toString(16), c += ("00" + d).substr(d.length);
    return c
};
AmCharts.AmLegend = AmCharts.Class({
    construct: function (a) {
        this.cname = "AmLegend";
        this.createEvents("rollOverMarker", "rollOverItem", "rollOutMarker", "rollOutItem", "showItem", "hideItem", "clickMarker", "rollOverItem", "rollOutItem", "clickLabel");
        this.position = "bottom";
        this.borderColor = this.color = "#000000";
        this.borderAlpha = 0;
        this.markerLabelGap = 5;
        this.verticalGap = 10;
        this.align = "left";
        this.horizontalGap = 0;
        this.spacing = 10;
        this.markerDisabledColor = "#AAB3B3";
        this.markerType = "square";
        this.markerSize = 16;
        this.markerBorderThickness =
            this.markerBorderAlpha = 1;
        this.marginBottom = this.marginTop = 0;
        this.marginLeft = this.marginRight = 20;
        this.autoMargins = !0;
        this.valueWidth = 50;
        this.switchable = !0;
        this.switchType = "x";
        this.switchColor = "#FFFFFF";
        this.rollOverColor = "#CC0000";
        this.reversedOrder = !1;
        this.labelText = "[[title]]";
        this.valueText = "[[value]]";
        this.useMarkerColorForLabels = !1;
        this.rollOverGraphAlpha = 1;
        this.textClickEnabled = !1;
        this.equalWidths = !0;
        this.dateFormat = "DD-MM-YYYY";
        this.backgroundColor = "#FFFFFF";
        this.backgroundAlpha = 0;
        this.useGraphSettings = !1;
        this.showEntries = !0;
        AmCharts.applyTheme(this, a, this.cname)
    },
    setData: function (a) {
        this.legendData = a;
        this.invalidateSize()
    },
    invalidateSize: function () {
        this.destroy();
        this.entries = [];
        this.valueLabels = [];
        (AmCharts.ifArray(this.legendData) || AmCharts.ifArray(this.data)) && this.drawLegend()
    },
    drawLegend: function () {
        var a = this.chart, b = this.position, c = this.width, d = a.divRealWidth, f = a.divRealHeight, e = this.div, g = this.legendData;
        this.data && (g = this.data);
        isNaN(this.fontSize) && (this.fontSize = a.fontSize);
        if ("right" ==
            b || "left" == b)this.maxColumns = 1, this.autoMargins && (this.marginLeft = this.marginRight = 10); else if (this.autoMargins) {
            this.marginRight = a.marginRight;
            this.marginLeft = a.marginLeft;
            var h = a.autoMarginOffset;
            "bottom" == b ? (this.marginBottom = h, this.marginTop = 0) : (this.marginTop = h, this.marginBottom = 0)
        }
        var k;
        void 0 !== c ? k = AmCharts.toCoordinate(c, d) : "right" != b && "left" != b && (k = a.realWidth);
        "outside" == b ? (k = e.offsetWidth, f = e.offsetHeight, e.clientHeight && (k = e.clientWidth, f = e.clientHeight)) : (isNaN(k) || (e.style.width = k + "px"),
            e.className = "amChartsLegend");
        this.divWidth = k;
        (b = this.container) ? (b.container.innerHTML = "", e.appendChild(b.container), b.setSize(k, f)) : b = new AmCharts.AmDraw(e, k, f, a);
        this.container = b;
        this.lx = 0;
        this.ly = 8;
        f = this.markerSize;
        f > this.fontSize && (this.ly = f / 2 - 1);
        0 < f && (this.lx += f + this.markerLabelGap);
        this.titleWidth = 0;
        if (f = this.title)a = AmCharts.text(this.container, f, this.color, a.fontFamily, this.fontSize, "start", !0), a.translate(this.marginLeft, this.marginTop + this.verticalGap + this.ly + 1), a = a.getBBox(), this.titleWidth =
            a.width + 15, this.titleHeight = a.height + 6;
        this.index = this.maxLabelWidth = 0;
        if (this.showEntries) {
            for (a = 0; a < g.length; a++)this.createEntry(g[a]);
            for (a = this.index = 0; a < g.length; a++)this.createValue(g[a])
        }
        this.arrangeEntries();
        this.updateValues()
    },
    arrangeEntries: function () {
        var a = this.position, b = this.marginLeft + this.titleWidth, c = this.marginRight, d = this.marginTop, f = this.marginBottom, e = this.horizontalGap, g = this.div, h = this.divWidth, k = this.maxColumns, l = this.verticalGap, m = this.spacing, n = h - c - b, r = 0, p = 0, v = this.container;
        this.set && this.set.remove();
        var x = v.set();
        this.set = x;
        v = v.set();
        x.push(v);
        var t = this.entries, z, A;
        for (A = 0; A < t.length; A++) {
            z = t[A].getBBox();
            var w = z.width;
            w > r && (r = w);
            z = z.height;
            z > p && (p = z)
        }
        var w = p = 0, s = e, u = 0, q = 0;
        for (A = 0; A < t.length; A++) {
            var y = t[A];
            this.reversedOrder && (y = t[t.length - A - 1]);
            z = y.getBBox();
            var B;
            this.equalWidths ? B = e + w * (r + m + this.markerLabelGap) : (B = s, s = s + z.width + e + m);
            z.height > q && (q = z.height);
            B + z.width > n && 0 < A && 0 !== w && (p++, w = 0, B = e, s = B + z.width + e + m, u = u + q + l, q = 0);
            y.translate(B, u);
            w++;
            !isNaN(k) && w >= k &&
            (w = 0, p++, u = u + q + l, q = 0);
            v.push(y)
        }
        z = v.getBBox();
        k = z.height + 2 * l - 1;
        "left" == a || "right" == a ? (h = z.width + 2 * e, g.style.width = h + b + c + "px") : h = h - b - c - 1;
        c = AmCharts.polygon(this.container, [0, h, h, 0], [0, 0, k, k], this.backgroundColor, this.backgroundAlpha, 1, this.borderColor, this.borderAlpha);
        x.push(c);
        x.translate(b, d);
        c.toBack();
        b = e;
        if ("top" == a || "bottom" == a || "absolute" == a || "outside" == a)"center" == this.align ? b = e + (h - z.width) / 2 : "right" == this.align && (b = e + h - z.width);
        v.translate(b, l + 1);
        this.titleHeight > k && (k = this.titleHeight);
        a = k + d + f + 1;
        0 > a && (a = 0);
        g.style.height = Math.round(a) + "px"
    },
    createEntry: function (a) {
        if (!1 !== a.visibleInLegend) {
            var b = this.chart, c = a.markerType;
            c || (c = this.markerType);
            var d = a.color, f = a.alpha;
            a.legendKeyColor && (d = a.legendKeyColor());
            a.legendKeyAlpha && (f = a.legendKeyAlpha());
            var e;
            !0 === a.hidden && (e = d = this.markerDisabledColor);
            var g = a.pattern, h = a.customMarker;
            h || (h = this.customMarker);
            var k = this.container, l = this.markerSize, m = 0, n = 0, r = l / 2;
            if (this.useGraphSettings)if (m = a.type, this.switchType = void 0, "line" == m ||
                "step" == m || "smoothedLine" == m || "ohlc" == m)g = k.set(), a.hidden || (d = a.lineColorR, e = a.bulletBorderColorR), n = AmCharts.line(k, [0, 2 * l], [l / 2, l / 2], d, a.lineAlpha, a.lineThickness, a.dashLength), g.push(n), a.bullet && (a.hidden || (d = a.bulletColorR), n = AmCharts.bullet(k, a.bullet, a.bulletSize, d, a.bulletAlpha, a.bulletBorderThickness, e, a.bulletBorderAlpha)) && (n.translate(l + 1, l / 2), g.push(n)), r = 0, m = l, n = l / 3; else {
                var p;
                a.getGradRotation && (p = a.getGradRotation());
                m = a.fillColorsR;
                !0 === a.hidden && (m = d);
                if (g = this.createMarker("rectangle",
                        m, a.fillAlphas, a.lineThickness, d, a.lineAlpha, p, g))r = l, g.translate(r, l / 2);
                m = l
            } else h ? (b.path && (h = b.path + h), g = k.image(h, 0, 0, l, l)) : (g = this.createMarker(c, d, f, void 0, void 0, void 0, void 0, g)) && g.translate(l / 2, l / 2);
            this.addListeners(g, a);
            k = k.set([g]);
            this.switchable && a.switchable && k.setAttr("cursor", "pointer");
            (e = this.switchType) && "none" != e && ("x" == e ? (p = this.createX(), p.translate(l / 2, l / 2)) : p = this.createV(), p.dItem = a, !0 !== a.hidden ? "x" == e ? p.hide() : p.show() : "x" != e && p.hide(), this.switchable || p.hide(), this.addListeners(p,
                a), a.legendSwitch = p, k.push(p));
            e = this.color;
            a.showBalloon && this.textClickEnabled && void 0 !== this.selectedColor && (e = this.selectedColor);
            this.useMarkerColorForLabels && (e = d);
            !0 === a.hidden && (e = this.markerDisabledColor);
            d = AmCharts.massReplace(this.labelText, {"[[title]]": a.title});
            p = this.fontSize;
            g && l <= p && g.translate(r, l / 2 + this.ly - p / 2 + (p + 2 - l) / 2 - n);
            var v;
            d && (d = AmCharts.fixBrakes(d), a.legendTextReal = d, v = this.labelWidth, v = isNaN(v) ? AmCharts.text(this.container, d, e, b.fontFamily, p, "start") : AmCharts.wrappedText(this.container,
                d, e, b.fontFamily, p, "start", !1, v, 0), v.translate(this.lx + m, this.ly), k.push(v), b = v.getBBox().width, this.maxLabelWidth < b && (this.maxLabelWidth = b));
            this.entries[this.index] = k;
            a.legendEntry = this.entries[this.index];
            a.legendLabel = v;
            this.index++
        }
    },
    addListeners: function (a, b) {
        var c = this;
        a && a.mouseover(function (a) {
            c.rollOverMarker(b, a)
        }).mouseout(function (a) {
            c.rollOutMarker(b, a)
        }).click(function (a) {
            c.clickMarker(b, a)
        })
    },
    rollOverMarker: function (a, b) {
        this.switchable && this.dispatch("rollOverMarker", a, b);
        this.dispatch("rollOverItem",
            a, b)
    },
    rollOutMarker: function (a, b) {
        this.switchable && this.dispatch("rollOutMarker", a, b);
        this.dispatch("rollOutItem", a, b)
    },
    clickMarker: function (a, b) {
        this.switchable && (!0 === a.hidden ? this.dispatch("showItem", a, b) : this.dispatch("hideItem", a, b));
        this.dispatch("clickMarker", a, b)
    },
    rollOverLabel: function (a, b) {
        a.hidden || (this.textClickEnabled && a.legendLabel && a.legendLabel.attr({fill: this.rollOverColor}), this.dispatch("rollOverItem", a, b))
    },
    rollOutLabel: function (a, b) {
        if (!a.hidden) {
            if (this.textClickEnabled && a.legendLabel) {
                var c =
                    this.color;
                void 0 !== this.selectedColor && a.showBalloon && (c = this.selectedColor);
                this.useMarkerColorForLabels && (c = a.lineColor, void 0 === c && (c = a.color));
                a.legendLabel.attr({fill: c})
            }
            this.dispatch("rollOutItem", a, b)
        }
    },
    clickLabel: function (a, b) {
        this.textClickEnabled ? a.hidden || this.dispatch("clickLabel", a, b) : this.switchable && (!0 === a.hidden ? this.dispatch("showItem", a, b) : this.dispatch("hideItem", a, b))
    },
    dispatch: function (a, b, c) {
        this.fire(a, {
            type: a,
            dataItem: b,
            target: this,
            event: c,
            chart: this.chart
        })
    },
    createValue: function (a) {
        var b =
            this, c = b.fontSize;
        if (!1 !== a.visibleInLegend) {
            var d = b.maxLabelWidth;
            b.equalWidths || (b.valueAlign = "left");
            "left" == b.valueAlign && (d = a.legendEntry.getBBox().width);
            var f = d;
            if (b.valueText && 0 < b.valueWidth) {
                var e = b.color;
                b.useMarkerColorForValues && (e = a.color, a.legendKeyColor && (e = a.legendKeyColor()));
                !0 === a.hidden && (e = b.markerDisabledColor);
                var g = b.valueText, d = d + b.lx + b.markerLabelGap + b.valueWidth, h = "end";
                "left" == b.valueAlign && (d -= b.valueWidth, h = "start");
                e = AmCharts.text(b.container, g, e, b.chart.fontFamily,
                    c, h);
                e.translate(d, b.ly);
                b.entries[b.index].push(e);
                f += b.valueWidth + 2 * b.markerLabelGap;
                e.dItem = a;
                b.valueLabels.push(e)
            }
            b.index++;
            e = b.markerSize;
            e < c + 7 && (e = c + 7, AmCharts.VML && (e += 3));
            c = b.container.rect(b.markerSize, 0, f, e, 0, 0).attr({
                stroke: "none",
                fill: "#ffffff",
                "fill-opacity": .005
            });
            c.dItem = a;
            b.entries[b.index - 1].push(c);
            c.mouseover(function (c) {
                b.rollOverLabel(a, c)
            }).mouseout(function (c) {
                b.rollOutLabel(a, c)
            }).click(function (c) {
                b.clickLabel(a, c)
            })
        }
    },
    createV: function () {
        var a = this.markerSize;
        return AmCharts.polygon(this.container,
            [a / 5, a / 2, a - a / 5, a / 2], [a / 3, a - a / 5, a / 5, a / 1.7], this.switchColor)
    },
    createX: function () {
        var a = (this.markerSize - 4) / 2, b = {
            stroke: this.switchColor,
            "stroke-width": 3
        }, c = this.container, d = AmCharts.line(c, [-a, a], [-a, a]).attr(b), a = AmCharts.line(c, [-a, a], [a, -a]).attr(b);
        return this.container.set([d, a])
    },
    createMarker: function (a, b, c, d, f, e, g, h) {
        var k = this.markerSize, l = this.container;
        f || (f = this.markerBorderColor);
        f || (f = b);
        isNaN(d) && (d = this.markerBorderThickness);
        isNaN(e) && (e = this.markerBorderAlpha);
        return AmCharts.bullet(l,
            a, k, b, c, d, f, e, k, g, h)
    },
    validateNow: function () {
        this.invalidateSize()
    },
    updateValues: function () {
        var a = this.valueLabels, b = this.chart, c, d = this.data;
        for (c = 0; c < a.length; c++) {
            var f = a[c], e = f.dItem, g = " ";
            if (d)e.value ? f.text(e.value) : f.text(""); else {
                if (void 0 !== e.type) {
                    var h = e.currentDataItem, k = this.periodValueText;
                    e.legendPeriodValueText && (k = e.legendPeriodValueText);
                    h ? (g = this.valueText, e.legendValueText && (g = e.legendValueText), g = b.formatString(g, h)) : k && (g = b.formatPeriodString(k, e))
                } else g = b.formatString(this.valueText,
                    e);
                if (k = this.valueFunction)h && (e = h), g = k(e, g);
                f.text(g)
            }
        }
    },
    renderFix: function () {
        if (!AmCharts.VML) {
            var a = this.container;
            a && a.renderFix()
        }
    },
    destroy: function () {
        this.div.innerHTML = "";
        AmCharts.remove(this.set)
    }
});
AmCharts.AmMap = AmCharts.Class({
    inherits: AmCharts.AmChart,
    construct: function (a) {
        this.cname = "AmMap";
        this.type = "map";
        this.theme = a;
        this.version = "3.11.1";
        this.svgNotSupported = "This browser doesn't support SVG. Use Chrome, Firefox, Internet Explorer 9 or later.";
        this.createEvents("rollOverMapObject", "rollOutMapObject", "clickMapObject", "selectedObjectChanged", "homeButtonClicked", "zoomCompleted", "dragCompleted", "positionChanged", "writeDevInfo", "click");
        this.zoomDuration = 1;
        this.zoomControl = new AmCharts.ZoomControl(a);
        this.fitMapToContainer = !0;
        this.mouseWheelZoomEnabled = this.backgroundZoomsToTop = !1;
        this.allowClickOnSelectedObject = this.useHandCursorOnClickableOjects = this.showBalloonOnSelectedObject = !0;
        this.showObjectsAfterZoom = this.wheelBusy = !1;
        this.zoomOnDoubleClick = this.useObjectColorForBalloon = !0;
        this.allowMultipleDescriptionWindows = !1;
        this.dragMap = this.centerMap = this.linesAboveImages = !0;
        this.colorSteps = 5;
        this.showAreasInList = !0;
        this.showLinesInList = this.showImagesInList = !1;
        this.areasProcessor = new AmCharts.AreasProcessor(this);
        this.areasSettings = new AmCharts.AreasSettings(a);
        this.imagesProcessor = new AmCharts.ImagesProcessor(this);
        this.imagesSettings = new AmCharts.ImagesSettings(a);
        this.linesProcessor = new AmCharts.LinesProcessor(this);
        this.linesSettings = new AmCharts.LinesSettings(a);
        this.showDescriptionOnHover = !1;
        AmCharts.AmMap.base.construct.call(this, a);
        this.creditsPosition = "bottom-left";
        this.product = "ammap";
        this.areasClasses = {};
        AmCharts.applyTheme(this, a, this.cname)
    },
    initChart: function () {
        this.zoomInstantly = !0;
        var a = this.container;
        if (this.sizeChanged && AmCharts.hasSVG && this.chartCreated) {
            this.freeLabelsSet && this.freeLabelsSet.remove();
            this.freeLabelsSet = a.set();
            this.container.setSize(this.realWidth, this.realHeight);
            this.resizeMap();
            this.drawBackground();
            this.redrawLabels();
            this.drawTitles();
            this.processObjects();
            this.rescaleObjects();
            a = this.container;
            this.zoomControl.init(this, a);
            this.drawBg();
            var b = this.smallMap;
            b && b.init(this, a);
            (b = this.valueLegend) && b.init(this, a);
            this.sizeChanged = !1;
            this.zoomToLongLat(this.zLevelTemp, this.zLongTemp,
                this.zLatTemp, !0);
            this.previousWidth = this.realWidth;
            this.previousHeight = this.realHeight;
            this.updateSmallMap();
            this.linkSet.toFront()
        } else(AmCharts.AmMap.base.initChart.call(this), AmCharts.hasSVG) ? (this.dataChanged && (this.parseData(), this.dispatchDataUpdated = !0, this.dataChanged = !1, a = this.legend) && (a.position = "absolute", a.invalidateSize()), this.mouseWheelZoomEnabled && this.addMouseWheel(), this.createDescriptionsDiv(), this.svgAreas = [], this.svgAreasById = {}, this.drawChart()) : (document.createTextNode(this.svgNotSupported),
            this.chartDiv.style.textAlign = "", this.chartDiv.setAttribute("class", "ammapAlert"), this.chartDiv.innerHTML = this.svgNotSupported, this.fire("failed", {
            type: "failed",
            chart: this
        }), clearInterval(this.interval))
    },
    invalidateSize: function () {
        var a = this.zoomLongitude();
        isNaN(a) || (this.zLongTemp = a);
        a = this.zoomLatitude();
        isNaN(a) || (this.zLatTemp = a);
        a = this.zoomLevel();
        isNaN(a) || (this.zLevelTemp = a);
        AmCharts.AmMap.base.invalidateSize.call(this)
    },
    handleWheelReal: function (a) {
        if (!this.wheelBusy) {
            this.stopAnimation();
            var b = this.zoomLevel(), c = this.zoomControl, d = c.zoomFactor;
            this.wheelBusy = !0;
            a = AmCharts.fitToBounds(0 < a ? b * d : b / d, c.minZoomLevel, c.maxZoomLevel);
            d = this.mouseX / this.mapWidth;
            c = this.mouseY / this.mapHeight;
            d = (this.zoomX() - d) * (a / b) + d;
            b = (this.zoomY() - c) * (a / b) + c;
            this.zoomTo(a, d, b)
        }
    },
    addLegend: function (a, b) {
        a.position = "absolute";
        a.autoMargins = !1;
        a.valueWidth = 0;
        a.switchable = !1;
        AmCharts.AmMap.base.addLegend.call(this, a, b);
        return a
    },
    handleLegendEvent: function () {
    },
    createDescriptionsDiv: function () {
        if (!this.descriptionsDiv) {
            var a =
                document.createElement("div"), b = a.style;
            b.position = "absolute";
            b.left = "0px";
            b.top = "0px";
            this.descriptionsDiv = a
        }
        this.containerDiv.appendChild(this.descriptionsDiv)
    },
    drawChart: function () {
        AmCharts.AmMap.base.drawChart.call(this);
        var a = this.dataProvider;
        this.dataProvider = a = AmCharts.extend(a, new AmCharts.MapData, !0);
        this.areasSettings = AmCharts.processObject(this.areasSettings, AmCharts.AreasSettings, this.theme);
        this.imagesSettings = AmCharts.processObject(this.imagesSettings, AmCharts.ImagesSettings, this.theme);
        this.linesSettings = AmCharts.processObject(this.linesSettings, AmCharts.LinesSettings, this.theme);
        var b = this.container;
        this.mapContainer && this.mapContainer.remove();
        this.mapContainer = b.set();
        this.graphsSet.push(this.mapContainer);
        var c;
        a.map && (c = AmCharts.maps[a.map]);
        a.mapVar && (c = a.mapVar);
        c ? (this.svgData = c.svg, this.getBounds(), this.buildEverything()) : (a = a.mapURL) && this.loadXml(a);
        this.balloonsSet.toFront()
    },
    drawBg: function () {
        var a = this;
        AmCharts.remove(a.bgSet);
        var b = AmCharts.rect(a.container, a.realWidth,
            a.realHeight, "#000", .001);
        b.click(function () {
            a.handleBackgroundClick()
        });
        a.bgSet = b;
        a.set.push(b)
    },
    buildEverything: function () {
        var a = this;
        if (0 < a.realWidth && 0 < a.realHeight) {
            var b = a.container;
            a.zoomControl = AmCharts.processObject(a.zoomControl, AmCharts.ZoomControl, a.theme);
            a.zoomControl.init(this, b);
            a.drawBg();
            a.buildSVGMap();
            var c = a.smallMap;
            c && (a.smallMap = AmCharts.processObject(a.smallMap, AmCharts.SmallMap, a.theme), c = a.smallMap, c.init(a, b));
            c = a.dataProvider;
            isNaN(c.zoomX) && isNaN(c.zoomY) && isNaN(c.zoomLatitude) &&
            isNaN(c.zoomLongitude) && (a.centerMap ? (c.zoomLatitude = a.coordinateToLatitude(a.mapHeight / 2), c.zoomLongitude = a.coordinateToLongitude(a.mapWidth / 2)) : (c.zoomX = 0, c.zoomY = 0), a.zoomInstantly = !0);
            a.selectObject(a.dataProvider);
            a.processAreas();
            if (c = a.valueLegend)c = AmCharts.processObject(c, AmCharts.ValueLegend, a.theme), a.valueLegend = c, c.init(a, b);
            a.objectList && (a.objectList = AmCharts.processObject(a.objectList, AmCharts.ObjectList), b = a.objectList) && (a.clearObjectList(), b.init(a));
            clearInterval(a.mapInterval);
            a.mapInterval = setInterval(function () {
                a.update.call(a)
            }, AmCharts.updateRate);
            a.dispDUpd();
            a.linkSet.toFront();
            a.chartCreated = !0
        } else a.cleanChart()
    },
    hideGroup: function (a) {
        this.showHideGroup(a, !1)
    },
    showGroup: function (a) {
        this.showHideGroup(a, !0)
    },
    showHideGroup: function (a, b) {
        this.showHideReal(this.imagesProcessor.allObjects, a, b);
        this.showHideReal(this.areasProcessor.allObjects, a, b);
        this.showHideReal(this.linesProcessor.allObjects, a, b)
    },
    showHideReal: function (a, b, c) {
        var d;
        for (d = 0; d < a.length; d++) {
            var f =
                a[d];
            f.groupId == b && (f = f.displayObject) && (c ? f.show() : f.hide())
        }
    },
    update: function () {
        this.zoomControl.update()
    },
    animateMap: function () {
        var a = this;
        a.totalFrames = 1E3 * a.zoomDuration / AmCharts.updateRate;
        a.totalFrames += 1;
        a.frame = 0;
        a.tweenPercent = 0;
        setTimeout(function () {
            a.updateSize.call(a)
        }, AmCharts.updateRate)
    },
    updateSize: function () {
        var a = this, b = a.totalFrames;
        a.preventHover = !0;
        a.frame <= b ? (a.frame++, b = AmCharts.easeOutSine(0, a.frame, 0, 1, b), 1 <= b ? (b = 1, a.preventHover = !1, a.wheelBusy = !1) : setTimeout(function () {
                a.updateSize.call(a)
            },
            AmCharts.updateRate), .8 < b && (a.preventHover = !1)) : (b = 1, a.preventHover = !1, a.wheelBusy = !1);
        a.tweenPercent = b;
        a.rescaleMapAndObjects()
    },
    rescaleMapAndObjects: function () {
        var a = this.initialScale, b = this.initialX, c = this.initialY, d = this.tweenPercent, a = a + (this.finalScale - a) * d;
        this.mapContainer.translate(b + (this.finalX - b) * d, c + (this.finalY - c) * d, a);
        if (this.areasSettings.adjustOutlineThickness)for (b = this.dataProvider.areas, c = 0; c < b.length; c++) {
            var f = b[c], e = f.displayObject;
            e && e.setAttr("stroke-width", f.outlineThicknessReal /
                a)
        }
        this.rescaleObjects();
        this.positionChanged();
        this.updateSmallMap();
        1 == d && (d = {
            type: "zoomCompleted",
            chart: this
        }, this.fire(d.type, d))
    },
    updateSmallMap: function () {
        this.smallMap && this.smallMap.update()
    },
    rescaleObjects: function () {
        var a = this.mapContainer.scale, b = this.imagesProcessor.objectsToResize, c;
        for (c = 0; c < b.length; c++) {
            var d = b[c].image;
            d.translate(d.x, d.y, b[c].scale / a, !0)
        }
        b = this.linesProcessor;
        if (d = b.linesToResize)for (c = 0; c < d.length; c++) {
            var f = d[c];
            f.line.setAttr("stroke-width", f.thickness / a)
        }
        b = b.objectsToResize;
        for (c = 0; c < b.length; c++)d = b[c], d.translate(d.x, d.y, 1 / a)
    },
    handleTouchStart: function (a) {
        this.handleMouseMove(a);
        this.handleMouseDown(a)
    },
    handleTouchEnd: function (a) {
        this.previousDistance = NaN;
        this.handleReleaseOutside(a)
    },
    handleMouseDown: function (a) {
        AmCharts.resetMouseOver();
        this.mouseIsOver = !0;
        if (this.chartCreated && !this.preventHover && (this.dragMap && (this.stopAnimation(), this.isDragging = !0, this.mapContainerClickX = this.mapContainer.x, this.mapContainerClickY = this.mapContainer.y, this.panEventsEnabled || a &&
            a.preventDefault && a.preventDefault()), a || (a = window.event), a.shiftKey && !0 === this.developerMode && this.getDevInfo(), a && a.touches)) {
            var b = this.mouseX, c = this.mouseY, d = a.touches.item(1);
            d && (a = d.pageX - AmCharts.findPosX(this.div), d = d.pageY - AmCharts.findPosY(this.div), this.middleXP = (b + (a - b) / 2) / this.realWidth, this.middleYP = (c + (d - c) / 2) / this.realHeight)
        }
    },
    stopDrag: function () {
        this.isDragging && (this.isDragging = !1)
    },
    handleReleaseOutside: function () {
        if (AmCharts.isModern && !this.preventHover) {
            this.stopDrag();
            var a =
                this.zoomControl;
            a && a.draggerUp();
            this.mapWasDragged = !1;
            var a = this.mapContainer, b = this.mapContainerClickX, c = this.mapContainerClickY;
            isNaN(b) || isNaN(c) || !(2 < Math.abs(a.x - b) || Math.abs(a.y - c)) || (this.mapWasDragged = !0, a = {
                type: "dragCompleted",
                zoomX: this.zoomX(),
                zoomY: this.zoomY(),
                zoomLevel: this.zoomLevel(),
                chart: this
            }, this.fire(a.type, a));
            !this.mouseIsOver || this.mapWasDragged || this.skipClick || (a = {
                type: "click",
                x: this.mouseX,
                y: this.mouseY,
                chart: this
            }, this.fire(a.type, a), this.skipClick = !1);
            this.mapContainerClickY =
                this.mapContainerClickX = NaN;
            this.objectWasClicked = !1;
            this.zoomOnDoubleClick && this.mouseIsOver && (a = (new Date).getTime(), 200 > a - this.previousClickTime && 20 < a - this.previousClickTime && this.doDoubleClickZoom(), this.previousClickTime = a)
        }
    },
    handleTouchMove: function (a) {
        this.handleMouseMove(a)
    },
    resetPinch: function () {
        this.mapWasPinched = !1
    },
    handleMouseMove: function (a) {
        var b = this;
        AmCharts.AmMap.base.handleMouseMove.call(b, a);
        var c = b.previuosMouseX, d = b.previuosMouseY, f = b.mouseX, e = b.mouseY, g = b.zoomControl;
        isNaN(c) &&
        (c = f);
        isNaN(d) && (d = e);
        b.mouse2X = NaN;
        b.mouse2Y = NaN;
        if (a && a.touches) {
            var h = a.touches.item(1);
            h && (b.mouse2X = h.pageX - AmCharts.findPosX(b.div), b.mouse2Y = h.pageY - AmCharts.findPosY(b.div))
        }
        var h = b.mapContainer, k = b.mouse2X, l = b.mouse2Y;
        b.pinchTO && clearTimeout(b.pinchTO);
        b.pinchTO = setTimeout(function () {
            b.resetPinch.call(b)
        }, 1E3);
        if (!isNaN(k)) {
            b.stopDrag();
            a.preventDefault && a.preventDefault();
            var k = Math.sqrt(Math.pow(k - f, 2) + Math.pow(l - e, 2)), m = b.previousDistance, l = Math.max(b.realWidth, b.realHeight);
            5 > Math.abs(m -
                k) && (b.isDragging = !0);
            if (!isNaN(m)) {
                var n = 5 * Math.abs(m - k) / l, l = h.scale, l = AmCharts.fitToBounds(m < k ? l + l * n : l - l * n, g.minZoomLevel, g.maxZoomLevel), g = b.zoomLevel(), r = b.middleXP, m = b.middleYP, n = b.realHeight / b.mapHeight, p = b.realWidth / b.mapWidth, r = (b.zoomX() - r * p) * (l / g) + r * p, m = (b.zoomY() - m * n) * (l / g) + m * n;
                .1 < Math.abs(l - g) && (b.zoomTo(l, r, m, !0), b.mapWasPinched = !0, clearTimeout(b.pinchTO))
            }
            b.previousDistance = k
        }
        b.isDragging && (b.hideBalloon(), b.positionChanged(), h.translate(h.x + (f - c), h.y + (e - d), h.scale), b.updateSmallMap(),
        a && a.preventDefault && a.preventDefault());
        b.previuosMouseX = f;
        b.previuosMouseY = e
    },
    selectObject: function (a) {
        var b = this;
        a || (a = b.dataProvider);
        a.isOver = !1;
        var c = a.linkToObject;
        "string" == typeof c && (c = b.getObjectById(c));
        a.useTargetsZoomValues && c && (a.zoomX = c.zoomX, a.zoomY = c.zoomY, a.zoomLatitude = c.zoomLatitude, a.zoomLongitude = c.zoomLongitude, a.zoomLevel = c.zoomLevel);
        var d = b.selectedObject;
        d && b.returnInitialColor(d);
        b.selectedObject = a;
        var f = !1, e;
        "MapArea" == a.objectType && (a.autoZoomReal && (f = !0), e = b.areasSettings.selectedOutlineColor);
        if (c && !f && ("string" == typeof c && (c = b.getObjectById(c)), isNaN(a.zoomLevel) && isNaN(a.zoomX) && isNaN(a.zoomY))) {
            if (b.extendMapData(c))return;
            b.selectObject(c);
            return
        }
        b.allowMultipleDescriptionWindows || b.closeAllDescriptions();
        clearTimeout(b.selectedObjectTimeOut);
        clearTimeout(b.processObjectsTimeOut);
        c = b.zoomDuration;
        !f && isNaN(a.zoomLevel) && isNaN(a.zoomX) && isNaN(a.zoomY) ? (b.showDescriptionAndGetUrl(), b.processObjects()) : (b.selectedObjectTimeOut = setTimeout(function () {
                b.showDescriptionAndGetUrl.call(b)
            },
            1E3 * c + 200), b.showObjectsAfterZoom ? b.processObjectsTimeOut = setTimeout(function () {
            b.processObjects.call(b)
        }, 1E3 * c + 200) : b.processObjects());
        if (f = a.displayObject) {
            a.bringForwardOnHover && f.toFront();
            f.setAttr("stroke", a.outlineColorReal);
            var g = a.selectedColorReal;
            void 0 !== g && f.setAttr("fill", g);
            void 0 !== e && f.setAttr("stroke", e);
            if ("MapLine" == a.objectType) {
                var h = a.lineSvg;
                h && h.setAttr("stroke", g);
                var k = a.arrowSvg;
                k && (k.setAttr("fill", g), k.setAttr("stroke", g))
            }
            if (c = a.imageLabel) {
                var l = a.selectedLabelColorReal;
                void 0 !== l && c.setAttr("fill", l)
            }
            a.selectable || (f.setAttr("cursor", "default"), c && c.setAttr("cursor", "default"))
        } else b.returnInitialColorReal(a);
        if (f = a.groupId)for (c = b.getGroupById(f), l = 0; l < c.length; l++)if (k = c[l], k.isOver = !1, f = k.displayObject)if (h = k.selectedColorReal, void 0 !== e && f.setAttr("stroke", e), void 0 !== h ? f.setAttr("fill", h) : b.returnInitialColor(k), "MapLine" == k.objectType && ((h = k.lineSvg) && h.setAttr("stroke", g), k = k.arrowSvg))k.setAttr("fill", g), k.setAttr("stroke", g);
        b.zoomToSelectedObject();
        d !=
        a && (a = {
            type: "selectedObjectChanged",
            chart: b
        }, b.fire(a.type, a))
    },
    returnInitialColor: function (a, b) {
        this.returnInitialColorReal(a);
        b && (a.isFirst = !1);
        if (this.selectedObject.bringForwardOnHover) {
            var c = this.selectedObject.displayObject;
            c && c.toFront()
        }
        if (c = a.groupId) {
            var c = this.getGroupById(c), d;
            for (d = 0; d < c.length; d++)this.returnInitialColorReal(c[d]), b && (c[d].isFirst = !1)
        }
    },
    closeAllDescriptions: function () {
        this.descriptionsDiv.innerHTML = ""
    },
    returnInitialColorReal: function (a) {
        a.isOver = !1;
        var b = a.displayObject;
        if (b) {
            b.toPrevious();
            if ("MapImage" == a.objectType) {
                var c = a.tempScale;
                isNaN(c) || b.translate(b.x, b.y, c, !0);
                a.tempScale = NaN
            }
            c = a.colorReal;
            if ("MapLine" == a.objectType) {
                var d = a.lineSvg;
                d && d.setAttr("stroke", c);
                if (d = a.arrowSvg)d.setAttr("fill", c), d.setAttr("stroke", c)
            }
            a.showAsSelected && (c = a.selectedColorReal);
            "bubble" == a.type && (c = void 0);
            void 0 !== c && b.setAttr("fill", c);
            (d = a.image) && d.setAttr("fill", c);
            b.setAttr("stroke", a.outlineColorReal);
            "MapArea" == a.objectType && (c = 1, this.areasSettings.adjustOutlineThickness &&
            (c = this.zoomLevel()), b.setAttr("fill-opacity", a.alphaReal), b.setAttr("stroke-opacity", a.outlineAlphaReal), b.setAttr("stroke-width", a.outlineThicknessReal / c));
            (c = a.pattern) && b.pattern(c, this.mapScale);
            (b = a.imageLabel) && !a.labelInactive && b.setAttr("fill", a.labelColorReal)
        }
    },
    zoomToRectangle: function (a, b, c, d) {
        var f = this.realWidth, e = this.realHeight, g = this.mapSet.scale, h = this.zoomControl, f = AmCharts.fitToBounds(c / f > d / e ? .8 * f / (c * g) : .8 * e / (d * g), h.minZoomLevel, h.maxZoomLevel);
        this.zoomToMapXY(f, (a + c / 2) * g, (b +
            d / 2) * g)
    },
    zoomToLatLongRectangle: function (a, b, c, d) {
        var f = this.dataProvider, e = this.zoomControl, g = Math.abs(c - a), h = Math.abs(b - d), k = Math.abs(f.rightLongitude - f.leftLongitude), f = Math.abs(f.topLatitude - f.bottomLatitude), e = AmCharts.fitToBounds(g / k > h / f ? .8 * k / g : .8 * f / h, e.minZoomLevel, e.maxZoomLevel);
        this.zoomToLongLat(e, a + (c - a) / 2, d + (b - d) / 2)
    },
    getGroupById: function (a) {
        var b = [];
        this.getGroup(this.imagesProcessor.allObjects, a, b);
        this.getGroup(this.linesProcessor.allObjects, a, b);
        this.getGroup(this.areasProcessor.allObjects,
            a, b);
        return b
    },
    zoomToGroup: function (a) {
        a = "object" == typeof a ? a : this.getGroupById(a);
        var b, c, d, f, e;
        for (e = 0; e < a.length; e++) {
            var g = a[e].displayObject.getBBox(), h = g.y, k = g.y + g.height, l = g.x, g = g.x + g.width;
            if (h < b || isNaN(b))b = h;
            if (k > f || isNaN(f))f = k;
            if (l < c || isNaN(c))c = l;
            if (g > d || isNaN(d))d = g
        }
        a = this.mapSet.getBBox();
        c -= a.x;
        d -= a.x;
        f -= a.y;
        b -= a.y;
        this.zoomToRectangle(c, b, d - c, f - b)
    },
    getGroup: function (a, b, c) {
        if (a) {
            var d;
            for (d = 0; d < a.length; d++) {
                var f = a[d];
                f.groupId == b && c.push(f)
            }
        }
    },
    zoomToStageXY: function (a, b, c, d) {
        if (!this.objectWasClicked) {
            var f =
                this.zoomControl;
            a = AmCharts.fitToBounds(a, f.minZoomLevel, f.maxZoomLevel);
            f = this.zoomLevel();
            c = this.coordinateToLatitude((c - this.mapContainer.y) / f);
            b = this.coordinateToLongitude((b - this.mapContainer.x) / f);
            this.zoomToLongLat(a, b, c, d)
        }
    },
    zoomToLongLat: function (a, b, c, d) {
        b = this.longitudeToCoordinate(b);
        c = this.latitudeToCoordinate(c);
        this.zoomToMapXY(a, b, c, d)
    },
    zoomToMapXY: function (a, b, c, d) {
        var f = this.mapWidth, e = this.mapHeight;
        this.zoomTo(a, -(b / f) * a + this.realWidth / f / 2, -(c / e) * a + this.realHeight / e / 2, d)
    },
    zoomToObject: function (a) {
        var b =
            a.zoomLatitude, c = a.zoomLongitude, d = a.zoomLevel, f = this.zoomInstantly, e = a.zoomX, g = a.zoomY, h = this.realWidth, k = this.realHeight;
        isNaN(d) || (isNaN(b) || isNaN(c) ? this.zoomTo(d, e, g, f) : this.zoomToLongLat(d, c, b, f));
        this.zoomInstantly = !1;
        "MapImage" == a.objectType && isNaN(a.zoomX) && isNaN(a.zoomY) && isNaN(a.zoomLatitude) && isNaN(a.zoomLongitude) && !isNaN(a.latitude) && !isNaN(a.longitude) && this.zoomToLongLat(a.zoomLevel, a.longitude, a.latitude);
        "MapArea" == a.objectType && (e = a.displayObject.getBBox(), b = this.mapScale, c = e.x *
            b, d = e.y * b, f = e.width * b, e = e.height * b, h = a.autoZoomReal && isNaN(a.zoomLevel) ? f / h > e / k ? .8 * h / f : .8 * k / e : a.zoomLevel, k = this.zoomControl, h = AmCharts.fitToBounds(h, k.minZoomLevel, k.maxZoomLevel), isNaN(a.zoomX) && isNaN(a.zoomY) && isNaN(a.zoomLatitude) && isNaN(a.zoomLongitude) && (a = this.mapSet.getBBox(), this.zoomToMapXY(h, -a.x * b + c + f / 2, -a.y * b + d + e / 2)))
    },
    zoomToSelectedObject: function () {
        this.zoomToObject(this.selectedObject)
    },
    zoomTo: function (a, b, c, d) {
        var f = this.zoomControl;
        a = AmCharts.fitToBounds(a, f.minZoomLevel, f.maxZoomLevel);
        f = this.zoomLevel();
        isNaN(b) && (b = this.realWidth / this.mapWidth, b = (this.zoomX() - .5 * b) * (a / f) + .5 * b);
        isNaN(c) && (c = this.realHeight / this.mapHeight, c = (this.zoomY() - .5 * c) * (a / f) + .5 * c);
        this.stopAnimation();
        isNaN(a) || (f = this.mapContainer, this.initialX = f.x, this.initialY = f.y, this.initialScale = f.scale, this.finalX = this.mapWidth * b, this.finalY = this.mapHeight * c, this.finalScale = a, this.finalX != this.initialX || this.finalY != this.initialY || this.finalScale != this.initialScale ? d ? (this.tweenPercent = 1, this.rescaleMapAndObjects(),
            this.wheelBusy = !1) : this.animateMap() : this.wheelBusy = !1)
    },
    loadXml: function (a) {
        var b;
        b = window.XMLHttpRequest ? new XMLHttpRequest : new ActiveXObject("Microsoft.XMLHTTP");
        b.overrideMimeType && b.overrideMimeType("text/xml");
        b.open("GET", a, !1);
        b.send();
        this.parseXMLObject(b.responseXML);
        this.svgData && this.buildEverything()
    },
    stopAnimation: function () {
        this.frame = this.totalFrames
    },
    processObjects: function () {
        var a = this.container, b = this.stageImagesContainer;
        b && b.remove();
        this.stageImagesContainer = b = a.set();
        this.trendLinesSet.push(b);
        var c = this.stageLinesContainer;
        c && c.remove();
        this.stageLinesContainer = c = a.set();
        this.trendLinesSet.push(c);
        var d = this.mapImagesContainer;
        d && d.remove();
        this.mapImagesContainer = d = a.set();
        this.mapContainer.push(d);
        var f = this.mapLinesContainer;
        f && f.remove();
        this.mapLinesContainer = f = a.set();
        this.mapContainer.push(f);
        this.linesAboveImages ? (d.toFront(), b.toFront(), f.toFront(), c.toFront()) : (f.toFront(), c.toFront(), d.toFront(), b.toFront());
        if (a = this.selectedObject)this.imagesProcessor.reset(), this.linesProcessor.reset(),
            this.linesAboveImages ? (this.imagesProcessor.process(a), this.linesProcessor.process(a)) : (this.linesProcessor.process(a), this.imagesProcessor.process(a));
        this.rescaleObjects()
    },
    processAreas: function () {
        this.areasProcessor.process(this.dataProvider)
    },
    buildSVGMap: function () {
        var a = this.svgData.g.path, b = this.container, c = b.set();
        void 0 === a.length && (a = [a]);
        var d;
        for (d = 0; d < a.length; d++) {
            var f = a[d], e = f.d, g = f.title;
            f.titleTr && (g = f.titleTr);
            e = b.path(e);
            e.id = f.id;
            this.svgAreasById[f.id] = {
                area: e,
                title: g,
                className: f["class"]
            };
            this.svgAreas.push(e);
            c.push(e)
        }
        this.mapSet = c;
        this.mapContainer.push(c);
        this.resizeMap()
    },
    addObjectEventListeners: function (a, b) {
        var c = this;
        a.mouseup(function (a) {
            c.clickMapObject(b, a)
        }).mouseover(function (a) {
            c.rollOverMapObject(b, !0, a)
        }).mouseout(function (a) {
            c.rollOutMapObject(b, a)
        }).touchend(function (a) {
            c.clickMapObject(b, a)
        }).touchstart(function (a) {
            c.rollOverMapObject(b, !0, a)
        })
    },
    checkIfSelected: function (a) {
        var b = this.selectedObject;
        if (b == a)return !0;
        if (b = b.groupId) {
            var b = this.getGroupById(b), c;
            for (c =
                     0; c < b.length; c++)if (b[c] == a)return !0
        }
        return !1
    },
    clearMap: function () {
        this.chartDiv.innerHTML = "";
        this.clearObjectList()
    },
    clearObjectList: function () {
        var a = this.objectList;
        a && a.div && (a.div.innerHTML = "")
    },
    checkIfLast: function (a) {
        if (a) {
            var b = a.parentNode;
            if (b && b.lastChild == a)return !0
        }
        return !1
    },
    showAsRolledOver: function (a) {
        var b = a.displayObject;
        if (!a.showAsSelected && b && !a.isOver) {
            b.node.onmouseout = function () {
            };
            b.node.onmouseover = function () {
            };
            b.node.onclick = function () {
            };
            !a.isFirst && a.bringForwardOnHover &&
            (b.toFront(), a.isFirst = !0);
            var c = a.rollOverColorReal, d;
            if (void 0 != c)if ("MapImage" == a.objectType)(d = a.image) && d.setAttr("fill", c); else if ("MapLine" == a.objectType) {
                if ((d = a.lineSvg) && d.setAttr("stroke", c), d = a.arrowSvg)d.setAttr("fill", c), d.setAttr("stroke", c)
            } else b.setAttr("fill", c);
            (c = a.imageLabel) && !a.labelInactive && (d = a.labelRollOverColorReal, void 0 != d && c.setAttr("fill", d));
            c = a.rollOverOutlineColorReal;
            void 0 != c && ("MapImage" == a.objectType ? (d = a.image) && d.setAttr("stroke", c) : b.setAttr("stroke", c));
            if ("MapArea" == a.objectType) {
                c = this.areasSettings;
                d = a.rollOverAlphaReal;
                isNaN(d) || b.setAttr("fill-opacity", d);
                d = c.rollOverOutlineAlpha;
                isNaN(d) || b.setAttr("stroke-opacity", d);
                d = 1;
                this.areasSettings.adjustOutlineThickness && (d = this.zoomLevel());
                var f = c.rollOverOutlineThickness;
                isNaN(f) || b.setAttr("stroke-width", f / d);
                (c = c.rollOverPattern) && b.pattern(c, this.mapScale)
            }
            "MapImage" == a.objectType && (c = a.rollOverScaleReal, isNaN(c) || 1 == c || (a.tempScale = b.scale, b.translate(b.x, b.y, b.scale * c, !0)));
            this.useHandCursorOnClickableOjects &&
            this.checkIfClickable(a) && b.setAttr("cursor", "pointer");
            this.addObjectEventListeners(b, a);
            a.isOver = !0
        }
    },
    rollOverMapObject: function (a, b, c) {
        if (this.chartCreated) {
            this.handleMouseMove();
            var d = this.previouslyHovered;
            d && d != a ? (!1 === this.checkIfSelected(d) && (this.returnInitialColor(d, !0), this.previouslyHovered = null), this.hideBalloon()) : clearTimeout(this.hoverInt);
            if (!this.preventHover) {
                if (!1 === this.checkIfSelected(a)) {
                    if (d = a.groupId) {
                        var d = this.getGroupById(d), f;
                        for (f = 0; f < d.length; f++)d[f] != a && this.showAsRolledOver(d[f])
                    }
                    this.showAsRolledOver(a)
                } else(d =
                    a.displayObject) && (this.allowClickOnSelectedObject ? d.setAttr("cursor", "pointer") : d.setAttr("cursor", "default"));
                if (this.showDescriptionOnHover)this.showDescription(a); else if ((this.showBalloonOnSelectedObject || !this.checkIfSelected(a)) && !1 !== b && (f = this.balloon, b = a.colorReal, d = "", void 0 !== b && this.useObjectColorForBalloon || (b = f.fillColor), (f = a.balloonTextReal) && (d = this.formatString(f, a)), this.balloonLabelFunction && (d = this.balloonLabelFunction(a, this)), d && "" !== d)) {
                    var e, g;
                    "MapArea" == a.objectType && (g =
                        this.getAreaCenterLatitude(a), e = this.getAreaCenterLongitude(a), g = this.latitudeToY(g), e = this.longitudeToX(e));
                    this.showBalloon(d, b, this.mouseIsOver, e, g)
                }
                c = {
                    type: "rollOverMapObject",
                    mapObject: a,
                    chart: this,
                    event: c
                };
                this.fire(c.type, c);
                this.previouslyHovered = a
            }
        }
    },
    longitudeToX: function (a) {
        return this.longitudeToCoordinate(a) * this.zoomLevel() + this.mapContainer.x
    },
    latitudeToY: function (a) {
        return this.latitudeToCoordinate(a) * this.zoomLevel() + this.mapContainer.y
    },
    rollOutMapObject: function (a, b) {
        this.hideBalloon();
        if (this.chartCreated && a.isOver) {
            this.checkIfSelected(a) || this.returnInitialColor(a);
            var c = {
                type: "rollOutMapObject",
                mapObject: a,
                chart: this,
                event: b
            };
            this.fire(c.type, c)
        }
    },
    formatString: function (a, b) {
        var c = this.nf, d = this.pf, f = b.title;
        b.titleTr && (f = b.titleTr);
        void 0 == f && (f = "");
        var e = b.value, e = isNaN(e) ? "" : AmCharts.formatNumber(e, c), c = b.percents, c = isNaN(c) ? "" : AmCharts.formatNumber(c, d), d = b.description;
        void 0 == d && (d = "");
        var g = b.customData;
        void 0 == g && (g = "");
        return a = AmCharts.massReplace(a, {
            "[[title]]": f,
            "[[value]]": e,
            "[[percent]]": c,
            "[[description]]": d,
            "[[customData]]": g
        })
    },
    clickMapObject: function (a, b) {
        this.hideBalloon();
        if (this.chartCreated && !this.preventHover && !this.mapWasDragged && this.checkIfClickable(a) && !this.mapWasPinched) {
            this.selectObject(a);
            var c = {
                type: "clickMapObject",
                mapObject: a,
                chart: this,
                event: b
            };
            this.fire(c.type, c);
            this.objectWasClicked = !0
        }
    },
    checkIfClickable: function (a) {
        var b = this.allowClickOnSelectedObject;
        return this.selectedObject == a && b ? !0 : this.selectedObject != a || b ? !0 === a.selectable || "MapArea" ==
        a.objectType && a.autoZoomReal || a.url || a.linkToObject || 0 < a.images.length || 0 < a.lines.length || !isNaN(a.zoomLevel) || !isNaN(a.zoomX) || !isNaN(a.zoomY) || a.description ? !0 : !1 : !1
    },
    handleResize: function () {
        (AmCharts.isPercents(this.width) || AmCharts.isPercents(this.height)) && this.invalidateSize();
        this.renderFix()
    },
    resizeMap: function () {
        var a = this.mapSet;
        if (a)if (this.fitMapToContainer) {
            var b = a.getBBox(), c = this.realWidth, d = this.realHeight, f = b.width, e = b.height, c = f / c > e / d ? c / f : d / e;
            a.translate(-b.x * c, -b.y * c, c);
            this.mapScale =
                c;
            this.mapHeight = e * c;
            this.mapWidth = f * c
        } else b = group.transform.match(/([\-]?[\d.]+)/g), a.translate(b[0], b[1], b[2])
    },
    zoomIn: function () {
        this.skipClick = !0;
        var a = this.zoomLevel() * this.zoomControl.zoomFactor;
        this.zoomTo(a)
    },
    zoomOut: function () {
        this.skipClick = !0;
        var a = this.zoomLevel() / this.zoomControl.zoomFactor;
        this.zoomTo(a)
    },
    moveLeft: function () {
        this.skipClick = !0;
        var a = this.zoomX() + this.zoomControl.panStepSize;
        this.zoomTo(this.zoomLevel(), a, this.zoomY())
    },
    moveRight: function () {
        this.skipClick = !0;
        var a = this.zoomX() -
            this.zoomControl.panStepSize;
        this.zoomTo(this.zoomLevel(), a, this.zoomY())
    },
    moveUp: function () {
        this.skipClick = !0;
        var a = this.zoomY() + this.zoomControl.panStepSize;
        this.zoomTo(this.zoomLevel(), this.zoomX(), a)
    },
    moveDown: function () {
        this.skipClick = !0;
        var a = this.zoomY() - this.zoomControl.panStepSize;
        this.zoomTo(this.zoomLevel(), this.zoomX(), a)
    },
    zoomX: function () {
        return this.mapSet ? Math.round(1E4 * this.mapContainer.x / this.mapWidth) / 1E4 : NaN
    },
    zoomY: function () {
        return this.mapSet ? Math.round(1E4 * this.mapContainer.y /
            this.mapHeight) / 1E4 : NaN
    },
    goHome: function () {
        this.selectObject(this.dataProvider);
        var a = {
            type: "homeButtonClicked",
            chart: this
        };
        this.fire(a.type, a)
    },
    zoomLevel: function () {
        return Math.round(1E5 * this.mapContainer.scale) / 1E5
    },
    showDescriptionAndGetUrl: function () {
        var a = this.selectedObject;
        if (a) {
            this.showDescription();
            var b = a.url;
            if (b)AmCharts.getURL(b, a.urlTarget); else if (b = a.linkToObject) {
                if ("string" == typeof b) {
                    var c = this.getObjectById(b);
                    if (c) {
                        this.selectObject(c);
                        return
                    }
                }
                b && a.passZoomValuesToTarget && (b.zoomLatitude =
                    this.zoomLatitude(), b.zoomLongitude = this.zoomLongitude(), b.zoomLevel = this.zoomLevel());
                this.extendMapData(b) || this.selectObject(b)
            }
        }
    },
    extendMapData: function (a) {
        var b = a.objectType;
        if ("MapImage" != b && "MapArea" != b && "MapLine" != b)return AmCharts.extend(a, new AmCharts.MapData, !0), this.dataProvider = a, this.zoomInstantly = !0, this.validateData(), !0
    },
    showDescription: function (a) {
        a || (a = this.selectedObject);
        this.allowMultipleDescriptionWindows || this.closeAllDescriptions();
        if (a.description) {
            var b = a.descriptionWindow;
            b && b.close();
            b = new AmCharts.DescriptionWindow;
            a.descriptionWindow = b;
            var c = a.descriptionWindowWidth, d = a.descriptionWindowHeight, f = a.descriptionWindowLeft, e = a.descriptionWindowTop, g = a.descriptionWindowRight, h = a.descriptionWindowBottom;
            isNaN(g) || (f = this.realWidth - g);
            isNaN(h) || (e = this.realHeight - h);
            var k = a.descriptionWindowX;
            isNaN(k) || (f = k);
            k = a.descriptionWindowY;
            isNaN(k) || (e = k);
            isNaN(f) && (f = this.mouseX, f = f > this.realWidth / 2 ? f - c - 20 : f + 20);
            isNaN(e) && (e = this.mouseY);
            b.maxHeight = d;
            k = a.title;
            a.titleTr && (k =
                a.titleTr);
            b.show(this, this.descriptionsDiv, a.description, k);
            a = b.div.style;
            a.position = "absolute";
            a.width = c + "px";
            a.maxHeight = d + "px";
            isNaN(h) || (e -= b.div.offsetHeight);
            isNaN(g) || (f -= b.div.offsetWidth);
            a.left = f + "px";
            a.top = e + "px"
        }
    },
    parseXMLObject: function (a) {
        var b = {root: {}};
        this.parseXMLNode(b, "root", a);
        this.svgData = b.root.svg;
        this.getBounds()
    },
    getBounds: function () {
        var a = this.dataProvider;
        try {
            var b = this.svgData.defs["amcharts:ammap"];
            a.leftLongitude = Number(b.leftLongitude);
            a.rightLongitude = Number(b.rightLongitude);
            a.topLatitude = Number(b.topLatitude);
            a.bottomLatitude = Number(b.bottomLatitude);
            a.projection = b.projection;
            var c = b.wrappedLongitudes;
            c && (a.rightLongitude += 360);
            a.wrappedLongitudes = c
        } catch (d) {
        }
    },
    recalcLongitude: function (a) {
        var b = this.dataProvider.wrappedLongitudes;
        return void 0 != a && b ? a < this.dataProvider.leftLongitude ? Number(a) + 360 : a : a
    },
    latitudeToCoordinate: function (a) {
        var b, c = this.dataProvider;
        if (this.mapSet) {
            b = c.topLatitude;
            var d = c.bottomLatitude;
            "mercator" == c.projection && (a = this.mercatorLatitudeToCoordinate(a),
                b = this.mercatorLatitudeToCoordinate(b), d = this.mercatorLatitudeToCoordinate(d));
            b = (a - b) / (d - b) * this.mapHeight
        }
        return b
    },
    longitudeToCoordinate: function (a) {
        a = this.recalcLongitude(a);
        var b, c = this.dataProvider;
        this.mapSet && (b = c.leftLongitude, b = (a - b) / (c.rightLongitude - b) * this.mapWidth);
        return b
    },
    mercatorLatitudeToCoordinate: function (a) {
        89.5 < a && (a = 89.5);
        -89.5 > a && (a = -89.5);
        a = AmCharts.degreesToRadians(a);
        a = .5 * Math.log((1 + Math.sin(a)) / (1 - Math.sin(a)));
        return AmCharts.radiansToDegrees(a / 2)
    },
    zoomLatitude: function () {
        return this.coordinateToLatitude((-this.mapContainer.y +
            this.previousHeight / 2) / this.zoomLevel())
    },
    zoomLongitude: function () {
        return this.coordinateToLongitude((-this.mapContainer.x + this.previousWidth / 2) / this.zoomLevel())
    },
    getAreaCenterLatitude: function (a) {
        a = a.displayObject.getBBox();
        var b = this.mapScale;
        a = -this.mapSet.getBBox().y * b + (a.y + a.height / 2) * b;
        return this.coordinateToLatitude(a)
    },
    getAreaCenterLongitude: function (a) {
        a = a.displayObject.getBBox();
        var b = this.mapScale;
        a = -this.mapSet.getBBox().x * b + (a.x + a.width / 2) * b;
        return this.coordinateToLongitude(a)
    },
    coordinateToLatitude: function (a) {
        var b;
        if (this.mapSet) {
            var c = this.dataProvider, d = c.bottomLatitude, f = c.topLatitude;
            b = this.mapHeight;
            "mercator" == c.projection ? (c = this.mercatorLatitudeToCoordinate(d), f = this.mercatorLatitudeToCoordinate(f), a = 2 * Math.atan(Math.exp(2 * (a * (c - f) / b + f) * Math.PI / 180)) - .5 * Math.PI, b = AmCharts.radiansToDegrees(a)) : b = a / b * (d - f) + f
        }
        return Math.round(1E6 * b) / 1E6
    },
    coordinateToLongitude: function (a) {
        var b, c = this.dataProvider;
        this.mapSet && (b = a / this.mapWidth * (c.rightLongitude - c.leftLongitude) + c.leftLongitude);
        return Math.round(1E6 *
                b) / 1E6
    },
    milesToPixels: function (a) {
        var b = this.dataProvider;
        return this.mapWidth / (b.rightLongitude - b.leftLongitude) * a / 69.172
    },
    kilometersToPixels: function (a) {
        var b = this.dataProvider;
        return this.mapWidth / (b.rightLongitude - b.leftLongitude) * a / 111.325
    },
    handleBackgroundClick: function (a) {
        if (this.backgroundZoomsToTop && !this.mapWasDragged) {
            var b = this.dataProvider;
            if (this.checkIfClickable(b))this.clickMapObject(b); else {
                a = b.zoomX;
                var c = b.zoomY, d = b.zoomLongitude, f = b.zoomLatitude, b = b.zoomLevel;
                isNaN(a) || isNaN(c) ||
                this.zoomTo(b, a, c);
                isNaN(d) || isNaN(f) || this.zoomToLongLat(b, d, f, !0)
            }
        }
    },
    parseXMLNode: function (a, b, c, d) {
        void 0 === d && (d = "");
        var f, e, g;
        if (c) {
            var h = c.childNodes.length;
            for (f = 0; f < h; f++) {
                e = c.childNodes[f];
                var k = e.nodeName, l = e.nodeValue ? this.trim(e.nodeValue) : "", m = !1;
                e.attributes && 0 < e.attributes.length && (m = !0);
                if (0 !== e.childNodes.length || "" !== l || !1 !== m)if (3 == e.nodeType || 4 == e.nodeType) {
                    if ("" !== l) {
                        e = 0;
                        for (g in a[b])a[b].hasOwnProperty(g) && e++;
                        e ? a[b]["#text"] = l : a[b] = l
                    }
                } else if (1 == e.nodeType) {
                    var n;
                    void 0 !==
                    a[b][k] ? void 0 === a[b][k].length ? (n = a[b][k], a[b][k] = [], a[b][k].push(n), a[b][k].push({}), n = a[b][k][1]) : "object" == typeof a[b][k] && (a[b][k].push({}), n = a[b][k][a[b][k].length - 1]) : (a[b][k] = {}, n = a[b][k]);
                    if (e.attributes && e.attributes.length)for (l = 0; l < e.attributes.length; l++)n[e.attributes[l].name] = e.attributes[l].value;
                    void 0 !== a[b][k].length ? this.parseXMLNode(a[b][k], a[b][k].length - 1, e, d + "  ") : this.parseXMLNode(a[b], k, e, d + "  ")
                }
            }
            e = 0;
            c = "";
            for (g in a[b])"#text" == g ? c = a[b][g] : e++;
            0 === e && void 0 === a[b].length &&
            (a[b] = c)
        }
    },
    doDoubleClickZoom: function () {
        if (!this.mapWasDragged) {
            var a = this.zoomLevel() * this.zoomControl.zoomFactor;
            this.zoomToStageXY(a, this.mouseX, this.mouseY)
        }
    },
    getDevInfo: function () {
        var a = this.zoomLevel(), a = {
            chart: this,
            type: "writeDevInfo",
            zoomLevel: a,
            zoomX: this.zoomX(),
            zoomY: this.zoomY(),
            zoomLatitude: this.zoomLatitude(),
            zoomLongitude: this.zoomLongitude(),
            latitude: this.coordinateToLatitude((this.mouseY - this.mapContainer.y) / a),
            longitude: this.coordinateToLongitude((this.mouseX - this.mapContainer.x) /
                a),
            left: this.mouseX,
            top: this.mouseY,
            right: this.realWidth - this.mouseX,
            bottom: this.realHeight - this.mouseY,
            percentLeft: Math.round(this.mouseX / this.realWidth * 100) + "%",
            percentTop: Math.round(this.mouseY / this.realHeight * 100) + "%",
            percentRight: Math.round((this.realWidth - this.mouseX) / this.realWidth * 100) + "%",
            percentBottom: Math.round((this.realHeight - this.mouseY) / this.realHeight * 100) + "%"
        }, b = "zoomLevel:" + a.zoomLevel + ", zoomLongitude:" + a.zoomLongitude + ", zoomLatitude:" + a.zoomLatitude + "\n", b = b + ("zoomX:" + a.zoomX +
            ", zoomY:" + a.zoomY + "\n"), b = b + ("latitude:" + a.latitude + ", longitude:" + a.longitude + "\n"), b = b + ("left:" + a.left + ", top:" + a.top + "\n"), b = b + ("right:" + a.right + ", bottom:" + a.bottom + "\n"), b = b + ('left:"' + a.percentLeft + '", top:"' + a.percentTop + '"\n'), b = b + ('right:"' + a.percentRight + '", bottom:"' + a.percentBottom + '"\n');
        a.str = b;
        this.fire(a.type, a);
        return a
    },
    getXY: function (a, b, c) {
        void 0 !== a && (-1 != String(a).indexOf("%") ? (a = Number(a.split("%").join("")), c && (a = 100 - a), a = Number(a) * b / 100) : c && (a = b - a));
        return a
    },
    getObjectById: function (a) {
        var b =
            this.dataProvider;
        if (b.areas) {
            var c = this.getObject(a, b.areas);
            if (c)return c
        }
        if (c = this.getObject(a, b.images))return c;
        if (a = this.getObject(a, b.lines))return a
    },
    getObject: function (a, b) {
        if (b) {
            var c;
            for (c = 0; c < b.length; c++) {
                var d = b[c];
                if (d.id == a)return d;
                if (d.areas) {
                    var f = this.getObject(a, d.areas);
                    if (f)return f
                }
                if (f = this.getObject(a, d.images))return f;
                if (d = this.getObject(a, d.lines))return d
            }
        }
    },
    parseData: function () {
        var a = this.dataProvider;
        this.processObject(a.areas, a, "area");
        this.processObject(a.images,
            a, "image");
        this.processObject(a.lines, a, "line")
    },
    processObject: function (a, b, c) {
        if (a) {
            var d;
            for (d = 0; d < a.length; d++) {
                var f = a[d];
                f.parentObject = b;
                "area" == c && AmCharts.extend(f, new AmCharts.MapArea(this.theme), !0);
                "image" == c && (f = AmCharts.extend(f, new AmCharts.MapImage(this.theme), !0));
                "line" == c && (f = AmCharts.extend(f, new AmCharts.MapLine(this.theme), !0));
                a[d] = f;
                f.areas && this.processObject(f.areas, f, "area");
                f.images && this.processObject(f.images, f, "image");
                f.lines && this.processObject(f.lines, f, "line")
            }
        }
    },
    positionChanged: function () {
        var a = {
            type: "positionChanged",
            zoomX: this.zoomX(),
            zoomY: this.zoomY(),
            zoomLevel: this.zoomLevel(),
            chart: this
        };
        this.fire(a.type, a)
    },
    getX: function (a, b) {
        return this.getXY(a, this.realWidth, b)
    },
    getY: function (a, b) {
        return this.getXY(a, this.realHeight, b)
    },
    trim: function (a) {
        if (a) {
            var b;
            for (b = 0; b < a.length; b++)if (-1 === " \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(b))) {
                a = a.substring(b);
                break
            }
            for (b = a.length -
                1; 0 <= b; b--)if (-1 === " \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(b))) {
                a = a.substring(0, b + 1);
                break
            }
            return -1 === " \n\r\t\f\x0B\u00a0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000".indexOf(a.charAt(0)) ? a : ""
        }
    },
    destroy: function () {
        var a = this.svgAreas;
        if (a)for (var b = 0; b < a.length; b++);
        AmCharts.AmMap.base.destroy.call(this)
    }
});
AmCharts.ZoomControl = AmCharts.Class({
    construct: function (a) {
        this.cname = "ZoomControl";
        this.panStepSize = .1;
        this.zoomFactor = 2;
        this.maxZoomLevel = 64;
        this.minZoomLevel = 1;
        this.zoomControlEnabled = this.panControlEnabled = !0;
        this.buttonRollOverColor = "#CC0000";
        this.buttonFillColor = "#990000";
        this.buttonFillAlpha = 1;
        this.buttonBorderColor = "#FFFFFF";
        this.buttonIconAlpha = this.buttonBorderThickness = this.buttonBorderAlpha = 1;
        this.gridColor = "#FFFFFF";
        this.homeIconFile = "homeIcon.gif";
        this.gridBackgroundColor = "#000000";
        this.gridBackgroundAlpha = .15;
        this.gridAlpha = 1;
        this.buttonSize = 18;
        this.iconSize = 11;
        this.buttonCornerRadius = 0;
        this.gridHeight = 150;
        this.top = this.left = 10;
        AmCharts.applyTheme(this, a, this.cname)
    },
    init: function (a, b) {
        var c = this;
        c.chart = a;
        AmCharts.remove(c.set);
        var d = b.set(), f = c.buttonSize, e = c.zoomControlEnabled, g = c.panControlEnabled, h = c.buttonFillColor, k = c.buttonFillAlpha, l = c.buttonBorderThickness, m = c.buttonBorderColor, n = c.buttonBorderAlpha, r = c.buttonCornerRadius, p = c.buttonRollOverColor, v = c.gridHeight, x =
            c.zoomFactor, t = c.minZoomLevel, z = c.maxZoomLevel, A = c.buttonIconAlpha, w = a.getX(c.left), s = a.getY(c.top);
        isNaN(c.right) || (w = a.getX(c.right, !0), w = g ? w - 3 * f : w - f);
        isNaN(c.bottom) || (s = a.getY(c.bottom, !0), e && (s -= v + 3 * f), s = g ? s - 3 * f : s + f);
        d.translate(w, s);
        c.previousDY = NaN;
        var u;
        if (e) {
            u = b.set();
            d.push(u);
            c.set = d;
            c.zoomSet = u;
            s = AmCharts.rect(b, f + 6, v + 2 * f + 6, c.gridBackgroundColor, c.gridBackgroundAlpha, 0, 0, 0, 4);
            s.translate(-3, -3);
            s.mouseup(function () {
                c.handleBgUp()
            });
            u.push(s);
            s = new AmCharts.SimpleButton;
            s.setIcon(a.pathToImages +
                "plus.gif", c.iconSize);
            s.setClickHandler(a.zoomIn, a);
            s.init(b, f, f, h, k, l, m, n, r, p, A);
            u.push(s.set);
            s = new AmCharts.SimpleButton;
            s.setIcon(a.pathToImages + "minus.gif", c.iconSize);
            s.setClickHandler(a.zoomOut, a);
            s.init(b, f, f, h, k, l, m, n, r, p, A);
            s.set.translate(0, v + f);
            u.push(s.set);
            var w = Math.log(z / t) / Math.log(x) + 1, e = v / w, q;
            for (q = 1; q < w; q++)s = f + q * e, s = AmCharts.line(b, [1, f - 2], [s, s], c.gridColor, c.gridAlpha, 1), u.push(s);
            s = new AmCharts.SimpleButton;
            s.setDownHandler(c.draggerDown, c);
            s.setClickHandler(c.draggerUp, c);
            s.init(b, f, e, h, k, l, m, n, r, p);
            u.push(s.set);
            c.dragger = s.set;
            c.previousY = NaN;
            v -= e;
            t = Math.log(t / 100) / Math.log(x);
            x = Math.log(z / 100) / Math.log(x);
            c.realStepSize = v / (x - t);
            c.realGridHeight = v;
            c.stepMax = x
        }
        g && (g = b.set(), d.push(g), u && u.translate(f, 4 * f), u = new AmCharts.SimpleButton, u.setIcon(a.pathToImages + "panLeft.gif", c.iconSize), u.setClickHandler(a.moveLeft, a), u.init(b, f, f, h, k, l, m, n, r, p, A), u.set.translate(0, f), g.push(u.set), u = new AmCharts.SimpleButton, u.setIcon(a.pathToImages + "panRight.gif", c.iconSize), u.setClickHandler(a.moveRight,
            a), u.init(b, f, f, h, k, l, m, n, r, p, A), u.set.translate(2 * f, f), g.push(u.set), u = new AmCharts.SimpleButton, u.setIcon(a.pathToImages + "panUp.gif", c.iconSize), u.setClickHandler(a.moveUp, a), u.init(b, f, f, h, k, l, m, n, r, p, A), u.set.translate(f, 0), g.push(u.set), u = new AmCharts.SimpleButton, u.setIcon(a.pathToImages + "panDown.gif", c.iconSize), u.setClickHandler(a.moveDown, a), u.init(b, f, f, h, k, l, m, n, r, p, A), u.set.translate(f, 2 * f), g.push(u.set), k = new AmCharts.SimpleButton, k.setIcon(a.pathToImages + c.homeIconFile, c.iconSize), k.setClickHandler(a.goHome,
            a), k.init(b, f, f, h, 0, 0, m, 0, r, p, A), k.set.translate(f, f), g.push(k.set), d.push(g))
    },
    draggerDown: function () {
        this.chart.stopDrag();
        this.isDragging = !0
    },
    draggerUp: function () {
        this.isDragging = !1
    },
    handleBgUp: function () {
        var a = this.chart, b = 100 * Math.pow(this.zoomFactor, this.stepMax - (a.mouseY - this.zoomSet.y - this.set.y - this.buttonSize - this.realStepSize / 2) / this.realStepSize);
        a.zoomTo(b)
    },
    update: function () {
        var a, b = this.zoomFactor, c = this.realStepSize, d = this.stepMax, f = this.dragger, e = this.buttonSize, g = this.chart;
        this.isDragging ?
            (g.stopDrag(), a = f.y + (g.mouseY - this.previousY), a = AmCharts.fitToBounds(a, e, this.realGridHeight + e), c = 100 * Math.pow(b, d - (a - e) / c), g.zoomTo(c, NaN, NaN, !0)) : (a = Math.log(g.zoomLevel() / 100) / Math.log(b), a = (d - a) * c + e);
        this.previousY = g.mouseY;
        this.previousDY != a && f && (f.translate(0, a), this.previousDY = a)
    }
});
AmCharts.SimpleButton = AmCharts.Class({
    construct: function () {
    },
    init: function (a, b, c, d, f, e, g, h, k, l, m) {
        var n = this;
        n.rollOverColor = l;
        n.color = d;
        l = a.set();
        n.set = l;
        d = AmCharts.rect(a, b, c, d, f, e, g, h, k);
        l.push(d);
        if (f = n.iconPath)e = n.iconSize, a = a.image(f, (b - e) / 2, (c - e) / 2, e, e), l.push(a), a.setAttr("opacity", m), a.mousedown(function () {
            n.handleDown()
        }).mouseup(function () {
            n.handleUp()
        }).mouseover(function () {
            n.handleOver()
        }).mouseout(function () {
            n.handleOut()
        });
        d.mousedown(function () {
            n.handleDown()
        }).mouseup(function () {
            n.handleUp()
        }).mouseover(function () {
            n.handleOver()
        }).mouseout(function () {
            n.handleOut()
        });
        n.bg = d
    },
    setIcon: function (a, b) {
        this.iconPath = a;
        this.iconSize = b
    },
    setClickHandler: function (a, b) {
        this.clickHandler = a;
        this.scope = b
    },
    setDownHandler: function (a, b) {
        this.downHandler = a;
        this.scope = b
    },
    handleUp: function () {
        var a = this.clickHandler;
        a && a.call(this.scope)
    },
    handleDown: function () {
        var a = this.downHandler;
        a && a.call(this.scope)
    },
    handleOver: function () {
        this.bg.setAttr("fill", this.rollOverColor)
    },
    handleOut: function () {
        this.bg.setAttr("fill", this.color)
    }
});
AmCharts.SmallMap = AmCharts.Class({
    construct: function (a) {
        this.cname = "SmallMap";
        this.mapColor = "#e6e6e6";
        this.rectangleColor = "#FFFFFF";
        this.top = this.right = 10;
        this.minimizeButtonWidth = 16;
        this.backgroundColor = "#9A9A9A";
        this.backgroundAlpha = 1;
        this.borderColor = "#FFFFFF";
        this.borderThickness = 3;
        this.borderAlpha = 1;
        this.size = .2;
        AmCharts.applyTheme(this, a, this.cname)
    },
    init: function (a, b) {
        var c = this;
        c.chart = a;
        c.container = b;
        c.width = a.realWidth * c.size;
        c.height = a.realHeight * c.size;
        AmCharts.remove(c.set);
        var d = b.set();
        c.set = d;
        var f = b.set();
        c.allSet = f;
        d.push(f);
        c.buildSVGMap();
        var e = c.borderThickness, g = c.borderColor, h = AmCharts.rect(b, c.width + e, c.height + e, c.backgroundColor, c.backgroundAlpha, e, g, c.borderAlpha);
        h.translate(-e / 2, -e / 2);
        f.push(h);
        h.toBack();
        var k, l, h = c.minimizeButtonWidth, m = new AmCharts.SimpleButton;
        m.setIcon(a.pathToImages + "arrowDown.gif", h);
        m.setClickHandler(c.minimize, c);
        m.init(b, h, h, g, 1, 1, g, 1);
        m = m.set;
        c.downButtonSet = m;
        d.push(m);
        var n = new AmCharts.SimpleButton;
        n.setIcon(a.pathToImages + "arrowUp.gif",
            h);
        n.setClickHandler(c.maximize, c);
        n.init(b, h, h, g, 1, 1, g, 1);
        g = n.set;
        c.upButtonSet = g;
        g.hide();
        d.push(g);
        var r, p;
        isNaN(c.top) || (k = a.getY(c.top) + e, p = 0);
        isNaN(c.bottom) || (k = a.getY(c.bottom, !0) - c.height - e, p = c.height - h + e / 2);
        isNaN(c.left) || (l = a.getX(c.left) + e, r = -e / 2);
        isNaN(c.right) || (l = a.getX(c.right, !0) - c.width - e, r = c.width - h + e / 2);
        e = b.set();
        e.clipRect(1, 1, c.width, c.height);
        f.push(e);
        c.rectangleC = e;
        d.translate(l, k);
        m.translate(r, p);
        g.translate(r, p);
        f.mouseup(function () {
            c.handleMouseUp()
        });
        c.drawRectangle()
    },
    minimize: function () {
        this.downButtonSet.hide();
        this.upButtonSet.show();
        this.allSet.hide()
    },
    maximize: function () {
        this.downButtonSet.show();
        this.upButtonSet.hide();
        this.allSet.show()
    },
    buildSVGMap: function () {
        var a = this.chart, b = {
            fill: this.mapColor,
            stroke: this.mapColor,
            "stroke-opacity": 1
        }, c = a.svgData.g.path, d = this.container, f = d.set(), e;
        for (e = 0; e < c.length; e++) {
            var g = d.path(c[e].d).attr(b);
            f.push(g)
        }
        this.allSet.push(f);
        b = f.getBBox();
        c = this.size * a.mapScale;
        d = -b.x * c;
        e = -b.y * c;
        var h = g = 0;
        a.centerMap && (g = (this.width -
            b.width * c) / 2, h = (this.height - b.height * c) / 2);
        this.mapWidth = b.width * c;
        this.mapHeight = b.height * c;
        this.dx = g;
        this.dy = h;
        f.translate(d + g, e + h, c)
    },
    update: function () {
        var a = this.chart, b = a.zoomLevel(), c = this.width, d = a.mapContainer, a = c / (a.realWidth * b), c = c / b, b = this.height / b, f = this.rectangle;
        f.translate(-d.x * a + this.dx, -d.y * a + this.dy);
        0 < c && 0 < b && (f.setAttr("width", c), f.setAttr("height", b));
        this.rWidth = c;
        this.rHeight = b
    },
    drawRectangle: function () {
        var a = this.rectangle;
        AmCharts.remove(a);
        a = AmCharts.rect(this.container,
            10, 10, "#000", 0, 1, this.rectangleColor, 1);
        this.rectangleC.push(a);
        this.rectangle = a
    },
    handleMouseUp: function () {
        var a = this.chart, b = a.zoomLevel();
        a.zoomTo(b, -((a.mouseX - this.set.x - this.dx - this.rWidth / 2) / this.mapWidth) * b, -((a.mouseY - this.set.y - this.dy - this.rHeight / 2) / this.mapHeight) * b)
    }
});
AmCharts.AreasProcessor = AmCharts.Class({
    construct: function (a) {
        this.chart = a
    },
    process: function (a) {
        this.updateAllAreas();
        this.allObjects = [];
        a = a.areas;
        var b = this.chart, c, d = a.length, f, e, g = 0, h = b.svgAreasById, k = !1, l = !1;
        for (f = 0; f < d; f++) {
            e = a[f];
            e = e.value;
            if (!1 === k || k < e)k = e;
            if (!1 === l || l > e)l = e;
            isNaN(e) || (g += Math.abs(e))
        }
        isNaN(b.minValue) || (l = b.minValue);
        isNaN(b.maxValue) || (k = b.maxValue);
        b.maxValueReal = k;
        b.minValueReal = l;
        for (f = 0; f < d; f++)e = a[f], isNaN(e.value) ? e.percents = void 0 : e.percents = (e.value - l) / g * 100;
        for (f =
                 0; f < d; f++) {
            e = a[f];
            var m = h[e.id];
            c = b.areasSettings;
            m && m.className && (g = b.areasClasses[m.className]) && (c = g, c = AmCharts.processObject(c, AmCharts.AreasSettings, b.theme));
            var n = c.color, r = c.alpha, p = c.outlineThickness, v = c.rollOverColor, x = c.selectedColor, t = c.rollOverAlpha, z = c.outlineColor, A = c.outlineAlpha, w = c.balloonText, s = c.selectable, u = c.pattern, q = c.rollOverOutlineColor, y = c.bringForwardOnHover;
            this.allObjects.push(e);
            e.chart = b;
            e.baseSettings = c;
            e.autoZoomReal = void 0 == e.autoZoom ? c.autoZoom : e.autoZoom;
            g = e.color;
            void 0 == g && (g = n);
            var B = e.alpha;
            isNaN(B) && (B = r);
            r = e.rollOverAlpha;
            isNaN(r) && (r = t);
            isNaN(r) && (r = B);
            t = e.rollOverColor;
            void 0 == t && (t = v);
            v = e.pattern;
            void 0 == v && (v = u);
            u = e.selectedColor;
            void 0 == u && (u = x);
            (x = e.balloonText) || (x = w);
            void 0 == c.colorSolid || isNaN(e.value) || (w = Math.floor((e.value - l) / ((k - l) / b.colorSteps)), w == b.colorSteps && w--, colorPercent = 1 / (b.colorSteps - 1) * w, e.colorReal = AmCharts.getColorFade(g, c.colorSolid, colorPercent));
            void 0 != e.color && (e.colorReal = e.color);
            void 0 == e.selectable && (e.selectable =
                s);
            void 0 == e.colorReal && (e.colorReal = n);
            n = e.outlineColor;
            void 0 == n && (n = z);
            z = e.outlineAlpha;
            isNaN(z) && (z = A);
            A = e.outlineThickness;
            isNaN(A) && (A = p);
            p = e.rollOverOutlineColor;
            void 0 == p && (p = q);
            void 0 == e.bringForwardOnHover && (e.bringForwardOnHover = y);
            e.alphaReal = B;
            e.rollOverColorReal = t;
            e.rollOverAlphaReal = r;
            e.balloonTextReal = x;
            e.selectedColorReal = u;
            e.outlineColorReal = n;
            e.outlineAlphaReal = z;
            e.rollOverOutlineColorReal = p;
            e.outlineThicknessReal = A;
            e.patternReal = v;
            AmCharts.processDescriptionWindow(c, e);
            if (m && (c =
                    m.area, q = m.title, e.enTitle = m.title, q && !e.title && (e.title = q), (m = b.language) ? (q = AmCharts.mapTranslations) && (m = q[m]) && m[e.enTitle] && (e.titleTr = m[e.enTitle]) : e.titleTr = void 0, c)) {
                e.displayObject = c;
                e.mouseEnabled && b.addObjectEventListeners(c, e);
                var G;
                void 0 != g && (G = g);
                void 0 != e.colorReal && (G = e.showAsSelected || b.selectedObject == e ? e.selectedColorReal : e.colorReal);
                c.setAttr("fill", G);
                c.setAttr("stroke", n);
                c.setAttr("stroke-opacity", z);
                c.setAttr("stroke-width", A);
                c.setAttr("fill-opacity", B);
                v && c.pattern(v,
                    b.mapScale)
            }
        }
    },
    updateAllAreas: function () {
        var a = this.chart, b = a.areasSettings, c = b.unlistedAreasColor, d = b.unlistedAreasAlpha, f = b.unlistedAreasOutlineColor, e = b.unlistedAreasOutlineAlpha, g = a.svgAreas, h = a.dataProvider, k = h.areas, l = {}, m;
        for (m = 0; m < k.length; m++)l[k[m].id] = k[m];
        for (m = 0; m < g.length; m++)if (k = g[m], void 0 != c && k.setAttr("fill", c), isNaN(d) || k.setAttr("fill-opacity", d), void 0 != f && k.setAttr("stroke", f), isNaN(e) || k.setAttr("stroke-opacity", e), k.setAttr("stroke-width", b.outlineThickness), h.getAreasFromMap && !l[k.id]) {
            var n = new AmCharts.MapArea(a.theme);
            n.parentObject = h;
            n.id = k.id;
            h.areas.push(n)
        }
    }
});
AmCharts.AreasSettings = AmCharts.Class({
    construct: function (a) {
        this.cname = "AreasSettings";
        this.alpha = 1;
        this.autoZoom = !1;
        this.balloonText = "[[title]]";
        this.color = "#FFCC00";
        this.colorSolid = "#990000";
        this.unlistedAreasAlpha = 1;
        this.unlistedAreasColor = "#DDDDDD";
        this.outlineColor = "#FFFFFF";
        this.outlineAlpha = 1;
        this.outlineThickness = .5;
        this.selectedColor = this.rollOverOutlineColor = "#CC0000";
        this.unlistedAreasOutlineColor = "#FFFFFF";
        this.unlistedAreasOutlineAlpha = 1;
        this.descriptionWindowWidth = 250;
        this.adjustOutlineThickness = !1;
        this.bringForwardOnHover = !0;
        AmCharts.applyTheme(this, a, this.cname)
    }
});
AmCharts.ImagesProcessor = AmCharts.Class({
    construct: function (a) {
        this.chart = a;
        this.reset()
    },
    process: function (a) {
        var b = a.images, c;
        for (c = 0; c < b.length; c++)this.createImage(b[c], c);
        a.parentObject && a.remainVisible && this.process(a.parentObject)
    },
    createImage: function (a, b) {
        var c = this.chart, d = c.container, f = c.mapImagesContainer, e = c.stageImagesContainer, g = c.imagesSettings;
        a.remove && a.remove();
        var h = g.color, k = g.alpha, l = g.rollOverColor, m = g.selectedColor, n = g.balloonText, r = g.outlineColor, p = g.outlineAlpha, v = g.outlineThickness,
            x = g.selectedScale, t = g.labelPosition, z = g.labelColor, A = g.labelFontSize, w = g.bringForwardOnHover, s = g.labelRollOverColor, u = g.selectedLabelColor;
        a.index = b;
        a.chart = c;
        a.baseSettings = c.imagesSettings;
        var q = d.set();
        a.displayObject = q;
        var y = a.color;
        void 0 == y && (y = h);
        h = a.alpha;
        isNaN(h) && (h = k);
        void 0 == a.bringForwardOnHover && (a.bringForwardOnHover = w);
        k = a.outlineAlpha;
        isNaN(k) && (k = p);
        p = a.rollOverColor;
        void 0 == p && (p = l);
        l = a.selectedColor;
        void 0 == l && (l = m);
        (m = a.balloonText) || (m = n);
        n = a.outlineColor;
        void 0 == n && (n = r);
        void 0 ==
        n && (n = y);
        r = a.outlineThickness;
        isNaN(r) && (r = v);
        (v = a.labelPosition) || (v = t);
        t = a.labelColor;
        void 0 == t && (t = z);
        z = a.labelRollOverColor;
        void 0 == z && (z = s);
        s = a.selectedLabelColor;
        void 0 == s && (s = u);
        u = a.labelFontSize;
        isNaN(u) && (u = A);
        A = a.selectedScale;
        isNaN(A) && (A = x);
        isNaN(a.rollOverScale);
        a.colorReal = y;
        a.alphaReal = h;
        a.rollOverColorReal = p;
        a.balloonTextReal = m;
        a.selectedColorReal = l;
        a.labelColorReal = t;
        a.labelRollOverColorReal = z;
        a.selectedLabelColorReal = s;
        a.labelFontSizeReal = u;
        a.labelPositionReal = v;
        a.selectedScaleReal =
            A;
        a.rollOverScaleReal = A;
        AmCharts.processDescriptionWindow(g, a);
        a.centeredReal = void 0 == a.centered ? g.centered : a.centered;
        u = a.type;
        s = a.imageURL;
        z = a.svgPath;
        p = a.width;
        t = a.height;
        g = a.scale;
        isNaN(a.percentWidth) || (p = a.percentWidth / 100 * c.realWidth);
        isNaN(a.percentHeight) || (t = a.percentHeight / 100 * c.realHeight);
        var B;
        s || u || z || (u = "circle", p = 1, k = h = 0);
        l = x = 0;
        A = a.selectedColorReal;
        if (u) {
            isNaN(p) && (p = 10);
            isNaN(t) && (t = 10);
            "kilometers" == a.widthAndHeightUnits && (p = c.kilometersToPixels(a.width), t = c.kilometersToPixels(a.height));
            "miles" == a.widthAndHeightUnits && (p = c.milesToPixels(a.width), t = c.milesToPixels(a.height));
            if ("circle" == u || "bubble" == u)t = p;
            B = this.createPredefinedImage(y, n, r, u, p, t);
            l = x = 0;
            a.centeredReal ? (isNaN(a.right) || (x = p * g), isNaN(a.bottom) || (l = t * g)) : (x = p * g / 2, l = t * g / 2);
            B.translate(x, l, g)
        } else s ? (isNaN(p) && (p = 10), isNaN(t) && (t = 10), B = d.image(s, 0, 0, p, t), B.node.setAttribute("preserveAspectRatio", "none"), B.setAttr("opacity", h), a.centeredReal && (x = isNaN(a.right) ? -p / 2 : p / 2, l = isNaN(a.bottom) ? -t / 2 : t / 2, B.translate(x, l))) : z && (B =
            d.path(z), n = B.getBBox(), a.centeredReal ? (x = -n.x * g - n.width * g / 2, isNaN(a.right) || (x = -x), l = -n.y * g - n.height * g / 2, isNaN(a.bottom) || (l = -l)) : x = l = 0, B.translate(x, l, g), B.x = x, B.y = l);
        B && (q.push(B), a.image = B, B.setAttr("stroke-opacity", k), B.setAttr("fill-opacity", h), B.setAttr("fill", y));
        !a.showAsSelected && c.selectedObject != a || void 0 == A || B.setAttr("fill", A);
        y = null;
        void 0 !== a.label && (y = AmCharts.text(d, a.label, a.labelColorReal, c.fontFamily, a.labelFontSizeReal, a.labelAlign), B = a.labelBackgroundAlpha, (h = a.labelBackgroundColor) &&
        0 < B && (k = y.getBBox(), d = AmCharts.rect(d, k.width + 16, k.height + 10, h, B), q.push(d), a.labelBG = d), a.imageLabel = y, !a.labelInactive && a.mouseEnabled && c.addObjectEventListeners(y, a), q.push(y));
        isNaN(a.latitude) || isNaN(a.longitude) ? e.push(q) : f.push(q);
        q && (q.rotation = a.rotation);
        this.updateSizeAndPosition(a);
        a.mouseEnabled && c.addObjectEventListeners(q, a)
    },
    updateSizeAndPosition: function (a) {
        var b = this.chart, c = a.displayObject, d = b.getX(a.left), f = b.getY(a.top), e = a.image.getBBox();
        isNaN(a.right) || (d = b.getX(a.right, !0) -
            e.width * a.scale);
        isNaN(a.bottom) || (f = b.getY(a.bottom, !0) - e.height * a.scale);
        var g = a.longitude, h = a.latitude, e = this.objectsToResize;
        this.allSvgObjects.push(c);
        this.allObjects.push(a);
        var k = a.imageLabel;
        if (!isNaN(d) && !isNaN(f))c.translate(d, f); else if (!isNaN(h) && !isNaN(g) && (d = b.longitudeToCoordinate(g), f = b.latitudeToCoordinate(h), c.translate(d, f, NaN, !0), a.fixedSize)) {
            d = 1;
            if (a.showAsSelected || b.selectedObject == a)d = a.selectedScaleReal;
            e.push({
                image: c,
                scale: d
            })
        }
        this.positionLabel(k, a, a.labelPositionReal)
    },
    positionLabel: function (a, b, c) {
        if (a) {
            var d = b.image, f = 0, e = 0, g = 0, h = 0;
            d && (h = d.getBBox(), e = d.y, f = d.x, g = h.width, h = h.height, b.svgPath && (g *= b.scale, h *= b.scale));
            var d = a.getBBox(), k = d.width, l = d.height;
            "right" == c && (f += g + k / 2 + 5, e += h / 2 - 2);
            "left" == c && (f += -k / 2 - 5, e += h / 2 - 2);
            "top" == c && (e -= l / 2 + 3, f += g / 2);
            "bottom" == c && (e += h + l / 2, f += g / 2);
            "middle" == c && (f += g / 2, e += h / 2);
            a.translate(f + b.labelShiftX, e + b.labelShiftY);
            b.labelBG && b.labelBG.translate(f - d.width / 2 + b.labelShiftX - 9, e + b.labelShiftY - d.height / 2 - 3)
        }
    },
    createPredefinedImage: function (a,
                                     b, c, d, f, e) {
        var g = this.chart.container, h;
        switch (d) {
            case "circle":
                h = AmCharts.circle(g, f / 2, a, 1, c, b, 1);
                break;
            case "rectangle":
                h = AmCharts.polygon(g, [-f / 2, f / 2, f / 2, -f / 2], [e / 2, e / 2, -e / 2, -e / 2], a, 1, c, b, 1);
                break;
            case "bubble":
                h = AmCharts.circle(g, f / 2, a, 1, c, b, 1, !0)
        }
        return h
    },
    reset: function () {
        this.objectsToResize = [];
        this.allSvgObjects = [];
        this.allObjects = [];
        this.allLabels = []
    }
});
AmCharts.ImagesSettings = AmCharts.Class({
    construct: function (a) {
        this.cname = "ImagesSettings";
        this.balloonText = "[[title]]";
        this.alpha = 1;
        this.borderAlpha = 0;
        this.borderThickness = 1;
        this.labelPosition = "right";
        this.labelColor = "#000000";
        this.labelFontSize = 11;
        this.color = "#000000";
        this.labelRollOverColor = "#00CC00";
        this.centered = !0;
        this.rollOverScale = this.selectedScale = 1;
        this.descriptionWindowWidth = 250;
        this.bringForwardOnHover = !0;
        AmCharts.applyTheme(this, a, this.cname)
    }
});
AmCharts.LinesProcessor = AmCharts.Class({
    construct: function (a) {
        this.chart = a;
        this.reset()
    },
    process: function (a) {
        var b = a.lines, c = this.chart, d = c.linesSettings, f = this.objectsToResize, e = c.mapLinesContainer, g = c.stageLinesContainer, h = d.thickness, k = d.dashLength, l = d.arrow, m = d.arrowSize, n = d.arrowColor, r = d.arrowAlpha, p = d.color, v = d.alpha, x = d.rollOverColor, t = d.selectedColor, z = d.rollOverAlpha, A = d.balloonText, w = d.bringForwardOnHover, s = c.container, u;
        for (u = 0; u < b.length; u++) {
            var q = b[u];
            q.chart = c;
            q.baseSettings = d;
            var y =
                s.set();
            q.displayObject = y;
            this.allSvgObjects.push(y);
            this.allObjects.push(q);
            q.mouseEnabled && c.addObjectEventListeners(y, q);
            if (q.remainVisible || c.selectedObject == q.parentObject) {
                var B = q.thickness;
                isNaN(B) && (B = h);
                var G = q.dashLength;
                isNaN(G) && (G = k);
                var C = q.color;
                void 0 == C && (C = p);
                var D = q.alpha;
                isNaN(D) && (D = v);
                var E = q.rollOverAlpha;
                isNaN(E) && (E = z);
                isNaN(E) && (E = D);
                var H = q.rollOverColor;
                void 0 == H && (H = x);
                var S = q.selectedColor;
                void 0 == S && (S = t);
                var Q = q.balloonText;
                Q || (Q = A);
                var J = q.arrow;
                if (!J || "none" == J &&
                    "none" != l)J = l;
                var L = q.arrowColor;
                void 0 == L && (L = n);
                void 0 == L && (L = C);
                var M = q.arrowAlpha;
                isNaN(M) && (M = r);
                isNaN(M) && (M = D);
                var K = q.arrowSize;
                isNaN(K) && (K = m);
                q.alphaReal = D;
                q.colorReal = C;
                q.rollOverColorReal = H;
                q.rollOverAlphaReal = E;
                q.balloonTextReal = Q;
                q.selectedColorReal = S;
                q.thicknessReal = B;
                void 0 == q.bringForwardOnHover && (q.bringForwardOnHover = w);
                AmCharts.processDescriptionWindow(d, q);
                var E = this.processCoordinates(q.x, c.realWidth), H = this.processCoordinates(q.y, c.realHeight), N = q.longitudes, Q = q.latitudes, I =
                    N.length, O;
                if (0 < I)for (E = [], O = 0; O < I; O++)E.push(c.longitudeToCoordinate(N[O]));
                I = Q.length;
                if (0 < I)for (H = [], O = 0; O < I; O++)H.push(c.latitudeToCoordinate(Q[O]));
                if (0 < E.length) {
                    AmCharts.dx = 0;
                    AmCharts.dy = 0;
                    N = AmCharts.line(s, E, H, C, 1, B, G, !1, !1, !0);
                    G = AmCharts.line(s, E, H, C, .001, 3, G, !1, !1, !0);
                    AmCharts.dx = .5;
                    AmCharts.dy = .5;
                    y.push(N);
                    y.push(G);
                    y.setAttr("opacity", D);
                    if ("none" != J) {
                        var F, P, R;
                        if ("end" == J || "both" == J)D = E[E.length - 1], C = H[H.length - 1], 1 < E.length ? (I = E[E.length - 2], F = H[H.length - 2]) : (I = D, F = C), F = 180 * Math.atan((C -
                                F) / (D - I)) / Math.PI, P = D, R = C, F = 0 > D - I ? F - 90 : F + 90;
                        "both" == J && (D = AmCharts.polygon(s, [-K / 2, 0, K / 2], [1.5 * K, 0, 1.5 * K], L, M, 1, L, M), y.push(D), D.translate(P, R), D.rotate(F), q.fixedSize && f.push(D));
                        if ("start" == J || "both" == J)D = E[0], R = H[0], 1 < E.length ? (C = E[1], P = H[1]) : (C = D, P = R), F = 180 * Math.atan((R - P) / (D - C)) / Math.PI, P = D, F = 0 > D - C ? F - 90 : F + 90;
                        "middle" == J && (D = E[E.length - 1], C = H[H.length - 1], 1 < E.length ? (I = E[E.length - 2], F = H[H.length - 2]) : (I = D, F = C), P = I + (D - I) / 2, R = F + (C - F) / 2, F = 180 * Math.atan((C - F) / (D - I)) / Math.PI, F = 0 > D - I ? F - 90 : F + 90);
                        D = AmCharts.polygon(s,
                            [-K / 2, 0, K / 2], [1.5 * K, 0, 1.5 * K], L, M, 1, L, M);
                        y.push(D);
                        D.translate(P, R);
                        D.rotate(F);
                        q.fixedSize && f.push(D);
                        q.arrowSvg = D
                    }
                    q.fixedSize && N && (this.linesToResize.push({
                        line: N,
                        thickness: B
                    }), this.linesToResize.push({
                        line: G,
                        thickness: 3
                    }));
                    q.lineSvg = N;
                    q.showAsSelected && !isNaN(S) && N.setAttr("stroke", S);
                    0 < Q.length ? e.push(y) : g.push(y)
                }
            }
        }
        a.parentObject && a.remainVisible && this.process(a.parentObject)
    },
    processCoordinates: function (a, b) {
        var c = [], d;
        for (d = 0; d < a.length; d++) {
            var f = a[d], e = Number(f);
            isNaN(e) && (e = Number(f.replace("%",
                    "")) * b / 100);
            isNaN(e) || c.push(e)
        }
        return c
    },
    reset: function () {
        this.objectsToResize = [];
        this.allSvgObjects = [];
        this.allObjects = [];
        this.linesToResize = []
    }
});
AmCharts.LinesSettings = AmCharts.Class({
    construct: function (a) {
        this.cname = "LinesSettings";
        this.balloonText = "[[title]]";
        this.thickness = 1;
        this.dashLength = 0;
        this.arrowSize = 10;
        this.arrowAlpha = 1;
        this.arrow = "none";
        this.color = "#990000";
        this.descriptionWindowWidth = 250;
        this.bringForwardOnHover = !0;
        AmCharts.applyTheme(this, a, this.cname)
    }
});
AmCharts.MapObject = AmCharts.Class({
    construct: function (a) {
        this.fixedSize = this.mouseEnabled = !0;
        this.images = [];
        this.lines = [];
        this.areas = [];
        this.remainVisible = !0;
        this.passZoomValuesToTarget = !1;
        this.objectType = this.cname;
        AmCharts.applyTheme(this, a, "MapObject")
    }
});
AmCharts.MapArea = AmCharts.Class({
    inherits: AmCharts.MapObject,
    construct: function (a) {
        this.cname = "MapArea";
        AmCharts.MapArea.base.construct.call(this, a);
        AmCharts.applyTheme(this, a, this.cname)
    }
});
AmCharts.MapLine = AmCharts.Class({
    inherits: AmCharts.MapObject,
    construct: function (a) {
        this.cname = "MapLine";
        this.longitudes = [];
        this.latitudes = [];
        this.x = [];
        this.y = [];
        this.arrow = "none";
        AmCharts.MapLine.base.construct.call(this, a);
        AmCharts.applyTheme(this, a, this.cname)
    }
});
AmCharts.MapImage = AmCharts.Class({
    inherits: AmCharts.MapObject,
    construct: function (a) {
        this.cname = "MapImage";
        this.scale = 1;
        this.widthAndHeightUnits = "pixels";
        this.labelShiftY = this.labelShiftX = 0;
        AmCharts.MapImage.base.construct.call(this, a);
        AmCharts.applyTheme(this, a, this.cname)
    },
    remove: function () {
        var a = this.displayObject;
        a && a.remove();
        (a = this.imageLabel) && a.remove()
    }
});
AmCharts.degreesToRadians = function (a) {
    return a / 180 * Math.PI
};
AmCharts.radiansToDegrees = function (a) {
    return a / Math.PI * 180
};
AmCharts.getColorFade = function (a, b, c) {
    var d = AmCharts.hex2RGB(b);
    b = d[0];
    var f = d[1], d = d[2], e = AmCharts.hex2RGB(a);
    a = e[0];
    var g = e[1], e = e[2];
    a += Math.round((b - a) * c);
    g += Math.round((f - g) * c);
    e += Math.round((d - e) * c);
    return "rgb(" + a + "," + g + "," + e + ")"
};
AmCharts.hex2RGB = function (a) {
    return [parseInt(a.substring(1, 3), 16), parseInt(a.substring(3, 5), 16), parseInt(a.substring(5, 7), 16)]
};
AmCharts.processDescriptionWindow = function (a, b) {
    isNaN(b.descriptionWindowX) && (b.descriptionWindowX = a.descriptionWindowX);
    isNaN(b.descriptionWindowY) && (b.descriptionWindowY = a.descriptionWindowY);
    isNaN(b.descriptionWindowLeft) && (b.descriptionWindowLeft = a.descriptionWindowLeft);
    isNaN(b.descriptionWindowRight) && (b.descriptionWindowRight = a.descriptionWindowRight);
    isNaN(b.descriptionWindowTop) && (b.descriptionWindowTop = a.descriptionWindowTop);
    isNaN(b.descriptionWindowBottom) && (b.descriptionWindowBottom =
        a.descriptionWindowBottom);
    isNaN(b.descriptionWindowWidth) && (b.descriptionWindowWidth = a.descriptionWindowWidth);
    isNaN(b.descriptionWindowHeight) && (b.descriptionWindowHeight = a.descriptionWindowHeight)
};
AmCharts.MapData = AmCharts.Class({
    inherits: AmCharts.MapObject,
    construct: function () {
        this.cname = "MapData";
        AmCharts.MapData.base.construct.call(this);
        this.projection = "mercator";
        this.topLatitude = 90;
        this.bottomLatitude = -90;
        this.leftLongitude = -180;
        this.rightLongitude = 180;
        this.zoomLevel = 1;
        this.getAreasFromMap = !1
    }
});
AmCharts.DescriptionWindow = AmCharts.Class({
    construct: function () {
    },
    show: function (a, b, c, d) {
        var f = this, e = document.createElement("div");
        e.style.position = "absolute";
        e.className = "ammapDescriptionWindow";
        f.div = e;
        b.appendChild(e);
        var g = document.createElement("img");
        g.className = "ammapDescriptionWindowCloseButton";
        g.src = a.pathToImages + "xIcon.gif";
        g.style.cssFloat = "right";
        g.onclick = function () {
            f.close()
        };
        g.onmouseover = function () {
            g.src = a.pathToImages + "xIconH.gif"
        };
        g.onmouseout = function () {
            g.src = a.pathToImages +
                "xIcon.gif"
        };
        e.appendChild(g);
        b = document.createElement("div");
        b.className = "ammapDescriptionTitle";
        b.onmousedown = function () {
            f.div.style.zIndex = 1E3
        };
        e.appendChild(b);
        d = document.createTextNode(d);
        b.appendChild(d);
        d = b.offsetHeight;
        b = document.createElement("div");
        b.className = "ammapDescriptionText";
        b.style.maxHeight = f.maxHeight - d - 20 + "px";
        e.appendChild(b);
        b.innerHTML = c
    },
    close: function () {
        try {
            this.div.parentNode.removeChild(this.div)
        } catch (a) {
        }
    }
});
AmCharts.ValueLegend = AmCharts.Class({
    construct: function (a) {
        this.cname = "ValueLegend";
        this.showAsGradient = !1;
        this.minValue = 0;
        this.height = 12;
        this.width = 200;
        this.bottom = this.left = 10;
        this.borderColor = "#FFFFFF";
        this.borderAlpha = this.borderThickness = 1;
        this.color = "#000000";
        this.fontSize = 11;
        AmCharts.applyTheme(this, a, this.cname)
    },
    init: function (a, b) {
        var c = a.areasSettings.color, d = a.areasSettings.colorSolid, f = a.colorSteps;
        AmCharts.remove(this.set);
        var e = b.set();
        this.set = e;
        var g = 0, h = this.minValue, k = this.fontSize,
            l = a.fontFamily, m = this.color;
        void 0 == h && (h = a.minValueReal);
        void 0 !== h && (g = AmCharts.text(b, h, m, l, k, "left"), g.translate(0, k / 2 - 1), e.push(g), g = g.getBBox().height);
        h = this.maxValue;
        void 0 === h && (h = a.maxValueReal);
        void 0 !== h && (g = AmCharts.text(b, h, m, l, k, "right"), g.translate(this.width, k / 2 - 1), e.push(g), g = g.getBBox().height);
        if (this.showAsGradient)c = AmCharts.rect(b, this.width, this.height, [c, d], 1, this.borderThickness, this.borderColor, 1, 0, 0), c.translate(0, g), e.push(c); else for (k = this.width / f, l = 0; l < f; l++)m = AmCharts.getColorFade(c,
            d, 1 * l / (f - 1)), m = AmCharts.rect(b, k, this.height, m, 1, this.borderThickness, this.borderColor, 1), m.translate(k * l, g), e.push(m);
        d = c = 0;
        f = e.getBBox();
        g = a.getY(this.bottom, !0);
        k = a.getY(this.top);
        l = a.getX(this.right, !0);
        m = a.getX(this.left);
        isNaN(k) || (c = k);
        isNaN(g) || (c = g - f.height);
        isNaN(m) || (d = m);
        isNaN(l) || (d = l - f.width);
        e.translate(d, c)
    }
});
AmCharts.ObjectList = AmCharts.Class({
    construct: function (a) {
        this.divId = a
    },
    init: function (a) {
        this.chart = a;
        var b;
        b = this.divId;
        this.container && (b = this.container);
        this.div = b = "object" != typeof b ? document.getElementById(b) : b;
        b = document.createElement("div");
        b.className = "ammapObjectList";
        this.div.appendChild(b);
        this.addObjects(a.dataProvider, b)
    },
    addObjects: function (a, b) {
        var c = this.chart, d = document.createElement("ul"), f;
        if (a.areas)for (f = 0; f < a.areas.length; f++) {
            var e = a.areas[f];
            void 0 === e.showInList && (e.showInList =
                c.showAreasInList);
            this.addObject(e, d)
        }
        if (a.images)for (f = 0; f < a.images.length; f++)e = a.images[f], void 0 === e.showInList && (e.showInList = c.showImagesInList), this.addObject(e, d);
        if (a.lines)for (f = 0; f < a.lines.length; f++)e = a.lines[f], void 0 === e.showInList && (e.showInList = c.showLinesInList), this.addObject(e, d);
        0 < d.childNodes.length && b.appendChild(d)
    },
    addObject: function (a, b) {
        var c = this;
        if (a.showInList && void 0 !== a.title) {
            var d = document.createElement("li"), f = document.createTextNode(a.title), e = document.createElement("a");
            e.appendChild(f);
            d.appendChild(e);
            b.appendChild(d);
            this.addObjects(a, d);
            e.onmouseover = function () {
                c.chart.rollOverMapObject(a, !1)
            };
            e.onmouseout = function () {
                c.chart.rollOutMapObject(a)
            };
            e.onclick = function () {
                c.chart.clickMapObject(a)
            }
        }
    }
});