import HP from './helpers';

(function ($) {

		//carousel
		$(".owl-carousel").owlCarousel({
			autoPlay: 3000, //Set AutoPlay to 3 seconds
			items : 1,
			itemsDesktop : [1199,1],
			itemsDesktopSmall : [979,1],
			itemsTablet : [768,1]
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
		$(".fa-angle-down").click(function() {
			var $sec = $('.section-top');
			$sec.css("opacity", "0");
			$sec.slideUp("slow");
			$('.section-advertising').css("marginTop", "0");
		});
		//button-down scroll

		//menu-scroll
		$("#myNavbar ul li a").mPageScroll2id({
			pageEndSmoothScroll: true,
			offset: 70
		});
		//menu-scroll

		//menu-active, hover
		var $NavBar = $("#myNavbar ul li");
			//active
		$NavBar.click(function() {
			$NavBar.removeClass('active');
			$(this).addClass('active');
		})

			//hover
		$NavBar.mouseover(function(){
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
			$(".btn-right").each(function (index) {
				var ths = $(this);
				setInterval(function () {
					ths.addClass("on");
				}, 400 * index);
			});
		}, {
			offset: "80%"
		});

		$(".items").waypoint(function () {
			$(".block-bottom .item").each(function (index) {
				var ths = $(this);
				setInterval(function () {
					ths.addClass("on");
				}, 1000 * index);
			});
		}, {
			offset: "3%"
		});

		$(".section-gallery").waypoint(function() {
			$(".item-gallery").each(function(index) {
				var ths = $(this);
				setInterval(function() {
					ths.addClass("on");
				}, 600*index);
			});
			}, {
				offset : "140%"
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

}(jQuery));

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
						icon: "http://www.zolotie-kluchi.kharkov.ua/wp-content/themes/golden_keys/img/map-marker-icon.png"
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