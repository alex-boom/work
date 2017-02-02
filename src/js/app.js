import HP from './helpers';

(function ($) {

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

	//background-slider
	$(".section-slider .item").each(function(e){
		$(this).addClass("bg-" + e);
	});
	//background-slider

	//owlCarousel
	$(".owl-carousel").owlCarousel({
		autoPlay: 7000,
		loop: true,
		navigation : true,
		slideSpeed : 300,
		paginationSpeed : 400,
		singleItem:true,
		items : 1,
		navigationText : [],
	});
	//owlCarousel

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
		$(window).scroll(function() {
			if ($(this).scrollTop() > 2500) {
				if ($(this).scroll(function(){
					$btnUp.css('display', 'none');
				}));
				$btnUp.fadeIn(1000);
			} else {
				$btnUp.fadeOut();
			}
		});
//fadeIn, fadeOut "up-btn" if scroll


}(jQuery));