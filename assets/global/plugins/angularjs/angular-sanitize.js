/*
 AngularJS v1.3.10
 (c) 2010-2014 Google, Inc. http://angularjs.org
 License: MIT
 */
(function (n, h, p) {
    'use strict';
    function E(a) {
        var d = [];
        s(d, h.noop).chars(a);
        return d.join("")
    }

    function g(a) {
        var d = {};
        a = a.split(",");
        var c;
        for (c = 0; c < a.length; c++)d[a[c]] = !0;
        return d
    }

    function F(a, d) {
        function c(a, b, c, l) {
            b = h.lowercase(b);
            if (t[b])for (; f.last() && u[f.last()];)e("", f.last());
            v[b] && f.last() == b && e("", b);
            (l = w[b] || !!l) || f.push(b);
            var m = {};
            c.replace(G, function (a, b, d, c, e) {
                m[b] = r(d || c || e || "")
            });
            d.start && d.start(b, m, l)
        }

        function e(a, b) {
            var c = 0, e;
            if (b = h.lowercase(b))for (c = f.length - 1; 0 <= c && f[c] != b; c--);
            if (0 <= c) {
                for (e = f.length - 1; e >= c; e--)d.end && d.end(f[e]);
                f.length = c
            }
        }

        "string" !== typeof a && (a = null === a || "undefined" === typeof a ? "" : "" + a);
        var b, k, f = [], m = a, l;
        for (f.last = function () {
            return f[f.length - 1]
        }; a;) {
            l = "";
            k = !0;
            if (f.last() && x[f.last()])a = a.replace(new RegExp("(.*)<\\s*\\/\\s*" + f.last() + "[^>]*>", "i"), function (a, b) {
                b = b.replace(H, "$1").replace(I, "$1");
                d.chars && d.chars(r(b));
                return ""
            }), e("", f.last()); else {
                if (0 === a.indexOf("\x3c!--"))b = a.indexOf("--", 4), 0 <= b && a.lastIndexOf("--\x3e", b) === b && (d.comment && d.comment(a.substring(4,
                    b)), a = a.substring(b + 3), k = !1); else if (y.test(a)) {
                    if (b = a.match(y))a = a.replace(b[0], ""), k = !1
                } else if (J.test(a)) {
                    if (b = a.match(z))a = a.substring(b[0].length), b[0].replace(z, e), k = !1
                } else K.test(a) && ((b = a.match(A)) ? (b[4] && (a = a.substring(b[0].length), b[0].replace(A, c)), k = !1) : (l += "<", a = a.substring(1)));
                k && (b = a.indexOf("<"), l += 0 > b ? a : a.substring(0, b), a = 0 > b ? "" : a.substring(b), d.chars && d.chars(r(l)))
            }
            if (a == m)throw L("badparse", a);
            m = a
        }
        e()
    }

    function r(a) {
        if (!a)return "";
        var d = M.exec(a);
        a = d[1];
        var c = d[3];
        if (d = d[2])q.innerHTML =
            d.replace(/</g, "&lt;"), d = "textContent"in q ? q.textContent : q.innerText;
        return a + d + c
    }

    function B(a) {
        return a.replace(/&/g, "&amp;").replace(N, function (a) {
            var c = a.charCodeAt(0);
            a = a.charCodeAt(1);
            return "&#" + (1024 * (c - 55296) + (a - 56320) + 65536) + ";"
        }).replace(O, function (a) {
            return "&#" + a.charCodeAt(0) + ";"
        }).replace(/</g, "&lt;").replace(/>/g, "&gt;")
    }

    function s(a, d) {
        var c = !1, e = h.bind(a, a.push);
        return {
            start: function (a, k, f) {
                a = h.lowercase(a);
                !c && x[a] && (c = a);
                c || !0 !== C[a] || (e("<"), e(a), h.forEach(k, function (c, f) {
                    var k =
                        h.lowercase(f), g = "img" === a && "src" === k || "background" === k;
                    !0 !== P[k] || !0 === D[k] && !d(c, g) || (e(" "), e(f), e('="'), e(B(c)), e('"'))
                }), e(f ? "/>" : ">"))
            },
            end: function (a) {
                a = h.lowercase(a);
                c || !0 !== C[a] || (e("</"), e(a), e(">"));
                a == c && (c = !1)
            },
            chars: function (a) {
                c || e(B(a))
            }
        }
    }

    var L = h.$$minErr("$sanitize"), A = /^<((?:[a-zA-Z])[\w:-]*)((?:\s+[\w:-]+(?:\s*=\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)\s*(>?)/, z = /^<\/\s*([\w:-]+)[^>]*>/, G = /([\w:-]+)(?:\s*=\s*(?:(?:"((?:[^"])*)")|(?:'((?:[^'])*)')|([^>\s]+)))?/g, K = /^</,
        J = /^<\//, H = /\x3c!--(.*?)--\x3e/g, y = /<!DOCTYPE([^>]*?)>/i, I = /<!\[CDATA\[(.*?)]]\x3e/g, N = /[\uD800-\uDBFF][\uDC00-\uDFFF]/g, O = /([^\#-~| |!])/g, w = g("area,br,col,hr,img,wbr");
    n = g("colgroup,dd,dt,li,p,tbody,td,tfoot,th,thead,tr");
    p = g("rp,rt");
    var v = h.extend({}, p, n), t = h.extend({}, n, g("address,article,aside,blockquote,caption,center,del,dir,div,dl,figure,figcaption,footer,h1,h2,h3,h4,h5,h6,header,hgroup,hr,ins,map,menu,nav,ol,pre,script,section,table,ul")), u = h.extend({}, p, g("a,abbr,acronym,b,bdi,bdo,big,br,cite,code,del,dfn,em,font,i,img,ins,kbd,label,map,mark,q,ruby,rp,rt,s,samp,small,span,strike,strong,sub,sup,time,tt,u,var"));
    n = g("animate,animateColor,animateMotion,animateTransform,circle,defs,desc,ellipse,font-face,font-face-name,font-face-src,g,glyph,hkern,image,linearGradient,line,marker,metadata,missing-glyph,mpath,path,polygon,polyline,radialGradient,rect,set,stop,svg,switch,text,title,tspan,use");
    var x = g("script,style"), C = h.extend({}, w, t, u, v, n), D = g("background,cite,href,longdesc,src,usemap,xlink:href");
    n = g("abbr,align,alt,axis,bgcolor,border,cellpadding,cellspacing,class,clear,color,cols,colspan,compact,coords,dir,face,headers,height,hreflang,hspace,ismap,lang,language,nohref,nowrap,rel,rev,rows,rowspan,rules,scope,scrolling,shape,size,span,start,summary,target,title,type,valign,value,vspace,width");
    p = g("accent-height,accumulate,additive,alphabetic,arabic-form,ascent,attributeName,attributeType,baseProfile,bbox,begin,by,calcMode,cap-height,class,color,color-rendering,content,cx,cy,d,dx,dy,descent,display,dur,end,fill,fill-rule,font-family,font-size,font-stretch,font-style,font-variant,font-weight,from,fx,fy,g1,g2,glyph-name,gradientUnits,hanging,height,horiz-adv-x,horiz-origin-x,ideographic,k,keyPoints,keySplines,keyTimes,lang,marker-end,marker-mid,marker-start,markerHeight,markerUnits,markerWidth,mathematical,max,min,offset,opacity,orient,origin,overline-position,overline-thickness,panose-1,path,pathLength,points,preserveAspectRatio,r,refX,refY,repeatCount,repeatDur,requiredExtensions,requiredFeatures,restart,rotate,rx,ry,slope,stemh,stemv,stop-color,stop-opacity,strikethrough-position,strikethrough-thickness,stroke,stroke-dasharray,stroke-dashoffset,stroke-linecap,stroke-linejoin,stroke-miterlimit,stroke-opacity,stroke-width,systemLanguage,target,text-anchor,to,transform,type,u1,u2,underline-position,underline-thickness,unicode,unicode-range,units-per-em,values,version,viewBox,visibility,width,widths,x,x-height,x1,x2,xlink:actuate,xlink:arcrole,xlink:role,xlink:show,xlink:title,xlink:type,xml:base,xml:lang,xml:space,xmlns,xmlns:xlink,y,y1,y2,zoomAndPan");
    var P = h.extend({}, D, p, n), q = document.createElement("pre"), M = /^(\s*)([\s\S]*?)(\s*)$/;
    h.module("ngSanitize", []).provider("$sanitize", function () {
        this.$get = ["$$sanitizeUri", function (a) {
            return function (d) {
                var c = [];
                F(d, s(c, function (c, b) {
                    return !/^unsafe/.test(a(c, b))
                }));
                return c.join("")
            }
        }]
    });
    h.module("ngSanitize").filter("linky", ["$sanitize", function (a) {
        var d = /((ftp|https?):\/\/|(www\.)|(mailto:)?[A-Za-z0-9._%+-]+@)\S*[^\s.;,(){}<>"\u201d\u2019]/, c = /^mailto:/;
        return function (e, b) {
            function k(a) {
                a && g.push(E(a))
            }

            function f(a, c) {
                g.push("<a ");
                h.isDefined(b) && g.push('target="', b, '" ');
                g.push('href="', a.replace(/"/g, "&quot;"), '">');
                k(c);
                g.push("</a>")
            }

            if (!e)return e;
            for (var m, l = e, g = [], n, p; m = l.match(d);)n = m[0], m[2] || m[4] || (n = (m[3] ? "http://" : "mailto:") + n), p = m.index, k(l.substr(0, p)), f(n, m[0].replace(c, "")), l = l.substring(p + m[0].length);
            k(l);
            return a(g.join(""))
        }
    }])
})(window, window.angular);
//# sourceMappingURL=angular-sanitize.min.js.map