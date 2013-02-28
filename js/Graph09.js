/**
 * Prognose gedeclareerde bedragen
 * @author gary.gan
 */
function drawGraph09Visualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['Period', 'Bedrag', 'Bedrag'],
	['Jan',  1336060,   0],
	['Feb',  1538156,   0],
	['Maa',  1576579,   0],
	['Apr',  1600652,   0],
	['Mei',  0,   1968113],
	['Jun',  0,   1901067]
  ]);
  
  // Set chart options
	var options = {
		'title' : 'PROGNOSE GEDECLAREERDE BEDRAGEN',
		'width' : 600,
		'height' : 400,
		'legend' : { 'position': 'none' },
		'series': [{'color': '#4A9BB8'}, {'color': '#D37897'}]
	}; 

  // Create and draw the visualization.
  new google.visualization.ColumnChart(document.getElementById('Graph09Visualization_div')).
      draw(data, options);
}