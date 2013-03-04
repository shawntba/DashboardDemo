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
		cols : [{ id : 'AGBCode', label : 'AGBCode', type : 'string'
			}, { id : 'Jaar', label : 'Jaar', type : 'string'
			}, { id : 'PeriodType', label : 'PeriodType', type : 'string'
			}, { id : 'PeriodNum', label : 'PeriodNum', type : 'string'
			}, { id : 'Status', label : 'Status', type : 'string'
			}, { id : 'Valide', label : 'Valide', type : 'number'
			}],
		rows : [{ c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Valide' }, { v : 800 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'In behandeling' }, { v : 200 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Niet (geheel) valide' }, { v : 150 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Compleet afgekeurd' }, { v : 300 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Valide' }, { v : 900 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'In behandeling' }, { v : 100 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Niet (geheel) valide' }, { v : 50 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Compleet afgekeurd' }, { v : 10 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Valide' }, { v : 100 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'In behandeling' }, { v : 150 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Niet (geheel) valide' }, { v : 100 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Compleet afgekeurd' }, { v : 30 }]
			}]
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
