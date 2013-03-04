/**
 * Tijdigheid (Timeliness) of the send AW319 messages.
 * @author gary.gan
 */
function drawGraph05Visualization(currentAgbCode, columnIndexArray) {
	// Create and populate the data table.
	var originalData5 = new google.visualization.DataTable({
		cols : [{ id : 'AGBCode', label : 'AGBCode', type : 'string'
			}, { id : 'Jaar', label : 'Jaar', type : 'string'
			}, { id : 'PeriodType', label : 'PeriodType', type : 'string'
			}, { id : 'PeriodNum', label : 'PeriodNum', type : 'string'
			}, { id : 'Weight', label : 'Weight', type : 'string'
			}, { id : 'Label', label : 'Label', type : 'string'
			}, { id : 'Value', label : 'Value', type : 'number'
			}],
		rows : [{ c : [{ v : '72727335' }, { v : '2012' }, { v : '3' }, { v : '' }, { v : '850' }, { v : 'Tijdigheid' }, { v : 6 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '2' }, { v : '' }, { v : '900' }, { v : 'Tijdigheid' }, { v : 2 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '1' }, { v : '' }, { v : '1000' }, { v : 'Tijdigheid' }, { v : 4 }]
			}]
		}); 
		
	var originalData6 = new google.visualization.DataTable({
		cols : [{ id : 'AGBCode', label : 'AGBCode', type : 'string'
			}, { id : 'Jaar', label : 'Jaar', type : 'string'
			}, { id : 'PeriodType', label : 'PeriodType', type : 'string'
			}, { id : 'PeriodNum', label : 'PeriodNum', type : 'string'
			}, { id : 'Weight', label : 'Weight', type : 'string'
			}, { id : 'Label', label : 'Label', type : 'string'
			}, { id : 'Value', label : 'Value', type : 'number'
			}],
		rows : [{ c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : '850' }, { v : 'Tijdigheid' }, { v : 95 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : '900' }, { v : 'Tijdigheid' }, { v : 80 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : '1000' }, { v : 'Tijdigheid' }, { v : 70 }]
			}]
		}); 
		
	var originalData7 = new google.visualization.DataTable({
		cols : [{ id : 'AGBCode', label : 'AGBCode', type : 'string'
			}, { id : 'Jaar', label : 'Jaar', type : 'string'
			}, { id : 'PeriodType', label : 'PeriodType', type : 'string'
			}, { id : 'PeriodNum', label : 'PeriodNum', type : 'string'
			}, { id : 'Weight', label : 'Weight', type : 'string'
			}, { id : 'Label', label : 'Label', type : 'string'
			}, { id : 'Value', label : 'Value', type : 'number'
			}],
		rows : [{ c : [{ v : '72727335' }, { v : '2012' }, { v : '' }, { v : '' }, { v : '850' }, { v : 'Tijdigheid' }, { v : 95 }]
			}, { c : [{ v : '75757554' }, { v : '2012' }, { v : '' }, { v : '' }, { v : '900' }, { v : 'Tijdigheid' }, { v : 80 }]
			}, { c : [{ v : '73731810' }, { v : '2012' }, { v : '' }, { v : '' }, { v : '1000' }, { v : 'Tijdigheid' }, { v : 70 }]
			}]
		}); 	
		
	var preparedData5 = getChartDataSource(originalData5, currentAgbCode, columnIndexArray);	
	var preparedData6 = getChartDataSource(originalData6, currentAgbCode, columnIndexArray);
	var preparedData7 = getChartDataSource(originalData7, currentAgbCode, columnIndexArray);
			
		
	var optionsSend = {
		  title: 'TIJDIGHEID',
		  max: 100, min: -5,
          redColor: '#9C3420', redFrom: -5, redTo: 0,
          yellowColor: '#E1A8B9', yellowFrom:0, yellowTo: 21,
          greenColor: '#8CC865', greenFrom: 21, greenTo: 100,
          width: 160, height: 160
        };
    var optionsApproved = {
		  title: 'TOEGEKEND',
		  max: 100, min: 0,
          yellowColor: '#E1A8B9', yellowFrom:80, yellowTo: 95,
          greenColor: '#8CC865', greenFrom: 95, greenTo: 100,
          width: 160, height: 160
        };
    var optionsQuality = {
		  title: 'KWALITEIT',
		  max: 100, min: 0,
          yellowColor: '#E1A8B9', yellowFrom:85, yellowTo: 95,
          greenColor: '#8CC865', greenFrom: 95, greenTo: 100,
          width: 160, height: 160
        };

	// Create and draw the visualization.
	new google.visualization.Gauge(document.getElementById('Graph05gauge_div')).draw(preparedData5, optionsSend);
	new google.visualization.Gauge(document.getElementById('Graph06gauge_div')).draw(preparedData6, optionsApproved);
	new google.visualization.Gauge(document.getElementById('Graph07gauge_div')).draw(preparedData7, optionsQuality);
}
