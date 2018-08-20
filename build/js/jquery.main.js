// page init
jQuery(function() {
	initMobileNav();
	initAccordion();
	initTouchNav();
	initDropDownClasses();
	initSlitSlider();
});

// mobile menu init
function initMobileNav() {
	jQuery('body').mobileNav({
		hideOnClickOutside: true,
		menuActiveClass: 'nav-active',
		menuOpener: '.nav-opener',
		menuDrop: '.main-nav'
	});
}

// accordion init
function initAccordion() {

	ResponsiveHelper.addRange({
		'..767': {
			on: function() {
				jQuery('ul.multilevel-accordion').slideAccordion({
					opener:'>a.opener',
					slider:'>div.slide',
					collapsible:true,
					animSpeed: 300,
					allowClickWhenExpanded: true,
					event: 'click'
				});
			},
			off: function() {
				jQuery('ul.multilevel-accordion').slideAccordion('destroy');
			}
		},
	});
}

// handle dropdowns on mobile devices
function initTouchNav() {

	ResponsiveHelper.addRange({
		'768..': {
			on: function() {
				jQuery('.main-nav').each(function() {
					new TouchNav({
						navBlock: this
					});
				});
			},
			off: function() {
				return false;
			// jQuery('.main-nav').TouchNav('destroy');
		}
	}
});
}

// add classes if item has dropdown
function initDropDownClasses() {
	jQuery('.navbar-nav li').each(function() {
		var item = jQuery(this);
		var drop = item.find('ul');
		var link = item.find('a').eq(0);
		if (drop.length) {
			item.addClass('has-drop-down');
			if (link.length) link.addClass('has-drop-down-a');
		}
	});
}

function initSlitSlider() {

	$(function() {

		var Page = (function() {

			var $navArrows = $( '#nav-arrows' ),
			$nav = $( '#nav-dots > span' ),
			slitslider = $( '#slider' ).slitslider( {
				onBeforeChange : function( slide, pos ) {

					$nav.removeClass( 'nav-dot-current' );
					$nav.eq( pos ).addClass( 'nav-dot-current' );

				}
			} ),

			init = function() {

				initEvents();

			},
			initEvents = function() {

			// add navigation events
			$navArrows.children( ':last' ).on( 'click', function() {

				slitslider.next();
				return false;

			} );

			$navArrows.children( ':first' ).on( 'click', function() {

				slitslider.previous();
				return false;

			} );

			$nav.each( function( i ) {

				$( this ).on( 'click', function( event ) {

					var $dot = $( this );

					if( !slitslider.isActive() ) {

						$nav.removeClass( 'nav-dot-current' );
						$dot.addClass( 'nav-dot-current' );

					}

					slitslider.jump( i + 1 );
					return false;

				} );

			} );

		};

		return { init : init };

	})();

	Page.init();

/**
 * Notes:
 *
 * example how to add items:
 */

/*

var $items  = $('<div class="sl-slide sl-slide-color-2" data-orientation="horizontal" data-slice1-rotation="-5" data-slice2-rotation="10" data-slice1-scale="2" data-slice2-scale="1"><div class="sl-slide-inner bg-1"><div class="sl-deco" data-icon="t"></div><h2>some text</h2><blockquote><p>bla bla</p><cite>Margi Clarke</cite></blockquote></div></div>');

// call the plugin's add method
ss.add($items);

*/

});
}



//PLUGINS

