////Variables to control the levels 
let level = 0;
let gameState = "welcome"; // "welcome", "transition", "playing", "gameOver"
let transitionTimer = 0;
let transitionDuration = 120; // frames to show transition

////My character
let myCharacter;

////Variables for the horses - now using arrays
let horses = []; // Array to hold all horse objects
let distances = []; // Array to hold distances to each horse

//Variables to move the horses around a perimeter
let r1, r2 = 0;
let r_array = [];

////Variables for the treats 
let treats = []; // Array to hold all treat objects
let currentTreat; // To store the current treat to be caught

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
  
  ////Level Screens 
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
  initializeGame();
}

function initializeGame() {
  myCharacter = new MainCharacter(200, 200, 5);
  
  // Initialize horses array based on current level
  initializeHorses();
  
  currentTreat = new Treat(); // Create the first treat
  treats = []; // Clear treats array
  treats.push(currentTreat); // Add the first treat to the array
}

function initializeHorses() {
  horses = []; // Clear existing horses
  distances = []; // Clear distances array
  
  // Create horses based on current level (level determines number of horses)
  let numHorses = level;
  if (numHorses === 0) numHorses = 1; // Always have at least 1 horse
  
  for (let i = 0; i < numHorses; i++) {
    let startY = 140 + (i * 40); // Spread horses vertically
    let speed = 2 + i; // Each horse has different speed
    
    // Alternate between horse types
    if (i % 2 === 0) {
      horses.push(new Horse1(39, startY, speed));
    } else {
      horses.push(new Horse2(39, startY, speed));
    }
    
    distances.push(0); // Initialize distance for this horse
  }
}

function draw() {
  switch(gameState) {
    case "welcome":
      displayWelcomeScreen();
      break;
    case "transition":
      displayTransition();
      break;
    case "playing":
      playGame();
      break;
    case "gameOver":
      displayGameOver();
      break;
  }
}

function displayWelcomeScreen() {
  background(home_page);
  
  // Add welcome text overlay
  fill(255, 255, 255, 200);
  rect(50, 250, 300, 100);
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(24);
  text("HORSE TREAT COLLECTOR", width/2, 280);
  textSize(16);
  text("Collect treats while avoiding horses!", width/2, 310);
  text("Press SPACE to start", width/2, 330);
  
  if (keyIsPressed && key === ' ') {
    gameState = "transition";
    level = 1;
    transitionTimer = 0;
    score1 = 0;
    gameOver = false;
    initializeGame();
  }
}

function displayTransition() {
  // Choose background based on level
  if (level <= 33) {
    background(chihuahua_start);
  } else if (level <= 66) {
    background(cdmx_start);
  } else {
    background(nyc_start);
  }
  
  // Add level info overlay
  fill(0, 0, 0, 150);
  rect(0, 0, width, height);
  
  fill(255);
  textAlign(CENTER, CENTER);
  textSize(48);
  text("LEVEL " + level, width/2, height/2 - 30);
  
  textSize(20);
  let horsesInLevel = level; // Now each level = number of horses
  text(horsesInLevel + " horses to avoid!", width/2, height/2 + 20);
  
  textSize(16);
  text("Get ready...", width/2, height/2 + 50);
  
  transitionTimer++;
  if (transitionTimer >= transitionDuration) {
    gameState = "playing";
    transitionTimer = 0;
    // Reset main character position to center for new level
    myCharacter.x = 200;
    myCharacter.y = 200;
    // Initialize horses for the new level
    initializeHorses();
  }
}

function playGame() {
  if (!gameOver) {
    handleLevel();
    
    myCharacter.update();
    myCharacter.display();
    myCharacter.body();
    
    // Update all horses dynamically
    for (let i = 0; i < horses.length; i++) {
      horses[i].update();
      horses[i].display();
      distances[i] = dist(myCharacter.x, myCharacter.y, horses[i].x, horses[i].y);
    }

    // Check if the current treat is caught
    if (currentTreat.isCaught(myCharacter)) {
      treats.pop();
      currentTreat = new Treat();
      treats.push(currentTreat);
      score1++;

      // Check for level progression
      if (score1 % 10 === 0 && score1 > 0) {
        if (level < 99) {
          level++;
          gameState = "transition";
          transitionTimer = 0;
        }
      }
    }

    // Display all treats
    for (let treat of treats) {
      treat.display();
      treat.body();
    }

    displayScore();
    displayLevel();
  } else {
    gameState = "gameOver";
  }
}

function handleLevel() {
  // Choose background based on level range
  if (level <= 33) {
    background(background_chihuahua);
  } else if (level <= 66) {
    background(background_cdmx);
  } else {
    background(background_nyc);
  }
  
  // Check collisions with all horses
  for (let i = 0; i < distances.length; i++) {
    if (distances[i] < 30) {
      gameOver = true;
      break; // Exit loop early if collision detected
    }
  }
}

function getHorsesInLevel(lvl) {
  return lvl; // Each level has as many horses as the level number
}

class MainCharacter {
  constructor(startPosX, startPosY, charSpeed) {
    this.x = startPosX;
    this.y = startPosY;
    this.speed = 1.5 * charSpeed;
    this.size = 20;
    this.fillColor = color(255);
  }
  
