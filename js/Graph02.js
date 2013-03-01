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
		cols : [{ id : 'AGBCode', label : 'AGBCode', type : 'string'
			}, { id : 'Jaar', label : 'Jaar', type : 'string'
			}, { id : 'PeriodType', label : 'PeriodType', type : 'string'
			}, { id : 'PeriodNum', label : 'PeriodNum', type : 'string'
			}, { id : 'Status', label : 'Status', type : 'string'
			}, { id : 'Sum', label : 'Sum', type : 'number'
			}],
		rows : [{ c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Togekend' }, { v : 36522622 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Afgekeurd' }, { v : 11545216 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'In Behandeling' }, { v : 4444444 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Togekend' }, { v : 12454112 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Afgekeurd' }, { v : 141454 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'In Behandeling' }, { v : 21511 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Togekend' }, { v : 4545412111 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Afgekeurd' }, { v : 11545216 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'In Behandeling' }, { v : 551651 }]
			}]
		});
		
		
	var preparedData = getChartDataSource(originalData, currentAgbCode, columnIndexArray);	
	

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('Graph02Chart_div'));
	chart.draw(preparedData, options);
}


