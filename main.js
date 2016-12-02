$(function () {	
		
		noUiSlider.create(document.getElementById("input"), {
				start: 50,
				step:1,
				orientation: "vertical",
				direction: 'rtl',
				tooltips: true,
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

		var svg = d3.select('lineDiagram').append("svg")
		    .attr("width", '100%')
		    .attr("height", '100%')
		    .attr('viewBox','0 0 '+Math.min(width,height)+' '+Math.min(width,height))
		    .attr('preserveAspectRatio','xMinYMin')
		    .append("g")
		    .attr("transform", "translate(" + Math.min(width,height) / 2 + "," + Math.min(width,height) / 2 + ")");
});