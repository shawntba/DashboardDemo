/**
 * Turnover growth
 * @author gary.gan
 */
function drawGraph03Visualization(currentAgbCode, columnIndexArray, periodType) {
	// Create and populate the data table.
	var originalData = new google.visualization.DataTable({
		cols : [{ id : '', label : 'Uitvoerder', type : 'string'
			}, { id : '', label : 'Year', type : 'string'
			}, { id : '', label : 'Periode Type', type : 'string'
			}, { id : '', label : 'PeriodNumber', type : 'number'
			}, { id : '', label : 'Gedeclareerd', type : 'number'
			}, { id : '', label : 'Toegekend', type : 'number'
			}],
		rows : {}
		});
	
	var preparedData = getChartDataSource(originalData, currentAgbCode, columnIndexArray);	
	preparedData = convertPeriodText(preparedData, 0, periodType);

	// Create and draw the visualization.
	var table = new google.visualization.Table(document.getElementById('Graph03Visualization_div'));

	preparedData = setFormat(preparedData);

	var formatter = new google.visualization.TableArrowFormat();
	formatter.format(preparedData, 1);
	// Apply formatter to second column
	formatter.format(preparedData, 2);

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

	table.draw(preparedData, {
		allowHtml : true
	});
}

/**
 * set correct percent format
 * @param {google dataTable} dataSource
 */
function setFormat(dataSource)
{
	var data = dataSource;
	for (var i = 0; i < data.getNumberOfRows(); i++)
	{
		var value1 = data.getValue(i, 1).toString(); 
		var value2 = data.getValue(i, 2).toString(); 
		if (value1 != 0)	
		{
			data.setFormattedValue(i, 1,  (Math.abs(value1) + "%").replace('.', ','));
		}
		else
		{
			data.setFormattedValue(i, 1, "-");
		}
		
		if (value2 != 0)
		{
			data.setFormattedValue(i, 2, (Math.abs(value2) + "%").replace('.', ','));
		}	
		else
		{
			data.setFormattedValue(i, 2, "-");
		}
	}
	return data;
}

