var cssAnimEnabled = false;
var startTime;
var cssResults = [];
var cssFps = 0;
var time;
var frame = 0;
var c_ballsNumber = 1;


function setupCss(ballsNumber) {
  c_ballsNumber = ballsNumber;

  var counter = document.getElementsByClassName('counter')[0];
  counter.innerHTML = "CSS (" + c_ballsNumber +") | FPS: --.-";
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
  if (cssResults[testCase] === undefined) cssResults[testCase] = [];
  cssFps = 0;
  console.log("Welcome CSS");
  frame = 0;
  startTime = Date.now();
  time = Date.now();
  console.log("CSS FPS on start: "+cssFps);
  tick();
}

function destroyCss() {
  cssAnimEnabled = false;
  document.getElementById('css-animation-area').remove();
  console.log("Goodbye CSS");
}


var counter = document.getElementsByClassName('counter')[0];

function tick() {
  console.log("CSS FPS on tick: "+cssFps);
  if(!cssAnimEnabled) {console.log("and animation disabled"); return;}
  console.log("and animation enabled");
  time = Date.now();
  frame++;
  console.log(frame + " " + time + " " + startTime);
  if (time - startTime > 1000) {
      cssFps = (frame / ((time - startTime) / 1000));
      console.log( cssFps );
      counter.innerHTML = "CSS (" + c_ballsNumber +") | FPS: " + cssFps.toFixed(1);
      console.log(testCase);
      cssResults[testCase].push( cssFps );
      startTime = time;
      frame = 0;
	}
  window.requestAnimationFrame(tick);
}

