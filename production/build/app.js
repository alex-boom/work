(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _helpers = require('./helpers');

var _helpers2 = _interopRequireDefault(_helpers);

var _touchNav = require('./touch-nav');

var _touchNav2 = _interopRequireDefault(_touchNav);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

(function ($) {

		// When DOM is ready
		$(function () {
				initTouchNav();
		});

		$(".toggle-mnu").click(function () {
				$(this).toggleClass("on");
				$(".header-menu").slideToggle();
				return false;
		});

		function initTouchNav() {
				jQuery('.header-menu').each(function () {
						new _touchNav2.default({
								navBlock: this
						});
				});
		}
})(jQuery);

},{"./helpers":2,"./touch-nav":3}],2:[function(require,module,exports){
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

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

var _utility = require('./utility');

var _utility2 = _interopRequireDefault(_utility);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function TouchNav(opt) {
  this.options = {
    hoverClass: 'hover',
    menuItems: 'li',
    menuOpener: 'a',
    menuDrop: 'ul',
    navBlock: null
  };
  for (var p in opt) {
    if (opt.hasOwnProperty(p)) {
      this.options[p] = opt[p];
    }
  }
  this.init();
}
TouchNav.isActiveOn = function (elem) {
  return elem && elem.touchNavActive;
};
TouchNav.prototype = {
  init: function init() {
    if (typeof this.options.navBlock === 'string') {
      this.menu = document.getElementById(this.options.navBlock);
    } else if (_typeof(this.options.navBlock) === 'object') {
      this.menu = this.options.navBlock;
    }
    if (this.menu) {
      this.addEvents();
    }
  },
  addEvents: function addEvents() {
    // attach event handlers
    var self = this;
    var touchEvent = navigator.pointerEnabled && 'pointerdown' || navigator.msPointerEnabled && 'MSPointerDown' || this.isTouchDevice && 'touchstart';
    this.menuItems = _utility2.default.queryElementsBySelector(this.options.menuItems, this.menu);

    var initMenuItem = function initMenuItem(item) {
      var currentDrop = _utility2.default.queryElementsBySelector(self.options.menuDrop, item)[0],
          currentOpener = _utility2.default.queryElementsBySelector(self.options.menuOpener, item)[0];

      // only for touch input devices
      if (currentDrop && currentOpener && (self.isTouchDevice || self.isPointerDevice)) {
        _utility2.default.event.add(currentOpener, 'click', _utility2.default.bind(self.clickHandler, self));
        _utility2.default.event.add(currentOpener, 'mousedown', _utility2.default.bind(self.mousedownHandler, self));
        _utility2.default.event.add(currentOpener, touchEvent, function (e) {
          if (!self.isTouchPointerEvent(e)) {
            self.preventCurrentClick = false;
            return;
          }
          self.touchFlag = true;
          self.currentItem = item;
          self.currentLink = currentOpener;
          self.pressHandler.apply(self, arguments);
        });
      }
      // for desktop computers and touch devices
      jQuery(item).bind('mouseenter', function () {
        if (!self.touchFlag) {
          self.currentItem = item;
          self.mouseoverHandler();
        }
      });
      jQuery(item).bind('mouseleave', function () {
        if (!self.touchFlag) {
          self.currentItem = item;
          self.mouseoutHandler();
        }
      });
      item.touchNavActive = true;
    };

    // addd handlers for all menu items
    for (var i = 0; i < this.menuItems.length; i++) {
      initMenuItem(self.menuItems[i]);
    }

    // hide dropdowns when clicking outside navigation
    if (this.isTouchDevice || this.isPointerDevice) {
      _utility2.default.event.add(document.documentElement, 'mousedown', _utility2.default.bind(this.clickOutsideHandler, this));
      _utility2.default.event.add(document.documentElement, touchEvent, _utility2.default.bind(this.clickOutsideHandler, this));
    }
  },
  mousedownHandler: function mousedownHandler(e) {
    if (this.touchFlag) {
      e.preventDefault();
      this.touchFlag = false;
      this.preventCurrentClick = false;
    }
  },
  mouseoverHandler: function mouseoverHandler() {
    _utility2.default.addClass(this.currentItem, this.options.hoverClass);
    jQuery(this.currentItem).trigger('itemhover');
  },
  mouseoutHandler: function mouseoutHandler() {
    _utility2.default.removeClass(this.currentItem, this.options.hoverClass);
    jQuery(this.currentItem).trigger('itemleave');
  },
  hideActiveDropdown: function hideActiveDropdown() {
    for (var i = 0; i < this.menuItems.length; i++) {
      if (_utility2.default.hasClass(this.menuItems[i], this.options.hoverClass)) {
        _utility2.default.removeClass(this.menuItems[i], this.options.hoverClass);
        jQuery(this.menuItems[i]).trigger('itemleave');
      }
    }
    this.activeParent = null;
  },
  pressHandler: function pressHandler(e) {
    // hide previous drop (if active)
    if (this.currentItem !== this.activeParent) {
      if (this.activeParent && this.currentItem.parentNode === this.activeParent.parentNode) {
        _utility2.default.removeClass(this.activeParent, this.options.hoverClass);
      } else if (!this.isParent(this.activeParent, this.currentLink)) {
        this.hideActiveDropdown();
      }
    }
    // handle current drop
    this.activeParent = this.currentItem;
    if (_utility2.default.hasClass(this.currentItem, this.options.hoverClass)) {
      this.preventCurrentClick = false;
    } else {
      e.preventDefault();
      this.preventCurrentClick = true;
      _utility2.default.addClass(this.currentItem, this.options.hoverClass);
      jQuery(this.currentItem).trigger('itemhover');
    }
  },
  clickHandler: function clickHandler(e) {
    // prevent first click on link
    if (this.preventCurrentClick) {
      e.preventDefault();
    }
  },
  clickOutsideHandler: function clickOutsideHandler(event) {
    var e = event.changedTouches ? event.changedTouches[0] : event;
    if (this.activeParent && !this.isParent(this.menu, e.target)) {
      this.hideActiveDropdown();
      this.touchFlag = false;
    }
  },
  isParent: function isParent(parent, child) {
    while (child.parentNode) {
      if (child.parentNode == parent) {
        return true;
      }
      child = child.parentNode;
    }
    return false;
  },
  isTouchPointerEvent: function isTouchPointerEvent(e) {
    return e.type.indexOf('touch') > -1 || navigator.pointerEnabled && e.pointerType === 'touch' || navigator.msPointerEnabled && e.pointerType == e.MSPOINTER_TYPE_TOUCH;
  },
  isPointerDevice: function () {
    return !!(navigator.pointerEnabled || navigator.msPointerEnabled);
  }(),
  isTouchDevice: function () {
    return !!('ontouchstart' in window || window.DocumentTouch && document instanceof DocumentTouch);
  }()
};

exports.default = TouchNav;

},{"./utility":4}],4:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
var lib = {
  hasClass: function hasClass(el, cls) {
    return el && el.className ? el.className.match(new RegExp('(\\s|^)' + cls + '(\\s|$)')) : false;
  },
  addClass: function addClass(el, cls) {
    if (el && !this.hasClass(el, cls)) el.className += " " + cls;
  },
  removeClass: function removeClass(el, cls) {
    if (el && this.hasClass(el, cls)) {
      el.className = el.className.replace(new RegExp('(\\s|^)' + cls + '(\\s|$)'), ' ');
    }
  },
  extend: function extend(obj) {
    for (var i = 1; i < arguments.length; i++) {
      for (var p in arguments[i]) {
        if (arguments[i].hasOwnProperty(p)) {
          obj[p] = arguments[i][p];
        }
      }
    }
    return obj;
  },
  each: function each(obj, callback) {
    var property, len;
    if (typeof obj.length === 'number') {
      for (property = 0, len = obj.length; property < len; property++) {
        if (callback.call(obj[property], property, obj[property]) === false) {
          break;
        }
      }
    } else {
      for (property in obj) {
        if (obj.hasOwnProperty(property)) {
          if (callback.call(obj[property], property, obj[property]) === false) {
            break;
          }
        }
      }
    }
  },
  event: function () {
    var fixEvent = function fixEvent(e) {
      e = e || window.event;
      if (e.isFixed) return e;else e.isFixed = true;
      if (!e.target) e.target = e.srcElement;
      e.preventDefault = e.preventDefault || function () {
        this.returnValue = false;
      };
      e.stopPropagation = e.stopPropagation || function () {
        this.cancelBubble = true;
      };
      return e;
    };
    return {
      add: function add(elem, event, handler) {
        if (!elem.events) {
          elem.events = {};
          elem.handle = function (e) {
            var ret,
                handlers = elem.events[e.type];
            e = fixEvent(e);
            for (var i = 0, len = handlers.length; i < len; i++) {
              if (handlers[i]) {
                ret = handlers[i].call(elem, e);
                if (ret === false) {
                  e.preventDefault();
                  e.stopPropagation();
                }
              }
            }
          };
        }
        if (!elem.events[event]) {
          elem.events[event] = [];
          if (elem.addEventListener) elem.addEventListener(event, elem.handle, false);else if (elem.attachEvent) elem.attachEvent('on' + event, elem.handle);
        }
        elem.events[event].push(handler);
      },
      remove: function remove(elem, event, handler) {
        var handlers = elem.events[event];
        for (var i = handlers.length - 1; i >= 0; i--) {
          if (handlers[i] === handler) {
            handlers.splice(i, 1);
          }
        }
        if (!handlers.length) {
          delete elem.events[event];
          if (elem.removeEventListener) elem.removeEventListener(event, elem.handle, false);else if (elem.detachEvent) elem.detachEvent('on' + event, elem.handle);
        }
      }
    };
  }(),
  queryElementsBySelector: function queryElementsBySelector(selector, scope) {
    scope = scope || document;
    if (!selector) return [];
    if (selector === '>*') return scope.children;
    if (typeof document.querySelectorAll === 'function') {
      return scope.querySelectorAll(selector);
    }
    var selectors = selector.split(',');
    var resultList = [];
    for (var s = 0; s < selectors.length; s++) {
      var currentContext = [scope || document];
      var tokens = selectors[s].replace(/^\s+/, '').replace(/\s+$/, '').split(' ');
      for (var i = 0; i < tokens.length; i++) {
        token = tokens[i].replace(/^\s+/, '').replace(/\s+$/, '');
        if (token.indexOf('#') > -1) {
          var bits = token.split('#'),
              tagName = bits[0],
              id = bits[1];
          var element = document.getElementById(id);
          if (element && tagName && element.nodeName.toLowerCase() != tagName) {
            return [];
          }
          currentContext = element ? [element] : [];
          continue;
        }
        if (token.indexOf('.') > -1) {
          var bits = token.split('.'),
              tagName = bits[0] || '*',
              className = bits[1],
              found = [],
              foundCount = 0;
          for (var h = 0; h < currentContext.length; h++) {
            var elements;
            if (tagName == '*') {
              elements = currentContext[h].getElementsByTagName('*');
            } else {
              elements = currentContext[h].getElementsByTagName(tagName);
            }
            for (var j = 0; j < elements.length; j++) {
              found[foundCount++] = elements[j];
            }
          }
          currentContext = [];
          var currentContextIndex = 0;
          for (var k = 0; k < found.length; k++) {
            if (found[k].className && found[k].className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'))) {
              currentContext[currentContextIndex++] = found[k];
            }
          }
          continue;
        }
        if (token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
          var tagName = RegExp.$1 || '*',
              attrName = RegExp.$2,
              attrOperator = RegExp.$3,
              attrValue = RegExp.$4;
          if (attrName.toLowerCase() == 'for' && this.browser.msie && this.browser.version < 8) {
            attrName = 'htmlFor';
          }
          var found = [],
              foundCount = 0;
          for (var h = 0; h < currentContext.length; h++) {
            var elements;
            if (tagName == '*') {
              elements = currentContext[h].getElementsByTagName('*');
            } else {
              elements = currentContext[h].getElementsByTagName(tagName);
            }
            for (var j = 0; elements[j]; j++) {
              found[foundCount++] = elements[j];
            }
          }
          currentContext = [];
          var currentContextIndex = 0,
              checkFunction;
          switch (attrOperator) {
            case '=':
              checkFunction = function checkFunction(e) {
                return e.getAttribute(attrName) == attrValue;
              };break;
            case '~':
              checkFunction = function checkFunction(e) {
                return e.getAttribute(attrName).match(new RegExp('(\\s|^)' + attrValue + '(\\s|$)'));
              };break;
            case '|':
              checkFunction = function checkFunction(e) {
                return e.getAttribute(attrName).match(new RegExp('^' + attrValue + '-?'));
              };break;
            case '^':
              checkFunction = function checkFunction(e) {
                return e.getAttribute(attrName).indexOf(attrValue) == 0;
              };break;
            case '$':
              checkFunction = function checkFunction(e) {
                return e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length;
              };break;
            case '*':
              checkFunction = function checkFunction(e) {
                return e.getAttribute(attrName).indexOf(attrValue) > -1;
              };break;
            default:
              checkFunction = function checkFunction(e) {
                return e.getAttribute(attrName);
              };
          }
          currentContext = [];
          var currentContextIndex = 0;
          for (var k = 0; k < found.length; k++) {
            if (checkFunction(found[k])) {
              currentContext[currentContextIndex++] = found[k];
            }
          }
          continue;
        }
        tagName = token;
        var found = [],
            foundCount = 0;
        for (var h = 0; h < currentContext.length; h++) {
          var elements = currentContext[h].getElementsByTagName(tagName);
          for (var j = 0; j < elements.length; j++) {
            found[foundCount++] = elements[j];
          }
        }
        currentContext = found;
      }
      resultList = [].concat(resultList, currentContext);
    }
    return resultList;
  },
  trim: function trim(str) {
    return str.replace(/^\s+/, '').replace(/\s+$/, '');
  },
  bind: function bind(f, scope, forceArgs) {
    return function () {
      return f.apply(scope, typeof forceArgs !== 'undefined' ? [forceArgs] : arguments);
    };
  }
};

