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
				url: "wp-content/themes/snail/mail.php",
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
			url: "wp-content/themes/snail/mail.php",
			data: $(this).serialize()
		}).done(function () {
			$("#myModal-1, #myModal-2, #myModal-3").modal("hide");
			$('#send').modal("show");
			setTimeout(function () {
				$(".form").trigger("reset");
				$('#send').modal("hide");
			}, 2000);
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
		$NavBar.removeClass('active');
		$(this).addClass('active');
	});

	//hover
	// $NavBar.mouseover(function(){
	// 	$NavBar.removeClass('animated flipInY');
	// 	$(this).addClass('animated flipInY');
	// });
	//menu-active, hover

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiLCJzcmNcXGpzXFxoZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUMsV0FBVSxDQUFWLEVBQWE7O0FBR2I7QUFDQSxHQUFFLFFBQUYsRUFBWSxNQUFaLENBQW1CLFlBQVk7QUFDOUIsTUFBSSxFQUFFLElBQUYsRUFBUSxTQUFSLEtBQXNCLENBQTFCLEVBQTZCOztBQUU1QixLQUFFLFdBQUYsRUFBZSxPQUFmO0FBQ0EsS0FBRSxTQUFGLEVBQWEsUUFBYixDQUFzQixjQUF0QjtBQUNBLEdBSkQsTUFJTztBQUNOLEtBQUUsV0FBRixFQUFlLFNBQWY7QUFDQSxLQUFFLFNBQUYsRUFBYSxXQUFiLENBQXlCLGNBQXpCO0FBQ0E7QUFDRCxFQVREO0FBVUE7O0FBRUE7QUFDQSxHQUFFLFFBQUYsRUFBWSxRQUFaLENBQXFCOztBQUVwQixTQUFPO0FBQ04sVUFBTyxFQUFFLFVBQVUsSUFBWjtBQUNOLFdBQU87QUFERCxJQUREOztBQUtOLGFBQVUsRUFBRSxVQUFVLElBQVo7QUFDVCxlQUFXLENBQUMsQ0FBRDtBQURGLElBTEo7QUFRTixhQUFVOztBQUVULGVBQVcsQ0FBQyxFQUFEO0FBRkY7QUFSSixHQUZhOztBQWdCcEIsWUFBVTtBQUNULFVBQU87QUFDTixjQUFVLGVBREo7QUFFTixXQUFPO0FBRkQsSUFERTtBQUtULGFBQVU7QUFDVCxjQUFVLGFBREQ7QUFFVCxlQUFXO0FBRkYsSUFMRDtBQVNULGFBQVU7QUFDVDtBQUNBLGVBQVc7QUFGRjtBQVRELEdBaEJVOztBQStCcEIsaUJBQWUsU0FBUyxhQUFULEdBQXlCO0FBQ3ZDLEtBQUUsSUFBRixDQUFPO0FBQ04sVUFBTSxNQURBO0FBRU4sU0FBSyxZQUZDO0FBR04sVUFBTSxFQUFFLFFBQUYsRUFBWSxTQUFaLEVBSEE7QUFJTixhQUFTLFNBQVMsT0FBVCxDQUFpQixJ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O0FBQ3hCLFVBQVEsV0FBUixDQUFvQixRQUFwQjtBQUNBLElBQUUsSUFBRixFQUFRLFFBQVIsQ0FBaUIsUUFBakI7QUFDQSxFQUhEOztBQUtDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDRDs7QUFHQSxDQTFKQSxFQTBKQyxNQTFKRCxDQUFEOzs7Ozs7OztBQ0ZBLElBQUksS0FBSztBQUNQLFVBQVEsZ0JBQVMsR0FBVCxFQUFjLEdBQWQsRUFBbUI7QUFDekIsV0FBTyxLQUFLLEtBQUwsQ0FBVyxLQUFLLE1BQUwsTUFBaUIsTUFBTSxHQUFOLEdBQVksQ0FBN0IsQ0FBWCxJQUE4QyxHQUFyRDtBQUNEO0FBSE0sQ0FBVDs7a0JBTWUsRSIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSFAgZnJvbSAnLi9oZWxwZXJzJztcclxuXHJcbihmdW5jdGlvbiAoJCkge1xyXG5cclxuXHJcblx0Ly90b3Agc2VjdGlvbiBzY3JvbGxcclxuXHQkKGRvY3VtZW50KS5zY3JvbGwoZnVuY3Rpb24gKCkge1xyXG5cdFx0aWYgKCQodGhpcykuc2Nyb2xsVG9wKCkgPiAwKSB7XHJcblx0XHRcdFxyXG5cdFx0XHQkKCcudG9wLWxpbmUnKS5zbGlkZVVwKCk7XHJcblx0XHRcdCQoXCIubmF2YmFyXCIpLmFkZENsYXNzKFwibmF2YmFyLWZpeGVkXCIpO1xyXG5cdFx0fSBlbHNlIHtcclxuXHRcdFx0JCgnLnRvcC1saW5lJykuc2xpZGVEb3duKCk7XHJcblx0XHRcdCQoXCIubmF2YmFyXCIpLnJlbW92ZUNsYXNzKFwibmF2YmFyLWZpeGVkXCIpO1xyXG5cdFx0fVxyXG5cdH0pO1xyXG5cdC8vdG9wIHNlY3Rpb24gc2Nyb2xsXHJcblxyXG5cdC8vZm9ybSB2YWxpZGF0ZVxyXG5cdCQoXCIuZm9ybXNcIikudmFsaWRhdGUoe1xyXG5cclxuXHRcdHJ1bGVzOiB7XHJcblx0XHRcdGVtYWlsOiB7IHJlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdGVtYWlsOiB0cnVlXHJcblx0XHRcdH0sXHJcblxyXG5cdFx0XHR1c2VyTmFtZTogeyByZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRtaW5sZW5ndGg6IFszXVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0ZXh0YXJlYTogeyBcclxuXHJcblx0XHRcdFx0bWlubGVuZ3RoOiBbMTBdXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0bWVzc2FnZXM6IHtcclxuXHRcdFx0ZW1haWw6IHtcclxuXHRcdFx0XHRyZXF1aXJlZDogXCLQktCy0LXQtNC40YLQtSBlbWFpbFwiLFxyXG5cdFx0XHRcdGVtYWlsOiBcItCf0L7Qu9C1INC00L7Qu9C20L3QviDRgdC+0LTQtdGA0LbQsNGC0Ywg0YHQuNC80LLQvtC7IEAgXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0dXNlck5hbWU6IHtcclxuXHRcdFx0XHRyZXF1aXJlZDogXCLQktCy0LXQtNC40YLQtSDQuNC80Y9cIixcclxuXHRcdFx0XHRtaW5sZW5ndGg6IFwi0J/QvtC70LUg0LTQvtC20L3QviDRgdC+0LTQtdGA0LbQsNGC0Ywg0L3QtSDQvNC10L3QtdC1IDMg0YHQuNC80LLQvtC70L7QslwiXHJcblx0XHRcdH0sXHJcblx0XHRcdHRleHRhcmVhOiB7XHJcblx0XHRcdFx0Ly8gcmVxdWlyZWQ6IFwi0J3QsNC/0LjRiNC40YLQtSDQviDRgdC10LHQtVwiLFxyXG5cdFx0XHRcdG1pbmxlbmd0aDogXCLQn9C+0LvQtSDQtNC+0LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDQvdC1INC80LXQvdC10LUgMTAg0YHQuNC80LLQvtC70L7QslwiXHJcblx0XHRcdH1cclxuXHRcdH0sXHJcblxyXG5cdFx0c3VibWl0SGFuZGxlcjogZnVuY3Rpb24gc3VibWl0SGFuZGxlcigpIHtcclxuXHRcdFx0JC5hamF4KHtcclxuXHRcdFx0XHR0eXBlOiBcIlBPU1RcIixcclxuXHRcdFx0XHR1cmw6IFwiLi9tYWlsLnBocFwiLFxyXG5cdFx0XHRcdGRhdGE6ICQoXCIuZm9ybXNcIikuc2VyaWFsaXplKCksXHJcblx0XHRcdFx0c3VjY2VzczogZnVuY3Rpb24gc3VjY2VzcyhkYXRhKSB7XHJcblx0XHRcdFx0XHQkKCcjc2VuZCcpLm1vZGFsKFwic2hvd1wiKTtcclxuXHRcdFx0XHRcdCQoXCIuZm9ybXNcIikudHJpZ2dlcihcInJlc2V0XCIpO1xyXG5cdFx0XHRcdH1cclxuXHRcdFx0fSk7XHJcblx0XHR9XHJcblx0fSk7XHJcblx0Ly9mb3JtIHZhbGlkYXRlXHJcblxyXG5cdC8vZm9ybSBzZW5kLW1haWxcclxuXHQkKFwiLmZvcm1cIikuc3VibWl0KGZ1bmN0aW9uKCkge1xyXG5cdFx0JC5hamF4KHtcclxuXHRcdFx0dHlwZTogXCJQT1NUXCIsXHJcblx0XHRcdHVybDogXCIuL21haWwucGhwXCIsXHJcblx0XHRcdGRhdGE6ICQodGhpcykuc2VyaWFsaXplKClcclxuXHRcdH0pLmRvbmUoZnVuY3Rpb24oKSB7XHJcblx0XHRcdCQoXCIjbXlNb2RhbC0xLCAjbXlNb2RhbC0yLCAjbXlNb2RhbC0zXCIpLm1vZGFsKFwiaGlkZVwiKTtcclxuXHRcdFx0JCgnI3NlbmQnKS5tb2RhbChcInNob3dcIik7XHJcblx0XHRcdHNldFRpbWVvdXQoZnVuY3Rpb24oKSB7XHJcblx0XHRcdFx0JChcIi5mb3JtXCIpLnRyaWdnZXIoXCJyZXNldFwiKTtcclxuXHRcdFx0XHQkKCcjc2VuZCcpLm1vZGFsKFwiaGlkZVwiKTtcclxuXHRcdFx0fSwgMjAwMCk7XHJcblx0XHR9KTtcclxuXHRcdHJldHVybiBmYWxzZTtcclxuXHR9KTtcclxuXHQvL2Zvcm0gc2VuZC1tYWlsXHJcblxyXG5cdC8vaW5wdXQgYWRkaXRpb24gcHJpY2VzXHJcblxyXG5cdCQoXCJpbnB1dFtkYXRhLW51bWJlcj0nMSddXCIpLmtleXVwKGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgJG51bSwgJHByaXNlLCBzdW1tLCAkcG9wLCAkdGhpcztcclxuXHRcdCR0aGlzID0gJChcImlucHV0W2RhdGEtbnVtYmVyPScxJ11cIik7XHJcblx0XHQkbnVtID0gJHRoaXMudmFsKCk7XHJcblx0XHQkcHJpc2UgPSAxMDA7XHJcblx0XHRzdW1tID0gJG51bSAqICRwcmlzZTtcclxuXHRcdFx0JHBvcCA9ICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXItMVwiXScpO1xyXG5cdFx0XHQkcG9wLmF0dHIoXCJkYXRhLWNvbnRlbnRcIiwgc3VtbSArICcgJCcpO1xyXG5cdFx0XHQkcG9wLnBvcG92ZXIoXCJzaG93XCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCRwb3AucG9wb3ZlcihcImhpZGVcIik7XHJcblx0XHRcdH0sIDUwMDApO1xyXG5cdH0pO1xyXG5cclxuXHRcdCQoXCJpbnB1dFtkYXRhLW51bWJlcj0nMiddXCIpLmtleXVwKGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgJG51bSwgJHByaXNlLCBzdW1tLCAkcG9wLCAkdGhpcztcclxuXHRcdCR0aGlzID0gJChcImlucHV0W2RhdGEtbnVtYmVyPScyJ11cIik7XHJcblx0XHQkbnVtID0gJHRoaXMudmFsKCk7XHJcblx0XHQkcHJpc2UgPSAxMDA7XHJcblx0XHRzdW1tID0gJG51bSAqICRwcmlzZTtcclxuXHRcdFx0JHBvcCA9ICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXItMlwiXScpO1xyXG5cdFx0XHQkcG9wLmF0dHIoXCJkYXRhLWNvbnRlbnRcIiwgc3VtbSArICcgJCcpO1xyXG5cdFx0XHQkcG9wLnBvcG92ZXIoXCJzaG93XCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCRwb3AucG9wb3ZlcihcImhpZGVcIik7XHJcblx0XHRcdH0sIDUwMDApO1xyXG5cdH0pO1xyXG5cclxuXHQkKFwiaW5wdXRbZGF0YS1udW1iZXI9JzMnXVwiKS5rZXl1cChmdW5jdGlvbigpe1xyXG5cdFx0dmFyICRudW0sICRwcmlzZSwgc3VtbSwgJHBvcCwgJHRoaXM7XHJcblx0XHQkdGhpcyA9ICQoXCJpbnB1dFtkYXRhLW51bWJlcj0nMyddXCIpO1xyXG5cdFx0JG51bSA9ICR0aGlzLnZhbCgpO1xyXG5cdFx0JHByaXNlID0gOTA7XHJcblx0XHRzdW1tID0gJG51bSAqICRwcmlzZTtcclxuXHRcdFx0JHBvcCA9ICQoJ1tkYXRhLXRvZ2dsZT1cInBvcG92ZXItM1wiXScpO1xyXG5cdFx0XHQkcG9wLmF0dHIoXCJkYXRhLWNvbnRlbnRcIiwgc3VtbSArICcgJCcpO1xyXG5cdFx0XHQkcG9wLnBvcG92ZXIoXCJzaG93XCIpO1xyXG5cdFx0XHRzZXRUaW1lb3V0KGZ1bmN0aW9uKCkge1xyXG5cdFx0XHRcdCRwb3AucG9wb3ZlcihcImhpZGVcIik7XHJcblx0XHRcdH0sIDUwMDApO1xyXG5cdH0pO1xyXG5cclxuXHQvL2lucHV0IGFkZGl0aW9uIHByaWNlc1xyXG5cclxuXHQvL21lbnUtc2Nyb2xsXHJcblx0JChcIiNteU5hdmJhciB1bCBsaSBhXCIpLm1QYWdlU2Nyb2xsMmlkKHtcclxuXHRcdHBhZ2VFbmRTbW9vdGhTY3JvbGw6IHRydWUsXHJcblx0XHRvZmZzZXQ6IDYwXHJcblx0fSk7XHJcblxyXG5cdCQoXCIubWFpbCBhXCIpLm1QYWdlU2Nyb2xsMmlkKHtcclxuXHRcdHBhZ2VFbmRTbW9vdGhTY3JvbGw6IHRydWUsXHJcblx0XHRvZmZzZXQ6IDcwXHJcblx0fSk7XHJcblx0Ly9tZW51LXNjcm9sbFxyXG5cclxuXHQvL21lbnUtYWN0aXZlLCBob3ZlclxyXG5cdFx0dmFyICROYXZCYXIgPSAkKFwiI215TmF2YmFyIHVsIGxpXCIpO1xyXG5cdFx0XHQvL2FjdGl2ZVxyXG5cdFx0JE5hdkJhci5jbGljayhmdW5jdGlvbigpIHtcclxuXHRcdFx0JE5hdkJhci5yZW1vdmVDbGFzcygnYWN0aXZlJyk7XHJcblx0XHRcdCQodGhpcykuYWRkQ2xhc3MoJ2FjdGl2ZScpO1xyXG5cdFx0fSlcclxuXHJcblx0XHRcdC8vaG92ZXJcclxuXHRcdC8vICROYXZCYXIubW91c2VvdmVyKGZ1bmN0aW9uKCl7XHJcblx0XHQvLyBcdCROYXZCYXIucmVtb3ZlQ2xhc3MoJ2FuaW1hdGVkIGZsaXBJblknKTtcclxuXHRcdC8vIFx0JCh0aGlzKS5hZGRDbGFzcygnYW5pbWF0ZWQgZmxpcEluWScpO1xyXG5cdFx0Ly8gfSk7XHJcblx0Ly9tZW51LWFjdGl2ZSwgaG92ZXJcclxuXHJcblxyXG59KGpRdWVyeSkpOyIsInZhciBIUCA9IHtcclxuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XHJcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhQOyJdfQ==
