(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

	//sticky header
	$(window).scroll(function () {
		if ($(this).scrollTop() > 1) {
			$('.header').addClass("sticky");
		} else {
			$('.header').removeClass("sticky");
		}
	});
	//sticky header

	//burger-menu
	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".main-nav").slideToggle();
		return false;
	});
	//burger-menu

	//background-slider
	$(".section-slider .item").each(function (e) {
		$(this).addClass("bg-" + e);
	});
	//background-slider

	//owlCarousel
	$(".owl-carousel").owlCarousel({
		autoPlay: 7000,
		loop: true,
		navigation: true,
		slideSpeed: 300,
		paginationSpeed: 400,
		singleItem: true,
		items: 1,
		navigationText: []
	});
	//owlCarousel

	//equalHeights
	$.fn.equalHeights = function () {
		var maxHeight = 0,
		    $this = $(this);
		$this.each(function () {
			var height = $(this).innerHeight();
			if (height > maxHeight) {
				maxHeight = height;
			}
		});
		return $this.css('height', maxHeight);
	};
	$('[data-equal]').each(function () {
		var $this = $(this),
		    target = $this.data('equal');
		$this.find(target).equalHeights();
	});
	$('.section-slider .item').equalHeights();
	//equalHeights

	//mPageScroll2id
	$(".main-nav li a").mPageScroll2id({
		pageEndSmoothScroll: true,
		offset: 0
	});

	var $btnUp = $(".btn-up");
	$btnUp.mPageScroll2id({
		pageEndSmoothScroll: true,
		offset: 0
	});
	//mPageScroll2id

	//fadeIn, fadeOut "up-btn" if scroll
	$btnUp.css('display', 'none');
	$(window).scroll(function () {
		if ($(this).scrollTop() > 2500) {
			if ($(this).scroll(function () {
				$btnUp.css('display', 'none');
			})) ;
			$btnUp.fadeIn(1000);
		} else {
			$btnUp.fadeOut();
		}
	});
	//fadeIn, fadeOut "up-btn" if scroll

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7O0FBRWI7QUFDQSxHQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVc7QUFDM0IsTUFBSSxFQUFFLElBQUYsRUFBUSxTQUFSLEtBQXNCLENBQTFCLEVBQTZCO0FBQzVCLEtBQUUsU0FBRixFQUFhLFFBQWIsQ0FBc0IsUUFBdEI7QUFDQSxHQUZELE1BRU87QUFDTixLQUFFLFNBQUYsRUFBYSxXQUFiLENBQXlCLFFBQXpCO0FBQ0E7QUFDRCxFQU5EO0FBT0E7O0FBRUE7QUFDQSxHQUFFLGFBQUYsRUFBaUIsS0FBakIsQ0FBdUIsWUFBVztBQUNqQyxJQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLElBQXBCO0FBQ0EsSUFBRSxXQUFGLEVBQWUsV0FBZjtBQUNBLFNBQU8sS0FBUDtBQUNBLEVBSkQ7QUFLQTs7QUFFQTtBQUNBLEdBQUUsdUJBQUYsRUFBMkIsSUFBM0IsQ0FBZ0MsVUFBUyxDQUFULEVBQVc7QUFDMUMsSUFBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixRQUFRLENBQXpCO0FBQ0EsRUFGRDtBQUdBOztBQUVBO0FBQ0EsR0FBRSxlQUFGLEVBQW1CLFdBQW5CLENBQStCO0FBQzlCLFlBQVUsSUFEb0I7QUFFOUIsUUFBTSxJQUZ3QjtBQUc5QixjQUFhLElBSGlCO0FBSTlCLGNBQWEsR0FKaUI7QUFLOUIsbUJBQWtCLEdBTFk7QUFNOUIsY0FBVyxJQU5tQjtBQU85QixTQUFRLENBUHNCO0FBUTlCLGtCQUFpQjtBQVJhLEVBQS9CO0FBVUE7O0FBRUE7QUFDQSxHQUFFLEVBQUYsQ0FBSyxZQUFMLEdBQW9CLFlBQVc7QUFDOUIsTUFBSSxZQUFZLENBQWhCO0FBQUEsTUFDQyxRQUFRLEVBQUUsSUFBRixDQURUO0FBRUEsUUFBTSxJQUFOLENBQVcsWUFBVztBQUNyQixPQUFJLFNBQVMsRUFBRSxJQUFGLEVBQVEsV0FBUixFQUFiO0FBQ0EsT0FBSSxTQUFTLFNBQWIsRUFBd0I7QUFBRSxnQkFBWSxNQUFaO0FBQXFCO0FBQy9DLEdBSEQ7QUFJQSxTQUFPLE1BQU0sR0FBTixDQUFVLFFBQVYsRUFBb0IsU0FBcEIsQ0FBUDtBQUNBLEVBUkQ7QUFTQSxHQUFFLGNBQUYsRUFBa0IsSUFBbEIsQ0FBdUIsWUFBVztBQUNqQyxNQUFJLFFBQVEsRUFBRSxJQUFGLENBQVo7QUFBQSxNQUNDLFNBQVMsTUFBTSxJQUFOLENBQVcsT0FBWCxDQURWO0FBRUEsUUFBTSxJQUFOLENBQVcsTUFBWCxFQUFtQixZQUFuQjtBQUNBLEVBSkQ7QUFLQSxHQUFFLHVCQUFGLEVBQTJCLFlBQTNCO0FBQ0E7O0FBRUE7QUFDQSxHQUFFLGdCQUFGLEVBQW9CLGNBQXBCLENBQW1DO0FBQ2xDLHVCQUFxQixJQURhO0FBRWxDLFVBQVE7QUFGMEIsRUFBbkM7O0FBS0EsS0FBSSxTQUFTLEVBQUUsU0FBRixDQUFiO0FBQ0EsUUFBTyxjQUFQLENBQXNCO0FBQ3JCLHVCQUFxQixJQURBO0FBRXJCLFVBQVE7QUFGYSxFQUF0QjtBQUlBOztBQUVBO0FBQ0MsUUFBTyxHQUFQLENBQVcsU0FBWCxFQUFzQixNQUF0QjtBQUNBLEdBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBVztBQUMzQixNQUFJLEVBQUUsSUFBRixFQUFRLFNBQVIsS0FBc0IsSUFBMUIsRUFBZ0M7QUFDL0IsT0FBSSxFQUFFLElBQUYsRUFBUSxNQUFSLENBQWUsWUFBVTtBQUM1QixXQUFPLEdBQVAsQ0FBVyxTQUFYLEVBQXNCLE1BQXRCO0FBQ0EsSUFGRyxDQUFKLEVBRUc7QUFDSCxVQUFPLE1BQVAsQ0FBYyxJQUFkO0FBQ0EsR0FMRCxNQUtPO0FBQ04sVUFBTyxPQUFQO0FBQ0E7QUFDRCxFQVREO0FBVUY7O0FBR0MsQ0FyRkEsRUFxRkMsTUFyRkQsQ0FBRDs7Ozs7Ozs7QUNGQSxJQUFJLEtBQUs7QUFDUCxVQUFRLGdCQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CO0FBQ3pCLFdBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLE1BQWlCLE1BQU0sR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOEMsR0FBckQ7QUFDRDtBQUhNLENBQVQ7O2tCQU1lLEUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEhQIGZyb20gJy4vaGVscGVycyc7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHJcblx0Ly9zdGlja3kgaGVhZGVyXHJcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpIHtcclxuXHRcdGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMSkge1xyXG5cdFx0XHQkKCcuaGVhZGVyJykuYWRkQ2xhc3MoXCJzdGlja3lcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcuaGVhZGVyJykucmVtb3ZlQ2xhc3MoXCJzdGlja3lcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Ly9zdGlja3kgaGVhZGVyXHJcblxyXG5cdC8vYnVyZ2VyLW1lbnVcclxuXHQkKFwiLnRvZ2dsZS1tbnVcIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHQkKHRoaXMpLnRvZ2dsZUNsYXNzKFwib25cIik7XHJcblx0XHQkKFwiLm1haW4tbmF2XCIpLnNsaWRlVG9nZ2xlKCk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSlcclxuXHQvL2J1cmdlci1tZW51XHJcblxyXG5cdC8vYmFja2dyb3VuZC1zbGlkZXJcclxuXHQkKFwiLnNlY3Rpb24tc2xpZGVyIC5pdGVtXCIpLmVhY2goZnVuY3Rpb24oZSl7XHJcblx0XHQkKHRoaXMpLmFkZENsYXNzKFwiYmctXCIgKyBlKTtcclxuXHR9KTtcclxuXHQvL2JhY2tncm91bmQtc2xpZGVyXHJcblxyXG5cdC8vb3dsQ2Fyb3VzZWxcclxuXHQkKFwiLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRhdXRvUGxheTogNzAwMCxcclxuXHRcdGxvb3A6IHRydWUsXHJcblx0XHRuYXZpZ2F0aW9uIDogdHJ1ZSxcclxuXHRcdHNsaWRlU3BlZWQgOiAzMDAsXHJcblx0XHRwYWdpbmF0aW9uU3BlZWQgOiA0MDAsXHJcblx0XHRzaW5nbGVJdGVtOnRydWUsXHJcblx0XHRpdGVtcyA6IDEsXHJcblx0XHRuYXZpZ2F0aW9uVGV4dCA6IFtdLFxyXG5cdH0pO1xyXG5cdC8vb3dsQ2Fyb3VzZWxcclxuXHJcblx0Ly9lcXVhbEhlaWdodHNcclxuXHQkLmZuLmVxdWFsSGVpZ2h0cyA9IGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyIG1heEhlaWdodCA9IDAsXHJcblx0XHRcdCR0aGlzID0gJCh0aGlzKTtcclxuXHRcdCR0aGlzLmVhY2goZnVuY3Rpb24oKSB7XHJcblx0XHRcdHZhciBoZWlnaHQgPSAkKHRoaXMpLmlubmVySGVpZ2h0KCk7XHJcblx0XHRcdGlmIChoZWlnaHQgPiBtYXhIZWlnaHQpIHsgbWF4SGVpZ2h0ID0gaGVpZ2h0OyB9XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiAkdGhpcy5jc3MoJ2hlaWdodCcsIG1heEhlaWdodCk7XHJcblx0fTtcclxuXHQkKCdbZGF0YS1lcXVhbF0nKS5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0dmFyICR0aGlzID0gJCh0aGlzKSxcclxuXHRcdFx0dGFyZ2V0ID0gJHRoaXMuZGF0YSgnZXF1YWwnKTtcclxuXHRcdCR0aGlzLmZpbmQodGFyZ2V0KS5lcXVhbEhlaWdodHMoKTtcclxuXHR9KTtcclxuXHQkKCcuc2VjdGlvbi1zbGlkZXIgLml0ZW0nKS5lcXVhbEhlaWdodHMoKTtcclxuXHQvL2VxdWFsSGVpZ2h0c1xyXG5cclxuXHQvL21QYWdlU2Nyb2xsMmlkXHJcblx0JChcIi5tYWluLW5hdiBsaSBhXCIpLm1QYWdlU2Nyb2xsMmlkKHtcclxuXHRcdHBhZ2VFbmRTbW9vdGhTY3JvbGw6IHRydWUsXHJcblx0XHRvZmZzZXQ6IDBcclxuXHR9KTtcclxuXHJcblx0dmFyICRidG5VcCA9ICQoXCIuYnRuLXVwXCIpO1xyXG5cdCRidG5VcC5tUGFnZVNjcm9sbDJpZCh7XHJcblx0XHRwYWdlRW5kU21vb3RoU2Nyb2xsOiB0cnVlLFxyXG5cdFx0b2Zmc2V0OiAwXHJcblx0fSk7XHJcblx0Ly9tUGFnZVNjcm9sbDJpZFxyXG5cclxuXHQvL2ZhZGVJbiwgZmFkZU91dCBcInVwLWJ0blwiIGlmIHNjcm9sbFxyXG5cdFx0JGJ0blVwLmNzcygnZGlzcGxheScsICdub25lJyk7XHJcblx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDI1MDApIHtcclxuXHRcdFx0XHRpZiAoJCh0aGlzKS5zY3JvbGwoZnVuY3Rpb24oKXtcclxuXHRcdFx0XHRcdCRidG5VcC5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG5cdFx0XHRcdH0pKTtcclxuXHRcdFx0XHQkYnRuVXAuZmFkZUluKDEwMDApO1xyXG5cdFx0XHR9IGVsc2Uge1xyXG5cdFx0XHRcdCRidG5VcC5mYWRlT3V0KCk7XHJcblx0XHRcdH1cclxuXHRcdH0pO1xyXG4vL2ZhZGVJbiwgZmFkZU91dCBcInVwLWJ0blwiIGlmIHNjcm9sbFxyXG5cclxuXHJcbn0oalF1ZXJ5KSk7IiwidmFyIEhQID0ge1xyXG4gIHJhbmRvbTogZnVuY3Rpb24obWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSFA7Il19
