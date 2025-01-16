
////Variables to control the levels 
let level = 0;

////My character
let myCharacter;

////Variables for the horses
let myHorse0;
let myHorse1;
let myHorse2;
let myHorse3;
//Variables to move the horses around a perimeter
let r1, r2 = 0;
let r_array = [];

////Variables for the treats 
let treats = []; // Array to hold all treat objects
let currentTreat; // To store the current treat to be caught

let distance0, distance1, distance2, distance3, distanceT;
let score1 = 0; // Initialize the score
let gameOver = false;


////Variables for images
let horsey;
let pinto_up, pinto_down, pinto_left, pinto_right;
let monet_up, monet_down, monet_left, monet_right; 
let bruce_up, bruce_down, bruce_left, bruce_right;


let generic_horse_1_up, generic_horse_1_down, generic_horse_1_left, generic_horse_1_right;

let generic_horse_2_up, generic_horse_2_down, generic_horse_2_left, generic_horse_2_right;

let background_chihuahua, background_cdmx, background_nyc;

let treat_apple, treat_carrot, treat_peppermint;

let gameOver_chihuahua, gameOver_cdmx, gameOver_nyc;

let nyc_start, chihuahua_start, cdmx_start;

let home_page; 

let font_bronco;




function preload() {
  font_bronco = loadFont('images/BroncoPersonalUse.ttf');
  ////Treats 
  treat_apple = loadImage('images/treat_apple.png');
  treat_carrot = loadImage('images/treat_carrot.png');
  treat_peppermint = loadImage('images/treat_peppermint.png');
  
  ////My Character: Pinto, Bruce, Monet
  //Pinto
  pinto_up = loadImage('images/pinto_up.png');
  pinto_down = loadImage('images/pinto_down.png');
  pinto_left = loadImage('images/pinto_left.png');
  pinto_right = loadImage('images/pinto_right.png');
  
  //Monet
  monet_up = loadImage('images/monet_up.png');
  monet_down = loadImage('images/monet_down.png');
  monet_left = loadImage('images/monet_left.png');
  monet_right = loadImage('images/monet_right.png');
  
  //Bruce
  bruce_up = loadImage('images/bruce_up.png');
  bruce_down = loadImage('images/bruce_down.png');
  bruce_left = loadImage('images/bruce_left.png');
  bruce_right = loadImage('images/bruce_right.png');
  
  ////Horses 
  generic_horse_1_up = loadImage('images/generic_horse1_up.png');
  generic_horse_1_down = loadImage('images/generic_horse1_down.png');
  generic_horse_1_left = loadImage('images/generic_horse1_left.png');
  generic_horse_1_right = loadImage('images/generic_horse1_right.png');
  
  generic_horse_2_up = loadImage('images/generic_horse_2_up.png');
  generic_horse_2_down = loadImage('images/generic_horse_2_down.png');
  generic_horse_2_left = loadImage('images/generic_horse_2_left.png');
  generic_horse_2_right = loadImage('images/generic_horse_2_right.png');
  
  ////Home Screen
  home_page = loadImage('images/home_image1.png');
  
  ////Level Screens 
  nyc_start = loadImage('images/nyc_start.png');
  cdmx_start = loadImage('images/cdmx_start.png');
  chihuahua_start = loadImage('images/chihuahua_start.png');
  
  ////Backgrounds
  background_chihuahua = loadImage('images/background_chihuahua.png');
  background_cdmx = loadImage('images/background_cdmx.png');
  background_nyc = loadImage('images/background_nyc.png');
  
  ////
  
  ////Game Over screens 
  gameOver_chihuahua = loadImage('images/gameOver_chihuahua.png');
  gameOver_cdmx = loadImage('images/gameOver_cdmx_final.png'); 
  gameOver_nyc = loadImage('images/gameOver_nyc_final.png');
  
  
}

