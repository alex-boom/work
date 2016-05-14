import HP from './helpers';

(function ($) {

	// When DOM is ready
	$(function () {
		example(HP.random(10, 20));
	});

	/**
	 * Just an example function
	 *   DELETE IT
	 * @param  {Number} n - random number between 10 and 20
	 */
	function example(n) {
		console.log(`Hello in ES6... I am ${n} - random number between 10 and 20`);
	}

	$(".toggle-mnu").click(function() {
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


}(jQuery));