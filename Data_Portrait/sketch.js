
let currentIndex = 0; // To track which value to add next
let delayFrames = 4.5; // Delay for 60 frames (1 second)
let timer = 0; // Frame counter

let total_rides = [2,2,2,2,3,1,1];
let total_usd = [5.8, 5.8, 5.8, 5.8, 8.7, 2.9, 2.1];
let spacer =  50;
let completion = 1;
let timer2 = 0;

let weekly_total_rides = 0; 
let weekly_total_rides_sum = 0;
let weekly_total_rides_text = 'test';
let weekly_total_usd = 0;

let colors = ['#0039a6', '#ff6319', '#6cbe45', '#a7a9ac', '#996633', '#fccc0a', '#ee352e']

let days = ['M', 'T', 'W', 'T', 'F', 'S', 'S']


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(255);
  
  
  timer2 += deltaTime/1000;
  if (timer2 >= completion){
    timer2 = completion;
  }
  
  // Only add the next value from the array after `delayFrames` frames have passed
  if (timer >= delayFrames) {
    if (currentIndex < total_rides.length) {
      weekly_total_rides += total_rides[currentIndex]; // Add the value
      weekly_total_usd += total_usd[currentIndex];
      currentIndex++; // Move to the next value in the array
    }
    timer = 0; // Reset the timer after adding a value
  }

  // Increment the timer
  timer++;
  
  push();
  scale(0.85);
  translate(40, 80);
  push();
  scale(0.5);
  translate(0, 300);
  push();
    let TimerMapper =  map(timer2, 0, completion, 0 , 1, true);
  for (i=0; i < total_rides.length; i++){
    noStroke();
    fill(colors[i]);
    circle((65+i*spacer), 40, 45);
    rect((50+i*spacer), 0, 30, -50*total_rides[i]*TimerMapper, 10); ////graphs of the rides
    rect((50+i*spacer), 370, 30, -30*total_usd[i]*TimerMapper, 10); ////graphs of the total price
    circle((65+i*spacer), 410, 45)
    textSize(30);
    fill(255);
    text(days[i], 53+i*spacer, 50);
    text(days[i], 53+i*spacer, 420);
    }
  pop();
  pop();

  fill(0);
  textSize(40);
  text('Rides', 220, 150);
  textSize(60);
  text(weekly_total_rides, 220, 100); // Display the total rides
  
  fill(0);
  textSize(40);
  text('USD', 220, 350);
  textSize(60);
  text(weekly_total_usd, 220, 300); // Display the total rides
  pop();
  
  push();
  fill(0);
  textSize(40);
  text('Subway expenses', 40, 80);
  pop();
  
  
}
