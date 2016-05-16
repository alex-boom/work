import HP from './helpers';
import TouchNav from './touch-nav';

(function ($) {

	// When DOM is ready
	$(function () {
		initTouchNav();
	});

	$(".toggle-mnu").click(function() {
			$(this).toggleClass("on");
			$(".header-menu").slideToggle();
		return false;
	});

function initTouchNav() {
    jQuery('.header-menu').each(function(){
      new TouchNav({
        navBlock: this
      });
    });
  }
}(jQuery));
