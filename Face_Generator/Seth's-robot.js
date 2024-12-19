let mouthX, mouthY, mouthWidth, mouthHeight;
let osc;

function setup() {
  createCanvas(400, 400);
  background(255);

  osc = new p5.Oscillator('triangle');
  osc.freq(440);
  osc.amp(0.5);
  osc.start();

  refreshMouthCoordinates();
  setRandomTimeout();
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
  background(255);
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
}