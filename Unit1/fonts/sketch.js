let f1, f2;

function setup() {
  createCanvas(500, 500);
  f1 = loadFont("assets/BreatheFire.otf");
  f2 = loadFont("assets/OverThere.ttf");
  textAlign(CENTER);
}

function draw() {
  background("black");
  fill("white");
  textFont(f1, 48) ;
  text("The Lord of the Rings", width/2, 100);
  textFont(f2, 12);
  text("The Fellowship of the Ring", width/2, 150);
}
