/*!
	tinyDrag v0.9.2
	(c) 2010 Ben Kay <http://bunnyfire.co.uk>

	MIT license
*/


jQuery.fn.tinyDrag = function(callback) {
	return jQuery.tinyDrag(this, callback);
}

jQuery.tinyDrag = function(el, callback) {
	var mouseStart, elStart, moved, doc = jQuery(document), toint = parseInt, abs = Math.abs, f = false;
	el.mousedown(function(e) {
		moved = f;
		mouseStart = {x: e.pageX, y: e.pageY};
		elStart = {x: toint(el.css("left")), y: toint(el.css("top"))}
		doc.mousemove(drag).mouseup(stop);
		return f;
	});
	
	function drag(e) {
		var x = e.pageX, y = e.pageY;
		if (moved || (moved = abs(x - mouseStart.x) + abs(y - mouseStart.y) > 1)) 
			el.css({left: elStart.x + (x - mouseStart.x), top: elStart.y + (y - mouseStart.y)});

		return f;
	}
	
	function stop() {
		doc.unbind("mousemove", drag).unbind("mouseup");
		moved&&callback&&callback();
	}
	
	return el;
}
