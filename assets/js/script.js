/* For switching tabs in portfolio */
$('#object-list a').on('click', function (e) {
    e.preventDefault()
    $(this).tab('show')
  });

/******************************************
 * Isotope.js
 *****************************************/
 
var $grid = $('.grid').isotope({
  // options
});
// filter by class//
$('.filter-button-group').on( 'click', 'button', function(){
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

/*********************************************/

/*********************************************
 * Charts.js
 ********************************************/
// small charts for cards 

var chartColor = 'rgba(114,34,59, 0.4)';
var chartBorder = 'rgba(114,34,59)';
var chartNr = [];
var count = 1;
var data;
var myChart;
var object_title;


function createChartNr(){
  while (count < 10){
    let result = 'smallChart-' + count;
    chartNr.push(result);
    count++;
  }
};
createChartNr();


function drawSmallCharts(chartNr){
  var ctx = document.getElementById(chartNr).getContext('2d');
  var myChart = new Chart(ctx, {
      type: 'line',
      data: {
          datasets: [{
              label: 'Property price',
              cubicInterpolationMode: 'monotone',
              backgroundColor: [
                  'rgba(255, 99, 132, 0.4)'
              ],
              borderColor: [
                  '#72223b'
              ],
              borderWidth: 1
          }]
      },
      plugins: [ChartDataSource],
      options: {
          scales: {
              yAxes: [{
                  ticks: {
                      beginAtZero: true
                  }
              }]
          },
        plugins: {
          datasource: {
            type: 'sheet',
            url: 'dataset.xlsx',
            datasetLabels: object_title,
            indexLabels: 'Sheet1!B1:G1',
            data: data,
          }

        }
      }
  })
};


$(".stat-1").click(function(){
  data = 'Sheet1!B1:G1';
  object_title = 'Sheet1!A2';
  drawSmallCharts(chartNr[0]);    
});
$(".stat-2").click(function(){
  data = 'Sheet1!B2:G2';
  object_title = 'Sheet1!A3';
  drawSmallCharts(chartNr[1]);    
});
$(".stat-3").click(function(){
  data = 'Sheet1!B3:G3';
  object_title = 'Sheet1!A3';
  drawSmallCharts(chartNr[2]);    
});
$(".stat-4").click(function(){
  data = 'Sheet1!B4:G4';
  object_title = 'Sheet1!A4';
  drawSmallCharts(chartNr[3]);
});
$(".stat-5").click(function(){
  data = 'Sheet1!B5:G5';
  object_title = 'Sheet1!A5';
  drawSmallCharts(chartNr[4]);    
});
$(".stat-6").click(function(){
  data = 'Sheet1!B6:G6';
  object_title = 'Sheet1!A6';
  drawSmallCharts(chartNr[5]);    
});
$(".stat-7").click(function(){
  data = 'Sheet1!B7:G7';
  object_title = 'Sheet1!A7';
  drawSmallCharts(chartNr[6]);    
});
$(".stat-8").click(function(){
  data = 'Sheet1!B8:G8';
  object_title = 'Sheet1!A8';
  drawSmallCharts(chartNr[7]);
});
$(".stat-9").click(function(){
  data = 'Sheet1!B9:G9';
  object_title = 'Sheet1!A9';
  drawSmallCharts(chartNr[8]);
});

// Big Chart

var configValue = {
  type: 'line',
  data: {
      datasets: [{
          label: 'Property price',
          cubicInterpolationMode: 'monotone',
          backgroundColor: [
              'rgba(255, 99, 132, 0.4)'
          ],
          borderColor: [
              '#72223b'
          ],
          borderWidth: 1
      }]
  },
  plugins: [ChartDataSource],
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      },
    plugins: {
      datasource: {
        type: 'sheet',
        url: 'dataset.xlsx',
        datasetLabels: 'Sheet2!A2',
        indexLabels: 'Sheet2!B1:G1',
        data: 'Sheet2!B2:G2',
      }

    }
  }
};

var configType = {
  type: 'bar',
  data: {
      datasets: [{
          label: 'Property price',
          cubicInterpolationMode: 'monotone',
          backgroundColor: 'red',
          borderColor: [
              '#72223b'
          ],
          borderWidth: 1
      },
      {
        label: 'Property price',
        cubicInterpolationMode: 'monotone',
        backgroundColor: 'green',
        borderColor: [
            '#72223b'
        ],
        borderWidth: 1
    },
    {
      label: 'Property price',
      cubicInterpolationMode: 'monotone',
      backgroundColor: 'blue',
      borderColor: [
          '#72223b'
      ],
      borderWidth: 1
  }]
  },
  plugins: [ChartDataSource],
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      },
    plugins: {
      datasource: {
        type: 'sheet',
        url: 'dataset.xlsx',
        datasetLabels: 'Sheet3!A2:A4',
        indexLabels: 'Sheet3!B1:G1',
        data: 'Sheet3!B2:G4',
      }

    }
  }
};

var configPercent = {
  type: 'pie',
  data: {
      datasets: [{
          label: 'Property price',
          cubicInterpolationMode: 'monotone',
          backgroundColor: [
              'rgba(255, 99, 132, 0.4)'
          ],
          borderColor: [
              '#72223b'
          ],
          borderWidth: 1
      }]
  },
  plugins: [ChartDataSource],
  options: {
      scales: {
          yAxes: [{
              ticks: {
                  beginAtZero: true
              }
          }]
      },
    plugins: {
      datasource: {
        type: 'sheet',
        url: 'dataset.xlsx',
        datasetLabels: 'Sheet4!A2:A4',
        indexLabels: 'Sheet4!B1',
        data: 'Sheet4!B2:B4'
      }

    }
  }
};



// $("#portfolioByValue").click(function() {
//   var ctx = document.getElementById('bigChart').getContext('2d'); 
//   bigChart = new Chart(ctx, configValue);
// });

// $("#portfolioByType").click(function() {
//   bigChart = 'x';
//   bigChart = new Chart(ctx, configType);
// });

// $("#portfolioByPercent").click(function() {
//   bigChart = 'x';
//   bigChart = new Chart(ctx, configPercent);
// });

var ctx  = document.getElementById('bigChart');
var bigChart = new Chart(ctx , configValue);

document.getElementById('portfolioByValue').onclick = function() {
  bigChart.destroy();
  bigChart = new Chart(ctx, configValue);
};

document.getElementById('portfolioByType').onclick = function() {
  bigChart.destroy();
  bigChart = new Chart(ctx, configType);
};

document.getElementById('portfolioByPercent').onclick = function() {
  bigChart.destroy();
  bigChart = new Chart(ctx, configPercent);
};