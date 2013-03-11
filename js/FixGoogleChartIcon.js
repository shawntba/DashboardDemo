/**
 * Fix the google chart icons as the FD;
 * @author gary.gan
 */
$(document).ready(function(){
	
});

/**
 * Format the original dataTable to needed dataTable for Graph
 * @param {google dataTable} originalDataSource
 * @param {string} currentAgbCode
 * @param {column indexes array} columnIndexArray
 */
function getChartDataSource(originalDataSource, currentAgbCode, columnIndexArray)
{

	var dataSource = originalDataSource;

	var chartDataSource = new google.visualization.DataTable();
		
	for (var i = 0; i < columnIndexArray.length; i++)
	{
		chartDataSource.addColumn(dataSource.getColumnType(columnIndexArray[i]), dataSource.getColumnLabel(columnIndexArray[i]));
	}
			
	var rowIndexes = dataSource.getFilteredRows([{column: 0, value: currentAgbCode}]);
		
	for(var i = 0; i < rowIndexes.length; i++)
	{
		var newRow = new Array();
		for(var j = 0; j < columnIndexArray.length; j++)
		{
			newRow.push(dataSource.getValue(rowIndexes[i] , columnIndexArray[j]));	
		}
		chartDataSource.addRow(newRow);
	}
		
	return chartDataSource;
}

/**
 * convert to correct period text depends on the periodType
 * @param {google dataTable} originalDataSource
 * @param {int} columnIndex
 * @param {string} periodType
 */
function convertPeriodText(originalDataSource, columnIndex, periodType)
{
	var data = originalDataSource;
	
	if( periodType == '0')
	{ 
		for (var i = 0; i < data.getNumberOfRows(); i++)
		{
			var value = data.getValue(i, columnIndex).toString(); 
			
			//data.setColumnLabel(columnIndex, "Periode");
			
			data.setCell(i, columnIndex, getMonth(value));
			
		}
	}
	
	return data;
}

/**
 * get month text depends on the periodNumber
 * @param {string} periodNumber
 */
function getMonth(periodNumber)
{
	var month = "";
	switch(periodNumber)
	{
		case "1" : month = "Jan";
		break;
		case "2" : month = "Feb";
		break;
		case "3" : month = "Maa";
		break;
		case "4" : month = "Apr";
		break;
		case "5" : month = "Mei";
		break;
		case "6" : month = "Jun";
		break;
		case "7" : month = "Jul";
		break;
		case "8" : month = "Aug";
		break;
		case "9" : month = "Sep";
		break;
		case "10" : month = "Okt";
		break;
		case "11" : month = "Nov";
		break;
		case "12" : month = "Dec";
		break;
	}
	
	return month;
}


/**
 * 
 */
function GetRelatedUitvoerder() {
    $.ajax({
        url: "/NavigatorService/WcfReportService.svc/GetEdpDashBoardUitvoerder",
        type: "POST",
        dataType: "json",
        cache: false,
        async: true,
        processData: false,
        contentType: "application/json",
        error: function (req, status, error) {

        },
        success: function (data) {
            var resultAgbs = data["GetEdpDashBoardUitvoerderResult"];
            return resultAgbs;
        }
    });
}

