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

		//navbar-gallery hidden
		$(window).scroll(function () {
			if ($(this).scrollTop() > 0) {
				$(".navbar-custom").fadeOut();
			} else {
				$(".navbar-custom").fadeIn();
			}
		});

		$(".slideshow-slider").click(function(){
			$(".navbar-custom").fadeOut()
		});
		//navbar-gallery hidden

	//button-down scroll
	$(".fa-angle-down").click(function () {
		$("html, body").animate({
			scrollTop: $(".section-advertising").offset().top
		}, 900);
	});
	//button-down scroll

	//menu-scroll
	$("#myNavbar ul li a").mPageScroll2id({
		pageEndSmoothScroll: true,
		offset: 70
	});
	//menu-scroll

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

	$(".items").waypoint(function () {
		$(".block-bottom .item").each(function (index) {
			var ths = $(this);
			setInterval(function () {
				ths.addClass("on");
			}, 300 * index);
		});
	}, {
		offset: "6%"
	});
	//animate CSS

		//btn-map
		$("#calcRout").click(function(){
		$(this).css({"z-index": "1"});
		$(".fa-angle-up").css({"z-index": "1", "display": "block"});
		$("#floating-panel").slideToggle().css({"z-index": "1"});
		$("#map").css({"z-index": "0"});
		});

		$(".fa-angle-up").click(function(){
			$("html, body").animate({
				scrollTop : $("#wrapper").offset().top
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7O0FBRVo7QUFDQSxHQUFFLGVBQUYsRUFBbUIsV0FBbkIsQ0FBK0I7QUFDOUIsWUFBVSxJQURvQixFQUNkO0FBQ2hCLFNBQVEsQ0FGc0I7QUFHOUIsZ0JBQWUsQ0FBQyxJQUFELEVBQU0sQ0FBTixDQUhlO0FBSTlCLHFCQUFvQixDQUFDLEdBQUQsRUFBSyxDQUFMLENBSlU7QUFLOUIsZUFBYyxDQUFDLEdBQUQsRUFBSyxDQUFMO0FBTGdCLEVBQS9CO0FBT0E7QUFDQSxHQUFFLE1BQUYsRUFBVSxNQUFWLENBQWlCLFlBQVk7QUFDNUIsTUFBSSxFQUFFLElBQUYsRUFBUSxTQUFSLEtBQXNCLENBQTFCLEVBQTZCO0FBQzVCLEtBQUUsY0FBRixFQUFrQixPQUFsQixDQUEwQixNQUExQjtBQUNBLEtBQUUsUUFBRixFQUFZLFFBQVosQ0FBcUIsY0FBckI7QUFDQSxHQUhELE1BR087QUFDTixLQUFFLGNBQUYsRUFBa0IsU0FBbEIsQ0FBNEIsTUFBNUI7QUFDQSxLQUFFLFFBQUYsRUFBWSxXQUFaLENBQXdCLGNBQXhCO0FBQ0E7QUFDRixFQVJBO0FBU0E7QUFDQSxHQUFFLGdCQUFGLEVBQW9CLEtBQXBCLENBQTBCLFlBQVc7QUFDcEMsSUFBRSxZQUFGLEVBQWdCLE9BQWhCLENBQXdCO0FBQ3hCLGNBQVksRUFBRSxTQUFGLEVBQWEsTUFBYixHQUFzQjtBQURWLEdBQXhCLEVBRUcsR0FGSDtBQUdBLEVBSkQ7O0FBTUE7QUFDQSxHQUFFLG1CQUFGLEVBQXVCLGNBQXZCLENBQXNDLEVBQUUscUJBQXFCLElBQXZCLEVBQXRDOztBQUVBO0FBQ0EsR0FBRSxFQUFGLENBQUssUUFBTCxHQUFnQixVQUFTLFFBQVQsRUFBbUI7QUFDbEMsSUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLFlBQVc7QUFDdkIsT0FBSSxNQUFNLEVBQUUsSUFBRixDQUFWO0FBQ0EsT0FBSSxHQUFKLENBQVEsU0FBUixFQUFtQixHQUFuQixFQUF3QixRQUF4QixDQUFpQyxVQUFqQyxFQUE2QyxRQUE3QyxDQUFzRCxVQUFTLEdBQVQsRUFBYztBQUNuRSxRQUFJLFFBQVEsTUFBWixFQUFvQjtBQUNuQixTQUFJLFFBQUosQ0FBYSxRQUFiLEVBQXVCLEdBQXZCLENBQTJCLFNBQTNCLEVBQXNDLEdBQXRDO0FBQ0E7QUFDRCxJQUpELEVBSUc7QUFDRixZQUFRO0FBRE4sSUFKSDtBQU9BLEdBVEQ7QUFVQSxFQVhEOztBQWFBLEdBQUUsZUFBRixFQUFtQixRQUFuQixDQUE0QixZQUE1QjtBQUNBLEdBQUUsZ0JBQUYsRUFBb0IsUUFBcEIsQ0FBNkIsYUFBN0I7QUFDQSxHQUFFLE9BQUYsRUFBVyxRQUFYLENBQW9CLFlBQXBCOztBQUVBLEdBQUUsZ0JBQUYsRUFBb0IsUUFBcEIsQ0FBNkIsWUFBVztBQUN4QyxJQUFFLGdCQUFGLEVBQW9CLElBQXBCLENBQXlCLFVBQVMsS0FBVCxFQUFnQjtBQUN4QyxPQUFJLE1BQU0sRUFBRSxJQUFGLENBQVY7QUFDQSxlQUFZLFlBQVc7QUFDdEIsUUFBSSxRQUFKLENBQWEsSUFBYjtBQUNBLElBRkQsRUFFRyxNQUFJLEtBRlA7QUFHQSxHQUxEO0FBTUMsRUFQRCxFQU9HO0FBQ0YsVUFBUztBQURQLEVBUEg7O0FBV0EsR0FBRSxRQUFGLEVBQVksUUFBWixDQUFxQixZQUFXO0FBQ2hDLElBQUUscUJBQUYsRUFBeUIsSUFBekIsQ0FBOEIsVUFBUyxLQUFULEVBQWdCO0FBQzdDLE9BQUksTUFBTSxFQUFFLElBQUYsQ0FBVjtBQUNBLGVBQVksWUFBVztBQUN0QixRQUFJLFFBQUosQ0FBYSxJQUFiO0FBQ0EsSUFGRCxFQUVHLE1BQUksS0FGUDtBQUdBLEdBTEQ7QUFNQyxFQVBELEVBT0c7QUFDRixVQUFTO0FBRFAsRUFQSDtBQVVBO0FBRUQsQ0F2RUEsRUF1RUMsTUF2RUQsQ0FBRDs7Ozs7Ozs7QUNGQSxJQUFJLEtBQUs7QUFDUCxVQUFRLGdCQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CO0FBQ3pCLFdBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLE1BQWlCLE1BQU0sR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOEMsR0FBckQ7QUFDRDtBQUhNLENBQVQ7O2tCQU1lLEUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEhQIGZyb20gJy4vaGVscGVycyc7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHJcblx0XHQvL2Nhcm91c2VsXHJcblx0XHQkKFwiLm93bC1jYXJvdXNlbFwiKS5vd2xDYXJvdXNlbCh7XHJcblx0XHRcdGF1dG9QbGF5OiAzMDAwLCAvL1NldCBBdXRvUGxheSB0byAzIHNlY29uZHNcclxuXHRcdFx0aXRlbXMgOiAxLFxyXG5cdFx0XHRpdGVtc0Rlc2t0b3AgOiBbMTE5OSwxXSxcclxuXHRcdFx0aXRlbXNEZXNrdG9wU21hbGwgOiBbOTc5LDFdLFxyXG5cdFx0XHRpdGVtc1RhYmxldCA6IFs3NjgsMV1cclxuXHR9KTtcclxuXHRcdC8vdG9wIHNlY3Rpb24gc2Nyb2xsXHJcblx0XHQkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuXHRcdFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAwKSB7XHJcblx0XHRcdFx0JCgnLnNlY3Rpb24tdG9wJykuc2xpZGVVcChcInNsb3dcIik7XHJcblx0XHRcdFx0JChcImhlYWRlclwiKS5hZGRDbGFzcyhcImhlYWRlci1maXhlZFwiKTtcclxuXHRcdFx0fSBlbHNlIHtcclxuXHRcdFx0XHQkKCcuc2VjdGlvbi10b3AnKS5zbGlkZURvd24oXCJzbG93XCIpO1xyXG5cdFx0XHRcdCQoXCJoZWFkZXJcIikucmVtb3ZlQ2xhc3MoXCJoZWFkZXItZml4ZWRcIik7XHJcblx0XHRcdH1cclxuXHR9KTtcclxuXHRcdC8vYnV0dG9uLWRvd24gc2Nyb2xsXHJcblx0XHQkKFwiLmZhLWFuZ2xlLWRvd25cIikuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxUb3AgOiAkKFwiLmhlYWRlclwiKS5vZmZzZXQoKS50b3BcclxuXHRcdFx0fSwgOTAwKTtcclxuXHRcdH0pO1xyXG5cclxuXHRcdC8vbWVudS1zY3JvbGxcclxuXHRcdCQoXCIjbXlOYXZiYXIgdWwgbGkgYVwiKS5tUGFnZVNjcm9sbDJpZCh7IHBhZ2VFbmRTbW9vdGhTY3JvbGw6IHRydWUgfSk7XHJcblxyXG5cdFx0Ly9hbmltYXRlIENTU1xyXG5cdFx0JC5mbi5hbmltYXRlZCA9IGZ1bmN0aW9uKGluRWZmZWN0KSB7XHJcblx0XHRcdCQodGhpcykuZWFjaChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHR2YXIgdGhzID0gJCh0aGlzKTtcclxuXHRcdFx0XHR0aHMuY3NzKFwib3BhY2l0eVwiLCBcIjBcIikuYWRkQ2xhc3MoXCJhbmltYXRlZFwiKS53YXlwb2ludChmdW5jdGlvbihkaXIpIHtcclxuXHRcdFx0XHRcdGlmIChkaXIgPT09IFwiZG93blwiKSB7XHJcblx0XHRcdFx0XHRcdHRocy5hZGRDbGFzcyhpbkVmZmVjdCkuY3NzKFwib3BhY2l0eVwiLCBcIjFcIik7XHJcblx0XHRcdFx0XHR9O1xyXG5cdFx0XHRcdH0sIHtcclxuXHRcdFx0XHRcdG9mZnNldDogXCIxNDAlXCJcclxuXHRcdFx0XHR9KTtcclxuXHRcdFx0fSk7XHJcblx0XHR9O1xyXG5cclxuXHRcdCQoJy5sZWZ0LWJveCBpbWcnKS5hbmltYXRlZChcImZhZGVJbkxlZnRcIik7XHJcblx0XHQkKCcucmlnaHQtYm94IGltZycpLmFuaW1hdGVkKFwiZmFkZUluUmlnaHRcIik7XHJcblx0XHQkKCcubGluZScpLmFuaW1hdGVkKFwiZmFkZUluRG93blwiKTtcclxuXHJcblx0XHQkKFwiLmJ1dHRvbi1jdXN0b21cIikud2F5cG9pbnQoZnVuY3Rpb24oKSB7XHJcblx0XHQkKFwiLmJ0bi1yaWdodCBpbWdcIikuZWFjaChmdW5jdGlvbihpbmRleCkge1xyXG5cdFx0XHR2YXIgdGhzID0gJCh0aGlzKTtcclxuXHRcdFx0c2V0SW50ZXJ2YWwoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0dGhzLmFkZENsYXNzKFwib25cIik7XHJcblx0XHRcdH0sIDMwMCppbmRleCk7XHJcblx0XHR9KTtcclxuXHRcdH0sIHtcclxuXHRcdFx0b2Zmc2V0IDogXCI4MCVcIlxyXG5cdFx0fSk7XHJcblxyXG5cdFx0JChcIi5wb2ludFwiKS53YXlwb2ludChmdW5jdGlvbigpIHtcclxuXHRcdCQoXCIuYmxvY2stYm90dG9tIC5pdGVtXCIpLmVhY2goZnVuY3Rpb24oaW5kZXgpIHtcclxuXHRcdFx0dmFyIHRocyA9ICQodGhpcyk7XHJcblx0XHRcdHNldEludGVydmFsKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdHRocy5hZGRDbGFzcyhcIm9uXCIpO1xyXG5cdFx0XHR9LCAzMDAqaW5kZXgpO1xyXG5cdFx0fSk7XHJcblx0XHR9LCB7XHJcblx0XHRcdG9mZnNldCA6IFwiMjAlXCJcclxuXHRcdH0pO1xyXG5cdFx0Ly9hbmltYXRlIENTU1xyXG5cclxufShqUXVlcnkpKTsiLCJ2YXIgSFAgPSB7XHJcbiAgcmFuZG9tOiBmdW5jdGlvbihtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIUDsiXX0=
		
		//google road-plugin
		function initMap() {
				var markerArray = [];

				// Instantiate a directions service.
				var directionsService = new google.maps.DirectionsService;

				// Create a map and center it on Manhattan.
				var map = new google.maps.Map(document.getElementById('map'), {
						zoom: 15,
						center: {lat: 50.017234, lng: 36.2072981}
				});
				var marker = new google.maps.Marker({
						position: {lat: 50.017234, lng: 36.2072981},
						map: map,
						icon: "http://test-4.kl.com.ua/wp-content/themes/KHouse/build/images/map-marker-icon.png"
				});

				// Create a renderer for directions and bind it to the map.
				var directionsDisplay = new google.maps.DirectionsRenderer({map: map});

				// Instantiate an info window to hold step text.
				var stepDisplay = new google.maps.InfoWindow;

				// Display the route between the initial start and end selections.
				calculateAndDisplayRoute(
						directionsDisplay, directionsService, markerArray, stepDisplay, map);
				// Listen to change events from the start and end lists.
				var onChangeHandler = function() {
						calculateAndDisplayRoute(
								directionsDisplay, directionsService, markerArray, stepDisplay, map);
				};
				document.getElementById('start').addEventListener('change', onChangeHandler);
		}
		var end = "Харків, вулиця Весела 30";
		function calculateAndDisplayRoute(directionsDisplay, directionsService,
																			markerArray, stepDisplay, map) {
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
				}, function(response, status) {
						// Route the directions and pass the response to a function to create
						// markers for each step.
						if (status === google.maps.DirectionsStatus.OK) {
								document.getElementById('warnings-panel').innerHTML =
										'<b>' + response.routes[0].warnings + '</b>';
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
						var marker = markerArray[i] = markerArray[i] || new google.maps.Marker;
						marker.setMap(map);

				}
		}

		function attachInstructionText(stepDisplay, marker, text, map) {
				google.maps.event.addListener(marker, 'click', function() {
						// Open an info window when the marker is clicked on, containing the text
						// of the step.
						stepDisplay.setContent(text);
						stepDisplay.open(map, marker);
				});
		};
