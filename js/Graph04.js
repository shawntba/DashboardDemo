/**
 * Gedeclareerd verloop
 * @author gary.gan
 */
function drawGraph04Visualization() {
  // Some raw data (not necessarily accurate)
  var data = google.visualization.arrayToDataTable([
    ['Month',   'Totaal', 'Goedgekeurd', 'Afgekenur'],
    ['Jan',    100,      80,         20],
    ['Fed',    120,      60,        60],
    ['Maa',    90,      30,        60],
    ['Apr',    120,      100,        20],
    ['Mei',    140,      120,         20],
    ['Jun',    120,      90,         30],
    ['Jul',    95,      45,         50],
    ['Aug',    120,      70,         50],
    ['Sep',    110,      100,         10],
    ['Okt',    85,      80,         5],
    ['Nov',    120,      90,         30],
    ['Dec',    140,      100,         40],
  ]);

  // Create and draw the visualization.
  var ac = new google.visualization.AreaChart(document.getElementById('Graph04Visualization_div'));
  ac.draw(data, {
    title : 'GEDECLAREERD & TOEGEKEND',
    isStacked: false,
    width: 500,
    height: 300,
    legend: {position: 'right'},
    series: [{color: '#4A9BB8'}, {color: '#D37897'}, {color: '#6FBE44'}]
  });
}