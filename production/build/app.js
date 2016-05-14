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

	$(".toggle-wrap").click(function () {
		$(this).toggleClass("on");
		$(".main-nav").slideToggle();
		return false;
	});

	$(".owl-carousel").owlCarousel({
		// Наиболее важные особенности owl
		items: 4,
		itemsCustom: false,
		itemsDesktop: [1199, 3],
		itemsDesktopSmall: [980, 3],
		itemsTablet: [768, 2],
		itemsTabletSmall: false,
		itemsMobile: [479, 1],
		singleItem: false,
		itemsScaleUp: false,

		//Базовая скорость
		slideSpeed: 200,
		paginationSpeed: 800,
		rewindSpeed: 1000,

		//Авто-прокрутка
		autoPlay: false,
		stopOnHover: false,

		// Навигация
		navigation: true,
		navigationText: [],
		rewindNav: true,
		scrollPerPage: false,

		// Пагинация
		pagination: false,
		paginationNumbers: false,

		// Отзывчивость
		responsive: true,
		responsiveRefreshRate: 200,
		responsiveBaseWidth: window,

		// CSS стили
		baseClass: "owl-carousel",
		theme: "owl-theme",

		//Lazy load
		lazyLoad: false,
		lazyFollow: true,
		lazyEffect: "fade",

		// Авто-высота
		autoHeight: false,

		//JSON
		jsonPath: false,
		jsonSuccess: false,

		// События мышки
		dragBeforeAnimFinish: true,
		mouseDrag: true,
		touchDrag: true,

		//Transitions
		transitionStyle: true,

		// Другое
		addClassActive: false,

		// Функции обратного вызова
		beforeUpdate: false,
		afterUpdate: false,
		beforeInit: false,
		afterInit: false,
		beforeMove: false,
		afterMove: false,
		afterAction: false,
		startDragging: false,
		afterLazyLoad: false
	});

	$(".arrow-down").click(function () {
		$("html, body").animate({
			scrollTop: $("#section-content").offset().top
		}, 800);
	});

	function example(n) {
		console.log("Hello in ES6... I am " + n + " - random number between 10 and 20");
	}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJqcy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsQ0FBQyxVQUFVLENBQVYsRUFBYTs7O0FBR2IsR0FBRSxZQUFZO0FBQ2QsVUFBUSxrQkFBRyxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsQ0FBUixFQURjO0VBQVosQ0FBRixDQUhhOztBQU9iLEdBQUUsY0FBRixFQUFrQixLQUFsQixDQUF3QixZQUFXO0FBQ25DLElBQUUsSUFBRixFQUFRLFdBQVIsQ0FBb0IsSUFBcEIsRUFEbUM7QUFFbkMsSUFBRSxXQUFGLEVBQWUsV0FBZixHQUZtQztBQUduQyxTQUFPLEtBQVAsQ0FIbUM7RUFBWCxDQUF4QixDQVBhOztBQWFiLEdBQUUsZUFBRixFQUFtQixXQUFuQixDQUErQjs7QUFFL0IsU0FBUSxDQUFSO0FBQ0EsZUFBYyxLQUFkO0FBQ0EsZ0JBQWUsQ0FBQyxJQUFELEVBQU0sQ0FBTixDQUFmO0FBQ0EscUJBQW9CLENBQUMsR0FBRCxFQUFLLENBQUwsQ0FBcEI7QUFDQSxlQUFhLENBQUMsR0FBRCxFQUFLLENBQUwsQ0FBYjtBQUNBLG9CQUFrQixLQUFsQjtBQUNBLGVBQWMsQ0FBQyxHQUFELEVBQUssQ0FBTCxDQUFkO0FBQ0EsY0FBYSxLQUFiO0FBQ0EsZ0JBQWUsS0FBZjs7O0FBR0EsY0FBYSxHQUFiO0FBQ0EsbUJBQWtCLEdBQWxCO0FBQ0EsZUFBYyxJQUFkOzs7QUFHQSxZQUFXLEtBQVg7QUFDQSxlQUFjLEtBQWQ7OztBQUdBLGNBQWEsSUFBYjtBQUNBLGtCQUFpQixFQUFqQjtBQUNBLGFBQVksSUFBWjtBQUNBLGlCQUFnQixLQUFoQjs7O0FBR0EsY0FBYSxLQUFiO0FBQ0EscUJBQW1CLEtBQW5COzs7QUFHQSxjQUFZLElBQVo7QUFDQSx5QkFBd0IsR0FBeEI7QUFDQSx1QkFBcUIsTUFBckI7OztBQUdBLGFBQVksY0FBWjtBQUNBLFNBQVEsV0FBUjs7O0FBR0EsWUFBVyxLQUFYO0FBQ0EsY0FBYSxJQUFiO0FBQ0EsY0FBYSxNQUFiOzs7QUFHQSxjQUFhLEtBQWI7OztBQUdBLFlBQVcsS0FBWDtBQUNBLGVBQWMsS0FBZDs7O0FBR0Esd0JBQXVCLElBQXZCO0FBQ0EsYUFBWSxJQUFaO0FBQ0EsYUFBWSxJQUFaOzs7QUFHQSxtQkFBa0IsSUFBbEI7OztBQUdBLGtCQUFpQixLQUFqQjs7O0FBR0EsZ0JBQWUsS0FBZjtBQUNBLGVBQWMsS0FBZDtBQUNBLGNBQVksS0FBWjtBQUNBLGFBQVcsS0FBWDtBQUNBLGNBQVksS0FBWjtBQUNBLGFBQVcsS0FBWDtBQUNBLGVBQWEsS0FBYjtBQUNBLGlCQUFnQixLQUFoQjtBQUNBLGlCQUFnQixLQUFoQjtFQXhFQSxFQWJhOztBQXlGYixHQUFFLGFBQUYsRUFBaUIsS0FBakIsQ0FBdUIsWUFBVztBQUNqQyxJQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDdkIsY0FBWSxFQUFFLGtCQUFGLEVBQXNCLE1BQXRCLEdBQStCLEdBQS9CO0dBRGIsRUFFRyxHQUZILEVBRGlDO0VBQVgsQ0FBdkIsQ0F6RmE7O0FBaUdaLFVBQVMsT0FBVCxDQUFpQixDQUFqQixFQUFvQjtBQUNyQixVQUFRLEdBQVIsMkJBQW9DLHdDQUFwQyxFQURxQjtFQUFwQjtDQWpHRCxFQXFHQyxNQXJHRCxDQUFEOzs7Ozs7OztBQ0ZBLElBQUksS0FBSztBQUNQLFVBQVEsZ0JBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7QUFDekIsV0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsTUFBaUIsTUFBTSxHQUFOLEdBQVksQ0FBWixDQUFqQixDQUFYLEdBQThDLEdBQTlDLENBRGtCO0dBQW5CO0NBRE47O2tCQU1XIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBIUCBmcm9tICcuL2hlbHBlcnMnO1xuXG4oZnVuY3Rpb24gKCQpIHtcblxuXHQvLyBXaGVuIERPTSBpcyByZWFkeVxuXHQkKGZ1bmN0aW9uICgpIHtcblx0ZXhhbXBsZShIUC5yYW5kb20oMTAsIDIwKSk7XG5cdH0pO1xuXG5cdCQoXCIudG9nZ2xlLXdyYXBcIikuY2xpY2soZnVuY3Rpb24oKSB7XG5cdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJvblwiKTtcblx0JChcIi5tYWluLW5hdlwiKS5zbGlkZVRvZ2dsZSgpO1xuXHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXG5cdCQoXCIub3dsLWNhcm91c2VsXCIpLm93bENhcm91c2VsKHtcblx0Ly8g0J3QsNC40LHQvtC70LXQtSDQstCw0LbQvdGL0LUg0L7RgdC+0LHQtdC90L3QvtGB0YLQuCBvd2xcblx0aXRlbXMgOiA0LFxuXHRpdGVtc0N1c3RvbSA6IGZhbHNlLFxuXHRpdGVtc0Rlc2t0b3AgOiBbMTE5OSwzXSxcblx0aXRlbXNEZXNrdG9wU21hbGwgOiBbOTgwLDNdLFxuXHRpdGVtc1RhYmxldDogWzc2OCwyXSxcblx0aXRlbXNUYWJsZXRTbWFsbDogZmFsc2UsXG5cdGl0ZW1zTW9iaWxlIDogWzQ3OSwxXSxcblx0c2luZ2xlSXRlbSA6IGZhbHNlLFxuXHRpdGVtc1NjYWxlVXAgOiBmYWxzZSxcblx0IFxuXHQvL9CR0LDQt9C+0LLQsNGPINGB0LrQvtGA0L7RgdGC0Yxcblx0c2xpZGVTcGVlZCA6IDIwMCxcblx0cGFnaW5hdGlvblNwZWVkIDogODAwLFxuXHRyZXdpbmRTcGVlZCA6IDEwMDAsXG5cdCBcblx0Ly/QkNCy0YLQvi3Qv9GA0L7QutGA0YPRgtC60LBcblx0YXV0b1BsYXkgOiBmYWxzZSxcblx0c3RvcE9uSG92ZXIgOiBmYWxzZSxcblx0IFxuXHQvLyDQndCw0LLQuNCz0LDRhtC40Y9cblx0bmF2aWdhdGlvbiA6IHRydWUsXG5cdG5hdmlnYXRpb25UZXh0IDogW10sXG5cdHJld2luZE5hdiA6IHRydWUsXG5cdHNjcm9sbFBlclBhZ2UgOiBmYWxzZSxcblx0IFxuXHQvLyDQn9Cw0LPQuNC90LDRhtC40Y9cblx0cGFnaW5hdGlvbiA6IGZhbHNlLFxuXHRwYWdpbmF0aW9uTnVtYmVyczogZmFsc2UsXG5cdCBcblx0Ly8g0J7RgtC30YvQstGH0LjQstC+0YHRgtGMXG5cdHJlc3BvbnNpdmU6IHRydWUsXG5cdHJlc3BvbnNpdmVSZWZyZXNoUmF0ZSA6IDIwMCxcblx0cmVzcG9uc2l2ZUJhc2VXaWR0aDogd2luZG93LFxuXHQgXG5cdC8vIENTUyDRgdGC0LjQu9C4XG5cdGJhc2VDbGFzcyA6IFwib3dsLWNhcm91c2VsXCIsXG5cdHRoZW1lIDogXCJvd2wtdGhlbWVcIixcblx0IFxuXHQvL0xhenkgbG9hZFxuXHRsYXp5TG9hZCA6IGZhbHNlLFxuXHRsYXp5Rm9sbG93IDogdHJ1ZSxcblx0bGF6eUVmZmVjdCA6IFwiZmFkZVwiLFxuXHQgXG5cdC8vINCQ0LLRgtC+LdCy0YvRgdC+0YLQsFxuXHRhdXRvSGVpZ2h0IDogZmFsc2UsXG5cdCBcblx0Ly9KU09OXG5cdGpzb25QYXRoIDogZmFsc2UsXG5cdGpzb25TdWNjZXNzIDogZmFsc2UsXG5cdCBcblx0Ly8g0KHQvtCx0YvRgtC40Y8g0LzRi9GI0LrQuFxuXHRkcmFnQmVmb3JlQW5pbUZpbmlzaCA6IHRydWUsXG5cdG1vdXNlRHJhZyA6IHRydWUsXG5cdHRvdWNoRHJhZyA6IHRydWUsXG5cdCBcblx0Ly9UcmFuc2l0aW9uc1xuXHR0cmFuc2l0aW9uU3R5bGUgOiB0cnVlLFxuXHQgXG5cdC8vINCU0YDRg9Cz0L7QtVxuXHRhZGRDbGFzc0FjdGl2ZSA6IGZhbHNlLFxuXHQgXG5cdC8vINCk0YPQvdC60YbQuNC4INC+0LHRgNCw0YLQvdC+0LPQviDQstGL0LfQvtCy0LBcblx0YmVmb3JlVXBkYXRlIDogZmFsc2UsXG5cdGFmdGVyVXBkYXRlIDogZmFsc2UsXG5cdGJlZm9yZUluaXQ6IGZhbHNlLFxuXHRhZnRlckluaXQ6IGZhbHNlLFxuXHRiZWZvcmVNb3ZlOiBmYWxzZSxcblx0YWZ0ZXJNb3ZlOiBmYWxzZSxcblx0YWZ0ZXJBY3Rpb246IGZhbHNlLFxuXHRzdGFydERyYWdnaW5nIDogZmFsc2UsXG5cdGFmdGVyTGF6eUxvYWQgOiBmYWxzZVxuXHR9KTtcblxuXG5cdCQoXCIuYXJyb3ctZG93blwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHQkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcblx0XHRcdHNjcm9sbFRvcCA6ICQoXCIjc2VjdGlvbi1jb250ZW50XCIpLm9mZnNldCgpLnRvcFxuXHRcdH0sIDgwMCk7XG5cdH0pO1xuXG5cblxuICBmdW5jdGlvbiBleGFtcGxlKG4pIHtcblx0Y29uc29sZS5sb2coYEhlbGxvIGluIEVTNi4uLiBJIGFtICR7bn0gLSByYW5kb20gbnVtYmVyIGJldHdlZW4gMTAgYW5kIDIwYCk7XG4gIH1cblxufShqUXVlcnkpKTsiLCJ2YXIgSFAgPSB7XG4gIHJhbmRvbTogZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIUDsiXX0=
