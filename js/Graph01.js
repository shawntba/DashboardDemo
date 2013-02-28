/**
 * Top 5 most valuable prestaties
 * @author gary.gan
 */
function drawGraph01Visualization() {
	// Create and populate the data table.
	var data = new google.visualization.DataTable(
		{
			cols: 
				[	
					{ id : 'prestatie', label : 'Prestatie', 	type : 'string'}, 
					{ id : 'sum', 		label : 'Omzet', 		type : 'number'}
				],
			rows: 
				[
					{ c : [{ v : 'H150' }, { v : 900700 }]}, 
					{ c : [{ v : 'H153' }, { v : 800000 }]}, 
					{ c : [{ v : 'H163' }, { v : 750000 }]}, 
					{ c : [{ v : 'H145' }, { v : 100000 }]}, 
					{ c : [{ v : 'H151' }, { v : 90000 }]}
				]
		}
	);

	// Create and draw the visualization.
	var table = new google.visualization.Table(document.getElementById('Graph01Visualization_div'));

	var formatter = new google.visualization.TableBarFormat({
		width : 120,
		colorPositive : 'red'
	});
	
	// Apply formatter to second column
	formatter.format(data, 1);

	//Add redraw event
	google.visualization.events.addListener(table, 'ready', redraw);

	function redraw(event) {
		$('#Graph01Visualization_div').find('img').each(function() {
			if ($(this).attr('src') == 'https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_r.png') {
				$(this).attr('src', 'images/bar_r.png');
			}
		});
	}
	
	table.draw(data, { allowHtml : true });
}