// import HP from './helpers';

(function ($) {

	$('#circle-blue').circleProgress({
		value: 0.90,
		size: 160,
		startAngle: 11,
		fill: {
			gradient: ["#30bae7"]
		}
	});

	$('#circle-pinck').circleProgress({
			value: 0.75,
			size: 160,
			startAngle: 11,
			fill: {
				gradient: ["#d74680"]
			}
	});

	$('#circle-green').circleProgress({
			value: 0.70,
			size: 160,
			startAngle: 11,
			fill: {
				gradient: ["#15c7a8"]
			}
	});

	$('#circle-orange').circleProgress({
			value: 0.85,
			size: 160,
			startAngle: 11,
			fill: {
				gradient: ["#eb7d4b"]
			}
	});

	$(function(){
		$('.portfolio-container').mixItUp();
	});

	$("#callback-form").validate({

		rules:{
			email: {required: true,
							email: true
			},

			userName: {required: true,
								 minlength: [6]
			},
			textarea: {required: true,
									minlength: [6]
			}
		},
		
		messages: {
			email: {
				required: "Введите email",
				email: "Поле должно содержать символ @ "
			},
			userName: {
				required: "Введите имя",
				minlength: "Поле дожно содержать не менее 6 символов"
			},
			textarea: {
				required: "Напишите о себе",
				minlength: "Поле дожно содержать не менее 6 символов"
			}
		},

		submitHandler: function() {
			$.ajax({
				type: "POST",
				url: "./mail.php",
				data: $("#callback-form").serialize(),
				success: function(data) {
					$('.message-send').dialog('open');;
					},
				// error: function(data) {
				// 	$(".message-error").html("<h2>Error!</h2>");
				// 	}
			})
		}
	});

	$('.message-send').dialog({
		modal: true,
		autoOpen: false,
		show: 'slideDown',
		hide: {
				delay: 1000,
				easing: 'easeInQuad'
		}
	});


		//Replace all SVG images with inline SVG.
	$('img.img-svg').each(function(){
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function(data) {
				// Get the SVG tag, ignore the rest
				var $svg = $(data).find('svg');

				// Add replaced image's ID to the new SVG
				if(typeof imgID !== 'undefined') {
					$svg = $svg.attr('id', imgID);
				}
				// Add replaced image's classes to the new SVG
				if(typeof imgClass !== 'undefined') {
					$svg = $svg.attr('class', imgClass+' replaced-svg');
				}

				// Remove any invalid XML tags as per http://validator.w3.org
				$svg = $svg.removeAttr('xmlns:a');

				// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
				if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
					$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
				}

				// Replace image with new SVG
				$img.replaceWith($svg);

			}, 'xml');
	});

}(jQuery));