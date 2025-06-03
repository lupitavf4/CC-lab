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
let showingTransition = false; // New variable for transition state
let transitionTimer = 0; // Timer for transition duration
let transitionDuration = 120; // 2 seconds at 60fps

////Variables for images
let horsey;
let pinto_up, pinto_down, pinto_left, pinto_right;
let monet_up, monet_down, monet_left, monet_right; 
let bruce_up, bruce_down, bruce_left, bruce_right;

let generic_horse_1_up, generic_horse_1_down, generic_horse_1_left, generic_horse_1_right;
let generic_horse_2_up, generic_horse_2_down, generic_horse_2_left, generic_horse_2_right;

let background_chihuahua, background_cdmx, background_nyc;
let backgroundImages = []; // Array to store all background images

let treat_apple, treat_carrot, treat_peppermint;

let gameOver_chihuahua, gameOver_cdmx, gameOver_nyc;

let nyc_start, chihuahua_start, cdmx_start;
let transitionImages = []; // Array to store transition images

let home_page; 

let font_bronco;

function preload() {
  font_bronco = loadFont('Autobiographical_Game/images/BroncoPersonalUse.ttf');
  
  ////Treats 
  treat_apple = loadImage('Autobiographical_Game/images/treat_apple.png');
  treat_carrot = loadImage('Autobiographical_Game/images/treat_carrot.png');
  treat_peppermint = loadImage('Autobiographical_Game/images/treat_peppermint.png');
  
  ////My Character: Pinto, Bruce, Monet
  //Pinto
  pinto_up = loadImage('Autobiographical_Game/images/pinto_up.png');
  pinto_down = loadImage('Autobiographical_Game/images/pinto_down.png');
  pinto_left = loadImage('Autobiographical_Game/images/pinto_left.png');
  pinto_right = loadImage('Autobiographical_Game/images/pinto_right.png');
  
  //Monet
  monet_up = loadImage('Autobiographical_Game/images/monet_up.png');
  monet_down = loadImage('Autobiographical_Game/images/monet_down.png');
  monet_left = loadImage('Autobiographical_Game/images/monet_left.png');
  monet_right = loadImage('Autobiographical_Game/images/monet_right.png');
  
  //Bruce
  bruce_up = loadImage('Autobiographical_Game/images/bruce_up.png');
  bruce_down = loadImage('Autobiographical_Game/images/bruce_down.png');
  bruce_left = loadImage('Autobiographical_Game/images/bruce_left.png');
  bruce_right = loadImage('Autobiographical_Game/images/bruce_right.png');
  
  ////Horses 
  generic_horse_1_up = loadImage('Autobiographical_Game/images/generic_horse1_up.png');
  generic_horse_1_down = loadImage('Autobiographical_Game/images/generic_horse1_down.png');
  generic_horse_1_left = loadImage('Autobiographical_Game/images/generic_horse1_left.png');
  generic_horse_1_right = loadImage('Autobiographical_Game/images/generic_horse1_right.png');
  
  generic_horse_2_up = loadImage('Autobiographical_Game/images/generic_horse_2_up.png');
  generic_horse_2_down = loadImage('Autobiographical_Game/images/generic_horse_2_down.png');
  generic_horse_2_left = loadImage('Autobiographical_Game/images/generic_horse_2_left.png');
  generic_horse_2_right = loadImage('Autobiographical_Game/images/generic_horse_2_right.png');
  
  ////Home Screen
  home_page = loadImage('Autobiographical_Game/images/home_image1.png');
  
  ////Transition Screens 
  nyc_start = loadImage('Autobiographical_Game/images/nyc_start.png');
  cdmx_start = loadImage('Autobiographical_Game/images/cdmx_start.png');
  chihuahua_start = loadImage('Autobiographical_Game/images/chihuahua_start.png');
  
  ////Backgrounds
  background_chihuahua = loadImage('Autobiographical_Game/images/background_chihuahua.png');
  background_cdmx = loadImage('Autobiographical_Game/images/background_cdmx.png');
  background_nyc = loadImage('Autobiographical_Game/images/background_nyc.png');
  
  ////Game Over screens 
  gameOver_chihuahua = loadImage('Autobiographical_Game/images/gameOver_chihuahua.png');
  gameOver_cdmx = loadImage('Autobiographical_Game/images/gameOver_cdmx_final.png'); 
  gameOver_nyc = loadImage('Autobiographical_Game/images/gameOver_nyc_final.png');
}