function setup() {
  textFont(font_bronco);
  createCanvas(400, 400);
  myCharacter = new MainCharacter(40, 40, 5);
  myHorse0 = new Horse1(39, 140, 2);
  myHorse1 = new Horse2(39, 180, 3);
  myHorse2 = new Horse1(39, 220, 5);
  myHorse3 = new Horse1(39, 300, 4);
  
  
  currentTreat = new Treat(); // Create the first treat
  
  // Add the first treat to the array
  treats.push(currentTreat);
}

function draw() {
  
  
  if (!gameOver) {

    // Call the function to handle the current level
    handleLevel();
    
    myCharacter.update();
    myCharacter.display();
    myCharacter.body();
    myHorse0.update();
    myHorse0.display();
    distance0 = dist(myCharacter.x, myCharacter.y, myHorse0.x, myHorse0.y);
    distance1 = dist(myCharacter.x, myCharacter.y, myHorse1.x, myHorse1.y);
    distance2 = dist(myCharacter.x, myCharacter.y, myHorse2.x, myHorse2.y);
    distance3 = dist(myCharacter.x, myCharacter.y, myHorse3.x, myHorse3.y);
    

    // Check if the current treat is caught
    if (currentTreat.isCaught(myCharacter)) {
      // If caught, create a new treat and place it around the arena
      treats.pop(currentTreat);
      currentTreat = new Treat();
      treats.push(currentTreat); // Add to the array
      
      // Increment the score
      score1++;

      // Optionally, you could add sound or visual effects here to indicate scoring
    }

    // Display all treats
    for (let treat of treats) {
      treat.display();
      treat.body();
    }

    // Display the score
    displayScore();
  }
  else {
    displayGameOver();
  }
}





function handleLevel() {
  console.log(score1);
  if ((score1 <10)){
    level = 1;
  }
  else if ((score1 >= 10) && (score1 <20)) { 
    level = 2;
  }
  else if ((score1 >= 20) && (score1 < 30)) {
    level = 3;
  }
  else if (score1 >= 30){
    level = 4;
  }
  
  switch (level) {
    case 0: 
      background(home_page);
    case 1:
      background(background_chihuahua);
      // Level 1 logic
      textSize(32);
      fill(0);
      text('Level 1', 150, 200);
      if (distance0 < 30) {
        gameOver = true;
      } 
      
      break;
    case 2:
      background(background_cdmx);
      // Level 2 logic
      myHorse1.display(); 
      myHorse1.update();
      textSize(32);
      fill(0);
      text('Level 2', 150, 200);
      if ((distance0 < 30) || (distance1 < 30)) {
        gameOver = true;
      }
      
      break;
    case 3:
      background(background_nyc);
      myHorse1.display();
      myHorse2.display();
      myHorse1.update();
      myHorse2.update();
      textSize(32);
      fill(0);
      text('Level 3', 150, 200);
      // Level 3 logic
      if ((distance0 < 30) || (distance1 < 30) || (distance2 < 30)){
        gameOver = true;
      }
      break;
    case 4:
      if ((distance0 < 30) || (distance1 < 30) || (distance2 < 30) || (distance3 < 30)) {
        gameOver = true;
      }
      background(background_nyc);
      myHorse1.display();
      myHorse2.display();
      myHorse3.display();
      myHorse1.update();
      myHorse2.update();
      myHorse3.update();
      textSize(32);
      fill(0);
      text('Level 4', 150, 200);
      break;
  }
}



class MainCharacter {
  constructor(startPosX, startPosY, charSpeed) {
    this.x = startPosX;
    this.y = startPosY;
    
    this.speed = 1.5*charSpeed;
    
    this.size = 20;
    
    this.fillColor = color(255);
  }
  
  move(amtX, amtY) {
    this.x += amtX * this.speed;
    this.y += amtY * this.speed;
  }
  
  update() {
    
    if (keyIsDown(LEFT_ARROW)) {
    this.move(-1, 0);
    }
    if (keyIsDown(RIGHT_ARROW)) {
      this.move(1, 0);
    }
    if (keyIsDown(UP_ARROW)) {
      this.move(0, -1);
    }
    if (keyIsDown(DOWN_ARROW)) {
      this.move(0, 1);
    }
  }
  
