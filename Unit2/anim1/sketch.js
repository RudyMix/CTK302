let x = 0;

let f1;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/BreatheFire.otf");
}

function draw() {
  background(100);
  textFont(f1, 48);
  text("Unit 2 RULES", x, 200);
  x += 5;

  if (x > width) {
    x = -250;
  }
}