function setup() {
  textFont(font_bronco);
  createCanvas(400, 400);
  
  // Initialize background and transition image arrays
  backgroundImages = [background_chihuahua, background_cdmx, background_nyc];
  transitionImages = [chihuahua_start, cdmx_start, nyc_start];
  
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
    if (showingTransition) {
      displayTransition();
    } else {
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
        let previousLevel = level;
        
        // If caught, create a new treat and place it around the arena
        treats.pop(currentTreat);
        currentTreat = new Treat();
        treats.push(currentTreat); // Add to the array
        
        // Increment the score
        score1++;
        
        // Check if level changed and show transition
        let newLevel = calculateLevel(score1);
        if (newLevel != previousLevel && newLevel <= 99) {
          showingTransition = true;
          transitionTimer = 0;
        }

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
  }
  else {
    displayGameOver();
  }
}

function calculateLevel(score) {
  if (score < 10) return 1;
  else if (score < 20) return 2;
  else if (score < 30) return 3;
  else return Math.min(Math.floor(score / 10) + 1, 99);
}

function displayTransition() {
  transitionTimer++;
  
  // Choose random transition image
  let transitionImg = random(transitionImages);
  background(transitionImg);
  
  fill(255);
  textSize(48);
  textAlign(CENTER, CENTER);
  text(`LEVEL ${level}`, width / 2, height / 2);
  
  fill(255, 255, 255, 150);
  textSize(24);
  text("GET READY!", width / 2, height / 2 + 60);
  
  if (transitionTimer >= transitionDuration) {
    showingTransition = false;
    transitionTimer = 0;
  }
}

function handleLevel() {
  console.log(score1);
  let previousLevel = level;
  level = calculateLevel(score1);
  
  // Choose random background for levels 1-99
  let backgroundImg = random(backgroundImages);
  
  if (level == 0) {
    background(home_page);
  } else {
    background(backgroundImg);
    
    // Display level text
    textSize(32);
    fill(255);
    stroke(0);
    strokeWeight(2);
    textAlign(LEFT, TOP);
    text(`Level ${level}`, 20, 20);
    noStroke();
  }
  
  // Game logic based on level ranges
  if (level >= 1 && level < 10) {
    // Levels 1-9: Only myHorse0 active
    if (distance0 < 30) {
      gameOver = true;
    }
  } else if (level >= 10 && level < 20) {
    // Levels 10-19: myHorse0 and myHorse1 active
    myHorse1.display(); 
    myHorse1.update();
    if ((distance0 < 30) || (distance1 < 30)) {
      gameOver = true;
    }
  } else if (level >= 20 && level < 30) {
    // Levels 20-29: myHorse0, myHorse1, and myHorse2 active
    myHorse1.display();
    myHorse2.display();
    myHorse1.update();
    myHorse2.update();
    if ((distance0 < 30) || (distance1 < 30) || (distance2 < 30)) {
      gameOver = true;
    }
  } else if (level >= 30) {
    // Levels 30-99: All horses active
    myHorse1.display();
    myHorse2.display();
    myHorse3.display();
    myHorse1.update();
    myHorse2.update();
    myHorse3.update();
    if ((distance0 < 30) || (distance1 < 30) || (distance2 < 30) || (distance3 < 30)) {
      gameOver = true;
    }
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
    // Calculate new position
    let newX = this.x + (amtX * this.speed);
    let newY = this.y + (amtY * this.speed);
    
    // Check boundaries and only update if within canvas
    // Account for character sprite size (approximately 30px offset on each side)
    if (newX >= 30 && newX <= width - 30) {
      this.x = newX;
    }
    if (newY >= 30 && newY <= height - 30) {
      this.y = newY;
    }
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
    if (level >= 1 && level < 10){
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
    if (level >= 10 && level < 20){
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
    if (level >= 20){
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
    if (level >= 1 && level < 10) {
      image(treat_apple, this.x-20, this.y-20, treat_apple.width*.1, treat_apple.height*.1);
    }
    else if (level >= 10 && level < 20) {
      image(treat_carrot, this.x-12, this.y-12, treat_carrot.width*.02, treat_carrot.height*.02);
    }
    else if (level >= 20) {
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
  stroke(0);
  strokeWeight(2);
  textSize(24);
  textAlign(RIGHT, TOP);
  text("Score: " + score1, width - 20, 60); // Display score at the top right corner
  noStroke();
}

function displayGameOver() {
   // Dark background to signify the end
  
  if (level == 0) {
    text("Level 0 Score: "+ score1, width / 2, height / 2);
  }
  else if (level >= 1 && level < 10) {
    background(gameOver_chihuahua);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, -100 + height / 2);
    text("Score: "+ score1, width / 2, height / 2 +150 );
  }
  else if (level >= 10 && level < 20) {
    background(gameOver_cdmx);
    fill(0);
    textSize(32);
    textAlign(CENTER, CENTER);
    text("GAME OVER", width / 2, height / 2 - 100);
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
    showingTransition = false;
    transitionTimer = 0;
    level = 0;
    myCharacter.x = 200;
    myCharacter.y = 200;
  }
}