/*
* jQuery Accordion plugin new
*/
;(function(root, factory) {

	'use strict';
	if (typeof define === 'function' && define.amd) {
		define(['jquery'], factory);
	} else if (typeof exports === 'object') {
		module.exports = factory(require('jquery'));
	} else {
		root.SlideAccordion = factory(jQuery);
	}
}(this, function($) {

	'use strict';
	var accHiddenClass = 'js-acc-hidden';

	function SlideAccordion(options) {
		this.options = $.extend(true, {
			allowClickWhenExpanded: false,
			activeClass:'open',
			opener:'.opener',
			slider:'.slide',
			animSpeed: 300,
			collapsible:true,
			event: 'click',
			scrollToActiveItem: {
				enable: false,
			breakpoint: 767, // max-width
			animSpeed: 600,
			extraOffset: null
		}
	}, options);
		this.init();
	}

	SlideAccordion.prototype = {
		init: function() {
			if (this.options.holder) {
				this.findElements();
				this.setStateOnInit();
				this.attachEvents();
				this.makeCallback('onInit');
			}
		},

		findElements: function() {
			this.$holder = $(this.options.holder).data('SlideAccordion', this);
			this.$items = this.$holder.find(':has(' + this.options.slider + ')');
		},

		setStateOnInit: function() {
			var self = this;

			this.$items.each(function() {
				if (!$(this).hasClass(self.options.activeClass)) {
					$(this).find(self.options.slider).addClass(accHiddenClass);
				}
			});
		},

		attachEvents: function() {
			var self = this;

			this.accordionToggle = function(e) {
				var $item = jQuery(this).closest(self.$items);
				var $actiItem = self.getActiveItem($item);

				if (!self.options.allowClickWhenExpanded || !$item.hasClass(self.options.activeClass)) {
					e.preventDefault();
					self.toggle($item, $actiItem);
				}
			};

			this.$items.on(this.options.event, this.options.opener, this.accordionToggle);
		},

		toggle: function($item, $prevItem) {
			if (!$item.hasClass(this.options.activeClass)) {
				this.show($item);
			} else if (this.options.collapsible) {
				this.hide($item);
			}

			if (!$item.is($prevItem) && $prevItem.length) {
				this.hide($prevItem);
			}

			this.makeCallback('beforeToggle');
		},

		show: function($item) {
			var $slider = $item.find(this.options.slider);

			$item.addClass(this.options.activeClass);
			$slider.stop().hide().removeClass(accHiddenClass).slideDown({
				duration: this.options.animSpeed,
				complete: function() {
					$slider.removeAttr('style');
					if (
						this.options.scrollToActiveItem.enable &&
						window.innerWidth <= this.options.scrollToActiveItem.breakpoint
						) {
						this.goToItem($item);
				}
				this.makeCallback('onShow', $item);
			}.bind(this)
		});

			this.makeCallback('beforeShow', $item);
		},

		hide: function($item) {
			var $slider = $item.find(this.options.slider);

			$item.removeClass(this.options.activeClass);
			$slider.stop().show().slideUp({
				duration: this.options.animSpeed,
				complete: function() {
					$slider.addClass(accHiddenClass);
					$slider.removeAttr('style');
					this.makeCallback('onHide', $item);
				}.bind(this)
			});

			this.makeCallback('beforeHide', $item);
		},

		goToItem: function($item) {
			var itemOffset = $item.offset().top;

			if (itemOffset < $(window).scrollTop()) {
			// handle extra offset
			if (typeof this.options.scrollToActiveItem.extraOffset === 'number') {
				itemOffset -= this.options.scrollToActiveItem.extraOffset;
			} else if (typeof this.options.scrollToActiveItem.extraOffset === 'function') {
				itemOffset -= this.options.scrollToActiveItem.extraOffset();
			}

			$('body, html').animate({
				scrollTop: itemOffset
			}, this.options.scrollToActiveItem.animSpeed);
		}
	},

	getActiveItem: function($item) {
		return $item.siblings().filter('.' + this.options.activeClass);
	},

	makeCallback: function(name) {
		if (typeof this.options[name] === 'function') {
			var args = Array.prototype.slice.call(arguments);
			args.shift();
			this.options[name].apply(this, args);
		}
	},

	destroy: function() {
		this.$holder.removeData('SlideAccordion');
		this.$items.off(this.options.event, this.options.opener, this.accordionToggle);
		this.$items.removeClass(this.options.activeClass).each(function(i, item) {
			$(item).find(this.options.slider).removeAttr('style').removeClass(accHiddenClass);
		}.bind(this));
		this.makeCallback('onDestroy');
	}
};

$.fn.slideAccordion = function(opt) {
	var args = Array.prototype.slice.call(arguments);
	var method = args[0];

	return this.each(function() {
		var $holder = jQuery(this);
		var instance = $holder.data('SlideAccordion');

		if (typeof opt === 'object' || typeof opt === 'undefined') {
			new SlideAccordion($.extend(true, {
				holder: this
			}, opt));
		} else if (typeof method === 'string' && instance) {
			if(typeof instance[method] === 'function') {
				args.shift();
				instance[method].apply(instance, args);
			}
		}
	});
};

(function() {
	var tabStyleSheet = $('<style type="text/css">')[0];
	var tabStyleRule = '.' + accHiddenClass;
	tabStyleRule += '{position:absolute !important;left:-9999px !important;top:-9999px !important;display:block !important; width: 100% !important;}';
	if (tabStyleSheet.styleSheet) {
		tabStyleSheet.styleSheet.cssText = tabStyleRule;
	} else {
		tabStyleSheet.appendChild(document.createTextNode(tabStyleRule));
	}
	$('head').append(tabStyleSheet);
}());

return SlideAccordion;
}));

/*
* Responsive Layout helper
*/
window.ResponsiveHelper = (function($){
// init variables
var handlers = [],
prevWinWidth,
win = $(window),
nativeMatchMedia = false;

// detect match media support
if(window.matchMedia) {
	if(window.Window && window.matchMedia === Window.prototype.matchMedia) {
		nativeMatchMedia = true;
	} else if(window.matchMedia.toString().indexOf('native') > -1) {
		nativeMatchMedia = true;
	}
}

// prepare resize handler
function resizeHandler() {
	var winWidth = win.width();
	if(winWidth !== prevWinWidth) {
		prevWinWidth = winWidth;

		// loop through range groups
		$.each(handlers, function(index, rangeObject){
			// disable current active area if needed
			$.each(rangeObject.data, function(property, item) {
				if(item.currentActive && !matchRange(item.range[0], item.range[1])) {
					item.currentActive = false;
					if(typeof item.disableCallback === 'function') {
						item.disableCallback();
					}
				}
			});

			// enable areas that match current width
			$.each(rangeObject.data, function(property, item) {
				if(!item.currentActive && matchRange(item.range[0], item.range[1])) {
					// make callback
					item.currentActive = true;
					if(typeof item.enableCallback === 'function') {
						item.enableCallback();
					}
				}
			});
		});
	}
}
win.bind('load resize orientationchange', resizeHandler);

// test range
function matchRange(r1, r2) {
	var mediaQueryString = '';
	if(r1 > 0) {
		mediaQueryString += '(min-width: ' + r1 + 'px)';
	}
	if(r2 < Infinity) {
		mediaQueryString += (mediaQueryString ? ' and ' : '') + '(max-width: ' + r2 + 'px)';
	}
	return matchQuery(mediaQueryString, r1, r2);
}

// media query function
function matchQuery(query, r1, r2) {
	if(window.matchMedia && nativeMatchMedia) {
		return matchMedia(query).matches;
	} else if(window.styleMedia) {
		return styleMedia.matchMedium(query);
	} else if(window.media) {
		return media.matchMedium(query);
	} else {
		return prevWinWidth >= r1 && prevWinWidth <= r2;
	}
}

// range parser
function parseRange(rangeStr) {
	var rangeData = rangeStr.split('..');
	var x1 = parseInt(rangeData[0], 10) || -Infinity;
	var x2 = parseInt(rangeData[1], 10) || Infinity;
	return [x1, x2].sort(function(a, b){
		return a - b;
	});
}

// export public functions
return {
	addRange: function(ranges) {
		// parse data and add items to collection
		var result = {data:{}};
		$.each(ranges, function(property, data){
			result.data[property] = {
				range: parseRange(property),
				enableCallback: data.on,
				disableCallback: data.off
			};
		});
		handlers.push(result);

		// call resizeHandler to recalculate all events
		prevWinWidth = null;
		resizeHandler();
	}
};
}(jQuery));

