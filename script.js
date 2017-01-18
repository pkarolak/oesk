$(document).ready(function() {
  var animTime = 5000;
  var chartCtx = $('#chart').get(0).getContext('2d');
  $('#start-test').click(function() {
    console.log('fasdfasd');
    canvasAnimEnabled = true;
    startCanvasAnimation();
    setTimeout(function() {
      canvasAnimEnabled = false;
      console.log(canvasResults);
      //$('.css-anim').addClass('start-css-anim');
      setupCssBalls();
      tick();
      setTimeout(function() {
        //$('.css-anim').removeClass('start-css-anim');
        var chart = new Chart(chartCtx, {
          type: 'line',
          data: {
            datasets: [{
              label: 'scatter',
              data: canvasResults.map((v, i) => ({x: i, y: v})),
            }]
          },
          options: {
        scales: {
            xAxes: [{
                type: 'linear',
                position: 'bottom'
            }]
        }
    }
        });
      }, animTime);
    }, animTime);
  });
})

