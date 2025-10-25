$(document).ready(function () {


	//прилипающие меню
	var $menu = $(".header");
	$(window).scroll(function () {
		if ($(this).scrollTop() > 0 && $menu.hasClass("default")) {
			$menu.removeClass("default").addClass("fixed");
		} else if ($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
			$menu.removeClass("fixed").addClass("default");
		}

	});

	if ($(this).scrollTop() > 0 && $menu.hasClass("default")) {
		$menu.removeClass("default").addClass("fixed");
	} else if ($(this).scrollTop() <= 0 && $menu.hasClass("fixed")) {
		$menu.removeClass("fixed").addClass("default");
	}

	$(".item-dropdown__head").click(function () {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-dropdown").removeClass("active");
		$(this).parent().siblings(".item-dropdown").find(".item-dropdown__content").slideUp(200);
	});

	$(".item-question__head").click(function () {
		$(this).parent().toggleClass("active");
		$(this).siblings().slideToggle(200);
		$(this).parent().siblings(".item-question").removeClass("active");
		$(this).parent().siblings(".item-question").find(".item-question__content").slideUp(200);
	});


	//кнопка sandwich
	$(".sandwich").click(function () {
		if ($(".menu-mobile").is(":hidden")) {
			$(".sandwich").addClass("active");
			$(".menu-mobile").slideDown(200);
			$(".menu-overlay").fadeIn(200);
			$("body").addClass("no-scroll");
		} else {
			$(".sandwich").removeClass("active");
			$(".menu-mobile").slideUp(200);
			$(".menu-overlay").fadeOut(200);
			$("body").removeClass("no-scroll");
		}
	});

	$(".menu-overlay, .menu-mobile a").click(function () {
		$(".sandwich").removeClass("active");
		$(".menu-mobile").slideUp(200);
		$(".menu-overlay").fadeOut(200);
		$("body").removeClass("no-scroll");
	});

	//слайдер

	$('.slider-unit').each(function () {
		const $unit = $(this);
		const $sliderFor = $unit.find('.slider-for');
		const $sliderNav = $unit.find('.slider-nav');

		$sliderFor.slick({
			arrows: false,
			dots: false,
			infinite: true,
			touchThreshold: 1000,
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: $sliderNav,
		});

		$sliderNav.slick({
			arrows: false,
			dots: false,
			infinite: true,
			touchThreshold: 1000,
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: $sliderFor,
			focusOnSelect: true,
			variableWidth: true,
		});
	});

	$('.slider-reviews').slick({
		arrows: true,
		dots: false,
		infinite: false,
		touchThreshold: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		prevArrow: '<div class="slick-prev slick-arrow"><img src="img/prev.svg" alt="alt"></div>',
		nextArrow: '<div class="slick-next slick-arrow"><img src="img/next.svg" alt="alt"></div>',
	});

	$('.tabs li a').click(function (event) {
		event.preventDefault();
		$(this).parent().parent().find("li").removeClass('active');
		$(this).parent().addClass('active');
		$(".tab-pane").fadeOut(0);
		var selectTab = $(this).attr("href");
		$(selectTab).fadeIn(200);
		$('.tab-pane').find(".slider-for").slick('setPosition');
		$('.tab-pane').find(".slider-nav").slick('setPosition');
	});

	$(".open-format").click(function () {
		$(this).toggleClass("active");
		$(this).siblings(".slider-unit").slideToggle(200);
		$(this).siblings(".slider-unit").find(".slider-for").slick('setPosition');
		$(this).siblings(".slider-unit").find(".slider-nav").slick('setPosition');
	});


	// плавный скролл
	$('.menu__list a').on('click', function (e) {
		e.preventDefault();

		var targetId = $(this).attr('href');

		$('html, body').animate({
			scrollTop: $(targetId).offset().top
		}, 800);
	});

	//Попап менеджер FancyBox
	$(".fancybox").fancybox({
		autoFocus: false,
		backFocus: false,
	});


	objectFitImages();


});


