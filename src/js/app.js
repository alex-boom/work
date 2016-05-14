import HP from './helpers';

(function ($) {

	// When DOM is ready
	$(".btn-up").click(function() {
		$("html, body").animate({
			scrollTop : $("#wrapper").offset().top
		}, 800);
	});
	
	$(window).scroll(function(){
	if ( $(this).scrollTop() > 0 ) {
		$('nav').addClass('fixed');
	} else {
		$('nav').removeClass('fixed');
	}
	});


	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:0,
		items: 1,
		nav:true,
		navText : [],
	});

	$(".owl carousel").owlCarousel({
		margin:0,
		items: 1,
		nav:true,
		navText : [],
	});
	
	$('.carousel').find('div.owl-nav, div.owl-dots').wrapAll("<div class='controls'></div>");

	$('.nav [data-toggle="dropdown"][href!="#"]').on('click', function() {
		if(jQuery(this.parentNode).hasClass('open')) {
		location.href = this.href;
	}

});

}(jQuery));