/**
 * Status AW319 berichten
 * @author gary.gan
 */
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawGraph10Chart(currentAgbCode, columnIndexArray) {

	// Create the data table.
	var originalData = new google.visualization.DataTable({
		cols : [{ id : '', label : 'Uitvoerder', type : 'string'
			}, { id : '', label : 'Year', type : 'string'
			}, { id : '', label : 'Periode Type', type : 'string'
			}, { id : '', label : 'Status', type : 'string'
			}, { id : '', label : 'Valide', type : 'number'
			}],
		rows : {}
		});
		
	var preparedData = getChartDataSource(originalData, currentAgbCode, columnIndexArray);			

	// Set chart options
	var options = {
		'title' : 'STATUS AW319 BERICHTEN',
		'width' : 400,
		'height' : 300,
		'slices': {0: {color: '#6FBE44'}, 1: {color: '#D37897'}, 2: {color: '#4A9BB8'}, 3: {color: '#AC573B'}}
	};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('Graph10Chart_div'));
	chart.draw(preparedData, options);
}
