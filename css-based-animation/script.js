var cssAnimEnabled = false;
var startTime;
var cssResults = [];

function setupCss(ballsNumber) {
  var animationArea = document.createElement('div');
  animationArea.id = "css-animation-area";
  animationArea.className = "animation-area css-anim";
  for (i = 0 ; i < ballsNumber ; i++) {
    var styleValue = "moveX " + Math.random().toFixed(2) + "s linear 0s infinite alternate, moveY " + Math.random().toFixed(2) + "s linear 0s infinite alternate";
    var newBall = document.createElement('div');
  	newBall.id = 'o1';
  	newBall.className = 'animatable-object';
  	newBall.style.animation = styleValue;
  	animationArea.appendChild(newBall);
  }
  document.getElementById('animation-wrapper').appendChild(animationArea);
  cssAnimEnabled = true;
  startTime = Date.now();
  tick();
}

function destroyCss() {
  cssAnimEnabled = false;
  document.getElementById('css-animation-area').remove();
}


var frame = 0;
var counter = document.getElementsByClassName('counter')[0];

function tick() {
  if(!cssAnimEnabled) return;
  var time = Date.now();
  frame++;
  if (time - startTime > 1000) {
      var fps = (frame / ((time - startTime) / 1000)).toFixed(1);
      console.log( fps );
      counter.innerHTML = "FPS: " + fps;
      cssResults.push( fps );
      startTime = time;
      frame = 0;
	}
  window.requestAnimationFrame(tick);
}

