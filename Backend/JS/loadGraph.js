
// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Test', 'Percentage obtained'],
  ['Internal-1', 70],
  ['Mid-Semester', 80],
  ['Internal-2', 75],
  ['Viva', 90],
  ['End-Semester', 85]
]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Assessment Report', 'width':'100%' , 'height':'100%', 'vAxis': {minValue: 0, maxValue: 100} };

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.AreaChart(document.getElementById('chart'));
  chart.draw(data, options);
}