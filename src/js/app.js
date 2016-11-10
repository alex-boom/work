import HP from './helpers';

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
	$(".form").submit(function() {
		$.ajax({
			type: "POST",
			url: "./mail.php",
			data: $(this).serialize()
		}).done(function() {
			$("#myModal-1, #myModal-2, #myModal-3").modal("hide");
			$('#send').modal("show");
			setTimeout(function() {
				$(".form").trigger("reset");
				$('#send').modal("hide");
			}, 4000);
		});
		return false;
	});
	//form send-mail

	//input addition prices

	$("input[data-number='1']").keyup(function(){
		var $num, $prise, summ, $pop, $this;
		$this = $("input[data-number='1']");
		$num = $this.val();
		$prise = 100;
		summ = $num * $prise;
			$pop = $('[data-toggle="popover-1"]');
			$pop.attr("data-content", summ + ' $');
			$pop.popover("show");
			setTimeout(function() {
				$pop.popover("hide");
			}, 5000);
	});

		$("input[data-number='2']").keyup(function(){
		var $num, $prise, summ, $pop, $this;
		$this = $("input[data-number='2']");
		$num = $this.val();
		$prise = 100;
		summ = $num * $prise;
			$pop = $('[data-toggle="popover-2"]');
			$pop.attr("data-content", summ + ' $');
			$pop.popover("show");
			setTimeout(function() {
				$pop.popover("hide");
			}, 5000);
	});

	$("input[data-number='3']").keyup(function(){
		var $num, $prise, summ, $pop, $this;
		$this = $("input[data-number='3']");
		$num = $this.val();
		$prise = 90;
		summ = $num * $prise;
			$pop = $('[data-toggle="popover-3"]');
			$pop.attr("data-content", summ + ' $');
			$pop.popover("show");
			setTimeout(function() {
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
		$NavBar.click(function() {
			$NavBar.removeClass('choice');
			$(this).addClass('choice');
		})

			//hover
		// $NavBar.mouseover(function(){
		// 	$NavBar.removeClass('animated flipInY');
		// 	$(this).addClass('animated flipInY');
		// });
	//menu-active, hover

	//btn-up scroll
	$(".fa-angle-up").click(function(){
		$("html, body").animate({
			scrollTop : $("#wrapper").offset().top
			}, 900);
	});
	//btn-up scroll


}(jQuery));