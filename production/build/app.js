(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _helpers = require("./helpers");

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

	// When DOM is ready
	$(".btn-up").click(function () {
		$("html, body").animate({
			scrollTop: $("#wrapper").offset().top
		}, 800);
	});

	$(window).scroll(function () {
		if ($(this).scrollTop() > 0) {
			$('nav').addClass('fixed');
		} else {
			$('nav').removeClass('fixed');
		}
	});

	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 0,
		items: 1,
		nav: true,
		navText: []
	});

	$(".owl carousel").owlCarousel({
		margin: 0,
		items: 1,
		nav: true,
		navText: []
	});

	$('.carousel').find('div.owl-nav, div.owl-dots').wrapAll("<div class='controls'></div>");

	$('.nav [data-toggle="dropdown"][href!="#"]').on('click', function () {
		if (jQuery(this.parentNode).hasClass('open')) {
			location.href = this.href;
		}
	});
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmMvanMvYXBwLmpzIiwic3JjL2pzL2hlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxDQUFDLFVBQVUsQ0FBVixFQUFhOzs7QUFHYixHQUFFLFNBQUYsRUFBYSxLQUFiLENBQW1CLFlBQVc7QUFDN0IsSUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3ZCLGNBQVksRUFBRSxVQUFGLEVBQWMsTUFBZCxHQUF1QixHQUF2QjtHQURiLEVBRUcsR0FGSCxFQUQ2QjtFQUFYLENBQW5CLENBSGE7O0FBU2IsR0FBRSxNQUFGLEVBQVUsTUFBVixDQUFpQixZQUFVO0FBQzNCLE1BQUssRUFBRSxJQUFGLEVBQVEsU0FBUixLQUFzQixDQUF0QixFQUEwQjtBQUM5QixLQUFFLEtBQUYsRUFBUyxRQUFULENBQWtCLE9BQWxCLEVBRDhCO0dBQS9CLE1BRU87QUFDTixLQUFFLEtBQUYsRUFBUyxXQUFULENBQXFCLE9BQXJCLEVBRE07R0FGUDtFQURpQixDQUFqQixDQVRhOztBQWtCYixHQUFFLGVBQUYsRUFBbUIsV0FBbkIsQ0FBK0I7QUFDOUIsUUFBSyxJQUFMO0FBQ0EsVUFBTyxDQUFQO0FBQ0EsU0FBTyxDQUFQO0FBQ0EsT0FBSSxJQUFKO0FBQ0EsV0FBVSxFQUFWO0VBTEQsRUFsQmE7O0FBMEJiLEdBQUUsZUFBRixFQUFtQixXQUFuQixDQUErQjtBQUM5QixVQUFPLENBQVA7QUFDQSxTQUFPLENBQVA7QUFDQSxPQUFJLElBQUo7QUFDQSxXQUFVLEVBQVY7RUFKRCxFQTFCYTs7QUFpQ2IsR0FBRSxXQUFGLEVBQWUsSUFBZixDQUFvQiwyQkFBcEIsRUFBaUQsT0FBakQsQ0FBeUQsOEJBQXpELEVBakNhOztBQW1DYixHQUFFLDBDQUFGLEVBQThDLEVBQTlDLENBQWlELE9BQWpELEVBQTBELFlBQVc7QUFDcEUsTUFBRyxPQUFPLEtBQUssVUFBTCxDQUFQLENBQXdCLFFBQXhCLENBQWlDLE1BQWpDLENBQUgsRUFBNkM7QUFDN0MsWUFBUyxJQUFULEdBQWdCLEtBQUssSUFBTCxDQUQ2QjtHQUE3QztFQUR5RCxDQUExRCxDQW5DYTtDQUFiLEVBMENDLE1BMUNELENBQUQ7Ozs7Ozs7O0FDRkEsSUFBSSxLQUFLO0FBQ1AsVUFBUSxnQkFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjtBQUN6QixXQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixNQUFNLEdBQU4sR0FBWSxDQUFaLENBQWpCLENBQVgsR0FBOEMsR0FBOUMsQ0FEa0I7R0FBbkI7Q0FETjs7a0JBTVciLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEhQIGZyb20gJy4vaGVscGVycyc7XG5cbihmdW5jdGlvbiAoJCkge1xuXG5cdC8vIFdoZW4gRE9NIGlzIHJlYWR5XG5cdCQoXCIuYnRuLXVwXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuXHRcdCQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xuXHRcdFx0c2Nyb2xsVG9wIDogJChcIiN3cmFwcGVyXCIpLm9mZnNldCgpLnRvcFxuXHRcdH0sIDgwMCk7XG5cdH0pO1xuXHRcblx0JCh3aW5kb3cpLnNjcm9sbChmdW5jdGlvbigpe1xuXHRpZiAoICQodGhpcykuc2Nyb2xsVG9wKCkgPiAwICkge1xuXHRcdCQoJ25hdicpLmFkZENsYXNzKCdmaXhlZCcpO1xuXHR9IGVsc2Uge1xuXHRcdCQoJ25hdicpLnJlbW92ZUNsYXNzKCdmaXhlZCcpO1xuXHR9XG5cdH0pO1xuXG5cblx0JChcIi5vd2wtY2Fyb3VzZWxcIikub3dsQ2Fyb3VzZWwoe1xuXHRcdGxvb3A6dHJ1ZSxcblx0XHRtYXJnaW46MCxcblx0XHRpdGVtczogMSxcblx0XHRuYXY6dHJ1ZSxcblx0XHRuYXZUZXh0IDogW10sXG5cdH0pO1xuXG5cdCQoXCIub3dsIGNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcblx0XHRtYXJnaW46MCxcblx0XHRpdGVtczogMSxcblx0XHRuYXY6dHJ1ZSxcblx0XHRuYXZUZXh0IDogW10sXG5cdH0pO1xuXHRcblx0JCgnLmNhcm91c2VsJykuZmluZCgnZGl2Lm93bC1uYXYsIGRpdi5vd2wtZG90cycpLndyYXBBbGwoXCI8ZGl2IGNsYXNzPSdjb250cm9scyc+PC9kaXY+XCIpO1xuXG5cdCQoJy5uYXYgW2RhdGEtdG9nZ2xlPVwiZHJvcGRvd25cIl1baHJlZiE9XCIjXCJdJykub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG5cdFx0aWYoalF1ZXJ5KHRoaXMucGFyZW50Tm9kZSkuaGFzQ2xhc3MoJ29wZW4nKSkge1xuXHRcdGxvY2F0aW9uLmhyZWYgPSB0aGlzLmhyZWY7XG5cdH1cblxufSk7XG5cbn0oalF1ZXJ5KSk7IiwidmFyIEhQID0ge1xuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSFA7Il19
