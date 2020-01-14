var ballCount = 10;
/* var xs = [];
var ys = [];
var speedX = [];
var speedY = []; */
var balls = [];

function setup() {
  createCanvas(400, 400);

  for (var i = 0; i < ballCount; i = i + 1) {
    var myBall = {
		xs: Math.random() * width,
		ys: Math.random() * height,
		speedX: Math.random() * 3,
		speedY: Math.random() * 3
	}
	balls[i] = myBall;
	console.log(balls);
  }
}

function draw() {
  background(200);

  for (var i = 0; i < ballCount; i = i + 1) {
    balls[i].xs += balls[i].speedX;
    balls[i].ys += balls[i].speedY;

    if (balls[i].xs < 0 || balls[i].xs > width) {
      balls[i].speedX = balls[i].speedX * -1;
    }
    if (balls[i].ys < 0 || balls[i].ys > height) {
      balls[i].speedY = balls[i].speedY * -1;
	  
	  }
    }
	
	for (var i = 0; i < ballCount; i ++){
		ellipse(balls[i].xs - 5, balls[i].ys - 5, 20, 20);
	}
}