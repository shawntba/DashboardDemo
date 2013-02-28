/**
 * Tijdigheid (Timeliness) of the send AW319 messages.
 * @author gary.gan
 */
function drawGraph05Visualization() {
	// Create and populate the data table.
	var dataSend = new google.visualization.DataTable(
		{
			cols: 
				[	
					{ id : 'label', label : 'Label', 	type : 'string'}, 
					{ id : 'value', label : 'Value', 	type : 'number'}
				],
			rows: 
				[
					{ c : [{ v : 'Tijdigheid' }, { v : 8 }]}
				]
		});
		
	var dataApproved = new google.visualization.DataTable(
		{
			cols: 
				[	
					{ id : 'label', label : 'Label', 	type : 'string'}, 
					{ id : 'value', label : 'Value', 	type : 'number'}
				],
			rows: 
				[
					{ c : [{ v : 'Tijdigheid' }, { v : 95 }]}
				]
		});
		
	var dataQuality = new google.visualization.DataTable(
		{
			cols: 
				[	
					{ id : 'label', label : 'Label', 	type : 'string'}, 
					{ id : 'value', label : 'Value', 	type : 'number'}
				],
			rows: 
				[
					{ c : [{ v : 'Kwaliteit' }, { v : 93 }]}
				]
		});
		
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
	new google.visualization.Gauge(document.getElementById('Graph05gauge_div')).draw(dataSend, optionsSend);
	new google.visualization.Gauge(document.getElementById('Graph06gauge_div')).draw(dataApproved, optionsApproved);
	new google.visualization.Gauge(document.getElementById('Graph07gauge_div')).draw(dataQuality, optionsQuality);
}
