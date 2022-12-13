let myCar;
let cars = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  noStroke();
}

function draw() {
  background(15, 150, 150);
  cars.push(new Car());

  for (let i = 0; i < cars.length; i++){
  cars[i].display();
  cars[i].move();
  if (cars[i].a <= 0){
    cars.splice(i, 1);
  }
  }
}

class Car {
  // constructor
  constructor() {
    this.pos = createVector(100, 100);
    this.vel = createVector(random(10), random(10));
    this.r = random(255);
    this.g = random(255);
    this.b = random(255);
    this.a = random(175, 255);
    this.s = random(15, 50);
  }

  // methods

  display() {
    fill(this.r, this.g, this.b, this.a);
    rect(this.pos.x, this.pos.y, this.s);
  }

  move() {
    this.pos.add(this.vel);
    this.a = this.a - 5;
  }
}
