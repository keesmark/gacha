(function() {

	var single = document.getElementById('single');
	var ten = document.getElementById('ten');
	var results = document.getElementById('results');

	single.addEventListener('click', function(){
		var n = Math.random();
		if(n < 0.01) {
			results.textContent = '★★★★★'; // 1%
		} else if (n < 0.1) {
			results.textContent = "★★★★"; // 9%
		} else if (n < 0.3) {
			results.textContent = '★★★'; // 20%
		} else if (n < 0.5) {
			results.textContent = '★★'; //30%
		} else {
			results.textContent = '★'; // 40%
		};
	});

	/*ten.addEventListener('click', function() {
		var n = Math.random();
		var x = [];

		for (var i = 0; i < 10; i++) {
			x[i] = n;

			if(x[i] < 0.01) {
				results.textContent = '★★★★★'; // 1%
			} else if (x[i] < 0.1) {
				results.textContent = "★★★★"; // 9%
			} else if (x[i] < 0.3) {
				results.textContent = '★★★'; // 20%
			} else if (x[i] < 0.5) {
				results.textContent = '★★'; //30%
			} else {
				results.textContent = '★'; // 40%
			};
			console.log(x);
		};*/

		ten.addEventListener('click', function() {

		results.textContent = "";

		for (var i = 0; i < 10; i++) {
			var n = Math.random();
			var x = [];
			x[i] = n;

			if(x[i] < 0.01) {
				results.textContent += '★★★★★'; // 1%
			} else if (x[i] < 0.1) {
				results.textContent += "★★★★"; // 9%
			} else if (x[i] < 0.3) {
				results.textContent += '★★★'; // 20%
			} else if (x[i] < 0.5) {
				results.textContent += '★★'; //30%
			} else {
				results.textContent += '★'; // 40%
			};
			results.textContent += "\n"
		};
	});
	
})();