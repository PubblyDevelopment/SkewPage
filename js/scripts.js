document.addEventListener("DOMContentLoaded", function() {
	function determineTextSkew() {
		if (window.innerWidth < 768) {
			removeUnskew();
		}
		else {
			addUnskew();
		}
	};
	let unskewedNodes = document.getElementById('stripe');

	/* This could be improved.... */
	function addUnskew() {
		for (let i = 0; i < unskewedNodes.children.length; i++) {
			if (!unskewedNodes.children[i].classList.contains('unskew')) {
			 	unskewedNodes.children[i].classList.add('unskew');
			}
		}
	}
	function removeUnskew() {
		for (let i = 0; i < unskewedNodes.children.length; i++) {
			 if (unskewedNodes.children[i].classList.contains('unskew')) {
			 	unskewedNodes.children[i].classList.remove('unskew');
			 }
		}
	}

	determineTextSkew();
	window.onresize = determineTextSkew;
});
	