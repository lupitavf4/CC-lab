////Variables for the smile.
let varX;
let varY;
let constArc;

////Variables to detect the position of the mouse and adjust the system accordingly
let c, l_eb=0, r_eb=0, l_e=0, r_e=0, cg= 0, cb =0, m_a = 0;
let alpha = 0, betta= 0, gamma=0, delta=0, epsilon=0, zeta=0, eta=0;
let c_full = 0;
let c_full1 =569;
let x = 0;
let mouthX, mouthY, mouthWidth, mouthHeight;
let showRobot = false;
let speed = 0.2
let osc;

////Variables to update the position of the robot. 
let x1 = 0;
let y1 = 0;

////Setting up everything I need to initialize.
function setup() {
  createCanvas(400, 400);
  refreshMouthCoordinates();
  setRandomTimeout();
  frameRate(5);
  osc = new p5.Oscillator('sine');
  osc.freq(440);
  osc.amp(0.5);
  osc.start();
  setInterval(updatePosition, 1000);
}


function updatePosition() {
  x1 = random(width);
  y2 = random(height);
}

function setRandomTimeout() {
  let interval = random(50, 100);
  setTimeout(refresh, interval);
}

function refresh() {
  refreshMouthCoordinates();
  osc.freq(mouthWidth * 10);
  osc.start();
  setRandomTimeout();
}


function refreshMouthCoordinates() {
  mouthX = random(113, 287);
  mouthY = random(263, 320);
  mouthWidth = random(13, 287 - mouthX);
  mouthHeight = random(13, 350 - mouthY);
}


function draw() {
  background(220);
  
  constArc = PI/6;
  varX = mouseX/15;
  varY = mouseY/15;
  
  c = sqrt(mouseX*mouseX, mouseY*mouseY);

  c_full = 3
  c_full1=569
  epsilon = 3/25;
  zeta = c_full/20;
  gamma = c_full/15;
  delta = c_full/20; 
  alpha = 128/c_full1;
  betta = 143/c_full1;
  eta = 5/c_full1;
  
  l_eb = epsilon*c;
  r_eb = zeta*c;
  l_e = gamma*c;
  r_e = delta*c;
  c_g = alpha*c;
  c_b = betta*c;
  m_a= eta*c;
  
  ////face
  push();
  strokeWeight(8);
  fill(255, 227-c_g, 224-c_b);
  rect(50, 40, 200, 200, 30);
  pop();
  
    ////eyes
  //left eye
  push();
  ellipse(120, 120, 40, 40)
  pop();
  push();
  fill(16, 0, 0)
  ellipse(120, 120, 15+l_e/2, 15+l_e/2);
  pop();
  //right eye
  push();
  ellipse(180, 120, 40, 40)
  pop();
  push();
  fill(16, 0, 0)
  ellipse(180, 120, 15+l_e/2, 15+l_e/2);
  pop();
  
  /////eyebrows
  //left eyebrow 
  push();
  strokeWeight(8);
  line(110, 95-20, 130, 85 +l_eb-20);
  pop();
  //right eyebrow
  push();
  strokeWeight(8)
  line(170, 90+ r_eb-20, 190, 100-20);
  pop();
  

  
  ////mouth
  push();
  strokeWeight(8);
  noFill();
  arc(150, 150, 60, 60, -11*constArc-varX/100, -7*constArc-varY/100, OPEN)
  pop();
  
  ////button
  push();
  strokeWeight(5);
  line(230, 330, 380, 330)
  pop();
  
  push();
  strokeWeight(5);
  ellipse(300, 300+x, 70, 50)
  pop();
  
  push();
  fill(230, 57, 70);
  strokeWeight(10);
  ellipse(300, 350, 70, 50)
  pop();
  
  push();
  fill(230, 57, 70);
  noStroke();
  rect(265, 300+x, 70, 50-x)
  ellipse(300, 350, 70, 50)
  pop();
  
  push();
  fill(230, 57, 70);
  strokeWeight(5);
  ellipse(300, 300+x, 70, 50)
  pop();
  
  if (c > 200) {
    fill(0); // Set the text color to black
    textSize(32); // Set the text size
    text('DO NOT!', 100, 300); // Display the text
  }
  
  if (showRobot) {
  

  let x1 = random(width)-100; // Compute x position
  let y1 = random(height)-100; // Compute y position

  push();
  translate(x1, y1);
  scale(0.4);
  background(220);
  strokeWeight(13);

  // Robot face
  noFill();
  rect(100, 150, 200, 200);  

  // Eyes
  strokeCap(SQUARE);
  line(150, 200, 150, 250);  
  line(250, 200, 250, 250);
  strokeCap(ROUND);

  // Mouth
  rect(mouthX, mouthY, mouthWidth, mouthHeight);

  // Antenna base
  rect(150, 120, 100, 30);
  
  // Antenna upright with movement based on mouseX
  ///////////////////////////////////////////////////
  let antennaX = map(mouseX, 0, 400, 160, 200);  // Map mouse x-coordinates to antenna position
  rect(antennaX, 70, 20, 50); 
    let antennarX = map(mouseX, 0, 400, 160, 210);  // Map mouse x-coordinates to antenna position
    let antennarY = map(mouseY, 0, 400, 50, 60);  // Map mouse x-coordinates to antenna position
  rect(antennaX, 70, 20, 50); 
    
  fill(255);
  ellipse(antennarX, antennarY, 40, 40);  
  ///////////////////////////////////////////////////
    pop();
  }
    
}

function mousePressed() {
  
  if (
    mouseX > 200 &&
    mouseX < 400 &&
    mouseY > 200 &&
    mouseY < 400
  ) {
  // Set a delay before setting showRobot to true
  let delay = 100; // Delay in milliseconds (e.g., 1000 ms = 1 second)
    x = 30; // Set x immediately
  
  setTimeout(() => {
    showRobot = true;
  }, delay);
  }
    
  
}