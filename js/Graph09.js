/**
 * Prognose gedeclareerde bedragen
 * @author gary.gan
 */
function drawGraph09Visualization(currentAgbCode, columnIndexArray, periodType) {
  // Create and populate the data table.
  var originalData = new google.visualization.DataTable({
		cols : [{ id : 'AGBCode', label : 'AGBCode', type : 'string'
			}, { id : 'Jaar', label : 'Jaar', type : 'string'
			}, { id : 'PeriodType', label : 'PeriodType', type : 'string'
			}, { id : 'PeriodNum', label : 'PeriodNum', type : 'string'
			}, { id : 'Bedrag', label : 'Bedrag', type : 'number'
			}, { id : 'Bedrag', label : 'Bedrag', type : 'number'
			}],
		rows : [{ c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '5' }, { v : 6520 }, { v : 0 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '6' }, { v : 7652 }, { v : 0 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '7' }, { v : 8232 }, { v : 0 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '8' }, { v : 7541 }, { v : 0 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '9' }, { v : 0 }, { v : 6985 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '10' }, { v : 0 }, { v : 6854 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '3' }, { v : '5' }, { v : 10256 }, { v : 0 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '3' }, { v : '6' }, { v : 11258 }, { v : 0 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '3' }, { v : '7' }, { v : 12352 }, { v : 0 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '3' }, { v : '8' }, { v : 13524 }, { v : 0 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '3' }, { v : '9' }, { v : 0}, { v : 9985 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '3' }, { v : '10' }, { v : 0 }, { v : 10241 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '3' }, { v : '5' }, { v : 23652 }, { v : 0 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '3' }, { v : '6' }, { v : 21021 }, { v : 0 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '3' }, { v : '7' }, { v : 25001 }, { v : 0 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '3' }, { v : '8' }, { v : 23012 }, { v : 0 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '3' }, { v : '9' }, { v : 0 }, { v : 19521 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '3' }, { v : '10' }, { v : 0 }, { v : 20145 }]
			}]
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