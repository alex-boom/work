(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

  // When DOM is ready
  $(function () {
    example(_helpers2.default.random(10, 20));
  });

  /**
   * Just an example function
   *   DELETE IT
   * @param  {Number} n - random number between 10 and 20
   */
  function example(n) {
    console.log('Hello in ES6... I am ' + n + ' - random number between 10 and 20');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqc1xcYXBwLmpzIiwianNcXGhlbHBlcnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7Ozs7QUFFQSxDQUFDLFVBQVUsQ0FBVixFQUFhOzs7QUFHWixJQUFFLFlBQVk7QUFDWixZQUFRLGtCQUFHLE1BQUgsQ0FBVSxFQUFWLEVBQWMsRUFBZCxDQUFSLEVBRFk7R0FBWixDQUFGOzs7Ozs7O0FBSFksV0FZSCxPQUFULENBQWlCLENBQWpCLEVBQW9CO0FBQ2xCLFlBQVEsR0FBUiwyQkFBb0Msd0NBQXBDLEVBRGtCO0dBQXBCO0NBWkQsRUFnQkMsTUFoQkQsQ0FBRDs7Ozs7Ozs7QUNGQSxJQUFJLEtBQUs7QUFDUCxVQUFRLGdCQUFTLEdBQVQsRUFBYyxHQUFkLEVBQW1CO0FBQ3pCLFdBQU8sS0FBSyxLQUFMLENBQVcsS0FBSyxNQUFMLE1BQWlCLE1BQU0sR0FBTixHQUFZLENBQVosQ0FBakIsQ0FBWCxHQUE4QyxHQUE5QyxDQURrQjtHQUFuQjtDQUROOztrQkFNVyIsImZpbGUiOiJnZW5lcmF0ZWQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGUodCxuLHIpe2Z1bmN0aW9uIHMobyx1KXtpZighbltvXSl7aWYoIXRbb10pe3ZhciBhPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7aWYoIXUmJmEpcmV0dXJuIGEobywhMCk7aWYoaSlyZXR1cm4gaShvLCEwKTt2YXIgZj1uZXcgRXJyb3IoXCJDYW5ub3QgZmluZCBtb2R1bGUgJ1wiK28rXCInXCIpO3Rocm93IGYuY29kZT1cIk1PRFVMRV9OT1RfRk9VTkRcIixmfXZhciBsPW5bb109e2V4cG9ydHM6e319O3Rbb11bMF0uY2FsbChsLmV4cG9ydHMsZnVuY3Rpb24oZSl7dmFyIG49dFtvXVsxXVtlXTtyZXR1cm4gcyhuP246ZSl9LGwsbC5leHBvcnRzLGUsdCxuLHIpfXJldHVybiBuW29dLmV4cG9ydHN9dmFyIGk9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtmb3IodmFyIG89MDtvPHIubGVuZ3RoO28rKylzKHJbb10pO3JldHVybiBzfSkiLCJpbXBvcnQgSFAgZnJvbSAnLi9oZWxwZXJzJztcblxuKGZ1bmN0aW9uICgkKSB7XG5cbiAgLy8gV2hlbiBET00gaXMgcmVhZHlcbiAgJChmdW5jdGlvbiAoKSB7XG4gICAgZXhhbXBsZShIUC5yYW5kb20oMTAsIDIwKSk7XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBKdXN0IGFuIGV4YW1wbGUgZnVuY3Rpb25cbiAgICogICBERUxFVEUgSVRcbiAgICogQHBhcmFtICB7TnVtYmVyfSBuIC0gcmFuZG9tIG51bWJlciBiZXR3ZWVuIDEwIGFuZCAyMFxuICAgKi9cbiAgZnVuY3Rpb24gZXhhbXBsZShuKSB7XG4gICAgY29uc29sZS5sb2coYEhlbGxvIGluIEVTNi4uLiBJIGFtICR7bn0gLSByYW5kb20gbnVtYmVyIGJldHdlZW4gMTAgYW5kIDIwYCk7XG4gIH1cblxufShqUXVlcnkpKTsiLCJ2YXIgSFAgPSB7XG4gIHJhbmRvbTogZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIUDsiXX0=
