/**
 * ==============================================================================
 * Author:
 * Date: 2020
 * IDE :
 * ==============================================================================
 **/
(function (doc, win) {
	var docEl = doc.documentElement,
		resizeEvt = "orientationchange" in window ? "orientationchange" : "resize",
		recalc = function () {
			var clientWidth = docEl.clientWidth;
			if (!clientWidth) return;
			if (clientWidth >= 750) {
				docEl.style.fontSize = "100px";
			} else {
				docEl.style.fontSize = 100 * (clientWidth / 750) + "px";
			}
		};

	if (!doc.addEventListener) return;
	win.addEventListener(resizeEvt, recalc, false);
	doc.addEventListener("DOMContentLoaded", recalc, false);
})(document, window);

$(function () {
	// swiper-pic-carouselr
	var swiper1 = new Swiper(".swiper-pic-carousel", {
		loop: true,
		observer: true,
		slidesPerView: 1,
		observeParents: true,
		speed: 800,
		autoplay: {
			disableOnInteraction: false,
			delay: 3500,
		},
		pagination: {
			el: ".swiper-pagination",
			bulletClass: "my-bullet",
		},
	});

	//* swiperTab
	$(".swiperTab .tab-head .item-head").each(function () {
		const a = $(this).index();
		$(this).on("click", function () {
			$(this).addClass("active").siblings().removeClass("active");
			_stab.slideTo(a);
		});
	});
	const _stab = new Swiper(".swiperTab .tab-content", {
		loop: false,
		observer: true,
		observeParents: true,
		on: {
			slideChange: function () {
				$(".swiperTab  .tab-head .item-head")
					.eq(this.activeIndex)
					.addClass("active")
					.siblings()
					.removeClass("active");
			},
		},
	});

	myTime()
});

function myTime() {
	setInterval(function() {
			var f, g, h, i, b = new Date(), e = b.getDate();
			switch (9 >= e && (e = "0" + e), f = b.getHours(), 9 >= f && (f = "0" + f), g = b.getMinutes(), 
			9 >= g && (g = "0" + g), h = b.getSeconds(), 9 >= h && (h = "0" + h), i = b.getDay()) {
				case 1:
					i = "星期一";
					break;

				case 2:
					i = "星期二";
					break;

				case 3:
					i = "星期三";
					break;

				case 4:
					i = "星期四";
					break;

				case 5:
					i = "星期五";
					break;

				case 6:
					i = "星期六";
					break;

				case 0:
					i = "星期日";
			}
			$(".time-box").text( f + ":" + g + ":" + h);
	}, 1e3);
}
 