  move(amtX, amtY) {
    let newX = this.x + (amtX * this.speed);
    let newY = this.y + (amtY * this.speed);
    
    // Boundary checking - keep character within canvas
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
    let characterType = getCharacterType(level);
    let currentSprite;
    
    // Determine which sprite set to use
    if (characterType === "pinto") {
      if (keyIsDown(DOWN_ARROW)) currentSprite = pinto_down;
      else if (keyIsDown(UP_ARROW)) currentSprite = pinto_up;
      else if (keyIsDown(LEFT_ARROW)) currentSprite = pinto_left;
      else if (keyIsDown(RIGHT_ARROW)) currentSprite = pinto_right;
      else currentSprite = pinto_down;
    } else if (characterType === "monet") {
      if (keyIsDown(DOWN_ARROW)) currentSprite = monet_down;
      else if (keyIsDown(UP_ARROW)) currentSprite = monet_up;
      else if (keyIsDown(LEFT_ARROW)) currentSprite = monet_left;
      else if (keyIsDown(RIGHT_ARROW)) currentSprite = monet_right;
      else currentSprite = monet_down;
    } else { // bruce
      if (keyIsDown(DOWN_ARROW)) currentSprite = bruce_down;
      else if (keyIsDown(UP_ARROW)) currentSprite = bruce_up;
      else if (keyIsDown(LEFT_ARROW)) currentSprite = bruce_left;
      else if (keyIsDown(RIGHT_ARROW)) currentSprite = bruce_right;
      else currentSprite = bruce_down;
    }
    
    image(currentSprite, this.x-30, this.y-30, currentSprite.width*.4, currentSprite.height*.4);
  }
  
  display() {
    // Display method can be used for debug purposes if needed
  }
}

function getCharacterType(lvl) {
  if (lvl <= 33) return "pinto";
  if (lvl <= 66) return "monet";
  return "bruce";
}

class Horse1 {
  constructor(startPosX, startPosY, charSpeed) {
    this.x = startPosX;
    this.y = startPosY;
    this.speed = charSpeed + (level * 0.1); // Horses get faster with level
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
    if (this.y > 360) {
      this.move(1, 0);
      image(generic_horse_1_right, this.x-30, this.y-30, generic_horse_1_right.width*.4, generic_horse_1_right.height*.4);
    }
    if (this.x > 360) {
      this.move(0, -1);
      image(generic_horse_1_up, this.x-30, this.y-30, generic_horse_1_up.width*.4, generic_horse_1_up.height*.4);
    }
    if (this.x < 40) {
      this.move(0, 1);
      image(generic_horse_1_down, this.x-30, this.y-30, generic_horse_1_down.width*.4, generic_horse_1_down.height*.4);
    }
  }
  
  display() {
    // Display handled in update for this class
  }
}

class Horse2 {
  constructor(startPosX, startPosY, charSpeed) {
    this.x = startPosX;
    this.y = startPosY;
    this.speed = charSpeed + (level * 0.1); // Horses get faster with level
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
    if (this.y > 360) {
      this.move(1, 0);
      image(generic_horse_2_right, this.x-30, this.y-30, generic_horse_2_right.width*.4, generic_horse_2_right.height*.4);
    }
    if (this.x > 360) {
      this.move(0, -1);
      image(generic_horse_2_up, this.x-30, this.y-30, generic_horse_2_up.width*.4, generic_horse_2_up.height*.4);
    }
    if (this.x < 40) {
      this.move(0, 1);
      image(generic_horse_2_down, this.x-30, this.y-30, generic_horse_2_down.width*.4, generic_horse_2_down.height*.4);
    }
  }
  
  display() {
    // Display handled in update for this class
  }
}

// Treat class to manage treat creation and interaction
class Treat {
  constructor() {
    r1 = random(10, 60);
    r2 = random(320, 390);
    r_array = [r1, r2];
    
    this.x = random(20, 380);
    
    // Make sure treats are placed around the edges
    if ((this.x > 60) && (this.x < 320)) {
      this.y = random(r_array);
    } else {
      this.y = random(20, 380);
    } 
    
    this.size = 10;
  }
  
  body() {
    let treatType = getTreatType(level);
    if (treatType === "apple") {
      image(treat_apple, this.x-20, this.y-20, treat_apple.width*.1, treat_apple.height*.1);
    } else if (treatType === "carrot") {
      image(treat_carrot, this.x-12, this.y-12, treat_carrot.width*.02, treat_carrot.height*.02);
    } else {
      image(treat_peppermint, this.x-20, this.y-20, treat_peppermint.width*.1, treat_peppermint.height*.1);
    }
  }
  
  display() {
    fill(0, 255, 0);
    ellipse(this.x, this.y, this.size);
  }
  
  isCaught(myCharacter) {
    let distanceT = dist(myCharacter.x, myCharacter.y, this.x, this.y);
    return (distanceT < 30);
  }
}

function getTreatType(lvl) {
  if (lvl <= 33) return "apple";
  if (lvl <= 66) return "carrot";
  return "peppermint";
}

function displayScore() {
  fill(255);
  textSize(20);
  textAlign(RIGHT, TOP);
  text("Score: " + score1, width - 20, 20);
}

function displayLevel() {
  fill(255);
  textSize(20);
  textAlign(LEFT, TOP);
  text("Level: " + level, 20, 20);
}

function displayGameOver() {
  // Choose game over screen based on level
  if (level <= 33) {
    background(gameOver_chihuahua);
  } else if (level <= 66) {
    background(gameOver_cdmx);
  } else {
    background(gameOver_nyc);
  }
  
  fill(255, 255, 255, 200);
  rect(50, 100, 300, 200);
  
  fill(0);
  textAlign(CENTER, CENTER);
  textSize(32);
  text("GAME OVER", width / 2, 150);
  
  textSize(24);
  text("Final Score: " + score1, width / 2, 190);
  text("Level Reached: " + level, width / 2, 220);
  
  textSize(16);
  text("Press SPACE to restart", width / 2, 260);
  
  if (keyIsPressed && key === ' ') {
    gameState = "welcome";
    level = 0;
    score1 = 0;
    gameOver = false;
  }
}
