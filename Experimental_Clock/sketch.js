let y_time_bar = 10;
let x = 0; 
let speed = 0.005;
let t1=t2=t3=t4=xBH=0;
let height1 = 80, height2=40, height3=50;



function setup() {
  createCanvas(400, 400);
  frameRate(30);
}

function draw() {
  background(255, 255, 255);
  
  // Use deltaTime to calculate
  // a change in position.
  let deltaX = speed * deltaTime;

  // Update the x variable.
  x += deltaX;
  
  //Update time in the little clock
  let timeString = '7:00';
  if (x < 10) {
    timeString = '7:' + '0' + int(x);
  }
  else if ((x < 60) && (x >=10)) {
    timeString = '7:' + int(x);
  }
  else if ((x >= 60) && (x<70)) {
    timeString = '8:0'+ (int(x)-60);
  }
  else if (x >= 70) {
    timeString = '8:' + (int(x)-60);
  }
  
  ///Move tasks
  if (x >= (110-100)) { 
  t1 = x -10;
  }
  
  if ( (x + height1) >= (200-100)) { 
  t2 = x - 20;
  }
  if ( (x + height1 + height2) >= (245 - 100) ){
    t3 = x - 25;
    xBH = x-25;
  }
  
  //Create little clock that moves representing the passing of time
  push();
  translate(0, x)
  noFill();
  strokeWeight(2);
  rect(300, 100, 50, 30);
  line(100, 100, 300, 100);
  fill('black');
  text(timeString, 310, 100+20);
  pop();
  
  //Create tasks 
  
  // T1 - Getting ready
  push();
  translate(0, t1);
  push();
  fill(251, 248, 204);
  rect(120, 110, 150, height1);
  fill(255, 255, 255);
  rect(225, 120, 35, 25);
  fill('black');
  text('7:10', 225+7, 110 +10 +17);
  text('Getting ready', 120 +30, 110 + 25);
  pop();
  pop();
  
  // T2 - Subway
  push();
  translate(0, t2);
  push();
  fill(253, 228, 207);
  rect(120, 200, 150, height2);
  fill(255, 255, 255);
  rect(225, 200+10, 35, 25);
  fill('black');
  text('7:40', 225+7, 200+10+17);
  text('Subway', 120+30, 200 + 25);
  pop();
  pop();
  
  
  // T3 - Breakfast
  push();
  translate(xBH*5, t3);
  push();
  fill(207, 186, 240);
  rect(120, 245, 150, height3);
  fill(255, 255, 255);
  rect(225, 245+10, 35, 25);
  fill('black');
  text('8:00', 225+7, 255+17);
  text('Pick up breakfast', 120+10, 245 + 30);
  pop();
  pop();
  
  
  // T4 - Class
  push();
  fill(142, 236, 245);
  rect(120, 300, 150, 80);
  fill(255, 255, 255);
  rect(225, 310, 35, 25);
  fill('black');
  text('9:00', 225+7, 310+17);
  text('MS1', 120+20, 300 + 30)
  pop();
  
}