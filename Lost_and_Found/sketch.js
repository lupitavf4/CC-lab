function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  //Background 
  push();
  noStroke();
  fill(234, 228, 233);
  rect(0,0, width, 50);
  
  fill(255, 241, 230);
  rect(0,50, width, 50);
  
  fill(253, 226, 228);
  rect(0,100, width, 50);
  
  fill(250, 210, 225);
  rect(0, 150, width, 50);
  
  fill(226, 236, 233);
  rect(0,200, width, 50);
  
  fill(190, 225, 230);
  rect(0,250, width, 50);
  
  fill(240, 239, 235);
  rect(0,300, width, 50);
  
  fill(223, 231, 253);
  rect(0, 350, width, 50);
  pop();
  
  //Tin
  push();
  rotate(TWO_PI/40);
  translate(20, -30);
  noStroke();
  fill(240,255,255);
  ellipse(200, 180, 200, 150);
  ellipse(200, 170, 200, 150);
  ellipse(200, 160, 200, 150);
  ellipse(200, 190, 200, 150);
  ellipse(200, 200, 200, 150);
  ellipse(200, 210, 200, 150);
  fill(90, 90, 90);
  ellipse(200, 150, 200, 150);
  fill(5, 5, 5);
  ellipse(200, 173, 180, 100);
  pop();
  
  //Coins
  push();
  rotate(TWO_PI/40);
  translate(50, -30);
  noStroke();
  fill(205,133,63);
  ellipse(210, 195, 20, 15);
  ellipse(200, 180, 20, 15);
  
  fill(192,192,192);
  ellipse(180, 180, 20, 15);
  ellipse(210, 190, 20, 15);
  
  fill(192,192,192);
  ellipse(220, 170, 20, 15);
  ellipse(190, 185, 20, 15);
  
  fill(205,133,63);
  ellipse(200, 177, 20, 15);
  ellipse(215, 185, 20, 15);
  pop();
  
  //Tickets
  push(); 
  rotate(TWO_PI/20);
  translate(120, 10);
  scale(0.4);
  push();
  fill(248,249,250);
  rect((width*(1-1/5)/2), height/4, width/5, height/2, 5);
  fill(69, 123, 157);
  rect((width*(1-1/5)/2)+10, height/4+125, width/40, height/6, 5)
  rect((width*(1-1/5)/2)+30, height/4+125, width/40, height/6, 5)
  rect((width*(1-1/5)/2)+50, height/4+125, width/40, height/6, 5)    
  rect(165, 107, 70, 10, 5)
  pop();
  
  
  //Plane
  push(); 
  scale(0.18);
  rotate(-TWO_PI/10);
  translate(180, 1200);
  push();
  rotate(-TWO_PI/20);
  translate(-50, 10);
  fill(69, 123, 157);
  rect(50, 120, width/8, height/5, 5, 100, 5, 10);
  pop();
  
  fill(248,249,250);
  rect(50,180, 300, 60, 20);
  
  fill(248,249,250);
  fill(69, 123, 157);
  rect(200, 200, width/8, height/5, 5, 5, 100, 10);
  
  fill(5,5,5);
  rect(80, 200, 20, 20, 5, 5,);
  rect(80 + 30, 200, 20, 20, 5, 5,);
  rect(80 + 60, 200, 20, 20, 5, 5,);
  rect(80 + 90, 200, 20, 20, 5, 5,);
  rect(80 + 190, 200, 20, 20, 5, 5,);
  rect(80 + 220, 200, 20, 20, 5, 5,);
  pop();
  pop();
  
  push(); 
  rotate(-TWO_PI/20);
  translate(70, 250);
  scale(0.25);
  push();
  rotate(-TWO_PI/20);
  translate(-50, 10);
  fill(69, 123, 157);
  rect(50, 120, width/8, height/5, 5, 100, 5, 10);
  pop();
  
  fill(248,249,250);
  rect(50,180, 300, 60, 20);
  
  fill(69, 123, 157);
  rect(200, 200, width/8, height/5, 5, 5, 100, 10);
  
  fill(5,5,5);
  rect(80, 200, 20, 20, 5, 5,);
  rect(80 + 30, 200, 20, 20, 5, 5,);
  rect(80 + 60, 200, 20, 20, 5, 5,);
  rect(80 + 90, 200, 20, 20, 5, 5,);
  rect(80 + 190, 200, 20, 20, 5, 5,);
  rect(80 + 220, 200, 20, 20, 5, 5,);
  pop();
  
   push(); 
  rotate(TWO_PI/5);
  translate(120, -260);
  scale(0.4);
  push();
  fill(248,249,250);
  rect((width*(1-1/5)/2), height/4, width/5, height/2, 5);
    fill(69, 123, 157);
  rect((width*(1-1/5)/2)+10, height/4+125, width/40, height/6, 5)
  rect((width*(1-1/5)/2)+30, height/4+125, width/40, height/6, 5)
  rect((width*(1-1/5)/2)+50, height/4+125, width/40, height/6, 5)    
  rect(165, 107, 70, 10, 5)
  pop();
  
  push(); 
  scale(0.18);
  rotate(-TWO_PI/10);
  translate(150, 1200);
  push();
  rotate(-TWO_PI/20);
  translate(-50, 10);
  fill(69, 123, 157);
  rect(50, 120, width/8, height/5, 5, 100, 5, 10);
  pop();
  
  fill(248,249,250);
  rect(50,180, 300, 60, 20);
  
  fill(248,249,250);
  fill(69, 123, 157);
  rect(200, 200, width/8, height/5, 5, 5, 100, 10);
  
  fill(5,5,5);
  rect(80, 200, 20, 20, 5, 5,);
  rect(80 + 30, 200, 20, 20, 5, 5,);
  rect(80 + 60, 200, 20, 20, 5, 5,);
  rect(80 + 90, 200, 20, 20, 5, 5,);
  rect(80 + 190, 200, 20, 20, 5, 5,);
  rect(80 + 220, 200, 20, 20, 5, 5,);
  pop();
  pop();
}