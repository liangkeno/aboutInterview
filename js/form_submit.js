!(function() {
	function foo(e) {
		var e = e || window.event,
			form;
		e.preventDefault();
		var inputList = document.getElementsByName('radioName');
		for (var i = 0, len = inputList.length; i < len; i++) {
			if (inputList[i].checked) {
				alert(i + 1);
			}
		}
		console.log(inputList);
		form = document.getElementsByName('form');
		form[0].submit();
	}
	window.foo = foo;
})(window);