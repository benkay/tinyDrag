tinyDrag v0.9.3
(c) 2010 Ben Kay <http://bunnyfire.co.uk>

REQUIREMENTS:
* Requires jQuery - tested with 1.3.2 and above but should work with lower versions

INSTALL:
* Copy tinydrag.js to your server and include after jQuery

USAGE:
Elements must have a position (i.e. absolute, relative or fixed. *not* static) for the plugin to work

To activate:
$(element).tinyDrag();

tinyDrag will also take a function to call when the element is dropped e.g.
$(element).tinyDrag(function() {
	alert("Dropped!");
});

KNOWN ISSUES:
An initial position may have to be set in Chrome before dragging will work
