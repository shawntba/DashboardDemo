/**
 * Turnover growth
 * @author gary.gan
 */
function drawGraph03Visualization(currentAgbCode, columnIndexArray, periodType) {
	// Create and populate the data table.
	var originalData = new google.visualization.DataTable({
		cols : [{ id : 'AGBCode', label : 'AGBCode', type : 'string'
			}, { id : 'Jaar', label : 'Jaar', type : 'string'
			}, { id : 'PeriodType', label : 'PeriodType', type : 'string'
			}, { id : 'Periode', label : 'Periode', type : 'string'
			}, { id : 'Weight', label : 'Weight', type : 'number'
			}, { id : 'Gedeclareerd', label : 'Gedeclareerd', type : 'number'
			}, { id : 'Toegekend', label : 'Toegekend', type : 'number'
			}],
		rows : [{ c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '1' }, { v : 0 }, { v : 0, f : '-' }, { v : 0 , f : '-' }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '2' }, { v : 50}, { v : -1.02, f : '1,02%' }, { v : -0.25, f : '0,25%' }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '3' }, { v : 36 }, { v : 2.23, f : '2,23%' }, { v : -0.52, f : '0,52%' }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '4' }, { v : 20 }, { v : 2.14, f : '2,14%' }, { v : -1.25, f : '1,25%' }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '5' }, { v : 3 }, { v : 1.25, f : '1,25%' }, { v : 2.52, f : '2,52%' }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '6' }, { v : 254 }, { v : 0.25, f : '0,25%' }, { v : -3.25, f : '3,25%' }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '7' }, { v : 241 }, { v : 6.12, f : '6,12%' }, { v : 1.2, f : '1,2%' }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '8' }, { v : 252 }, { v : 1.02, f : '1,02%' }, { v : -4.21, f : '4,21%' }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '9' }, { v : 226 }, { v : 0.25, f : '0,25%' }, { v : 3.25, f : '3,25%' }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '10' }, { v : 21 }, { v : 2.12, f : '2,12%' }, { v : 2.52, f : '2,52%' }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '11' }, { v : 32 }, { v : -4.26, f : '4,26%' }, { v : 2.61, f : '2,61%' }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '12' }, { v : 2315 }, { v : -5.36, f : '5,36%' }, { v : 3.21, f : '3,21%' }]
			}]
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

