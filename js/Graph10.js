/**
 * Status AW319 berichten
 * @author gary.gan
 */
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawGraph10Chart() {

	// Create the data table.
	var data = new google.visualization.DataTable();
	data.addColumn('string', 'Status');
	data.addColumn('number', 'RecordsCount');
	data.addRows([['Valide', 100], ['In behandeling', 800], ['Niet (geheel) valide', 200], ['Compleet afgekeurd', 50]]);

	// Set chart options
	var options = {
		'title' : 'STATUS AW319 BERICHTEN',
		'width' : 400,
		'height' : 300,
		'slices': {0: {color: '#6FBE44'}, 1: {color: '#D37897'}, 2: {color: '#4A9BB8'}, 3: {color: '#AC573B'}}
	};

	// Instantiate and draw our chart, passing in some options.
	var chart = new google.visualization.PieChart(document.getElementById('Graph10Chart_div'));
	chart.draw(data, options);
}
