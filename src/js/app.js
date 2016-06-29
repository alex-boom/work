import HP from './helpers';

(function ($) {

	// When DOM is ready
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

	document.getElementById('textarea').addEventListener('input', function (e) {
		var val = this.value.trim();
		val.length < 5 ? this.setCustomValidity('Cообщение должно содержать не менее 7 символов') : this.setCustomValidity('');
		});


}(jQuery));