exports.default = lib;

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJqcy9oZWxwZXJzLmpzIiwianMvdG91Y2gtbmF2LmpzIiwianMvdXRpbGl0eS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsQ0FBQyxVQUFVLENBQVYsRUFBYTs7O0FBR2IsSUFBRSxZQUFZO0FBQ2IsbUJBRGE7R0FBWixDQUFGLENBSGE7O0FBT2IsSUFBRSxhQUFGLEVBQWlCLEtBQWpCLENBQXVCLFlBQVc7QUFDaEMsTUFBRSxJQUFGLEVBQVEsV0FBUixDQUFvQixJQUFwQixFQURnQztBQUVoQyxNQUFFLGNBQUYsRUFBa0IsV0FBbEIsR0FGZ0M7QUFHakMsV0FBTyxLQUFQLENBSGlDO0dBQVgsQ0FBdkIsQ0FQYTs7QUFhZCxXQUFTLFlBQVQsR0FBd0I7QUFDcEIsV0FBTyxjQUFQLEVBQXVCLElBQXZCLENBQTRCLFlBQVU7QUFDcEMsNkJBQWE7QUFDWCxrQkFBVSxJQUFWO09BREYsRUFEb0M7S0FBVixDQUE1QixDQURvQjtHQUF4QjtDQWJDLEVBb0JDLE1BcEJELENBQUQ7Ozs7Ozs7O0FDSEEsSUFBSSxLQUFLO0FBQ1AsVUFBUSxnQkFBUyxHQUFULEVBQWMsR0FBZCxFQUFtQjtBQUN6QixXQUFPLEtBQUssS0FBTCxDQUFXLEtBQUssTUFBTCxNQUFpQixNQUFNLEdBQU4sR0FBWSxDQUFaLENBQWpCLENBQVgsR0FBOEMsR0FBOUMsQ0FEa0I7R0FBbkI7Q0FETjs7a0JBTVc7Ozs7Ozs7Ozs7O0FDTmY7Ozs7OztBQUVBLFNBQVMsUUFBVCxDQUFrQixHQUFsQixFQUF1QjtBQUNyQixPQUFLLE9BQUwsR0FBZTtBQUNiLGdCQUFZLE9BQVo7QUFDQSxlQUFXLElBQVg7QUFDQSxnQkFBWSxHQUFaO0FBQ0EsY0FBVSxJQUFWO0FBQ0EsY0FBVSxJQUFWO0dBTEYsQ0FEcUI7QUFRckIsT0FBSSxJQUFJLENBQUosSUFBUyxH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QyxXQUFPLFlBQVc7QUFBQyxhQUFPLEVBQUUsS0FBRixDQUFRLEtBQVIsRUFBZSxPQUFPLFNBQVAsS0FBcUIsV0FBckIsR0FBbUMsQ0FBQyxTQUFELENBQW5DLEdBQWlELFNBQWpELENBQXRCLENBQUQ7S0FBWCxDQUQwQjtHQUE3QjtDQTFMSjs7a0JBK0xXIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBIUCBmcm9tICcuL2hlbHBlcnMnO1xuaW1wb3J0IFRvdWNoTmF2IGZyb20gJy4vdG91Y2gtbmF2JztcblxuKGZ1bmN0aW9uICgkKSB7XG5cblx0Ly8gV2hlbiBET00gaXMgcmVhZHlcblx0JChmdW5jdGlvbiAoKSB7XG5cdFx0aW5pdFRvdWNoTmF2KCk7XG5cdH0pO1xuXG5cdCQoXCIudG9nZ2xlLW1udVwiKS5jbGljayhmdW5jdGlvbigpIHtcblx0XHRcdCQodGhpcykudG9nZ2xlQ2xhc3MoXCJvblwiKTtcblx0XHRcdCQoXCIuaGVhZGVyLW1lbnVcIikuc2xpZGVUb2dnbGUoKTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH0pO1xuXG5mdW5jdGlvbiBpbml0VG91Y2hOYXYoKSB7XG4gICAgalF1ZXJ5KCcuaGVhZGVyLW1lbnUnKS5lYWNoKGZ1bmN0aW9uKCl7XG4gICAgICBuZXcgVG91Y2hOYXYoe1xuICAgICAgICBuYXZCbG9jazogdGhpc1xuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cbn0oalF1ZXJ5KSk7XG4iLCJ2YXIgSFAgPSB7XG4gIHJhbmRvbTogZnVuY3Rpb24obWluLCBtYXgpIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiArIDEpKSArIG1pbjtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBIUDsiLCJpbXBvcnQgbGliIGZyb20gJy4vdXRpbGl0eSc7XG5cbmZ1bmN0aW9uIFRvdWNoTmF2KG9wdCkge1xuICB0aGlzLm9wdGlvbnMgPSB7XG4gICAgaG92ZXJDbGFzczogJ2hvdmVyJyxcbiAgICBtZW51SXRlbXM6ICdsaScsXG4gICAgbWVudU9wZW5lcjogJ2EnLFxuICAgIG1lbnVEcm9wOiAndWwnLFxuICAgIG5hdkJsb2NrOiBudWxsXG4gIH07XG4gIGZvcih2YXIgcCBpbiBvcHQpIHtcbiAgICBpZihvcHQuaGFzT3duUHJvcGVydHkocCkpIHtcbiAgICAgIHRoaXMub3B0aW9uc1twXSA9IG9wdFtwXTtcbiAgICB9XG4gIH1cbiAgdGhpcy5pbml0KCk7XG59XG5Ub3VjaE5hdi5pc0FjdGl2ZU9uID0gZnVuY3Rpb24oZWxlbSkge1xuICByZXR1cm4gZWxlbSAmJiBlbGVtLnRvdWNoTmF2QWN0aXZlO1xufTtcblRvdWNoTmF2LnByb3RvdHlwZSA9IHtcbiAgaW5pdDogZnVuY3Rpb24oKSB7XG4gICAgaWYodHlwZW9mIHRoaXMub3B0aW9ucy5uYXZCbG9jayA9PT0gJ3N0cmluZycpIHtcbiAgICAgIHRoaXMubWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRoaXMub3B0aW9ucy5uYXZCbG9jayk7XG4gICAgfSBlbHNlIGlmKHR5cGVvZiB0aGlzLm9wdGlvbnMubmF2QmxvY2sgPT09ICdvYmplY3QnKSB7XG4gICAgICB0aGlzLm1lbnUgPSB0aGlzLm9wdGlvbnMubmF2QmxvY2s7XG4gICAgfVxuICAgIGlmKHRoaXMubWVudSkge1xuICAgICAgdGhpcy5hZGRFdmVudHMoKTtcbiAgICB9XG4gIH0sXG4gIGFkZEV2ZW50czogZnVuY3Rpb24oKSB7XG4gICAgLy8gYXR0YWNoIGV2ZW50IGhhbmRsZXJzXG4gICAgdmFyIHNlbGYgPSB0aGlzO1xuICAgIHZhciB0b3VjaEV2ZW50ID0gKG5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCAmJiAncG9pbnRlcmRvd24nKSB8fCAobmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgJiYgJ01TUG9pbnRlckRvd24nKSB8fCAodGhpcy5pc1RvdWNoRGV2aWNlICYmICd0b3VjaHN0YXJ0Jyk7XG4gICAgdGhpcy5tZW51SXRlbXMgPSBsaWIucXVlcnlFbGVtZW50c0J5U2VsZWN0b3IodGhpcy5vcHRpb25zLm1lbnVJdGVtcywgdGhpcy5tZW51KTtcblxuICAgIHZhciBpbml0TWVudUl0ZW0gPSBmdW5jdGlvbihpdGVtKSB7XG4gICAgICB2YXIgY3VycmVudERyb3AgPSBsaWIucXVlcnlFbGVtZW50c0J5U2VsZWN0b3Ioc2VsZi5vcHRpb25zLm1lbnVEcm9wLCBpdGVtKVswXSxcbiAgICAgICAgY3VycmVudE9wZW5lciA9IGxpYi5xdWVyeUVsZW1lbnRzQnlTZWxlY3RvcihzZWxmLm9wdGlvbnMubWVudU9wZW5lciwgaXRlbSlbMF07XG5cbiAgICAgIC8vIG9ubHkgZm9yIHRvdWNoIGlucHV0IGRldmljZXNcbiAgICAgIGlmKCBjdXJyZW50RHJvcCAmJiBjdXJyZW50T3BlbmVyICYmIChzZWxmLmlzVG91Y2hEZXZpY2UgfHwgc2VsZi5pc1BvaW50ZXJEZXZpY2UpICkge1xuICAgICAgICBsaWIuZXZlbnQuYWRkKGN1cnJlbnRPcGVuZXIsICdjbGljaycsIGxpYi5iaW5kKHNlbGYuY2xpY2tIYW5kbGVyLCBzZWxmKSk7XG4gICAgICAgIGxpYi5ldmVudC5hZGQoY3VycmVudE9wZW5lciwgJ21vdXNlZG93bicsIGxpYi5iaW5kKHNlbGYubW91c2Vkb3duSGFuZGxlciwgc2VsZikpO1xuICAgICAgICBsaWIuZXZlbnQuYWRkKGN1cnJlbnRPcGVuZXIsIHRvdWNoRXZlbnQsIGZ1bmN0aW9uKGUpe1xuICAgICAgICAgIGlmKCAhc2VsZi5pc1RvdWNoUG9pbnRlckV2ZW50KGUpICkge1xuICAgICAgICAgICAgc2VsZi5wcmV2ZW50Q3VycmVudENsaWNrID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgfVxuICAgICAgICAgIHNlbGYudG91Y2hGbGFnID0gdHJ1ZTtcbiAgICAgICAgICBzZWxmLmN1cnJlbnRJdGVtID0gaXRlbTtcbiAgICAgICAgICBzZWxmLmN1cnJlbnRMaW5rID0gY3VycmVudE9wZW5lcjtcbiAgICAgICAgICBzZWxmLnByZXNzSGFuZGxlci5hcHBseShzZWxmLCBhcmd1bWVudHMpO1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICAgIC8vIGZvciBkZXNrdG9wIGNvbXB1dGVycyBhbmQgdG91Y2ggZGV2aWNlc1xuICAgICAgalF1ZXJ5KGl0ZW0pLmJpbmQoJ21vdXNlZW50ZXInLCBmdW5jdGlvbigpe1xuICAgICAgICBpZighc2VsZi50b3VjaEZsYWcpIHtcbiAgICAgICAgICBzZWxmLmN1cnJlbnRJdGVtID0gaXRlbTtcbiAgICAgICAgICBzZWxmLm1vdXNlb3ZlckhhbmRsZXIoKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICBqUXVlcnkoaXRlbSkuYmluZCgnbW91c2VsZWF2ZScsIGZ1bmN0aW9uKCl7XG4gICAgICAgIGlmKCFzZWxmLnRvdWNoRmxhZykge1xuICAgICAgICAgIHNlbGYuY3VycmVudEl0ZW0gPSBpdGVtO1xuICAgICAgICAgIHNlbGYubW91c2VvdXRIYW5kbGVyKCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgICAgaXRlbS50b3VjaE5hdkFjdGl2ZSA9IHRydWU7XG4gICAgfTtcblxuICAgIC8vIGFkZGQgaGFuZGxlcnMgZm9yIGFsbCBtZW51IGl0ZW1zXG4gICAgZm9yKHZhciBpID0gMDsgaSA8IHRoaXMubWVudUl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICBpbml0TWVudUl0ZW0oc2VsZi5tZW51SXRlbXNbaV0pO1xuICAgIH1cblxuICAgIC8vIGhpZGUgZHJvcGRvd25zIHdoZW4gY2xpY2tpbmcgb3V0c2lkZSBuYXZpZ2F0aW9uXG4gICAgaWYodGhpcy5pc1RvdWNoRGV2aWNlIHx8IHRoaXMuaXNQb2ludGVyRGV2aWNlKSB7XG4gICAgICBsaWIuZXZlbnQuYWRkKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCwgJ21vdXNlZG93bicsIGxpYi5iaW5kKHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciwgdGhpcykpO1xuICAgICAgbGliLmV2ZW50LmFkZChkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQsIHRvdWNoRXZlbnQsIGxpYi5iaW5kKHRoaXMuY2xpY2tPdXRzaWRlSGFuZGxlciwgdGhpcykpO1xuICAgIH1cbiAgfSxcbiAgbW91c2Vkb3duSGFuZGxlcjogZnVuY3Rpb24oZSkge1xuICAgIGlmKHRoaXMudG91Y2hGbGFnKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICB0aGlzLnRvdWNoRmxhZyA9IGZhbHNlO1xuICAgICAgdGhpcy5wcmV2ZW50Q3VycmVudENsaWNrID0gZmFsc2U7XG4gICAgfVxuICB9LFxuICBtb3VzZW92ZXJIYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICBsaWIuYWRkQ2xhc3ModGhpcy5jdXJyZW50SXRlbSwgdGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MpO1xuICAgIGpRdWVyeSh0aGlzLmN1cnJlbnRJdGVtKS50cmlnZ2VyKCdpdGVtaG92ZXInKTtcbiAgfSxcbiAgbW91c2VvdXRIYW5kbGVyOiBmdW5jdGlvbigpIHtcbiAgICBsaWIucmVtb3ZlQ2xhc3ModGhpcy5jdXJyZW50SXRlbSwgdGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MpO1xuICAgIGpRdWVyeSh0aGlzLmN1cnJlbnRJdGVtKS50cmlnZ2VyKCdpdGVtbGVhdmUnKTtcbiAgfSxcbiAgaGlkZUFjdGl2ZURyb3Bkb3duOiBmdW5jdGlvbigpIHtcbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgdGhpcy5tZW51SXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmKGxpYi5oYXNDbGFzcyh0aGlzLm1lbnVJdGVtc1tpXSwgdGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MpKSB7XG4gICAgICAgIGxpYi5yZW1vdmVDbGFzcyh0aGlzLm1lbnVJdGVtc1tpXSwgdGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MpO1xuICAgICAgICBqUXVlcnkodGhpcy5tZW51SXRlbXNbaV0pLnRyaWdnZXIoJ2l0ZW1sZWF2ZScpO1xuICAgICAgfVxuICAgIH1cbiAgICB0aGlzLmFjdGl2ZVBhcmVudCA9IG51bGw7XG4gIH0sXG4gIHByZXNzSGFuZGxlcjogZnVuY3Rpb24oZSkge1xuICAgIC8vIGhpZGUgcHJldmlvdXMgZHJvcCAoaWYgYWN0aXZlKVxuICAgIGlmKHRoaXMuY3VycmVudEl0ZW0gIT09IHRoaXMuYWN0aXZlUGFyZW50KSB7XG4gICAgICBpZih0aGlzLmFjdGl2ZVBhcmVudCAmJiB0aGlzLmN1cnJlbnRJdGVtLnBhcmVudE5vZGUgPT09IHRoaXMuYWN0aXZlUGFyZW50LnBhcmVudE5vZGUpIHtcbiAgICAgICAgbGliLnJlbW92ZUNsYXNzKHRoaXMuYWN0aXZlUGFyZW50LCB0aGlzLm9wdGlvbnMuaG92ZXJDbGFzcyk7XG4gICAgICB9IGVsc2UgaWYoIXRoaXMuaXNQYXJlbnQodGhpcy5hY3RpdmVQYXJlbnQsIHRoaXMuY3VycmVudExpbmspKSB7XG4gICAgICAgIHRoaXMuaGlkZUFjdGl2ZURyb3Bkb3duKCk7XG4gICAgICB9XG4gICAgfVxuICAgIC8vIGhhbmRsZSBjdXJyZW50IGRyb3BcbiAgICB0aGlzLmFjdGl2ZVBhcmVudCA9IHRoaXMuY3VycmVudEl0ZW07XG4gICAgaWYobGliLmhhc0NsYXNzKHRoaXMuY3VycmVudEl0ZW0sIHRoaXMub3B0aW9ucy5ob3ZlckNsYXNzKSkge1xuICAgICAgdGhpcy5wcmV2ZW50Q3VycmVudENsaWNrID0gZmFsc2U7XG4gICAgfSBlbHNlIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHRoaXMucHJldmVudEN1cnJlbnRDbGljayA9IHRydWU7XG4gICAgICBsaWIuYWRkQ2xhc3ModGhpcy5jdXJyZW50SXRlbSwgdGhpcy5vcHRpb25zLmhvdmVyQ2xhc3MpO1xuICAgICAgalF1ZXJ5KHRoaXMuY3VycmVudEl0ZW0pLnRyaWdnZXIoJ2l0ZW1ob3ZlcicpO1xuICAgIH1cbiAgfSxcbiAgY2xpY2tIYW5kbGVyOiBmdW5jdGlvbihlKSB7XG4gICAgLy8gcHJldmVudCBmaXJzdCBjbGljayBvbiBsaW5rXG4gICAgaWYodGhpcy5wcmV2ZW50Q3VycmVudENsaWNrKSB7XG4gICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgfVxuICB9LFxuICBjbGlja091dHNpZGVIYW5kbGVyOiBmdW5jdGlvbihldmVudCkge1xuICAgIHZhciBlID0gZXZlbnQuY2hhbmdlZFRvdWNoZXMgPyBldmVudC5jaGFuZ2VkVG91Y2hlc1swXSA6IGV2ZW50O1xuICAgIGlmKHRoaXMuYWN0aXZlUGFyZW50ICYmICF0aGlzLmlzUGFyZW50KHRoaXMubWVudSwgZS50YXJnZXQpKSB7XG4gICAgICB0aGlzLmhpZGVBY3RpdmVEcm9wZG93bigpO1xuICAgICAgdGhpcy50b3VjaEZsYWcgPSBmYWxzZTtcbiAgICB9XG4gIH0sXG4gIGlzUGFyZW50OiBmdW5jdGlvbihwYXJlbnQsIGNoaWxkKSB7XG4gICAgd2hpbGUoY2hpbGQucGFyZW50Tm9kZSkge1xuICAgICAgaWYoY2hpbGQucGFyZW50Tm9kZSA9PSBwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBjaGlsZCA9IGNoaWxkLnBhcmVudE5vZGU7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSxcbiAgaXNUb3VjaFBvaW50ZXJFdmVudDogZnVuY3Rpb24oZSkge1xuICAgIHJldHVybiAoZS50eXBlLmluZGV4T2YoJ3RvdWNoJykgPiAtMSkgfHxcbiAgICAgICAgKG5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCAmJiBlLnBvaW50ZXJUeXBlID09PSAndG91Y2gnKSB8fFxuICAgICAgICAobmF2aWdhdG9yLm1zUG9pbnRlckVuYWJsZWQgJiYgZS5wb2ludGVyVHlwZSA9PSBlLk1TUE9JTlRFUl9UWVBFX1RPVUNIKTtcbiAgfSxcbiAgaXNQb2ludGVyRGV2aWNlOiAoZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuICEhKG5hdmlnYXRvci5wb2ludGVyRW5hYmxlZCB8fCBuYXZpZ2F0b3IubXNQb2ludGVyRW5hYmxlZCk7XG4gIH0oKSksXG4gIGlzVG91Y2hEZXZpY2U6IChmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gISEoKCdvbnRvdWNoc3RhcnQnIGluIHdpbmRvdykgfHwgd2luZG93LkRvY3VtZW50VG91Y2ggJiYgZG9jdW1lbnQgaW5zdGFuY2VvZiBEb2N1bWVudFRvdWNoKTtcbiAgfSgpKVxufTtcblxuZXhwb3J0IGRlZmF1bHQgVG91Y2hOYXY7IiwidmFyIGxpYiA9IHtcbiAgaGFzQ2xhc3M6IGZ1bmN0aW9uKGVsLGNscykge1xuICAgIHJldHVybiBlbCAmJiBlbC5jbGFzc05hbWUgPyBlbC5jbGFzc05hbWUubWF0Y2gobmV3IFJlZ0V4cCgnKFxcXFxzfF4pJytjbHMrJyhcXFxcc3wkKScpKSA6IGZhbHNlO1xuICB9LFxuICBhZGRDbGFzczogZnVuY3Rpb24oZWwsY2xzKSB7XG4gICAgaWYgKGVsICYmICF0aGlzLmhhc0NsYXNzKGVsLGNscykpIGVsLmNsYXNzTmFtZSArPSBcIiBcIitjbHM7XG4gIH0sXG4gIHJlbW92ZUNsYXNzOiBmdW5jdGlvbihlbCxjbHMpIHtcbiAgICBpZiAoZWwgJiYgdGhpcy5oYXNDbGFzcyhlbCxjbHMpKSB7ZWwuY2xhc3NOYW1lPWVsLmNsYXNzTmFtZS5yZXBsYWNlKG5ldyBSZWdFeHAoJyhcXFxcc3xeKScrY2xzKycoXFxcXHN8JCknKSwnICcpO31cbiAgfSxcbiAgZXh0ZW5kOiBmdW5jdGlvbihvYmopIHtcbiAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICBmb3IodmFyIHAgaW4gYXJndW1lbnRzW2ldKSB7XG4gICAgICAgIGlmKGFyZ3VtZW50c1tpXS5oYXNPd25Qcm9wZXJ0eShwKSkge1xuICAgICAgICAgIG9ialtwXSA9IGFyZ3VtZW50c1tpXVtwXTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gb2JqO1xuICB9LFxuICBlYWNoOiBmdW5jdGlvbihvYmosIGNhbGxiYWNrKSB7XG4gICAgdmFyIHByb3BlcnR5LCBsZW47XG4gICAgaWYodHlwZW9mIG9iai5sZW5ndGggPT09ICdudW1iZXInKSB7XG4gICAgICBmb3IocHJvcGVydHkgPSAwLCBsZW4gPSBvYmoubGVuZ3RoOyBwcm9wZXJ0eSA8IGxlbjsgcHJvcGVydHkrKykge1xuICAgICAgICBpZihjYWxsYmFjay5jYWxsKG9ialtwcm9wZXJ0eV0sIHByb3BlcnR5LCBvYmpbcHJvcGVydHldKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBmb3IocHJvcGVydHkgaW4gb2JqKSB7XG4gICAgICAgIGlmKG9iai5oYXNPd25Qcm9wZXJ0eShwcm9wZXJ0eSkpIHtcbiAgICAgICAgICBpZihjYWxsYmFjay5jYWxsKG9ialtwcm9wZXJ0eV0sIHByb3BlcnR5LCBvYmpbcHJvcGVydHldKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgZXZlbnQ6IChmdW5jdGlvbigpIHtcbiAgICB2YXIgZml4RXZlbnQgPSBmdW5jdGlvbihlKSB7XG4gICAgICBlID0gZSB8fCB3aW5kb3cuZXZlbnQ7XG4gICAgICBpZihlLmlzRml4ZWQpIHJldHVybiBlOyBlbHNlIGUuaXNGaXhlZCA9IHRydWU7XG4gICAgICBpZighZS50YXJnZXQpIGUudGFyZ2V0ID0gZS5zcmNFbGVtZW50O1xuICAgICAgZS5wcmV2ZW50RGVmYXVsdCA9IGUucHJldmVudERlZmF1bHQgfHwgZnVuY3Rpb24oKSB7dGhpcy5yZXR1cm5WYWx1ZSA9IGZhbHNlO307XG4gICAgICBlLnN0b3BQcm9wYWdhdGlvbiA9IGUuc3RvcFByb3BhZ2F0aW9uIHx8IGZ1bmN0aW9uKCkge3RoaXMuY2FuY2VsQnViYmxlID0gdHJ1ZTt9O1xuICAgICAgcmV0dXJuIGU7XG4gICAgfTtcbiAgICByZXR1cm4ge1xuICAgICAgYWRkOiBmdW5jdGlvbihlbGVtLCBldmVudCwgaGFuZGxlcikge1xuICAgICAgICBpZighZWxlbS5ldmVudHMpIHtcbiAgICAgICAgICBlbGVtLmV2ZW50cyA9IHt9O1xuICAgICAgICAgIGVsZW0uaGFuZGxlID0gZnVuY3Rpb24oZSkge1xuICAgICAgICAgICAgdmFyIHJldCwgaGFuZGxlcnMgPSBlbGVtLmV2ZW50c1tlLnR5cGVdO1xuICAgICAgICAgICAgZSA9IGZpeEV2ZW50KGUpO1xuICAgICAgICAgICAgZm9yKHZhciBpID0gMCwgbGVuID0gaGFuZGxlcnMubGVuZ3RoOyBpIDwgbGVuOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYoaGFuZGxlcnNbaV0pIHtcbiAgICAgICAgICAgICAgICByZXQgPSBoYW5kbGVyc1tpXS5jYWxsKGVsZW0sIGUpO1xuICAgICAgICAgICAgICAgIGlmKHJldCA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZighZWxlbS5ldmVudHNbZXZlbnRdKSB7XG4gICAgICAgICAgZWxlbS5ldmVudHNbZXZlbnRdID0gW107XG4gICAgICAgICAgaWYoZWxlbS5hZGRFdmVudExpc3RlbmVyKSBlbGVtLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsIGVsZW0uaGFuZGxlLCBmYWxzZSk7XG4gICAgICAgICAgZWxzZSBpZihlbGVtLmF0dGFjaEV2ZW50KSBlbGVtLmF0dGFjaEV2ZW50KCdvbicrZXZlbnQsIGVsZW0uaGFuZGxlKTtcbiAgICAgICAgfVxuICAgICAgICBlbGVtLmV2ZW50c1tldmVudF0ucHVzaChoYW5kbGVyKTtcbiAgICAgIH0sXG4gICAgICByZW1vdmU6IGZ1bmN0aW9uKGVsZW0sIGV2ZW50LCBoYW5kbGVyKSB7XG4gICAgICAgIHZhciBoYW5kbGVycyA9IGVsZW0uZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgZm9yKHZhciBpID0gaGFuZGxlcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZihoYW5kbGVyc1tpXSA9PT0gaGFuZGxlcikge1xuICAgICAgICAgICAgaGFuZGxlcnMuc3BsaWNlKGksMSk7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKCFoYW5kbGVycy5sZW5ndGgpIHtcbiAgICAgICAgICBkZWxldGUgZWxlbS5ldmVudHNbZXZlbnRdO1xuICAgICAgICAgIGlmKGVsZW0ucmVtb3ZlRXZlbnRMaXN0ZW5lcikgZWxlbS5yZW1vdmVFdmVudExpc3RlbmVyKGV2ZW50LCBlbGVtLmhhbmRsZSwgZmFsc2UpO1xuICAgICAgICAgIGVsc2UgaWYoZWxlbS5kZXRhY2hFdmVudCkgZWxlbS5kZXRhY2hFdmVudCgnb24nK2V2ZW50LCBlbGVtLmhhbmRsZSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9O1xuICB9KCkpLFxuICBxdWVyeUVsZW1lbnRzQnlTZWxlY3RvcjogZnVuY3Rpb24oc2VsZWN0b3IsIHNjb3BlKSB7XG4gICAgc2NvcGUgPSBzY29wZSB8fCBkb2N1bWVudDtcbiAgICBpZighc2VsZWN0b3IpIHJldHVybiBbXTtcbiAgICBpZihzZWxlY3RvciA9PT0gJz4qJykgcmV0dXJuIHNjb3BlLmNoaWxkcmVuO1xuICAgIGlmKHR5cGVvZiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICByZXR1cm4gc2NvcGUucXVlcnlTZWxlY3RvckFsbChzZWxlY3Rvcik7XG4gICAgfVxuICAgIHZhciBzZWxlY3RvcnMgPSBzZWxlY3Rvci5zcGxpdCgnLCcpO1xuICAgIHZhciByZXN1bHRMaXN0ID0gW107XG4gICAgZm9yKHZhciBzID0gMDsgcyA8IHNlbGVjdG9ycy5sZW5ndGg7IHMrKykge1xuICAgICAgdmFyIGN1cnJlbnRDb250ZXh0ID0gW3Njb3BlIHx8IGRvY3VtZW50XTtcbiAgICAgIHZhciB0b2tlbnMgPSBzZWxlY3RvcnNbc10ucmVwbGFjZSgvXlxccysvLCcnKS5yZXBsYWNlKC9cXHMrJC8sJycpLnNwbGl0KCcgJyk7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRva2Vucy5sZW5ndGg7IGkrKykge1xuICAgICAgICB0b2tlbiA9IHRva2Vuc1tpXS5yZXBsYWNlKC9eXFxzKy8sJycpLnJlcGxhY2UoL1xccyskLywnJyk7XG4gICAgICAgIGlmICh0b2tlbi5pbmRleE9mKCcjJykgPiAtMSkge1xuICAgICAgICAgIHZhciBiaXRzID0gdG9rZW4uc3BsaXQoJyMnKSwgdGFnTmFtZSA9IGJpdHNbMF0sIGlkID0gYml0c1sxXTtcbiAgICAgICAgICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKTtcbiAgICAgICAgICBpZiAoZWxlbWVudCAmJiB0YWdOYW1lICYmIGVsZW1lbnQubm9kZU5hbWUudG9Mb3dlckNhc2UoKSAhPSB0YWdOYW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgICAgfVxuICAgICAgICAgIGN1cnJlbnRDb250ZXh0ID0gZWxlbWVudCA/IFtlbGVtZW50XSA6IFtdO1xuICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0b2tlbi5pbmRleE9mKCcuJykgPiAtMSkge1xuICAgICAgICAgIHZhciBiaXRzID0gdG9rZW4uc3BsaXQoJy4nKSwgdGFnTmFtZSA9IGJpdHNbMF0gfHwgJyonLCBjbGFzc05hbWUgPSBiaXRzWzFdLCBmb3VuZCA9IFtdLCBmb3VuZENvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBoID0gMDsgaCA8IGN1cnJlbnRDb250ZXh0Lmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHM7XG4gICAgICAgICAgICBpZiAodGFnTmFtZSA9PSAnKicpIHtcbiAgICAgICAgICAgICAgZWxlbWVudHMgPSBjdXJyZW50Q29udGV4dFtoXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbWVudHMgPSBjdXJyZW50Q29udGV4dFtoXS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZWxlbWVudHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgZm91bmRbZm91bmRDb3VudCsrXSA9IGVsZW1lbnRzW2pdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50Q29udGV4dCA9IFtdO1xuICAgICAgICAgIHZhciBjdXJyZW50Q29udGV4dEluZGV4ID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGZvdW5kLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBpZiAoZm91bmRba10uY2xhc3NOYW1lICYmIGZvdW5kW2tdLmNsYXNzTmFtZS5tYXRjaChuZXcgUmVnRXhwKCcoXFxcXHN8XiknK2NsYXNzTmFtZSsnKFxcXFxzfCQpJykpKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRDb250ZXh0W2N1cnJlbnRDb250ZXh0SW5kZXgrK10gPSBmb3VuZFtrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRva2VuLm1hdGNoKC9eKFxcdyopXFxbKFxcdyspKFs9flxcfFxcXlxcJFxcKl0/KT0/XCI/KFteXFxdXCJdKilcIj9cXF0kLykpIHtcbiAgICAgICAgICB2YXIgdGFnTmFtZSA9IFJlZ0V4cC4kMSB8fCAnKicsIGF0dHJOYW1lID0gUmVnRXhwLiQyLCBhdHRyT3BlcmF0b3IgPSBSZWdFeHAuJDMsIGF0dHJWYWx1ZSA9IFJlZ0V4cC4kNDtcbiAgICAgICAgICBpZihhdHRyTmFtZS50b0xvd2VyQ2FzZSgpID09ICdmb3InICYmIHRoaXMuYnJvd3Nlci5tc2llICYmIHRoaXMuYnJvd3Nlci52ZXJzaW9uIDwgOCkge1xuICAgICAgICAgICAgYXR0ck5hbWUgPSAnaHRtbEZvcic7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciBmb3VuZCA9IFtdLCBmb3VuZENvdW50ID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBoID0gMDsgaCA8IGN1cnJlbnRDb250ZXh0Lmxlbmd0aDsgaCsrKSB7XG4gICAgICAgICAgICB2YXIgZWxlbWVudHM7XG4gICAgICAgICAgICBpZiAodGFnTmFtZSA9PSAnKicpIHtcbiAgICAgICAgICAgICAgZWxlbWVudHMgPSBjdXJyZW50Q29udGV4dFtoXS5nZXRFbGVtZW50c0J5VGFnTmFtZSgnKicpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgZWxlbWVudHMgPSBjdXJyZW50Q29udGV4dFtoXS5nZXRFbGVtZW50c0J5VGFnTmFtZSh0YWdOYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBlbGVtZW50c1tqXTsgaisrKSB7XG4gICAgICAgICAgICAgIGZvdW5kW2ZvdW5kQ291bnQrK10gPSBlbGVtZW50c1tqXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgICAgY3VycmVudENvbnRleHQgPSBbXTtcbiAgICAgICAgICB2YXIgY3VycmVudENvbnRleHRJbmRleCA9IDAsIGNoZWNrRnVuY3Rpb247XG4gICAgICAgICAgc3dpdGNoIChhdHRyT3BlcmF0b3IpIHtcbiAgICAgICAgICAgIGNhc2UgJz0nOiBjaGVja0Z1bmN0aW9uID0gZnVuY3Rpb24oZSkgeyByZXR1cm4gKGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKSA9PSBhdHRyVmFsdWUpIH07IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnfic6IGNoZWNrRnVuY3Rpb24gPSBmdW5jdGlvbihlKSB7IHJldHVybiAoZS5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpLm1hdGNoKG5ldyBSZWdFeHAoJyhcXFxcc3xeKScrYXR0clZhbHVlKycoXFxcXHN8JCknKSkpIH07IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnfCc6IGNoZWNrRnVuY3Rpb24gPSBmdW5jdGlvbihlKSB7IHJldHVybiAoZS5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpLm1hdGNoKG5ldyBSZWdFeHAoJ14nK2F0dHJWYWx1ZSsnLT8nKSkpIH07IGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnXic6IGNoZWNrRnVuY3Rpb24gPSBmdW5jdGlvbihlKSB7IHJldHVybiAoZS5nZXRBdHRyaWJ1dGUoYXR0ck5hbWUpLmluZGV4T2YoYXR0clZhbHVlKSA9PSAwKSB9OyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyQnOiBjaGVja0Z1bmN0aW9uID0gZnVuY3Rpb24oZSkgeyByZXR1cm4gKGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKS5sYXN0SW5kZXhPZihhdHRyVmFsdWUpID09IGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKS5sZW5ndGggLSBhdHRyVmFsdWUubGVuZ3RoKSB9OyBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJyonOiBjaGVja0Z1bmN0aW9uID0gZnVuY3Rpb24oZSkgeyByZXR1cm4gKGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKS5pbmRleE9mKGF0dHJWYWx1ZSkgPiAtMSkgfTsgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0IDogY2hlY2tGdW5jdGlvbiA9IGZ1bmN0aW9uKGUpIHsgcmV0dXJuIGUuZ2V0QXR0cmlidXRlKGF0dHJOYW1lKSB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICBjdXJyZW50Q29udGV4dCA9IFtdO1xuICAgICAgICAgIHZhciBjdXJyZW50Q29udGV4dEluZGV4ID0gMDtcbiAgICAgICAgICBmb3IgKHZhciBrID0gMDsgayA8IGZvdW5kLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tGdW5jdGlvbihmb3VuZFtrXSkpIHtcbiAgICAgICAgICAgICAgY3VycmVudENvbnRleHRbY3VycmVudENvbnRleHRJbmRleCsrXSA9IGZvdW5kW2tdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0YWdOYW1lID0gdG9rZW47XG4gICAgICAgIHZhciBmb3VuZCA9IFtdLCBmb3VuZENvdW50ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaCA9IDA7IGggPCBjdXJyZW50Q29udGV4dC5sZW5ndGg7IGgrKykge1xuICAgICAgICAgIHZhciBlbGVtZW50cyA9IGN1cnJlbnRDb250ZXh0W2hdLmdldEVsZW1lbnRzQnlUYWdOYW1lKHRhZ05hbWUpO1xuICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgZWxlbWVudHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgIGZvdW5kW2ZvdW5kQ291bnQrK10gPSBlbGVtZW50c1tqXTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY3VycmVudENvbnRleHQgPSBmb3VuZDtcbiAgICAgIH1cbiAgICAgIHJlc3VsdExpc3QgPSBbXS5jb25jYXQocmVzdWx0TGlzdCxjdXJyZW50Q29udGV4dCk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHRMaXN0O1xuICB9LFxuICB0cmltOiBmdW5jdGlvbiAoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9eXFxzKy8sICcnKS5yZXBsYWNlKC9cXHMrJC8sICcnKTtcbiAgfSxcbiAgYmluZDogZnVuY3Rpb24oZiwgc2NvcGUsIGZvcmNlQXJncyl7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKCkge3JldHVybiBmLmFwcGx5KHNjb3BlLCB0eXBlb2YgZm9yY2VBcmdzICE9PSAndW5kZWZpbmVkJyA/IFtmb3JjZUFyZ3NdIDogYXJndW1lbnRzKTt9O1xuICB9XG59O1xuXG5leHBvcnQgZGVmYXVsdCBsaWI7Il19
