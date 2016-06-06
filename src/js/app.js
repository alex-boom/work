import HP from './helpers';

(function ($) {

	// When DOM is ready
	$(function () {
		example(HP.random(10, 20));
	});

	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:0,
		items: 1,
		nav:true,
		navText : [],
	})

	//$(".product article").equalHeights();
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-nav").slideToggle();
		return false;
	})

}(jQuery));