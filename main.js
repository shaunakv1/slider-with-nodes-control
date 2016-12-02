$(function () {	
		
		noUiSlider.create(document.getElementById("input"), {
				start: 50,
				step:1,
				orientation: "vertical",
				direction: 'rtl',
				range: {
					'min': 0,
					'max': 100
				},
				pips: {
						mode: 'values',
						values: [20, 80],
						density: 4
					}
			});

});