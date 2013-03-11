/**
 * Gedeclareerd verloop
 * @author gary.gan
 */
function drawGraph04Visualization(currentAgbCode, columnIndexArray, periodType) {
  // Some raw data (not necessarily accurate)
	var originalData = new google.visualization.DataTable({
		cols : [{ id : '', label : 'Uitvoerder', type : 'string'
			}, { id : '', label : 'Year', type : 'string'
			}, { id : '', label : 'Periode Type', type : 'string'
			}, { id : '', label : 'PeriodNum', type : 'number'
			}, { id : '', label : 'Totaal', type : 'number'
			}, { id : '', label : 'Goedegekeurd', type : 'number'
			}, { id : '', label : 'Afgekeurd', type : 'number'
			}],
		rows : {}
		});
	
  	var preparedData = getChartDataSource(originalData, currentAgbCode, columnIndexArray);	
	preparedData = convertPeriodText(preparedData, 0, periodType);
	

  // Create and draw the visualization.
  var ac = new google.visualization.AreaChart(document.getElementById('Graph04Visualization_div'));
  ac.draw(preparedData, {
    title : 'GEDECLAREERD & TOEGEKEND',
    isStacked: false,
    width: 500,
    height: 300,
    legend: {position: 'right'},
    series: [{color: '#4A9BB8'}, {color: '#D37897'}, {color: '#6FBE44'}]
  });
}