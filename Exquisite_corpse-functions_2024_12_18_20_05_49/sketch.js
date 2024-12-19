
////MUSHROOM BELLY 
// Mushroom body coordinates
let x1 = 150, y1 = 10; // Top left
let x2 = 250, y2 = 10; // Top right
let x3 = 300, y3 = 390; // Bottom right
let x4 = 100, y4 = 390; // Bottom left
////Worm
let worm = [];
let numSegments = 18;
let segmentLength = 10;
let amplitude = 18; // Controls how wavy the S shape is
let startX = 50;
let startY = 20;

////Sonic thighs variables
let x1a = 100, y1a = 10; // Top left
let x2a = 250, y2a = 10; // Top right
let x3a = 220, y3a = 70; // Bottom right
let x4a = 120, y4a = 55; // Bottom left


////Parameters
let scM, xM, yM;
let scS, xS, yS;


function setup() {
  createCanvas(400, 600);
}

function draw() {
  drawMushroom(0.4, 250, 480);
  drawSonicLegs(0.7, 45, 380);
  drawCatHead();
}


function drawMushroom(scM, xM, yM) { 
  push();
  scale(scM)
  translate(xM, yM);
  push();
  drawWorm();
  pop();
  push();
  drawTrunk();
  pop();
  pop();
}


function drawTrunk() {
  ////Red lines
  strokeWeight(5);
  stroke('red');
  strokeWeight(5);
  line(150, 10, 100, 390);
  line(250, 10, 300, 390);
  //Trunk
  fill(253, 228, 207);
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
  //Finger
  rect(330, 140, 20, 40, 10);
  //Arm
  rect(220, 165, 150, 50, 10);
  //Hand
  rect(320, 160, 60, 60, 10);
  //Arm, hand and finger fills
  ////Extra lines 
  
  noStroke();
  rect(220, 165, 150, 50, 10);
  rect(320, 160, 60, 60, 10);
  rect(330, 140, 20, 40, 10);
  push();
  fill(253, 228, 207); // Color for the trapezoid
  noStroke(); // Outline color
  // Draw the inverted trapezoid
  quad(x1, y1, x2, y2, x3, y3, x4, y4);
  pop();
  stroke('red');
  strokeWeight(3);
  line(170, 30, 130, 360);
  line(230, 40, 270, 360);
  line(200, 50, 200, 340);
  
}

function drawWorm() {
  translate(60,100);
  rotate(0.2);
    // Set up positions for the worm segments in an S shape
  for (let i = 0; i < numSegments; i++) {
  let y = startY + i * segmentLength;
  let x = startX + sin(i * 0.5) * amplitude; // Sinusoidal wave pattern
    worm.push(createVector(x, y));
  }
  // Draw the S-shaped worm
  noStroke();
  fill(112, 194, 88);
  for (let i = 0; i < worm.length; i++) {
  ellipse(worm[i].x, worm[i].y, 20, 20); // Draw each segment of the worm
}
}


function drawSonicLegs(scS, xS, yS) {
  push();
  scale(scS);
  translate(xS, yS);
  ////Leg 1
  ////Thigh
  push();
  translate(0, 200);
  rotate(-0.6);
  noStroke();
  fill(26, 80, 188);
  quad(x1a, y1a, x2a, y2a, x3a, y3a, x4a, y4a);
  circle(250, 50, 80);
  circle(110, 32.5, 48);
  pop();
  noStroke();
  ////Bottom part of the leg
  fill(26, 80, 188);
  rect(90, 180, 30, 130);
  ////white part of the sock
  fill(255, 255, 255);
  rect(88, 310, 36, 20);
  ////Shoes
  fill('red');
  rect(88, 330, 36, 30);
  rect(50, 350, 80, 40, 10);
  
  
  ////Leg 2
  ////Thigh
  push();
  translate(180, 350);
  rotate(-1.5);
  noStroke();
  fill(26, 80, 188);
  quad(x1a, y1a, x2a, y2a, x3a, y3a, x4a, y4a);
  circle(250, 50, 80, 80);
  circle(110, 32.5, 48, 48);
  pop();
  noStroke();
  ////Bottom part of the leg
  push();
  translate(120, 0);
  fill(26, 80, 188);
  rect(90, 180, 30, 130);
  ////white part of the sock
  fill(255, 255, 255);
  rect(88, 310, 36, 20);
  ////Shoes
  fill('red');
  rect(88, 330, 36, 30);
  rect(50, 350, 80, 40, 10);
  pop();
  pop();
}

function drawCatHead() { 
  ////Cat's head
  push();
  translate(80, 0);
  scale(0.5);
  ////Ears 
  fill(255, 207, 210);
  
  //Left ear 
  rect(100, 40, 50, 120, 20);
  
  //Right ear
  rect(250, 40, 50, 120, 20);
  
  ////Face
  ellipse(200, 250, 300, 300);
  
  //// Smile 
  //arc
  noFill();
  stroke(0);
  strokeWeight(30);
  arc(200, 300, 100, 50, 0, PI);
  arc(200, 300, 100, 120, 0, PI);
  //tongue
  strokeWeight(3)
  fill(255, 92, 156);
  triangle(190, 340, 210, 340, 200, 400);
  
  ////Whiskers
  push();
  stroke(0); // Black whiskers
  strokeWeight(5);
  translate(0, 50);
  // Left side whiskers
  line(100, 230, 20, 220); // Top left whisker
  line(100, 240, 20, 240); // Middle left whisker
  line(100, 250, 20, 260); // Bottom left whisker

  // Right side whiskers
  line(300, 230, 380, 220); // Top right whisker
  line(300, 240, 380, 240); // Middle right whisker
  line(300, 250, 380, 260); // Bottom right whisker
  pop();
  
  
  ////Eye 

  // Eye position and size
  let eyeX = 400 / 2;  // X-coordinate of the eye (center of canvas)
  let eyeY = 400 / 2; // Y-coordinate of the eye (center of canvas)
  let eyeSize = 100;     // Diameter of the eyeball
  let pupilSize = 30;    // Diameter of the pupil
  let pupilRange = eyeSize / 8; // How far the pupil can move inside the eyeball

  // Draw the eyeball
  fill(255);
  stroke(0);
  strokeWeight(4);
  ellipse(eyeX, eyeY, eyeSize, eyeSize);

  // Calculate the pupil position using map()
  let pupilX = map(mouseX, 0, 400, eyeX - pupilRange, eyeX + pupilRange);
  let pupilY = map(mouseY, 0, 400, eyeY - pupilRange, eyeY + pupilRange);

  // Draw the pupil
  fill(0);
  ellipse(pupilX, pupilY, pupilSize, pupilSize);
  pop();
  
}