  body() {
    if (level == 1){
      if (keyIsDown(DOWN_ARROW)) {
      image(pinto_down, this.x-30, this.y-30, pinto_down.width*.4, pinto_down.height*.4);
    }
    else if (keyIsDown(UP_ARROW)) {
      image(pinto_up, this.x-30, this.y-30, pinto_up.width*.4, pinto_up.height*.4);
    }
    else if (keyIsDown(LEFT_ARROW)) {
    image(pinto_left, this.x-30, this.y-30, pinto_left.width*.4, pinto_left.height*.4);
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      image(pinto_right, this.x-30, this.y-30, pinto_right.width*.4, pinto_right.height*.4);
    }
    else {
      image(pinto_down, this.x-30, this.y-30, pinto_down.width*.4, pinto_down.height*.4);
    }
    }
    if (level == 2){
      if (keyIsDown(DOWN_ARROW)) {
      image(monet_down, this.x-30, this.y-30, monet_down.width*.4, monet_down.height*.4);
    }
    else if (keyIsDown(UP_ARROW)) {
      image(monet_up, this.x-30, this.y-30, monet_up.width*.4, monet_up.height*.4);
    }
    else if (keyIsDown(LEFT_ARROW)) {
    image(monet_left, this.x-30, this.y-30, monet_left.width*.4, monet_left.height*.4);
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      image(monet_right, this.x-30, this.y-30, monet_right.width*.4, monet_right.height*.4);
    }
    else {
      image(monet_down, this.x-30, this.y-30, monet_down.width*.4, monet_down.height*.4);
    }
    }
    if (level >= 3){
      if (keyIsDown(DOWN_ARROW)) {
      image(bruce_down, this.x-30, this.y-30, bruce_down.width*.4, bruce_down.height*.4);
    }
    else if (keyIsDown(UP_ARROW)) {
      image(bruce_up, this.x-30, this.y-30, bruce_up.width*.4, bruce_up.height*.4);
    }
    else if (keyIsDown(LEFT_ARROW)) {
    image(bruce_left, this.x-30, this.y-30, bruce_left.width*.4, bruce_left.height*.4);
    }
    else if (keyIsDown(RIGHT_ARROW)) {
      image(bruce_right, this.x-30, this.y-30, bruce_right.width*.4, bruce_right.height*.4);
    }
    else {
      image(bruce_down, this.x-30, this.y-30, bruce_down.width*.4, bruce_down.height*.4);
    }
    }
    
    
  }
  display() {
  }
}

class Horse1 {
  constructor(startPosX, startPosY, charSpeed) {
    this.x = startPosX;
    this.y = startPosY;
    
    this.speed = charSpeed;
    
    this.size = 20;
    
    this.fillColor = color(255);
  }
  
  move(amtX, amtY) {
    this.x += amtX * this.speed;
    this.y += amtY * this.speed;
  }
  
  update() {
    if (this.y < 40) {
      this.move(-1, 0);
      image(generic_horse_1_left, this.x-30, this.y-30, generic_horse_1_left.width*.4, generic_horse_1_left.height*.4);
    }
    if (this.y>360) {
      this.move(1, 0);
     image(generic_horse_1_right, this.x-30, this.y-30, generic_horse_1_right.width*.4, generic_horse_1_right.height*.4);
    }
    if (this.x>360) {
      this.move(0, -1);
     image(generic_horse_1_up, this.x-30, this.y-30, generic_horse_1_up.width*.4, generic_horse_1_up.height*.4);
    }
    if (this.x<40) {
      this.move(0, 1);
      image(generic_horse_1_down, this.x-30, this.y-30, generic_horse_1_down.width*.4, generic_horse_1_down.height*.4);
    }
  }
  
  display() {
  }
}

class Horse2 {
  constructor(startPosX, startPosY, charSpeed) {
    this.x = startPosX;
    this.y = startPosY;
    this.speed = charSpeed;
    this.size = 20;
    this.fillColor = color(255);
  }
  
