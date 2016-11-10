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
		$('.navbar .collapse').css('z-index', '1');
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
				required: "Введите email",
				email: "Поле должно содержать символ @ "
			},
			userName: {
				required: "Введите имя",
				minlength: "Поле дожно содержать не менее 3 символов"
			},
			textarea: {
				// required: "Напишите о себе",
				minlength: "Поле дожно содержать не менее 10 символов"
			}
		},

		submitHandler: function submitHandler() {
			$.ajax({
				type: "POST",
				url: "./mail.php",
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
			url: "./mail.php",
			data: $(this).serialize()
		}).done(function () {
			$("#myModal-1, #myModal-2, #myModal-3").modal("hide");
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

	//btn-up scroll
	$(".fa-angle-up").click(function () {
		$("html, body").animate({
			scrollTop: $("#wrapper").offset().top
		}, 900);
	});
	//btn-up scroll

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7O0FBR2I7QUFDQSxHQUFFLFFBQUYsRUFBWSxNQUFaLENBQW1CLFlBQVk7QUFDOUIsTUFBSSxFQUFFLElBQUYsRUFBUSxTQUFSLEtBQXNCLENBQTFCLEVBQTZCOztBQUU1QixLQUFFLFdBQUYsRUFBZSxPQUFmO0FBQ0EsS0FBRSxTQUFGLEVBQWEsUUFBYixDQUFzQixjQUF0QjtBQUNBLEdBSkQsTUFJTztBQUNOLEtBQUUsV0FBRixFQUFlLFNBQWY7QUFDQSxLQUFFLFNBQUYsRUFBYSxXQUFiLENBQXlCLGNBQXpCO0FBQ0E7QUFDRCxFQVREO0FBVUE7O0FBRUEsR0FBRSxnQkFBRixFQUFvQixLQUFwQixDQUEwQixZQUFZO0FBQ3JDLElBQUUsbUJBQUYsRUFBdUIsR0FBdkIsQ0FBMkIsU0FBM0IsRUFBc0MsR0FBdEM7QUFDQSxFQUZEOztBQUlBO0FBQ0EsR0FBRSxRQUFGLEVBQVksUUFBWixDQUFxQjs7QUFFcEIsU0FBTztBQUNOLFVBQU8sRUFBRSxVQUFVLElBQVo7QUFDTixXQUFPO0FBREQsSUFERDs7QUFLTixhQUFVLEVBQUUsVUFBVSxJQUFaO0FBQ1QsZUFBVyxDQUFDLENBQUQ7QUFERixJQUxKO0FBUU4sYUFBVTs7QUFFVCxlQUFXLENBQUMsRUFBRDtBQUZGO0FBUkosR0FGYTs7QUFnQnBCLFlBQVU7QUFDVCxVQUFPO0FBQ04sY0FBVSxlQURKO0FBRU4sV0FBTztBQUZELElBREU7QUFLVCxhQUFVO0FBQ1QsY0FBVSxhQUREO0FBRVQsZUFBVztBQUZGLElBTEQ7QUFTVCxhQUFVO0FBQ1Q7QUFDQSxlQUFXO0FBRkY7QUFURCxHQWhCVTs7QUErQnBCLGlCQUFlLFNBQVMsYUFBVCxHQUF5QjtBQUN2QyxLQUFF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QXFCLElBRE07QUFFM0IsVUFBUTtBQUZtQixFQUE1QjtBQUlBOztBQUVBO0FBQ0MsS0FBSSxVQUFVLEVBQUUsaUJBQUYsQ0FBZDtBQUNDO0FBQ0QsU0FBUSxLQUFSLENBQWMsWUFBVztBQUN4QixVQUFRLFdBQVIsQ0FBb0IsUUFBcEI7QUFDQSxJQUFFLElBQUYsRUFBUSxRQUFSLENBQWlCLFFBQWpCO0FBQ0EsRUFIRDs7QUFLQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0Q7O0FBRUE7QUFDQSxHQUFFLGNBQUYsRUFBa0IsS0FBbEIsQ0FBd0IsWUFBVTtBQUNqQyxJQUFFLFlBQUYsRUFBZ0IsT0FBaEIsQ0FBd0I7QUFDdkIsY0FBWSxFQUFFLFVBQUYsRUFBYyxNQUFkLEdBQXVCO0FBRFosR0FBeEIsRUFFSSxHQUZKO0FBR0EsRUFKRDtBQUtBOztBQUdBLENBdEtBLEVBc0tDLE1BdEtELENBQUQ7Ozs7Ozs7O0FDRkEsSUFBSSxLQUFLO0FBQ1AsVUFBUSxnQkFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjtBQUN6QixXQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixNQUFNLEdBQU4sR0FBWSxDQUE3QixDQUFYLElBQThDLEdBQXJEO0FBQ0Q7QUFITSxDQUFUOztrQkFNZSxFIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBIUCBmcm9tICcuL2hlbHBlcnMnO1xyXG5cclxuKGZ1bmN0aW9uICgkKSB7XHJcblxyXG5cclxuXHQvL3RvcCBzZWN0aW9uIHNjcm9sbFxyXG5cdCQoZG9jdW1lbnQpLnNjcm9sbChmdW5jdGlvbiAoKSB7XHJcblx0XHRpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDApIHtcclxuXHRcdFx0XHJcblx0XHRcdCQoJy50b3AtbGluZScpLnNsaWRlVXAoKTtcclxuXHRcdFx0JChcIi5uYXZiYXJcIikuYWRkQ2xhc3MoXCJuYXZiYXItZml4ZWRcIik7XHJcblx0XHR9IGVsc2Uge1xyXG5cdFx0XHQkKCcudG9wLWxpbmUnKS5zbGlkZURvd24oKTtcclxuXHRcdFx0JChcIi5uYXZiYXJcIikucmVtb3ZlQ2xhc3MoXCJuYXZiYXItZml4ZWRcIik7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Ly90b3Agc2VjdGlvbiBzY3JvbGxcclxuXHJcblx0JCgnLm5hdmJhci10b2dnbGUnKS5jbGljayhmdW5jdGlvbiAoKSB7XHJcblx0XHQkKCcubmF2YmFyIC5jb2xsYXBzZScpLmNzcygnei1pbmRleCcsICcxJylcclxuXHR9KTtcclxuXHJcblx0Ly9mb3JtIHZhbGlkYXRlXHJcblx0JChcIi5mb3Jtc1wiKS52YWxpZGF0ZSh7XHJcblxyXG5cdFx0cnVsZXM6IHtcclxuXHRcdFx0ZW1haWw6IHsgcmVxdWlyZWQ6IHRydWUsXHJcblx0XHRcdFx0ZW1haWw6IHRydWVcclxuXHRcdFx0fSxcclxuXHJcblx0XHRcdHVzZXJOYW1lOiB7IHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdG1pbmxlbmd0aDogWzNdXHJcblx0XHRcdH0sXHJcblx0XHRcdHRleHRhcmVhOiB7IFxyXG5cclxuXHRcdFx0XHRtaW5sZW5ndGg6IFsxMF1cclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRtZXNzYWdlczoge1xyXG5cdFx0XHRlbWFpbDoge1xyXG5cdFx0XHRcdHJlcXVpcmVkOiBcItCS0LLQtdC00LjRgtC1IGVtYWlsXCIsXHJcblx0XHRcdFx0ZW1haWw6IFwi0J/QvtC70LUg0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDRgdC40LzQstC+0LsgQCBcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR1c2VyTmFtZToge1xyXG5cdFx0XHRcdHJlcXVpcmVkOiBcItCS0LLQtdC00LjRgtC1INC40LzRj1wiLFxyXG5cdFx0XHRcdG1pbmxlbmd0aDogXCLQn9C+0LvQtSDQtNC+0LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDQvdC1INC80LXQvdC10LUgMyDRgdC40LzQstC+0LvQvtCyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0dGV4dGFyZWE6IHtcclxuXHRcdFx0XHQvLyByZXF1aXJlZDogXCLQndCw0L/QuNGI0LjRgtC1INC+INGB0LXQsdC1XCIsXHJcblx0XHRcdFx0bWlubGVuZ3RoOiBcItCf0L7Qu9C1INC00L7QttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC90LUg0LzQtdC90LXQtSAxMCDRgdC40LzQstC+0LvQvtCyXCJcclxuXHRcdFx0fVxyXG5cdFx0fSxcclxuXHJcblx0XHRzdWJtaXRIYW5kbGVyOiBmdW5jdGlvbiBzdWJtaXRIYW5kbGVyKCkge1xyXG5cdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdHVybDogXCIuL21haWwucGhwXCIsXHJcblx0XHRcdFx0ZGF0YTogJChcIi5mb3Jtc1wiKS5zZXJpYWxpemUoKSxcclxuXHRcdFx0XHRzdWNjZXNzOiBmdW5jdGlvbiBzdWNjZXNzKGRhdGEpIHtcclxuXHRcdFx0XHRcdCQoJyNzZW5kJykubW9kYWwoXCJzaG93XCIpO1xyXG5cdFx0XHRcdFx0JChcIi5mb3Jtc1wiKS50cmlnZ2VyKFwicmVzZXRcIik7XHJcblx0XHRcdFx0fVxyXG5cdFx0XHR9KTtcclxuXHRcdH1cclxuXHR9KTtcclxuXHQvL2Zvcm0gdmFsaWRhdGVcclxuXHJcblx0Ly9mb3JtIHNlbmQtbWFpbFxyXG5cdCQoXCIuZm9ybVwiKS5zdWJtaXQoZnVuY3Rpb24oKSB7XHJcblx0XHQkLmFqYXgoe1xyXG5cdFx0XHR0eXBlOiBcIlBPU1RcIixcclxuXHRcdFx0dXJsOiBcIi4vbWFpbC5waHBcIixcclxuXHRcdFx0ZGF0YTogJCh0aGlzKS5zZXJpYWxpemUoKVxyXG5cdFx0fSkuZG9uZShmdW5jdGlvbigpIHtcclxuXHRcdFx0JChcIiNteU1vZGFsLTEsICNteU1vZGFsLTIsICNteU1vZGFsLTNcIikubW9kYWwoXCJoaWRlXCIpO1xyXG5cdFx0XHQkKCcjc2VuZCcpLm1vZGFsKFwic2hvd1wiKTtcclxuXHRcdFx0c2V0VGltZW91dChmdW5jdGlvbigpIHtcclxuXHRcdFx0XHQkKFwiLmZvcm1cIikudHJpZ2dlcihcInJlc2V0XCIpO1xyXG5cdFx0XHRcdCQoJyNzZW5kJykubW9kYWwoXCJoaWRlXCIpO1xyXG5cdFx0XHR9LCA0MDAwKTtcclxuXHRcdH0pO1xyXG5cdFx0cmV0dXJuIGZhbHNlO1xyXG5cdH0pO1xyXG5cdC8vZm9ybSBzZW5kLW1haWxcclxuXHJcblx0Ly9pbnB1dCBhZGRpdGlvbiBwcmljZXNcclxuXHJcblx0JChcImlucHV0W2RhdGEtbnVtYmVyPScxJ11cIikua2V5dXAoZnVuY3Rpb24oKXtcclxuXHRcdHZhciAkbnVtLCAkcHJpc2UsIHN1bW0sICRwb3AsICR0aGlzO1xyXG5cdFx0JHRoaXMgPSAkKFwiaW5wdXRbZGF0YS1udW1iZXI9JzEnXVwiKTtcclxuXHRcdCRudW0gPSAkdGhpcy52YWwoKTtcclxuXHRcdCRwcmlzZSA9IDEwMDtcclxuXHRcdHN1bW0gPSAkbnVtICogJHByaXNlO1xyXG5cdFx0XHQkcG9wID0gJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3Zlci0xXCJdJyk7XHJcblx0XHRcdCRwb3AuYXR0cihcImRhdGEtY29udGVudFwiLCBzdW1tICsgJyAkJyk7XHJcblx0XHRcdCRwb3AucG9wb3ZlcihcInNob3dcIik7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JHBvcC5wb3BvdmVyKFwiaGlkZVwiKTtcclxuXHRcdFx0fSwgNTAwMCk7XHJcblx0fSk7XHJcblxyXG5cdFx0JChcImlucHV0W2RhdGEtbnVtYmVyPScyJ11cIikua2V5dXAoZnVuY3Rpb24oKXtcclxuXHRcdHZhciAkbnVtLCAkcHJpc2UsIHN1bW0sICRwb3AsICR0aGlzO1xyXG5cdFx0JHRoaXMgPSAkKFwiaW5wdXRbZGF0YS1udW1iZXI9JzInXVwiKTtcclxuXHRcdCRudW0gPSAkdGhpcy52YWwoKTtcclxuXHRcdCRwcmlzZSA9IDEwMDtcclxuXHRcdHN1bW0gPSAkbnVtICogJHByaXNlO1xyXG5cdFx0XHQkcG9wID0gJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3Zlci0yXCJdJyk7XHJcblx0XHRcdCRwb3AuYXR0cihcImRhdGEtY29udGVudFwiLCBzdW1tICsgJyAkJyk7XHJcblx0XHRcdCRwb3AucG9wb3ZlcihcInNob3dcIik7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JHBvcC5wb3BvdmVyKFwiaGlkZVwiKTtcclxuXHRcdFx0fSwgNTAwMCk7XHJcblx0fSk7XHJcblxyXG5cdCQoXCJpbnB1dFtkYXRhLW51bWJlcj0nMyddXCIpLmtleXVwKGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgJG51bSwgJHByaXNlLCBzdW1tLCAkcG9wLCAkdGhpcztcclxuXHRcdCR0aGlzID0gJChcImlucHV0W2RhdGEtbnVtYmVyPSczJ11cIik7XHJcblx0XHQkbnVtID0gJHRoaXMudmFsKCk7XHJcblx0XHQkcHJpc2UgPSA5MDtcclxuXHRcdHN1bW0gPSAkbnVtICogJHByaXNlO1xyXG5cdFx0XHQkcG9wID0gJCgnW2RhdGEtdG9nZ2xlPVwicG9wb3Zlci0zXCJdJyk7XHJcblx0XHRcdCRwb3AuYXR0cihcImRhdGEtY29udGVudFwiLCBzdW1tICsgJyAkJyk7XHJcblx0XHRcdCRwb3AucG9wb3ZlcihcInNob3dcIik7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JHBvcC5wb3BvdmVyKFwiaGlkZVwiKTtcclxuXHRcdFx0fSwgNTAwMCk7XHJcblx0fSk7XHJcblxyXG5cdC8vaW5wdXQgYWRkaXRpb24gcHJpY2VzXHJcblxyXG5cdC8vbWVudS1zY3JvbGxcclxuXHQkKFwiI215TmF2YmFyIHVsIGxpIGFcIikubVBhZ2VTY3JvbGwyaWQoe1xyXG5cdFx0cGFnZUVuZFNtb290aFNjcm9sbDogdHJ1ZSxcclxuXHRcdG9mZnNldDogNjBcclxuXHR9KTtcclxuXHJcblx0JChcIi5tYWlsIGFcIikubVBhZ2VTY3JvbGwyaWQoe1xyXG5cdFx0cGFnZUVuZFNtb290aFNjcm9sbDogdHJ1ZSxcclxuXHRcdG9mZnNldDogNzBcclxuXHR9KTtcclxuXHQvL21lbnUtc2Nyb2xsXHJcblxyXG5cdC8vbWVudS1hY3RpdmUsIGhvdmVyXHJcblx0XHR2YXIgJE5hdkJhciA9ICQoXCIjbXlOYXZiYXIgdWwgbGlcIik7XHJcblx0XHRcdC8vYWN0aXZlXHJcblx0XHQkTmF2QmFyLmNsaWNrKGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkTmF2QmFyLnJlbW92ZUNsYXNzKCdjaG9pY2UnKTtcclxuXHRcdFx0JCh0aGlzKS5hZGRDbGFzcygnY2hvaWNlJyk7XHJcblx0XHR9KVxyXG5cclxuXHRcdFx0Ly9ob3ZlclxyXG5cdFx0Ly8gJE5hdkJhci5tb3VzZW92ZXIoZnVuY3Rpb24oKXtcclxuXHRcdC8vIFx0JE5hdkJhci5yZW1vdmVDbGFzcygnYW5pbWF0ZWQgZmxpcEluWScpO1xyXG5cdFx0Ly8gXHQkKHRoaXMpLmFkZENsYXNzKCdhbmltYXRlZCBmbGlwSW5ZJyk7XHJcblx0XHQvLyB9KTtcclxuXHQvL21lbnUtYWN0aXZlLCBob3ZlclxyXG5cclxuXHQvL2J0bi11cCBzY3JvbGxcclxuXHQkKFwiLmZhLWFuZ2xlLXVwXCIpLmNsaWNrKGZ1bmN0aW9uKCl7XHJcblx0XHQkKFwiaHRtbCwgYm9keVwiKS5hbmltYXRlKHtcclxuXHRcdFx0c2Nyb2xsVG9wIDogJChcIiN3cmFwcGVyXCIpLm9mZnNldCgpLnRvcFxyXG5cdFx0XHR9LCA5MDApO1xyXG5cdH0pO1xyXG5cdC8vYnRuLXVwIHNjcm9sbFxyXG5cclxuXHJcbn0oalF1ZXJ5KSk7IiwidmFyIEhQID0ge1xyXG4gIHJhbmRvbTogZnVuY3Rpb24obWluLCBtYXgpIHtcclxuICAgIHJldHVybiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluICsgMSkpICsgbWluO1xyXG4gIH1cclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSFA7Il19
