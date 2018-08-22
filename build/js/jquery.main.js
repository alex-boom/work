// page init
jQuery(function() {
	initMobileNav();
	initAccordion();
	initTouchNav();
	initDropDownClasses();
	initSlitSlider();
	initMixItUp();
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

}

function initMixItUp() {
	jQuery('.block-portfolio').mixItUp({

		selectors: {
			target: '.portfolio-item',
			filter: '.filter',
			sort: '.sort-btn'
		},

		layout: {
			display: "inline-block"
		},

		animation: {
			animateResizeContainer: false,
			effects: 'fade scale'
		},

		loadmore: {
			initial: 11,
			loadMore: 5,
			buttonWrapper: ".loadmore",
			buttonClass: "loadmore-button",
			buttonLabel: "Load more",
			lessClass: "loadmore-less",
			lessLabel: "Reset"
		}
	});
}

function initMixitupLoadmore() {

	jQuery(".example").mixItUp({
		selectors: {
          target: ".example-item" // As in mixitup
        },
        layout: {
          display: "inline-block" // As in mixitup
        },
        loadmore: {
          // The number of items to start with
          initial: 4,
          // The number of items to load on click on the loadmore button
          loadMore: 2,
          // A selector string for the existing wrapper the buttons will be inserted into
          buttonWrapper: ".loadmore",
          // The class of the Load more button
          buttonClass: "loadmore-button",
          // The label of the Load more button
          buttonLabel: "Load more",
          // The class of the less button
          lessClass: "loadmore-less",
          // The label of the less button
          lessLabel: "Reset"
        }
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


/**!
 * MixItUp v2.1.11
 *
 * @copyright Copyright 2015 KunkaLabs Limited.
 * @author    KunkaLabs Limited.
 * @link      https://mixitup.kunkalabs.com
 *
 * @license   Commercial use requires a commercial license.
 *            https://mixitup.kunkalabs.com/licenses/
 *
 *            Non-commercial use permitted under terms of CC-BY-NC license.
 *            http://creativecommons.org/licenses/by-nc/3.0/
 */
 !function(a,b){"use strict";a.MixItUp=function(){var b=this;b._execAction("_constructor",0),a.extend(b,{selectors:{target:".mix",filter:".filter",sort:".sort"},animation:{enable:!0,effects:"fade scale",duration:600,easing:"ease",perspectiveDistance:"3000",perspectiveOrigin:"50% 50%",queue:!0,queueLimit:1,animateChangeLayout:!1,animateResizeContainer:!0,animateResizeTargets:!1,staggerSequence:!1,reverseOut:!1},callbacks:{onMixLoad:!1,onMixStart:!1,onMixBusy:!1,onMixEnd:!1,onMixFail:!1,_user:!1},controls:{enable:!0,live:!1,toggleFilterButtons:!1,toggleLogic:"or",activeClass:"active"},layout:{display:"inline-block",containerClass:"",containerClassFail:"fail"},load:{filter:"all",sort:!1},_$body:null,_$container:null,_$targets:null,_$parent:null,_$sortButtons:null,_$filterButtons:null,_suckMode:!1,_mixing:!1,_sorting:!1,_clicking:!1,_loading:!0,_changingLayout:!1,_changingClass:!1,_changingDisplay:!1,_origOrder:[],_startOrder:[],_newOrder:[],_activeFilter:null,_toggleArray:[],_toggleString:"",_activeSort:"default:asc",_newSort:null,_startHeight:null,_newHeight:null,_incPadding:!0,_newDisplay:null,_newClass:null,_targetsBound:0,_targetsDone:0,_queue:[],_$show:a(),_$hide:a()}),b._execAction("_constructor",1)},a.MixItUp.prototype={constructor:a.MixItUp,_instances:{},_handled:{_filter:{},_sort:{}},_bound:{_filter:{},_sort:{}},_actions:{},_filters:{},extend:function(b){for(var c in b)a.MixItUp.prototype[c]=b[c]},addAction:function(b,c,d,e){a.MixItUp.prototype._addHook("_actions",b,c,d,e)},addFilter:function(b,c,d,e){a.MixItUp.prototype._addHook("_filters",b,c,d,e)},_addHook:function(b,c,d,e,f){var g=a.MixItUp.prototype[b],h={};f=1===f||"post"===f?"post":"pre",h[c]={},h[c][f]={},h[c][f][d]=e,a.extend(!0,g,h)},_init:function(b,c){var d=this;if(d._execAction("_init",0,arguments),c&&a.extend(!0,d,c),d._$body=a("body"),d._domNode=b,d._$container=a(b),d._$container.addClass(d.layout.containerClass),d._id=b.id,d._platformDetect(),d._brake=d._getPrefixedCSS("transition","none"),d._refresh(!0),d._$parent=d._$targets.parent().length?d._$targets.parent():d._$container,d.load.sort&&(d._newSort=d._parseSort(d.load.sort),d._newSortString=d.load.sort,d._activeSort=d.load.sort,d._sort(),d._printSort()),d._activeFilter="all"===d.load.filter?d.selectors.target:"none"===d.load.filter?"":d.load.filter,d.controls.enable&&d._bindHandlers(),d.controls.toggleFilterButtons){d._buildToggleArray();for(var e=0;e<d._toggleArray.length;e++)d._updateControls({filter:d._toggleArray[e],sort:d._activeSort},!0)}else d.controls.enable&&d._updateControls({filter:d._activeFilter,sort:d._activeSort});d._filter(),d._init=!0,d._$container.data("mixItUp",d),d._execAction("_init",1,arguments),d._buildState(),d._$targets.css(d._brake),d._goMix(d.animation.enable)},_platformDetect:function(){var a=this,c=["Webkit","Moz","O","ms"],d=["webkit","moz"],e=window.navigator.appVersion.match(/Chrome\/(\d+)\./)||!1,f="undefined"!=typeof InstallTrigger,g=function(a){for(var b=0;b<c.length;b++)if(c[b]+"Transition"in a.style)return{prefix:"-"+c[b].toLowerCase()+"-",vendor:c[b]};return"transition"in a.style?"":!1},h=g(a._domNode);a._execAction("_platformDetect",0),a._chrome=e?parseInt(e[1],10):!1,a._ff=f?parseInt(window.navigator.userAgent.match(/rv:([^)]+)\)/)[1]):!1,a._prefix=h.prefix,a._vendor=h.vendor,a._suckMode=window.atob&&a._prefix?!1:!0,a._suckMode&&(a.animation.enable=!1),a._ff&&a._ff<=4&&(a.animation.enable=!1);for(var i=0;i<d.length&&!window.requestAnimationFrame;i++)window.requestAnimationFrame=window[d[i]+"RequestAnimationFrame"];"function"!=typeof Object.getPrototypeOf&&("object"==typeof"test".__proto__?Object.getPrototypeOf=function(a){return a.__proto__}:Object.getPrototypeOf=function(a){return a.constructor.prototype}),a._domNode.nextElementSibling===b&&Object.defineProperty(Element.prototype,"nextElementSibling",{get:function(){for(var a=this.nextSibling;a;){if(1===a.nodeType)return a;a=a.nextSibling}return null}}),a._execAction("_platformDetect",1)},_refresh:function(a,c){var d=this;d._execAction("_refresh",0,arguments),d._$targets=d._$container.find(d.selectors.target);for(var e=0;e<d._$targets.length;e++){var f=d._$targets[e];if(f.dataset===b||c){f.dataset={};for(var g=0;g<f.attributes.length;g++){var h=f.attributes[g],i=h.name,j=h.value;if(i.indexOf("data-")>-1){var k=d._helpers._camelCase(i.substring(5,i.length));f.dataset[k]=j}}}f.mixParent===b&&(f.mixParent=d._id)}if(d._$targets.length&&a||!d._origOrder.length&&d._$targets.length){d._origOrder=[];for(var e=0;e<d._$targets.length;e++){var f=d._$targets[e];d._origOrder.push(f)}}d._execAction("_refresh",1,arguments)},_bindHandlers:function(){var c=this,d=a.MixItUp.prototype._bound._filter,e=a.MixItUp.prototype._bound._sort;c._execAction("_bindHandlers",0),c.controls.live?c._$body.on("click.mixItUp."+c._id,c.selectors.sort,function(){c._processClick(a(this),"sort")}).on("click.mixItUp."+c._id,c.selectors.filter,function(){c._processClick(a(this),"filter")}):(c._$sortButtons=a(c.selectors.sort),c._$filterButtons=a(c.selectors.filter),c._$sortButtons.on("click.mixItUp."+c._id,function(){c._processClick(a(this),"sort")}),c._$filterButtons.on("click.mixItUp."+c._id,function(){c._processClick(a(this),"filter")})),d[c.selectors.filter]=d[c.selectors.filter]===b?1:d[c.selectors.filter]+1,e[c.selectors.sort]=e[c.selectors.sort]===b?1:e[c.selectors.sort]+1,c._execAction("_bindHandlers",1)},_processClick:function(c,d){var e=this,f=function(c,d,f){var g=a.MixItUp.prototype;g._handled["_"+d][e.selectors[d]]=g._handled["_"+d][e.selectors[d]]===b?1:g._handled["_"+d][e.selectors[d]]+1,g._handled["_"+d][e.selectors[d]]===g._bound["_"+d][e.selectors[d]]&&(c[(f?"remove":"add")+"Class"](e.controls.activeClass),delete g._handled["_"+d][e.selectors[d]])};if(e._execAction("_processClick",0,arguments),!e._mixing||e.animation.queue&&e._queue.length<e.animation.queueLimit){if(e._clicking=!0,"sort"===d){var g=c.attr("data-sort");(!c.hasClass(e.controls.activeClass)||g.indexOf("random")>-1)&&(a(e.selectors.sort).removeClass(e.controls.activeClass),f(c,d),e.sort(g))}if("filter"===d){var h,i=c.attr("data-filter"),j="or"===e.controls.toggleLogic?",":"";e.controls.toggleFilterButtons?(e._buildToggleArray(),c.hasClass(e.controls.activeClass)?(f(c,d,!0),h=e._toggleArray.indexOf(i),e._toggleArray.splice(h,1)):(f(c,d),e._toggleArray.push(i)),e._toggleArray=a.grep(e._toggleArray,function(a){return a}),e._toggleString=e._toggleArray.join(j),e.filter(e._toggleString)):c.hasClass(e.controls.activeClass)||(a(e.selectors.filter).removeClass(e.controls.activeClass),f(c,d),e.filter(i))}e._execAction("_processClick",1,arguments)}else"function"==typeof e.callbacks.onMixBusy&&e.callbacks.onMixBusy.call(e._domNode,e._state,e),e._execAction("_processClickBusy",1,arguments)},_buildToggleArray:function(){var a=this,b=a._activeFilter.replace(/\s/g,"");if(a._execAction("_buildToggleArray",0,arguments),"or"===a.controls.toggleLogic)a._toggleArray=b.split(",");else{a._toggleArray=b.split("."),!a._toggleArray[0]&&a._toggleArray.shift();for(var c,d=0;c=a._toggleArray[d];d++)a._toggleArray[d]="."+c}a._execAction("_buildToggleArray",1,arguments)},_updateControls:function(c,d){var e=this,f={filter:c.filter,sort:c.sort},g=function(a,b){try{d&&"filter"===h&&"none"!==f.filter&&""!==f.filter?a.filter(b).addClass(e.controls.activeClass):a.removeClass(e.controls.activeClass).filter(b).addClass(e.controls.activeClass)}catch(c){}},h="filter",i=null;e._execAction("_updateControls",0,arguments),c.filter===b&&(f.filter=e._activeFilter),c.sort===b&&(f.sort=e._activeSort),f.filter===e.selectors.target&&(f.filter="all");for(var j=0;2>j;j++)i=e.controls.live?a(e.selectors[h]):e["_$"+h+"Buttons"],i&&g(i,"[data-"+h+'="'+f[h]+'"]'),h="sort";e._execAction("_updateControls",1,arguments)},_filter:function(){var b=this;b._execAction("_filter",0);for(var c=0;c<b._$targets.length;c++){var d=a(b._$targets[c]);d.is(b._activeFilter)?b._$show=b._$show.add(d):b._$hide=b._$hide.add(d)}b._execAction("_filter",1)},_sort:function(){var a=this,b=function(a){for(var b=a.slice(),c=b.length,d=c;d--;){var e=parseInt(Math.random()*c),f=b[d];b[d]=b[e],b[e]=f}return b};a._execAction("_sort",0),a._startOrder=[];for(var c=0;c<a._$targets.length;c++){var d=a._$targets[c];a._startOrder.push(d)}switch(a._newSort[0].sortBy){case"default":a._newOrder=a._origOrder;break;case"random":a._newOrder=b(a._startOrder);break;case"custom":a._newOrder=a._newSort[0].order;break;default:a._newOrder=a._startOrder.concat().sort(function(b,c){return a._compare(b,c)})}a._execAction("_sort",1)},_compare:function(a,b,c){c=c?c:0;var d=this,e=d._newSort[c].order,f=function(a){return a.dataset[d._newSort[c].sortBy]||0},g=isNaN(1*f(a))?f(a).toLowerCase():1*f(a),h=isNaN(1*f(b))?f(b).toLowerCase():1*f(b);return h>g?"asc"===e?-1:1:g>h?"asc"===e?1:-1:g===h&&d._newSort.length>c+1?d._compare(a,b,c+1):0},_printSort:function(a){var b=this,c=a?b._startOrder:b._newOrder,d=b._$parent[0].querySelectorAll(b.selectors.target),e=d.length?d[d.length-1].nextElementSibling:null,f=document.createDocumentFragment();b._execAction("_printSort",0,arguments);for(var g=0;g<d.length;g++){var h=d[g],i=h.nextSibling;"absolute"!==h.style.position&&(i&&"#text"===i.nodeName&&b._$parent[0].removeChild(i),b._$parent[0].removeChild(h))}for(var g=0;g<c.length;g++){var j=c[g];if("default"!==b._newSort[0].sortBy||"desc"!==b._newSort[0].order||a)f.appendChild(j),f.appendChild(document.createTextNode(" "));else{var k=f.firstChild;f.insertBefore(j,k),f.insertBefore(document.createTextNode(" "),j)}}e?b._$parent[0].insertBefore(f,e):b._$parent[0].appendChild(f),b._execAction("_printSort",1,arguments)},_parseSort:function(a){for(var b=this,c="string"==typeof a?a.split(" "):[a],d=[],e=0;e<c.length;e++){var f="string"==typeof a?c[e].split(":"):["custom",c[e]],g={sortBy:b._helpers._camelCase(f[0]),order:f[1]||"asc"};if(d.push(g),"default"===g.sortBy||"random"===g.sortBy)break}return b._execFilter("_parseSort",d,arguments)},_parseEffects:function(){var a=this,b={opacity:"",transformIn:"",transformOut:"",filter:""},c=function(b,c,d){if(a.animation.effects.indexOf(b)>-1){if(c){var e=a.animation.effects.indexOf(b+"(");if(e>-1){var f=a.animation.effects.substring(e),g=/\(([^)]+)\)/.exec(f),h=g[1];return{val:h}}}return!0}return!1},d=function(a,b){return b?"-"===a.charAt(0)?a.substr(1,a.length):"-"+a:a},e=function(a,e){for(var f=[["scale",".01"],["translateX","20px"],["translateY","20px"],["translateZ","20px"],["rotateX","90deg"],["rotateY","90deg"],["rotateZ","180deg"]],g=0;g<f.length;g++){var h=f[g][0],i=f[g][1],j=e&&"scale"!==h;b[a]+=c(h)?h+"("+d(c(h,!0).val||i,j)+") ":""}};return b.opacity=c("fade")?c("fade",!0).val||"0":"1",e("transformIn"),a.animation.reverseOut?e("transformOut",!0):b.transformOut=b.transformIn,b.transition={},b.transition=a._getPrefixedCSS("transition","all "+a.animation.duration+"ms "+a.animation.easing+", opacity "+a.animation.duration+"ms linear"),a.animation.stagger=c("stagger")?!0:!1,a.animation.staggerDuration=parseInt(c("stagger")&&c("stagger",!0).val?c("stagger",!0).val:100),a._execFilter("_parseEffects",b)},_buildState:function(a){var b=this,c={};return b._execAction("_buildState",0),c={activeFilter:""===b._activeFilter?"none":b._activeFilter,activeSort:a&&b._newSortString?b._newSortString:b._activeSort,fail:!b._$show.length&&""!==b._activeFilter,$targets:b._$targets,$show:b._$show,$hide:b._$hide,totalTargets:b._$targets.length,totalShow:b._$show.length,totalHide:b._$hide.length,display:a&&b._newDisplay?b._newDisplay:b.layout.display},a?b._execFilter("_buildState",c):(b._state=c,void b._execAction("_buildState",1))},_goMix:function(a){var b=this,c=function(){b._chrome&&31===b._chrome&&f(b._$parent[0]),b._setInter(),d()},d=function(){var a=window.pageYOffset,c=window.pageXOffset;document.documentElement.scrollHeight;b._getInterMixData(),b._setFinal(),b._getFinalMixData(),window.pageYOffset!==a&&window.scrollTo(c,a),b._prepTargets(),window.requestAnimationFrame?requestAnimationFrame(e):setTimeout(function(){e()},20)},e=function(){b._animateTargets(),0===b._targetsBound&&b._cleanUp()},f=function(a){var b=a.parentElement,c=document.createElement("div"),d=document.createDocumentFragment();b.insertBefore(c,a),d.appendChild(a),b.replaceChild(a,c)},g=b._buildState(!0);b._execAction("_goMix",0,arguments),!b.animation.duration&&(a=!1),b._mixing=!0,b._$container.removeClass(b.layout.containerClassFail),"function"==typeof b.callbacks.onMixStart&&b.callbacks.onMixStart.call(b._domNode,b._state,g,b),b._$container.trigger("mixStart",[b._state,g,b]),b._getOrigMixData(),a&&!b._suckMode?window.requestAnimationFrame?requestAnimationFrame(c):c():b._cleanUp(),b._execAction("_goMix",1,arguments)},_getTargetData:function(a,b){var c,d=this;a.dataset[b+"PosX"]=a.offsetLeft,a.dataset[b+"PosY"]=a.offsetTop,d.animation.animateResizeTargets&&(c=d._suckMode?{marginBottom:"",marginRight:""}:window.getComputedStyle(a),a.dataset[b+"MarginBottom"]=parseInt(c.marginBottom),a.dataset[b+"MarginRight"]=parseInt(c.marginRight),a.dataset[b+"Width"]=a.offsetWidth,a.dataset[b+"Height"]=a.offsetHeight)},_getOrigMixData:function(){var a=this,b=a._suckMode?{boxSizing:""}:window.getComputedStyle(a._$parent[0]),c=b.boxSizing||b[a._vendor+"BoxSizing"];a._incPadding="border-box"===c,a._execAction("_getOrigMixData",0),!a._suckMode&&(a.effects=a._parseEffects()),a._$toHide=a._$hide.filter(":visible"),a._$toShow=a._$show.filter(":hidden"),a._$pre=a._$targets.filter(":visible"),a._startHeight=a._incPadding?a._$parent.outerHeight():a._$parent.height();for(var d=0;d<a._$pre.length;d++){var e=a._$pre[d];a._getTargetData(e,"orig")}a._execAction("_getOrigMixData",1)},_setInter:function(){var a=this;a._execAction("_setInter",0),a._changingLayout&&a.animation.animateChangeLayout?(a._$toShow.css("display",a._newDisplay),a._changingClass&&a._$container.removeClass(a.layout.containerClass).addClass(a._newClass)):a._$toShow.css("display",a.layout.display),a._execAction("_setInter",1)},_getInterMixData:function(){var a=this;a._execAction("_getInterMixData",0);for(var b=0;b<a._$toShow.length;b++){var c=a._$toShow[b];a._getTargetData(c,"inter")}for(var b=0;b<a._$pre.length;b++){var c=a._$pre[b];a._getTargetData(c,"inter")}a._execAction("_getInterMixData",1)},_setFinal:function(){var a=this;a._execAction("_setFinal",0),a._sorting&&a._printSort(),a._$toHide.removeStyle("display"),a._changingLayout&&a.animation.animateChangeLayout&&a._$pre.css("display",a._newDisplay),a._execAction("_setFinal",1)},_getFinalMixData:function(){var a=this;a._execAction("_getFinalMixData",0);for(var b=0;b<a._$toShow.length;b++){var c=a._$toShow[b];a._getTargetData(c,"final")}for(var b=0;b<a._$pre.length;b++){var c=a._$pre[b];a._getTargetData(c,"final")}a._newHeight=a._incPadding?a._$parent.outerHeight():a._$parent.height(),a._sorting&&a._printSort(!0),a._$toShow.removeStyle("display"),a._$pre.css("display",a.layout.display),a._changingClass&&a.animation.animateChangeLayout&&a._$container.removeClass(a._newClass).addClass(a.layout.containerClass),a._execAction("_getFinalMixData",1)},_prepTargets:function(){var b=this,c={_in:b._getPrefixedCSS("transform",b.effects.transformIn),_out:b._getPrefixedCSS("transform",b.effects.transformOut)};b._execAction("_prepTargets",0),b.animation.animateResizeContainer&&b._$parent.css("height",b._startHeight+"px");for(var d=0;d<b._$toShow.length;d++){var e=b._$toShow[d],f=a(e);e.style.opacity=b.effects.opacity,e.style.display=b._changingLayout&&b.animation.animateChangeLayout?b._newDisplay:b.layout.display,f.css(c._in),b.animation.animateResizeTargets&&(e.style.width=e.dataset.finalWidth+"px",e.style.height=e.dataset.finalHeight+"px",e.style.marginRight=-(e.dataset.finalWidth-e.dataset.interWidth)+1*e.dataset.finalMarginRight+"px",e.style.marginBottom=-(e.dataset.finalHeight-e.dataset.interHeight)+1*e.dataset.finalMarginBottom+"px")}for(var d=0;d<b._$pre.length;d++){var e=b._$pre[d],f=a(e),g={x:e.dataset.origPosX-e.dataset.interPosX,y:e.dataset.origPosY-e.dataset.interPosY},c=b._getPrefixedCSS("transform","translate("+g.x+"px,"+g.y+"px)");f.css(c),b.animation.animateResizeTargets&&(e.style.width=e.dataset.origWidth+"px",e.style.height=e.dataset.origHeight+"px",e.dataset.origWidth-e.dataset.finalWidth&&(e.style.marginRight=-(e.dataset.origWidth-e.dataset.interWidth)+1*e.dataset.origMarginRight+"px"),e.dataset.origHeight-e.dataset.finalHeight&&(e.style.marginBottom=-(e.dataset.origHeight-e.dataset.interHeight)+1*e.dataset.origMarginBottom+"px"))}b._execAction("_prepTargets",1)},_animateTargets:function(){var b=this;b._execAction("_animateTargets",0),b._targetsDone=0,b._targetsBound=0,b._$parent.css(b._getPrefixedCSS("perspective",b.animation.perspectiveDistance+"px")).css(b._getPrefixedCSS("perspective-origin",b.animation.perspectiveOrigin)),b.animation.animateResizeContainer&&b._$parent.css(b._getPrefixedCSS("transition","height "+b.animation.duration+"ms ease")).css("height",b._newHeight+"px");for(var c=0;c<b._$toShow.length;c++){var d=b._$toShow[c],e=a(d),f={x:d.dataset.finalPosX-d.dataset.interPosX,y:d.dataset.finalPosY-d.dataset.interPosY},g=b._getDelay(c),h={};d.style.opacity="";for(var i=0;2>i;i++){var j=0===i?j=b._prefix:"";b._ff&&b._ff<=20&&(h[j+"transition-property"]="all",h[j+"transition-timing-function"]=b.animation.easing+"ms",h[j+"transition-duration"]=b.animation.duration+"ms"),h[j+"transition-delay"]=g+"ms",h[j+"transform"]="translate("+f.x+"px,"+f.y+"px)"}(b.effects.transform||b.effects.opacity)&&b._bindTargetDone(e),b._ff&&b._ff<=20?e.css(h):e.css(b.effects.transition).css(h)}for(var c=0;c<b._$pre.length;c++){var d=b._$pre[c],e=a(d),f={x:d.dataset.finalPosX-d.dataset.interPosX,y:d.dataset.finalPosY-d.dataset.interPosY},g=b._getDelay(c);(d.dataset.finalPosX!==d.dataset.origPosX||d.dataset.finalPosY!==d.dataset.origPosY)&&b._bindTargetDone(e),e.css(b._getPrefixedCSS("transition","all "+b.animation.duration+"ms "+b.animation.easing+" "+g+"ms")),e.css(b._getPrefixedCSS("transform","translate("+f.x+"px,"+f.y+"px)")),b.animation.animateResizeTargets&&(d.dataset.origWidth-d.dataset.finalWidth&&1*d.dataset.finalWidth&&(d.style.width=d.dataset.finalWidth+"px",d.style.marginRight=-(d.dataset.finalWidth-d.dataset.interWidth)+1*d.dataset.finalMarginRight+"px"),d.dataset.origHeight-d.dataset.finalHeight&&1*d.dataset.finalHeight&&(d.style.height=d.dataset.finalHeight+"px",d.style.marginBottom=-(d.dataset.finalHeight-d.dataset.interHeight)+1*d.dataset.finalMarginBottom+"px"))}b._changingClass&&b._$container.removeClass(b.layout.containerClass).addClass(b._newClass);for(var c=0;c<b._$toHide.length;c++){for(var d=b._$toHide[c],e=a(d),g=b._getDelay(c),k={},i=0;2>i;i++){var j=0===i?j=b._prefix:"";k[j+"transition-delay"]=g+"ms",k[j+"transform"]=b.effects.transformOut,k.opacity=b.effects.opacity}e.css(b.effects.transition).css(k),(b.effects.transform||b.effects.opacity)&&b._bindTargetDone(e)}b._execAction("_animateTargets",1)},_bindTargetDone:function(b){var c=this,d=b[0];c._execAction("_bindTargetDone",0,arguments),d.dataset.bound||(d.dataset.bound=!0,c._targetsBound++,b.on("webkitTransitionEnd.mixItUp transitionend.mixItUp",function(e){(e.originalEvent.propertyName.indexOf("transform")>-1||e.originalEvent.propertyName.indexOf("opacity")>-1)&&a(e.originalEvent.target).is(c.selectors.target)&&(b.off(".mixItUp"),d.dataset.bound="",c._targetDone())})),c._execAction("_bindTargetDone",1,arguments)},_targetDone:function(){var a=this;a._execAction("_targetDone",0),a._targetsDone++,a._targetsDone===a._targetsBound&&a._cleanUp(),a._execAction("_targetDone",1)},_cleanUp:function(){var b=this,c=b.animation.animateResizeTargets?"transform opacity width height margin-bottom margin-right":"transform opacity",d=function(){b._$targets.removeStyle("transition",b._prefix)};b._execAction("_cleanUp",0),b._changingLayout?b._$show.css("display",b._newDisplay):b._$show.css("display",b.layout.display),b._$targets.css(b._brake),b._$targets.removeStyle(c,b._prefix).removeAttr("data-inter-pos-x data-inter-pos-y data-final-pos-x data-final-pos-y data-orig-pos-x data-orig-pos-y data-orig-height data-orig-width data-final-height data-final-width data-inter-width data-inter-height data-orig-margin-right data-orig-margin-bottom data-inter-margin-right data-inter-margin-bottom data-final-margin-right data-final-margin-bottom"),b._$hide.removeStyle("display"),b._$parent.removeStyle("height transition perspective-distance perspective perspective-origin-x perspective-origin-y perspective-origin perspectiveOrigin",b._prefix),b._sorting&&(b._printSort(),b._activeSort=b._newSortString,b._sorting=!1),b._changingLayout&&(b._changingDisplay&&(b.layout.display=b._newDisplay,b._changingDisplay=!1),b._changingClass&&(b._$parent.removeClass(b.layout.containerClass).addClass(b._newClass),b.layout.containerClass=b._newClass,b._changingClass=!1),b._changingLayout=!1),b._refresh(),b._buildState(),b._state.fail&&b._$container.addClass(b.layout.containerClassFail),b._$show=a(),b._$hide=a(),window.requestAnimationFrame&&requestAnimationFrame(d),b._mixing=!1,"function"==typeof b.callbacks._user&&b.callbacks._user.call(b._domNode,b._state,b),"function"==typeof b.callbacks.onMixEnd&&b.callbacks.onMixEnd.call(b._domNode,b._state,b),b._$container.trigger("mixEnd",[b._state,b]),b._state.fail&&("function"==typeof b.callbacks.onMixFail&&b.callbacks.onMixFail.call(b._domNode,b._state,b),b._$container.trigger("mixFail",[b._state,b])),b._loading&&("function"==typeof b.callbacks.onMixLoad&&b.callbacks.onMixLoad.call(b._domNode,b._state,b),b._$container.trigger("mixLoad",[b._state,b])),b._queue.length&&(b._execAction("_queue",0),b.multiMix(b._queue[0][0],b._queue[0][1],b._queue[0][2]),b._queue.splice(0,1)),b._execAction("_cleanUp",1),b._loading=!1},_getPrefixedCSS:function(a,b,c){var d=this,e={},f="",g=-1;for(g=0;2>g;g++)f=0===g?d._prefix:"",c?e[f+a]=f+b:e[f+a]=b;return d._execFilter("_getPrefixedCSS",e,arguments)},_getDelay:function(a){var b=this,c="function"==typeof b.animation.staggerSequence?b.animation.staggerSequence.call(b._domNode,a,b._state):a,d=b.animation.stagger?c*b.animation.staggerDuration:0;return b._execFilter("_getDelay",d,arguments)},_parseMultiMixArgs:function(a){for(var b=this,c={command:null,animate:b.animation.enable,callback:null},d=0;d<a.length;d++){var e=a[d];null!==e&&("object"==typeof e||"string"==typeof e?c.command=e:"boolean"==typeof e?c.animate=e:"function"==typeof e&&(c.callback=e))}return b._execFilter("_parseMultiMixArgs",c,arguments)},_parseInsertArgs:function(b){for(var c=this,d={index:0,$object:a(),multiMix:{filter:c._state.activeFilter},callback:null},e=0;e<b.length;e++){var f=b[e];"number"==typeof f?d.index=f:"object"==typeof f&&f instanceof a?d.$object=f:"object"==typeof f&&c._helpers._isElement(f)?d.$object=a(f):"object"==typeof f&&null!==f?d.multiMix=f:"boolean"!=typeof f||f?"function"==typeof f&&(d.callback=f):d.multiMix=!1}return c._execFilter("_parseInsertArgs",d,arguments)},_execAction:function(a,b,c){var d=this,e=b?"post":"pre";if(!d._actions.isEmptyObject&&d._actions.hasOwnProperty(a))for(var f in d._actions[a][e])d._actions[a][e][f].call(d,c)},_execFilter:function(a,b,c){var d=this;if(d._filters.isEmptyObject||!d._filters.hasOwnProperty(a))return b;for(var e in d._filters[a])return d._filters[a][e].call(d,c)},_helpers:{_camelCase:function(a){return a.replace(/-([a-z])/g,function(a){return a[1].toUpperCase()})},_isElement:function(a){return window.HTMLElement?a instanceof HTMLElement:null!==a&&1===a.nodeType&&"string"===a.nodeName}},isMixing:function(){var a=this;return a._execFilter("isMixing",a._mixing)},filter:function(){var a=this,b=a._parseMultiMixArgs(arguments);a._clicking&&(a._toggleString=""),a.multiMix({filter:b.command},b.animate,b.callback)},sort:function(){var a=this,b=a._parseMultiMixArgs(arguments);a.multiMix({sort:b.command},b.animate,b.callback)},changeLayout:function(){var a=this,b=a._parseMultiMixArgs(arguments);a.multiMix({changeLayout:b.command},b.animate,b.callback)},multiMix:function(){var a=this,c=a._parseMultiMixArgs(arguments);if(a._execAction("multiMix",0,arguments),a._mixing)a.animation.queue&&a._queue.length<a.animation.queueLimit?(a._queue.push(arguments),a.controls.enable&&!a._clicking&&a._updateControls(c.command),a._execAction("multiMixQueue",1,arguments)):("function"==typeof a.callbacks.onMixBusy&&a.callbacks.onMixBusy.call(a._domNode,a._state,a),a._$container.trigger("mixBusy",[a._state,a]),a._execAction("multiMixBusy",1,arguments));else{a.controls.enable&&!a._clicking&&(a.controls.toggleFilterButtons&&a._buildToggleArray(),a._updateControls(c.command,a.controls.toggleFilterButtons)),a._queue.length<2&&(a._clicking=!1),delete a.callbacks._user,c.callback&&(a.callbacks._user=c.callback);var d=c.command.sort,e=c.command.filter,f=c.command.changeLayout;a._refresh(),d&&(a._newSort=a._parseSort(d),a._newSortString=d,a._sorting=!0,a._sort()),e!==b&&(e="all"===e?a.selectors.target:e,a._activeFilter=e),a._filter(),f&&(a._newDisplay="string"==typeof f?f:f.display||a.layout.display,a._newClass=f.containerClass||"",(a._newDisplay!==a.layout.display||a._newClass!==a.layout.containerClass)&&(a._changingLayout=!0,a._changingClass=a._newClass!==a.layout.containerClass,a._changingDisplay=a._newDisplay!==a.layout.display)),a._$targets.css(a._brake),a._goMix(c.animate^a.animation.enable?c.animate:a.animation.enable),a._execAction("multiMix",1,arguments)}},insert:function(){var a=this,b=a._parseInsertArgs(arguments),c="function"==typeof b.callback?b.callback:null,d=document.createDocumentFragment(),e=function(){return a._refresh(),a._$targets.length?b.index<a._$targets.length||!a._$targets.length?a._$targets[b.index]:a._$targets[a._$targets.length-1].nextElementSibling:a._$parent[0].children[0]}();if(a._execAction("insert",0,arguments),b.$object){for(var f=0;f<b.$object.length;f++){var g=b.$object[f];d.appendChild(g),d.appendChild(document.createTextNode(" "))}a._$parent[0].insertBefore(d,e)}a._execAction("insert",1,arguments),"object"==typeof b.multiMix&&a.multiMix(b.multiMix,c)},prepend:function(){var a=this,b=a._parseInsertArgs(arguments);a.insert(0,b.$object,b.multiMix,b.callback)},append:function(){var a=this,b=a._parseInsertArgs(arguments);a.insert(a._state.totalTargets,b.$object,b.multiMix,b.callback)},getOption:function(a){var c=this,d=function(a,c){for(var d=c.split("."),e=d.pop(),f=d.length,g=1,h=d[0]||c;(a=a[h])&&f>g;)h=d[g],g++;return a!==b?a[e]!==b?a[e]:a:void 0};return a?c._execFilter("getOption",d(c,a),arguments):c},setOptions:function(b){var c=this;c._execAction("setOptions",0,arguments),"object"==typeof b&&a.extend(!0,c,b),c._execAction("setOptions",1,arguments)},getState:function(){var a=this;return a._execFilter("getState",a._state,a)},forceRefresh:function(){var a=this;a._refresh(!1,!0)},destroy:function(b){var c=this,d=a.MixItUp.prototype._bound._filter,e=a.MixItUp.prototype._bound._sort;c._execAction("destroy",0,arguments),c._$body.add(a(c.selectors.sort)).add(a(c.selectors.filter)).off(".mixItUp");for(var f=0;f<c._$targets.length;f++){var g=c._$targets[f];b&&(g.style.display=""),delete g.mixParent}c._execAction("destroy",1,arguments),d[c.selectors.filter]&&d[c.selectors.filter]>1?d[c.selectors.filter]--:1===d[c.selectors.filter]&&delete d[c.selectors.filter],e[c.selectors.sort]&&e[c.selectors.sort]>1?e[c.selectors.sort]--:1===e[c.selectors.sort]&&delete e[c.selectors.sort],delete a.MixItUp.prototype._instances[c._id]}},a.fn.mixItUp=function(){var c,d=arguments,e=[],f=function(b,c){var d=new a.MixItUp,e=function(){return("00000"+(16777216*Math.random()<<0).toString(16)).substr(-6).toUpperCase()};d._execAction("_instantiate",0,arguments),b.id=b.id?b.id:"MixItUp"+e(),d._instances[b.id]||(d._instances[b.id]=d,d._init(b,c)),d._execAction("_instantiate",1,arguments)};return c=this.each(function(){if(d&&"string"==typeof d[0]){var c=a.MixItUp.prototype._instances[this.id];if("isLoaded"===d[0])e.push(c?!0:!1);else{var g=c[d[0]](d[1],d[2],d[3]);g!==b&&e.push(g)}}else f(this,d[0])}),e.length?e.length>1?e:e[0]:c},a.fn.removeStyle=function(c,d){return d=d?d:"",this.each(function(){for(var e=this,f=c.split(" "),g=0;g<f.length;g++)for(var h=0;4>h;h++){switch(h){case 0:var i=f[g];break;case 1:var i=a.MixItUp.prototype._helpers._camelCase(i);break;case 2:var i=d+f[g];break;case 3:var i=a.MixItUp.prototype._helpers._camelCase(d+f[g])}if(e.style[i]!==b&&"unknown"!=typeof e.style[i]&&e.style[i].length>0&&(e.style[i]=""),!d&&1===h)break}e.attributes&&e.attributes.style&&e.attributes.style!==b&&""===e.attributes.style.value&&e.attributes.removeNamedItem("style")})}}(jQuery);

/**!
 * MixItUp loadmore v0.0.1
 *
 * @author    Wayne Durack.
 * @link      https://github.com/trolleymusic/mixitup-loadmore
 */

 (function ($, undf) {
 	$.extend(true, $.MixItUp.prototype, {

    // Mixitup hooks

    _actions: {
    	_constructor: {
    		post: {
    			loadmore: function () {
    				this.loadmore = {
    					buttonClass: 'loadmore-button',
    					buttonLabel: 'Load more',
    					buttonWrapper: '.loadmore',
    					initial: 2,
    					lessClass: 'loadmore-less',
    					lessLabel: 'less',
    					loadMore: 2
    				}

    				$.extend(this.selectors, {
    					button: '.' + this.loadmore.buttonClass,
    					buttonWrapper: this.loadmore.buttonWrapper,
    					less: '.' + this.loadmore.lessClass
    				})

    				this._currentCount = null
    				this._$button = $()
    			}
    		}
    	},

    	_init: {
    		post: {
    			loadmore: function () {
    				this._currentCount = this.loadmore.initial
    			}
    		}
    	},

    	_bindHandlers: {
    		post: {
    			loadmore: function () {
            // Find the button
            this._$button = $(this.selectors.buttonWrapper)
            // Bind the buttons
            // More
            this._$button.on('click.mixItUp.' + this._id, this.selectors.button, function () {
            	this.multiMix({ loadmore: "more" })
            }.bind(this))
            // Less
            this._$button.on('click.mixItUp.' + this._id, this.selectors.less, function () {
            	this.multiMix({ loadmore: "less" })
            }.bind(this))
          }
        }
      },

      _buildState: {
      	post: {
      		loadmore: function () {
      			$.extend(this._state, {
      				_currentCount: this._currentCount
      			})
      		}
      	}
      },

      _sort: {
      	post: {
      		loadmore: function () {
      			this._printSort()
      		}
      	}
      },

      _filter: {
      	post: {
      		loadmore: function () {

      			var current = this._currentCount || this.loadmore.initial,
      			total = this._$targets.length,
      			show,
      			hide;

            // Can't go over the total
            if (current > total) {
            	current = total
            }

            if (this.loadmore.loadMore > 0) {

            	show = this._$show.filter(function (i) {
            		return i <= current - 1
            	})

            	hide = this._$show.filter(function (i) {
            		return i > current - 1
            	})

            	this._$show = show
            	this._$hide = this._$hide.add(hide)

            	if (this._sorting) {
            		this._printSort(true)
            	}

              // Make the button
              if (this._$button.length) {
              	this.generateButtons()
              }

            }
          }
        }
      },

      multiMix: {
      	pre: {
      		loadmore: function (args) {
      			var args = this._parseMultiMixArgs(args)

            // Reset
            if (this._currentCount > this._$targets.length) {
            	this._currentCount = this._$targets.length
            }

            if (args.command.loadmore && args.command.loadmore === "more") {
              // Load more
              this._currentCount = this._currentCount + this.loadmore.loadMore
            } else if (args.command.loadmore && args.command.loadmore === "less") {
              // Load less
              this._currentCount = this.loadmore.initial
            } else if (args.command.filter && args.command.filter === "all") {
              // Filter has been turned off
              this._currentCount = this.loadmore.initial
            } else if (args.command.filter || args.command.sort) {
              // Make currentCount more than the targets so that
              //  the buttons will disappear
              this._currentCount = this._$targets.length + 1
            }
          }
        }
      },

      destroy: {
      	post: {
      		loadmore: function () {
      			this._$button.off('.mixItUp').html('')
      		}
      	}
      }
    },

    // Generate Load more and Less buttons
    generateButtons: function () {
    	var buttonClass = this.loadmore.buttonClass || '',
    	lessClass = this.loadmore.lessClass || '',
    	buttonLabel = this.loadmore.buttonLabel || 'Load more',
    	lessLabel = this.loadmore.lessLabel || 'Less',
    	buttonDisabled,
    	lessDisabled,
    	disabled = ' disabled="disabled"',
    	buttons

    	if (this._currentCount > this._$targets.length) {
    		buttonDisabled = disabled
    		lessDisabled = disabled
    	} else {
    		buttonDisabled = this._currentCount == this._$targets.length ? disabled : ''
    		lessDisabled = this._currentCount <= this.loadmore.initial ? disabled : ''
    	}

    	buttons = [
    	'<button class="', buttonClass, '"', buttonDisabled, '>', buttonLabel, '</button>',
    	'<button class="', lessClass, '"', lessDisabled, '>', lessLabel, '</button>'
    	].join('')

    	this._$button.html(buttons)
    }

  })

})(jQuery);