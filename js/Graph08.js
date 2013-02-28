/**
 * Tijdigheid Zorgkantoor
 * @author gary.gan
 */
function drawGraph08Visualization() {
  // Create and populate the data table.
  var data = google.visualization.arrayToDataTable([
    ['x', 'Aantal dagen', 'Wenselijke termijn', 'Wettelijke termijn'],
	['Jan',   13,            5,           20],
	['Feb',   10,            5,           20],
	['Maa',   14,            5,           20],
	['Apr',   18,            5,           20],
	['Mei',   12,            5,           20],
	['Jun',   16,            5,           20],
	['Jul',   19,            5,           20],
	['Aug',   5,             5,           20],
	['Sep',   3,             5,           20],
	['Okt',   4,             5,           20],
	['Nov',   4,             5,           20],
	['Dec',   5,             5,           20]
  ]);
  

	// Set chart options
	var options = {
		'title' : 'TIJDIGHEID ZORGKANTOOR (AW320)',
		'curveType' : 'function',
		'width' : 500,
		'height' : 300,
		'vAxis' : { 'maxValue' : 24 },
		'series': [{'color': '#4A9BB8'}, {'color': '#6FBE44'}, {'color': '#D37897'}]
	}; 

  // Create and draw the visualization.
  new google.visualization.LineChart(document.getElementById('Graph08Visualization_div')).
      draw(data, options);
}