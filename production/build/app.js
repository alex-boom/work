(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

		//carousel
		$(".owl-carousel").owlCarousel({
				autoPlay: 3000, //Set AutoPlay to 3 seconds
				items: 1,
				itemsDesktop: [1199, 1],
				itemsDesktopSmall: [979, 1],
				itemsTablet: [768, 1]
		});
		//top section scroll
		$(window).scroll(function () {
				if ($(this).scrollTop() > 0) {
						$('.section-top').css("opacity", "0");
						$('.section-top').slideUp("slow");
						$("header").addClass("header-fixed");
				} else {
						$('.section-top').css("opacity", "1");
						$('.section-top').slideDown("slow");
						$("header").removeClass("header-fixed");
				}
		});
		//button-down scroll
		$(".fa-angle-down").click(function () {
				var $sec = $('.section-top');
				$sec.css("opacity", "0");
				$sec.slideUp("slow");
				$('.section-advertising').css("marginTop", "0");
		});

		//menu-scroll
		$("#myNavbar ul li a").mPageScroll2id({
				pageEndSmoothScroll: true,
				offset: 70
		});
		//menu-scroll

		//menu-active, hover
		var $NavBar = $("#myNavbar ul li");
		//active
		$NavBar.click(function () {
				$NavBar.removeClass('active');
				$(this).addClass('active');
		});

		//hover
		$NavBar.mouseover(function () {
				$NavBar.removeClass('animated flipInY');
				$(this).addClass('animated flipInY');
		});
		//menu-active, hover

		//animate CSS
		$.fn.animated = function (inEffect) {
				$(this).each(function () {
						var ths = $(this);
						ths.css("opacity", "0").addClass("animated").waypoint(function (dir) {
								if (dir === "down") {
										ths.addClass(inEffect).css("opacity", "1");
								};
						}, {
								offset: "140%"
						});
				});
		};

		$('.section-top .logo img').animated("flip");
		$('.left-box img').animated("fadeInLeft");
		$('.right-box img').animated("fadeInRight");
		$('.line').animated("fadeInDown");

		$(".button-custom").waypoint(function () {
				$(".btn-right img").each(function (index) {
						var ths = $(this);
						setInterval(function () {
								ths.addClass("on");
						}, 300 * index);
				});
		}, {
				offset: "80%"
		});

		$(".point").waypoint(function () {
				$(".block-bottom .item").each(function (index) {
						var ths = $(this);
						setInterval(function () {
								ths.addClass("on");
						}, 300 * index);
				});
		}, {
				offset: "20%"
		});
		//animate CSS

		//btn-map
		$("#calcRout").click(function () {
				$(this).css({ "z-index": "1" });
				$(".fa-angle-up").css({ "z-index": "1", "display": "block" });
				$("#floating-panel").slideToggle().css({ "z-index": "1" });
				$("#map").css({ "z-index": "0" });
		});

		$(".fa-angle-up").click(function () {
				$("html, body").animate({
						scrollTop: $("#wrapper").offset().top
				}, 900);
		});
		//btn-map
})(jQuery);



},{"./helpers":2}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
var HP = {
  random: function random(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
};

exports.default = HP;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7O0FBRVo7QUFDQSxJQUFFLGVBQUYsRUFBbUIsV0FBbkIsQ0FBK0I7QUFDOUIsY0FBVSxJQURvQixFQUNkO0FBQ2hCLFdBQVEsQ0FGc0I7QUFHOUIsa0JBQWUsQ0FBQyxJQUFELEVBQU0sQ0FBTixDQUhlO0FBSTlCLHVCQUFvQixDQUFDLEdBQUQsRUFBSyxDQUFMLENBSlU7QUFLOUIsaUJBQWMsQ0FBQyxHQUFELEVBQUssQ0FBTDtBQUxnQixHQUEvQjtBQU9BO0FBQ0EsSUFBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFZO0FBQzVCLFFBQUksRUFBRSxJQUFGLEVBQVEsU0FBUixLQUFzQixDQUExQixFQUE2QjtBQUM1QixRQUFFLGNBQUYsRUFBa0IsR0FBbEIsQ0FBc0IsU0FBdEIsRUFBaUMsR0FBakM7QUFDQSxRQUFFLGNBQUYsRUFBa0IsT0FBbEIsQ0FBMEIsTUFBMUI7QUFDQSxRQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCLGNBQXJCO0FBQ0EsS0FKRCxNQUlPO0FBQ04sUUFBRSxjQUFGLEVBQWtCLEdBQWxCLENBQXNCLFNBQXRCLEVBQWlDLEdBQWpDO0FBQ0EsUUFBRSxjQUFGLEVBQWtCLFNBQWxCLENBQTRCLE1BQTVCO0FBQ0EsUUFBRSxRQUFGLEVBQVksV0FBWixDQUF3QixjQUF4QjtBQUNBO0FBQ0YsR0FWQTtBQVdBO0FBQ0EsSUFBRSxnQkFBRixFQUFvQixLQUFwQixDQUEwQixZQUFXO0FBQ3BDLFFBQUksT0FBTyxFQUFFLGNBQUYsQ0FBWDtBQUNBLFNBQUssR0FBTCxDQUFTLFNBQVQsRUFBb0IsR0FBcEI7QUFDQSxTQUFLLE9BQUwsQ0FBYSxNQUFiO0FBQ0EsTUFBRSxzQkFBRixFQUEwQixHQUEx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QUFDN0MsUUFBSSxTQUFTLFlBQVksQ0FBWixJQUFpQixZQUFZLENBQVosS0FBa0IsSUFBSSxPQUFPLElBQVAsQ0FBWSxNQUFoQixFQUFoRDtBQUNBLFdBQU8sTUFBUCxDQUFjLEdBQWQ7QUFFRDtBQUNGOztBQUVELFNBQVMscUJBQVQsQ0FBK0IsV0FBL0IsRUFBNEMsTUFBNUMsRUFBb0QsSUFBcEQsRUFBMEQsR0FBMUQsRUFBK0Q7QUFDN0QsU0FBTyxJQUFQLENBQVksS0FBWixDQUFrQixXQUFsQixDQUE4QixNQUE5QixFQUFzQyxPQUF0QyxFQUErQyxZQUFXO0FBQ3hEO0FBQ0E7QUFDQSxnQkFBWSxVQUFaLENBQXVCLElBQXZCO0FBQ0EsZ0JBQVksSUFBWixDQUFpQixHQUFqQixFQUFzQixNQUF0QjtBQUNELEdBTEQ7QUFNRDs7Ozs7Ozs7QUNsTUgsSUFBSSxLQUFLO0FBQ1AsVUFBUSxnQkFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjtBQUN6QixXQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixNQUFNLEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDLEdBQXJEO0FBQ0Q7QUFITSxDQUFUOztrQkFNZSxFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBIUCBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcblxyXG5cdFx0Ly9jYXJvdXNlbFxyXG5cdFx0JChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0XHRhdXRvUGxheTogMzAwMCwgLy9TZXQgQXV0b1BsYXkgdG8gMyBzZWNvbmRzXHJcblx0XHRcdGl0ZW1zIDogMSxcclxuXHRcdFx0aXRlbXNEZXNrdG9wIDogWzExOTksMV0sXHJcblx0XHRcdGl0ZW1zRGVza3RvcFNtYWxsIDogWzk3OSwxXSxcclxuXHRcdFx0aXRlbXNUYWJsZXQgOiBbNzY4LDFdXHJcblx0fSk7XHJcblx0XHQvL3RvcCBzZWN0aW9uIHNjcm9sbFxyXG5cdFx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcblx0XHRcdGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMCkge1xyXG5cdFx0XHRcdCQoJy5zZWN0aW9uLXRvcCcpLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpO1xyXG5cdFx0XHRcdCQoJy5zZWN0aW9uLXRvcCcpLnNsaWRlVXAoXCJzbG93XCIpO1xyXG5cdFx0XHRcdCQoXCJoZWFkZXJcIikuYWRkQ2xhc3MoXCJoZWFkZXItZml4ZWRcIik7XHJcblx0XHRcdH0gZWxzZSB7XHJcblx0XHRcdFx0JCgnLnNlY3Rpb24tdG9wJykuY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7XHJcblx0XHRcdFx0JCgnLnNlY3Rpb24tdG9wJykuc2xpZGVEb3duKFwic2xvd1wiKTtcclxuXHRcdFx0XHQkKFwiaGVhZGVyXCIpLnJlbW92ZUNsYXNzKFwiaGVhZGVyLWZpeGVkXCIpO1xyXG5cdFx0XHR9XHJcblx0fSk7XHJcblx0XHQvL2J1dHRvbi1kb3duIHNjcm9sbFxyXG5cdFx0JChcIi5mYS1hbmdsZS1kb3duXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgJHNlYyA9ICQoJy5zZWN0aW9uLXRvcCcpO1xyXG5cdFx0XHQkc2VjLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpO1xyXG5cdFx0XHQkc2VjLnNsaWRlVXAoXCJzbG93XCIpO1xyXG5cdFx0XHQkKCcuc2VjdGlvbi1hZHZlcnRpc2luZycpLmNzcyhcIm1hcmdpblRvcFwiLCBcIjBcIik7XHJcblx0XHR9KTtcclxuXHJcblx0XHQvL21lbnUtc2Nyb2xsXHJcblx0XHQkKFwiI215TmF2YmFyIHVsIGxpIGFcIikubVBhZ2VTY3JvbGwyaWQoe1xyXG5cdFx0XHRwYWdlRW5kU21vb3RoU2Nyb2xsOiB0cnVlLFxyXG5cdFx0XHRvZmZzZXQ6IDcwXHJcblx0XHR9KTtcclxuXHRcdC8vbWVudS1zY3JvbGxcclxuXHJcblx0XHQvL21lbnUtYWN0aXZlLCBob3ZlclxyXG5cdFx0dmFyICROYXZCYXIgPSAkKFwiI215TmF2YmFyIHVsIGxpXCIpO1xyXG5cdFx0XHQvL2FjdGl2ZVxyXG5cdFx0JE5hdkJhci5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0JE5hdkJhci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fSlcclxuXHJcblx0XHRcdC8vaG92ZXJcclxuXHRcdCROYXZCYXIubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHRcdCROYXZCYXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIGZsaXBJblknKTtcclxuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmxpcEluWScpO1xyXG5cdFx0fSk7XHJcblx0XHQvL21lbnUtYWN0aXZlLCBob3ZlclxyXG5cclxuXHRcdC8vYW5pbWF0ZSBDU1NcclxuXHRcdCQuZm4uYW5pbWF0ZWQgPSBmdW5jdGlvbihpbkVmZmVjdCkge1xyXG5cdFx0XHQkKHRoaXMpLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dmFyIHRocyA9ICQodGhpcyk7XHJcblx0XHRcdFx0dGhzLmNzcyhcIm9wYWNpdHlcIiwgXCIwXCIpLmFkZENsYXNzKFwiYW5pbWF0ZWRcIikud2F5cG9pbnQoZnVuY3Rpb24oZGlyKSB7XHJcblx0XHRcdFx0XHRpZiAoZGlyID09PSBcImRvd25cIikge1xyXG5cdFx0XHRcdFx0XHR0aHMuYWRkQ2xhc3MoaW5FZmZlY3QpLmNzcyhcIm9wYWNpdHlcIiwgXCIxXCIpO1xyXG5cdFx0XHRcdFx0fTtcclxuXHRcdFx0XHR9LCB7XHJcblx0XHRcdFx0XHRvZmZzZXQ6IFwiMTQwJVwiXHJcblx0XHRcdFx0fSk7XHJcblx0XHRcdH0pO1xyXG5cdFx0fTtcclxuXHJcblx0XHQkKCcuc2VjdGlvbi10b3AgLmxvZ28gaW1nJykuYW5pbWF0ZWQoXCJmbGlwXCIpO1xyXG5cdFx0JCgnLmxlZnQtYm94IGltZycpLmFuaW1hdGVkKFwiZmFkZUluTGVmdFwiKTtcclxuXHRcdCQoJy5yaWdodC1ib3ggaW1nJykuYW5pbWF0ZWQoXCJmYWRlSW5SaWdodFwiKTtcclxuXHRcdCQoJy5saW5lJykuYW5pbWF0ZWQoXCJmYWRlSW5Eb3duXCIpO1xyXG5cclxuXHRcdCQoXCIuYnV0dG9uLWN1c3RvbVwiKS53YXlwb2ludChmdW5jdGlvbigpIHtcclxuXHRcdCQoXCIuYnRuLXJpZ2h0IGltZ1wiKS5lYWNoKGZ1bmN0aW9uKGluZGV4KSB7XHJcblx0XHRcdHZhciB0aHMgPSAkKHRoaXMpO1xyXG5cdFx0XHRzZXRJbnRlcnZhbChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR0aHMuYWRkQ2xhc3MoXCJvblwiKTtcclxuXHRcdFx0fSwgMzAwKmluZGV4KTtcclxuXHRcdH0pO1xyXG5cdFx0fSwge1xyXG5cdFx0XHRvZmZzZXQgOiBcIjgwJVwiXHJcblx0XHR9KTtcclxuXHJcblx0XHQkKFwiLnBvaW50XCIpLndheXBvaW50KGZ1bmN0aW9uKCkge1xyXG5cdFx0JChcIi5ibG9jay1ib3R0b20gLml0ZW1cIikuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHR2YXIgdGhzID0gJCh0aGlzKTtcclxuXHRcdFx0c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhzLmFkZENsYXNzKFwib25cIik7XHJcblx0XHRcdH0sIDMwMCppbmRleCk7XHJcblx0XHR9KTtcclxuXHRcdH0sIHtcclxuXHRcdFx0b2Zmc2V0IDogXCIyMCVcIlxyXG5cdFx0fSk7XHJcblx0XHQvL2FuaW1hdGUgQ1NTXHJcblxyXG5cdFx0Ly9idG4tbWFwXHJcblx0XHQkKFwiI2NhbGNSb3V0XCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKHRoaXMpLmNzcyh7XCJ6LWluZGV4XCI6IFwiMVwifSk7XHJcblx0XHQkKFwiLmZhLWFuZ2xlLXVwXCIpLmNzcyh7XCJ6LWluZGV4XCI6IFwiMVwiLCBcImRpc3BsYXlcIjogXCJibG9ja1wifSk7XHJcblx0XHQkKFwiI2Zsb2F0aW5nLXBhbmVsXCIpLnNsaWRlVG9nZ2xlKCkuY3NzKHtcInotaW5kZXhcIjogXCIxXCJ9KTtcclxuXHRcdCQoXCIjbWFwXCIpLmNzcyh7XCJ6LWluZGV4XCI6IFwiMFwifSk7XHJcblx0XHR9KTtcclxuXHJcblx0XHQkKFwiLmZhLWFuZ2xlLXVwXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHRcdCQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xyXG5cdFx0XHRcdHNjcm9sbFRvcCA6ICQoXCIjd3JhcHBlclwiKS5vZmZzZXQoKS50b3BcclxuXHRcdFx0XHR9LCA5MDApO1xyXG5cdFx0XHR9KTtcclxuXHRcdC8vYnRuLW1hcFxyXG5cclxufShqUXVlcnkpKTtcclxuXHJcblx0XHQvL2dvb2dsZSByb2FkLXBsdWdpblxyXG5cdFx0ZnVuY3Rpb24gaW5pdE1hcCgpIHtcclxuXHRcdFx0XHR2YXIgbWFya2VyQXJyYXkgPSBbXTtcclxuXHJcblx0XHRcdFx0Ly8gSW5zdGFudGlhdGUgYSBkaXJlY3Rpb25zIHNlcnZpY2UuXHJcblx0XHRcdFx0dmFyIGRpcmVjdGlvbnNTZXJ2aWNlID0gbmV3IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTZXJ2aWNlO1xyXG5cclxuXHRcdFx0XHQvLyBDcmVhdGUgYSBtYXAgYW5kIGNlbnRlciBpdCBvbiBNYW5oYXR0YW4uXHJcblx0XHRcdFx0dmFyIG1hcCA9IG5ldyBnb29nbGUubWFwcy5NYXAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21hcCcpLCB7XHJcblx0XHRcdFx0XHRcdHpvb206IDE1LFxyXG5cdFx0XHRcdFx0XHRjZW50ZXI6IHtsYXQ6IDUwLjAxNzIzNCwgbG5nOiAzNi4yMDcyOTgxfVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0XHRcdHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcclxuXHRcdFx0XHRcdFx0cG9zaXRpb246IHtsYXQ6IDUwLjAxNzIzNCwgbG5nOiAzNi4yMDcyOTgxfSxcclxuXHRcdFx0XHRcdFx0bWFwOiBtYXAsXHJcblx0XHRcdFx0XHRcdGljb246IFwiaHR0cDovL3d3dy56b2xvdGllLWtsdWNoaS5raGFya292LnVhL3dwLWNvbnRlbnQvdGhlbWVzL2dvbGRlbl9rZXlzL2ltZy9tYXAtbWFya2VyLWljb24ucG5nXCJcclxuXHRcdFx0XHR9KTtcclxuXHJcblx0XHRcdFx0Ly8gQ3JlYXRlIGEgcmVuZGVyZXIgZm9yIGRpcmVjdGlvbnMgYW5kIGJpbmQgaXQgdG8gdGhlIG1hcC5cclxuXHRcdFx0XHR2YXIgZGlyZWN0aW9uc0Rpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuRGlyZWN0aW9uc1JlbmRlcmVyKHttYXA6IG1hcH0pO1xyXG5cclxuXHRcdFx0XHQvLyBJbnN0YW50aWF0ZSBhbiBpbmZvIHdpbmRvdyB0byBob2xkIHN0ZXAgdGV4dC5cclxuXHRcdFx0XHR2YXIgc3RlcERpc3BsYXkgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdztcclxuXHJcblx0XHRcdFx0Ly8gRGlzcGxheSB0aGUgcm91dGUgYmV0d2VlbiB0aGUgaW5pdGlhbCBzdGFydCBhbmQgZW5kIHNlbGVjdGlvbnMuXHJcblx0XHRcdFx0Y2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlKFxyXG5cdFx0XHRcdFx0XHRkaXJlY3Rpb25zRGlzcGxheSwgZGlyZWN0aW9uc1NlcnZpY2UsIG1hcmtlckFycmF5LCBzdGVwRGlzcGxheSwgbWFwKTtcclxuXHRcdFx0XHQvLyBMaXN0ZW4gdG8gY2hhbmdlIGV2ZW50cyBmcm9tIHRoZSBzdGFydCBhbmQgZW5kIGxpc3RzLlxyXG5cdFx0XHRcdHZhciBvbkNoYW5nZUhhbmRsZXIgPSBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Y2FsY3VsYXRlQW5kRGlzcGxheVJvdXRlKFxyXG5cdFx0XHRcdFx0XHRcdFx0ZGlyZWN0aW9uc0Rpc3BsYXksIGRpcmVjdGlvbnNTZXJ2aWNlLCBtYXJrZXJBcnJheSwgc3RlcERpc3BsYXksIG1hcCk7XHJcblx0XHRcdFx0fTtcclxuXHRcdFx0XHRkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnc3RhcnQnKS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBvbkNoYW5nZUhhbmRsZXIpO1xyXG5cdFx0fVxyXG5cdFx0dmFyIGVuZCA9IFwi0KXQsNGA0LrRltCyLCDQstGD0LvQuNGG0Y8g0JLQtdGB0LXQu9CwIDMwXCI7XHJcblx0XHRmdW5jdGlvbiBjYWxjdWxhdGVBbmREaXNwbGF5Um91dGUoZGlyZWN0aW9uc0Rpc3BsYXksIGRpcmVjdGlvbnNTZXJ2aWNlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1hcmtlckFycmF5LCBzdGVwRGlzcGxheSwgbWFwKSB7XHJcblx0XHRcdFx0Ly8gRmlyc3QsIHJlbW92ZSBhbnkgZXhpc3RpbmcgbWFya2VycyBmcm9tIHRoZSBtYXAuXHJcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtYXJrZXJBcnJheS5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHRtYXJrZXJBcnJheVtpXS5zZXRNYXAobnVsbCk7XHJcblx0XHRcdFx0fVxyXG5cclxuXHRcdFx0XHQvLyBSZXRyaWV2ZSB0aGUgc3RhcnQgYW5kIGVuZCBsb2NhdGlvbnMgYW5kIGNyZWF0ZSBhIERpcmVjdGlvbnNSZXF1ZXN0IHVzaW5nXHJcblx0XHRcdFx0Ly8gV0FMS0lORyBkaXJlY3Rpb25zLlxyXG5cdFx0XHRcdGRpcmVjdGlvbnNTZXJ2aWNlLnJvdXRlKHtcclxuXHRcdFx0XHRcdFx0b3JpZ2luOiBcItCl0LDRgNGM0LrQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YxcIiArIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdzdGFydCcpLnZhbHVlLFxyXG5cdFx0XHRcdFx0XHRkZXN0aW5hdGlvbjogZW5kLFxyXG5cdFx0XHRcdFx0XHR0cmF2ZWxNb2RlOiBnb29nbGUubWFwcy5UcmF2ZWxNb2RlLldBTEtJTkdcclxuXHRcdFx0XHR9LCBmdW5jdGlvbihyZXNwb25zZSwgc3RhdHVzKSB7XHJcblx0XHRcdFx0XHRcdC8vIFJvdXRlIHRoZSBkaXJlY3Rpb25zIGFuZCBwYXNzIHRoZSByZXNwb25zZSB0byBhIGZ1bmN0aW9uIHRvIGNyZWF0ZVxyXG5cdFx0XHRcdFx0XHQvLyBtYXJrZXJzIGZvciBlYWNoIHN0ZXAuXHJcblx0XHRcdFx0XHRcdGlmIChzdGF0dXMgPT09IGdvb2dsZS5tYXBzLkRpcmVjdGlvbnNTdGF0dXMuT0spIHtcclxuXHRcdFx0XHRcdFx0XHRcdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd3YXJuaW5ncy1wYW5lbCcpLmlubmVySFRNTCA9XHJcblx0XHRcdFx0XHRcdFx0XHRcdFx0JzxiPicgKyByZXNwb25zZS5yb3V0ZXNbMF0ud2FybmluZ3MgKyAnPC9iPic7XHJcblx0XHRcdFx0XHRcdFx0XHRkaXJlY3Rpb25zRGlzcGxheS5zZXREaXJlY3Rpb25zKHJlc3BvbnNlKTtcclxuXHRcdFx0XHRcdFx0XHRcdHNob3dTdGVwcyhyZXNwb25zZSwgbWFya2VyQXJyYXksIHN0ZXBEaXNwbGF5LCBtYXApO1xyXG5cdFx0XHRcdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdFx0XHRcdFx0d2luZG93LmNvbnNvbGUubG9nKCdEaXJlY3Rpb25zIHJlcXVlc3QgZmFpbGVkIGR1ZSB0byAnICsgc3RhdHVzKTtcclxuXHRcdFx0XHRcdFx0fVxyXG5cdFx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cclxuXHRcdGZ1bmN0aW9uIHNob3dTdGVwcyhkaXJlY3Rpb25SZXN1bHQsIG1hcmtlckFycmF5LCBzdGVwRGlzcGxheSwgbWFwKSB7XHJcblx0XHRcdFx0Ly8gRm9yIGVhY2ggc3RlcCwgcGxhY2UgYSBtYXJrZXIsIGFuZCBhZGQgdGhlIHRleHQgdG8gdGhlIG1hcmtlcidzIGluZm93aW5kb3cuXHJcblx0XHRcdFx0Ly8gQWxzbyBhdHRhY2ggdGhlIG1hcmtlciB0byBhbiBhcnJheSBzbyB3ZSBjYW4ga2VlcCB0cmFjayBvZiBpdCBhbmQgcmVtb3ZlIGl0XHJcblx0XHRcdFx0Ly8gd2hlbiBjYWxjdWxhdGluZyBuZXcgcm91dGVzLlxyXG5cdFx0XHRcdHZhciBteVJvdXRlID0gZGlyZWN0aW9uUmVzdWx0LnJvdXRlc1swXS5sZWdzWzBdO1xyXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbXlSb3V0ZS5zdGVwcy5sZW5ndGg7IGkrKykge1xyXG5cdFx0XHRcdFx0XHR2YXIgbWFya2VyID0gbWFya2VyQXJyYXlbaV0gPSBtYXJrZXJBcnJheVtpXSB8fCBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyO1xyXG5cdFx0XHRcdFx0XHRtYXJrZXIuc2V0TWFwKG1hcCk7XHJcblxyXG5cdFx0XHRcdH1cclxuXHRcdH1cclxuXHJcblx0XHRmdW5jdGlvbiBhdHRhY2hJbnN0cnVjdGlvblRleHQoc3RlcERpc3BsYXksIG1hcmtlciwgdGV4dCwgbWFwKSB7XHJcblx0XHRcdFx0Z29vZ2xlLm1hcHMuZXZlbnQuYWRkTGlzdGVuZXIobWFya2VyLCAnY2xpY2snLCBmdW5jdGlvbigpIHtcclxuXHRcdFx0XHRcdFx0Ly8gT3BlbiBhbiBpbmZvIHdpbmRvdyB3aGVuIHRoZSBtYXJrZXIgaXMgY2xpY2tlZCBvbiwgY29udGFpbmluZyB0aGUgdGV4dFxyXG5cdFx0XHRcdFx0XHQvLyBvZiB0aGUgc3RlcC5cclxuXHRcdFx0XHRcdFx0c3RlcERpc3BsYXkuc2V0Q29udGVudCh0ZXh0KTtcclxuXHRcdFx0XHRcdFx0c3RlcERpc3BsYXkub3BlbihtYXAsIG1hcmtlcik7XHJcblx0XHRcdFx0fSk7XHJcblx0XHR9OyIsInZhciBIUCA9IHtcclxuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhQOyJdfQ==

//google road-plugin
function initMap() {
		var markerArray = [];

		// Instantiate a directions service.
		var directionsService = new google.maps.DirectionsService();

		// Create a map and center it on Manhattan.
		var map = new google.maps.Map(document.getElementById('map'), {
				zoom: 15,
				center: { lat: 50.017234, lng: 36.2072981 }
		});
		var marker = new google.maps.Marker({
				position: { lat: 50.017234, lng: 36.2072981 },
				map: map,
				icon: "http://www.zolotie-kluchi.kharkov.ua/wp-content/themes/golden_keys/img/map-marker-icon.png"
		});

		// Create a renderer for directions and bind it to the map.
		var directionsDisplay = new google.maps.DirectionsRenderer({ map: map });

		// Instantiate an info window to hold step text.
		var stepDisplay = new google.maps.InfoWindow();

		// Display the route between the initial start and end selections.
		calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, map);
		// Listen to change events from the start and end lists.
		var onChangeHandler = function onChangeHandler() {
				calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, map);
		};
		document.getElementById('start').addEventListener('change', onChangeHandler);
}
var end = "Харків, вулиця Весела 30";
function calculateAndDisplayRoute(directionsDisplay, directionsService, markerArray, stepDisplay, map) {
		// First, remove any existing markers from the map.
		for (var i = 0; i < markerArray.length; i++) {
				markerArray[i].setMap(null);
		}

		// Retrieve the start and end locations and create a DirectionsRequest using
		// WALKING directions.
		directionsService.route({
				origin: "Харьковская область" + document.getElementById('start').value,
				destination: end,
				travelMode: google.maps.TravelMode.WALKING
		}, function (response, status) {
				// Route the directions and pass the response to a function to create
				// markers for each step.
				if (status === google.maps.DirectionsStatus.OK) {
						document.getElementById('warnings-panel').innerHTML = '<b>' + response.routes[0].warnings + '</b>';
						directionsDisplay.setDirections(response);
						showSteps(response, markerArray, stepDisplay, map);
				} else {
						window.console.log('Directions request failed due to ' + status);
				}
		});
}

function showSteps(directionResult, markerArray, stepDisplay, map) {
		// For each step, place a marker, and add the text to the marker's infowindow.
		// Also attach the marker to an array so we can keep track of it and remove it
		// when calculating new routes.
		var myRoute = directionResult.routes[0].legs[0];
		for (var i = 0; i < myRoute.steps.length; i++) {
				var marker = markerArray[i] = markerArray[i] || new google.maps.Marker();
				marker.setMap(map);
		}
}

function attachInstructionText(stepDisplay, marker, text, map) {
		google.maps.event.addListener(marker, 'click', function () {
				// Open an info window when the marker is clicked on, containing the text
				// of the step.
				stepDisplay.setContent(text);
				stepDisplay.open(map, marker);
		});
};