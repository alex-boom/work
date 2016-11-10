(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

	//top section scroll
	$(document).scroll(function () {
		if ($(this).scrollTop() > 0) {

			$('.top-line').slideUp();
			$(".navbar").addClass("navbar-fixed");
		} else {
			$('.top-line').slideDown();
			$(".navbar").removeClass("navbar-fixed");
		}
	});
	//top section scroll

	$('.navbar-toggle').click(function () {
		$('.navbar .collapse').css('z-index', '1')
	});

	//form validate
	$(".forms").validate({

		rules: {
			email: { required: true,
				email: true
			},

			userName: { required: true,
				minlength: [3]
			},
			textarea: {

				minlength: [10]
			}
		},

		messages: {
			email: {
				required: "Enter your email",
				email: "field must contain the @ symbol"
			},
			userName: {
				required: "Enter your name",
				minlength: "field is unusual and should be at least 3 characters"
			},
			textarea: {
				// required: "Напишите о себе",
				minlength: "field is unusual and should be at least 10 characters"
			}
		},

		submitHandler: function submitHandler() {
			$.ajax({
				type: "POST",
				url: urlMail,
				data: $(".forms").serialize(),
				success: function success(data) {
					$('#send').modal("show");
					$(".forms").trigger("reset");
				}
			});
		}
	});
	//form validate

	//form send-mail 
	$(".form").submit(function () {
		$.ajax({
			type: "POST",
			url: urlMail,
			data: $(this).serialize()
		}).done(function () {
			$(".closes").modal("hide");
			$('#send').modal("show");
			setTimeout(function () {
				$(".form").trigger("reset");
				$('#send').modal("hide");
			}, 4000);
		});
		return false;
	});
	//form send-mail

	//input addition prices

	$("input[data-number='1']").keyup(function () {
		var $num, $prise, summ, $pop, $this;
		$this = $("input[data-number='1']");
		$num = $this.val();
		$prise = 100;
		summ = $num * $prise;
		$pop = $('[data-toggle="popover-1"]');
		$pop.attr("data-content", summ + ' $');
		$pop.popover("show");
		setTimeout(function () {
			$pop.popover("hide");
		}, 5000);
	});

	$("input[data-number='2']").keyup(function () {
		var $num, $prise, summ, $pop, $this;
		$this = $("input[data-number='2']");
		$num = $this.val();
		$prise = 100;
		summ = $num * $prise;
		$pop = $('[data-toggle="popover-2"]');
		$pop.attr("data-content", summ + ' $');
		$pop.popover("show");
		setTimeout(function () {
			$pop.popover("hide");
		}, 5000);
	});

	$("input[data-number='3']").keyup(function () {
		var $num, $prise, summ, $pop, $this;
		$this = $("input[data-number='3']");
		$num = $this.val();
		$prise = 90;
		summ = $num * $prise;
		$pop = $('[data-toggle="popover-3"]');
		$pop.attr("data-content", summ + ' $');
		$pop.popover("show");
		setTimeout(function () {
			$pop.popover("hide");
		}, 5000);
	});

	//input addition prices

	//menu-scroll
	$("#myNavbar ul li a").mPageScroll2id({
		pageEndSmoothScroll: true,
		offset: 60
	});

	$(".mail a").mPageScroll2id({
		pageEndSmoothScroll: true,
		offset: 70
	});
	//menu-scroll

	//menu-active, hover
	var $NavBar = $("#myNavbar ul li");
	//active
	$NavBar.click(function () {
		$NavBar.removeClass('choice');
		$(this).addClass('choice');
	});

	//hover
	// $NavBar.mouseover(function(){
	// 	$NavBar.removeClass('animated flipInY');
	// 	$(this).addClass('animated flipInY');
	// });
	//menu-active, hover

	//active page-product
		// var $link = $("#page-product .section-product .btn-product");
		// $link.click(function () {
		// 	$link.css({
		// 		'background': '#0f6',
		// 		'color': '#000'
		// 	});
		// 	$(this).css({
		// 		'background': '#ff14c2',
		// 		'color': '#fff'
		// 	});
		// });
	//active page-product

	//btn-up scroll
	$(".fa-angle-up").click(function () {
		$("html, body").animate({
			scrollTop: $("#wrapper").offset().top
		}, 900);
	});
	//btn-up scroll

	//preloader
	$(window).load(function() {
	$('#before-load').find('i').fadeOut().end().delay(400).fadeOut('slow');
	});
	//preloader

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7O0FBR2I7QUFDQSxHQUFFLFFBQUYsRUFBWSxNQUFaLENBQW1CLFlBQVk7QUFDOUIsTUFBSSxFQUFFLElBQUYsRUFBUSxTQUFSLEtBQXNCLENBQTFCLEVBQTZCOztBQUU1QixLQUFFLFdBQUYsRUFBZSxPQUFmO0FBQ0EsS0FBRSxTQUFGLEVBQWEsUUFBYixDQUFzQixjQUF0QjtBQUNBLEdBSkQsTUFJTztBQUNOLEtBQUUsV0FBRixFQUFlLFNBQWY7QUFDQSxLQUFFLFNBQUYsRUFBYSxXQUFiLENBQXlCLGNBQXpCO0FBQ0E7QUFDRCxFQVREO0FBVUE7O0FBRUE7QUFDQSxHQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCOztBQUVwQixTQUFPO0FBQ04sVUFBTyxFQUFFLFVBQVUsSUFBWjtBQUNOLFdBQU87QUFERCxJQUREOztBQUtOLGFBQVUsRUFBRSxVQUFVLElBQVo7QUFDVCxlQUFXLENBQUMsQ0FBRDtBQURGLElBTEo7QUFRTixhQUFVOztBQUVULGVBQVcsQ0FBQyxFQUFEO0FBRkY7QUFSSixHQUZhOztBQWdCcEIsWUFBVTtBQUNULFVBQU87QUFDTixjQUFVLGVBREo7QUFFTixXQUFPO0FBRkQsSUFERTtBQUtULGFBQVU7QUFDVCxjQUFVLGFBREQ7QUFFVCxlQUFXO0FBRkYsSUFMRDtBQVNULGFBQVU7QUFDVDtBQUNBLGVBQVc7QUFGRjtBQVRELEdBaEJVOztBQStCcEIsaUJBQWUsU0FBUyxhQUFULEdBQXlCO0FBQ3ZDLEtBQUUsSUFBRixDQUFPO0FBQ04sVUFBTSxNQURBO0FBRU4sU0FBSyxZQUZDO0FBR04sVUFBTSxFQUFFLFFBQUYsRUFBWSxTQUFaLEVBSEE7QUFJTixhQUFTLFNBQVMsT0FBVCxDQUFpQixJQUFqQixFQUF1QjtBQUMvQixPQUFFLE9BQUYsRUFBVyxLQUFYLENBQWlCLE1BQWpCO0FBQ0EsT0FBRSxRQUFGLEVBQVksT0FBWixDQUFvQixPQUFwQjtBQUNBO0FBUEssSUFBUDtBQVNBO0FBekNtQixFQUFyQjtBQTJDQTs7QUFFQTtBQUNBLEdBQUUsT0FBRixFQUFXLE1BQVgsQ0FBa0IsWUFBVztBQUM1QixJQUFFLElBQUYsQ0FBTztBQUNOLFNBQU0sTUFEQTtBQUVOLFFBQUssWUFGQztBQUdOLFNBQU0sRUFBRSxJQUFGLEVBQVEsU0FBUjtBQUhBLEdBQVAsRUFJRyxJQUpILENBSVEsWUFBVztBQUNsQixLQUFFLG9DQUFGLEVBQXdDLEtBQXhDLENBQThDLE1BQTlDO0FBQ0EsS0FBRSxPQUFGLEVBQVcsS0FBWCxDQUFpQixNQUFqQjtBQUNBLGNBQVcsWUFBVztBQUNyQixNQUFFLE9BQUYsRUFBVyxPQUFYLENBQW1CLE9BQW5CO0FBQ0EsTUFBRSxPQUFGLEVBQVcsS0FBWCxDQUFpQixNQUFqQjtBQUNBLElBSEQsRUFHRyxJQUhIO0FBSUEsR0FYRDtBQVlBLFNBQU8sS0FBUDtBQUNBLEVBZEQ7QUFlQTs7QUFFQTs7QUFFQSxHQUFFLHdCQUFGLEVBQTRCLEtBQTVCLENBQWtDLFlBQVU7QUFDM0MsTUFBSSxJQUFKLEVBQVUsTUFBVixFQUFrQixJQUFsQixFQUF3QixJQUF4QixFQUE4QixLQUE5QjtBQUNBLFVBQVEsRUFBRSx3QkFBRixDQUFSO0FBQ0EsU0FBTyxNQUFNLEdBQU4sRUFBUDtBQUNBLFdBQVMsR0FBVDtBQUNBLFNBQU8sT0FBTyxNQUFkO0FBQ0MsU0FBTyxFQUFFLDJCQUFGLENBQVA7QUFDQSxPQUFLLElBQUwsQ0FBVSxjQUFWLEVBQTBCLE9BQU8sSUFBakM7QUFDQSxPQUFLLE9BQUwsQ0FBYSxNQUFiO0FBQ0EsYUFBVyxZQUFXO0FBQ3JCLFFBQUssT0FBTCxDQUFhLE1BQWI7QUFDQSxHQUZELEVBRUcsSUFGSDtBQUdELEVBWkQ7O0FBY0MsR0FBRSx3QkFBRixFQUE0QixLQUE1QixDQUFrQyxZQUFVO0FBQzVDLE1BQUksSUFBSixFQUFVLE1BQVYsRUFBa0IsSUFBbEIsRUFBd0IsSUFBeEIsRUFBOEIsS0FBOUI7QUFDQSxVQUFRLEVBQUUsd0JBQUYsQ0FBUjtBQUNBLFNBQU8sTUFBTSxHQUFOLEVBQVA7QUFDQSxXQUFTLEdBQVQ7QUFDQSxTQUFPLE9BQU8sTUFBZDtBQUNDLFNBQU8sRUFBRSwyQkFBRixDQUFQO0FBQ0EsT0FBSyxJQUFMLENBQVUsY0FBVixFQUEwQixPQUFPLElBQWpDO0FBQ0EsT0FBSyxPQUFMLENBQWEsTUFBYjtBQUNBLGFBQVcsWUFBVztBQUNyQixRQUFLLE9BQUwsQ0FBYSxNQUFiO0FBQ0EsR0FGRCxFQUVHLElBRkg7QUFHRCxFQVpBOztBQWNELEdBQUUsd0JBQUYsRUFBNEIsS0FBNUIsQ0FBa0MsWUFBVTtBQUMzQyxNQUFJLElBQUosRUFBVSxNQUFWLEVBQWtCLElBQWxCLEVBQXdCLElBQXhCLEVBQThCLEtBQTlCO0FBQ0EsVUFBUSxFQUFFLHdCQUFGLENBQVI7QUFDQSxTQUFPLE1BQU0sR0FBTixFQUFQO0FBQ0EsV0FBUyxFQUFUO0FBQ0EsU0FBTyxPQUFPLE1BQWQ7QUFDQyxTQUFPLEVBQUUsMkJBQUYsQ0FBUDtBQUNBLE9BQUssSUFBTCxDQUFVLGNBQVYsRUFBMEIsT0FBTyxJQUFqQztBQUNBLE9BQUssT0FBTCxDQUFhLE1BQWI7QUFDQSxhQUFXLFlBQVc7QUFDckIsUUFBSyxPQUFMLENBQWEsTUFBYjtBQUNBLEdBRkQsRUFFRyxJQUZIO0FBR0QsRUFaRDs7QUFjQTs7QUFFQTtBQUNBLEdBQUUsbUJBQUYsRUFBdUIsY0FBdkIsQ0FBc0M7QUFDckMsdUJBQXFCLElBRGdCO0FBRXJDLFVBQVE7QUFGNkIsRUFBdEM7O0FBS0EsR0FBRSxTQUFGLEVBQWEsY0FBYixDQUE0QjtBQUMzQix1QkFBcUIsSUFETTtBQUUzQixVQUFRO0FBRm1CLEVBQTVCO0FBSUE7O0FBRUE7QUFDQyxLQUFJLFVBQVUsRUFBRSxpQkFBRixDQUFkO0FBQ0M7QUFDRCxTQUFRLEtBQVIsQ0FBYyxZQUFXO0FBQ3hCLFVBQVEsV0FBUixDQUFvQixRQUFwQjtBQUNBLElBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsUUFBakI7QUFDQSxFQUhEOztBQUtDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFFQTtBQUNBLEdBQUUsY0FBRixFQUFrQixLQUFsQixDQUF3QixZQUFVO0FBQ2pDLElBQUUsWUFBRixFQUFnQixPQUFoQixDQUF3QjtBQUN2QixjQUFZLEVBQUUsVUFBRixFQUFjLE1BQWQsR0FBdUI7QUFEWixHQUF4QixFQUVJLEdBRko7QUFHQSxFQUpEO0FBS0E7O0FBR0EsQ0FsS0EsRUFrS0MsTUFsS0QsQ0FBRDs7Ozs7Ozs7QUNGQSxJQUFJLEtBQUs7QUFDUCxVQUFRLGdCQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CO0FBQ3pCLFdBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLE1BQWlCLE1BQU0sR0FBTixHQUFZLENBQTdCLENBQVgsSUFBOEMsR0FBckQ7QUFDRDtBQUhNLENBQVQ7O2tCQU1lLEUiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IEhQIGZyb20gJy4vaGVscGVycyc7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHJcblxyXG5cdC8vdG9wIHNlY3Rpb24gc2Nyb2xsXHJcblx0JChkb2N1bWVudCkuc2Nyb2xsKGZ1bmN0aW9uICgpIHtcclxuXHRcdGlmICgkKHRoaXMpLnNjcm9sbFRvcCgpID4gMCkge1xyXG5cdFx0XHRcclxuXHRcdFx0JCgnLnRvcC1saW5lJykuc2xpZGVVcCgpO1xyXG5cdFx0XHQkKFwiLm5hdmJhclwiKS5hZGRDbGFzcyhcIm5hdmJhci1maXhlZFwiKTtcclxuXHRcdH0gZWxzZSB7XHJcblx0XHRcdCQoJy50b3AtbGluZScpLnNsaWRlRG93bigpO1xyXG5cdFx0XHQkKFwiLm5hdmJhclwiKS5yZW1vdmVDbGFzcyhcIm5hdmJhci1maXhlZFwiKTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQvL3RvcCBzZWN0aW9uIHNjcm9sbFxyXG5cclxuXHQvL2Zvcm0gdmFsaWRhdGVcclxuXHQkKFwiLmZvcm1zXCIpLnZhbGlkYXRlKHtcclxuXHJcblx0XHRydWxlczoge1xyXG5cdFx0XHRlbWFpbDogeyByZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRlbWFpbDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dXNlck5hbWU6IHsgcmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0bWlubGVuZ3RoOiBbM11cclxuXHRcdFx0fSxcclxuXHRcdFx0dGV4dGFyZWE6IHsgXHJcblxyXG5cdFx0XHRcdG1pbmxlbmd0aDogWzEwXVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdG1lc3NhZ2VzOiB7XHJcblx0XHRcdGVtYWlsOiB7XHJcblx0XHRcdFx0cmVxdWlyZWQ6IFwi0JLQstC10LTQuNGC0LUgZW1haWxcIixcclxuXHRcdFx0XHRlbWFpbDogXCLQn9C+0LvQtSDQtNC+0LvQttC90L4g0YHQvtC00LXRgNC20LDRgtGMINGB0LjQvNCy0L7QuyBAIFwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHVzZXJOYW1lOiB7XHJcblx0XHRcdFx0cmVxdWlyZWQ6IFwi0JLQstC10LTQuNGC0LUg0LjQvNGPXCIsXHJcblx0XHRcdFx0bWlubGVuZ3RoOiBcItCf0L7Qu9C1INC00L7QttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC90LUg0LzQtdC90LXQtSAzINGB0LjQvNCy0L7Qu9C+0LJcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0ZXh0YXJlYToge1xyXG5cdFx0XHRcdC8vIHJlcXVpcmVkOiBcItCd0LDQv9C40YjQuNGC0LUg0L4g0YHQtdCx0LVcIixcclxuXHRcdFx0XHRtaW5sZW5ndGg6IFwi0J/QvtC70LUg0LTQvtC20L3QviDRgdC+0LTQtdGA0LbQsNGC0Ywg0L3QtSDQvNC10L3QtdC1IDEwINGB0LjQvNCy0L7Qu9C+0LJcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uIHN1Ym1pdEhhbmRsZXIoKSB7XHJcblx0XHRcdCQuYWpheCh7XHJcblx0XHRcdFx0dHlwZTogXCJQT1NUXCIsXHJcblx0XHRcdFx0dXJsOiBcIi4vbWFpbC5waHBcIixcclxuXHRcdFx0XHRkYXRhOiAkKFwiLmZvcm1zXCIpLnNlcmlhbGl6ZSgpLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uIHN1Y2Nlc3MoZGF0YSkge1xyXG5cdFx0XHRcdFx0JCgnI3NlbmQnKS5tb2RhbChcInNob3dcIik7XHJcblx0XHRcdFx0XHQkKFwiLmZvcm1zXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdH0pO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdC8vZm9ybSB2YWxpZGF0ZVxyXG5cclxuXHQvL2Zvcm0gc2VuZC1tYWlsXHJcblx0JChcIi5mb3JtXCIpLnN1Ym1pdChmdW5jdGlvbigpIHtcclxuXHRcdCQuYWpheCh7XHJcblx0XHRcdHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHR1cmw6IFwiLi9tYWlsLnBocFwiLFxyXG5cdFx0XHRkYXRhOiAkKHRoaXMpLnNlcmlhbGl6ZSgpXHJcblx0XHR9KS5kb25lKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkKFwiI215TW9kYWwtMSwgI215TW9kYWwtMiwgI215TW9kYWwtM1wiKS5tb2RhbChcImhpZGVcIik7XHJcblx0XHRcdCQoJyNzZW5kJykubW9kYWwoXCJzaG93XCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCQoXCIuZm9ybVwiKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcblx0XHRcdFx0JCgnI3NlbmQnKS5tb2RhbChcImhpZGVcIik7XHJcblx0XHRcdH0sIDIwMDApO1xyXG5cdFx0fSk7XHJcblx0XHRyZXR1cm4gZmFsc2U7XHJcblx0fSk7XHJcblx0Ly9mb3JtIHNlbmQtbWFpbFxyXG5cclxuXHQvL2lucHV0IGFkZGl0aW9uIHByaWNlc1xyXG5cclxuXHQkKFwiaW5wdXRbZGF0YS1udW1iZXI9JzEnXVwiKS5rZXl1cChmdW5jdGlvbigpe1xyXG5cdFx0dmFyICRudW0sICRwcmlzZSwgc3VtbSwgJHBvcCwgJHRoaXM7XHJcblx0XHQkdGhpcyA9ICQoXCJpbnB1dFtkYXRhLW51bWJlcj0nMSddXCIpO1xyXG5cdFx0JG51bSA9ICR0aGlzLnZhbCgpO1xyXG5cdFx0JHByaXNlID0gMTAwO1xyXG5cdFx0c3VtbSA9ICRudW0gKiAkcHJpc2U7XHJcblx0XHRcdCRwb3AgPSAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyLTFcIl0nKTtcclxuXHRcdFx0JHBvcC5hdHRyKFwiZGF0YS1jb250ZW50XCIsIHN1bW0gKyAnICQnKTtcclxuXHRcdFx0JHBvcC5wb3BvdmVyKFwic2hvd1wiKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkcG9wLnBvcG92ZXIoXCJoaWRlXCIpO1xyXG5cdFx0XHR9LCA1MDAwKTtcclxuXHR9KTtcclxuXHJcblx0XHQkKFwiaW5wdXRbZGF0YS1udW1iZXI9JzInXVwiKS5rZXl1cChmdW5jdGlvbigpe1xyXG5cdFx0dmFyICRudW0sICRwcmlzZSwgc3VtbSwgJHBvcCwgJHRoaXM7XHJcblx0XHQkdGhpcyA9ICQoXCJpbnB1dFtkYXRhLW51bWJlcj0nMiddXCIpO1xyXG5cdFx0JG51bSA9ICR0aGlzLnZhbCgpO1xyXG5cdFx0JHByaXNlID0gMTAwO1xyXG5cdFx0c3VtbSA9ICRudW0gKiAkcHJpc2U7XHJcblx0XHRcdCRwb3AgPSAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyLTJcIl0nKTtcclxuXHRcdFx0JHBvcC5hdHRyKFwiZGF0YS1jb250ZW50XCIsIHN1bW0gKyAnICQnKTtcclxuXHRcdFx0JHBvcC5wb3BvdmVyKFwic2hvd1wiKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkcG9wLnBvcG92ZXIoXCJoaWRlXCIpO1xyXG5cdFx0XHR9LCA1MDAwKTtcclxuXHR9KTtcclxuXHJcblx0JChcImlucHV0W2RhdGEtbnVtYmVyPSczJ11cIikua2V5dXAoZnVuY3Rpb24oKXtcclxuXHRcdHZhciAkbnVtLCAkcHJpc2UsIHN1bW0sICRwb3AsICR0aGlzO1xyXG5cdFx0JHRoaXMgPSAkKFwiaW5wdXRbZGF0YS1udW1iZXI9JzMnXVwiKTtcclxuXHRcdCRudW0gPSAkdGhpcy52YWwoKTtcclxuXHRcdCRwcmlzZSA9IDkwO1xyXG5cdFx0c3VtbSA9ICRudW0gKiAkcHJpc2U7XHJcblx0XHRcdCRwb3AgPSAkKCdbZGF0YS10b2dnbGU9XCJwb3BvdmVyLTNcIl0nKTtcclxuXHRcdFx0JHBvcC5hdHRyKFwiZGF0YS1jb250ZW50XCIsIHN1bW0gKyAnICQnKTtcclxuXHRcdFx0JHBvcC5wb3BvdmVyKFwic2hvd1wiKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkcG9wLnBvcG92ZXIoXCJoaWRlXCIpO1xyXG5cdFx0XHR9LCA1MDAwKTtcclxuXHR9KTtcclxuXHJcblx0Ly9pbnB1dCBhZGRpdGlvbiBwcmljZXNcclxuXHJcblx0Ly9tZW51LXNjcm9sbFxyXG5cdCQoXCIjbXlOYXZiYXIgdWwgbGkgYVwiKS5tUGFnZVNjcm9sbDJpZCh7XHJcblx0XHRwYWdlRW5kU21vb3RoU2Nyb2xsOiB0cnVlLFxyXG5cdFx0b2Zmc2V0OiA2MFxyXG5cdH0pO1xyXG5cclxuXHQkKFwiLm1haWwgYVwiKS5tUGFnZVNjcm9sbDJpZCh7XHJcblx0XHRwYWdlRW5kU21vb3RoU2Nyb2xsOiB0cnVlLFxyXG5cdFx0b2Zmc2V0OiA3MFxyXG5cdH0pO1xyXG5cdC8vbWVudS1zY3JvbGxcclxuXHJcblx0Ly9tZW51LWFjdGl2ZSwgaG92ZXJcclxuXHRcdHZhciAkTmF2QmFyID0gJChcIiNteU5hdmJhciB1bCBsaVwiKTtcclxuXHRcdFx0Ly9hY3RpdmVcclxuXHRcdCROYXZCYXIuY2xpY2soZnVuY3Rpb24oKSB7XHJcblx0XHRcdCROYXZCYXIucmVtb3ZlQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0XHQkKHRoaXMpLmFkZENsYXNzKCdhY3RpdmUnKTtcclxuXHRcdH0pXHJcblxyXG5cdFx0XHQvL2hvdmVyXHJcblx0XHQvLyAkTmF2QmFyLm1vdXNlb3ZlcihmdW5jdGlvbigpe1xyXG5cdFx0Ly8gXHQkTmF2QmFyLnJlbW92ZUNsYXNzKCdhbmltYXRlZCBmbGlwSW5ZJyk7XHJcblx0XHQvLyBcdCQodGhpcykuYWRkQ2xhc3MoJ2FuaW1hdGVkIGZsaXBJblknKTtcclxuXHRcdC8vIH0pO1xyXG5cdC8vbWVudS1hY3RpdmUsIGhvdmVyXHJcblxyXG5cdC8vYnRuLXVwIHNjcm9sbFxyXG5cdCQoXCIuZmEtYW5nbGUtdXBcIikuY2xpY2soZnVuY3Rpb24oKXtcclxuXHRcdCQoXCJodG1sLCBib2R5XCIpLmFuaW1hdGUoe1xyXG5cdFx0XHRzY3JvbGxUb3AgOiAkKFwiI3dyYXBwZXJcIikub2Zmc2V0KCkudG9wXHJcblx0XHRcdH0sIDkwMCk7XHJcblx0fSk7XHJcblx0Ly9idG4tdXAgc2Nyb2xsXHJcblxyXG5cclxufShqUXVlcnkpKTsiLCJ2YXIgSFAgPSB7XHJcbiAgcmFuZG9tOiBmdW5jdGlvbihtaW4sIG1heCkge1xyXG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XHJcbiAgfVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBIUDsiXX0=
