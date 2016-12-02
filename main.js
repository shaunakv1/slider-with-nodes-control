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
		    .attr('preserveAspectRatio','xMinYMin')
		    .append("g")
		    .attr("transform", "translate(" + Math.min(chartWidth,chartHeight) / 2 + "," + Math.min(chartWidth,chartHeight) / 2 + ")");

		/*var curveData = [ {x:190,y:100},{x:360,  y:150}];
		
		var diagonal = d3.svg.diagonal()
		    .source(function(d) {return {"x":d[0].y, "y":d[0].x}; })            
		    .target(function(d) {return {"x":d[1].y, "y":d[1].x}; })
		    .projection(function(d) { return [d.y, d.x]; });

		var line = svg.append('g')		
		    .datum(curveData)
		    .append("path")
		    .attr("class", "link")
		    .attr("d", diagonal)
		    .attr("stroke", "#444")
		    .attr("stroke-width", 2)
		    .attr("fill", "none");*/

});