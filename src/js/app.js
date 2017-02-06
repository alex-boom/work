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

	//sticky header
	$(window).scroll(function() {
		if ($(this).scrollTop() > 1) {
			$('.header').addClass("sticky");
		} else {
			$('.header').removeClass("sticky");
		}
	});
	//sticky header

	//burger-menu
	$(".toggle-mnu").click(function() {
		$(this).toggleClass("on");
		$(".main-nav").slideToggle();
		return false;
	})
	//burger-menu

	//menu-active, hover
	var $NavBar = $(".main-nav ul li");
		//active
	$NavBar.click(function() {
		$NavBar.removeClass('active');
		$(this).addClass('active');
	})
	//menu-active, hover

	//background-slider
	$(".section-slider .slide").each(function(e){
		$(this).addClass("bg-" + e);
	});
	//background-slider

//equalHeights
	$.fn.equalHeights = function() {
		var maxHeight = 0,
			$this = $(this);
		$this.each(function() {
			var height = $(this).innerHeight();
			if (height > maxHeight) { maxHeight = height; }
		});
		return $this.css('height', maxHeight);
	};
	$('[data-equal]').each(function() {
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


}(jQuery));

