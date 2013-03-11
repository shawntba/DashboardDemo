/**
 * Tijdigheid (Timeliness) of the send AW319 messages.
 * @author gary.gan
 */
function drawGraph05Visualization(currentAgbCode, columnIndexArray) {
	// Create and populate the data table.
	var originalData5 = new google.visualization.DataTable({
		cols : [{ id : '', label : 'Uitvoerder', type : 'string'
			}, { id : '', label : 'Year', type : 'string'
			}, { id : '', label : 'Periode Type', type : 'string'
			}, { id : 'PeriodNum', label : 'PeriodNum', type : 'string'
			}, { id : '', label : 'Label', type : 'string'
			}, { id : '', label : 'Value', type : 'number'
			}],
		rows : {}
		}); 
		
	var originalData6 = new google.visualization.DataTable({
		cols : [{ id : '', label : 'Uitvoerder', type : 'string'
			}, { id : '', label : 'Year', type : 'string'
			}, { id : '', label : 'Periode Type', type : 'string'
			}, { id : 'PeriodNum', label : 'PeriodNum', type : 'string'
			}, { id : '', label : 'Label', type : 'string'
			}, { id : '', label : 'Value', type : 'number'
			}],
		rows : {}
		}); 
		
	var originalData7 = new google.visualization.DataTable({
		cols : [{ id : '', label : 'Uitvoerder', type : 'string'
			}, { id : '', label : 'Year', type : 'string'
			}, { id : '', label : 'Periode Type', type : 'string'
			}, { id : 'PeriodNum', label : 'PeriodNum', type : 'string'
			}, { id : '', label : 'Label', type : 'string'
			}, { id : '', label : 'Value', type : 'number'
			}],
		rows : {}
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
