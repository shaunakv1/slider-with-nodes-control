$(function () {	
		
		noUiSlider.create(document.getElementById("input"), {
				start: 50,
				orientation: "vertical",
				range: {
					'min': 0,
					'max': 100
				}
			});

});