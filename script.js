var counter = document.getElementsByClassName('counter')[0];


$(document).ready(function() {
  var animTime = 2000;
  var chartCtx = $('#chart').get(0).getContext('2d');
  $('#start-test').click(function() {
    console.log('fasdfasd');
    
    
    setupCanvas(2000);
    setTimeout(function() {
      destroyCanvas();
      
      console.log(canvasResults);
      
      setupCss(2000);
      setTimeout(function() {
        destroyCss();
        
        
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
        });

      }, animTime);
    }, animTime);
  
  });
});

