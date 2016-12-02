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

		var $container = $('#lineDiagram');
		var chartWidth = $container.width();
		var chartHeight = $container.height();

		var svg = d3.select('#lineDiagram').append("svg")
		    .attr("width", '100%')
		    .attr("height", '100%')
		    .attr('viewBox','0 0 '+Math.min(chartWidth,chartHeight)+' '+Math.min(chartWidth,chartHeight))
		    .attr('preserveAspectRatio','xMinYMin');

		var lineData = [ {x:0,y:0},{x:200,y:450},{x:chartWidth,  y:chartHeight}];
		
		var line = d3.line()
		    .x(function(d) { return d.x; })
		    .y(function(d) { return d.y; })
		    .curve(d3.curveBundle.beta(0));

		var line = svg.append('g')		
		    .datum(lineData)
		    .append("path")
		    .attr("d", line)
		    .attr("stroke", "red")
		    .attr("stroke-width", 1);

});