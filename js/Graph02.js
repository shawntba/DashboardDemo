/**
 * Toegekend versus afgekeurd
 * @author gary.gan
 */
function drawGraph02Chart(currentAgbCode, columnIndexArray) {

	// Set chart options
	var options = {
		'title' : 'TOEGEKEND VS AFGEKEURD',
		'width' : 400,
		'height' : 300,
		'slices' : {
			0 : {
				color : '#71AAC3'
			},
			1 : {
				color : '#AC573B'
			},
			2 : {
				color : '6FBE44'
			}
		}
	};

	var originalData = new google.visualization.DataTable({
		cols : [{ id : '', label : 'Uitvoerder', type : 'string'
			}, { id : '', label : 'Year', type : 'string'
			}, { id : '', label : 'Periode Type', type : 'string'
			}, { id : '', label : 'Status', type : 'string'
			}, { id : '', label : 'Sum', type : 'number'
			}],
		rows : {}
		});
		
		
	var preparedData = getChartDataSource(originalData, currentAgbCode, columnIndexArray);	
	

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('Graph02Chart_div'));
	chart.draw(preparedData, options);
}


