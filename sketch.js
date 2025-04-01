let playerX = 0
let playerY = 0
let totalDistance = 0
let victory
let gameWon

function setup() {
  createCanvas(400, 400);
}

function preload() {
  victory = loadSound('victory.mp3')
  gameWon = loadImage('gameWon.gif')
}

function draw() {
  background(220);
  
    if (keyIsDown(LEFT_ARROW))  {
      playerX -= 2
      totalDistance -=2
    }
    if (keyIsDown(RIGHT_ARROW)) {
      playerX += 2;
      totalDistance +=2
    }
    if (keyIsDown(UP_ARROW)){
      playerY -= 2
      totalDistance -=2
    }
    if (keyIsDown(DOWN_ARROW)) {
      playerY += 2
      totalDistance +=2
    }
    
    ellipse(playerX, playerY, 30);
    
    fill(0);
    textSize(16);
    text("Distance: " + floor(totalDistance), width / 2, 20);
    
    if (totalDistance >= 500) {
      image(gameWon, 0, 0, width, height);
      if(victory.isPlaying() === false){
        victory.play()
      }
    }
  
}
