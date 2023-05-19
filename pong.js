var canvas = document.getElementById("gameCanvas");
var canvasContext = canvas.getContext("2d");
var ballX = 400;
var ballY = 300;
var ballSpeedX = 5;
var ballSpeedY = 5;
var ballRadius = 100;

function drawBall() {
    canvasContext.beginPath();
    canvasContext.arc(ballX, ballY, ballRadius, 0, Math.PI*2, true);
    canvasContext.fillStyle = "white";
    canvasContext.fill();
}

function moveBall() {
    ballX += ballSpeedX;
    ballY += ballSpeedY;
  
    // check for collision with left or right border
    if (ballX - ballRadius < 0 || ballX + ballRadius > canvas.width) {
      ballSpeedX = -ballSpeedX;
    }
  
    // check for collision with top or bottom border
    if (ballY - ballRadius < 0 || ballY + ballRadius > canvas.height) {
      ballSpeedY = -ballSpeedY;
    }
}

function draw() {
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    canvasContext.fillStyle = "grey";
    canvasContext.fillRect(0, 0, canvas.width, canvas.height);
    drawBall();
}

setInterval(function() {
    moveBall();
    draw();
}, 30);

