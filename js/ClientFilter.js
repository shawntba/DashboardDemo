/**
 * Draw client filter
 * @author gary.gan
 */
function drawClientFilter() {
	drawClientVerzenderFilter();
	drawClientUitvoerderFilter();
}

function drawClientVerzenderFilter() {
	// Prepare the data.
	var data = google.visualization.arrayToDataTable([['Verzender'], ['73737210']]);

	// Define a category picker for the 'Metric' column.
	var categoryPicker = new google.visualization.ControlWrapper({
		'controlType' : 'CategoryFilter',
		'containerId' : 'ctlVerzender',
		'options' : {
			'filterColumnLabel' : "Verzender",
			'ui' : {
				'labelStacking' : 'vertical',
				'allowTyping' : false,
				'allowMultiple' : false,
				'caption' : 'Kies een waarde...'
			}
		},
		'allowHtml' : true
	});

	var chart = new google.visualization.ChartWrapper({
		'chartType' : 'Table',
		'containerId' : 'verzenderTable',
		'options' : {
			'width' : '100%'
		}
	});

	google.visualization.events.addListener(categoryPicker, 'statechange', function() {
		alert(categoryPicker.getState().selectedValues);
	});

	google.visualization.events.addListener(categoryPicker, 'ready', function() {
		$('#ctlVerzender').find('label').each(function() {
			if ($(this).html() == 'Verzender') {
				$(this).append("<div class='icon-question-sign' style='padding-left: 10px;' name='Only impact report 5,6,8,10.'></div>");
			}
		});
	});

	// Create the dashboard.
	var dashboard = new google.visualization.Dashboard(document.getElementById('filterSender')).
	// Configure the category picker to affect the gauge chart
	bind(categoryPicker, chart).
	// Draw the dashboard
	draw(data);
}

function drawClientUitvoerderFilter() {
	// Prepare the data.
	var data = google.visualization.arrayToDataTable([['Uitvoerder'], ['72727335'], ['75757554']]);

	// Define a category picker for the 'Metric' column.
	var categoryPicker = new google.visualization.ControlWrapper({
		'controlType' : 'CategoryFilter',
		'containerId' : 'ctlUitvoerder',
		'options' : {
			'filterColumnLabel' : 'Uitvoerder',
			'ui' : {
				'labelStacking' : 'vertical',
				'allowTyping' : false,
				'allowMultiple' : false,
				'caption' : 'Kies een waarde...'
			}
		}
	});

	var chart = new google.visualization.ChartWrapper({
		'chartType' : 'Table',
		'containerId' : 'uitvoerderTable',
		'options' : {
			'width' : '100%'
		}
	});

	google.visualization.events.addListener(categoryPicker, 'statechange', function() {
		alert(categoryPicker.getState().selectedValues);
	});

	google.visualization.events.addListener(categoryPicker, 'ready', function() {
		$('#ctlUitvoerder').find('label').each(function() {
			if ($(this).html() == 'Uitvoerder') {
				$(this).append("<div class='icon-question-sign' style='padding-left: 10px;' name='Only impact report 1,2,3,4,7,9'></div>");
			}

			$('.icon-question-sign').qtip({
				content : {
					attr : 'name'
				},
				style : {
					classes : 'ui-tooltip-dark'
				},
				position : {
					viewport : $(window)
				}
			});
		});
	});

	// Create the dashboard.
	var dashboard = new google.visualization.Dashboard(document.getElementById('filterExecutor')).
	// Configure the category picker to affect the gauge chart
	bind(categoryPicker, chart).
	// Draw the dashboard
	draw(data);
}
