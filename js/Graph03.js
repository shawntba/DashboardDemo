/**
 * Turnover growth
 * @author gary.gan
 */
function drawGraph03Visualization() {
	// Create and populate the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('number', 'PERIODE');
	data.addColumn('number', 'GEDECLAREERD');
	data.addColumn('number', 'TOEGEKEND');
	data.addRows([
		[
			{ v : 1, f : 'Jan' }, 
			{ v : 0, f : '-' }, 
			{ v : 0, f : '-' }
		], 
		[
			{ v : 2, f : 'Feb' }, 
			{ v : -1.01, f : '1,01%' }, 
			{ v : -0.56, f : '0,56%' }
		], 
		[
			{ v : 3, f : 'Maa' }, 
			{ v : 1.94, f : '1,94%' }, 
			{ v : 2.24, f : '2,24%' }
		], 
		[
			{ v : 4, f : 'Apr' }, 
			{ v : 0.34, f : '0,34%' }, 
			{ v : -1.03, f : '1,03%' }
		], 
		[
			{ v : 5, f : 'Mei' }, 
			{ v : -1.25, f : '1,25%' }, 
			{ v : -2.56, f : '2,56%' }
		], 
		[
			{ v : 6, f : 'Jun' }, 
			{ v : -0.56, f : '0,56%' }, 
			{ v : 1.95, f : '1,95%' }
		], 
		[
			{ v : 7, f : 'Jul' }, 
			{ v : 2.24, f : '2,24%' }, 
			{ v : 0.95, f : '0,95%' }
		], 
		[
			{ v : 8, f : 'Aug' }, 
			{ v : -1.03, f : '1,03%' }, 
			{ v : -0.65, f : '0,65%' }
		], 
		[
			{ v : 9, f : 'Sep' }, 
			{ v : -2.56, f : '2,56%' }, 
			{ v : 1.94, f : '1,94%' }
		], 
		[
			{ v : 10, f : 'Okt' }, 
			{ v : 1.95, f : '1,95%' }, 
			{ v : 0.34, f : '0,34%' }
		], 
		[
			{ v : 11, f : 'Nov' }, 
			{ v : 0.95, f : '0,95%' }, 
			{ v : -1.25, f : '1,25%' }
		], 
		[
			{ v : 12, f : 'Dec' }, 
			{ v : -0.65, f : '0,65%' }, 
			{ v : -0.56, f : '0,56%' }
		]
	]);

	// Create and draw the visualization.
	var table = new google.visualization.Table(document.getElementById('Graph03Visualization_div'));

	var formatter = new google.visualization.TableArrowFormat();
	formatter.format(data, 1);
	// Apply formatter to second column
	formatter.format(data, 2);

	//Add redraw event
	google.visualization.events.addListener(table, 'ready', redraw);

	function redraw(event) {
		$('#Graph03Visualization_div').find('.google-visualization-formatters-arrow-dr').each(function() {
			$(this).attr('style', 'background: url("images/arrow_dr.png") no-repeat scroll left center transparent;');
		});
		
		$('#Graph03Visualization_div').find('.google-visualization-formatters-arrow-ug').each(function() {
			$(this).attr('style', 'background: url("images/arrow_up.png") no-repeat scroll left center transparent;');
		});
	}

	table.draw(data, {
		allowHtml : true
	});
}