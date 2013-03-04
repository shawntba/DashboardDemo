/**
 * Top 5 most valuable prestaties
 * @author gary.gan
 */
function drawGraph01Visualization(currentAgbCode, columnIndexArray) {
	// Create and populate the data table.
	var originalData = new google.visualization.DataTable({
		cols : [{ id : 'AGBCode', label : 'AGBCode', type : 'string'
			}, { id : 'Jaar', label : 'Jaar', type : 'string'
			}, { id : 'PeriodType', label : 'PeriodType', type : 'string'
			}, { id : 'PeriodNum', label : 'PeriodNum', type : 'string'
			}, { id : 'Prestatie', label : 'Prestatie', type : 'string'
			}, { id : 'Omzet', label : 'Omzet', type : 'number'
			}],
		rows : [{ c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'H150' }, { v : 956223 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'H153' }, { v : 365232 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'H163' }, { v : 265221 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'H145' }, { v : 123156 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'H151' }, { v : 112622 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Z430' }, { v : 10326652 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Z333' }, { v : 10003262 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Z210' }, { v : 9322652 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Z152' }, { v : 8652212 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'Z022' }, { v : 568213 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'F685' }, { v : 325622 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'F532' }, { v : 65422 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'F493' }, { v : 35214 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'F321' }, { v : 12566 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : 'F102' }, { v : 6521 }]
			}]
		});
		
	var preparedData = getChartDataSource(originalData, currentAgbCode, columnIndexArray);	
	
	// Create and draw the visualization.
	var table = new google.visualization.Table(document.getElementById('Graph01Visualization_div'));

	var formatter = new google.visualization.TableBarFormat({
		width : 120,
		colorPositive : 'red'
	});
	
	// Apply formatter to second column
	formatter.format(preparedData, 1);

	//Add redraw event
	google.visualization.events.addListener(table, 'ready', redraw);

	function redraw(event) {
		$('#Graph01Visualization_div').find('img').each(function() {
			if ($(this).attr('src') == 'https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_r.png') {
				$(this).attr('src', 'images/bar_r.png');
			}
		});
	}
	
	table.draw(preparedData, { allowHtml : true });
}