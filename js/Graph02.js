/**
 * Toegekend versus afgekeurd
 * @author gary.gan
 */
function drawGraph02Chart() {

	// Create the data table.
	var data = new google.visualization.DataTable([
		['AGBCode', 'Jaar', 'PeriodType', 'PeriodNum', 'Toegekend', 'Afgekeurd', 'In Behandeling'], 
		['72727335', '2012', '', '', '6582232', '11545216', '5645452121'], 
		['75757554', '2012', '', '', '25644551', '2665452', '455412'], 
		['73731810', '2012', '', '', '6564542', '25545142', '5462215']
	]);

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

	var preparedData = new google.visualization.DataTable({
		cols : [{ id : 'status', label : 'Status', type : 'string'
			}, { id : 'sum', label : 'Sum', type : 'number'
			}],
		rows : [{ c : [{ v : 'Toegekend' }, { v : 11545216 }]
			}, { c : [{ v : 'Afgekeurd' }, { v : 2665452 }]
			}, { c : [{ v : 'In Behandeling' }, { v : 25545142 }]
			}]
	});

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('Graph02Chart_div'));
	chart.draw(preparedData, options);
}