// navigation accesibility module
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
TouchNav.isActiveOn = function(elem) {
	return elem && elem.touchNavActive;
};
TouchNav.prototype = {
	init: function() {
		if (typeof this.options.navBlock === 'string') {
			this.menu = document.getElementById(this.options.navBlock);
		} else if (typeof this.options.navBlock === 'object') {
			this.menu = this.options.navBlock;
		}
		if (this.menu) {
			this.addEvents();
		}
	},
	addEvents: function() {
	// attach event handlers
	var self = this;
	var touchEvent = (navigator.pointerEnabled && 'pointerdown') || (navigator.msPointerEnabled && 'MSPointerDown') || (this.isTouchDevice && 'touchstart');
	this.menuItems = lib.queryElementsBySelector(this.options.menuItems, this.menu);

	var initMenuItem = function(item) {
		var currentDrop = lib.queryElementsBySelector(self.options.menuDrop, item)[0],
		currentOpener = lib.queryElementsBySelector(self.options.menuOpener, item)[0];

		// only for touch input devices
		if (currentDrop && currentOpener && (self.isTouchDevice || self.isPointerDevice)) {
			lib.event.add(currentOpener, 'click', lib.bind(self.clickHandler, self));
			lib.event.add(currentOpener, 'mousedown', lib.bind(self.mousedownHandler, self));
			lib.event.add(currentOpener, touchEvent, function(e) {
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
		jQuery(item)
		.bind('mouseenter', function() {
			if (!self.touchFlag) {
				self.currentItem = item;
				self.mouseoverHandler();
			}
		});
		jQuery(item)
		.bind('mouseleave', function() {
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
		lib.event.add(document.documentElement, 'mousedown', lib.bind(this.clickOutsideHandler, this));
		lib.event.add(document.documentElement, touchEvent, lib.bind(this.clickOutsideHandler, this));
	}
},
mousedownHandler: function(e) {
	if (this.touchFlag) {
		e.preventDefault();
		this.touchFlag = false;
		this.preventCurrentClick = false;
	}
},
mouseoverHandler: function() {
	lib.addClass(this.currentItem, this.options.hoverClass);
	jQuery(this.currentItem)
	.trigger('itemhover');
},
mouseoutHandler: function() {
	lib.removeClass(this.currentItem, this.options.hoverClass);
	jQuery(this.currentItem)
	.trigger('itemleave');
},
hideActiveDropdown: function() {
	for (var i = 0; i < this.menuItems.length; i++) {
		if (lib.hasClass(this.menuItems[i], this.options.hoverClass)) {
			lib.removeClass(this.menuItems[i], this.options.hoverClass);
			jQuery(this.menuItems[i])
			.trigger('itemleave');
		}
	}
	this.activeParent = null;
},
pressHandler: function(e) {
	// hide previous drop (if active)
	if (this.currentItem !== this.activeParent) {
		if (this.activeParent && this.currentItem.parentNode === this.activeParent.parentNode) {
			lib.removeClass(this.activeParent, this.options.hoverClass);
		} else if (!this.isParent(this.activeParent, this.currentLink)) {
			this.hideActiveDropdown();
		}
	}
	// handle current drop
	this.activeParent = this.currentItem;
	if (lib.hasClass(this.currentItem, this.options.hoverClass)) {
		this.preventCurrentClick = false;
	} else {
		e.preventDefault();
		this.preventCurrentClick = true;
		lib.addClass(this.currentItem, this.options.hoverClass);
		jQuery(this.currentItem)
		.trigger('itemhover');
	}
},
clickHandler: function(e) {
	// prevent first click on link
	if (this.preventCurrentClick) {
		e.preventDefault();
	}
},
clickOutsideHandler: function(event) {
	var e = event.changedTouches ? event.changedTouches[0] : event;
	if (this.activeParent && !this.isParent(this.menu, e.target)) {
		this.hideActiveDropdown();
		this.touchFlag = false;
	}
},
isParent: function(parent, child) {
	while (child.parentNode) {
		if (child.parentNode == parent) {
			return true;
		}
		child = child.parentNode;
	}
	return false;
},
isTouchPointerEvent: function(e) {
	return (e.type.indexOf('touch') > -1) ||
	(navigator.pointerEnabled && e.pointerType === 'touch') ||
	(navigator.msPointerEnabled && e.pointerType == e.MSPOINTER_TYPE_TOUCH);
},
isPointerDevice: (function() {
	return !!(navigator.pointerEnabled || navigator.msPointerEnabled);
}()),
isTouchDevice: (function() {
	return !!(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch);
}())
};

/*
* Utility module
*/
lib = {
	hasClass: function(el,cls) {
		return el && el.className ? el.className.match(new RegExp('(\\s|^)'+cls+'(\\s|$)')) : false;
	},
	addClass: function(el,cls) {
		if (el && !this.hasClass(el,cls)) el.className += " "+cls;
	},
	removeClass: function(el,cls) {
		if (el && this.hasClass(el,cls)) {el.className=el.className.replace(new RegExp('(\\s|^)'+cls+'(\\s|$)'),' ');}
	},
	extend: function(obj) {
		for(var i = 1; i < arguments.length; i++) {
			for(var p in arguments[i]) {
				if(arguments[i].hasOwnProperty(p)) {
					obj[p] = arguments[i][p];
				}
			}
		}
		return obj;
	},
	each: function(obj, callback) {
		var property, len;
		if(typeof obj.length === 'number') {
			for(property = 0, len = obj.length; property < len; property++) {
				if(callback.call(obj[property], property, obj[property]) === false) {
					break;
				}
			}
		} else {
			for(property in obj) {
				if(obj.hasOwnProperty(property)) {
					if(callback.call(obj[property], property, obj[property]) === false) {
						break;
					}
				}
			}
		}
	},
	event: (function() {
		var fixEvent = function(e) {
			e = e || window.event;
			if(e.isFixed) return e; else e.isFixed = true;
			if(!e.target) e.target = e.srcElement;
			e.preventDefault = e.preventDefault || function() {this.returnValue = false;};
			e.stopPropagation = e.stopPropagation || function() {this.cancelBubble = true;};
			return e;
		};
		return {
			add: function(elem, event, handler) {
				if(!elem.events) {
					elem.events = {};
					elem.handle = function(e) {
						var ret, handlers = elem.events[e.type];
						e = fixEvent(e);
						for(var i = 0, len = handlers.length; i < len; i++) {
							if(handlers[i]) {
								ret = handlers[i].call(elem, e);
								if(ret === false) {
									e.preventDefault();
									e.stopPropagation();
								}
							}
						}
					};
				}
				if(!elem.events[event]) {
					elem.events[event] = [];
					if(elem.addEventListener) elem.addEventListener(event, elem.handle, false);
					else if(elem.attachEvent) elem.attachEvent('on'+event, elem.handle);
				}
				elem.events[event].push(handler);
			},
			remove: function(elem, event, handler) {
				var handlers = elem.events[event];
				for(var i = handlers.length - 1; i >= 0; i--) {
					if(handlers[i] === handler) {
						handlers.splice(i,1);
					}
				}
				if(!handlers.length) {
					delete elem.events[event];
					if(elem.removeEventListener) elem.removeEventListener(event, elem.handle, false);
					else if(elem.detachEvent) elem.detachEvent('on'+event, elem.handle);
				}
			}
		};
	}()),
	queryElementsBySelector: function(selector, scope) {
		scope = scope || document;
		if(!selector) return [];
		if(selector === '>*') return scope.children;
		if(typeof document.querySelectorAll === 'function') {
			return scope.querySelectorAll(selector);
		}
		var selectors = selector.split(',');
		var resultList = [];
		for(var s = 0; s < selectors.length; s++) {
			var currentContext = [scope || document];
			var tokens = selectors[s].replace(/^\s+/,'').replace(/\s+$/,'').split(' ');
			for (var i = 0; i < tokens.length; i++) {
				token = tokens[i].replace(/^\s+/,'').replace(/\s+$/,'');
				if (token.indexOf('#') > -1) {
					var bits = token.split('#'), tagName = bits[0], id = bits[1];
					var element = document.getElementById(id);
					if (element && tagName && element.nodeName.toLowerCase() != tagName) {
						return [];
					}
					currentContext = element ? [element] : [];
					continue;
				}
				if (token.indexOf('.') > -1) {
					var bits = token.split('.'), tagName = bits[0] || '*', className = bits[1], found = [], foundCount = 0;
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
						if (found[k].className && found[k].className.match(new RegExp('(\\s|^)'+className+'(\\s|$)'))) {
							currentContext[currentContextIndex++] = found[k];
						}
					}
					continue;
				}
				if (token.match(/^(\w*)\[(\w+)([=~\|\^\$\*]?)=?"?([^\]"]*)"?\]$/)) {
					var tagName = RegExp.$1 || '*', attrName = RegExp.$2, attrOperator = RegExp.$3, attrValue = RegExp.$4;
					if(attrName.toLowerCase() == 'for' && this.browser.msie && this.browser.version < 8) {
						attrName = 'htmlFor';
					}
					var found = [], foundCount = 0;
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
					var currentContextIndex = 0, checkFunction;
					switch (attrOperator) {
						case '=': checkFunction = function(e) { return (e.getAttribute(attrName) == attrValue) }; break;
						case '~': checkFunction = function(e) { return (e.getAttribute(attrName).match(new RegExp('(\\s|^)'+attrValue+'(\\s|$)'))) }; break;
						case '|': checkFunction = function(e) { return (e.getAttribute(attrName).match(new RegExp('^'+attrValue+'-?'))) }; break;
						case '^': checkFunction = function(e) { return (e.getAttribute(attrName).indexOf(attrValue) == 0) }; break;
						case '$': checkFunction = function(e) { return (e.getAttribute(attrName).lastIndexOf(attrValue) == e.getAttribute(attrName).length - attrValue.length) }; break;
						case '*': checkFunction = function(e) { return (e.getAttribute(attrName).indexOf(attrValue) > -1) }; break;
						default : checkFunction = function(e) { return e.getAttribute(attrName) };
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
				var found = [], foundCount = 0;
				for (var h = 0; h < currentContext.length; h++) {
					var elements = currentContext[h].getElementsByTagName(tagName);
					for (var j = 0; j < elements.length; j++) {
						found[foundCount++] = elements[j];
					}
				}
				currentContext = found;
			}
			resultList = [].concat(resultList,currentContext);
		}
		return resultList;
	},
	trim: function (str) {
		return str.replace(/^\s+/, '').replace(/\s+$/, '');
	},
	bind: function(f, scope, forceArgs){
		return function() {return f.apply(scope, typeof forceArgs !== 'undefined' ? [forceArgs] : arguments);};
	}
};

/*
* Simple Mobile Navigation
*/
;
(function($) {
	function MobileNav(options) {
		this.options = $.extend({
			container: null,
			hideOnClickOutside: false,
			menuActiveClass: 'nav-active',
			menuOpener: '.nav-opener',
			menuDrop: '.main-nav',
			toggleEvent: 'click',
			outsideClickEvent: 'click touchstart pointerdown MSPointerDown'
		}, options);
		this.initStructure();
		this.attachEvents();
	}
	MobileNav.prototype = {
		initStructure: function() {
			this.page = $('html');
			this.container = $(this.options.container);
			this.opener = this.container.find(this.options.menuOpener);
			this.drop = this.container.find(this.options.menuDrop);
		},
		attachEvents: function() {
			var self = this;

			if (activateResizeHandler) {
				activateResizeHandler();
				activateResizeHandler = null;
			}

			this.outsideClickHandler = function(e) {
				if (self.isOpened()) {
					var target = $(e.target);
					if (!target.closest(self.opener).length && !target.closest(self.drop).length) {
						self.hide();
					}
				}
			};

			this.openerClickHandler = function(e) {
				e.preventDefault();
				self.toggle();
			};

			this.opener.on(this.options.toggleEvent, this.openerClickHandler);
		},
		isOpened: function() {
			return this.container.hasClass(this.options.menuActiveClass);
		},
		show: function() {
			this.container.addClass(this.options.menuActiveClass);
			if (this.options.hideOnClickOutside) {
				this.page.on(this.options.outsideClickEvent, this.outsideClickHandler);
			}
		},
		hide: function() {
			this.container.removeClass(this.options.menuActiveClass);
			if (this.options.hideOnClickOutside) {
				this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
			}
		},
		toggle: function() {
			if (this.isOpened()) {
				this.hide();
			} else {
				this.show();
			}
		},
		destroy: function() {
			this.container.removeClass(this.options.menuActiveClass);
			this.opener.off(this.options.toggleEvent, this.clickHandler);
			this.page.off(this.options.outsideClickEvent, this.outsideClickHandler);
		}
	};

	var activateResizeHandler = function() {
		var win = $(window),
		doc = $('html'),
		resizeClass = 'resize-active',
		flag, timer;
		var removeClassHandler = function() {
			flag = false;
			doc.removeClass(resizeClass);
		};
		var resizeHandler = function() {
			if (!flag) {
				flag = true;
				doc.addClass(resizeClass);
			}
			clearTimeout(timer);
			timer = setTimeout(removeClassHandler, 500);
		};
		win.on('resize orientationchange', resizeHandler);
	};

	$.fn.mobileNav = function(options) {
		return this.each(function() {
			var params = $.extend({}, options, {
				container: this
			}),
			instance = new MobileNav(params);
			$.data(this, 'MobileNav', instance);
		});
	};
}(jQuery));

/* Modernizr 2.6.2 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-csstransforms3d-csstransitions-touch-shiv-cssclasses-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function z(a){j.cssText=a}function A(a,b){return z(m.join(a+";")+(b||""))}function B(a,b){return typeof a===b}function C(a,b){return!!~(""+a).indexOf(b)}function D(a,b){for(var d in a){var e=a[d];if(!C(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function E(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:B(f,"function")?f.bind(d||b):f}return!1}function F(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+o.join(d+" ")+d).split(" ");return B(b,"string")||B(b,"undefined")?D(e,b):(e=(a+" "+p.join(d+" ")+d).split(" "),E(e,b,c))}var d="2.6.2",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k,l={}.toString,m=" -webkit- -moz- -o- -ms- ".split(" "),n="Webkit Moz O ms",o=n.split(" "),p=n.toLowerCase().split(" "),q={},r={},s={},t=[],u=t.slice,v,w=function(a,c,d,e){var f,i,j,k,l=b.createElement("div"),m=b.body,n=m||b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),l.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),l.id=h,(m?l:n).innerHTML+=f,n.appendChild(l),m||(n.style.background="",n.style.overflow="hidden",k=g.style.overflow,g.style.overflow="hidden",g.appendChild(n)),i=c(l,a),m?l.parentNode.removeChild(l):(n.parentNode.removeChild(n),g.style.overflow=k),!!i},x={}.hasOwnProperty,y;!B(x,"undefined")&&!B(x.call,"undefined")?y=function(a,b){return x.call(a,b)}:y=function(a,b){return b in a&&B(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=u.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(u.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(u.call(arguments)))};return e}),q.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:w(["@media (",m.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},q.csstransforms3d=function(){var a=!!F("perspective");return a&&"webkitPerspective"in g.style&&w("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},q.csstransitions=function(){return F("transition")};for(var G in q)y(q,G)&&(v=G.toLowerCase(),e[v]=q[G](),t.push((e[v]?"":"no-")+v));return e.addTest=function(a,b){if(typeof a=="object")for(var d in a)y(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,typeof f!="undefined"&&f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},z(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=m,e._domPrefixes=p,e._cssomPrefixes=o,e.testProp=function(a){return D([a])},e.testAllProps=F,e.testStyles=w,e.prefixed=function(a,b,c){return b?F(a,b,c):F(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+t.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return"[object Function]"==o.call(a)}function e(a){return"string"==typeof a}function f(){}function g(a){return!a||"loaded"==a||"complete"==a||"uninitialized"==a}function h(){var a=p.shift();q=1,a?a.t?m(function(){("c"==a.t?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){"img"!=a&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l=b.createElement(a),o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};1===y[c]&&(r=1,y[c]=[]),"object"==a?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),"img"!=a&&(r||2===y[c]?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i("c"==b?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),1==p.length&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&"[object Opera]"==o.call(a.opera),l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return"[object Array]"==o.call(a)},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,h){var i=b(a),j=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]),i.instead?i.instead(a,e,f,g,h):(y[i.url]?i.noexec=!0:y[i.url]=1,f.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":c,i.noexec,i.attrs,i.timeout),(d(e)||d(j))&&f.load(function(){k(),e&&e(i.origUrl,h,g),j&&j(i.origUrl,h,g),y[i.url]=2})))}function h(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var i,j,l=this.yepnope.loader;if(e(a))g(a,0,l,0);else if(w(a))for(i=0;i<a.length;i++)j=a[i],e(j)?g(j,0,l,0):w(j)?B(j):Object(j)===j&&h(j,l);else Object(a)===a&&h(a,l)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,null==b.readyState&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

/*
 * cond - v0.1 - 6/10/2009
 * http://benalman.com/projects/jquery-cond-plugin/
 *
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Licensed under the MIT license
 * http://benalman.com/about/license/
 *
 * Based on suggestions and sample code by Stephen Band and DBJDBJ in the
 * jquery-dev Google group: http://bit.ly/jqba1
 */
(function($){$.fn.cond=function(){var e,a=arguments,b=0,f,d,c;while(!f&&b<a.length){f=a[b++];d=a[b++];f=$.isFunction(f)?f.call(this):f;c=!d?f:f?d.call(this,f):e}return c!==e?c:this}})(jQuery);

/**
 * jquery.slitslider.js v1.1.0
 * http://www.codrops.com
 *
 * Licensed under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
 *
 * Copyright 2012, Codrops
 * http://www.codrops.com
 */

;( function( $, window, undefined ) {

	'use strict';

	/*
	* debouncedresize: special jQuery event that happens once after a window resize
	*
	* latest version and complete README available on Github:
	* https://github.com/louisremi/jquery-smartresize/blob/master/jquery.debouncedresize.js
	*
	* Copyright 2011 @louis_remi
	* Licensed under the MIT license.
	*/
	var $event = $.event,
	$special,
	resizeTimeout;

	$special = $event.special.debouncedresize = {
		setup: function() {
			$( this ).on( "resize", $special.handler );
		},
		teardown: function() {
			$( this ).off( "resize", $special.handler );
		},
		handler: function( event, execAsap ) {
			// Save the context
			var context = this,
				args = arguments,
				dispatch = function() {
					// set correct event type
					event.type = "debouncedresize";
					$event.dispatch.apply( context, args );
				};

			if ( resizeTimeout ) {
				clearTimeout( resizeTimeout );
			}

			execAsap ?
				dispatch() :
				resizeTimeout = setTimeout( dispatch, $special.threshold );
		},
		threshold: 20
	};

	// global
	var $window = $( window ),
		$document = $( document ),
		Modernizr = window.Modernizr;

	$.Slitslider = function( options, element ) {

		this.$elWrapper = $( element );
		this._init( options );

	};

	$.Slitslider.defaults = {
		// transitions speed
		speed : 800,
		// if true the item's slices will also animate the opacity value
		optOpacity : false,
		// amount (%) to translate both slices - adjust as necessary
		translateFactor : 230,
		// maximum possible angle
		maxAngle : 25,
		// maximum possible scale
		maxScale : 2,
		// slideshow on / off
		autoplay : false,
		// keyboard navigation
		keyboard : true,
		// time between transitions
		interval : 4000,
		// callbacks
		onBeforeChange : function( slide, idx ) { return false; },
		onAfterChange : function( slide, idx ) { return false; }
	};

	$.Slitslider.prototype = {

		_init : function( options ) {

			// options
			this.options = $.extend( true, {}, $.Slitslider.defaults, options );

			// https://github.com/twitter/bootstrap/issues/2870
			this.transEndEventNames = {
				'WebkitTransition' : 'webkitTransitionEnd',
				'MozTransition' : 'transitionend',
				'OTransition' : 'oTransitionEnd',
				'msTransition' : 'MSTransitionEnd',
				'transition' : 'transitionend'
			};
			this.transEndEventName = this.transEndEventNames[ Modernizr.prefixed( 'transition' ) ];
			// suport for css 3d transforms and css transitions
			this.support = Modernizr.csstransitions && Modernizr.csstransforms3d;
			// the slider
			this.$el = this.$elWrapper.children( '.sl-slider' );
			// the slides
			this.$slides = this.$el.children( '.sl-slide' ).hide();
			// total slides
			this.slidesCount = this.$slides.length;
			// current slide
			this.current = 0;
			// control if it's animating
			this.isAnimating = false;
			// get container size
			this._getSize();
			// layout
			this._layout();
			// load some events
			this._loadEvents();
			// slideshow
			if( this.options.autoplay ) {

				this._startSlideshow();

			}

		},
		// gets the current container width & height
		_getSize : function() {

			this.size = {
				width : this.$elWrapper.outerWidth( true ),
				height : this.$elWrapper.outerHeight( true )
			};

		},
		_layout : function() {

			this.$slideWrapper = $( '<div class="sl-slides-wrapper" />' );

			// wrap the slides
			this.$slides.wrapAll( this.$slideWrapper ).each( function( i ) {

				var $slide = $( this ),
					// vertical || horizontal
					orientation = $slide.data( 'orientation' );

				$slide.addClass( 'sl-slide-' + orientation )
					  .children()
					  .wrapAll( '<div class="sl-content-wrapper" />' )
					  .wrapAll( '<div class="sl-content" />' );

			} );

			// set the right size of the slider/slides for the current window size
			this._setSize();
			// show first slide
			this.$slides.eq( this.current ).show();

		},
		_navigate : function( dir, pos ) {

			if( this.isAnimating || this.slidesCount < 2 ) {

				return false;

			}

			this.isAnimating = true;

			var self = this,
				$currentSlide = this.$slides.eq( this.current );

			// if position is passed
			if( pos !== undefined ) {

				this.current = pos;

			}
			// if not check the boundaries
			else if( dir === 'next' ) {

				this.current = this.current < this.slidesCount - 1 ? ++this.current : 0;

			}
			else if( dir === 'prev' ) {

				this.current = this.current > 0 ? --this.current : this.slidesCount - 1;

			}

			this.options.onBeforeChange( $currentSlide, this.current );

			// next slide to be shown
			var $nextSlide = this.$slides.eq( this.current ),
				// the slide we want to cut and animate
				$movingSlide = ( dir === 'next' ) ? $currentSlide : $nextSlide,

				// the following are the data attrs set for each slide
				configData = $movingSlide.data(),
				config = {};

			config.orientation = configData.orientation || 'horizontal',
			config.slice1angle = configData.slice1Rotation || 0,
			config.slice1scale = configData.slice1Scale || 1,
			config.slice2angle = configData.slice2Rotation || 0,
			config.slice2scale = configData.slice2Scale || 1;

			this._validateValues( config );

			var cssStyle = config.orientation === 'horizontal' ? {
					marginTop : -this.size.height / 2
				} : {
					marginLeft : -this.size.width / 2
				},
				// default slide's slices style
				resetStyle = {
					'transform' : 'translate(0%,0%) rotate(0deg) scale(1)',
					opacity : 1
				},
				// slice1 style
				slice1Style	= config.orientation === 'horizontal' ? {
					'transform' : 'translateY(-' + this.options.translateFactor + '%) rotate(' + config.slice1angle + 'deg) scale(' + config.slice1scale + ')'
				} : {
					'transform' : 'translateX(-' + this.options.translateFactor + '%) rotate(' + config.slice1angle + 'deg) scale(' + config.slice1scale + ')'
				},
				// slice2 style
				slice2Style	= config.orientation === 'horizontal' ? {
					'transform' : 'translateY(' + this.options.translateFactor + '%) rotate(' + config.slice2angle + 'deg) scale(' + config.slice2scale + ')'
				} : {
					'transform' : 'translateX(' + this.options.translateFactor + '%) rotate(' + config.slice2angle + 'deg) scale(' + config.slice2scale + ')'
				};

			if( this.options.optOpacity ) {

				slice1Style.opacity = 0;
				slice2Style.opacity = 0;

			}

			// we are adding the classes sl-trans-elems and sl-trans-back-elems to the slide that is either coming "next"
			// or going "prev" according to the direction.
			// the idea is to make it more interesting by giving some animations to the respective slide's elements
			//( dir === 'next' ) ? $nextSlide.addClass( 'sl-trans-elems' ) : $currentSlide.addClass( 'sl-trans-back-elems' );

			$currentSlide.removeClass( 'sl-trans-elems' );

			var transitionProp = {
				'transition' : 'all ' + this.options.speed + 'ms ease-in-out'
			};

			// add the 2 slices and animate them
			$movingSlide.css( 'z-index', this.slidesCount )
						.find( 'div.sl-content-wrapper' )
						.wrap( $( '<div class="sl-content-slice" />' ).css( transitionProp ) )
						.parent()
						.cond(
							dir === 'prev',
							function() {

								var slice = this;
								this.css( slice1Style );
								setTimeout( function() {

									slice.css( resetStyle );

								}, 50 );

							},
							function() {

								var slice = this;
								setTimeout( function() {

									slice.css( slice1Style );

								}, 50 );

							}
						)
						.clone()
						.appendTo( $movingSlide )
						.cond(
							dir === 'prev',
							function() {

								var slice = this;
								this.css( slice2Style );
								setTimeout( function() {

									$currentSlide.addClass( 'sl-trans-back-elems' );

									if( self.support ) {

										slice.css( resetStyle ).on( self.transEndEventName, function() {

											self._onEndNavigate( slice, $currentSlide, dir );

										} );

									}
									else {

										self._onEndNavigate( slice, $currentSlide, dir );

									}

								}, 50 );

							},
							function() {

								var slice = this;
								setTimeout( function() {

									$nextSlide.addClass( 'sl-trans-elems' );

									if( self.support ) {

										slice.css( slice2Style ).on( self.transEndEventName, function() {

											self._onEndNavigate( slice, $currentSlide, dir );

										} );

									}
									else {

										self._onEndNavigate( slice, $currentSlide, dir );

									}

								}, 50 );

							}
						)
						.find( 'div.sl-content-wrapper' )
						.css( cssStyle );

			$nextSlide.show();

		},
		_validateValues : function( config ) {

			// OK, so we are restricting the angles and scale values here.
			// This is to avoid the slices wrong sides to be shown.
			// you can adjust these values as you wish but make sure you also ajust the
			// paddings of the slides and also the options.translateFactor value and scale data attrs
			if( config.slice1angle > this.options.maxAngle || config.slice1angle < -this.options.maxAngle ) {

				config.slice1angle = this.options.maxAngle;

			}
			if( config.slice2angle > this.options.maxAngle  || config.slice2angle < -this.options.maxAngle ) {

				config.slice2angle = this.options.maxAngle;

			}
			if( config.slice1scale > this.options.maxScale || config.slice1scale <= 0 ) {

				config.slice1scale = this.options.maxScale;

			}
			if( config.slice2scale > this.options.maxScale || config.slice2scale <= 0 ) {

				config.slice2scale = this.options.maxScale;

			}
			if( config.orientation !== 'vertical' && config.orientation !== 'horizontal' ) {

				config.orientation = 'horizontal'

			}

		},
		_onEndNavigate : function( $slice, $oldSlide, dir ) {

			// reset previous slide's style after next slide is shown
			var $slide = $slice.parent(),
				removeClasses = 'sl-trans-elems sl-trans-back-elems';

			// remove second slide's slice
			$slice.remove();
			// unwrap..
			$slide.css( 'z-index', 1 )
				  .find( 'div.sl-content-wrapper' )
				  .unwrap();

			// hide previous current slide
			$oldSlide.hide().removeClass( removeClasses );
			$slide.removeClass( removeClasses );
			// now we can navigate again..
			this.isAnimating = false;
			this.options.onAfterChange( $slide, this.current );

		},
		_setSize : function() {

			// the slider and content wrappers will have the window's width and height
			var cssStyle = {
				width : this.size.width,
				height : this.size.height
			};

			this.$el.css( cssStyle ).find( 'div.sl-content-wrapper' ).css( cssStyle );

		},
		_loadEvents : function() {

			var self = this;

			$window.on( 'debouncedresize.slitslider', function( event ) {

				// update size values
				self._getSize();
				// set the sizes again
				self._setSize();

			} );

			if ( this.options.keyboard ) {

				$document.on( 'keydown.slitslider', function(e) {

					var keyCode = e.keyCode || e.which,
						arrow = {
							left: 37,
							up: 38,
							right: 39,
							down: 40
						};

					switch (keyCode) {

						case arrow.left :

							self._stopSlideshow();
							self._navigate( 'prev' );
							break;

						case arrow.right :

							self._stopSlideshow();
							self._navigate( 'next' );
							break;

					}

				} );

			}

		},
		_startSlideshow: function() {

			var self = this;

			this.slideshow = setTimeout( function() {

				self._navigate( 'next' );

				if ( self.options.autoplay ) {

					self._startSlideshow();

				}

			}, this.options.interval );

		},
		_stopSlideshow: function() {

			if ( this.options.autoplay ) {

				clearTimeout( this.slideshow );
				this.isPlaying = false;
				this.options.autoplay = false;

			}

		},
		_destroy : function( callback ) {

			this.$el.off( '.slitslider' ).removeData( 'slitslider' );
			$window.off( '.slitslider' );
			$document.off( '.slitslider' );
			this.$slides.each( function( i ) {

				var $slide = $( this ),
					$content = $slide.find( 'div.sl-content' ).children();

				$content.appendTo( $slide );
				$slide.children( 'div.sl-content-wrapper' ).remove();

			} );
			this.$slides.unwrap( this.$slideWrapper ).hide();
			this.$slides.eq( 0 ).show();
			if( callback ) {

				callback.call();

			}

		},
		// public methos: adds more slides to the slider
		add : function( $slides, callback ) {

			this.$slides = this.$slides.add( $slides );

			var self = this;


			$slides.each( function( i ) {

				var $slide = $( this ),
					// vertical || horizontal
					orientation = $slide.data( 'orientation' );

				$slide.hide().addClass( 'sl-slide-' + orientation )
					  .children()
					  .wrapAll( '<div class="sl-content-wrapper" />' )
					  .wrapAll( '<div class="sl-content" />' )
					  .end()
					  .appendTo( self.$el.find( 'div.sl-slides-wrapper' ) );

			} );

			this._setSize();

			this.slidesCount = this.$slides.length;

			if ( callback ) {

				callback.call( $items );

			}

		},
		// public method: shows next slide
		next : function() {

			this._stopSlideshow();
			this._navigate( 'next' );

		},
		// public method: shows previous slide
		previous : function() {

			this._stopSlideshow();
			this._navigate( 'prev' );

		},
		// public method: goes to a specific slide
		jump : function( pos ) {

			pos -= 1;

			if( pos === this.current || pos >= this.slidesCount || pos < 0 ) {

				return false;

			}

			this._stopSlideshow();
			this._navigate( pos > this.current ? 'next' : 'prev', pos );

		},
		// public method: starts the slideshow
		// any call to next(), previous() or jump() will stop the slideshow
		play : function() {

			if( !this.isPlaying ) {

				this.isPlaying = true;

				this._navigate( 'next' );
				this.options.autoplay = true;
				this._startSlideshow();

			}

		},
		// public method: pauses the slideshow
		pause : function() {

			if( this.isPlaying ) {

				this._stopSlideshow();

			}

		},
		// public method: check if isAnimating is true
		isActive : function() {

			return this.isAnimating;

		},
		// publicc methos: destroys the slicebox instance
		destroy : function( callback ) {

			this._destroy( callback );

		}

	};

	var logError = function( message ) {

		if ( window.console ) {

			window.console.error( message );

		}

	};

	$.fn.slitslider = function( options ) {

		var self = $.data( this, 'slitslider' );

		if ( typeof options === 'string' ) {

			var args = Array.prototype.slice.call( arguments, 1 );

			this.each(function() {

				if ( !self ) {

					logError( "cannot call methods on slitslider prior to initialization; " +
					"attempted to call method '" + options + "'" );
					return;

				}

				if ( !$.isFunction( self[options] ) || options.charAt(0) === "_" ) {

					logError( "no such method '" + options + "' for slitslider self" );
					return;

				}

				self[ options ].apply( self, args );

			});

		}
		else {

			this.each(function() {

				if ( self ) {

					self._init();

				}
				else {

					self = $.data( this, 'slitslider', new $.Slitslider( options, this ) );

				}

			});

		}

		return self;

	};

} )( jQuery, window );
