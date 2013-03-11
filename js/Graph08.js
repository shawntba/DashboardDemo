/**
 * Tijdigheid Zorgkantoor
 * @author gary.gan
 */
function drawGraph08Visualization(currentAgbCode, columnIndexArray, periodType) {
  // Create and populate the data table.
	var originalData = new google.visualization.DataTable({
		cols : [{ id : '', label : 'Uitvoerder', type : 'string'
			}, { id : '', label : 'Year', type : 'string'
			}, { id : '', label : 'Periode Type', type : 'string'
			}, { id : '', label : 'PeriodNum', type : 'number'
			}, { id : '', label : 'Aantal dagen', type : 'number'
			}, { id : '', label : 'Wenselijke termijn', type : 'number'
			}, { id : '', label : 'Wettenlijke termijn', type : 'number'
			}],
		rows : {}
		});
	

	var preparedData = getChartDataSource(originalData, currentAgbCode, columnIndexArray); 
	preparedData = convertPeriodText(preparedData, 0, periodType);
	
	preparedData.addColumn('number', 'Wenselijke termijn');
	preparedData.addColumn('number', 'Wettelijke termijn');
	
	for (var i = 0; i < preparedData.getNumberOfRows(); i++)
	{
		preparedData.setCell(i, 2, 5);
		preparedData.setCell(i, 3, 20);
	}

	// Set chart options
	var options = {
		'title' : 'TIJDIGHEID ZORGKANTOOR (AW320)',
		'curveType' : 'function',
		'width' : 500,
		'height' : 300,
		'vAxis' : { 'maxValue' : 24 },
		'series': [{'color': '#4A9BB8'}, {'color': '#6FBE44'}, {'color': '#D37897'}]
	}; 

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('Graph08Visualization_div')).
      draw(preparedData, options);
}