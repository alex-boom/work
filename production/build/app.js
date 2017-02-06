(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

	// When DOM is ready
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		nav: true,
		navText: []
	});

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

	//menu-active, hover
	var $NavBar = $(".main-nav ul li");
	//active
	$NavBar.click(function () {
		$NavBar.removeClass('active');
		$(this).addClass('active');
	});
	//menu-active, hover

	//background-slider
	$(".section-slider .slide").each(function (e) {
		$(this).addClass("bg-" + e);
	});
	//background-slider

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
	$('.section-slider .slide').equalHeights();
	//equalHeights

	//mPageScroll2id
	$(".main-nav li a").mPageScroll2id({
		pageEndSmoothScroll: true,
		offset: 40
	});
	//mPageScroll2id

	//validate form
	document.getElementById('textarea').addEventListener('input', function (e) {
		var val = this.value.trim();
		val.length < 5 ? this.setCustomValidity('Cообщение должно содержать не менее 5 символов') : this.setCustomValidity('');
	});
	//validate form
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7OztBQUdiLEdBQUUsZUFBRixFQUFtQixXQUFuQixDQUErQjtBQUM5QixRQUFLLElBRHlCO0FBRTlCLFVBQU8sQ0FGdUI7QUFHOUIsU0FBTyxDQUh1QjtBQUk5QixPQUFJLElBSjBCO0FBSzlCLFdBQVU7QUFMb0IsRUFBL0I7OztBQVNBLEdBQUUsTUFBRixFQUFVLE1BQVYsQ0FBaUIsWUFBVztBQUMzQixNQUFJLEVBQUUsSUFBRixFQUFRLFNBQVIsS0FBc0IsQ0FBMUIsRUFBNkI7QUFDNUIsS0FBRSxTQUFGLEVBQWEsUUFBYixDQUFzQixRQUF0QjtBQUNBLEdBRkQsTUFFTztBQUNOLEtBQUUsU0FBRixFQUFhLFdBQWIsQ0FBeUIsUUFBekI7QUFDQTtBQUNELEVBTkQ7Ozs7QUFVQSxHQUFFLGFBQUYsRUFBaUIsS0FBakIsQ0FBdUIsWUFBVztBQUNqQyxJQUFFLElBQUYsRUFBUSxXQUFSLENBQW9CLElBQXBCO0FBQ0EsSUFBRSxXQUFGLEVBQWUsV0FBZjtBQUNBLFNBQU8sS0FBUDtBQUNBLEVBSkQ7Ozs7QUFRQSxLQUFJLFVBQVUsRUFBRSxpQkFBRixDQUFkOztBQUVBLFNBQVEsS0FBUixDQUFjLFlBQVc7QUFDeEIsVUFBUSxXQUFSLENBQW9CLFFBQXBCO0FBQ0EsSUFBRSxJQUFGLEVBQVEsUUFBUixDQUFpQixRQUFqQjtBQUNBLEVBSEQ7Ozs7QUFPQSxHQUFFLHdCQUFGLEVBQTRCLElBQTVCLENBQWlDLFVBQVMsQ0FBVCxFQUFXO0FBQzNDLElBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsUUFBUSxDQUF6QjtBQUNBLEVBRkQ7Ozs7QUFNQSxHQUFFLEVBQUYsQ0FBSyxZQUFMLEdBQW9CLFlBQVc7QUFDOUIsTUFBSSxZQUFZLENBQWhCO01BQ0MsUUFBUSxFQUFFLElBQUYsQ0FEVDtBQUVBLFFBQU0sSUFBTixDQUFXLFlBQVc7QUFDckIsT0FBSSxTQUFTLEVBQUUsSUFBRixFQUFRLFdBQVIsRUFBYjtBQUNBLE9BQUksU0FBUyxTQUFiLEVBQXdCO0FBQUUsZ0JBQVksTUFBWjtBQUFxQjtBQUMvQyxHQUhEO0FBSUEsU0FBTyxNQUFNLEdBQU4sQ0FBVSxRQUFWLEVBQW9CLFNBQXBCLENBQVA7QUFDQSxFQVJEO0FBU0EsR0FBRSxjQUFGLEVBQWtCLElBQWxCLENBQXVCLFlBQVc7QUFDakMsTUFBSSxRQUFRLEVBQUUsSUFBRixDQUFaO01BQ0MsU0FBUyxNQUFNLElBQU4sQ0FBVyxPQUFYLENBRFY7QUFFQSxRQUFNLElBQU4sQ0FBVyxNQUFYLEVBQW1CLFlBQW5CO0FBQ0EsRUFKRDtBQUtBLEdBQUUsd0JBQUYsRUFBNEIsWUFBNUI7Ozs7QUFJQSxHQUFFLGdCQUFGLEVBQW9CLGNBQXBCLENBQW1DO0FBQ2xDLHVCQUFxQixJQURhO0FBRWxDLFVBQVE7QUFGMEIsRUFBbkM7Ozs7QUFPQSxVQUFTLGNBQVQsQ0FBd0IsVUFBeEIsRUFBb0MsZ0JBQXBDLENBQXFELE9BQXJELEVBQThELFVBQVUsQ0FBVixFQUFhO0FBQzFFLE1BQUksTUFBTSxLQUFLLEtBQUwsQ0FBVyxJQUFYLEVBQVY7QUFDQSxNQUFJLE1BQUosR0FBYSxDQUFiLEdBQWlCLEtBQUssaUJBQUwsQ0FBdUIsZ0RBQXZCLENBQWpCLEdBQTRGLEtBQUssaUJBQUwsQ0FBdUIsRUFBdkIsQ0FBNUY7QUFDQyxFQUhGOztBQU9BLENBN0VBLEVBNkVDLE1BN0VELENBQUQ7Ozs7Ozs7O0FDRkEsSUFBSSxLQUFLO0FBQ1AsVUFBUSxnQkFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjtBQUN6QixXQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixNQUFNLEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDLEdBQXJEO0FBQ0Q7QUFITSxDQUFUOztrQkFNZSxFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBIUCBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcblxyXG5cdC8vIFdoZW4gRE9NIGlzIHJlYWR5XHJcblx0JChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xyXG5cdFx0bG9vcDp0cnVlLFxyXG5cdFx0bWFyZ2luOjAsXHJcblx0XHRpdGVtczogMSxcclxuXHRcdG5hdjp0cnVlLFxyXG5cdFx0bmF2VGV4dCA6IFtdLFxyXG5cdH0pXHJcblxyXG5cdC8vc3RpY2t5IGhlYWRlclxyXG5cdCQod2luZG93KS5zY3JvbGwoZnVuY3Rpb24oKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDEpIHtcclxuXHRcdFx0JCgnLmhlYWRlcicpLmFkZENsYXNzKFwic3RpY2t5XCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnLmhlYWRlcicpLnJlbW92ZUNsYXNzKFwic3RpY2t5XCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdC8vc3RpY2t5IGhlYWRlclxyXG5cclxuXHQvL2J1cmdlci1tZW51XHJcblx0JChcIi50b2dnbGUtbW51XCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcyhcIm9uXCIpO1xyXG5cdFx0JChcIi5tYWluLW5hdlwiKS5zbGlkZVRvZ2dsZSgpO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pXHJcblx0Ly9idXJnZXItbWVudVxyXG5cclxuXHQvL21lbnUtYWN0aXZlLCBob3ZlclxyXG5cdHZhciAkTmF2QmFyID0gJChcIi5tYWluLW5hdiB1bCBsaVwiKTtcclxuXHRcdC8vYWN0aXZlXHJcblx0JE5hdkJhci5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdCROYXZCYXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0JCh0aGlzKS5hZGRDbGFzcygnYWN0aXZlJyk7XHJcblx0fSlcclxuXHQvL21lbnUtYWN0aXZlLCBob3ZlclxyXG5cclxuXHQvL2JhY2tncm91bmQtc2xpZGVyXHJcblx0JChcIi5zZWN0aW9uLXNsaWRlciAuc2xpZGVcIikuZWFjaChmdW5jdGlvbihlKXtcclxuXHRcdCQodGhpcykuYWRkQ2xhc3MoXCJiZy1cIiArIGUpO1xyXG5cdH0pO1xyXG5cdC8vYmFja2dyb3VuZC1zbGlkZXJcclxuXHJcbi8vZXF1YWxIZWlnaHRzXHJcblx0JC5mbi5lcXVhbEhlaWdodHMgPSBmdW5jdGlvbigpIHtcclxuXHRcdHZhciBtYXhIZWlnaHQgPSAwLFxyXG5cdFx0XHQkdGhpcyA9ICQodGhpcyk7XHJcblx0XHQkdGhpcy5lYWNoKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHR2YXIgaGVpZ2h0ID0gJCh0aGlzKS5pbm5lckhlaWdodCgpO1xyXG5cdFx0XHRpZiAoaGVpZ2h0ID4gbWF4SGVpZ2h0KSB7IG1heEhlaWdodCA9IGhlaWdodDsgfVxyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gJHRoaXMuY3NzKCdoZWlnaHQnLCBtYXhIZWlnaHQpO1xyXG5cdH07XHJcblx0JCgnW2RhdGEtZXF1YWxdJykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdHZhciAkdGhpcyA9ICQodGhpcyksXHJcblx0XHRcdHRhcmdldCA9ICR0aGlzLmRhdGEoJ2VxdWFsJyk7XHJcblx0XHQkdGhpcy5maW5kKHRhcmdldCkuZXF1YWxIZWlnaHRzKCk7XHJcblx0fSk7XHJcblx0JCgnLnNlY3Rpb24tc2xpZGVyIC5zbGlkZScpLmVxdWFsSGVpZ2h0cygpO1xyXG5cdC8vZXF1YWxIZWlnaHRzXHJcblxyXG5cdC8vbVBhZ2VTY3JvbGwyaWRcclxuXHQkKFwiLm1haW4tbmF2IGxpIGFcIikubVBhZ2VTY3JvbGwyaWQoe1xyXG5cdFx0cGFnZUVuZFNtb290aFNjcm9sbDogdHJ1ZSxcclxuXHRcdG9mZnNldDogNDBcclxuXHR9KTtcclxuXHQvL21QYWdlU2Nyb2xsMmlkXHJcblxyXG5cdC8vdmFsaWRhdGUgZm9ybVxyXG5cdGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCd0ZXh0YXJlYScpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgZnVuY3Rpb24gKGUpIHtcclxuXHRcdHZhciB2YWwgPSB0aGlzLnZhbHVlLnRyaW0oKTtcclxuXHRcdHZhbC5sZW5ndGggPCA1ID8gdGhpcy5zZXRDdXN0b21WYWxpZGl0eSgnQ9C+0L7QsdGJ0LXQvdC40LUg0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDQvdC1INC80LXQvdC10LUgNSDRgdC40LzQstC+0LvQvtCyJykgOiB0aGlzLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcclxuXHRcdH0pO1xyXG5cdC8vdmFsaWRhdGUgZm9ybVxyXG5cclxuXHJcbn0oalF1ZXJ5KSk7XHJcblxyXG4iLCJ2YXIgSFAgPSB7XHJcbiAgcmFuZG9tOiBmdW5jdGlvbihtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIUDsiXX0=
