/**
 * Gedeclareerd verloop
 * @author gary.gan
 */
function drawGraph04Visualization(currentAgbCode, columnIndexArray, periodType) {
  // Some raw data (not necessarily accurate)
	var originalData = new google.visualization.DataTable({
		cols : [{ id : 'AGBCode', label : 'AGBCode', type : 'string'
			}, { id : 'Jaar', label : 'Jaar', type : 'string'
			}, { id : 'PeriodType', label : 'PeriodType', type : 'string'
			}, { id : 'PeriodNum', label : 'PeriodNum', type : 'string'
			}, { id : 'Totaal', label : 'Totaal', type : 'number'
			}, { id : 'Goedegekeurd', label : 'Goedegekeurd', type : 'number'
			}, { id : 'Afgekeurd', label : 'Afgekeurd', type : 'number'
			}],
		rows : [{ c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '1' }, { v : 100 }, { v : 50 }, { v : 50 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '2' }, { v : 90}, { v : 30 }, { v : 60 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '3' }, { v : 115 }, { v : 20 }, { v : 95 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '4' }, { v : 95 }, { v : 15 }, { v : 80 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '5' }, { v : 125 }, { v : 25 }, { v : 100 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '6' }, { v : 110 }, { v : 35 }, { v : 75 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '7' }, { v : 110 }, { v : 45 }, { v : 65 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '8' }, { v : 140 }, { v : 50 }, { v : 90 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '9' }, { v : 105 }, { v : 25 }, { v : 80 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '10' }, { v : 95 }, { v : 10 }, { v : 85 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '11' }, { v : 90 }, { v : 20 }, { v : 70 }]
			}, { c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '12' }, { v : 95 }, { v : 40 }, { v : 55 }]
			}]
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