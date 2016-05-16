(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
"use strict";

var _helpers = require("./helpers");

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

  // When DOM is ready
  $(function () {
    example(_helpers2.default.random(10, 20));
  });

  $(".toggle-mnu").click(function () {
    $(this).toggleClass("on");
    $(".header-menu").slideToggle();
    return false;
  });

  function example(n) {
    console.log("Hello in ES6... I am " + n + " - random number between 10 and 20");
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJqcy9oZWxwZXJzLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7QUNBQTs7Ozs7O0FBRUEsQ0FBQyxVQUFVLENBQVYsRUFBYTs7O0FBR1osSUFBRSxZQUFZO0FBQ1osWUFBUSxrQkFBRyxNQUFILENBQVUsRUFBVixFQUFjLEVBQWQsQ0FBUixFQURZO0dBQVosQ0FBRixDQUhZOztBQU9aLElBQUUsYUFBRixFQUFpQixLQUFqQixDQUF1QixZQUFXO0FBQzlCLE1BQUUsSUFBRixFQUFRLFdBQVIsQ0FBb0IsSUFBcEIsRUFEOEI7QUFFOUIsTUFBRSxjQUFGLEVBQWtCLFdBQWxCLEdBRjhCO0FBR2hDLFdBQU8sS0FBUCxDQUhnQztHQUFYLENBQXZCLENBUFk7O0FBYVosV0FBUyxPQUFULENBQWlCLENBQWpCLEVBQW9CO0FBQ2xCLFlBQVEsR0FBUiwyQkFBb0Msd0NBQXBDLEVBRGtCO0dBQXBCO0NBYkQsRUFpQkMsTUFqQkQsQ0FBRDs7Ozs7Ozs7QUNGQSxJQUFJLEtBQUs7QUFDUCxVQUFRLGdCQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CO0FBQ3pCLFdBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLE1BQWlCLE1BQU0sR0FBTixHQUFZLENBQVosQ0FBakIsQ0FBWCxHQUE4QyxHQUE5QyxDQURrQjtHQUFuQjtDQUROOztrQkFNVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSFAgZnJvbSAnLi9oZWxwZXJzJztcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgLy8gV2hlbiBET00gaXMgcmVhZHlcbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgZXhhbXBsZShIUC5yYW5kb20oMTAsIDIwKSk7XG4gIH0pO1xuXG4gICQoXCIudG9nZ2xlLW1udVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICQodGhpcykudG9nZ2xlQ2xhc3MoXCJvblwiKTtcbiAgICAgICQoXCIuaGVhZGVyLW1lbnVcIikuc2xpZGVUb2dnbGUoKTtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIGZ1bmN0aW9uIGV4YW1wbGUobikge1xuICAgIGNvbnNvbGUubG9nKGBIZWxsbyBpbiBFUzYuLi4gSSBhbSAke259IC0gcmFuZG9tIG51bWJlciBiZXR3ZWVuIDEwIGFuZCAyMGApO1xuICB9XG5cbn0oalF1ZXJ5KSk7IiwidmFyIEhQID0ge1xuICByYW5kb206IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gKyAxKSkgKyBtaW47XG4gIH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgSFA7Il19
