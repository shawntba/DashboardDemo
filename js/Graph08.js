/**
 * Tijdigheid Zorgkantoor
 * @author gary.gan
 */
function drawGraph08Visualization(currentAgbCode, columnIndexArray, periodType) {
  // Create and populate the data table.
	var originalData = new google.visualization.DataTable({
		cols : [{ id : 'AGBCode', label : 'AGBCode', type : 'string'
			}, { id : 'Jaar', label : 'Jaar', type : 'string'
			}, { id : 'PeriodType', label : 'PeriodType', type : 'string'
			}, { id : 'PeriodNum', label : 'PeriodNum', type : 'string'
			}, { id : 'Weight', label : 'Weight', type : 'number'
			}, { id : 'Aantal dagen', label : 'Aantal dagen', type : 'number'
			}],
		rows : [{ c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '1' }, { v : 10 }, { v : 14 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '2' }, { v : 5}, { v : 10 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '3' }, { v : 32 }, { v : 18 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '4' }, { v : 21 }, { v : 11 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '5' }, { v : 26}, { v : 14 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '6' }, { v : 12 }, { v : 20 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '7' }, { v : 32 }, { v : 10 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '8' }, { v : 12 }, { v : 2 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '9' }, { v : 14 }, { v : 3 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '10' }, { v : 30 }, { v : 3 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '11' }, { v : 22 }, { v : 4 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '12' }, { v : 21 }, { v : 5 }]
			}]
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