(function() {
	var addEvent = function(dom, type, fn) {
		if (dom.addEventListener) {
			dom.addEventListener(type, fn, false);
		} else if (dom.attachEvent) {
			dom.attachEvent('on' + type, fn);
		} else {
			dom['on' + type] = fn;
		}
	};
	var addMouseEvent = function(dom, overfn, outfn) {
		addEvent(dom, 'mouseover', overfn);
		addEvent(dom, 'mouseout', outfn);
	}
	var wrapNode = document.getElementById('container');
	addMouseEvent(wrapNode, function(e) {
		var e = e || window.event;
		var target = e.target || e.srcElement;
		target.style.zIndex = 1;
		target.style.transform = "scale(1.2,1.2)";
	}, function(e) {
		var e = e || window.event;
		var target = e.target || e.srcElement;
		target.style.zIndex = 0;
		target.style.transform = "scale(1,1)";
	});
})();