/**
 * Prognose gedeclareerde bedragen
 * @author gary.gan
 */
function drawGraph09Visualization(currentAgbCode, columnIndexArray, periodType) {
  // Create and populate the data table.
  var originalData = new google.visualization.DataTable({
		cols : [{ id : '', label : 'Uitvoerder', type : 'string'
			}, { id : '', label : 'Periode Type', type : 'string'
			}, { id : '', label : 'Year', type : 'string'
			}, { id : '', label : 'PeriodNum', type : 'number'
			}, { id : '', label : 'Bedrag', type : 'number'
			}, { id : '', label : 'Prognose Bedrag', type : 'number'
			}],
		rows : {}
		});
		
	var preparedData = getChartDataSource(originalData, currentAgbCode, columnIndexArray);
  	preparedData = convertPeriodText(preparedData, 0, periodType);
  
  // Set chart options
	var options = {
		'title' : 'PROGNOSE GEDECLAREERDE BEDRAGEN',
		'width' : 600,
		'height' : 400,
		'legend' : { 'position': 'none' },
		'series': [{'color': '#4A9BB8'}, {'color': '#D37897'}]
	}; 

  // Create and draw the visualization.
  new google.visualization.ColumnChart(document.getElementById('Graph09Visualization_div')).
      draw(preparedData, options);
}