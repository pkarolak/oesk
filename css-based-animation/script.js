

function setupCssBalls() {

for (i = 0 ; i < 2000 ; i++) {
	var newBall = document.createElement('div');
	newBall.id = 'o1';
	newBall.className = 'animatable-object';
	newBall.style.animation = "moveX " + Math.random().toFixed(2) + "s linear 0s infinite alternate, moveY " + Math.random().toFixed(2) + "s linear 0s infinite alternate";
	document.getElementById('css-animation-area').appendChild(newBall);
}

}


var startTime = Date.now();
var frame = 0;
var counter = document.getElementsByClassName('counter')[0];

function tick() {
  var time = Date.now();
  frame++;
  if (time - startTime > 1000) {
      console.log( (frame / ((time - startTime) / 1000)).toFixed(1) );
      //counter.innerHTML = "FPS: "+(frame / ((time - startTime) / 1000)).toFixed(1);
      startTime = time;
      frame = 0;
	}
  window.requestAnimationFrame(tick);
}

