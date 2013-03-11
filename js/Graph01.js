/**
 * Top 5 most valuable prestaties
 * @author gary.gan
 */
function drawGraph01Visualization(currentAgbCode, columnIndexArray) {
	// Create and populate the data table.
	var originalData = new google.visualization.DataTable({
		cols : [{ id : '', label : 'Uitvoerder', type : 'string'
			}, { id : '', label : 'Year', type : 'string'
			}, { id : '', label : 'Periode Type', type : 'string'
			}, { id : '', label : 'Prestatie', type : 'string'
			}, { id : '', label : 'Omzet', type : 'number'
			}],
		rows : {}
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