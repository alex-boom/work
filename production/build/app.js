(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

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

	$(function () {
		$('.portfolio-container').mixItUp();
	});

	$("#callback-form").validate({

		rules: {
			email: { required: true,
				email: true
			},

			userName: { required: true,
				minlength: [6]
			},
			textarea: { required: true,
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

		submitHandler: function submitHandler() {
			$.ajax({
				type: "POST",
				url: "./mail.php",
				data: $("#callback-form").serialize(),
				success: function success(data) {
					$('.message-send').dialog('open');;
				}
			});
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
	$('img.img-svg').each(function () {
		var $img = $(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		$.get(imgURL, function (data) {
			// Get the SVG tag, ignore the rest
			var $svg = $(data).find('svg');

			// Add replaced image's ID to the new SVG
			if (typeof imgID !== 'undefined') {
				$svg = $svg.attr('id', imgID);
			}
			// Add replaced image's classes to the new SVG
			if (typeof imgClass !== 'undefined') {
				$svg = $svg.attr('class', imgClass + ' replaced-svg');
			}

			// Remove any invalid XML tags as per http://validator.w3.org
			$svg = $svg.removeAttr('xmlns:a');

			// Check if the viewport is set, if the viewport is not set the SVG wont't scale.
			if (!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
				$svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
			}

			// Replace image with new SVG
			$img.replaceWith($svg);
		}, 'xml');
	});
})(jQuery);

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJzcmNcXGpzXFxhcHAuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOztBQUVDLFdBQVUsQ0FBVixFQUFhOztBQUViLEdBQUUsY0FBRixFQUFrQixjQUFsQixDQUFpQztBQUNoQyxTQUFPLElBRHlCO0FBRWhDLFFBQU0sR0FGMEI7QUFHaEMsY0FBWSxFQUhvQjtBQUloQyxRQUFNO0FBQ0wsYUFBVSxDQUFDLFNBQUQ7QUFETDtBQUowQixFQUFqQzs7QUFTQSxHQUFFLGVBQUYsRUFBbUIsY0FBbkIsQ0FBa0M7QUFDaEMsU0FBTyxJQUR5QjtBQUVoQyxRQUFNLEdBRjBCO0FBR2hDLGNBQVksRUFIb0I7QUFJaEMsUUFBTTtBQUNMLGFBQVUsQ0FBQyxTQUFEO0FBREw7QUFKMEIsRUFBbEM7O0FBU0EsR0FBRSxlQUFGLEVBQW1CLGNBQW5CLENBQWtDO0FBQ2hDLFNBQU8sSUFEeUI7QUFFaEMsUUFBTSxHQUYwQjtBQUdoQyxjQUFZLEVBSG9CO0FBSWhDLFFBQU07QUFDTCxhQUFVLENBQUMsU0FBRDtBQURMO0FBSjBCLEVBQWxDOztBQVNBLEdBQUUsZ0JBQUYsRUFBb0IsY0FBcEIsQ0FBbUM7QUFDakMsU0FBTyxJQUQwQjtBQUVqQyxRQUFNLEdBRjJCO0FBR2pDLGNBQVksRUFIcUI7QUFJakMsUUFBTTtBQUNMLGFBQVUsQ0FBQyxTQUFEO0FBREw7QUFKMkIsRUFBbkM7O0FBU0EsR0FBRSxZQUFVO0FBQ1gsSUFBRSxzQkFBRixFQUEwQixPQUExQjtBQUNBLEVBRkQ7O0FBSUEsR0FBRSxnQkFBRixFQUFvQixRQUFwQixDQUE2Qjs7QUFFNUIsU0FBTTtBQUNMLFVBQU8sRUFBQyxVQUFVLElBQVg7QUFDSCxXQUFPO0FBREosSUFERjs7QUFLTCxhQUFVLEVBQUMsVUFBVSxJQUFYO0FBQ0osZUFBVyxDQUFDLENBQUQ7QUFEUCxJQUxMO0FBUUwsYUFBVSxFQUFDLFVBQVUsSUFBWDtBQUNKLGVBQVcsQ0FBQyxDQUFEO0FBRFA7QUFSTCxHQUZzQjs7QUFlNUIsWUFBVTtBQUNULFVBQU87QUFDTixjQUFVLGVBREo7QUFFTixXQUFPO0FBRkQsSUFERTtBQUtULGFBQVU7QUFDVCxjQUFVLGFBREQ7QUFFVCxlQUFXO0FBRkYsSUFMRDtBQVNULGFBQVU7QUFDVCxjQUFVLGlCQUREO0FBRVQsZUFBVztBQUZGO0FBVEQsR0Fma0I7O0FBOEI1QixpQkFBZSx5QkFBVztBQUN6QixLQUFFLElBQUYsQ0FBTztBQUNOLFVBQU0sTUFEQTtBQUVOLFNBQUssWUFGQztBQUdOLFVBQU0sRUFBRSxnQkFBRixFQUFvQixTQUFwQixFQUhBO0FBSU4sYUFBUyxpQkFBUyxJQUFULEVBQWU7QUFDdkIsT0FBRSxlQUFGLEVBQW1CLE1BQW5CLENBQTBCLE1BQTFCLEVBQWtDO0FBQ2pDO0FBTkksSUFBUDtBQVdBO0FBMUMyQixFQUE3Qjs7QUE2Q0EsR0FBRSxlQUFGLEVBQW1CLE1BQW5CLENBQTBCO0FBQ3pCLFNBQU8sSUFEa0I7QUFFekIsWUFBVSxLQUZlO0FBR3pCLFFBQU0sV0FIbUI7QUFJekIsUUFBTTtBQUNKLFVBQU8sSUFESDtBQUVKLFdBQVE7QUFGSjtBQUptQixFQUExQjs7QUFXQztBQUNELEdBQUUsYUFBRixFQUFpQixJQUFqQixDQUFzQixZQUFVO0FBQy9CLE1BQUksT0FBTyxFQUFFLElBQUYsQ0FBWDtBQUNBLE1BQUksUUFBUSxLQUFLLElBQUwsQ0FBVSxJQUFWLENBQVo7QUFDQSxNQUFJLFdBQVcsS0FBSyxJQUFMLENBQVUsT0FBVixDQUFmO0FBQ0EsTUFBSSxTQUFTLEtBQUssSUFBTCxDQUFVLEtBQVYsQ0FBYjs7QUFFQSxJQUFFLEdBQUYsQ0FBTSxNQUFOLEVBQWMsVUFBUyxJQUFULEVBQWU7QUFDM0I7QUFDQSxPQUFJLE9BQU8sRUFBRSxJQUFGLEVBQVEsSUFBUixDQUFhLEtBQWIsQ0FBWDs7QUFFQTtBQUNBLE9BQUcsT0FBTyxLQUFQLEtBQWlCLFdBQXBCLEVBQWlDO0FBQ2hDLFdBQU8sS0FBSyxJQUFMLENBQVUsSUFBVixFQUFnQixLQUFoQixDQUFQO0FBQ0E7QUFDRDtBQUNBLE9BQUcsT0FBTyxRQUFQLEtBQW9CLFdBQXZCLEVBQW9DO0FBQ25DLFdBQU8sS0FBSyxJQUFMLENBQVUsT0FBVixFQUFtQixXQUFTLGVBQTVCLENBQVA7QUFDQTs7QUFFRDtBQUNBLFVBQU8sS0FBSyxVQUFMLENBQWdCLFNBQWhCLENBQVA7O0FBRUE7QUFDQSxPQUFHLENBQUMsS0FBSyxJQUFMLENBQVUsU0FBVixDQUFELElBQXlCLEtBQUssSUFBTCxDQUFVLFFBQVYsQ0FBekIsSUFBZ0QsS0FBSyxJQUFMLENBQVUsT0FBVixDQUFuRCxFQUF1RTtBQUN0RSxTQUFLLElBQUwsQ0FBVSxTQUFWLEVBQXFCLFNBQVMsS0FBSyxJQUFMLENBQVUsUUFBVixDQUFULEdBQStCLEdBQS9CLEdBQXFDLEtBQUssSUFBTCxDQUFVLE9BQVYsQ0FBMUQ7QUFDQTs7QUFFRDtBQUNBLFFBQUssV0FBTCxDQUFpQixJQUFqQjtBQUVBLEdBeEJGLEVBd0JJLEtBeEJKO0FBeUJBLEVBL0JEO0FBaUNBLENBcElBLEVBb0lDLE1BcElELENBQUQiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiLy8gaW1wb3J0IEhQIGZyb20gJy4vaGVscGVycyc7XHJcblxyXG4oZnVuY3Rpb24gKCQpIHtcclxuXHJcblx0JCgnI2NpcmNsZS1ibHVlJykuY2lyY2xlUHJvZ3Jlc3Moe1xyXG5cdFx0dmFsdWU6IDAuOTAsXHJcblx0XHRzaXplOiAxNjAsXHJcblx0XHRzdGFydEFuZ2xlOiAxMSxcclxuXHRcdGZpbGw6IHtcclxuXHRcdFx0Z3JhZGllbnQ6IFtcIiMzMGJhZTdcIl1cclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0JCgnI2NpcmNsZS1waW5jaycpLmNpcmNsZVByb2dyZXNzKHtcclxuXHRcdFx0dmFsdWU6IDAuNzUsXHJcblx0XHRcdHNpemU6IDE2MCxcclxuXHRcdFx0c3RhcnRBbmdsZTogMTEsXHJcblx0XHRcdGZpbGw6IHtcclxuXHRcdFx0XHRncmFkaWVudDogW1wiI2Q3NDY4MFwiXVxyXG5cdFx0XHR9XHJcblx0fSk7XHJcblxyXG5cdCQoJyNjaXJjbGUtZ3JlZW4nKS5jaXJjbGVQcm9ncmVzcyh7XHJcblx0XHRcdHZhbHVlOiAwLjcwLFxyXG5cdFx0XHRzaXplOiAxNjAsXHJcblx0XHRcdHN0YXJ0QW5nbGU6IDExLFxyXG5cdFx0XHRmaWxsOiB7XHJcblx0XHRcdFx0Z3JhZGllbnQ6IFtcIiMxNWM3YThcIl1cclxuXHRcdFx0fVxyXG5cdH0pO1xyXG5cclxuXHQkKCcjY2lyY2xlLW9yYW5nZScpLmNpcmNsZVByb2dyZXNzKHtcclxuXHRcdFx0dmFsdWU6IDAuODUsXHJcblx0XHRcdHNpemU6IDE2MCxcclxuXHRcdFx0c3RhcnRBbmdsZTogMTEsXHJcblx0XHRcdGZpbGw6IHtcclxuXHRcdFx0XHRncmFkaWVudDogW1wiI2ViN2Q0YlwiXVxyXG5cdFx0XHR9XHJcblx0fSk7XHJcblxyXG5cdCQoZnVuY3Rpb24oKXtcclxuXHRcdCQoJy5wb3J0Zm9saW8tY29udGFpbmVyJykubWl4SXRVcCgpO1xyXG5cdH0pO1xyXG5cclxuXHQkKFwiI2NhbGxiYWNrLWZvcm1cIikudmFsaWRhdGUoe1xyXG5cclxuXHRcdHJ1bGVzOntcclxuXHRcdFx0ZW1haWw6IHtyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRlbWFpbDogdHJ1ZVxyXG5cdFx0XHR9LFxyXG5cclxuXHRcdFx0dXNlck5hbWU6IHtyZXF1aXJlZDogdHJ1ZSxcclxuXHRcdFx0XHRcdFx0XHRcdCBtaW5sZW5ndGg6IFs2XVxyXG5cdFx0XHR9LFxyXG5cdFx0XHR0ZXh0YXJlYToge3JlcXVpcmVkOiB0cnVlLFxyXG5cdFx0XHRcdFx0XHRcdFx0XHRtaW5sZW5ndGg6IFs2XVxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cdFx0XHJcblx0XHRtZXNzYWdlczoge1xyXG5cdFx0XHRlbWFpbDoge1xyXG5cdFx0XHRcdHJlcXVpcmVkOiBcItCS0LLQtdC00LjRgtC1IGVtYWlsXCIsXHJcblx0XHRcdFx0ZW1haWw6IFwi0J/QvtC70LUg0LTQvtC70LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDRgdC40LzQstC+0LsgQCBcIlxyXG5cdFx0XHR9LFxyXG5cdFx0XHR1c2VyTmFtZToge1xyXG5cdFx0XHRcdHJlcXVpcmVkOiBcItCS0LLQtdC00LjRgtC1INC40LzRj1wiLFxyXG5cdFx0XHRcdG1pbmxlbmd0aDogXCLQn9C+0LvQtSDQtNC+0LbQvdC+INGB0L7QtNC10YDQttCw0YLRjCDQvdC1INC80LXQvdC10LUgNiDRgdC40LzQstC+0LvQvtCyXCJcclxuXHRcdFx0fSxcclxuXHRcdFx0dGV4dGFyZWE6IHtcclxuXHRcdFx0XHRyZXF1aXJlZDogXCLQndCw0L/QuNGI0LjRgtC1INC+INGB0LXQsdC1XCIsXHJcblx0XHRcdFx0bWlubGVuZ3RoOiBcItCf0L7Qu9C1INC00L7QttC90L4g0YHQvtC00LXRgNC20LDRgtGMINC90LUg0LzQtdC90LXQtSA2INGB0LjQvNCy0L7Qu9C+0LJcIlxyXG5cdFx0XHR9XHJcblx0XHR9LFxyXG5cclxuXHRcdHN1Ym1pdEhhbmRsZXI6IGZ1bmN0aW9uKCkge1xyXG5cdFx0XHQkLmFqYXgoe1xyXG5cdFx0XHRcdHR5cGU6IFwiUE9TVFwiLFxyXG5cdFx0XHRcdHVybDogXCIuL21haWwucGhwXCIsXHJcblx0XHRcdFx0ZGF0YTogJChcIiNjYWxsYmFjay1mb3JtXCIpLnNlcmlhbGl6ZSgpLFxyXG5cdFx0XHRcdHN1Y2Nlc3M6IGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHRcdCQoJy5tZXNzYWdlLXNlbmQnKS5kaWFsb2coJ29wZW4nKTs7XHJcblx0XHRcdFx0XHR9LFxyXG5cdFx0XHRcdC8vIGVycm9yOiBmdW5jdGlvbihkYXRhKSB7XHJcblx0XHRcdFx0Ly8gXHQkKFwiLm1lc3NhZ2UtZXJyb3JcIikuaHRtbChcIjxoMj5FcnJvciE8L2gyPlwiKTtcclxuXHRcdFx0XHQvLyBcdH1cclxuXHRcdFx0fSlcclxuXHRcdH1cclxuXHR9KTtcclxuXHJcblx0JCgnLm1lc3NhZ2Utc2VuZCcpLmRpYWxvZyh7XHJcblx0XHRtb2RhbDogdHJ1ZSxcclxuXHRcdGF1dG9PcGVuOiBmYWxzZSxcclxuXHRcdHNob3c6ICdzbGlkZURvd24nLFxyXG5cdFx0aGlkZToge1xyXG5cdFx0XHRcdGRlbGF5OiAxMDAwLFxyXG5cdFx0XHRcdGVhc2luZzogJ2Vhc2VJblF1YWQnXHJcblx0XHR9XHJcblx0fSk7XHJcblxyXG5cclxuXHRcdC8vUmVwbGFjZSBhbGwgU1ZHIGltYWdlcyB3aXRoIGlubGluZSBTVkcuXHJcblx0JCgnaW1nLmltZy1zdmcnKS5lYWNoKGZ1bmN0aW9uKCl7XHJcblx0XHR2YXIgJGltZyA9ICQodGhpcyk7XHJcblx0XHR2YXIgaW1nSUQgPSAkaW1nLmF0dHIoJ2lkJyk7XHJcblx0XHR2YXIgaW1nQ2xhc3MgPSAkaW1nLmF0dHIoJ2NsYXNzJyk7XHJcblx0XHR2YXIgaW1nVVJMID0gJGltZy5hdHRyKCdzcmMnKTtcclxuXHJcblx0XHQkLmdldChpbWdVUkwsIGZ1bmN0aW9uKGRhdGEpIHtcclxuXHRcdFx0XHQvLyBHZXQgdGhlIFNWRyB0YWcsIGlnbm9yZSB0aGUgcmVzdFxyXG5cdFx0XHRcdHZhciAkc3ZnID0gJChkYXRhKS5maW5kKCdzdmcnKTtcclxuXHJcblx0XHRcdFx0Ly8gQWRkIHJlcGxhY2VkIGltYWdlJ3MgSUQgdG8gdGhlIG5ldyBTVkdcclxuXHRcdFx0XHRpZih0eXBlb2YgaW1nSUQgIT09ICd1bmRlZmluZWQnKSB7XHJcblx0XHRcdFx0XHQkc3ZnID0gJHN2Zy5hdHRyKCdpZCcsIGltZ0lEKTtcclxuXHRcdFx0XHR9XHJcblx0XHRcdFx0Ly8gQWRkIHJlcGxhY2VkIGltYWdlJ3MgY2xhc3NlcyB0byB0aGUgbmV3IFNWR1xyXG5cdFx0XHRcdGlmKHR5cGVvZiBpbWdDbGFzcyAhPT0gJ3VuZGVmaW5lZCcpIHtcclxuXHRcdFx0XHRcdCRzdmcgPSAkc3ZnLmF0dHIoJ2NsYXNzJywgaW1nQ2xhc3MrJyByZXBsYWNlZC1zdmcnKTtcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIFJlbW92ZSBhbnkgaW52YWxpZCBYTUwgdGFncyBhcyBwZXIgaHR0cDovL3ZhbGlkYXRvci53My5vcmdcclxuXHRcdFx0XHQkc3ZnID0gJHN2Zy5yZW1vdmVBdHRyKCd4bWxuczphJyk7XHJcblxyXG5cdFx0XHRcdC8vIENoZWNrIGlmIHRoZSB2aWV3cG9ydCBpcyBzZXQsIGlmIHRoZSB2aWV3cG9ydCBpcyBub3Qgc2V0IHRoZSBTVkcgd29udCd0IHNjYWxlLlxyXG5cdFx0XHRcdGlmKCEkc3ZnLmF0dHIoJ3ZpZXdCb3gnKSAmJiAkc3ZnLmF0dHIoJ2hlaWdodCcpICYmICRzdmcuYXR0cignd2lkdGgnKSkge1xyXG5cdFx0XHRcdFx0JHN2Zy5hdHRyKCd2aWV3Qm94JywgJzAgMCAnICsgJHN2Zy5hdHRyKCdoZWlnaHQnKSArICcgJyArICRzdmcuYXR0cignd2lkdGgnKSlcclxuXHRcdFx0XHR9XHJcblxyXG5cdFx0XHRcdC8vIFJlcGxhY2UgaW1hZ2Ugd2l0aCBuZXcgU1ZHXHJcblx0XHRcdFx0JGltZy5yZXBsYWNlV2l0aCgkc3ZnKTtcclxuXHJcblx0XHRcdH0sICd4bWwnKTtcclxuXHR9KTtcclxuXHJcbn0oalF1ZXJ5KSk7Il19
