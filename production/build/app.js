(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _helpers = require("./helpers");

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

	// When DOM is ready
	$(function () {
		example(_helpers2.default.random(10, 20));
	});

	/**
  * Just an example function
  *   DELETE IT
  * @param  {Number} n - random number between 10 and 20
  */
	function example(n) {
		console.log("Hello in ES6... I am " + n + " - random number between 10 and 20");
	}

	$(".toggle-mnu").click(function () {
		$(this).toggleClass("on");
		$(".header-menu").slideToggle();
		return false;
	});

	//fitText;
	//$(".logo h4").fitText(1.8, { minFontSize: '11px', maxFontSize: '20px' });
	$(".header .header-menu ul").fitText(4.5, { minFontSize: '14px', maxFontSize: '19px' });
	$("body").fitText(4, { minFontSize: '13px', maxFontSize: '20px' });
	//$(".list").fitText(1.3, { minFontSize: '14px', maxFontSize: '21px' });
	$(".social h2").fitText(1.7, { minFontSize: '15px', maxFontSize: '21px' });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcYXBwLmpzIiwianNcXGhlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxDQUFDLFVBQVUsQ0FBVixFQUFhOzs7QUFHYixHQUFFLFlBQVk7QUFDYixVQUFRLGtCQUFHLE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxDQUFSLEVBRGE7RUFBWixDQUFGOzs7Ozs7O0FBSGEsVUFZSixPQUFULENBQWlCLENBQWpCLEVBQW9CO0FBQ25CLFVBQVEsR0FBUiwyQkFBb0Msd0NBQXBDLEVBRG1CO0VBQXBCOztBQUlBLEdBQUUsYUFBRixFQUFpQixLQUFqQixDQUF1QixZQUFXO0FBQ2pDLElBQUUsSUFBRixFQUFRLFdBQVIsQ0FBb0IsSUFBcEIsRUFEaUM7QUFFakMsSUFBRSxjQUFGLEVBQWtCLFdBQWxCLEdBRmlDO0FBR2pDLFNBQU8sS0FBUCxDQUhpQztFQUFYLENBQXZCOzs7O0FBaEJhLEVBd0JiLENBQUUseUJBQUYsRUFBNkIsT0FBN0IsQ0FBcUMsR0FBckMsRUFBMEMsRUFBRSxhQUFhLE1BQWIsRUFBcUIsYUFBYSxNQUFiLEVBQWpFLEVBeEJhO0FBeUJiLEdBQUUsTUFBRixFQUFVLE9BQVYsQ0FBa0IsQ0FBbEIsRUFBcUIsRUFBRSxhQUFhLE1BQWIsRUFBcUIsYUFBYSxNQUFiLEVBQTVDOztBQXpCYSxFQTJCYixDQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0IsR0FBeEIsRUFBNkIsRUFBRSxhQUFhLE1BQWIsRUFBcUIsYUFBYSxNQUFiLEVBQXBELEVBM0JhO0NBQWIsRUE4QkMsTUE5QkQsQ0FBRDs7Ozs7Ozs7QUNGQSxJQUFJLEtBQUs7QUFDUCxVQUFRLGdCQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CO0FBQ3pCLFdBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLE1BQWlCLE1BQU0sR0FBTixHQUFZLENBQVosQ0FBakIsQ0FBWCxHQUE4QyxHQUE5QyxDQURrQjtHQUFuQjtDQUROOztrQkFNVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSFAgZnJvbSAnLi9oZWxwZXJzJztcblxuKGZ1bmN0aW9uICgkKSB7XG5cblx0Ly8gV2hlbiBET00gaXMgcmVhZHlcblx0JChmdW5jdGlvbiAoKSB7XG5cdFx0ZXhhbXBsZShIUC5yYW5kb20oMTAsIDIwKSk7XG5cdH0pO1xuXG5cdC8qKlxuXHQgKiBKdXN0IGFuIGV4YW1wbGUgZnVuY3Rpb25cblx0ICogICBERUxFVEUgSVRcblx0ICogQHBhcmFtICB7TnVtYmVyfSBuIC0gcmFuZG9tIG51bWJlciBiZXR3ZWVuIDEwIGFuZCAyMFxuXHQgKi9cblx0ZnVuY3Rpb24gZXhhbXBsZShuKSB7XG5cdFx0Y29uc29sZS5sb2coYEhlbGxvIGluIEVTNi4uLiBJIGFtICR7bn0gLSByYW5kb20gbnVtYmVyIGJldHdlZW4gMTAgYW5kIDIwYCk7XG5cdH1cblxuXHQkKFwiLnRvZ2dsZS1tbnVcIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdFx0JCh0aGlzKS50b2dnbGVDbGFzcyhcIm9uXCIpO1xuXHRcdCQoXCIuaGVhZGVyLW1lbnVcIikuc2xpZGVUb2dnbGUoKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXG5cdC8vZml0VGV4dDtcblx0Ly8kKFwiLmxvZ28gaDRcIikuZml0VGV4dCgxLjgsIHsgbWluRm9udFNpemU6ICcxMXB4JywgbWF4Rm9udFNpemU6ICcyMHB4JyB9KTtcblx0JChcIi5oZWFkZXIgLmhlYWRlci1tZW51IHVsXCIpLmZpdFRleHQoNC41LCB7IG1pbkZvbnRTaXplOiAnMTRweCcsIG1heEZvbnRTaXplOiAnMTlweCcgfSk7XG5cdCQoXCJib2R5XCIpLmZpdFRleHQoNCwgeyBtaW5Gb250U2l6ZTogJzEzcHgnLCBtYXhGb250U2l6ZTogJzIwcHgnIH0pO1xuXHQvLyQoXCIubGlzdFwiKS5maXRUZXh0KDEuMywgeyBtaW5Gb250U2l6ZTogJzE0cHgnLCBtYXhGb250U2l6ZTogJzIxcHgnIH0pO1xuXHQkKFwiLnNvY2lhbCBoMlwiKS5maXRUZXh0KDEuNywgeyBtaW5Gb250U2l6ZTogJzE1cHgnLCBtYXhGb250U2l6ZTogJzIxcHgnIH0pO1xuXG5cbn0oalF1ZXJ5KSk7IiwidmFyIEhQID0ge1xuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSFA7Il19
