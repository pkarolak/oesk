var counter = document.getElementsByClassName('counter')[0];
function runTest(ballCount) {
  var animTime = 5000;
  return new Promise(function(resolve) {
    setupCanvas(ballCount);
    setTimeout(function() {
      destroyCanvas();

      console.log(canvasResults);

      setupCss(ballCount);
      setTimeout(function() {
        destroyCss();
        resolve();
        testCase++;
      }, animTime);
    }, animTime);
  });
}

$(document).ready(function() {
  $('#start-test').click(function() {
    runTest(100).then(function() {
      runTest(500).then(function() {
        runTest(1000).then(function() {
          runTest(2000).then(function() {
            const cssResultsAvgs = cssResults.map(function(i) {
              return i.reduce(function(a, b) { return a + b }) / i.length;
            });
            const canvasResultsAvgs = canvasResults.map(function(i) {
              return i.reduce(function(a, b) { return a + b }) / i.length;
            });
            //for (var i=0; i<4; i++) {
              console.log([cssResultsAvgs[i], canvasResultsAvgs[i]]);
              var chart = $('<canvas></canvas>');
              $('.chart-wrapper').append(chart);
              new Chart(chart[0].getContext('2d'), {
                type: 'bar',
                data: {
                  labels: ['100 kulków', '500 kulków', '1000 kulków', '2000 kulków'],
                  datasets: [
                    {
                      label: 'css',
                      backgroundColor: [
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                        'rgba(255, 99, 132, 0.2)',
                      ],
                      data: cssResultsAvgs,
                    },
                    {
                      label: 'canvas',
                      backgroundColor: [
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                        'rgba(54, 162, 235, 0.2)',
                      ],
                      data: canvasResultsAvgs,
                    }
                  ]
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
              })
           // }
          });
        });
      });
  /*  var chartCtx = $('#chart').get(0).getContext('2d');
      var chart = new Chart(chartCtx, {
          type: 'line',
          data: {
            datasets: [
              {
                label: 'Canvas',
                data: canvasResults.map((v, i) => ({x: i+1, y: v})),
              },
              {
                label: 'CSS',
                data: cssResults.map((v, i) => ({x: i+1, y: v})),
              }
            ]
          },
          options: {
            scales: {
              xAxes: [{
                type: 'linear',
                position: 'bottom',
                ticks: {
                    max: 6,
                    min: 0,
                    stepSize: 1
                }
              }]
            }
          }
        }); */
    });
  });
});

