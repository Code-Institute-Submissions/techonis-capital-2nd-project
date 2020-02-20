/* For switching tabs in portfolio */
$('#object-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

/* init isotope */
var $grid = $('.grid').isotope({
  // options
});
// filter by class//
$('.filter-button-group').on( 'click', 'button', function(){
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

/*** making small graphs ***/

// function to make graphs
var data1 = [[15, 19, 22, 5, 22], [12, 15, 65, 25, 62], [18, 1, 25, 24, 1], [12, 25, Math.floor(Math.random() * 100), 42, 5], [12, Math.floor(Math.random() * 100), 65, 25, 62], [12, 15, 65, Math.floor(Math.random() * 100), 62], [12, 15, Math.floor(Math.random() * 100), 25, 62], [12, Math.floor(Math.random() * 100), 65, 25, 62], [Math.floor(Math.random() * 100), 15, Math.floor(Math.random() * 100), 25, 62]];
var chartNr =['myChart-1', 'myChart-2', 'myChart-3', 
'myChart-4', 'myChart-5', 'myChart-6', 'myChart-7', 'myChart-8', 'myChart-9'];

function makeCharts(data, chartNr) {
  var ctx = document.getElementById(chartNr).getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['1995', '2000', '2005', '2010', '2020'],
          datasets: [{
              label: 'object price',
              cubicInterpolationMode: 'monotone',
              data: data,
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  '#72223b'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
}
/*** Main big chart ***/

function makeBigChart() {
  var ctx = document.getElementById('bigChart').getContext('2d');
  var bigChart = new Chart(ctx, {
      type: 'line',
      data: {
          labels: ['1995', '2000', '2005', '2010', '2020'],
          datasets: [{
              label: 'object price',
              cubicInterpolationMode: 'monotone',
              data: [12, 15, 62, 63 , 25],
              backgroundColor: [
                  'rgba(255, 99, 132, 0.2)'
              ],
              borderColor: [
                  '#72223b'
              ],
              borderWidth: 1
          }]
      },
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          }
      }
  });
}

$(document).ready(function() {
  makeBigChart();
});
$(".stat-1").click(function(){
    makeCharts(data1[0], chartNr[0]);
  });
$(".stat-2").click(function(){
makeCharts(data1[1], chartNr[1]);
  });
$(".stat-3").click(function(){
makeCharts(data1[2], chartNr[2]);
  });
$(".stat-4").click(function(){
makeCharts(data1[3], chartNr[3]);
  });
$(".stat-5").click(function(){
makeCharts(data1[4], chartNr[4]);
});
$(".stat-6").click(function(){
makeCharts(data1[5], chartNr[5]);
  });
$(".stat-7").click(function(){
makeCharts(data1[6], chartNr[6]);
  });
$(".stat-8").click(function(){
makeCharts(data1[7], chartNr[7]);
  });
$(".stat-8").click(function(){
makeCharts(data1[8], chartNr[8]);
  });
$(".stat-9").click(function(){
makeCharts(data1[9], chartNr[9]);
  });

