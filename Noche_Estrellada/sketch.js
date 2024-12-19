let particles = [];
let img;
let vortexCenters = [];
let palette1 = ['#C5F3DFff', '#D0E190ff', '#1F3C2Bff', '#AAE4FAff', '#AAD7D4ff', '#E4C754ff', '#AED69Aff', '#4F81A6ff', '#E1F7E0ff'];
let palette2 = ['#D4E1C6ff','#E5DD8Aff', '#B3C198ff', '#F0DD53ff', '#E1FFFFff', '#B6D8F1ff', '#72A5BEff', '#F9E769ff', 'F5FEF2ff', '#E7DA60ff'];

let palette3 = ['#0A2E46ff', '#4B769Cff', '#90BCD7ff', '#F5FFFFff', '#E4EBDFff', '#5E8FB7ff', '#AFCBBBff', '#9FCAE0ff', '#BADEE8ff', '#DBF3EAff'];

let palette =[];

function preload() {
  // Carga la imagen de la noche estrellada (ajustar nombre si es necesario)
  img = loadImage('noche_estrellada.jpeg');
}

function setup() {
  createCanvas(img.width, img.height);
  imageMode(CENTER);
  console.log(mouseX, mouseY);

  //// vortex positions 
  //Stars at moon level
  vortexCenters.push({ center: createVector(52, 18), size: 35 }); 
  vortexCenters.push({ center: createVector(130, 16), size: 20 }); 
  vortexCenters.push({ center: createVector(202, 15), size: 30 }); 
  vortexCenters.push({ center: createVector(239, 29), size: 20 }); 
  vortexCenters.push({ center: createVector(133, 84), size: 35 });  
  vortexCenters.push({ center: createVector(363, 36), size: 35 }); 
  vortexCenters.push({ center: createVector(363, 36), size: 35 }); 
  vortexCenters.push({ center: createVector(421, 106), size: 35 }); 
  
  ////Moon
  vortexCenters.push({ center: createVector(549, 76), size: 104 }); 
  vortexCenters.push({ center: createVector(549, 76), size: 108 }); 
  vortexCenters.push({ center: createVector(549, 76), size: 96 }); 
  vortexCenters.push({ center: createVector(549, 76), size: 100 }); 
  vortexCenters.push({ center: createVector(549, 76), size: 102 }); 
  vortexCenters.push({ center: createVector(549, 76), size: 106 }); 
  
  //Stars below the moon
  vortexCenters.push({ center: createVector(184, 156), size: 20 }); 
vortexCenters.push({ center: createVector(207, 256), size: 50 }); 
  vortexCenters.push({ center: createVector(20, 221), size: 15 }); 
  
  vortexCenters.push({ center: createVector(71, 236), size: 20 }); 
  
  
  ////spirals in the middle 
  vortexCenters.push({ center: createVector(421, 213), size: 55 }); 
  vortexCenters.push({ center: createVector(286, 159), size: 100 }); 
  vortexCenters.push({ center: createVector(286, 159), size: 95 }); 
  vortexCenters.push({ center: createVector(344, 153), size: 50 }); 
  vortexCenters.push({ center: createVector(256, 173), size: 50 }); 
  vortexCenters.push({ center: createVector(78, 65), size: 150 });
  vortexCenters.push({ center: createVector(78, 65), size: 130 });
  vortexCenters.push({ center: createVector(78, 65), size: 150 });
  
  
  // Crear partículas para cada vórtice
  for (let i = 0; i < 100; i++) {
    let randomVortex = random(vortexCenters); // Selecciona un centro de vórtice aleatoriamente
    particles.push(new Particle(randomVortex.center.x, randomVortex.center.y, randomVortex.size));
  }
}

function draw() {
  // Dibuja la imagen de fondo
  image(img, width / 2, height / 2, width, height);

  // Actualizar y dibujar partículas
  for (let particle of particles) {
    particle.update();
    particle.show();
  }
}

// Clase Particle para simular las partículas en el vórtice
class Particle {
  constructor(x, y, vortexSize) {
    this.vortexCenter = createVector(x, y); // Centro del vórtice
    this.angle = random(TWO_PI); // Ángulo de rotación inicial
    this.radius = random(vortexSize / 2, vortexSize); // Radio en base al tamaño del vórtice
    this.speed = random(0.02, 0.05); // Velocidad de rotación
    if (y < 150) {
      this.color = random(palette2); // Color de la partícula
    }
    else if (y>150) {
      this.color = random(palette3); // Color de la partícula
    }

  }

  update() {
    // Movimiento de las partículas en torno al centro del vórtice
    this.angle += this.speed;
    this.pos = createVector(
      this.vortexCenter.x + cos(this.angle) * this.radius,
      this.vortexCenter.y + sin(this.angle) * this.radius
    );
  }

  show() {
    noStroke();
    fill(random(palette3));
    ellipse(this.pos.x, this.pos.y, 3.5); // Dibuja cada partícula
  }
}
