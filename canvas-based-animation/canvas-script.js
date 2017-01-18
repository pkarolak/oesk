var canvasAnimEnabled = false;
var canvasResults = [];
var canvas;

function setupCanvas(count) {
	var animationArea = document.createElement('canvas');
  	animationArea.id = "canvas-animation-area";
  	animationArea.className = "animation-area canvas-anim";
  	animationArea.width = "500";
  	animationArea.height = "500";
  	document.getElementById('animation-wrapper').appendChild(animationArea);

  	canvasAnimEnabled = true;
  	
  	function initBalls(count) {
		balls = [];
		color = "rgba(45, 86, 153, 0.4)";
		for (i = 0 ; i < count ; i++) {
			balls.push(new Ball(173, 63, (Math.random().toFixed(2)*100)|0, (Math.random().toFixed(2)*100)|0, color));
		}
		return balls;
	}

	function updateBalls() {
	    var context = canvas.getContext('2d');
	    for(var n = 0; n < balls.length; n++) {
			var ball = balls[n];
			// set ball position based on velocity
			ball.y += ball.vy;
			ball.x += ball.vx;
			// floor condition
			if(ball.y > (canvas.height - ball.radius)) {
			ball.y = canvas.height - ball.radius;
			ball.vy *= -1;
			}
			// ceiling condition
			if(ball.y < (ball.radius)) {
			ball.y = ball.radius;
			ball.vy *= -1;
			}
			// right wall condition
			if(ball.x > (canvas.width - ball.radius)) {
			ball.x = canvas.width - ball.radius;
			ball.vx *= -1;
			}
			// left wall condition
			if(ball.x < (ball.radius)) {
			ball.x = ball.radius;
			ball.vx *= -1;
			}
		}
	}

	function Ball(x, y, vx, vy, color) {
		this.x = x;
		this.y = y;
		this.vx = vx;
		this.vy = vy;
		this.color = color;
		this.origX = x;
		this.origY = y;
		this.radius = 15;
	}


	var startTime = Date.now();
	var frame = 0;
	var counter = document.getElementsByClassName('counter')[0];
	function animate() {
		//stats.end();
	    if (!canvasAnimEnabled) return;
		
		var context = canvas.getContext('2d');

		updateBalls();

		// clear canvas
		context.clearRect(0, 0, canvas.width, canvas.height);

		// render balls
		for(var n = 0; n < balls.length; n++) {
			var ball = balls[n];
			context.beginPath();
			context.arc(ball.x, ball.y, ball.radius, 0, 2 * Math.PI, false);
			context.fillStyle = ball.color;
			context.fill();
		}

	    //measure FPS
		var time = Date.now();
		frame++;
		if (time - startTime > 1000) {
			var fps = (frame / ((time - startTime) / 1000)).toFixed(1);
		    console.log( fps );
		    counter.innerHTML = "FPS: " + fps;
		    canvasResults.push( fps );
	        startTime = time;
		    frame = 0;
		}
		window.requestAnimationFrame(animate);

	}

	canvas = document.getElementById('canvas-animation-area');
	var balls = initBalls(count);
	var fpsStart = new Date().getTime();
	animate();
}


function destroyCanvas() {
	canvasAnimEnabled = false;
	var canvas = document.getElementById('canvas-animation-area').remove();
}