/*polifyl*/
/*! npm.im/object-fit-images 3.2.4 */
var objectFitImages = function () { "use strict"; function t(t, e) { return "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='" + t + "' height='" + e + "'%3E%3C/svg%3E" } function e(t) { if (t.srcset && !p && window.picturefill) { var e = window.picturefill._; t[e.ns] && t[e.ns].evaled || e.fillImg(t, { reselect: !0 }), t[e.ns].curSrc || (t[e.ns].supported = !1, e.fillImg(t, { reselect: !0 })), t.currentSrc = t[e.ns].curSrc || t.src } } function i(t) { for (var e, i = getComputedStyle(t).fontFamily, r = {}; null !== (e = u.exec(i));)r[e[1]] = e[2]; return r } function r(e, i, r) { var n = t(i || 1, r || 0); b.call(e, "src") !== n && h.call(e, "src", n) } function n(t, e) { t.naturalWidth ? e(t) : setTimeout(n, 100, t, e) } function c(t) { var c = i(t), o = t[l]; if (c["object-fit"] = c["object-fit"] || "fill", !o.img) { if ("fill" === c["object-fit"]) return; if (!o.skipTest && f && !c["object-position"]) return } if (!o.img) { o.img = new Image(t.width, t.height), o.img.srcset = b.call(t, "data-ofi-srcset") || t.srcset, o.img.src = b.call(t, "data-ofi-src") || t.src, h.call(t, "data-ofi-src", t.src), t.srcset && h.call(t, "data-ofi-srcset", t.srcset), r(t, t.naturalWidth || t.width, t.naturalHeight || t.height), t.srcset && (t.srcset = ""); try { s(t) } catch (t) { window.console && console.warn("https://bit.ly/ofi-old-browser") } } e(o.img), t.style.backgroundImage = 'url("' + (o.img.currentSrc || o.img.src).replace(/"/g, '\\"') + '")', t.style.backgroundPosition = c["object-position"] || "center", t.style.backgroundRepeat = "no-repeat", t.style.backgroundOrigin = "content-box", /scale-down/.test(c["object-fit"]) ? n(o.img, function () { o.img.naturalWidth > t.width || o.img.naturalHeight > t.height ? t.style.backgroundSize = "contain" : t.style.backgroundSize = "auto" }) : t.style.backgroundSize = c["object-fit"].replace("none", "auto").replace("fill", "100% 100%"), n(o.img, function (e) { r(t, e.naturalWidth, e.naturalHeight) }) } function s(t) { var e = { get: function (e) { return t[l].img[e ? e : "src"] }, set: function (e, i) { return t[l].img[i ? i : "src"] = e, h.call(t, "data-ofi-" + i, e), c(t), e } }; Object.defineProperty(t, "src", e), Object.defineProperty(t, "currentSrc", { get: function () { return e.get("currentSrc") } }), Object.defineProperty(t, "srcset", { get: function () { return e.get("srcset") }, set: function (t) { return e.set(t, "srcset") } }) } function o() { function t(t, e) { return t[l] && t[l].img && ("src" === e || "srcset" === e) ? t[l].img : t } d || (HTMLImageElement.prototype.getAttribute = function (e) { return b.call(t(this, e), e) }, HTMLImageElement.prototype.setAttribute = function (e, i) { return h.call(t(this, e), e, String(i)) }) } function a(t, e) { var i = !y && !t; if (e = e || {}, t = t || "img", d && !e.skipTest || !m) return !1; "img" === t ? t = document.getElementsByTagName("img") : "string" == typeof t ? t = document.querySelectorAll(t) : "length" in t || (t = [t]); for (var r = 0; r < t.length; r++)t[r][l] = t[r][l] || { skipTest: e.skipTest }, c(t[r]); i && (document.body.addEventListener("load", function (t) { "IMG" === t.target.tagName && a(t.target, { skipTest: e.skipTest }) }, !0), y = !0, t = "img"), e.watchMQ && window.addEventListener("resize", a.bind(null, t, { skipTest: e.skipTest })) } var l = "fregante:object-fit-images", u = /(object-fit|object-position)\s*:\s*([-.\w\s%]+)/g, g = "undefined" == typeof Image ? { style: { "object-position": 1 } } : new Image, f = "object-fit" in g.style, d = "object-position" in g.style, m = "background-size" in g.style, p = "string" == typeof g.currentSrc, b = g.getAttribute, h = g.setAttribute, y = !1; return a.supportsObjectFit = f, a.supportsObjectPosition = d, o(), a }();

