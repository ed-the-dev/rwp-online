! function () {
    $("#global-nav-toggle").on("click", function () {
        $("body, #global-nav, #global-nav-toggle").toggleClass("menu-open")
    }), $("#global-nav a").on("click", function () {
        $("body, #global-nav, #global-nav-toggle").removeClass("menu-open")
    })
}(),
function () {
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function (e) {
        if (window.location.pathname.replace(/^\//, "") === this.pathname.replace(/^\//, "") && window.location.hostname === this.hostname) {
            var t = $(this.hash);
            t = t.length ? t : $("[name=" + this.hash.slice(1) + "]"), t.length && "intro" !== t[0].id ? (e.preventDefault(), $("html, body").animate({
                scrollTop: t.offset().top
            }, 600, function () {
                var e = $(t);
                return e.focus(), !e.is(":focus") && (e.attr("tabindex", "-1"), void e.focus())
            })) : t.length && "intro" === t[0].id && $("html, body").animate({
                scrollTop: 0
            }, 600)
        }
    })
}(),
function () {
    var e = $("article.slide"),
        t = $("body");
    e.waypoint(function (e) {
        if ("down" === e) {
            t.attr("class", this.element.id);
            var n = $("#" + this.element.id);
            n.removeClass("next prev"), n.addClass("current"), n.siblings("article").removeClass("current next prev"), n.next("article").addClass("next"), n.prev("article").addClass("prev"), $("#global-nav a").removeClass("current"), $('#global-nav [href*="' + this.element.id + '"]').addClass("current")
        }
    }, {
        offset: function () {
            var e = .5 * $(window).height();
            return e
        }
    }), e.waypoint(function (e) {
        if ("up" === e) {
            t.attr("class", this.element.id);
            var n = $("#" + this.element.id);
            n.removeClass("next prev"), n.addClass("current"), n.siblings("article").removeClass("current next prev"), n.next("article").addClass("next"), n.prev("article").addClass("prev"), $("#global-nav a").removeClass("current"), $('#global-nav [href*="' + this.element.id + '"]').addClass("current")
        }
    }, {
        offset: function () {
            var e = -this.element.clientHeight + .5 * $(window).height();
            return e
        }
    })
}();