  move(amtX, amtY) {
    this.x += amtX * this.speed;
    this.y += amtY * this.speed;
  }
  
  update() {
    if (this.y < 40) {
      this.move(-1, 0);
      image(generic_horse_2_left, this.x-30, this.y-30, generic_horse_2_left.width*.4, generic_horse_2_left.height*.4);
    }
    if (this.y>360) {
      this.move(1, 0);
     image(generic_horse_2_right, this.x-30, this.y-30, generic_horse_2_right.width*.4, generic_horse_2_right.height*.4);
    }
    if (this.x>360) {
      this.move(0, -1);
     image(generic_horse_2_up, this.x-30, this.y-30, generic_horse_2_up.width*.4, generic_horse_2_up.height*.4);
    }
    if (this.x<40) {
      this.move(0, 1);
      image(generic_horse_2_down, this.x-30, this.y-30, generic_horse_2_down.width*.4, generic_horse_2_down.height*.4);
    }
  }
  
  display() {
  }
}

// Treat class to manage treat creation and interaction
class Treat {
  constructor() {
    // Randomly place treat around the perimeter of the arena
    r1 = random(10, 60);
    r2 = random(320, 390);
    r_array.push(r1);
    r_array.push(r2);
    
    this.x = random(20, 380);
    
    
    
    // Make sure treats are placed around the edges
    if ((this.x > 60) || (this.x < 320)) {
      this.y = random(r_array); // Left side
    } else {
      this.y = random(20, 380); // Right side
    } 
    
    this.size = 10; // Treat size
  }
  body() {
    if (level == 1) {
    image(treat_apple, this.x-20, this.y-20, treat_apple.width*.1, treat_apple.height*.1);
  }
  else if (level == 2) {
    image(treat_carrot, this.x-12, this.y-12, treat_carrot.width*.02, treat_carrot.height*.02);
  }
  else if (level == 3) {
    image(treat_peppermint, this.x-20, this.y-20, treat_peppermint.width*.1, treat_peppermint.height*.1);
  }
  else {
    image(treat_peppermint, this.x-20, this.y-20, treat_peppermint.width*.1, treat_peppermint.height*.1);
  }
  }
  
  display() {
    fill(0, 255, 0);
    ellipse(this.x, this.y, this.size);
  }
  
  isCaught(myCharacter) {
    
    distanceT = dist(myCharacter.x, myCharacter.y, currentTreat.x, currentTreat.y);
  
  
  if ((distanceT < 30)) {
    return true;
  }
    return false;
  }
}

// Function to display the score
function displayScore() {
  fill(255);
  textSize(32);
  textAlign(RIGHT, TOP);
  text("Score: " + score1, width - 20, 20); // Display score at the top right corner
}

function displayGameOver() {
   // Dark background to signify the end
  
  if (level == 0) {
    
    text("Level 0 Score: "+ score1, width / 2, height / 2);
  }
  else if (level == 1) {
    background(gameOver_chihuahua);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, -100 + height / 2);
    text("Score: "+ score1, width / 2, height / 2 +150 );
  }
  else if (level == 2) {
    background(gameOver_cdmx);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2 - 100);
    text("GAME OVER", width / 2, -100 + height / 2);
    text("Score: "+ score1, width / 2, height / 2 -70 );
  }
  else if (level == 3) {
    background(gameOver_nyc);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, -100 + height / 2);
    text("Score: "+ score1, width / 2, height / 2 -70 );
  }
  else {
    background(gameOver_nyc);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, -100 + height / 2);
    text("Score: "+ score1, width / 2, height / 2 -70 );
  }
  
  fill(0);
  textSize(16);
  text("Press Space to Restart", width / 2, height / 2 -130);
  if ((gameOver) && (keyIsDown(32))) {
    score1 = 0;
    gameOver = false; 
    myCharacter.x = 200;
    myCharacter.y = 200;
}
}