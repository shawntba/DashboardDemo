/**
 * Fix the google chart icons as the FD;
 * @author gary.gan
 */
$(document).ready(function(){
	
});

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