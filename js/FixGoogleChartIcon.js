/**
 * Fix the google chart icons as the FD;
 * @author gary.gan
 */
$(document).ready(function(){
	
});

/**
 * Get the Year param selector html
 * @param {string} yearSelectorId
 */
function getYearDropdownHtml(yearSelectorId){
	var currentDate = new Date();

	var optionHtmlString = '';
	for (var i = currentDate.getFullYear(); i >= 2012; i--) {
		optionHtmlString.append("<option value='" + i + "'>" + i + "</option>");
	};

	return "<select id='" + yearSelectorId + "'>" + optionHtmlString + "</select>";
}
